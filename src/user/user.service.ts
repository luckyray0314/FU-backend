import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions, DeleteResult } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(data: CreateUserDto): Promise<User> {
    const createdUser = await this.userRepository.save(data);
    delete createdUser?.password;
    return createdUser;
  }

  async findOne(where: FindOneOptions<User>): Promise<User> {
    const user = await this.userRepository.findOne(where);

    if (!user) {
      throw new NotFoundException(
        `There isn't any user with identifier: ${where}`,
      );
    }
    return user;
  }

  async findAll(): Promise<User[]> {
    const [users, count] = await this.userRepository.findAndCount();
    return users;
  }

  async findById(id: number): Promise<User> {
    const user: User = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`There isn't any user with id: ${id}`);
    }
    delete user?.password;
    return user;
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`There isn't any user with id: ${id}`);
    }

    this.userRepository.merge(user, data);

    const updatedUser = await this.userRepository.save(user);

    delete updatedUser?.password;

    return updatedUser;
  }

  async delete(id: number): Promise<DeleteResult> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`There isn't any user with id: ${id}`);
    }

    const deletedUser = await this.userRepository.delete({ id });

    return deletedUser;
  }
}
