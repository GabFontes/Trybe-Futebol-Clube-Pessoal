import Users from '../../database/models/Users';
import { ILogin, LoginParams, User } from '../../interfaces/ILogin';
import { jwtSign } from '../../helpers/jwtToken';
import PassValid from '../../helpers/EncryptedPassValidation';

class LoginUseCase {
  private model: typeof Users;

  constructor() {
    this.model = Users;
  }

  async login({ email, password }: LoginParams): Promise<ILogin> {
    const user: User | null = await this.model.findOne({ where: { email } });
    console.log(user);

    if (!user) {
      throw new Error('Incorrect Email or Password');
    }

    if (user.password && !PassValid(password, user.password)) {
      throw new Error('Incorrect Email or Password');
    }

    const { id, username, role } = user;
    const token = jwtSign({ id, username, role, email });
    return { user: { id, username, role, email }, token };
  }
}

export default new LoginUseCase();
