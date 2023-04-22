import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { CirculationComponent } from './circulation/circulation.component';
import { SettingComponent } from './setting/setting.component';
import { UsersComponent } from './users/users.component';



const routes: Routes = [
  {path : 'Workspace' , component: WorkspaceComponent},
  {path : 'circulation' , component: CirculationComponent},
  {path : '' , component: DashboardComponent},
  {path : 'dashboard' , component: DashboardComponent},
  {path:'setting' ,component: SettingComponent},
  {path:'users' ,component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
