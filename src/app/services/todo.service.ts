import { Injectable } from '@angular/core';
import { Itodo } from '../models/todo';
import { SnackbarService } from './snackbar.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   todoArr:Array<Itodo>= localStorage.getItem('todoArr',)?JSON.parse(localStorage.getItem('todoArr')!):[]

  private  editTodo$:Subject<Itodo>=new Subject<Itodo>()
  private updateTodo$:Subject<Itodo>= new Subject<Itodo>()


  editTodoasObs$:Observable<Itodo>=this.editTodo$.asObservable()
  updateTodoasObs$:Observable<Itodo>=this.updateTodo$.asObservable()
  constructor(
    private _snackbar:SnackbarService
  ) { }
 
  private addtolocalstorage(){
      localStorage.setItem('todoArr',JSON.stringify(this.todoArr))
  }
   editObjEmit(todo:Itodo){
        this.editTodo$.next(todo)
   }

   updateObjEmit(todo:Itodo){
     this.updateTodo$.next(todo)
   }

  addTodo(todo:Itodo){
    this.todoArr.push(todo)
    this.addtolocalstorage()
    // localStorage.setItem('todoArr',JSON.stringify(this.todoArr))
    this._snackbar.opensnackbar(`NEW TODO ${todo.todoItem}  IS ADDED SUCCESSFULLYY!!`)
  }

  fetchalltodo():Array<Itodo>{
     return this.todoArr
  }
  
  updateTodo(updatedObj:Itodo){
      let getIndex=this.todoArr.findIndex(todo=>todo.id===updatedObj.id)
      this.todoArr[getIndex]=updatedObj
      this.addtolocalstorage()
      // localStorage.setItem('todoArr',JSON.stringify(this.todoArr))
      this._snackbar.opensnackbar(`${updatedObj.todoItem} IS UPDATED SUCCESSFULLYY!!!`)
    }

    removeTodo(id:string){
        let getIndex=this.todoArr.findIndex(todo=>todo.id===id)
        this.todoArr.splice(getIndex,1)
        this.addtolocalstorage()
        // localStorage.setItem('todoArr',JSON.stringify(this.todoArr))
        this._snackbar.opensnackbar("TODO IS REMOVED SUCCESSFULLYY!!")  
    }

}
