import { MatSnackBarConfig } from '@angular/material/snack-bar';

export function getSnackBarConfig() {
  const snackBarConfig: MatSnackBarConfig = {
    duration: 2000,
    horizontalPosition: 'right', // 'start', 'center', 'end', 'left', 'right'
    verticalPosition: 'top', // 'top', 'bottom'
  };

  return snackBarConfig;
}
