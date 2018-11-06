import { GOOGLE_CLIENT, JWT_SECRET_KEY  } from './client-auth';
import { serializeUser, use, deserializeUser } from 'passport';
import { sign } from 'jsonwebtoken';
import { Strategy } from 'passport-google-oauth2';

import {
  userModel,
  findGoogleUser,
  createUserGoogle,
} from './Models/user-schema';

serializeUser((userId, done) => done(null, userId));

deserializeUser((id, done) => {
  userModel.findById(id).then((user => done(null, user)));
});

const candidateEmployer = (req, res, next) => {
  const { query } = req;
  req.session = query;
  next();
};

async function googleStrategy(accessToken, refreshToken, profile, done): Promise<void> {
  // console.log("profile: ", profile);
  const { id, displayName, emails } = profile;
  const { value: email } = emails[0];
  try {
    const googleUser = await findGoogleUser(id);
    if (!googleUser) {
      const googleId = id;
      const user = {
        googleId,
        email,
        jwt: '',
      };
      const addedUser = createUserGoogle(user);
      const token = sign({ addedUser }, JWT_SECRET_KEY.key);
      addedUser.jwt = token;
      const newuser = await addedUser.save();
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
