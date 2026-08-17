import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";
import test from "node:test";

const port = 3057;
const baseUrl = `http://127.0.0.1:${port}`;

function devServerCommand() {
  if (process.platform === "win32") {
    return {
      command: "cmd.exe",
      args: [
        "/d",
        "/s",
        "/c",
        `npm run dev -- --hostname 127.0.0.1 --port ${port}`,
      ],
    };
  }

  return {
    command: "npm",
    args: ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", String(port)],
  };
}

async function waitForServer(process) {
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    if (process.exitCode !== null) {
      throw new Error(`Next dev server exited with code ${process.exitCode}`);
    }

    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        return;
      }
    } catch {
      await delay(500);
    }
  }

  throw new Error("Next dev server did not become ready in time");
}

async function withServer(run) {
  const { command, args } = devServerCommand();
  const server = spawn(command, args, {
    cwd: process.cwd(),
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: "ignore",
  });

  try {
    await waitForServer(server);
    await run();
  } finally {
    stopServer(server);
    await Promise.race([once(server, "exit"), delay(5_000)]);
  }
}

function stopServer(server) {
  if (process.platform === "win32" && server.pid) {
    spawn("taskkill", ["/pid", String(server.pid), "/t", "/f"], {
      stdio: "ignore",
    });
    return;
  }

  server.kill();
}

test("portfolio renders the projects section in Portuguese and English", async () => {
  await withServer(async () => {
    const pt = await fetch(baseUrl).then((response) => response.text());
    const en = await fetch(`${baseUrl}/?lng=en`).then((response) =>
      response.text(),
    );

    assert.match(pt, /href="#projects"/);
    assert.match(pt, /Projetos/);
    assert.match(pt, /Sistema de Integrações/);
    assert.match(pt, /GitHub/);

    assert.match(en, /href="#projects"/);
    assert.match(en, /Projects/);
    assert.match(en, /Sistema de Integrações/);
  });
});
