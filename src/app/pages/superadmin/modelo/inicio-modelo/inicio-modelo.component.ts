import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoModeloComponent } from '../dialogo-modelo/dialogo-modelo.component';
import { Router } from '@angular/router';
import { ModeloService } from 'src/app/services/modelo.service';
import { Modelo } from 'src/app/models/Modelo';
import { format } from 'date-fns';

@Pipe({ name: 'customDate' })
export class CustomDatePipe implements PipeTransform {
  transform(value: any): string {
    const dateValue = new Date(value);
    return format(dateValue, 'dd-MM-yyyy');
  }
}

@Component({
  selector: 'app-inicio-modelo',
  templateUrl: './inicio-modelo.component.html',
  styleUrls: ['./inicio-modelo.component.css']
})
export class InicioModeloComponent implements OnInit {
  mode = new Modelo();
  asignacion: any;
  
  datasource: any[] = [];
  constructor(public dialog: MatDialog,
    private router: Router,
    private modeloService: ModeloService,

  ) {
    this.addRandomColors(); // Llama a esta función para asignar colores aleatorios

  }
  addRandomColors() {
    this.datasource.forEach((item, index) => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      item.color = randomColor;
    });
  }
  ngOnInit(): void {
    this.listar();

  }

  listar() {
    this.modeloService.getModelosVista().subscribe(data => {
      this.datasource = data;
      console.log(data)
    });



  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogoModeloComponent, { width: '50%' });
    dialogRef.afterClosed().subscribe(result => {
      this.listar();
    });

  }

  enviarModelo(modelo: Modelo): void {
    //localStorage.setItem("id", modelo.id_modelo.toString());
    this.router.navigate(['/sup/modelo/detallemodelo'], { state: { modelo: modelo } });
  }



}