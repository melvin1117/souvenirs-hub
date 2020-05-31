import { Component, OnInit } from '@angular/core';
import { Navbar } from 'src/app/configs/interfaces/navbar';
import { NavbarConfig } from 'src/app/configs/navbar-config';

@Component({
  selector: 'sh-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menus: Navbar[] = NavbarConfig.menus;
  constructor() {}

  ngOnInit(): void {}
}
