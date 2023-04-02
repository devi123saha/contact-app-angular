import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{
  ContactId:string=''
  contact:MyContact = {}
  allGroups:any=[]
  
  constructor(private editContactActivatedRoute:ActivatedRoute,private api:ApiService, private editContactRouter:Router){

  }
  ngOnInit(): void{
    this.editContactActivatedRoute.params
    .subscribe((data:any)=>{
      this.ContactId = data.id
      console.log(this.ContactId);
      
    })
    //to get details of particular contact
    this.api.viewcontact(this.ContactId)
    .subscribe((result:any)=>{
      this.contact = result
      console.log(this.contact);
      

    })
    //get all groups from api 
    this.api.allGroups()
    .subscribe((groups:any)=>{
      console.log(groups);
      this.allGroups = groups
    })
  }

  //editContact(contact)
  editContact(contact:MyContact){
  this.api.updateContact(this.ContactId,contact)
  .subscribe((result:any)=>{
    alert('Existing contact details are updated')
    // redirect to all contact page
    this.editContactRouter.navigateByUrl('')

  })
}
}
