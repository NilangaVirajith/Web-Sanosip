import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent {

    loginData = [];

    logIn(): void {
        console.log(this.loginData);
    }

}