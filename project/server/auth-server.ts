/*
 Authentication Routes
*/

import { Request, Response, NextFunction, Router } from 'express';
import * as passport from 'passport';
import './google-auth';

const router: Router = Router();

import { findUserById } from './Models/user-schema';
import { IUser } from './user';

router.get(
  '/google',
  (req: Request, res: Response, next): void => {
    console.log('req query');
    console.log(req.query);
    const { type } = req.query;
    req.session.type = type;
    console.log(`type: ${type}`);
    next();
  },
);

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

router.get(
  '/google/redirect',
  passport.authenticate('google'),
  (req: Request, res: Response, next: NextFunction): void => {
    // console.log("redirect out");
    //  console.log("req user: ", req.user);
    console.log(`session after: ${JSON.stringify(req.session)}`);
    delete req.session.type;
    // res.redirect('http://localhost:4200/');
    res.redirect('/');
  },
);

router.post(
  '/create/user',
  passport.authenticate('createUser'),
  (req: Request, res: Response): void => {
    // console.log(req.authInfo);
    const { user: id } = req;
    const usr: Promise<IUser> = findUserById(id);
    usr.then((data: IUser) => {
      const { _id, email, jwt, employer, jobseeker } = data;
      console.log(employer);
      return res.json({ user: { _id, email, jwt, employer, jobseeker } });
    });
    //  res.json(req.user);
  },
);

router.post(
  '/login',
  passport.authenticate('loginUser'),
  (req: Request, res: Response): void => {
    // console.log(req.body);
    try {
      const { email, jwt } = req.user;
      // console.log("login: ", req.user);
      res.json({ user: { email, jwt, auth: true } });
    } catch (error) {
      console.log(error);
    }
  },
);

export default router;
