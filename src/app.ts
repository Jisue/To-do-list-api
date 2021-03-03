import express, {Request, Response, Router} from 'express';
import dotenv from 'dotenv';
import {DB} from './config/db';
import {todos} from './routes/todos';
import {trashs} from './routes/trashs';
import cors from 'cors';

const connection = new DB().connection;

export class Api {

    public api : express.Application;
    private todo : todos = new todos();
    private trash : trashs = new trashs();
    
    constructor(){
      this.api = express();
      this.api.use(cors());
      this.todo.routes(this.api); 
      this.trash.routes(this.api);
      //.env 환경변수 로드
      dotenv.config();
    }
}

const api = new Api().api;

// api.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods", "Options, get, post, delete, put");
//   next();
// });

console.log();

api.listen(3001,()=>{
    console.log('API is listening 3001');
});