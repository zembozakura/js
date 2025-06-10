import {getDependency} from "../libs/dependencies.js";

export class UserService {
   static async getSingleOrNullByUsername(username){
      const UserModel = getDependency('UserModel'); 
      return (await UserModel.find({ username }))[0] || null;
   }

   static async get() {
      const UserModel = getDependency('UserModel'); 
      return await UserModel.find();
   }
}