require("dotenv").config();

const {
  NODE_PORT,
  NODE_ENV,
  SECRETE_KEY,
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_PORT,
  MONGODB_TEST_USERNAME,
  MONGODB_TEST_PASSWORD,
  MONGODB_TEST_DATABASE,
  MONGODB_TEST_HOST,
} = process.env;

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mongoTestUrl = `mongodb+srv://${MONGODB_TEST_USERNAME}:${MONGODB_TEST_PASSWORD}@${MONGODB_TEST_HOST}/${MONGODB_TEST_DATABASE}?retryWrites=true&w=majority`;
const mongoAppUrl = `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@mongo:${MONGODB_PORT}`;

const environment = NODE_ENV;
const secreteKey = SECRETE_KEY;

const mongoUrl = environment === "development" ? mongoAppUrl : mongoTestUrl;
const port = NODE_PORT || 5000;
const roles = { PATIENT: "patient", NURSE: "nurse" };

module.exports =  { environment, mongoUrl, port, roles, secreteKey, mongoOptions };
