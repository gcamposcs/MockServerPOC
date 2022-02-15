// TODO: this is an example, please delete me!
import { PotatoEntity } from '../../domain/PotatoEntity.domain'

export interface PotatoUseCaseInterface {
  execute(PotatoEntity: PotatoEntity): PotatoEntity
}