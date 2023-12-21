import path from "node:path"
import * as fs from  "node:fs"

import { exec } from "node:child_process"

const scriptToRun = process.argv[2]
const scriptPath = path.join(process.cwd(), "solutions", `${scriptToRun}.ts`)

if (fs.existsSync(scriptPath) && fs.lstatSync(scriptPath).isFile()) {
  exec(`node ${scriptPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }

    if (stdout) {
      console.log(stdout)
    }

    if (stderr) {
      console.error(stderr)
    }
  })
} else {
  console.error(`Script not found at ${scriptPath}`)
}