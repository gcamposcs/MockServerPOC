import { injectable } from 'inversify'
import * as log4js from 'log4js'
import 'reflect-metadata'
import { LoggerInterface } from '../../app/interfaces/LoggerInterface'

@injectable()
export class Logger implements LoggerInterface {
  private logger: log4js.Logger

  constructor() {
    log4js.configure({
      appenders: {
        console: { type: 'console' },
      },
      categories: {
        default: { appenders: ['console'], level: 'info' },
      },
    })
  }

  public setup(file: string) {
    this.logger = log4js.getLogger(file)
  }

  public debug(message: any, ...args: any[]) {
    this.logger.debug(message, ...args)
  }

  public info(message: any, ...args: any[]) {
    this.logger.info(message, ...args)
  }

  public error(message: any, ...args: any[]) {
    this.logger.error(message, ...args)
  }

  public fatal(message: any, ...args: any[]) {
    this.logger.fatal(message, ...args)
  }
}
