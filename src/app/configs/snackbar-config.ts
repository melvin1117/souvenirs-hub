import {
  MatSnackBarVerticalPosition,
  MatSnackBarConfig,
} from '@angular/material/snack-bar';

export class SnackbarConfig {
  public static successMessageDuration = 2 * 1000;
  public static errorMessageDuration = 3.5 * 1000;
  public static snackbarPosition: MatSnackBarVerticalPosition = 'top';
  public static panelClass = {
    success: 'success-snackbar',
    error: 'error-snackbar',
  };

  public static getSuccessSnackbarConfig(data: any) {
    return SnackbarConfig.getConfig(
      data,
      this.successMessageDuration,
      SnackbarConfig.panelClass.success
    );
  }

  public static getErrorSnackbarConfig(data: any) {
    return SnackbarConfig.getConfig(
      data,
      this.errorMessageDuration,
      SnackbarConfig.panelClass.error
    );
  }

  private static getConfig(data: any, duration: number, panelClass: string) {
    const config: MatSnackBarConfig<any> = {
      data: { message: data },
      verticalPosition: SnackbarConfig.snackbarPosition,
      panelClass,
      duration,
    };
    return config;
  }
}
