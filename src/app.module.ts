import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './login/module/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

require('dotenv').config({
  path: '.env'
})

@Module({
   imports: [ConfigModule.forRoot({
    envFilePath: ['.env'],
  }), UserModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(<string>process.env.DB_PORT),
    username: process.env.DB_NAME,
    password: process.env.DB_PASS,
    database: process.env.DB_USER,
    autoLoadEntities: true,
    synchronize: true,
    schema: "agenda"
  })], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
