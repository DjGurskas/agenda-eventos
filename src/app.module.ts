import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './login/module/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, 
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true,
  })], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
