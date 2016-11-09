import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { User } from '../user/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

    private baseUrl = "http://192.168.8.100:9804";

    constructor(private http: Http) { }

    // logUserIn(user: User): Promise<User> {
    //     let headers = new Headers({
    //         'Content-Type': 'application/json'
    //     });

    //     return this.http
    //     .post(this.baseUrl + '/api/auth/login', JSON.stringify(User), { headers: headers })
    //     .toPromise()
    //     .then(res => res.json())
    //     .catch();
    // }

}