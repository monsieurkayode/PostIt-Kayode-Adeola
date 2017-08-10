import bcrypt from 'bcrypt';

const hashPassword = (password) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const dbUsers = [
  {
    firstName: 'Patrick',
    lastName: 'Stewart',
    username: 'patsiizy',
    password: hashPassword('passover'),
    email: 'patzii@gmail.com',
  },

  {
    firstName: 'Spongebob',
    lastName: 'Squarepants',
    username: 'sponge',
    password: hashPassword('squarepants'),
    email: 'spongebob@gmail.com',
  },

  {
    firstName: 'Super',
    lastName: 'Mario',
    username: 'mariobros',
    password: hashPassword('princess'),
    email: 'mario@gmail.com',
  },

  {
    firstName: 'Jack',
    lastName: 'Frost',
    username: 'iceprince',
    password: hashPassword('frozen'),
    email: 'jackfrost@gmail.com',
  },

  {
    firstName: 'King',
    lastName: 'Kong',
    username: 'donkeykong',
    password: hashPassword('banana'),
    email: 'donkeybanaba@gmail.com',
  },

  {
    firstName: 'Optimus',
    lastName: 'Prime',
    username: 'optimusalpha',
    password: hashPassword('passover'),
    email: 'primealpha@gmail.com',
  },
];

const testValidUsers = [
  {
    firstName: 'Patrick',
    lastName: 'Stewart',
    username: 'patsiizy',
    password: 'passover',
    email: 'patzii@gmail.com',
  },

  {
    firstName: 'Spongebob',
    lastName: 'Squarepants',
    username: 'sponge',
    password: 'squarepants',
    email: 'spongebob@gmail.com',
  },

  {
    firstName: 'Super',
    lastName: 'Mario',
    username: 'mariobros',
    password: 'princess',
    email: 'mario@gmail.com',
  },

  {
    firstName: 'Jack',
    lastName: 'Frost',
    username: 'iceprince',
    password: 'frozen',
    email: 'jackfrost@gmail.com',
  },

  {
    firstName: 'King',
    lastName: 'Kong',
    username: 'donkeykong',
    password: 'banana',
    email: 'donkeybanaba@gmail.com',
  },

  {
    firstName: 'Optimus',
    lastName: 'Prime',
    username: 'optimusalpha',
    password: 'passover',
    email: 'primealpha@gmail.com',
  },
];

const validUsersLogin = [
  {
    username: 'patsiizy',
    password: 'passover',
  },

  {
    username: 'sponge',
    password: 'squarepants',
  },

  {
    username: 'mariobros',
    password: 'princess',
  },

  {
    username: 'iceprince',
    password: 'frozen',
  },

  {
    username: 'donkeykong',
    password: 'banana',
  },

  {
    username: 'optimusalpha',
    password: 'passover',
  },
];

const invalidUsers = [
  {
    username: 'rapait',
    password: 'gutikms',
  },

  {
    username: 'sumbaz',
    password: 'rakers',
  },
];

export default { dbUsers, validUsersLogin, invalidUsers, testValidUsers };

