import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from '@/app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from '@modules/main/main.component';
import { LoginComponent } from '@modules/login/login.component';
import { HeaderComponent } from '@modules/main/header/header.component';
import { FooterComponent } from '@modules/main/footer/footer.component';
import { MenuSidebarComponent } from '@modules/main/menu-sidebar/menu-sidebar.component';
import { BlankComponent } from '@pages/blank/blank.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from '@pages/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from '@modules/register/register.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { ToastrModule } from 'ngx-toastr';

import { CommonModule, registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { UserComponent } from '@modules/main/header/user/user.component';
import { ForgotPasswordComponent } from '@modules/forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from '@modules/recover-password/recover-password.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/auth/reducer';
import { uiReducer } from './store/ui/reducer';
import { ProfabricComponentsModule } from '@profabric/angular-components';
import { environment } from 'environments/environment';
import { ActivityTabComponent } from './pages/profile/activity-tab/activity-tab.component';
import { TimelineTabComponent } from './pages/profile/timeline-tab/timeline-tab.component';
import { SettingsTabComponent } from './pages/profile/settings-tab/settings-tab.component';
import { PostComponent } from './pages/profile/post/post.component';
import { InfoBoxComponent } from './components/info-box/info-box.component';
import { SmallBoxComponent } from './components/small-box/small-box.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        BlankComponent,
        ProfileComponent,
        RegisterComponent,
        DashboardComponent,
        UserComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        MenuItemComponent,
        ActivityTabComponent,
        TimelineTabComponent,
        SettingsTabComponent,
        PostComponent,
        InfoBoxComponent,
        SmallBoxComponent,
        ContentHeaderComponent,
        LoadingComponent,
        OverlayLoadingComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        ProfabricComponentsModule,
        CommonModule,
        BrowserModule,
        StoreModule.forRoot({ auth: authReducer, ui: uiReducer }),
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        }),
        FontAwesomeModule
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule { }
