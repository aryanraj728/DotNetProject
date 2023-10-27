import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mobile } from '../models/mobiles.model';
import { Observable } from 'rxjs';
import { AddCart } from '../models/addcart.model';
import { CartAdd } from '../models/cartadd.model';
import { OrderView } from '../models/orderView.model';

@Injectable({
  providedIn: 'root'
})
export class MobilesService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
  getMobiles(): Observable<Mobile[]> {
    return this.http.get<Mobile[]>(this.baseApiUrl + '/api/Mobile');

  }
  getMobile(id: string): Observable<Mobile> {
    return this.http.get<Mobile>(this.baseApiUrl + '/api/Mobile/' + id);
  }
  updateMobile(id: number, updateMobileRequest: Mobile): Observable<Mobile>{
    return this.http.put<Mobile>(this.baseApiUrl + '/api/Mobile/' + id,updateMobileRequest)
  }
  deleteMobile(id: number): Observable<Mobile> {
    return this.http.delete<Mobile>(this.baseApiUrl + '/api/Mobile/' + id);
  }
  getMobileByName(name: string): Observable<any> {
    return this.http.get(this.baseApiUrl+'/api/Mobile/'+name);
  }
  postCart(addCartModel:AddCart)
  {
    return this.http.post(this.baseApiUrl + '/api/Cart',addCartModel);
  }
  getCart()
  {
    return this.http.get<AddCart[]>(this.baseApiUrl+'/api/Cart');
  }
  addOrder(cartAdd: CartAdd)
  {
    return this.http.post(this.baseApiUrl+'/api/Order',cartAdd);
  }
  deleteCart(id: number)
  {
    console.log(id);
    return this.http.delete(this.baseApiUrl+'/api/Cart/'+id);
  }
  getUserOrders()
  {
    return this.http.get(this.baseApiUrl+'/api/Order');
  }
  deleteOrder(id:number)
  {
    return this.http.delete(this.baseApiUrl+'/api/Order/'+id);
  }
  getAdminOrders() {
    return this.http.get(this.baseApiUrl+'/api/AdminOrders/');
  }
  getOrderByEmail(useremail:string):Observable<any>
  {
    return this.http.get(this.baseApiUrl+'/api/AdminOrders/'+useremail);
  }
  
}
