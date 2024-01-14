import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'metro4';
import { TagInputComponent } from './tag-input/tag-input.component';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { SwitchComponent } from './switch/switch.component';
import { FileInputComponent } from './file-input/file-input.component';
import { KeypadComponent } from './keypad/keypad.component';
import { SliderComponent } from './slider/slider.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RatingComponent } from './rating/rating.component';
import { CalendarPickerComponent } from './calendar-picker/calendar-picker.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { IsArrayPipe } from './pipes/is-array.pipe';
import { FormControlWrapperComponent } from './form-control-wrapper/form-control-wrapper.component';
import { ErrorDisplayPipe } from './pipes/error-display.pipe';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { UnwrapObservableOrValuePipe } from './pipes/unwrap-observable-or-value.pipe';
import { ExecuteFunctionOncePipe } from './pipes/execute-function-once.pipe';
import { TrustHtmlPipe } from './pipes/trust-html.pipe';
import { ObjectKeysPipe } from './pipes/object-keys.pipe';
import { CreateHashPipe } from './pipes/create-hash.pipe';
var declarations = [
    TagInputComponent,
    SelectComponent,
    InputComponent,
    MaterialInputComponent,
    TextareaComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    RadioComponent,
    RadioGroupComponent,
    SwitchComponent,
    FileInputComponent,
    KeypadComponent,
    SliderComponent,
    SpinnerComponent,
    RatingComponent,
    CalendarPickerComponent,
    CalendarComponent,
    DatePickerComponent,
    TimePickerComponent,
    FormControlWrapperComponent,
    FormWrapperComponent,
    FormBuilderComponent,
    DynamicFormControlComponent,
];
var NgMetro4FormsModule = /** @class */ (function () {
    function NgMetro4FormsModule() {
    }
    NgMetro4FormsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: __spread([
                IsArrayPipe,
                ErrorDisplayPipe,
                UnwrapObservableOrValuePipe,
                ExecuteFunctionOncePipe,
                TrustHtmlPipe,
                ObjectKeysPipe
            ], declarations, [
                CreateHashPipe,
            ]),
            exports: __spread(declarations, [
                CommonModule,
                FormsModule,
                ReactiveFormsModule
            ])
        })
    ], NgMetro4FormsModule);
    return NgMetro4FormsModule;
}());
export { NgMetro4FormsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWV0cm80LWZvcm1zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL25nLW1ldHJvNC1mb3Jtcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sUUFBUSxDQUFDO0FBRWhCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDakYsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ2xELE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2xHLE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQ3BGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRTFELElBQU0sWUFBWSxHQUFHO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQiwyQkFBMkI7Q0FDNUIsQ0FBQztBQXlCRjtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBdkIvQixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLG1CQUFtQjthQUNwQjtZQUNELFlBQVk7Z0JBQ1YsV0FBVztnQkFDWCxnQkFBZ0I7Z0JBQ2hCLDJCQUEyQjtnQkFDM0IsdUJBQXVCO2dCQUN2QixhQUFhO2dCQUNiLGNBQWM7ZUFDWCxZQUFZO2dCQUNmLGNBQWM7Y0FDZjtZQUNELE9BQU8sV0FDRixZQUFZO2dCQUNmLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxtQkFBbUI7Y0FDcEI7U0FDRixDQUFDO09BQ1csbUJBQW1CLENBQUk7SUFBRCwwQkFBQztDQUFBLEFBQXBDLElBQW9DO1NBQXZCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgJ21ldHJvNCc7XG5cbmltcG9ydCB7VGFnSW5wdXRDb21wb25lbnR9IGZyb20gJy4vdGFnLWlucHV0L3RhZy1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtTZWxlY3RDb21wb25lbnR9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtJbnB1dENvbXBvbmVudH0gZnJvbSAnLi9pbnB1dC9pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtNYXRlcmlhbElucHV0Q29tcG9uZW50fSBmcm9tICcuL21hdGVyaWFsLWlucHV0L21hdGVyaWFsLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQge1RleHRhcmVhQ29tcG9uZW50fSBmcm9tICcuL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQge0NoZWNrYm94Q29tcG9uZW50fSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQge1JhZGlvQ29tcG9uZW50fSBmcm9tICcuL3JhZGlvL3JhZGlvLmNvbXBvbmVudCc7XG5pbXBvcnQge1JhZGlvR3JvdXBDb21wb25lbnR9IGZyb20gJy4vcmFkaW8tZ3JvdXAvcmFkaW8tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7U3dpdGNoQ29tcG9uZW50fSBmcm9tICcuL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50JztcbmltcG9ydCB7RmlsZUlucHV0Q29tcG9uZW50fSBmcm9tICcuL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHtLZXlwYWRDb21wb25lbnR9IGZyb20gJy4va2V5cGFkL2tleXBhZC5jb21wb25lbnQnO1xuaW1wb3J0IHtTbGlkZXJDb21wb25lbnR9IGZyb20gJy4vc2xpZGVyL3NsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtTcGlubmVyQ29tcG9uZW50fSBmcm9tICcuL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQnO1xuaW1wb3J0IHtSYXRpbmdDb21wb25lbnR9IGZyb20gJy4vcmF0aW5nL3JhdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtDYWxlbmRhclBpY2tlckNvbXBvbmVudH0gZnJvbSAnLi9jYWxlbmRhci1waWNrZXIvY2FsZW5kYXItcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQge0NhbGVuZGFyQ29tcG9uZW50fSBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0RhdGVQaWNrZXJDb21wb25lbnR9IGZyb20gJy4vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7VGltZVBpY2tlckNvbXBvbmVudH0gZnJvbSAnLi90aW1lLXBpY2tlci90aW1lLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDaGVja2JveEdyb3VwQ29tcG9uZW50fSBmcm9tICcuL2NoZWNrYm94LWdyb3VwL2NoZWNrYm94LWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQge0lzQXJyYXlQaXBlfSBmcm9tICcuL3BpcGVzL2lzLWFycmF5LnBpcGUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbFdyYXBwZXJDb21wb25lbnR9IGZyb20gJy4vZm9ybS1jb250cm9sLXdyYXBwZXIvZm9ybS1jb250cm9sLXdyYXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7RXJyb3JEaXNwbGF5UGlwZX0gZnJvbSAnLi9waXBlcy9lcnJvci1kaXNwbGF5LnBpcGUnO1xuaW1wb3J0IHtGb3JtV3JhcHBlckNvbXBvbmVudH0gZnJvbSAnLi9mb3JtLXdyYXBwZXIvZm9ybS13cmFwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyQ29tcG9uZW50fSBmcm9tICcuL2Zvcm0tYnVpbGRlci9mb3JtLWJ1aWxkZXIuY29tcG9uZW50JztcbmltcG9ydCB7RHluYW1pY0Zvcm1Db250cm9sQ29tcG9uZW50fSBmcm9tICcuL2R5bmFtaWMtZm9ybS1jb250cm9sL2R5bmFtaWMtZm9ybS1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQge1Vud3JhcE9ic2VydmFibGVPclZhbHVlUGlwZX0gZnJvbSAnLi9waXBlcy91bndyYXAtb2JzZXJ2YWJsZS1vci12YWx1ZS5waXBlJztcbmltcG9ydCB7RXhlY3V0ZUZ1bmN0aW9uT25jZVBpcGV9IGZyb20gJy4vcGlwZXMvZXhlY3V0ZS1mdW5jdGlvbi1vbmNlLnBpcGUnO1xuaW1wb3J0IHtUcnVzdEh0bWxQaXBlfSBmcm9tICcuL3BpcGVzL3RydXN0LWh0bWwucGlwZSc7XG5pbXBvcnQge09iamVjdEtleXNQaXBlfSBmcm9tICcuL3BpcGVzL29iamVjdC1rZXlzLnBpcGUnO1xuaW1wb3J0IHsgQ3JlYXRlSGFzaFBpcGUgfSBmcm9tICcuL3BpcGVzL2NyZWF0ZS1oYXNoLnBpcGUnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG4gIFRhZ0lucHV0Q29tcG9uZW50LFxuICBTZWxlY3RDb21wb25lbnQsXG4gIElucHV0Q29tcG9uZW50LFxuICBNYXRlcmlhbElucHV0Q29tcG9uZW50LFxuICBUZXh0YXJlYUNvbXBvbmVudCxcbiAgQ2hlY2tib3hDb21wb25lbnQsXG4gIENoZWNrYm94R3JvdXBDb21wb25lbnQsXG4gIFJhZGlvQ29tcG9uZW50LFxuICBSYWRpb0dyb3VwQ29tcG9uZW50LFxuICBTd2l0Y2hDb21wb25lbnQsXG4gIEZpbGVJbnB1dENvbXBvbmVudCxcbiAgS2V5cGFkQ29tcG9uZW50LFxuICBTbGlkZXJDb21wb25lbnQsXG4gIFNwaW5uZXJDb21wb25lbnQsXG4gIFJhdGluZ0NvbXBvbmVudCxcbiAgQ2FsZW5kYXJQaWNrZXJDb21wb25lbnQsXG4gIENhbGVuZGFyQ29tcG9uZW50LFxuICBEYXRlUGlja2VyQ29tcG9uZW50LFxuICBUaW1lUGlja2VyQ29tcG9uZW50LFxuICBGb3JtQ29udHJvbFdyYXBwZXJDb21wb25lbnQsXG4gIEZvcm1XcmFwcGVyQ29tcG9uZW50LFxuICBGb3JtQnVpbGRlckNvbXBvbmVudCxcbiAgRHluYW1pY0Zvcm1Db250cm9sQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIElzQXJyYXlQaXBlLFxuICAgIEVycm9yRGlzcGxheVBpcGUsXG4gICAgVW53cmFwT2JzZXJ2YWJsZU9yVmFsdWVQaXBlLFxuICAgIEV4ZWN1dGVGdW5jdGlvbk9uY2VQaXBlLFxuICAgIFRydXN0SHRtbFBpcGUsXG4gICAgT2JqZWN0S2V5c1BpcGUsXG4gICAgLi4uZGVjbGFyYXRpb25zLFxuICAgIENyZWF0ZUhhc2hQaXBlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uZGVjbGFyYXRpb25zLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdNZXRybzRGb3Jtc01vZHVsZSB7IH1cbiJdfQ==