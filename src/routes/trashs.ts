import {Request, Response, Router} from 'express';
import {DB} from '../config/db';



const connection = new DB().connection;

export class trashs {   

    public routes(router:Router): void {  

        router.route('/trashs').get((req: Request, res: Response) => {    

            let sql = `CALL SelectTrash()`;
                        
            connection.query(sql, function (err: Error, result:any) {
                if (err) throw err;
                return res.json(result);   
            }); 
        })

        router.route('/trashs/:id').put((req: Request, res: Response) => {
            let sql = `CALL UpdateTrashOn(${req.params.id})`;
            connection.query(sql, function (err: Error, result:any) {
                if (err) throw err;
                // console.log(result);
                // return res.json(result);
            }); 

            let sql2 = `CALL SelectTrash()`;
            
            connection.query(sql2, function (err:Error, result:any) {
                if (err) throw err;
                return res.json(result);        
            });
        })

        router.route('/trashs/:id').delete((req: Request, res: Response) => {
            let sql = `CALL DeleteList(${req.params.id})`;
            connection.query(sql, function (err: Error, result:any) {
                if (err) throw err;
                // return res.json(result);
            }); 

            let sql2 = `CALL SelectTrash()`;
            
            connection.query(sql2, function (err:Error, result:any) {
                if (err) throw err;
                return res.json(result);        
            });
        })
    }
}