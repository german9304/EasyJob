// import * as mongoose from 'mongoose';
// import { genSalt, hash, compare } from "bcrypt";
import * as bycrpt from 'bcrypt';
import { Document, Schema, model, Model } from 'mongoose';
import { User, GoogleUser } from '../user';
// import { ISize } from 'selenium-webdriver";
const SALT_ROUNDS = 10;

export interface IUser extends Document {
  name: String;
  candidate: Boolean;
  employer: Boolean;
  email: String;
  googleId: String;
  password: String;
  jwt: String;
  comparePasswords(userPassword, hash): Promise<boolean>;
}

export interface UserName {
  usr: IUser;
  res: boolean;
}

// interface IUserModel extends IUser, Document {
//   comparePasswords(userPassword, hash): Promise<boolean>;
// }
/*
USER SCHEMA
 */
const userSchema: Schema = new Schema(
  {
    name: String,
    candidate: Boolean,
    employer: Boolean,
    email: String,
    googleId: String,
    password: String,
    jwt: String,
  },
  { collection: 'users', versionKey: false },
);

userSchema.pre<IUser>('save', async function (): Promise<void> {
  // const user = this;
  // const {password} = this;
  if (this.password) {
    if (this.isModified('password') || this.isNew) {
      try {
        const gen: string = await bycrpt.genSalt(SALT_ROUNDS);
        const bcrypthash: string = await bycrpt.hash(this.password, gen);
        this.password = bcrypthash;
      } catch (err) {
        console.log('res: ', err);
      }
    }
  }
  // console.log("password: ", user.password);
});

/*
Compare Passwords
*/
userSchema.methods.comparePasswords = async function (
  userPassword,
  hash,
): Promise<boolean> {
  const result: boolean = await bycrpt.compare(userPassword, hash);
  return result;
};

const userModel: Model<IUser> = model<IUser>('user', userSchema);

const findGoogleUser = async (id: string) => {
  try {
    const user = await userModel.findOne({ googleId: id });
    if (user) {
      const { _id } = user;
      // console.log(_id);
      return _id;
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};

const createUserGoogle = ({ googleId, email, jwt }: GoogleUser): IUser => {
  return new userModel({
    email,
    googleId,
    jwt,
  });
};

const createUser = ({ email, password, jwt }: User): IUser => {
  return new userModel({
    email,
    password,
    jwt,
  });
};

const findUserById = async ({ _id }: { _id: string }): Promise<IUser> => {
  const usr = await userModel.findById(_id);
  return usr;
};
const findUserName = async ({ email, password }: User): Promise<UserName> => {
  try {
    const usr: IUser = await userModel.findOne({ email });
    if (usr) {
      const { password: hash } = usr;
      const res = await usr.comparePasswords(password, hash);
      console.log(usr, res);
      return {
        usr,
        res,
      };
    }
    console.log('error not user found');
  } catch (err) {
    console.log('res: ', err);
  }
};

// findUserName({ email: "test@mail.com", password: "mypassword" });

export {
  createUserGoogle,
  userModel,
  findGoogleUser,
  createUser,
  findUserById,
};
