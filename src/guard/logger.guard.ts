import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LoggerGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Add your custom logic here to determine whether the request should be allowed or not
    const request = context.switchToHttp().getRequest();
    // console.log(request);
    return true;
  }
}
