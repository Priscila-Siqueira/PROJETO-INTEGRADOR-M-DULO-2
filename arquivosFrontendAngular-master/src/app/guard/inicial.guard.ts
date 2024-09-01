import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const inicialGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const check = typeof window !== 'undefined' && window.sessionStorage.getItem("logado") === "true";

  if (check) {
    return true;
  }

  router.navigate(['loginemail']);
  return false;
};
