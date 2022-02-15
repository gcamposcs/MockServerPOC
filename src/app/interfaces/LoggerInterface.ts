export interface LoggerInterface {
    setup(file: string): void
    info(message: any, ...args: any[]): void
    debug(message: any, ...args: any[]): void
    error(message: any, ...args: any[]): void
    fatal(message: any, ...args: any[]): void
  }