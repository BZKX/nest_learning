import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getTestUrl(){
    return '<a href="http://www.baidu.com" target="_blank">百度</a>';
  }
}
