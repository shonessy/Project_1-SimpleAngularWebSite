import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { NavBarComponent } from "./components/navbar/navbar.component";
import { JumbotronComponent } from "./components/jumbotron/jumbotron.component";
import { HomeComponent } from "./components/pages/home.component";
import { AboutComponent } from "./components/pages/about.component";

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" }
    ];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        JumbotronComponent,
        HomeComponent,
        AboutComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}