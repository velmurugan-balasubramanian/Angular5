import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  value: Date;

  update(value: Date) { 
    console.log(value);
    this.value = value; }
  constructor() { }

  ngOnInit() {
  }

}
