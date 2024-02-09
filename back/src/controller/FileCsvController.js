import PersonController from "./PersonController";
import { Person } from "../models/people";
import NewsService from "../services/NewsService";
import * as json2csv from "json2csv";
import * as uuid from "uuid";
import * as fs from 'fs';

const data = [Person.find()];

const opts = {data};

class FileCsvController{
    toCsv = function(){
        try{    
            const csv = json2csv.parseAsync(opts);
            const filename = uuid.v4() + ".csv";
            fs.writeFile('C:/Users/disrct/Desktop' + filename, csv, function(err){
                if(err) throw err;
                console.log('acertou hi');
            });
        } catch (error) {
            console.log("explodiiu")
        }
    }
    

}

module.exports = FileCsvController