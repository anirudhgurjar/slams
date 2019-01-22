import http from 'axios';
import {API_HOST} from './endpoints.js';

class CategoryMapper {
     categoryData = [];
     constructor() {         
        this.categoryData = this.getData();
    }

     getData(){
        http.get(API_HOST + '/api/categories/')
        .then(response => {
          return response.data;          
        })
        .catch(e => {
          //this.errors.push(e);
          console.log('Errors' + e);
        });
    }

       getCategorydata(){
           return this.categoryData;
       }

       groupBy(list, keyGetter,allCategoryData) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                const catObject=allCategoryData.filter(function(e) {
                    if(e.id == key){
                        return e.categoryName;
                    };
                  });
                map.set(catObject[0].categoryName, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
    }


}

const Mapper=new CategoryMapper();

export default Mapper;