import jwt from 'jsonwebtoken';
import config from '../config.js';


export function authorizationMiddleware(req, res, next) {
   const auth = req.headers.authorization;
   if(!auth){
    
   next();
   return;
}
const scheme = auth
.substring(0, 7)
.toLowerCase();
if (scheme !== 'bearer ') {
   throw new Error('Invalid authorization scheme');
}
export function CheckForRole(role){
CheckForRole (role){
            return (req,res, next)=>{
                if (req.session?.role.contains(role)){
                    next();
                    return;
            
                throw new ForbiddenExecption('no tenes permiso');
            
                }
               }
            }

const token = auth
.substring(6)
.trim();

const data = jwt.verify(token, config.jwtKey);

console.log(data);

next();
}