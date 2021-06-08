import { IUser, IName, IPicture, IUserInfo } from './../models/user';

export class User implements IUser {
  name: IName;
  email: string;
  picture: IPicture;
  phone: string;
  login: IUserInfo;

  constructor(name: IName = {} as IName, email: string = '',  picture: IPicture = {} as IPicture,  phone: string = '', login: IUserInfo = {} as IUserInfo)  {
    this.name = name;
    this.email = email;
    this.picture =  picture;
    this.phone =  phone;
    this.login = login;
  }

}

