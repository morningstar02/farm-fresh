import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { HomepageComponent } from './homepage/homepage.component'
import { ContactusComponent } from './contactus/contactus.component'
import { AboutComponent } from './about/about.component'

import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent}]
    },
    {
        path: 'userprofile', pathMatch: 'full', component: UserProfileComponent, 
    },
    {
        path: '', pathMatch: 'full', component: HomepageComponent, 
    },
    {
        path: 'ourservices', component: OurservicesComponent, 
    },
    {
        path: 'contactus', component: ContactusComponent, 
    },
    {
        path: 'about', component: AboutComponent, 
    }

];