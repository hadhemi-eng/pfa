import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/user/user.model';
import { AuthService } from './auth.service';
import { LoginUser } from './dto/login-user.dto';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  async login(@Args('loginUser') loginUserDTo: LoginUser) {
    const { email, password } = loginUserDTo;
    await this.authService.login(email, password);
  }
}
