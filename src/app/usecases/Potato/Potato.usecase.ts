// TODO: this is an example, please delete me!
import { inject, injectable } from 'inversify'
import 'reflect-metadata'
import { PotatoEntity } from '../../../domain/PotatoEntity.domain'
import { InjectionEnum } from '../../Injection.enum'
import { LoggerInterface } from '../../interfaces/LoggerInterface'
import { PotatoUseCaseInterface } from '../../interfaces/PotatoInterface'

@injectable()
export class PotatoUseCase implements PotatoUseCaseInterface {
  constructor(
    @inject(InjectionEnum.Logger)
    private logger: LoggerInterface,
  ) {
    logger.setup('ManipulateExampleEntity.usecase')
  }

  execute(PotatoEntity: PotatoEntity): PotatoEntity {
    this.logger.info(`Called 'execute' manipulate example entity: ${JSON.stringify(PotatoEntity)}`)
    return PotatoEntity
  }
}
