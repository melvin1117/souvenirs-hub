import { MENU_OPTION, MODE } from '../shared/enum/shared-enum';

export class MenuOptionsConfig {
  public static readonly menus: any[] = [
    {
      label: MENU_OPTION.EDIT,
      icon: 'edit',
      mode: [MODE.VIEW],
    },
    {
      label: MENU_OPTION.MOVE_TO_TRASH,
      icon: 'delete',
      mode: [MODE.VIEW],
    },
    {
      label: MENU_OPTION.DELETE,
      icon: 'delete_forever',
      mode: [MODE.VIEW, MODE.TRASH],
    },
    {
      label: MENU_OPTION.RESTORE,
      icon: 'restore_from_trash',
      mode: [MODE.TRASH],
    },
  ];
}
