import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';


export const routes: Routes = [
    {
        path:'',
        component:UserComponent
        
    }
]

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [UserComponent],
    declarations:  [UserComponent],
    providers: [],
})
export class UserModule { }
