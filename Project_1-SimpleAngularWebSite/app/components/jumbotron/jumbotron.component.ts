﻿import { Component, OnInit } from "@angular/core";

@Component({
    selector: "jumbotron",
    moduleId: module.id,
    templateUrl: "./jumbotron.component.html",
})

export class JumbotronComponent implements OnInit {
    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnText: string;
    private jbtBtnUrl: string;

    ngOnInit() {
        this.jbtHeading = 'Hello World';
        this.jbtText = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
        this.jbtBtnText = 'Read More';
        this.jbtBtnUrl = 'http://test.com';
    }

}