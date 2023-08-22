/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user/user.service';
import { Observable, of } from 'rxjs';
import { CreateUserDto } from './model/dto/create-user-dto'; // Assuming this import is correct

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Observable<boolean> {
    return of(true);
  }
}
