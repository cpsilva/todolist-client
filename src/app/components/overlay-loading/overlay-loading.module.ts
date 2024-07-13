import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { OverlayLoadingComponent } from "./component/overlay-loading.component";

@NgModule({
    declarations: [
        OverlayLoadingComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
    ],
    providers: [
    ],
    exports: [
        OverlayLoadingComponent
    ]
})
export class OverlayLoadingModule {
}