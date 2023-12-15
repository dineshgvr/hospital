import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AlarmComponent } from './components/alarm/alarm.component';
import { EventLogComponent } from './components/event-log/event-log.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'alarm', component: AlarmComponent, pathMatch: 'prefix', title: 'Alarm'},
    {path: 'event', component: EventLogComponent, pathMatch: 'prefix', title: 'Event Log'},
    {path: 'settings', component: SettingsComponent, pathMatch: 'prefix', title: 'Settings'},
    
];
