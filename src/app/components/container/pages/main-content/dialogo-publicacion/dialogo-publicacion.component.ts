import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostServiceService } from '../../../../../services/post-service.service';

@Component({
  selector: 'app-dialogo-publicacion',
  templateUrl: './dialogo-publicacion.component.html',
  styleUrls: ['./dialogo-publicacion.component.scss'],
})
export class DialogoPublicacionComponent {
  postControl = new FormControl('', [
    Validators.required,
    Validators.minLength(20),
    Validators.maxLength(248),
  ]);

  postForm = new FormGroup({
    post: this.postControl,
  });
  constructor(
    private dialogRef: MatDialogRef<DialogoPublicacionComponent>,
    private postService: PostServiceService
  ) {}

  guardar(): void {
    if (this.postForm.valid) {
      this.dialogRef.close(this.postForm.value);
      this.postService.enviarDatos(this.postForm.value);
    } else {
      this.postForm.markAllAsTouched();
    }
  }
}
