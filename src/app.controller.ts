import { Controller, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getHelloPost(): string {
    return this.appService.getHelloPost();
  }

  @Put()
  getHelloPut(): string {
    return this.appService.getHelloPut();
  }
  @Patch()
  getHelloPatch(): string {
    return this.appService.getHelloPatch();
  }
}
