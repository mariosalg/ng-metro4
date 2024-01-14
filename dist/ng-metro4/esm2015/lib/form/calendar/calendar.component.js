var CalendarComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import * as moment from 'moment';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
const _moment = moment;
let CalendarComponent = CalendarComponent_1 = class CalendarComponent extends ControlBase {
    createControl() {
        return new Promise((complete) => {
            const originalElement = $(this.object.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.calendar = this.clonedElement.calendar().data('calendar');
            asapScheduler.schedule(() => {
                this.clonedElement.find('.calendar-content .day, .calendar-content span, .calendar-footer button').on('click', () => {
                    this.touchCallback();
                    this.clonedElement.find('.calendar-content .day, .calendar-content span, .calendar-footer button').unbind('click');
                });
            });
            const selectDays = (selection) => {
                const dates = selection.map(s => _moment(s));
                if (this.multiSelect) {
                    this.changeValue(dates);
                }
                else {
                    this.changeValue(dates.length > 0 ? dates[0] : null);
                }
            };
            this.calendar.options.onDayClick = (selection) => {
                if (this.pickerMode) {
                    selectDays(selection);
                }
            };
            this.calendar.options.onDone = (selection) => {
                selectDays(selection);
            };
            complete();
        });
    }
    disable(disabled) {
        asapScheduler.schedule(() => {
            if (disabled) {
                this.clonedElement.addClass('disabled');
            }
            else {
                this.clonedElement.removeClass('disabled');
            }
        });
    }
    newValue() {
        if (!this.calendar) {
            return;
        }
        this.calendar.selected = [];
        asapScheduler.schedule(() => {
            if (this.innerValue) {
                if (this.multiSelect) {
                    this.calendar.setPreset(this.innerValue.map(v => v.format('MM/DD/YYYY')).join(','));
                }
                else {
                    this.calendar.setPreset(this.innerValue.format('MM/DD/YYYY'));
                }
            }
            else {
                this.calendar.setPreset('');
            }
        });
    }
    convertMomentArray(arr) {
        return arr ? arr.map(v => v.format('MM/DD/YYYY')).join(',') : null;
    }
    newClassValue(newClasses, oldClasses) {
        asapScheduler.schedule(() => {
            if (this.clonedElement) {
                const target = this.clonedElement;
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
    Input('years-before'),
    __metadata("design:type", Number)
], CalendarComponent.prototype, "yearsBefore", void 0);
__decorate([
    Input('years-after'),
    __metadata("design:type", Number)
], CalendarComponent.prototype, "yearsAfter", void 0);
__decorate([
    Input('show'),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "show", void 0);
__decorate([
    Input('picker-mode'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "pickerMode", void 0);
__decorate([
    Input('locale'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "locale", void 0);
__decorate([
    Input('week-start'),
    __metadata("design:type", Number)
], CalendarComponent.prototype, "weekStart", void 0);
__decorate([
    Input('outside'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "outside", void 0);
__decorate([
    Input('buttons'),
    __metadata("design:type", Array)
], CalendarComponent.prototype, "buttons", void 0);
__decorate([
    Input('ripple'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "ripple", void 0);
__decorate([
    Input('ripple-color'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "rippleColor", void 0);
__decorate([
    Input('exclude'),
    __metadata("design:type", Array)
], CalendarComponent.prototype, "exclude", void 0);
__decorate([
    Input('include'),
    __metadata("design:type", Array)
], CalendarComponent.prototype, "include", void 0);
__decorate([
    Input('min-date'),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "minDate", void 0);
__decorate([
    Input('max-date'),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "maxDate", void 0);
__decorate([
    Input('week-day-click'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "weekDayClick", void 0);
__decorate([
    Input('multi-select'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "multiSelect", void 0);
__decorate([
    Input('show-header'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "showHeader", void 0);
__decorate([
    Input('show-footer'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "showFooter", void 0);
__decorate([
    Input('wide-point'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "widePoint", void 0);
__decorate([
    Input('wide'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "wide", void 0);
__decorate([
    Input('cls-today'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsToday", void 0);
__decorate([
    Input('cls-selected'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsSelected", void 0);
__decorate([
    Input('cls-exclude'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsExclude", void 0);
__decorate([
    Input('cls-cancel-button'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCancelButton", void 0);
__decorate([
    Input('cls-today-button'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsTodayButton", void 0);
__decorate([
    Input('cls-clear-button'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsClearButton", void 0);
__decorate([
    Input('cls-done-button'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsDoneButton", void 0);
__decorate([
    Input('cls-calendar'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCalendar", void 0);
__decorate([
    Input('cls-calendar-header'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCalendarHeader", void 0);
__decorate([
    Input('cls-calendar-content'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCalendarContent", void 0);
__decorate([
    Input('cls-calendar-footer'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCalendarFooter", void 0);
__decorate([
    Input('cls-calendar-months'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCalendarMonths", void 0);
__decorate([
    Input('cls-calendar-years'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCalendarYears", void 0);
__decorate([
    ViewChild('object', { static: true }),
    __metadata("design:type", ElementRef)
], CalendarComponent.prototype, "object", void 0);
CalendarComponent = CalendarComponent_1 = __decorate([
    Component({
        selector: 'm4-calendar',
        template: "<div #object\n\n\n     [attr.data-years-before]=\"yearsBefore\"\n     [attr.data-years-after]=\"yearsAfter\"\n     [attr.data-show]=\"show?.format('MM/DD/YYYY')\"\n     [attr.data-picker-mode]=\"pickerMode && !multiSelect\"\n     [attr.data-locale]=\"locale\"\n     [attr.data-week-start]=\"weekStart\"\n     [attr.data-outside]=\"outside\"\n     [attr.data-buttons]=\"buttons\"\n     [attr.data-ripple]=\"ripple\"\n     [attr.data-ripple-color]=\"rippleColor\"\n     [attr.data-exclude]=\"convertMomentArray(exclude)\"\n     [attr.data-special]=\"convertMomentArray(include)\"\n     [attr.data-min-date]=\"minDate?.format('MM/DD/YYYY')\"\n     [attr.data-max-date]=\"maxDate?.format('MM/DD/YYYY')\"\n     [attr.data-week-day-click]=\"weekDayClick\"\n     [attr.data-multi-select]=\"multiSelect\"\n     [attr.data-show-header]=\"showHeader\"\n     [attr.data-show-footer]=\"showFooter\"\n     [attr.data-wide-point]=\"widePoint\"\n     [attr.data-wide]=\"wide\"\n\n     [attr.data-cls-today]=\"clsToday\"\n     [attr.data-cls-selected]=\"clsSelected\"\n     [attr.data-cls-exclude]=\"clsExclude\"\n     [attr.data-cls-cancel-button]=\"clsCancelButton\"\n     [attr.data-cls-today-button]=\"clsTodayButton\"\n     [attr.data-cls-clear-button]=\"clsClearButton\"\n     [attr.data-cls-done-button]=\"clsDoneButton\"\n     [attr.data-cls-calendar]=\"clsCalendar\"\n     [attr.data-cls-calendar-header]=\"clsCalendarHeader\"\n     [attr.data-cls-calendar-content]=\"clsCalendarContent\"\n     [attr.data-cls-calendar-footer]=\"clsCalendarFooter\"\n     [attr.data-cls-calendar-months]=\"clsCalendarMonths\"\n     [attr.data-cls-calendar-years]=\"clsCalendarYears\">\n</div>\n",
        providers: [DefaultValueAccessor.get(CalendarComponent_1), TypeAlias.get(CalendarComponent_1)],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".calendar.primary{border-color:#0366d6}.calendar.primary .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #0366d6!important}.calendar.primary .calendar-content .day.selected::after{border-top-color:#0366d6}.calendar.primary .calendar-content .day.today,.calendar.primary .calendar-header{background-color:#0372ef}.calendar.secondary{border-color:#607d8b}.calendar.secondary .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #607d8b!important}.calendar.secondary .calendar-content .day.selected::after{border-top-color:#607d8b}.calendar.secondary .calendar-content .day.today,.calendar.secondary .calendar-header{background-color:#6b8a99}.calendar.success{border-color:#60a917}.calendar.success .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #60a917!important}.calendar.success .calendar-content .day.selected::after{border-top-color:#60a917}.calendar.success .calendar-content .day.today,.calendar.success .calendar-header{background-color:#6dbf1a}.calendar.alert{border-color:#ce352c}.calendar.alert .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #ce352c!important}.calendar.alert .calendar-content .day.selected::after{border-top-color:#ce352c}.calendar.alert .calendar-content .day.today,.calendar.alert .calendar-header{background-color:#d6463e}.calendar.warning{border-color:#ff9447}.calendar.warning .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #ff9447!important}.calendar.warning .calendar-content .day.selected::after{border-top-color:#ff9447}.calendar.warning .calendar-content .day.today,.calendar.warning .calendar-header{background-color:#ffa361}.calendar.yellow{border-color:#ffe484}.calendar.yellow .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #ffe484!important}.calendar.yellow .calendar-content .day.selected::after{border-top-color:#ffe484}.calendar.yellow .calendar-content .day.today,.calendar.yellow .calendar-header{background-color:#ffea9e}.calendar.info{border-color:#5ebdec}.calendar.info .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #5ebdec!important}.calendar.info .calendar-content .day.selected::after{border-top-color:#5ebdec}.calendar.info .calendar-content .day.today,.calendar.info .calendar-header{background-color:#75c7ee}.calendar.dark{border-color:#505050}.calendar.dark .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #505050!important}.calendar.dark .calendar-content .day.selected::after{border-top-color:#505050}.calendar.dark .calendar-content .day.today,.calendar.dark .calendar-header{background-color:#5d5d5d}.calendar.light{border-color:#f8f8f8}.calendar.light .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #f8f8f8!important}.calendar.light .calendar-content .day.selected::after{border-top-color:#f8f8f8}.calendar.light .calendar-content .day.today,.calendar.light .calendar-header{background-color:#fff}.calendar.disabled .calendar-content{color:#e4e4e4!important}.calendar.disabled .calendar-footer button{color:#e4e4e4!important;opacity:.65}"]
    })
], CalendarComponent);
export { CalendarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFFekUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRXhELE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQztBQVd2QixJQUFhLGlCQUFpQix5QkFBOUIsTUFBYSxpQkFBa0IsU0FBUSxXQUEwQztJQXlDL0UsYUFBYTtRQUNYLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQyxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyRCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRW5DLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM3QjtZQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFB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QUF0QixLQUFLLENBQUMsY0FBYyxDQUFDOztzREFBcUI7QUFDYjtJQUE3QixLQUFLLENBQUMscUJBQXFCLENBQUM7OzREQUEyQjtBQUN6QjtJQUE5QixLQUFLLENBQUMsc0JBQXNCLENBQUM7OzZEQUE0QjtBQUM1QjtJQUE3QixLQUFLLENBQUMscUJBQXFCLENBQUM7OzREQUEyQjtBQUMxQjtJQUE3QixLQUFLLENBQUMscUJBQXFCLENBQUM7OzREQUEyQjtBQUMzQjtJQUE1QixLQUFLLENBQUMsb0JBQW9CLENBQUM7OzJEQUEwQjtBQUVmO0lBQXRDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQWlCLFVBQVU7aURBQUM7QUFyQ3ZELGlCQUFpQjtJQVI3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixrcERBQXdDO1FBRXhDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQWlCLENBQUMsQ0FBQztRQUMxRixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztHQUNXLGlCQUFpQixDQXdJN0I7U0F4SVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge0NhbGVuZGFyQnV0dG9uVHlwZSwgV2lkZVBvaW50VHlwZX0gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGVzJztcbmltcG9ydCB7VHlwZUFsaWFzfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZS1hbGlhcyc7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtPYmplY3RIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QtaGVscGVyJztcblxuY29uc3QgX21vbWVudCA9IG1vbWVudDtcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoQ2FsZW5kYXJDb21wb25lbnQpLCBUeXBlQWxpYXMuZ2V0KENhbGVuZGFyQ29tcG9uZW50KV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8bW9tZW50Lk1vbWVudHxtb21lbnQuTW9tZW50W10+IHtcblxuICBASW5wdXQoJ3llYXJzLWJlZm9yZScpIHllYXJzQmVmb3JlOiBudW1iZXI7XG4gIEBJbnB1dCgneWVhcnMtYWZ0ZXInKSB5ZWFyc0FmdGVyOiBudW1iZXI7XG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IG1vbWVudC5Nb21lbnQ7XG4gIEBJbnB1dCgncGlja2VyLW1vZGUnKSBwaWNrZXJNb2RlOiBib29sZWFuO1xuICBASW5wdXQoJ2xvY2FsZScpIGxvY2FsZTogc3RyaW5nO1xuICBASW5wdXQoJ3dlZWstc3RhcnQnKSB3ZWVrU3RhcnQ6IDB8MTtcbiAgQElucHV0KCdvdXRzaWRlJykgb3V0c2lkZTogYm9vbGVhbjtcbiAgQElucHV0KCdidXR0b25zJykgYnV0dG9uczogQ2FsZW5kYXJCdXR0b25UeXBlW107XG4gIEBJbnB1dCgncmlwcGxlJykgcmlwcGxlOiBib29sZWFuO1xuICBASW5wdXQoJ3JpcHBsZS1jb2xvcicpIHJpcHBsZUNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgnZXhjbHVkZScpIGV4Y2x1ZGU6IG1vbWVudC5Nb21lbnRbXTtcbiAgQElucHV0KCdpbmNsdWRlJykgaW5jbHVkZTogbW9tZW50Lk1vbWVudFtdO1xuICBASW5wdXQoJ21pbi1kYXRlJykgbWluRGF0ZTogbW9tZW50Lk1vbWVudDtcbiAgQElucHV0KCdtYXgtZGF0ZScpIG1heERhdGU6IG1vbWVudC5Nb21lbnQ7XG4gIEBJbnB1dCgnd2Vlay1kYXktY2xpY2snKSB3ZWVrRGF5Q2xpY2s6IGJvb2xlYW47XG4gIEBJbnB1dCgnbXVsdGktc2VsZWN0JykgbXVsdGlTZWxlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgnc2hvdy1oZWFkZXInKSBzaG93SGVhZGVyOiBib29sZWFuO1xuICBASW5wdXQoJ3Nob3ctZm9vdGVyJykgc2hvd0Zvb3RlcjogYm9vbGVhbjtcbiAgQElucHV0KCd3aWRlLXBvaW50Jykgd2lkZVBvaW50OiBXaWRlUG9pbnRUeXBlO1xuICBASW5wdXQoJ3dpZGUnKSB3aWRlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnY2xzLXRvZGF5JykgY2xzVG9kYXk6IHN0cmluZztcbiAgQElucHV0KCdjbHMtc2VsZWN0ZWQnKSBjbHNTZWxlY3RlZDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1leGNsdWRlJykgY2xzRXhjbHVkZTogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jYW5jZWwtYnV0dG9uJykgY2xzQ2FuY2VsQnV0dG9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXRvZGF5LWJ1dHRvbicpIGNsc1RvZGF5QnV0dG9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNsZWFyLWJ1dHRvbicpIGNsc0NsZWFyQnV0dG9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWRvbmUtYnV0dG9uJykgY2xzRG9uZUJ1dHRvbjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jYWxlbmRhcicpIGNsc0NhbGVuZGFyOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNhbGVuZGFyLWhlYWRlcicpIGNsc0NhbGVuZGFySGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNhbGVuZGFyLWNvbnRlbnQnKSBjbHNDYWxlbmRhckNvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2FsZW5kYXItZm9vdGVyJykgY2xzQ2FsZW5kYXJGb290ZXI6IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2FsZW5kYXItbW9udGhzJykgY2xzQ2FsZW5kYXJNb250aHM6IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2FsZW5kYXIteWVhcnMnKSBjbHNDYWxlbmRhclllYXJzOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnb2JqZWN0JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBvYmplY3Q6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2FsZW5kYXI6IGFueTtcbiAgcHJpdmF0ZSBjbG9uZWRFbGVtZW50OiBhbnk7XG5cbiAgY3JlYXRlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGNvbXBsZXRlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSAkKHRoaXMub2JqZWN0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcblxuICAgICAgdGhpcy5jYWxlbmRhciA9IHRoaXMuY2xvbmVkRWxlbWVudC5jYWxlbmRhcigpLmRhdGEoJ2NhbGVuZGFyJyk7XG5cbiAgICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQuZmluZCgnLmNhbGVuZGFyLWNvbnRlbnQgLmRheSwgLmNhbGVuZGFyLWNvbnRlbnQgc3BhbiwgLmNhbGVuZGFyLWZvb3RlciBidXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy50b3VjaENhbGxiYWNrKCk7XG4gICAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LmZpbmQoJy5jYWxlbmRhci1jb250ZW50IC5kYXksIC5jYWxlbmRhci1jb250ZW50IHNwYW4sIC5jYWxlbmRhci1mb290ZXIgYnV0dG9uJykudW5iaW5kKCdjbGljaycpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBzZWxlY3REYXlzID0gKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBkYXRlcyA9IHNlbGVjdGlvbi5tYXAocyA9PiBfbW9tZW50KHMpKTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUoZGF0ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUoZGF0ZXMubGVuZ3RoID4gMCA/IGRhdGVzWzBdIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY2FsZW5kYXIub3B0aW9ucy5vbkRheUNsaWNrID0gKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5waWNrZXJNb2RlKSB7XG4gICAgICAgICAgc2VsZWN0RGF5cyhzZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmNhbGVuZGFyLm9wdGlvbnMub25Eb25lID0gKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICBzZWxlY3REYXlzKHNlbGVjdGlvbik7XG4gICAgICB9O1xuXG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5ld1ZhbHVlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jYWxlbmRhcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2FsZW5kYXIuc2VsZWN0ZWQgPSBbXTtcblxuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaW5uZXJWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgICAgIHRoaXMuY2FsZW5kYXIuc2V0UHJlc2V0KCg8bW9tZW50Lk1vbWVudFtdPnRoaXMuaW5uZXJWYWx1ZSkubWFwKHYgPT4gdi5mb3JtYXQoJ01NL0REL1lZWVknKSkuam9pbignLCcpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyLnNldFByZXNldCgoPG1vbWVudC5Nb21lbnQ+dGhpcy5pbm5lclZhbHVlKS5mb3JtYXQoJ01NL0REL1lZWVknKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIuc2V0UHJlc2V0KCcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnZlcnRNb21lbnRBcnJheShhcnI6IG1vbWVudC5Nb21lbnRbXSkge1xuICAgIHJldHVybiBhcnIgPyBhcnIubWFwKHYgPT4gdi5mb3JtYXQoJ01NL0REL1lZWVknKSkuam9pbignLCcpIDogbnVsbDtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2xvbmVkRWxlbWVudDtcblxuICAgICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGNscyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoY2xzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==