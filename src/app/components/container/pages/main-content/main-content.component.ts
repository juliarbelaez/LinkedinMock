import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogoPublicacionComponent } from './dialogo-publicacion/dialogo-publicacion.component';
import { PostServiceService } from '../../../../services/post-service.service';

export interface Estado {
  texto: string;
  fecha: Date;
  user: string;
  userImg?: string;
  puesto: string;
  image?: string;
}

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {
  estados: Estado[] = [];
  nuevoEstado: string = '';
  nuevoEstadoDialogo: string = '';

  constructor(
    private dialog: MatDialog,
    private postService: PostServiceService
  ) {
    this.nuevoEstadoDialogo = '';
    this.postService.recibirDatos().subscribe((datos: any) => {
      this.nuevoEstadoDialogo = datos.post;
      this.publicarEstado();
    });

    this.postService.getPosts().subscribe((posts: Estado[]) => {
      this.estados = posts;
    });
  }

  publicarEstado() {
    const estado: Estado = {
      texto: this.nuevoEstadoDialogo,
      fecha: new Date(),
      user: '',
      userImg: '',
      puesto: '',
      image: '',
    };
    this.estados.push(estado);
    this.nuevoEstadoDialogo = '';
  }

  eliminarEstado(estado: Estado) {
    const index = this.estados.indexOf(estado);
    if (index > -1) {
      this.estados.splice(index, 1);
    }
  }

  ordenarEstadosMenorMayor() {
    this.estados.sort((a, b) => a.fecha.getTime() - b.fecha.getTime());
  }

  ordenarEstadosMayorMenor() {
    this.estados.sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
  }

  abrirDialogoFormulario() {
    const dialogRef = this.dialog.open(DialogoPublicacionComponent, {});

    dialogRef.afterClosed().subscribe(() => {});
  }
}
