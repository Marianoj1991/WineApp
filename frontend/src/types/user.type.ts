import { IWine } from "./wine-type";


export interface IUser {
  id: number;
  email: string;
  name: string;
  lastname: string; 
  username: string;
  wines: IWine[];
}
