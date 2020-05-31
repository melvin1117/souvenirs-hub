import { Navbar } from './interfaces/navbar';

export class NavbarConfig {
  public static readonly menus: Navbar[] = [
    {
      name: 'Home',
      icon: 'home',
      route: '/',
    },
    {
      name: 'Create',
      icon: 'add_box',
      route: '/create',
    },
    {
      name: 'Trash',
      icon: 'delete',
      route: '/trash',
    },
  ];
}
