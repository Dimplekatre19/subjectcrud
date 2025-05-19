import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Istd } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  stdForm!:FormGroup
  isineditmode:boolean=false
  stdObj!:Istd
  constructor(
    private _uuidService:UuidService,
    private _stdService:StudentService
  ) { }

  ngOnInit(): void {
    this.createForm()
    this._stdService.editstdasObs$
                     .subscribe(std=>{
                      this.stdObj=std
                      this.isineditmode=true
                      this.stdForm.patchValue(std)
                     })
  }

  createForm(){
      this.stdForm=new FormGroup({
          fname:new FormControl(null,[Validators.required]),
          lname:new FormControl(null,[Validators.required]),
          email:new FormControl(null,[Validators.required]),
          contact:new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      })
  }

  get f(){
      return this.stdForm.controls
  }

  onStdAdd(){
    console.log(this.stdForm);
    
      if(this.stdForm.valid){
         let stdObj:Istd = {...this.stdForm.value,stdId:this._uuidService.generateUuid()}
        //  console.log(stdObj);
        this._stdService.addstd(stdObj)
        this.stdForm.reset()
         
      }
  }

  onUpdate(){
     if(this.stdForm.valid){
       let updateObj= {...this.stdForm.value,stdId:this.stdObj.stdId}
        this.stdForm.reset()
        this.isineditmode=false
        this._stdService.updatestdEmit(updateObj)
     }
  }
}
