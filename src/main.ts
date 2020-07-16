import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule , DocumentBuilder } from '@nestjs/swagger';
import { doc } from 'prettier';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()

  const options = new DocumentBuilder()
    .setTitle('nest.js 学习之路')
    .setDescription('朱某人自学nest.js')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app,options)
  SwaggerModule.setup('api',app,document)

  await app.listen(3000);
  console.log('项目已启动: http://localhost:3000 , 文档地址: http://localhost:3000/api')
}

bootstrap();
