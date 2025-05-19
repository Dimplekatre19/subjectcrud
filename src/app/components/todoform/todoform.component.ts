import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Itodo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {
  todoform!:FormGroup
  isineditmode:boolean=false
  todoObj!:Itodo
  constructor(
    private _uuidService:UuidService,
    private _todoservice:TodoService
  ) { }

  ngOnInit(): void {
      this.createtodoform()

      this._todoservice.editTodoasObs$
                       .subscribe(todo=>{
                           this.todoObj=todo
                           this.todoform.patchValue(todo)
                           this.isineditmode=true
                       })
  }


  createtodoform(){
      this.todoform=new FormGroup({
         todoItem:new FormControl(null,[Validators.required])
      })
  }

  get f(){
     return this.todoform.controls
  }
  onTodoAdd(){
    if(this.todoform.valid){
       let todoObj={...this.todoform.value,id:this._uuidService.generateUuid()}
       //console.log(todoObj);
       this.todoform.reset()
       this._todoservice.addTodo(todoObj)
    }
  }

  onUpdate(){
    if(this.todoform.valid){
       let updateObj= {...this.todoform.value,id:this.todoObj.id}
       this.todoform.reset()
       this.isineditmode=false
       this._todoservice.updateObjEmit(updateObj)
    }
  }
}
