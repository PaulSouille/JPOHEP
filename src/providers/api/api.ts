import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Account } from './../../interface/Account';


@Injectable()
export class ApiProvider {
  account : Account;
  private baseUrl: string = ""
  constructor(
    private readonly http: HttpClient
      ) {

  }
 
  login(email,password): Observable<any> {
      var urlApi = this.baseUrl+'/login?email='+email+'&password='+password
      console.log(urlApi)
      
      return this.http.get(`${urlApi}`);
  }

  createAccount(email,password,phoneNumber,school,firstName,lastName):Observable<any>{
    var urlApi = this.baseUrl+'/createAccount?email='+email+'&password='+password+'&phoneNumber='+phoneNumber+'&school='+school+'&firstName='+firstName+'&lastName='+lastName
    console.log(urlApi)
    return this.http.get(`${urlApi}`);
  }

  getRoomById(roomId):Observable<any>{
    var urlApi = this.baseUrl+'/rooms/'+roomId;
    return this.http.get(`${urlApi}`);
  }
  getBookingByid(userId):Observable<any>{
    var urlApi = this.baseUrl+'/bookings/user/'+userId;
    return this.http.get(`${urlApi}`);
  }
  setBookingById(user_id,date,hour):Observable<any>{
    var urlApi = this.baseUrl+'/bookings/add/'+date+"/"+hour+"/"+user_id;
    return this.http.get(`${urlApi}`);
  }
  getAllBookings():Observable<any>{
    var urlApi = this.baseUrl+'/bookings';
    return this.http.get(`${urlApi}`);
  }
  deleteBookingById(bookingId):Observable<any>{
    var urlApi = this.baseUrl+'/bookings/refuse/'+bookingId;
    return this.http.get(`${urlApi}`);

  }

  validateBookingById(bookingId):Observable<any>{
    var urlApi = this.baseUrl+'/bookings/validate/'+bookingId;
    return this.http.get(`${urlApi}`);
  }
} 
