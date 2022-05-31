import * as bcrypt from 'bcryptjs';

const PassValid = (pass: string, hash: string): boolean => {
  const verified = bcrypt.compareSync(pass, hash);
  return verified;
};

export default PassValid;
