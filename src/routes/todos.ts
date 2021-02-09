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
            let sql1 = `CALL to_do_list.InsertList('${req.body.list_name}','${req.body.list_date}','${req.body.list_memo}')`;

            connection.query(sql1,function (err, result, fields) {
                if (err) throw err;              
            });

            let sql2 = `CALL SelectListAll()`;
            
            connection.query(sql2, function (err, result) {
                if (err) throw err;
                return res.json(result);        
            });
        })

    }
}