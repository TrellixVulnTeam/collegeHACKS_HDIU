
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  constructor() { }

  openMenu()
  {
    document.getElementById('wrapper');
  }

  ngOnInit() {

 
   
   
  }

}
