import {User} from '../entities/User';
export { };
declare global {
    namespace Express {
        interface Request {
            User_data?: User;
        
      
        }
    }
}