import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { NavBarComponent } from "./components/navbar/navbar.component";
import { JumbotronComponent } from "./components/jumbotron/jumbotron.component";

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <jumbotron></jumbotron>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `
})


export class AppComponent {
    title = 'My First Angular 2 App'
}