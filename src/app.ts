import express, {Request, Response, Router} from 'express';
import dotenv from 'dotenv';
import {DB} from './config/db';
import {edit} from './routes/edit';
import {todos} from './routes/todos';
import {trashs} from './routes/trashs';

const connection = new DB().connection;

export class Api {

    public api : express.Application;
    private edit : edit = new edit();
    private todo : todos = new todos();
    private trash : trashs = new trashs();
    
    constructor(){
      this.api = express();
      this.edit.routes(this.api); 
      this.todo.routes(this.api); 
      this.trash.routes(this.api); 
      //.env 환경변수 로드
      dotenv.config();
    }
}

const api = new Api().api;

console.log();

api.listen(3001,()=>{
    console.log('API is listening 3001');
});