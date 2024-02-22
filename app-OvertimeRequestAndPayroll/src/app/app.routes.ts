import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './Pages/movie/movie.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { RoleComponent } from './Pages/role/role.component';
import { EmployeeComponent } from './Pages/employee/employee.component';
import { AccountRoleComponent } from './Pages/account-role/account-role.component';
import { NgModule } from '@angular/core';
import { NavbarAdminComponent } from './_Layout/navbar-admin/navbar-admin.component';
import { LoginComponent } from './Pages/login/login.component';
import { SidebarComponent } from './_Layout/sidebar/sidebar.component';

export const routes: Routes = [
    {path:'', redirectTo:'movie', pathMatch:'full'},
    {path:'login', component: LoginComponent},         
    {   path:'', 
        component:SidebarComponent,
        children:[{
            path: 'navbar-admin',
            component:NavbarAdminComponent
        }]    
    },     
    {
        path:'',
        component: SidebarComponent,
        children:[{
            path: 'account-role', 
            component: AccountRoleComponent 
        }]
    }, 
    {
        path:'',
        component:SidebarComponent,
        children:[{ 
            path:'department', 
            component:DepartmentComponent
        }]
    },    
    {
        path:'',
        component:SidebarComponent,
        children:[{
            path:'employee', 
            component:EmployeeComponent
        }]    
    },
    {
        path:'',
        component:SidebarComponent,
        children: [{
            path:'movie',
            component:MovieComponent 
        }]
    },
    {
        path:'',
        component:SidebarComponent,
        children:[{
            path:'role', 
            component:RoleComponent
        }]
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})

export class AppRouting{}
