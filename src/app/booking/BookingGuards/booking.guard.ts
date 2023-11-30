import { CanDeactivateFn } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

export const bookingGuard: CanDeactivateFn<BookingComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  const _snackBar = inject(MatSnackBar); // api from angular material to show popup 

  if (component.bookingForm.pristine) {
    return component.bookingForm.pristine;
  } else {
    _snackBar.open('Incomplete form (dirty mode)', 'Warning', { duration: 3000 });
    return false;
  }
};
