import { User } from './../user.model';
import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  users :User[]
  postData = {
    test: 'my content'
  }
  constructor(private dataservice:DataService) {
    this.dataservice.sendData(this.postData)
  }

  ngOnInit() {
    return this.dataservice.getUsers().subscribe(data => this.users=data)
  }

}
