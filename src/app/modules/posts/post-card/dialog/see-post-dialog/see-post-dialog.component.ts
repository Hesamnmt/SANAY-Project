import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-see-post-dialog',
  templateUrl: './see-post-dialog.component.html',
  styleUrls: ['./see-post-dialog.component.scss'],
})
export class SeePostDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SeePostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  item = this.data;
}
