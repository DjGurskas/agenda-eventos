import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';

@Injectable()
export class LoginService {
  constructor(
    /*@Inject()
    private idUserReset: idUserReset,*/
    @InjectRepository(Login)
    private userRepository: Repository<Login>
  ){}

  /*async resetUserPassword(payload: {
    email: string;
    password?: string;
  }): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { email: payload.email },
    });

    if (!user) {
      throw new NotFoundExceptionxception('Usuário não encontrado');
    }

    return await this.idUserReset.resetUserPasswordOnIDP({
      login: user.email,
      password: payload.password || Appconfig.defaultIdpPassword,
      uuidIdp: user.idpUuid,
    });
  }*/


  createLogin(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
