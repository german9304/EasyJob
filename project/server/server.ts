import * as express from 'express';
import Request = express.Request;
import Response = express.Response;

import cookieSession = require('cookie-session');
import { SECRET_KEY } from './client-auth';
import './create-account-auth';
// import "./jwt-auth";

import { categoryModel, jobSearch } from './Models/jobs-Schema';
import * as passport from 'passport';
// import { session, initialize, authenticate } from "passport";
import './Models/db-connection';
import authServer from './auth-server';

// import * as express from 'express';
// import {Request, Response} from 'express';

import crudOperationsFields from './crud-candidate-fields/crud.operations.fields';
import filesServer from './crud-files/files.server';

const app = express();
const request = app.request;
app.use(
  cookieSession({
    name: 'session',
    keys: [SECRET_KEY.key],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours,
  }),
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authServer);
app.use('/api/fields', crudOperationsFields);
app.use('/api/files', filesServer);

app.get('/', (req, res) => {
  res.send('home');
});
app.get('/test', (req, res) => {
  res.send('middleware');
});

app.get('/user', (req: Request, res: Response) => {
  // console.log(req.user);
  // const { user } = req;
  if (req.user) {
    try {
      const { email, jwt } = req.user;
      const user = {
        email,
        jwt,
        auth: true,
      };
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json(null);
  }
});

app.get(
  '/logout',
  (req: Request, res: Response): void => {
    req.logout();

    res.redirect('/');
  },
);
app.post('/api', (req, res) => {
  const { body: user } = req;
  // console.log(user);
  res.json(user);
});

app.get(
  '/api/candidate/jobs',
  (req, res): void => {
    const { query } = req;
    const listjobs = jobSearch(query);
    listjobs.then(data => res.json(data));
  },
);

// app.get("/jwt", authenticate("jwt", { session: false }), (req, res) => {
//   res.send("data");
// });

app.post('/api/post/job', (req, res) => {});

app.get(
  '/api/job/categories',
  (req, res): void => {
    const {
      query: { search },
    } = req;
    const searchRegex = new RegExp(`^${search}`);
    categoryModel.find(
      { category: { $regex: searchRegex } },
      (err, data): void => {
        if (err) {
          return console.log(err);
        }
        res.json(data);
      },
    );
  },
);
app.get(
  '/api/categories',
  (req, res): void => {
    categoryModel.find({}, (err, data) => {
      if (err) {
        return console.log(err);
      }
      res.json(data);
    });
  },
);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(3000, () => console.log('app listening on port 3000!'));