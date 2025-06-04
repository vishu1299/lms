import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { Role, User } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { GetUsersDto } from './dto/get-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /*Get All Users*/
  @Get()
  findAll(@Query() getUsersDto: GetUsersDto, @GetUser() authUser: User) {
    return this.userService.findAll(getUsersDto, authUser);
  }

  /*Auth User*/
  @Get('me')
  getOwnProfile(@GetUser() authUser: User) {
    return this.userService.getOwnProfile(authUser);
  }

 

 
  @Post()
  @UseGuards(RolesGuard)
  @Roles(Role.SUPER_ADMIN)



  addUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.addUser(createUserDto);
  }

  @Patch('active-switch/:id')
  @UseGuards(RolesGuard)
  @Roles(Role.SUPER_ADMIN)
  userToggleStatus(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.userToggleStatus(id);
  }

  @Get(':id')
  getUser(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.getUser(id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.SUPER_ADMIN)
  updateUser(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles(Role.SUPER_ADMIN)
  deleteUser(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.userService.deleteUser(id);
  }
}
