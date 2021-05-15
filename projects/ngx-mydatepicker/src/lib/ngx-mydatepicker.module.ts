import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { NgxMyDatePicker } from "./ngx-mydatepicker.component";
import { NgxMyDatePickerDirective } from "./ngx-mydatepicker.input";
import { FocusDirective } from "./directives/ngx-mydatepicker.focus.directive";
import { NgxMyDatePickerConfig } from "./services/ngx-mydatepicker.config";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [NgxMyDatePicker, NgxMyDatePickerDirective, FocusDirective],
    entryComponents: [NgxMyDatePicker],
    exports: [NgxMyDatePicker, NgxMyDatePickerDirective, FocusDirective]
})
export class NgxMyDatePickerModule {
    static forRoot(): ModuleWithProviders<NgxMyDatePickerModule> {
        return {
            ngModule: NgxMyDatePickerModule,
            providers: [NgxMyDatePickerConfig]
        };
    }
}

