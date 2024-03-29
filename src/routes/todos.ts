import {Request, Response, Router} from 'express';
import {DB} from '../config/db';

const connection = new DB().connection;

export class todos {   

    public routes(router:Router): void {   
        router.route('/todos').get((req: Request, res: Response) => {  
            
            console.log("Get Todos")

            let sql = `CALL SelectListAll()`;
                            
             connection.query(sql, function (err: Error, result:any) {
                if (err) throw err;
                return res.json(result);   
            }); 
        })

        router.route('/todos/:id').get((req: Request, res: Response) => {  

            console.log("Get Todo : "+req.params.id)

            let sql = `CALL SelectListById(${req.params.id})`;
    
            connection.query(sql, function (err: Error, result: any) {
                if (err) throw err;
                return res.json(result);   
            }); 
        })

        router.route('/todos').post((req: Request, res: Response) => { 
            console.log("호출됨");
            console.log(req.query);

            let sql1 = `CALL to_do_list.InsertList('${req.query.list_name}','${req.query.list_date}','${req.query.list_memo}','${req.query.list_color}')`;

            connection.query(sql1,function (err:Error, result: any):any {
                if (err) throw err;       
                return res.json(result);       
            });
        })

        router.route('/todos/:id').put((req: Request, res: Response) => {
            if(req.query.status === 'Failed'){
                console.log(req.params.id+': Failed');
                let sql = `CALL UpdateStatusFailed(${req.params.id})`;
                connection.query(sql, function (err: Error, result:any) {
                    if (err) throw err;
                    return res.json(result);
                }); 
            }

            if(req.query.status === 'Done'){
                console.log(req.params.id+': Done');
                let sql = `CALL UpdateStatusDone(${req.params.id})`;
                connection.query(sql, function (err: Error, result:any) {
                    if (err) throw err;
                    return res.json(result);
                }); 
            }
            if(req.query.status === 'Edit'){
                console.log(req.params.id+': Edit');
                let sql= `CALL to_do_list.UpdateList('${req.params.id}','${req.query.list_name}','${req.query.list_date}','${req.query.list_memo}','${req.query.list_color}')`;

                connection.query(sql, function (err: Error, result:any) {
                    if (err) throw err;
                    return res.json(result);   
                }); 
            }
        })

        router.route('/todos/:id').delete((req: Request, res: Response) => {
            console.log(req.params.id+': Trash');
            let sql = `CALL UpdateTrashOff(${req.params.id})`;
            connection.query(sql, function (err: Error, result:any) {
                if (err) throw err;
                return res.json(result);
            }); 
        })
    }
}