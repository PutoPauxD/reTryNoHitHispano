import { Component } from '@angular/core';
import * as globalData from 'src/assets/data.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public gameData = globalData;

  constructor() {}

}
