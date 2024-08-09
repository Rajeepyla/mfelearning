import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'product',
        loadComponent: () =>
          import('@angular-monorepo/products').then((m) => m.ProductsComponent),
      },
      {
        path: 'order',
        loadComponent: () =>
          import('@angular-monorepo/orders').then((m) => m.OrdersComponent),
      },
];
