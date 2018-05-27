import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    //localhost:4200
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    //localhost:4200/login
    // đi vào loginModule, trong loginModule lại có xử lý router gọi đến component tương ứng
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    //localhost:4200/main
    { path: 'main', loadChildren: './main/main.module#MainModule' }
];