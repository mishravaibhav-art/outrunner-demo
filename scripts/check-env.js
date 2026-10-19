// Fails the build when required environment variables are missing.
// Reads .env if present (same file Vite uses) and prints only names and set/missing, never values.
import { existsSync, readFileSync } from 'node:fs'

const fromFile = {}
if (existsSync('.env')) {
  for (const line of readFileSync('.env', 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/)
    if (match && match[2]) fromFile[match[1]] = match[2]
  }
}
const isSet = (name) => Boolean(process.env[name] || fromFile[name])

const required = ['VITE_API_URL']
const optional = ['VITE_APP_NAME', 'DEMO_SECRET']

for (const name of [...required, ...optional]) {
  console.log(`${isSet(name) ? 'set    ' : 'missing'}  ${name}`)
}

const missing = required.filter((name) => !isSet(name))
if (missing.length) {
  console.error(`\nMissing required env: ${missing.join(', ')}. Copy .env.example to .env and fill it in.`)
  process.exit(1)
}
