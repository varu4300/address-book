export interface RandomUser {
  gender: string;
  name: UserName;
  location: UserLocation;
  email: string;
  login: Credentials;
  dob: Birthday;
  registered: Registered;
  phone: string;
  cell: string;
  id: UserId;
  pictures: Picture;
  nat: string;
}

export interface UserId {
  name: string;
  value: string;
}

export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface UserLocation {
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

export interface Birthday {
  date: string;
  age: number;
}

export interface Registered {
  date: string;
  age: number;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

