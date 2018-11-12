import * as bycript from 'bcrypt';
import { serializeUser, deserializeUser, use } from 'passport';
import * as JWT from 'jsonwebtoken';
import { Strategy } from 'passport-local';
import { JWT_SECRET_KEY } from './client-auth';
import { userModel, createUser } from './Models/user-schema';

// const localStrategy = LocalStrategy.Strategy;
serializeUser((userId, done) => done(null, userId));

deserializeUser((id, done) => {
  userModel.findById(id).then(user => done(null, user));
});

function createUserStrategy(email, password, done) {
  userModel.findOne({ email }, async (err, user) => {
    if (err) {
      console.error(err);
    }
    if (!user) {
      try {
        const jwt = '1123';
        const newUser = createUser({ email, password, jwt });
        // console.log(`new user: ${newUser.email}`);
        const newToken = JWT.sign(
          { email: newUser.email, _id: newUser._id },
          JWT_SECRET_KEY.key,
        );
        newUser.jwt = newToken;
        const usr = await newUser.save();
        return done(null, usr._id);
      } catch (err) {
        console.log(err);
      }
      // console.log("usr: ", usr);
    }
    // const {password: hash} = user;
    // // console.log('hash: ',hash);
    // const checkpsswrd = user.comparePasswords(password, hash);
    // if(checkpsswrd){
    //    return done(null, user, { message: 1});
    // }
    return done(null, false, { message: 'user already exists' });
  });
  //   return done(null, { username }, { message: "Username Already Exists" });
}

function loginUserStrategy(email, password, done) {
  userModel.findOne({ email }, async (err, user): Promise<any> => {
    if (err) {
      console.error(err);
    }
    if (!user) {
      return done(null, false);
    }
    const { password: hash } = user;
    // console.log('hash: ',hash);
    const checkpsswrd = await user.comparePasswords(password, hash);
    if (checkpsswrd) {
      return done(null, user);
    }

    return done(null, false);
  });
  //   return done(null, { username }, { message: "Username Already Exists" });
}

use(
  'createUser',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    createUserStrategy,
  ),
);

use(
  'loginUser',
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    loginUserStrategy,
  ),
);
