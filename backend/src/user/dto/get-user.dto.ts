import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional,  Min } from 'class-validator';

import { SortingValue } from '../../common/enum/sorting-value.enum';
import { UsersSortingFieldEnum } from '../enum/users-sorting-field.enum';
import { Role } from '@prisma/client';

export class GetUsersDto {
  @IsOptional()
  @IsEnum(UsersSortingFieldEnum)
  sortField: UsersSortingFieldEnum = UsersSortingFieldEnum.CREATED_AT;

  @IsOptional()
  @IsEnum(SortingValue)
  sortValue: 'asc' | 'desc' = 'desc';

  @IsOptional()
  filter: [{ id: 'role'; value: Role[] }, { id: 'email'; value: string }];

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => +value)
  page: number = 1;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => +value)
  limit: number = 10;
}
