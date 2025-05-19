import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Istd } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { GetconfirmationComponent } from '../getconfirmation/getconfirmation.component';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.scss']
})
export class StdListComponent implements OnInit {
  stdArr!:Array<Istd>
  constructor(
    private _stdService:StudentService,
    private _matdialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.stdArr= this._stdService.fetchallstd()
     
    this._stdService.updatestsasObs$
                    .subscribe(std=>{
                        this._stdService.updatestd(std)
                    })

  }

  onEdit(std:Istd){
       this._stdService.editstdEmit(std)
  }

  onRemove(id:string){
       const matdialogconfig= new MatDialogConfig()
       matdialogconfig.data='Are you sure you want to remove this student?'
       const dialogref= this._matdialog.open(GetconfirmationComponent,matdialogconfig)
       dialogref.afterClosed()
                .subscribe(res=>{
                  if(res){
                    this._stdService.removestd(id)
                  }
                })
  }

}
