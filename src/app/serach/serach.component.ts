import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {

  city: string;
  code: string;

  constructor(private router: Router) {}
  ngOnInit() { }
  saveForm(){

    let location = {
      city: this.city,
      state: this.code
    };

    localStorage.setItem('location', JSON.stringify(location));
    this.router.navigate(['home']);
  }

}