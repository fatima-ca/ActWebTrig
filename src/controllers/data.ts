import { dataService } from "../db/data";

class DataController {
    
    
    async getdata() {
        const data = await dataService.getData1();

        const lado1 = data[0];
        const lado2 = data[1];
        
        
      
    
        return { lado1: lado1, lado2: lado2};
    }


    
}

export default DataController;