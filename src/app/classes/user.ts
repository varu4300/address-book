import { IUser, IName, IUserId, IPicture, IBirthday, ILocation } from './../models/user';

export class User implements IUser {
  gender: string = '';
  name: IName = {} as IName;
  email: string = '';
  id: IUserId = {} as IUserId;
  picture: IPicture = {} as IPicture;
  location: ILocation = {} as ILocation;
  phone: string = '';
  cell: string = '';
  dob: IBirthday = {} as IBirthday;

  constructor(user: IUser) {
    this.gender = user.gender;
    this.name = user.name;
    this.email = user.email;
    this.id = user.id;
    this.picture = user.picture;
    this.location = user.location;
    this.phone = user.phone;
    this.cell = user.cell;
    this.dob = user.dob;
  }

}
