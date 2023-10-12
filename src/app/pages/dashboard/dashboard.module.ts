import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './adminPages/adminDashboard/admin-dashboard.component';
import { AdminStockComponent } from './adminPages/admin-stock/admin-stock.component';
import { AdminClientsComponent } from './adminPages/admin-clients/admin-clients.component';
import { AngularMaterialModule } from 'src/app/shared/sharedModule/angular-material/angular-material.module';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminStockComponent,
    AdminClientsComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminDashboardComponent,
        children: [
          { path: '', redirectTo: 'stock', pathMatch: 'full' },
          { path: 'stock', component: AdminStockComponent },
          { path: 'clients', component: AdminClientsComponent },
        ],
      },
    ]),
  ],
})
export class DashboardModuleModule {}
