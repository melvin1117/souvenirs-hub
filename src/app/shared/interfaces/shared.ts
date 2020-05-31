import { MENU_OPTION, MODULE } from '../enum/shared-enum';

export interface EmittedMenuSelection {
  id: number;
  option: MENU_OPTION;
  module: MODULE;
}
