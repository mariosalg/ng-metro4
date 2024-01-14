import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import * as moment from 'moment';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
var _moment = moment;
var CalendarComponent = /** @class */ (function (_super) {
    __extends(CalendarComponent, _super);
    function CalendarComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CalendarComponent_1 = CalendarComponent;
    CalendarComponent.prototype.createControl = function () {
        var _this = this;
        return new Promise(function (complete) {
            var originalElement = $(_this.object.nativeElement);
            ObjectHelper.hide(originalElement);
            if (_this.clonedElement) {
                _this.clonedElement.remove();
            }
            _this.clonedElement = originalElement.clone();
            ObjectHelper.show(_this.clonedElement);
            originalElement.parent().append(_this.clonedElement);
            _this.calendar = _this.clonedElement.calendar().data('calendar');
            asapScheduler.schedule(function () {
                _this.clonedElement.find('.calendar-content .day, .calendar-content span, .calendar-footer button').on('click', function () {
                    _this.touchCallback();
                    _this.clonedElement.find('.calendar-content .day, .calendar-content span, .calendar-footer button').unbind('click');
                });
            });
            var selectDays = function (selection) {
                var dates = selection.map(function (s) { return _moment(s); });
                if (_this.multiSelect) {
                    _this.changeValue(dates);
                }
                else {
                    _this.changeValue(dates.length > 0 ? dates[0] : null);
                }
            };
            _this.calendar.options.onDayClick = function (selection) {
                if (_this.pickerMode) {
                    selectDays(selection);
                }
            };
            _this.calendar.options.onDone = function (selection) {
                selectDays(selection);
            };
            complete();
        });
    };
    CalendarComponent.prototype.disable = function (disabled) {
        var _this = this;
        asapScheduler.schedule(function () {
            if (disabled) {
                _this.clonedElement.addClass('disabled');
            }
            else {
                _this.clonedElement.removeClass('disabled');
            }
        });
    };
    CalendarComponent.prototype.newValue = function () {
        var _this = this;
        if (!this.calendar) {
            return;
        }
        this.calendar.selected = [];
        asapScheduler.schedule(function () {
            if (_this.innerValue) {
                if (_this.multiSelect) {
                    _this.calendar.setPreset(_this.innerValue.map(function (v) { return v.format('MM/DD/YYYY'); }).join(','));
                }
                else {
                    _this.calendar.setPreset(_this.innerValue.format('MM/DD/YYYY'));
                }
            }
            else {
                _this.calendar.setPreset('');
            }
        });
    };
    CalendarComponent.prototype.convertMomentArray = function (arr) {
        return arr ? arr.map(function (v) { return v.format('MM/DD/YYYY'); }).join(',') : null;
    };
    CalendarComponent.prototype.newClassValue = function (newClasses, oldClasses) {
        var _this = this;
        asapScheduler.schedule(function () {
            if (_this.clonedElement) {
                var target_1 = _this.clonedElement;
                oldClasses.forEach(function (cls) {
                    target_1.removeClass(cls);
                });
                newClasses.forEach(function (cls) {
                    target_1.addClass(cls);
                });
            }
        });
    };
    var CalendarComponent_1;
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
    return CalendarComponent;
}(ControlBase));
export { CalendarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUV6RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFeEQsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBV3ZCO0lBQXVDLHFDQUEwQztJQUFqRjs7SUF3SUEsQ0FBQzswQkF4SVksaUJBQWlCO0lBeUM1Qix5Q0FBYSxHQUFiO1FBQUEsaUJBNENDO1FBM0NDLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxRQUFRO1lBQ2hDLElBQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3JELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdCO1lBRUQsS0FBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsWUFBWSxDQUFDLElB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LEtBQUssQ0FBQyxjQUFjLENBQUM7OzBEQUFxQjtJQUNiO1FBQTdCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7Z0VBQTJCO0lBQ3pCO1FBQTlCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQzs7aUVBQTRCO0lBQzVCO1FBQTdCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7Z0VBQTJCO0lBQzFCO1FBQTdCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7Z0VBQTJCO0lBQzNCO1FBQTVCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7K0RBQTBCO0lBRWY7UUFBdEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBaUIsVUFBVTtxREFBQztJQXJDdkQsaUJBQWlCO1FBUjdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLGtwREFBd0M7WUFFeEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLG1CQUFpQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsQ0FBQyxDQUFDO1lBQzFGLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDO09BQ1csaUJBQWlCLENBd0k3QjtJQUFELHdCQUFDO0NBQUEsQUF4SUQsQ0FBdUMsV0FBVyxHQXdJakQ7U0F4SVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge0NhbGVuZGFyQnV0dG9uVHlwZSwgV2lkZVBvaW50VHlwZX0gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGVzJztcbmltcG9ydCB7VHlwZUFsaWFzfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZS1hbGlhcyc7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtPYmplY3RIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QtaGVscGVyJztcblxuY29uc3QgX21vbWVudCA9IG1vbWVudDtcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtY2FsZW5kYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYWxlbmRhci5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoQ2FsZW5kYXJDb21wb25lbnQpLCBUeXBlQWxpYXMuZ2V0KENhbGVuZGFyQ29tcG9uZW50KV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8bW9tZW50Lk1vbWVudHxtb21lbnQuTW9tZW50W10+IHtcblxuICBASW5wdXQoJ3llYXJzLWJlZm9yZScpIHllYXJzQmVmb3JlOiBudW1iZXI7XG4gIEBJbnB1dCgneWVhcnMtYWZ0ZXInKSB5ZWFyc0FmdGVyOiBudW1iZXI7XG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IG1vbWVudC5Nb21lbnQ7XG4gIEBJbnB1dCgncGlja2VyLW1vZGUnKSBwaWNrZXJNb2RlOiBib29sZWFuO1xuICBASW5wdXQoJ2xvY2FsZScpIGxvY2FsZTogc3RyaW5nO1xuICBASW5wdXQoJ3dlZWstc3RhcnQnKSB3ZWVrU3RhcnQ6IDB8MTtcbiAgQElucHV0KCdvdXRzaWRlJykgb3V0c2lkZTogYm9vbGVhbjtcbiAgQElucHV0KCdidXR0b25zJykgYnV0dG9uczogQ2FsZW5kYXJCdXR0b25UeXBlW107XG4gIEBJbnB1dCgncmlwcGxlJykgcmlwcGxlOiBib29sZWFuO1xuICBASW5wdXQoJ3JpcHBsZS1jb2xvcicpIHJpcHBsZUNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgnZXhjbHVkZScpIGV4Y2x1ZGU6IG1vbWVudC5Nb21lbnRbXTtcbiAgQElucHV0KCdpbmNsdWRlJykgaW5jbHVkZTogbW9tZW50Lk1vbWVudFtdO1xuICBASW5wdXQoJ21pbi1kYXRlJykgbWluRGF0ZTogbW9tZW50Lk1vbWVudDtcbiAgQElucHV0KCdtYXgtZGF0ZScpIG1heERhdGU6IG1vbWVudC5Nb21lbnQ7XG4gIEBJbnB1dCgnd2Vlay1kYXktY2xpY2snKSB3ZWVrRGF5Q2xpY2s6IGJvb2xlYW47XG4gIEBJbnB1dCgnbXVsdGktc2VsZWN0JykgbXVsdGlTZWxlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgnc2hvdy1oZWFkZXInKSBzaG93SGVhZGVyOiBib29sZWFuO1xuICBASW5wdXQoJ3Nob3ctZm9vdGVyJykgc2hvd0Zvb3RlcjogYm9vbGVhbjtcbiAgQElucHV0KCd3aWRlLXBvaW50Jykgd2lkZVBvaW50OiBXaWRlUG9pbnRUeXBlO1xuICBASW5wdXQoJ3dpZGUnKSB3aWRlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnY2xzLXRvZGF5JykgY2xzVG9kYXk6IHN0cmluZztcbiAgQElucHV0KCdjbHMtc2VsZWN0ZWQnKSBjbHNTZWxlY3RlZDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1leGNsdWRlJykgY2xzRXhjbHVkZTogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jYW5jZWwtYnV0dG9uJykgY2xzQ2FuY2VsQnV0dG9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXRvZGF5LWJ1dHRvbicpIGNsc1RvZGF5QnV0dG9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNsZWFyLWJ1dHRvbicpIGNsc0NsZWFyQnV0dG9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWRvbmUtYnV0dG9uJykgY2xzRG9uZUJ1dHRvbjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jYWxlbmRhcicpIGNsc0NhbGVuZGFyOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNhbGVuZGFyLWhlYWRlcicpIGNsc0NhbGVuZGFySGVhZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNhbGVuZGFyLWNvbnRlbnQnKSBjbHNDYWxlbmRhckNvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2FsZW5kYXItZm9vdGVyJykgY2xzQ2FsZW5kYXJGb290ZXI6IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2FsZW5kYXItbW9udGhzJykgY2xzQ2FsZW5kYXJNb250aHM6IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2FsZW5kYXIteWVhcnMnKSBjbHNDYWxlbmRhclllYXJzOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnb2JqZWN0JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBvYmplY3Q6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2FsZW5kYXI6IGFueTtcbiAgcHJpdmF0ZSBjbG9uZWRFbGVtZW50OiBhbnk7XG5cbiAgY3JlYXRlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGNvbXBsZXRlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSAkKHRoaXMub2JqZWN0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcblxuICAgICAgdGhpcy5jYWxlbmRhciA9IHRoaXMuY2xvbmVkRWxlbWVudC5jYWxlbmRhcigpLmRhdGEoJ2NhbGVuZGFyJyk7XG5cbiAgICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQuZmluZCgnLmNhbGVuZGFyLWNvbnRlbnQgLmRheSwgLmNhbGVuZGFyLWNvbnRlbnQgc3BhbiwgLmNhbGVuZGFyLWZvb3RlciBidXR0b24nKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy50b3VjaENhbGxiYWNrKCk7XG4gICAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LmZpbmQoJy5jYWxlbmRhci1jb250ZW50IC5kYXksIC5jYWxlbmRhci1jb250ZW50IHNwYW4sIC5jYWxlbmRhci1mb290ZXIgYnV0dG9uJykudW5iaW5kKCdjbGljaycpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBzZWxlY3REYXlzID0gKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBkYXRlcyA9IHNlbGVjdGlvbi5tYXAocyA9PiBfbW9tZW50KHMpKTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUoZGF0ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUoZGF0ZXMubGVuZ3RoID4gMCA/IGRhdGVzWzBdIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY2FsZW5kYXIub3B0aW9ucy5vbkRheUNsaWNrID0gKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICBpZiAodGhpcy5waWNrZXJNb2RlKSB7XG4gICAgICAgICAgc2VsZWN0RGF5cyhzZWxlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmNhbGVuZGFyLm9wdGlvbnMub25Eb25lID0gKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICBzZWxlY3REYXlzKHNlbGVjdGlvbik7XG4gICAgICB9O1xuXG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5ld1ZhbHVlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jYWxlbmRhcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2FsZW5kYXIuc2VsZWN0ZWQgPSBbXTtcblxuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaW5uZXJWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5tdWx0aVNlbGVjdCkge1xuICAgICAgICAgIHRoaXMuY2FsZW5kYXIuc2V0UHJlc2V0KCg8bW9tZW50Lk1vbWVudFtdPnRoaXMuaW5uZXJWYWx1ZSkubWFwKHYgPT4gdi5mb3JtYXQoJ01NL0REL1lZWVknKSkuam9pbignLCcpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyLnNldFByZXNldCgoPG1vbWVudC5Nb21lbnQ+dGhpcy5pbm5lclZhbHVlKS5mb3JtYXQoJ01NL0REL1lZWVknKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIuc2V0UHJlc2V0KCcnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnZlcnRNb21lbnRBcnJheShhcnI6IG1vbWVudC5Nb21lbnRbXSkge1xuICAgIHJldHVybiBhcnIgPyBhcnIubWFwKHYgPT4gdi5mb3JtYXQoJ01NL0REL1lZWVknKSkuam9pbignLCcpIDogbnVsbDtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2xvbmVkRWxlbWVudDtcblxuICAgICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGNscyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoY2xzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==