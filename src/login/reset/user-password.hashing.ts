import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;
const password = 'random_password';
const salt = bcrypt.genSaltSync(saltOrRounds);
const hash = bcrypt.hashSync(password, saltOrRounds);
const isMatch = bcrypt.compareSync(password, hash);
