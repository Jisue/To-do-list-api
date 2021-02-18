import {Request, Response, Router} from 'express';
import {DB} from '../config/db';



const connection = new DB().connection;

export class trashs {   

    public routes(router:Router): void {  

        router.route('/trashs').get((req: Request, res: Response) => {    
            console.log("selected")

            let sql = `CALL SelectTrash()`;
                        
            connection.query(sql, function (err: Error, result:any) {
                if (err) throw err;
                return res.json(result);   
            }); 
        })

        router.route('/trashs/:id').put((req: Request, res: Response) => {
            console.log(req.params.id+': Restore');
            let sql = `CALL UpdateTrashOn(${req.params.id})`;
            connection.query(sql, function (err: Error, result:any) {
                if (err) throw err;
                return res.json(result);
            }); 
        })

        router.route('/trashs/:id').delete((req: Request, res: Response) => {
            console.log(req.params.id+': Delete');
            let sql = `CALL DeleteList(${req.params.id})`;
            connection.query(sql, function (err: Error, result:any) {
                if (err) throw err;
                return res.json(result);
            }); 
        })
    }
}