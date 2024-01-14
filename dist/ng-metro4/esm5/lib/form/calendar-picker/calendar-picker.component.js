import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ControlBase } from '../control-base';
import * as moment from 'moment';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
var _moment = moment;
var CalendarPickerComponent = /** @class */ (function (_super) {
    __extends(CalendarPickerComponent, _super);
    function CalendarPickerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarPickerComponent_1 = CalendarPickerComponent;
    CalendarPickerComponent.prototype.createControl = function () {
        var _this = this;
        return new Promise(function (complete) {
            var originalElement = $(_this.input.nativeElement);
            ObjectHelper.hide(originalElement);
            if (_this.clonedElement) {
                _this.clonedElement.parent().remove();
            }
            _this.clonedElement = originalElement.clone();
            ObjectHelper.show(_this.clonedElement);
            originalElement.parent().append(_this.clonedElement);
            _this.calendarPicker = _this.clonedElement.calendarpicker().data('calendarpicker');
            _this.clonedElement.one('blur', function () {
                _this.touchCallback();
            });
            _this.calendarPicker.options.onChange = function () {
                asapScheduler.schedule(function () {
                    var val = _this.calendarPicker.value;
                    _this.changeValue(val ? _moment(val.toLocaleDateString('en'), 'MM/DD/YYYY') : null);
                });
            };
            complete();
        });
    };
    CalendarPickerComponent.prototype.disable = function (disabled) {
        var _this = this;
        asapScheduler.schedule(function () {
            if (disabled) {
                _this.calendarPicker.disable();
            }
            else {
                _this.calendarPicker.enable();
            }
        });
    };
    CalendarPickerComponent.prototype.newValue = function () {
        var _this = this;
        if (!this.calendarPicker) {
            return;
        }
        asapScheduler.schedule(function () {
            _this.calendarPicker.val(_this.innerValue ? _this.innerValue.format('MM/DD/YYYY') : '01/01/0000');
        });
    };
    CalendarPickerComponent.prototype.convertMomentArray = function (arr) {
        return arr ? arr.map(function (v) { return v.format('MM/DD/YYYY'); }).join(',') : null;
    };
    CalendarPickerComponent.prototype.newClassValue = function (newClasses, oldClasses) {
        var _this = this;
        asapScheduler.schedule(function () {
            if (_this.clonedElement) {
                var target_1 = _this.clonedElement.parent();
                oldClasses.forEach(function (cls) {
                    target_1.removeClass(cls);
                });
                newClasses.forEach(function (cls) {
                    target_1.addClass(cls);
                });
            }
        });
    };
    var CalendarPickerComponent_1;
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
    return CalendarPickerComponent;
}(ControlBase));
export { CalendarPickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2NhbGVuZGFyLXBpY2tlci9jYWxlbmRhci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFeEQsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBVXZCO0lBQTZDLDJDQUEwQjtJQUF2RTs7SUErR0EsQ0FBQztnQ0EvR1ksdUJBQXVCO0lBeUNsQywrQ0FBYSxHQUFiO1FBQUEsaUJBNkJDO1FBNUJDLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxRQUFRO1lBQ2hDLElBQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3RDO1lBRUQsS0FBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFF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Q0FBQzs7K0RBQXFCO0lBRXJCO1FBQXBCLEtBQUssQ0FBQyxZQUFZLENBQUM7OzhEQUFtQjtJQUNuQjtRQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOzs2REFBa0I7SUFDZDtRQUF0QixLQUFLLENBQUMsY0FBYyxDQUFDOztnRUFBcUI7SUFDckI7UUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7K0RBQW9CO0lBQ2xCO1FBQXRCLEtBQUssQ0FBQyxjQUFjLENBQUM7O2dFQUFxQjtJQUNiO1FBQTdCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7c0VBQTJCO0lBQ3pCO1FBQTlCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQzs7dUVBQTRCO0lBQzVCO1FBQTdCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7c0VBQTJCO0lBQzNCO1FBQTVCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7cUVBQTBCO0lBRWhCO1FBQXJDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQWdCLFVBQVU7MERBQUM7SUFyQ3JELHVCQUF1QjtRQVBuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLDh1REFBK0M7WUFFL0MsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLHlCQUF1QixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyx5QkFBdUIsQ0FBQyxDQUFDO1lBQ3RHLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDO09BQ1csdUJBQXVCLENBK0duQztJQUFELDhCQUFDO0NBQUEsQUEvR0QsQ0FBNkMsV0FBVyxHQStHdkQ7U0EvR1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4uLy4uL2hlbHBlci9kZWZhdWx0LXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7Q29udHJvbEJhc2V9IGZyb20gJy4uL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7V2lkZVBvaW50VHlwZX0gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGVzJztcbmltcG9ydCB7VHlwZUFsaWFzfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZS1hbGlhcyc7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtPYmplY3RIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QtaGVscGVyJztcblxuY29uc3QgX21vbWVudCA9IG1vbWVudDtcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtY2FsZW5kYXItcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbGVuZGFyLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhbGVuZGFyLXBpY2tlci5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW0RlZmF1bHRWYWx1ZUFjY2Vzc29yLmdldChDYWxlbmRhclBpY2tlckNvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoQ2FsZW5kYXJQaWNrZXJDb21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQmFzZTxtb21lbnQuTW9tZW50PiB7XG5cbiAgQElucHV0KCdjYWxlbmRhci13aWRlJykgY2FsZW5kYXJXaWRlOiBib29sZWFuO1xuICBASW5wdXQoJ2NhbGVuZGFyLXdpZGUtcG9pbnQnKSBjYWxlbmRhcldpZGVQb2ludDogV2lkZVBvaW50VHlwZTtcbiAgQElucHV0KCdkaWFsb2ctbW9kZScpIGRpYWxvZ01vZGU6IGJvb2xlYW47XG4gIEBJbnB1dCgnZGlhbG9nLXBvaW50JykgZGlhbG9nUG9pbnQ6IG51bWJlcjtcbiAgQElucHV0KCdkaWFsb2ctb3ZlcmxheScpIGRpYWxvZ092ZXJsYXk6IGJvb2xlYW47XG4gIEBJbnB1dCgnb3ZlcmxheS1jb2xvcicpIG92ZXJsYXlDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoJ292ZXJsYXktYWxwaGEnKSBvdmVybGF5QWxwaGE6IG51bWJlcjtcbiAgQElucHV0KCdsb2NhbGUnKSBsb2NhbGU6IHN0cmluZztcbiAgQElucHV0KCdzaXplJykgc2l6ZTogc3RyaW5nO1xuICBASW5wdXQoJ2Zvcm1hdCcpIGZvcm1hdDogc3RyaW5nO1xuICBASW5wdXQoJ2NsZWFyLWJ1dHRvbicpIGNsZWFyQnV0dG9uOiBib29sZWFuO1xuICBASW5wdXQoJ2NsZWFyLWJ1dHRvbi1pY29uJykgY2xlYXJCdXR0b25JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2FsZW5kYXItYnV0dG9uLWljb24nKSBjYWxlbmRhckJ1dHRvbkljb246IHN0cmluZztcbiAgQElucHV0KCd5ZWFycy1iZWZvcmUnKSB5ZWFyc0JlZm9yZTogbnVtYmVyO1xuICBASW5wdXQoJ3llYXJzLWFmdGVyJykgeWVhcnNBZnRlcjogbnVtYmVyO1xuICBASW5wdXQoJ3dlZWstc3RhcnQnKSB3ZWVrU3RhcnQ6IDB8MTtcbiAgQElucHV0KCdvdXRzaWRlJykgb3V0c2lkZTogYm9vbGVhbjtcbiAgQElucHV0KCdyaXBwbGUnKSByaXBwbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgncmlwcGxlLWNvbG9yJykgcmlwcGxlQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCdleGNsdWRlJykgZXhjbHVkZTogbW9tZW50Lk1vbWVudFtdO1xuICBASW5wdXQoJ2luY2x1ZGUnKSBpbmNsdWRlOiBtb21lbnQuTW9tZW50W107XG4gIEBJbnB1dCgnbWluLWRhdGUnKSBtaW5EYXRlOiBtb21lbnQuTW9tZW50O1xuICBASW5wdXQoJ21heC1kYXRlJykgbWF4RGF0ZTogbW9tZW50Lk1vbWVudDtcbiAgQElucHV0KCdzaG93LWhlYWRlcicpIHNob3dIZWFkZXI6IGJvb2xlYW47XG5cbiAgQElucHV0KCdjbHMtcGlja2VyJykgY2xzUGlja2VyOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXRvZGF5JykgY2xzVG9kYXk6IHN0cmluZztcbiAgQElucHV0KCdjbHMtc2VsZWN0ZWQnKSBjbHNTZWxlY3RlZDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1leGNsdWRlJykgY2xzRXhjbHVkZTogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jYWxlbmRhcicpIGNsc0NhbGVuZGFyOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNhbGVuZGFyLWhlYWRlcicpIGNsc0NhbGVuZGFySGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNhbGVuZGFyLWNvbnRlbnQnKSBjbHNDYWxlbmRhckNvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2FsZW5kYXItbW9udGhzJykgY2xzQ2FsZW5kYXJNb250aHM6IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2FsZW5kYXIteWVhcnMnKSBjbHNDYWxlbmRhclllYXJzOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNhbGVuZGFyUGlja2VyOiBhbnk7XG4gIHByaXZhdGUgY2xvbmVkRWxlbWVudDogYW55O1xuXG4gIGNyZWF0ZUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChjb21wbGV0ZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcblxuICAgICAgdGhpcy5jYWxlbmRhclBpY2tlciA9IHRoaXMuY2xvbmVkRWxlbWVudC5jYWxlbmRhcnBpY2tlcigpLmRhdGEoJ2NhbGVuZGFycGlja2VyJyk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5vbmUoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG91Y2hDYWxsYmFjaygpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2FsZW5kYXJQaWNrZXIub3B0aW9ucy5vbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5jYWxlbmRhclBpY2tlci52YWx1ZTtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbCA/IF9tb21lbnQodmFsLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4nKSwgJ01NL0REL1lZWVknKSA6IG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbXBsZXRlKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmNhbGVuZGFyUGlja2VyLmRpc2FibGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJQaWNrZXIuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZXdWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2FsZW5kYXJQaWNrZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIHRoaXMuY2FsZW5kYXJQaWNrZXIudmFsKHRoaXMuaW5uZXJWYWx1ZSA/IHRoaXMuaW5uZXJWYWx1ZS5mb3JtYXQoJ01NL0REL1lZWVknKSA6ICcwMS8wMS8wMDAwJyk7XG4gICAgfSk7XG4gIH1cblxuICBjb252ZXJ0TW9tZW50QXJyYXkoYXJyOiBtb21lbnQuTW9tZW50W10pIHtcbiAgICByZXR1cm4gYXJyID8gYXJyLm1hcCh2ID0+IHYuZm9ybWF0KCdNTS9ERC9ZWVlZJykpLmpvaW4oJywnKSA6IG51bGw7XG4gIH1cblxuICBuZXdDbGFzc1ZhbHVlKG5ld0NsYXNzZXM6IHN0cmluZ1tdLCBvbGRDbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCk7XG5cbiAgICAgICAgb2xkQ2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhjbHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBuZXdDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGFyZ2V0LmFkZENsYXNzKGNscyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=