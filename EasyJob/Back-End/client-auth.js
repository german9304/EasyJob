const GOOGLE_CLIENT = {
  client_id:
    "586784806537-n05m54q2j4386kmvfsfgu1b137g9iksl.apps.googleusercontent.com",
  project_id: "senior-project-216417",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://www.googleapis.com/oauth2/v3/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_secret: "By5ddnYI-Lni8Hp7iZjE2Jaw",
  redirect_uris: ["http://localhost:3000/google/auth/redirect"],
  javascript_origins: ["http://localhost:3000"]
};
const DATABASE_URL =
  "mongodb://german:X34lztym9acdef@ds157742.mlab.com:57742/jobsearch-project";

module.exports = {
  GOOGLE_CLIENT,
  DATABASE_URL
};