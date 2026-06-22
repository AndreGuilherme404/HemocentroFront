import { Routes } from '@angular/router';
import {Login} from './login/login';
import {Funcionario} from './tiposUsuario/funcionario/funcionario';
import {Gerente} from './tiposUsuario/gerente/gerente';
import {Doador} from './tiposUsuario/doador/doador';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'gerente',
    component: Gerente
  },
  {
    path: 'doador',
    component: Doador
  },
  {
    path: 'funcionario',
    component: Funcionario
  }

];
