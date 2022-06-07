import { User } from './../models/user.model';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) {
    this.userForm=this.formBuilder.group({
        nom:['',Validators.required],
        prenom:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        loisirs:this.formBuilder.array([])
    });
 }

  ngOnInit(): void {
      this.initForm();
  }
  initForm(){
      this.userForm=this.formBuilder.group({
          nom:['',Validators.required],
          prenom:['',Validators.required],
          email:['',[Validators.required,Validators.email]],
          loisirs:this.formBuilder.array([])
      });
  }
  onSubmitForm(){
      const formValue= this.userForm?.value;
      const newUser=new User(
          formValue['nom'],
          formValue['prenom'],
          formValue['email'],
          formValue['loisirs'] ? formValue['loisirs']:[]
      );
      this.userService.addUser(newUser);
      this.router.navigate(['/users'])
  }
  //typage stricte
  getLoisirs(){
      return this.userForm.get('loisirs') as FormArray;
  }
  onAjoutLoisir(){
      const newLoisirControl=this.formBuilder.control('',Validators.required);
      this.getLoisirs().push(newLoisirControl);
  }

}
