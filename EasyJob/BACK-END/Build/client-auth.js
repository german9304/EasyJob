"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GOOGLE_CLIENT = {
    client_id: '586784806537-n05m54q2j4386kmvfsfgu1b137g9iksl.apps.googleusercontent.com',
    project_id: 'senior-project-216417',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://www.googleapis.com/oauth2/v3/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_secret: 'By5ddnYI-Lni8Hp7iZjE2Jaw',
    redirect_uris: ['http://localhost:3000/auth/google/redirect'],
    javascript_origins: ['http://localhost:3000'],
};
exports.GOOGLE_CLIENT = GOOGLE_CLIENT;
var DATABASE_URL = 'mongodb://german:X34lztym9acdef@ds157742.mlab.com:57742/jobsearch-project';
exports.DATABASE_URL = DATABASE_URL;
var SECRET_KEY = { key: 'SECRE_KEY' };
exports.SECRET_KEY = SECRET_KEY;
var JWT_SECRET_KEY = { key: 'KEY_4567' };
exports.JWT_SECRET_KEY = JWT_SECRET_KEY;
var AUTHENTIC_JOBS_API = { key: '8021a7cda7496c5b5c54d1d108211bcc' };
exports.AUTHENTIC_JOBS_API = AUTHENTIC_JOBS_API;
// {
//   "email": "test@mail",
//   "password": "mypassword"
//  }
