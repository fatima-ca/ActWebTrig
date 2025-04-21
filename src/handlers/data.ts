import {  Request, Response, NextFunction } from 'express';
import  DataController  from '../controllers/data'

const dataController = new DataController();

class DataHTTPHandler {
    
    async getData(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await dataController.getdata();
            response.json(data);
        } catch (error) {
            next(error)
        }
    }





   
}

export default DataHTTPHandler;