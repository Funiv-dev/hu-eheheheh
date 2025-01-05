import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello() {
    return this.helloService.getHello();
  }

  @Get('test')
  getTest() {
    return this.helloService.getTest();
  }
}
