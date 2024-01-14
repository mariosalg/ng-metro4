var CalendarPickerComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ControlBase } from '../control-base';
import * as moment from 'moment';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
const _moment = moment;
let CalendarPickerComponent = CalendarPickerComponent_1 = class CalendarPickerComponent extends ControlBase {
    createControl() {
        return new Promise((complete) => {
            const originalElement = $(this.input.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.parent().remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.calendarPicker = this.clonedElement.calendarpicker().data('calendarpicker');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.calendarPicker.options.onChange = () => {
                asapScheduler.schedule(() => {
                    const val = this.calendarPicker.value;
                    this.changeValue(val ? _moment(val.toLocaleDateString('en'), 'MM/DD/YYYY') : null);
                });
            };
            complete();
        });
    }
    disable(disabled) {
        asapScheduler.schedule(() => {
            if (disabled) {
                this.calendarPicker.disable();
            }
            else {
                this.calendarPicker.enable();
            }
        });
    }
    newValue() {
        if (!this.calendarPicker) {
            return;
        }
        asapScheduler.schedule(() => {
            this.calendarPicker.val(this.innerValue ? this.innerValue.format('MM/DD/YYYY') : '01/01/0000');
        });
    }
    convertMomentArray(arr) {
        return arr ? arr.map(v => v.format('MM/DD/YYYY')).join(',') : null;
    }
    newClassValue(newClasses, oldClasses) {
        asapScheduler.schedule(() => {
            if (this.clonedElement) {
                const target = this.clonedElement.parent();
                oldClasses.forEach((cls) => {
                    target.removeClass(cls);
                });
                newClasses.forEach((cls) => {
                    target.addClass(cls);
                });
            }
        });
    }
};
__decorate([
    Input('calendar-wide'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "calendarWide", void 0);
__decorate([
    Input('calendar-wide-point'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "calendarWidePoint", void 0);
__decorate([
    Input('dialog-mode'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "dialogMode", void 0);
__decorate([
    Input('dialog-point'),
    __metadata("design:type", Number)
], CalendarPickerComponent.prototype, "dialogPoint", void 0);
__decorate([
    Input('dialog-overlay'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "dialogOverlay", void 0);
__decorate([
    Input('overlay-color'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "overlayColor", void 0);
__decorate([
    Input('overlay-alpha'),
    __metadata("design:type", Number)
], CalendarPickerComponent.prototype, "overlayAlpha", void 0);
__decorate([
    Input('locale'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "locale", void 0);
__decorate([
    Input('size'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "size", void 0);
__decorate([
    Input('format'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "format", void 0);
__decorate([
    Input('clear-button'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "clearButton", void 0);
__decorate([
    Input('clear-button-icon'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clearButtonIcon", void 0);
__decorate([
    Input('calendar-button-icon'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "calendarButtonIcon", void 0);
__decorate([
    Input('years-before'),
    __metadata("design:type", Number)
], CalendarPickerComponent.prototype, "yearsBefore", void 0);
__decorate([
    Input('years-after'),
    __metadata("design:type", Number)
], CalendarPickerComponent.prototype, "yearsAfter", void 0);
__decorate([
    Input('week-start'),
    __metadata("design:type", Number)
], CalendarPickerComponent.prototype, "weekStart", void 0);
__decorate([
    Input('outside'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "outside", void 0);
__decorate([
    Input('ripple'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "ripple", void 0);
__decorate([
    Input('ripple-color'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "rippleColor", void 0);
__decorate([
    Input('exclude'),
    __metadata("design:type", Array)
], CalendarPickerComponent.prototype, "exclude", void 0);
__decorate([
    Input('include'),
    __metadata("design:type", Array)
], CalendarPickerComponent.prototype, "include", void 0);
__decorate([
    Input('min-date'),
    __metadata("design:type", Object)
], CalendarPickerComponent.prototype, "minDate", void 0);
__decorate([
    Input('max-date'),
    __metadata("design:type", Object)
], CalendarPickerComponent.prototype, "maxDate", void 0);
__decorate([
    Input('show-header'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "showHeader", void 0);
__decorate([
    Input('cls-picker'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsPicker", void 0);
__decorate([
    Input('cls-today'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsToday", void 0);
__decorate([
    Input('cls-selected'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsSelected", void 0);
__decorate([
    Input('cls-exclude'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsExclude", void 0);
__decorate([
    Input('cls-calendar'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsCalendar", void 0);
__decorate([
    Input('cls-calendar-header'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsCalendarHeader", void 0);
__decorate([
    Input('cls-calendar-content'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsCalendarContent", void 0);
__decorate([
    Input('cls-calendar-months'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsCalendarMonths", void 0);
__decorate([
    Input('cls-calendar-years'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsCalendarYears", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], CalendarPickerComponent.prototype, "input", void 0);
CalendarPickerComponent = CalendarPickerComponent_1 = __decorate([
    Component({
        selector: 'm4-calendar-picker',
        template: "<input type=\"text\" #input\n\n       data-input-format=\"%m/%d/%Y\"\n\n       [attr.data-calendar-wide]=\"calendarWide\"\n       [attr.data-calendar-wide-point]=\"calendarWidePoint\"\n       [attr.data-dialog-mode]=\"dialogMode\"\n       [attr.data-dialog-point]=\"dialogPoint\"\n       [attr.data-dialog-overlay]=\"dialogOverlay\"\n       [attr.data-overlay-color]=\"overlayColor\"\n       [attr.data-overlay-alpha]=\"overlayAlpha\"\n       [attr.data-locale]=\"locale\"\n       [attr.data-size]=\"size\"\n       [attr.data-format]=\"format\"\n       [attr.data-clear-button]=\"clearButton\"\n       [attr.data-clear-button-icon]=\"clearButtonIcon\"\n       [attr.data-calendar-button-icon]=\"calendarButtonIcon\"\n       [attr.data-years-before]=\"yearsBefore\"\n       [attr.data-years-after]=\"yearsAfter\"\n       [attr.data-week-start]=\"weekStart\"\n       [attr.data-outside]=\"outside\"\n       [attr.data-ripple]=\"ripple\"\n       [attr.data-ripple-color]=\"rippleColor\"\n       [attr.data-exclude]=\"convertMomentArray(exclude)\"\n       [attr.data-special]=\"convertMomentArray(include)\"\n       [attr.data-min-date]=\"minDate?.format('MM/DD/YYYY')\"\n       [attr.data-max-date]=\"maxDate?.format('MM/DD/YYYY')\"\n       [attr.data-show-header]=\"showHeader\"\n\n       [attr.data-cls-picker]=\"clsPicker\"\n       [attr.data-cls-today]=\"clsToday\"\n       [attr.data-cls-selected]=\"clsSelected\"\n       [attr.data-cls-exclude]=\"clsExclude\"\n       [attr.data-cls-calendar]=\"clsCalendar\"\n       [attr.data-cls-calendar-header]=\"clsCalendarHeader\"\n       [attr.data-cls-calendar-content]=\"clsCalendarContent\"\n       [attr.data-cls-calendar-months]=\"clsCalendarMonths\"\n       [attr.data-cls-calendar-years]=\"clsCalendarYears\">\n",
        providers: [DefaultValueAccessor.get(CalendarPickerComponent_1), TypeAlias.get(CalendarPickerComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], CalendarPickerComponent);
export { CalendarPickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2NhbGVuZGFyLXBpY2tlci9jYWxlbmRhci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFFakMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRXhELE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQztBQVV2QixJQUFhLHVCQUF1QiwrQkFBcEMsTUFBYSx1QkFBd0IsU0FBUSxXQUEwQjtJQXlDckUsYUFBYTtRQUNYLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQyxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRW5DLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN0QztZQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdD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QUMsYUFBYSxDQUFDOzsyREFBcUI7QUFFckI7SUFBcEIsS0FBSyxDQUFDLFlBQVksQ0FBQzs7MERBQW1CO0FBQ25CO0lBQW5CLEtBQUssQ0FBQyxXQUFXLENBQUM7O3lEQUFrQjtBQUNkO0lBQXRCLEtBQUssQ0FBQyxjQUFjLENBQUM7OzREQUFxQjtBQUNyQjtJQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOzsyREFBb0I7QUFDbEI7SUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQzs7NERBQXFCO0FBQ2I7SUFBN0IsS0FBSyxDQUFDLHFCQUFxQixDQUFDOztrRUFBMkI7QUFDekI7SUFBOUIsS0FBSyxDQUFDLHNCQUFzQixDQUFDOzttRUFBNEI7QUFDNUI7SUFBN0IsS0FBSyxDQUFDLHFCQUFxQixDQUFDOztrRUFBMkI7QUFDM0I7SUFBNUIsS0FBSyxDQUFDLG9CQUFvQixDQUFDOztpRUFBMEI7QUFFaEI7SUFBckMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBZ0IsVUFBVTtzREFBQztBQXJDckQsdUJBQXVCO0lBUG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsOHVEQUErQztRQUUvQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMseUJBQXVCLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLHlCQUF1QixDQUFDLENBQUM7UUFDdEcsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7R0FDVyx1QkFBdUIsQ0ErR25DO1NBL0dZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1dpZGVQb2ludFR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5cbmNvbnN0IF9tb21lbnQgPSBtb21lbnQ7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LWNhbGVuZGFyLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYWxlbmRhci1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci1waWNrZXIuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoQ2FsZW5kYXJQaWNrZXJDb21wb25lbnQpLCBUeXBlQWxpYXMuZ2V0KENhbGVuZGFyUGlja2VyQ29tcG9uZW50KV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8bW9tZW50Lk1vbWVudD4ge1xuXG4gIEBJbnB1dCgnY2FsZW5kYXItd2lkZScpIGNhbGVuZGFyV2lkZTogYm9vbGVhbjtcbiAgQElucHV0KCdjYWxlbmRhci13aWRlLXBvaW50JykgY2FsZW5kYXJXaWRlUG9pbnQ6IFdpZGVQb2ludFR5cGU7XG4gIEBJbnB1dCgnZGlhbG9nLW1vZGUnKSBkaWFsb2dNb2RlOiBib29sZWFuO1xuICBASW5wdXQoJ2RpYWxvZy1wb2ludCcpIGRpYWxvZ1BvaW50OiBudW1iZXI7XG4gIEBJbnB1dCgnZGlhbG9nLW92ZXJsYXknKSBkaWFsb2dPdmVybGF5OiBib29sZWFuO1xuICBASW5wdXQoJ292ZXJsYXktY29sb3InKSBvdmVybGF5Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCdvdmVybGF5LWFscGhhJykgb3ZlcmxheUFscGhhOiBudW1iZXI7XG4gIEBJbnB1dCgnbG9jYWxlJykgbG9jYWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2l6ZScpIHNpemU6IHN0cmluZztcbiAgQElucHV0KCdmb3JtYXQnKSBmb3JtYXQ6IHN0cmluZztcbiAgQElucHV0KCdjbGVhci1idXR0b24nKSBjbGVhckJ1dHRvbjogYm9vbGVhbjtcbiAgQElucHV0KCdjbGVhci1idXR0b24taWNvbicpIGNsZWFyQnV0dG9uSWNvbjogc3RyaW5nO1xuICBASW5wdXQoJ2NhbGVuZGFyLWJ1dHRvbi1pY29uJykgY2FsZW5kYXJCdXR0b25JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgneWVhcnMtYmVmb3JlJykgeWVhcnNCZWZvcmU6IG51bWJlcjtcbiAgQElucHV0KCd5ZWFycy1hZnRlcicpIHllYXJzQWZ0ZXI6IG51bWJlcjtcbiAgQElucHV0KCd3ZWVrLXN0YXJ0Jykgd2Vla1N0YXJ0OiAwfDE7XG4gIEBJbnB1dCgnb3V0c2lkZScpIG91dHNpZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgncmlwcGxlJykgcmlwcGxlOiBib29sZWFuO1xuICBASW5wdXQoJ3JpcHBsZS1jb2xvcicpIHJpcHBsZUNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgnZXhjbHVkZScpIGV4Y2x1ZGU6IG1vbWVudC5Nb21lbnRbXTtcbiAgQElucHV0KCdpbmNsdWRlJykgaW5jbHVkZTogbW9tZW50Lk1vbWVudFtdO1xuICBASW5wdXQoJ21pbi1kYXRlJykgbWluRGF0ZTogbW9tZW50Lk1vbWVudDtcbiAgQElucHV0KCdtYXgtZGF0ZScpIG1heERhdGU6IG1vbWVudC5Nb21lbnQ7XG4gIEBJbnB1dCgnc2hvdy1oZWFkZXInKSBzaG93SGVhZGVyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnY2xzLXBpY2tlcicpIGNsc1BpY2tlcjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy10b2RheScpIGNsc1RvZGF5OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXNlbGVjdGVkJykgY2xzU2VsZWN0ZWQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtZXhjbHVkZScpIGNsc0V4Y2x1ZGU6IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2FsZW5kYXInKSBjbHNDYWxlbmRhcjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jYWxlbmRhci1oZWFkZXInKSBjbHNDYWxlbmRhckhlYWRlcjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jYWxlbmRhci1jb250ZW50JykgY2xzQ2FsZW5kYXJDb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNhbGVuZGFyLW1vbnRocycpIGNsc0NhbGVuZGFyTW9udGhzOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNhbGVuZGFyLXllYXJzJykgY2xzQ2FsZW5kYXJZZWFyczogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjYWxlbmRhclBpY2tlcjogYW55O1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuY2FsZW5kYXJQaWNrZXIgPSB0aGlzLmNsb25lZEVsZW1lbnQuY2FsZW5kYXJwaWNrZXIoKS5kYXRhKCdjYWxlbmRhcnBpY2tlcicpO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQub25lKCdibHVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvdWNoQ2FsbGJhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNhbGVuZGFyUGlja2VyLm9wdGlvbnMub25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuY2FsZW5kYXJQaWNrZXIudmFsdWU7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh2YWwgPyBfbW9tZW50KHZhbC50b0xvY2FsZURhdGVTdHJpbmcoJ2VuJyksICdNTS9ERC9ZWVlZJykgOiBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuXG4gIH1cblxuICBkaXNhYmxlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5jYWxlbmRhclBpY2tlci5kaXNhYmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhbGVuZGFyUGlja2VyLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmV3VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNhbGVuZGFyUGlja2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICB0aGlzLmNhbGVuZGFyUGlja2VyLnZhbCh0aGlzLmlubmVyVmFsdWUgPyB0aGlzLmlubmVyVmFsdWUuZm9ybWF0KCdNTS9ERC9ZWVlZJykgOiAnMDEvMDEvMDAwMCcpO1xuICAgIH0pO1xuICB9XG5cbiAgY29udmVydE1vbWVudEFycmF5KGFycjogbW9tZW50Lk1vbWVudFtdKSB7XG4gICAgcmV0dXJuIGFyciA/IGFyci5tYXAodiA9PiB2LmZvcm1hdCgnTU0vREQvWVlZWScpKS5qb2luKCcsJykgOiBudWxsO1xuICB9XG5cbiAgbmV3Q2xhc3NWYWx1ZShuZXdDbGFzc2VzOiBzdHJpbmdbXSwgb2xkQ2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpO1xuXG4gICAgICAgIG9sZENsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2xhc3MoY2xzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3Q2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRhcmdldC5hZGRDbGFzcyhjbHMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19