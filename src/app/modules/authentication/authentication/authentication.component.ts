import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  profileForm!: FormGroup;
  isFilledCorrectly: boolean = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.profileForm = fb.group({
      userName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }
  onSubmit() {
    this.isFilledCorrectly = true;
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      this.openSnackBar('yessssss!' + this.profileForm.value, 'close');
    }
  }
  title = 'sanyTest';

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  openSnackBar(text: string, buttom: string) {
    this.snackBar.open(text, buttom, {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
