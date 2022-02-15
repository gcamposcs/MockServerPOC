import { Container, interfaces } from 'inversify'
import { InjectionEnum } from '../../app/Injection.enum'
import { PotatoUseCase } from '../../app/usecases/Potato/Potato.usecase'
import { Logger } from '../logger/Logger'
import { HealthCheckController } from './entrypoint/HealthCheck/HealthCheck.controller'

const injection = [Logger, PotatoUseCase, HealthCheckController]

export class Injection {
  public container: interfaces.Container

  constructor() {
    this.bindClass()
  }

  private bindClass(): void {
    this.container = new Container()

    injection.forEach((item) => {
      const accessString = item.toString().match(/\w+/g)![1]

      this.container.bind((<any>InjectionEnum)[accessString]!).to(item)
    })
  }
}