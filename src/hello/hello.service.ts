import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello World!';
  }

  getViewName(): string {
    return 'index'; // 뷰 파일이름
  }

  getTest(): string {
    return 'test';
  }
}
