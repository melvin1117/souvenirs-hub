import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MENU_OPTION, MODE, MODULE } from '../../enum/shared-enum';
import { MenuOptionsConfig } from 'src/app/configs/menu-options-config';
import { Utility } from '../../utils/utility';
import { EmittedMenuSelection } from '../../interfaces/shared';

@Component({
  selector: 'sh-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.scss'],
})
export class MenuOptionsComponent implements OnInit {
  @Input() mode: MODE;
  @Input() id: number;
  @Input() module: MODULE;
  @Output() menuClicked = new EventEmitter<EmittedMenuSelection>();
  menus: any[];
  idElement = Utility.generateUniqueId('menu');

  constructor() {}

  ngOnInit(): void {
    this.menus = MenuOptionsConfig.menus.filter((menu) => {
      return menu.mode.some((mode) => mode === this.mode);
    });
  }

  optionOpened() {
    document.getElementById(this.idElement).style.opacity = '1';
  }

  optionClosed() {
    document.getElementById(this.idElement).removeAttribute('style');
  }

  onMenuClick(option: MENU_OPTION) {
    this.menuClicked.emit({ id: this.id, option, module: this.module });
  }
}
