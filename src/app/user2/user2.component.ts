import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component {

  constructor(private api:ApiService){
    api.fetchUser2().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  data:any=[]
  
}
