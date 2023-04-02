import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/models/myContacts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  groups:any =[]
  contact:MyContact = {}
  constructor(private api:ApiService, private addContactRouter:Router){
    this.contact.groupId = 'Select a Group'

  }

  ngOnInit(): void {
    this.api.allGroups()
    .subscribe((result:any)=>{
      console.log(result);
      this.groups = result
      
    })
  }
  addContact(){
     this.api.addContact(this.contact)
    
     .subscribe((data:any)=>{
      alert('New contact added successfully')
      //redirect
      this.addContactRouter.navigateByUrl('')
    

     })
  }

}
