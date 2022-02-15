/* eslint-disable */
import glob from 'glob'
(() => {
  const files = glob.sync('./**/*controller.@(ts|js)', {
    cwd: __dirname,
  })

  files.forEach(async (fileName) => {
    await import(`${fileName}`)
  })
})()
