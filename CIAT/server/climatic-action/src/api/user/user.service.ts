import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly dataSource: DataSource) {}

  create(createUserDto: CreateUserDto) {
    return this.dataSource.getRepository(User).save(createUserDto);
  }

  findAll() {
    return this.dataSource
      .getRepository(User)
      .find()
      .catch((err) => ({ data: null, error: err }));
  }

  findOne(id: number) {
    return this.dataSource
      .getRepository(User)
      .findOne({
        where: {
          id: id,
        },
      })
      .catch((err) => ({ data: null, error: err }));
  }

  update(id: number, updateUserDto: CreateUserDto) {
    return this.dataSource
      .getRepository(User)
      .update(id, {
        first_name: updateUserDto.first_name,
        last_name: updateUserDto.last_name,
      })
      .catch((err) => ({ data: null, error: err }));
  }

  remove(id: number) {
    return this.dataSource
      .getRepository(User)
      .delete(id)
      .catch((err) => ({ data: null, error: err }));
  }
}
