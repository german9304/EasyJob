import { GOOGLE_CLIENT, JWT_SECRET_KEY } from './client-auth';
import { serializeUser, use, deserializeUser } from 'passport';
import { sign } from 'jsonwebtoken';
import { Strategy } from 'passport-google-oauth2';
import { IUser, GoogleUser } from './user';

import {
  userModel,
  findGoogleUser,
  createUserGoogle,
} from './Models/user-schema';

serializeUser((userId, done) => done(null, userId));

deserializeUser((id, done) => {
  userModel.findById(id).then(user => done(null, user));
});

const candidateEmployer = (req, res, next) => {
  const { query } = req;
  req.session = query;
  next();
};

async function googleStrategy(
  accessToken,
  refreshToken,
  profile,
  done,
): Promise<void> {
  // console.log("profile: ", profile);
  const { id, displayName, emails } = profile;
  const { value: email } = emails[0];
  try {
    const googleUser: IUser = await findGoogleUser(id);
    if (!googleUser) {
      const googleId = id;
      const user:  GoogleUser = {
        googleId,
        email,
        jwt: '',
      };
      const addedUser: IUser = createUserGoogle(user);
      const token = sign({ email: addedUser.email, _id: addedUser._id }, JWT_SECRET_KEY.key);
      addedUser.set({
        jwt: token,
      });
      const newuser: IUser = await addedUser.save();
      return done(null, newuser);
    }
    return done(null, googleUser);
  } catch (err) {
    console.log(err);
  }
}

use(
  new Strategy(
    {
      clientID: GOOGLE_CLIENT.client_id,
      clientSecret: GOOGLE_CLIENT.client_secret,
      callbackURL: GOOGLE_CLIENT.redirect_uris[0],
    },
    googleStrategy,
  ),
);
