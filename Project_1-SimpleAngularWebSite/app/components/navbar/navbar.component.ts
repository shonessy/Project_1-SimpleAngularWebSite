import { Component } from "@angular/core";

@Component({
    selector: "navbar",
    moduleId: module.id,
    templateUrl: "./navbar.component.html",
})

export class NavBarComponent{
    private projectName: string;

    constructor() {
        this.projectName = "A2WebSite";
    }
}