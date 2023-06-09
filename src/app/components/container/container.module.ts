import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { RightSidebarComponent } from './pages/right-sidebar/right-sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { LeftSidebarComponent } from './pages/left-sidebar/left-sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DialogoPublicacionComponent } from './pages/main-content/dialogo-publicacion/dialogo-publicacion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { MainContentModule } from './pages/main-content/main-content.module';
@NgModule({
  declarations: [
    ContainerComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatCardModule,
    MainContentModule,
  ],
  exports: [ContainerComponent, LeftSidebarComponent, RightSidebarComponent],
})
export class ContainerModule {}
