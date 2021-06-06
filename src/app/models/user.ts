export interface IUser {
  gender: string;
  name: IName;
  email: string;
  id: IUserId;
  picture: IPicture;
  location: ILocation;
  phone: string;
  cell: string;
  dob: IBirthday;
}

export interface IUserId {
  name: string;
  value: string;
}

export interface IName {
  title: string;
  first: string;
  last: string;
}

export interface ILocation {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: UserCoordinates;
  timezone:  UserTimezone;
}

export interface UserCoordinates {
  latitude: string;
  longitude: string;
}

export interface UserTimezone {
  offset: string;
  description: string;
}

export interface Credentials {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface IBirthday {
  date: string;
  age: number;
}

interface Registered {
  date: string;
  age: number;
}

export interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

