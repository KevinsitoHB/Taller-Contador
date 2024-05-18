import { Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

export const routes: Routes = [
  { path: 'contador', component: PaginaPrincipalComponent, title: 'Contador' },
];
