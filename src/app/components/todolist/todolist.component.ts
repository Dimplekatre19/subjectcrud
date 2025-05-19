import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Itodo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { GetconfirmationComponent } from '../getconfirmation/getconfirmation.component';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
 todoArr!:Array<Itodo>
  constructor(
    private _todoservice:TodoService,
    private _dialogref:MatDialog

  ) { }

  ngOnInit(): void {
     this.todoArr=this._todoservice.fetchalltodo()

     this._todoservice.updateTodoasObs$ 
                      .subscribe(todo=>{
                          this._todoservice.updateTodo(todo)
                      })
  }

  onEdit(todo :Itodo){
     this._todoservice.editObjEmit(todo)
  }

  onRemove(id:string){
     const matDialogconfig= new MatDialogConfig()
     matDialogconfig.data='Are you sure you want to delete a todo?'
     const dialogref=this._dialogref.open(GetconfirmationComponent,matDialogconfig) 
     dialogref.afterClosed()
              .subscribe(res=>{
                 if(res){
                  this._todoservice.removeTodo(id)
                 }
              })
  }
}
