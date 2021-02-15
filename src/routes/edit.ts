import {Request, Response, Router} from 'express';
import {DB} from '../config/db';



const connection = new DB().connection;

export class edit {   

    public routes(router:Router): any {    
        
        let rel:any;

        //목록 수정
        router.route('/todos/:id').put((req: Request, res: Response) => {
            
        })
    }
}