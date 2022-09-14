export interface IUser {
  id?: number,  
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface IUserLoginBody {
  username: string,
  password: string,
}