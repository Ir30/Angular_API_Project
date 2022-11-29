import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchUser2=()=>{
    return this.http.get("https://dummyjson.com/users")
  }

  fetchTodo=()=>{
    return this.http.get("https://dummyjson.com/todos")
  }
}
