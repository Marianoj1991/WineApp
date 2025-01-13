import { IWine } from "./wine-type";


export interface IUser {
  id: number | null;
  email: string | null;
  name: string;
  lastname: string; 
  username: string;
  wines: IWine[];
}
