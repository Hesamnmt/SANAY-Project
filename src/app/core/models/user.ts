export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IuserAddress;
  phone: string;
  website: string;
  company: IUserCompany;
}
export interface IuserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IUserGeo;
}
export interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface IUserGeo {
  lat: string;
  lng: string;
}
