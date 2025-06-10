import { UserService} from '../services/users.js';
import {CheckForRole} from '..middlewares/autorizhation_middleware.js';

export function user(app) {
    app.get(
        '/user',
        CheckForMiddleware('admin'),
    
       async (req, res) =>  res.send(await UserService.get(req.body))
    );
}