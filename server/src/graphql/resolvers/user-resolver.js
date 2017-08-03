import User from '../../models/User';

export default {
  signup: (_, { fullName, ...rest }) => {
    const [firstName, ...lastName] = fullName.split(' ');
    return User.create({ firstName, lastName, ...rest});
  },
  login: async (_, {email, password}) => {
    const user = await User.findOne({ email });
    if(!user) {
      throw new Error(`The user ${user} does not exist.`);
    }
    if(!user.authenticateUser(password)) {
      throw new Error(`The Password is incorrect.`);
    }
    return user;
  }
}