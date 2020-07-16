import { Controller, Get,Post, HttpCode, Req } from '@nestjs/common';
import { TestService } from './test.service';
import {Request} from '@nestjs/common';

@Controller('test')
export class TestController {
  constructor(private readonly testService : TestService) {}

  @Get()
  @HttpCode(200)
  defaultTestGet():string{
    console.log('Get ===> /test');
    return 'this is a Post/Get defaultTestGet'
  }

  @Get('/admin')
  @HttpCode(200)
  testController(@Req()request:Request):string{
    console.log('Get ===> /test/admin');
    return this.testService.getTestUrl()
  }

  @Post()
  @HttpCode(200)
  testPost():object{
    console.log('Post ===> /test');
    return {
      code:0,
      msg:'请求成功'
    }
  }

  @Get('*')
  test():string{
    console.log('Get ===> /test/*');
    return '132'
  }
}
