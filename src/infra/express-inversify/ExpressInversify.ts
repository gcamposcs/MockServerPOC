import { json, urlencoded } from 'body-parser'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { Application } from 'express'
import actuator from 'express-actuator'
import helmet from 'helmet'
import { interfaces } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'
import 'reflect-metadata'
import './entrypoint'
import { Injection } from './Injection'

export class ExpressInversify {
  public application: Application

  private container: interfaces.Container

  constructor() {
    this.container = new Injection().container
    this.createServer()
  }

  private async createServer(): Promise<void> {
    const inversifyExpressServer = new InversifyExpressServer(this.container)

    inversifyExpressServer.setConfig((app: Application) => {
      app.use(urlencoded({ extended: true }))
      app.use(json())
      app.use(helmet())
      app.use(compression())
      app.use(cookieParser())
      app.use(
        actuator({
          basePath: '/actuator',
        }),
      )
      app.use(cors())
    })

    this.application = inversifyExpressServer.build()
  }
}
