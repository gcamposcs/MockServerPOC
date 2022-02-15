/* eslint-disable import/first  */
/* eslint-disable import/order */
import dotenv from 'dotenv'
import { resolve } from 'path'
import 'reflect-metadata'
import { ExpressInversify } from './infra/express-inversify/ExpressInversify'

if (process.env.ENV_FILE) {
  dotenv.config({
    path: resolve(__dirname, `../environment/.env-${process.env.ENV_FILE}`),
  })
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: string) {
  const port = parseInt(val, 10)

  if (Number.isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Bootstrap
 */
;(async () => {
  if (process.env.ENV_FILE) {
    dotenv.config({
      path: resolve(__dirname, `../environment/.env-${process.env.ENV_FILE}`),
    })
  }

  const expressInversify = new ExpressInversify()

  const port = normalizePort(process.env.PORT || '3001')
  expressInversify.application.listen(port)

  /* eslint-disable */
  console.log(`Listening on ${port}`)
  /* eslint-enable */
})()