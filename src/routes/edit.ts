import {Request, Response, Router} from 'express';
import {DB} from '../config/db';



const connection = new DB().connection;

export class edit {   

    public routes(router:Router): void {          

        router.route('/edit').post((req: Request, res: Response) => {

            let sql = `CALL SelectTrash()`;
                            
            connection.query(sql, function (err: Error, result:any) {
                if (err) throw err;
                return res.json(result);   
            }); 
           
        })
    }
}