import { SetMetadata } from '@nestjs/common';
import { ROLES } from '../constants';

export const ROLE_KEY = 'roles';
export const Roles = (...roles: ROLES[]) => SetMetadata(ROLE_KEY, roles);
