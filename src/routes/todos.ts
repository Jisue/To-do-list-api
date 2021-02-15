import { fail } from 'assert';
import {Request, Response, Router} from 'express';
import {DB} from '../config/db';

const connection = new DB().connection;

export class todos {   

    public routes(router:Router): void {   
        router.route('/todos').get((req: Request, res: Response) => {    

            let sql = `CALL SelectListAll()`;
                            
             connection.query(sql, function (err: Error, result:any) {
                if (err) throw err;
                return res.json(result);   
            }); 
        })

        router.route('/todos/:id').get((req: Request, res: Response) => {  

            let sql = `CALL SelectList(${req.params.id})`;
    
            connection.query(sql, function (err: Error, result: any) {
                if (err) throw err;
                return res.json(result);   
            }); 
        })

        router.route('/todos').post((req: Request, res: Response) => { 
            console.log(req.query);

            let sql1 = `CALL to_do_list.InsertList('${req.query.list_name}','${req.query.list_date}','${req.query.list_memo}')`;

            connection.query(sql1,function (err, result, fields) {
                if (err) throw err;              
            });

            let sql2 = `CALL SelectListAll()`;
            
            connection.query(sql2, function (err, result) {
                if (err) throw err;
                return res.json(result);        
            });
        })

        router.route('/todos/:id/:status').put((req: Request, res: Response) => {

            if(req.params.status === 'failed'){
                let sql = `CALL UpdateStatusFailed(${req.params.id})`;
                connection.query(sql, function (err: Error, result:any) {
                    if (err) throw err;
                    return res.json(result);
                }); 
            }

            if(req.params.status === 'done'){
                let sql = `CALL UpdateStatusDone(${req.params.id})`;
                connection.query(sql, function (err: Error, result:any) {
                    if (err) throw err;
                    return res.json(result);
                }); 
            }
        })

        router.route('/todos/:id/on').put((req: Request, res: Response) => {
            let sql = `CALL UpdateTrashOn(${req.params.id})`;
            connection.query(sql, function (err: Error, result:any) {
                if (err) throw err;
                return res.json(result);
            }); 
        })
    }
}