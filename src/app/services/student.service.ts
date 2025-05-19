import { Injectable } from '@angular/core';
import { Istd } from '../models/student';
import { Observable, Subject } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 stdArr!:Array<Istd>;
 
 private editstd$:Subject<Istd>= new Subject<Istd>()
 private updatestd$:Subject<Istd>= new Subject<Istd>()

 editstdasObs$:Observable<Istd>= this.editstd$.asObservable()
 updatestsasObs$:Observable<Istd>=this.updatestd$.asObservable()

  constructor(
   private _snackbar:SnackbarService
  ) {
     this.stdArr=localStorage.getItem('stdArr') ? JSON.parse(localStorage.getItem('stdArr')!) :[]
   }

  editstdEmit(std:Istd){
     this.editstd$.next(std)
  }

  updatestdEmit(std:Istd){
    this.updatestd$.next(std)
  }

   private addtoloaclstorage(){
        localStorage.setItem('stdArr',JSON.stringify(this.stdArr))
   }
   addstd(std:Istd){
      this.stdArr.push(std)
      // localStorage.setItem('stdArr',JSON.stringify(this.stdArr))
      this.addtoloaclstorage()
      this._snackbar.opensnackbar('NEW STUDENT ADDED SUCCESSFULLYY!!')
   }

   fetchallstd():Array<Istd>{
       return this.stdArr
   }

   updatestd(updatestd:Istd){
      let getIndex=this.stdArr.findIndex(std=>std.stdId===updatestd.stdId)
      this.stdArr[getIndex]=updatestd
      // localStorage.setItem('stdArr',JSON.stringify(this.stdArr))
      this.addtoloaclstorage()
       this._snackbar.opensnackbar('STUDENT UPDATED SUCCESSFULLYY!!')

   }

   removestd(id:string){
       let getIndex=this.stdArr.findIndex(std=>std.stdId===id)
       this.stdArr.splice(getIndex,1)
      // localStorage.setItem('stdArr',JSON.stringify(this.stdArr))
      this.addtoloaclstorage()
       this._snackbar.opensnackbar('STUDENT REMOVED SUCCESSFULLYY!!')
   }

}
