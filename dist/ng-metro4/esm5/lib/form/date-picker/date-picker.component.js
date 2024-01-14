import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import * as moment from 'moment';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { ObjectHelper } from '../../helper/object-helper';
var _moment = moment;
var DatePickerComponent = /** @class */ (function (_super) {
    __extends(DatePickerComponent, _super);
    function DatePickerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerComponent_1 = DatePickerComponent;
    DatePickerComponent.prototype.createControl = function () {
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
            _this.datePicker = _this.clonedElement.datepicker().data('datepicker');
            _this.clonedElement.parent().find('.date-wrapper').one('click', function () {
                _this.touchCallback();
            });
            _this.datePicker.options.onSet = function (val, elem_val) {
                _this.changeValue(_moment(elem_val, 'YYYY-MM-DD'));
            };
            complete();
        });
    };
    DatePickerComponent.prototype.disable = function (disabled) {
        if (disabled) {
            this.clonedElement.parent().addClass('disabled');
        }
        else {
            this.clonedElement.parent().removeClass('disabled');
        }
    };
    DatePickerComponent.prototype.newValue = function () {
        if (!this.datePicker) {
            return;
        }
        this.datePicker.val(this.innerValue ? this.innerValue.format('YYYY-MM-DD') : '');
    };
    DatePickerComponent.prototype.newClassValue = function (newClasses, oldClasses) {
        if (this.clonedElement) {
            var target_1 = this.clonedElement.parent();
            oldClasses.forEach(function (cls) {
                target_1.removeClass(cls);
            });
            newClasses.forEach(function (cls) {
                target_1.addClass(cls);
            });
        }
    };
    var DatePickerComponent_1;
    __decorate([
        Input('month'),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "month", void 0);
    __decorate([
        Input('day'),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "day", void 0);
    __decorate([
        Input('year'),
        __metadata("design:type", Boolean)
    ], DatePickerComponent.prototype, "year", void 0);
    __decorate([
        Input('locale'),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "locale", void 0);
    __decorate([
        Input('min-year'),
        __metadata("design:type", Number)
    ], DatePickerComponent.prototype, "minYear", void 0);
    __decorate([
        Input('max-year'),
        __metadata("design:type", Number)
    ], DatePickerComponent.prototype, "maxYear", void 0);
    __decorate([
        Input('distance'),
        __metadata("design:type", Number)
    ], DatePickerComponent.prototype, "distance", void 0);
    __decorate([
        Input('cls-picker'),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "clsPicker", void 0);
    __decorate([
        Input('cls-start'),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "clsStart", void 0);
    __decorate([
        Input('cls-month'),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "clsMonth", void 0);
    __decorate([
        Input('cls-day'),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "clsDay", void 0);
    __decorate([
        Input('cls-year'),
        __metadata("design:type", String)
    ], DatePickerComponent.prototype, "clsYear", void 0);
    __decorate([
        ViewChild('input', { static: true }),
        __metadata("design:type", ElementRef)
    ], DatePickerComponent.prototype, "input", void 0);
    DatePickerComponent = DatePickerComponent_1 = __decorate([
        Component({
            selector: 'm4-date-picker',
            template: "<input type=\"text\" #input\n\n\n       [attr.data-month]=\"month\"\n       [attr.data-day]=\"day\"\n       [attr.data-year]=\"year\"\n       [attr.data-locale]=\"locale\"\n       [attr.data-min-year]=\"minYear\"\n       [attr.data-max-year]=\"maxYear\"\n       [attr.data-distance]=\"distance\"\n\n       [attr.data-cls-picker]=\"clsPicker\"\n       [attr.data-cls-start]=\"clsStart\"\n       [attr.data-cls-month]=\"clsMonth\"\n       [attr.data-cls-day]=\"clsDay\"\n       [attr.data-cls-year]=\"clsYear\">\n",
            providers: [DefaultValueAccessor.get(DatePickerComponent_1), TypeAlias.get(DatePickerComponent_1)],
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            styles: [".date-picker.primary .date-wrapper{border-color:#0366d6}.date-picker.secondary .date-wrapper{border-color:#607d8b}.date-picker.success .date-wrapper{border-color:#60a917}.date-picker.alert .date-wrapper{border-color:#ce352c}.date-picker.warning .date-wrapper{border-color:#ff9447}.date-picker.yellow .date-wrapper{border-color:#ffe484}.date-picker.info .date-wrapper{border-color:#5ebdec}.date-picker.dark .date-wrapper{border-color:#505050}.date-picker.light .date-wrapper{border-color:#f8f8f8}"]
        })
    ], DatePickerComponent);
    return DatePickerComponent;
}(ControlBase));
export { DatePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRXhELElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQztBQVd2QjtJQUF5Qyx1Q0FBMEI7SUFBbkU7O0lBNkVBLENBQUM7NEJBN0VZLG1CQUFtQjtJQW9COUIsMkNBQWEsR0FBYjtRQUFBLGlCQTBCQztRQXpCQyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsUUFBUTtZQUNoQyxJQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRW5DLElBQUksS0FBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN0QztZQUVELEtBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFD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QUFVO3NEQUFDO0lBaEJyRCxtQkFBbUI7UUFSL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQiwyZ0JBQTJDO1lBRTNDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQW1CLENBQUMsQ0FBQztZQUM5RixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtZQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7U0FDdEMsQ0FBQztPQUNXLG1CQUFtQixDQTZFL0I7SUFBRCwwQkFBQztDQUFBLEFBN0VELENBQXlDLFdBQVcsR0E2RW5EO1NBN0VZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sQmFzZX0gZnJvbSAnLi4vY29udHJvbC1iYXNlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vaGVscGVyL2RlZmF1bHQtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHtUeXBlQWxpYXN9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlLWFsaWFzJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5cbmNvbnN0IF9tb21lbnQgPSBtb21lbnQ7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LWRhdGUtcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50Lmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbRGVmYXVsdFZhbHVlQWNjZXNzb3IuZ2V0KERhdGVQaWNrZXJDb21wb25lbnQpLCBUeXBlQWxpYXMuZ2V0KERhdGVQaWNrZXJDb21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbXBvbmVudCBleHRlbmRzIENvbnRyb2xCYXNlPG1vbWVudC5Nb21lbnQ+IHtcblxuICBASW5wdXQoJ21vbnRoJykgbW9udGg6IGJvb2xlYW47XG4gIEBJbnB1dCgnZGF5JykgZGF5OiBib29sZWFuO1xuICBASW5wdXQoJ3llYXInKSB5ZWFyOiBib29sZWFuO1xuICBASW5wdXQoJ2xvY2FsZScpIGxvY2FsZTogc3RyaW5nO1xuICBASW5wdXQoJ21pbi15ZWFyJykgbWluWWVhcjogbnVtYmVyO1xuICBASW5wdXQoJ21heC15ZWFyJykgbWF4WWVhcjogbnVtYmVyO1xuICBASW5wdXQoJ2Rpc3RhbmNlJykgZGlzdGFuY2U6IG51bWJlcjtcblxuICBASW5wdXQoJ2Nscy1waWNrZXInKSBjbHNQaWNrZXI6IHN0cmluZztcbiAgQElucHV0KCdjbHMtc3RhcnQnKSBjbHNTdGFydDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1tb250aCcpIGNsc01vbnRoOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWRheScpIGNsc0RheTogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy15ZWFyJykgY2xzWWVhcjogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBkYXRlUGlja2VyOiBhbnk7XG4gIHByaXZhdGUgY2xvbmVkRWxlbWVudDogYW55O1xuXG4gIGNyZWF0ZUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChjb21wbGV0ZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcblxuICAgICAgdGhpcy5kYXRlUGlja2VyID0gdGhpcy5jbG9uZWRFbGVtZW50LmRhdGVwaWNrZXIoKS5kYXRhKCdkYXRlcGlja2VyJyk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5maW5kKCcuZGF0ZS13cmFwcGVyJykub25lKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy50b3VjaENhbGxiYWNrKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5kYXRlUGlja2VyLm9wdGlvbnMub25TZXQgPSAodmFsLCBlbGVtX3ZhbCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKF9tb21lbnQoZWxlbV92YWwsICdZWVlZLU1NLUREJykpO1xuICAgICAgfTtcblxuICAgICAgY29tcGxldGUoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgbmV3VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRhdGVQaWNrZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGVQaWNrZXIudmFsKHRoaXMuaW5uZXJWYWx1ZSA/IHRoaXMuaW5uZXJWYWx1ZS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6ICcnKTtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpO1xuXG4gICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhjbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LmFkZENsYXNzKGNscyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==