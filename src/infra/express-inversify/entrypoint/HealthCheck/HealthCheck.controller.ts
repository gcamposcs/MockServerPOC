import { BaseHttpController, controller, httpGet, interfaces } from 'inversify-express-utils'

enum ServiceStatus {
  UP = 'up',
  DOWN = 'down',
}

@controller('/health')
export class HealthCheckController extends BaseHttpController implements interfaces.Controller {
  @httpGet('/')
  public async create() {
    try {
      return this.json({ status: ServiceStatus.UP }, 200)
    } catch (error) {
      return this.json({ status: ServiceStatus.DOWN, error }, 500)
    }
  }
}