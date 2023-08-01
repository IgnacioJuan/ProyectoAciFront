//servicio para obtener los datos de la api de fenix

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError } from "rxjs";



@Injectable
    ({
        providedIn: 'root'
    })
export class FenixService {
    constructor(private http: HttpClient) { }

    private url: string = 'http://localhost:5000/api/fenix';

    //metodo para obtener los datos de la api de fenix
    public getFenixData(): Observable<any> {
        return this.http.get(this.url + '/listar').pipe(
            catchError((error) => {
                console.error(error);
                throw error;
            })
        );
    }

    //metodo para obtener docentes por cedula
    public getDocenteByCedula(cedula: string): Observable<any> {
        return this.http.get(this.url + '/cedula/' + cedula).pipe(
            catchError((error) => {
                console.error(error);
                throw error;
            })
        );
    }

    /*
    error 
    public getDocenteByPrimerNombre(primer_nombre: string): Observable<any> {
    const url = `${this.url}/p-nombre/${primer_nombre}`;
    return this.http.get(url).pipe(
        catchError((error) => {
            console.error('Error al obtener docente por primer nombre:', error);
            throw error;
        })
    );
    }
     */

    /*
    Preuba random en este caso se podria mandar un mensaje pero no sirve v:
    import { throwError } from 'rxjs';
    import { catchError } from 'rxjs/operators';
    import Swal from 'sweetalert2';

    public getDocenteByPrimerNombre(primer_nombre: string): Observable<any> {
    const url = `${this.url}/p-nombre/${primer_nombre}`;
    return this.http.get(url).pipe(
        catchError((error) => {
        const errorMessage = 'Ocurrió un error al obtener los docentes por primer nombre.';
        Swal.fire('Error', errorMessage, 'error');
        return throwError(errorMessage);
        })
    );
    }
    */
   
    //metodo para obtener docentes por primer_apellido
    public getDocenteByPrimerNombre(primer_nombre: string): Observable<any> {
        return this.http.get(this.url + '/p-nombre/' + primer_nombre).pipe(
            catchError((error) => {
                console.error(error);
                throw error;
            })
        );
    }

    //metodo para obtener docentes por segundo_apellido
    public getDocenteBySegundoNombre(segundo_nombre: string): Observable<any> {
        return this.http.get(this.url + '/s-nombre/' + segundo_nombre).pipe(
            catchError((error) => {
                console.error(error);
                throw error;
            })
        );
    }

    //metodo para obtener docentes por su primer_nombre y segundo_nombre
    public getDocenteByPrimerNombreSegundoNombre(primer_nombre: string, segundo_nombre: string): Observable<any> {
        return this.http.get(this.url + '/nombres/' + primer_nombre + '/' + segundo_nombre).pipe(
            catchError((error) => {
                console.error(error);
                throw error;
            })
        );
    }

    //metodo para obtener docentes por primer_apellido
    public getDocenteByPrimerApellido(primer_apellido: string): Observable<any> {
        return this.http.get(this.url + '/p-apellido/' + primer_apellido).pipe(
            catchError((error) => {
                console.error(error);
                throw error;
            })
        );
    }

    //metodo para obtener docentes por segundo_apellido
    public getDocenteBySegundoApellido(segundo_apellido: string): Observable<any> {
        return this.http.get(this.url + '/s-apellido/' + segundo_apellido).pipe(
            catchError((error) => {
                console.error(error);
                throw error;
            })
        );
    }

    //metodo para obtener docentes por primer_apellido y segundo_apellido
    public getDocenteByPrimerApellidoAndSegundoApellido(primer_apellido: string, segundo_apellido: string): Observable<any> {
        return this.http.get(this.url + '/apellidos/' + primer_apellido + '/' + segundo_apellido).pipe(
            catchError((error) => {
                console.error(error);
                throw error;
            })
        );
    }

}

