var DatePickerComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import * as moment from 'moment';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { ObjectHelper } from '../../helper/object-helper';
const _moment = moment;
let DatePickerComponent = DatePickerComponent_1 = class DatePickerComponent extends ControlBase {
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
            this.datePicker = this.clonedElement.datepicker().data('datepicker');
            this.clonedElement.parent().find('.date-wrapper').one('click', () => {
                this.touchCallback();
            });
            this.datePicker.options.onSet = (val, elem_val) => {
                this.changeValue(_moment(elem_val, 'YYYY-MM-DD'));
            };
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.clonedElement.parent().addClass('disabled');
        }
        else {
            this.clonedElement.parent().removeClass('disabled');
        }
    }
    newValue() {
        if (!this.datePicker) {
            return;
        }
        this.datePicker.val(this.innerValue ? this.innerValue.format('YYYY-MM-DD') : '');
    }
    newClassValue(newClasses, oldClasses) {
        if (this.clonedElement) {
            const target = this.clonedElement.parent();
            oldClasses.forEach((cls) => {
                target.removeClass(cls);
            });
            newClasses.forEach((cls) => {
                target.addClass(cls);
            });
        }
    }
};
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
export { DatePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUV4RCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFXdkIsSUFBYSxtQkFBbUIsMkJBQWhDLE1BQWEsbUJBQW9CLFNBQVEsV0FBMEI7SUFvQmpFLGFBQWE7UUFDWCxPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDcEMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDdEM7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMs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QUksRUFBRSxDQUFDOzhCQUFnQixVQUFVO2tEQUFDO0FBaEJyRCxtQkFBbUI7SUFSL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQiwyZ0JBQTJDO1FBRTNDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQW1CLENBQUMsQ0FBQztRQUM5RixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztHQUNXLG1CQUFtQixDQTZFL0I7U0E3RVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHtPYmplY3RIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QtaGVscGVyJztcblxuY29uc3QgX21vbWVudCA9IG1vbWVudDtcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtZGF0ZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlLXBpY2tlci5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoRGF0ZVBpY2tlckNvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoRGF0ZVBpY2tlckNvbXBvbmVudCldLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8bW9tZW50Lk1vbWVudD4ge1xuXG4gIEBJbnB1dCgnbW9udGgnKSBtb250aDogYm9vbGVhbjtcbiAgQElucHV0KCdkYXknKSBkYXk6IGJvb2xlYW47XG4gIEBJbnB1dCgneWVhcicpIHllYXI6IGJvb2xlYW47XG4gIEBJbnB1dCgnbG9jYWxlJykgbG9jYWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgnbWluLXllYXInKSBtaW5ZZWFyOiBudW1iZXI7XG4gIEBJbnB1dCgnbWF4LXllYXInKSBtYXhZZWFyOiBudW1iZXI7XG4gIEBJbnB1dCgnZGlzdGFuY2UnKSBkaXN0YW5jZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgnY2xzLXBpY2tlcicpIGNsc1BpY2tlcjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1zdGFydCcpIGNsc1N0YXJ0OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLW1vbnRoJykgY2xzTW9udGg6IHN0cmluZztcbiAgQElucHV0KCdjbHMtZGF5JykgY2xzRGF5OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXllYXInKSBjbHNZZWFyOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGRhdGVQaWNrZXI6IGFueTtcbiAgcHJpdmF0ZSBjbG9uZWRFbGVtZW50OiBhbnk7XG5cbiAgY3JlYXRlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGNvbXBsZXRlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCk7XG4gICAgICBPYmplY3RIZWxwZXIuaGlkZShvcmlnaW5hbEVsZW1lbnQpO1xuXG4gICAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50LmNsb25lKCk7XG4gICAgICBPYmplY3RIZWxwZXIuc2hvdyh0aGlzLmNsb25lZEVsZW1lbnQpO1xuICAgICAgb3JpZ2luYWxFbGVtZW50LnBhcmVudCgpLmFwcGVuZCh0aGlzLmNsb25lZEVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmRhdGVQaWNrZXIgPSB0aGlzLmNsb25lZEVsZW1lbnQuZGF0ZXBpY2tlcigpLmRhdGEoJ2RhdGVwaWNrZXInKTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLmZpbmQoJy5kYXRlLXdyYXBwZXInKS5vbmUoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvdWNoQ2FsbGJhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmRhdGVQaWNrZXIub3B0aW9ucy5vblNldCA9ICh2YWwsIGVsZW1fdmFsKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlVmFsdWUoX21vbWVudChlbGVtX3ZhbCwgJ1lZWVktTU0tREQnKSk7XG4gICAgICB9O1xuXG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuXG4gIH1cblxuICBkaXNhYmxlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cblxuICBuZXdWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGF0ZVBpY2tlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZGF0ZVBpY2tlci52YWwodGhpcy5pbm5lclZhbHVlID8gdGhpcy5pbm5lclZhbHVlLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogJycpO1xuICB9XG5cbiAgbmV3Q2xhc3NWYWx1ZShuZXdDbGFzc2VzOiBzdHJpbmdbXSwgb2xkQ2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCk7XG5cbiAgICAgIG9sZENsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGNscyk7XG4gICAgICB9KTtcblxuICAgICAgbmV3Q2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoY2xzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19