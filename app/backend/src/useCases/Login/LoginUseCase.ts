import * as errors from 'restify-errors';
import Users from '../../database/models/Users';
import { ILogin, LoginParams, User } from '../../interfaces/ILogin';
import { jwtSign, jwtVerify } from '../../helpers/jwtToken';
import PassValid from '../../helpers/EncryptedPassValidation';

class LoginUseCase {
  private model: typeof Users;

  constructor() {
    this.model = Users;
  }

  async login({ email, password }: LoginParams): Promise<ILogin> {
    const user: User | null = await this.model.findOne({ where: { email } });

    if (!user) {
      throw new errors.UnauthorizedError('Incorrect Email or Password');
    }

    if (user.password && !PassValid(password, user.password)) {
      throw new errors.UnauthorizedError('Incorrect Email or Password');
    }

    const { id, username, role } = user;
    const token = jwtSign({ id, username, role, email });
    return { user: { id, username, role, email }, token };
  }

  async loginValidate(authorization: string) {
    if (!authorization) {
      throw new errors.UnauthorizedError('Invalid Token');
    }

    const payload = jwtVerify(authorization);

    const user = await this.model.findOne({ where: { id: payload.id } });
    return user?.role;
  }
}

export default new LoginUseCase();
