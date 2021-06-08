export interface IUser {
  name?: IName;
  email?: string;
  picture?: IPicture;
  phone?: string;
  login?: IUserInfo;
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

export interface IUserInfo {
  uuid?: string;
  username?: string;
  password?: string;
  salt?: string;
  md5?: string;
  sha1?: string;
  sha256?: string;
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
  large?: string;
  medium?: string;
  thumbnail?: string;
}

