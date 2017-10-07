import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class EmailServiceService {

  constructor(private http: Http) { }


  public VerifyEmail() {
    return this.http.post(`http://localhost:3000/sendmail`, null, null).map(res => res.json());
}

}
