import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetCountryService {


getCountryNameByRegion(name:string){
  var response=this.http.get(`https://restcountries.eu/rest/v2/region/${name}`);
  return response;
  }

  getCountryNameByLanguage(name:string){
    var response=this.http.get(`https://restcountries.eu/rest/v2/lang/${name}`);
    return response;
    }

    getCountryNameByCurrency(name:string){
      var response=this.http.get(`https://restcountries.eu/rest/v2/currency/${name}`);
      return response;
      }
  
  constructor(private http:HttpClient) { }



  getAllCountryName(){
  var response=this.http.get(`https://restcountries.eu/rest/v2/all`);
  return response;
  }

  getCountryDetail(name:string){
    var response=this.http.get(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);
    return response;
  }


}