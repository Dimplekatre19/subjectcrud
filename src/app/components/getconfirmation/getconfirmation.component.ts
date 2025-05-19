import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfirmation',
  templateUrl: './getconfirmation.component.html',
  styleUrls: ['./getconfirmation.component.scss']
})
export class GetconfirmationComponent implements OnInit {
 getMsg!:string;
  constructor(
    private _dialogRef:MatDialogRef<GetconfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public msg:string
  ) {
    this.getMsg=msg
   }

  ngOnInit(): void {
  }
   onClose(flag:boolean){
       this._dialogRef.close(flag)
   }
}
