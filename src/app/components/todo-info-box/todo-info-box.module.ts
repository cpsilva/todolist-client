import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TodoInfoBoxComponent } from "./component/todo-info-box.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { OverlayLoadingModule } from "@components/overlay-loading/overlay-loading.module";
import { ProfabricComponentsModule } from "@profabric/angular-components";

@NgModule({
    declarations: [
        TodoInfoBoxComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        OverlayLoadingModule,
        ProfabricComponentsModule
    ],
    providers: [
    ],
    exports: [
        TodoInfoBoxComponent
    ]
})
export class TodoInfoBoxModule {
}