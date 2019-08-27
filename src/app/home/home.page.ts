import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}

  enviar() {
    /*  	var headers = new Headers();
    	headers.append("Accept", 'application/json');
   		headers.append('Content-Type', 'application/json' );
    const requestOptions = new RequestOptions({ headers: headers });
    */
    //
    let postData = {
            "id_usuario": "2"
    }
    let options = {
	    headers: {
	      'Content-Type': 'application/x-www-form-urlencoded'
	    }
  	};
  	let url="https://clientes.geekslatam.com/profesionales/GeeksVersion/public/payments";
    this.http.post(url, postData, options)
      .subscribe(data => {
        	console.log("envio de id_usuario");
       }, error => {
        	console.log(error);
      });
  }
}
