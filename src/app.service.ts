import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloPost(): string {
    return 'Hello World post!';
  }
  getHelloPut(): string {
    return 'Hello World put!';
  }
  getHelloPatch(): string {
    return 'Hello World patch!';
  }
}
