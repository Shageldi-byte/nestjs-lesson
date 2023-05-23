import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AccessKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Add your custom logic here to determine whether the request should be allowed or not
    const request = context.switchToHttp().getRequest();
    // Example: Check if the request has a valid API key
    const apiKey = request.headers['api-key'];
    const isValid = apiKey === 'abc123';

    return isValid;
  }
}
