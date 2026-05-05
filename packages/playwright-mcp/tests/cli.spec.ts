/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import child_process from 'child_process';
import path from 'path';
import { test, expect } from './fixtures';

const cliPath = path.resolve(__dirname, '..', 'cli.js');

test('install-browser --help', async () => {
  const output = child_process.execSync(`node ${cliPath} install-browser --help`, { encoding: 'utf-8' });
  expect(output).toContain('install');
});

async function startCliServer(port: number): Promise<child_process.ChildProcess> {
  const cp = child_process.spawn('node', [cliPath, `--port=${port}`, '--headless'], {
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  let stderr = '';
  await new Promise<void>((resolve, reject) => {
    cp.stderr?.on('data', data => {
      stderr += data.toString();
      if (stderr.includes('Listening on'))
        resolve();
    });
    cp.on('exit', () => reject(new Error(`CLI exited before startup. stderr:\n${stderr}`)));
  });

  return cp;
}

test('root endpoint returns 400', async () => {
  const port = 9410;
  const cp = await startCliServer(port);
  try {
    const response = await fetch(`http://localhost:${port}/`);
    expect(response.status).toBe(400);
  } finally {
    cp.kill('SIGTERM');
  }
});

test('unknown path returns 400', async () => {
  const port = 9411;
  const cp = await startCliServer(port);
  try {
    const response = await fetch(`http://localhost:${port}/favicon.ico`);
    expect(response.status).toBe(400);
  } finally {
    cp.kill('SIGTERM');
  }
});
