var TimePickerComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ControlBase } from '../control-base';
import * as moment from 'moment';
import { TypeAlias } from '../../helper/type-alias';
import { ObjectHelper } from '../../helper/object-helper';
let TimePickerComponent = TimePickerComponent_1 = class TimePickerComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.showLabels = true;
    }
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
            this.timePicker = this.clonedElement.timepicker().data('timepicker');
            this.clonedElement.parent().find('.time-wrapper').one('click', () => {
                this.touchCallback();
            });
            this.timePicker.options.onSet = (val, elem_val) => {
                this.changeValue(moment.duration(elem_val));
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
        if (!this.timePicker) {
            return;
        }
        this.timePicker.val(this.innerValue ? `${this.innerValue.hours()}:${this.innerValue.minutes()}:${this.innerValue.seconds()}` : '');
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
    Input('hours'),
    __metadata("design:type", Boolean)
], TimePickerComponent.prototype, "hours", void 0);
__decorate([
    Input('minutes'),
    __metadata("design:type", Boolean)
], TimePickerComponent.prototype, "minutes", void 0);
__decorate([
    Input('seconds'),
    __metadata("design:type", Boolean)
], TimePickerComponent.prototype, "seconds", void 0);
__decorate([
    Input('show-labels'),
    __metadata("design:type", Object)
], TimePickerComponent.prototype, "showLabels", void 0);
__decorate([
    Input('locale'),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "locale", void 0);
__decorate([
    Input('distance'),
    __metadata("design:type", Number)
], TimePickerComponent.prototype, "distance", void 0);
__decorate([
    Input('cls-picker'),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "clsPicker", void 0);
__decorate([
    Input('cls-part'),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "clsPart", void 0);
__decorate([
    Input('cls-hours'),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "clsHours", void 0);
__decorate([
    Input('cls-minutes'),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "clsMinutes", void 0);
__decorate([
    Input('cls-seconds'),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "clsSeconds", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], TimePickerComponent.prototype, "input", void 0);
TimePickerComponent = TimePickerComponent_1 = __decorate([
    Component({
        selector: 'm4-time-picker',
        template: "<input type=\"text\" #input\n\n\n       [attr.data-hours]=\"hours\"\n       [attr.data-minutes]=\"minutes\"\n       [attr.data-seconds]=\"seconds\"\n       [attr.data-show-labels]=\"showLabels\"\n       [attr.data-locale]=\"locale\"\n       [attr.data-distance]=\"distance\"\n\n       [attr.data-cls-picker]=\"clsPicker\"\n       [attr.data-cls-part]=\"clsPart\"\n       [attr.data-cls-hours]=\"clsHours\"\n       [attr.data-cls-minutes]=\"clsMinutes\"\n       [attr.data-cls-seconds]=\"clsSeconds\">\n",
        providers: [DefaultValueAccessor.get(TimePickerComponent_1), TypeAlias.get(TimePickerComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        styles: [".time-picker.primary .time-wrapper{border-color:#0366d6}.time-picker.secondary .time-wrapper{border-color:#607d8b}.time-picker.success .time-wrapper{border-color:#60a917}.time-picker.alert .time-wrapper{border-color:#ce352c}.time-picker.warning .time-wrapper{border-color:#ff9447}.time-picker.yellow .time-wrapper{border-color:#ffe484}.time-picker.info .time-wrapper{border-color:#5ebdec}.time-picker.dark .time-wrapper{border-color:#505050}.time-picker.light .time-wrapper{border-color:#f8f8f8}"]
    })
], TimePickerComponent);
export { TimePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQVl4RCxJQUFhLG1CQUFtQiwyQkFBaEMsTUFBYSxtQkFBb0IsU0FBUSxXQUE0QjtJQUFyRTs7UUFLd0IsZUFBVSxHQUFHLElBQUksQ0FBQztJQXNFMUMsQ0FBQztJQXhEQyxhQUFhO1FBQ1gsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3RDO1lBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENB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RUg7SUFBckMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBZ0IsVUFBVTtrREFBQztBQWZyRCxtQkFBbUI7SUFSL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixrZ0JBQTJDO1FBRTNDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMscUJBQW1CLENBQUMsQ0FBQztRQUM5RixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztHQUNXLG1CQUFtQixDQTJFL0I7U0EzRVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHtPYmplY3RIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QtaGVscGVyJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtNC10aW1lLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RpbWUtcGlja2VyLmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW0RlZmF1bHRWYWx1ZUFjY2Vzc29yLmdldChUaW1lUGlja2VyQ29tcG9uZW50KSwgVHlwZUFsaWFzLmdldChUaW1lUGlja2VyQ29tcG9uZW50KV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQmFzZTxtb21lbnQuRHVyYXRpb24+IHtcblxuICBASW5wdXQoJ2hvdXJzJykgaG91cnM6IGJvb2xlYW47XG4gIEBJbnB1dCgnbWludXRlcycpIG1pbnV0ZXM6IGJvb2xlYW47XG4gIEBJbnB1dCgnc2Vjb25kcycpIHNlY29uZHM6IGJvb2xlYW47XG4gIEBJbnB1dCgnc2hvdy1sYWJlbHMnKSBzaG93TGFiZWxzID0gdHJ1ZTtcbiAgQElucHV0KCdsb2NhbGUnKSBsb2NhbGU6IHN0cmluZztcbiAgQElucHV0KCdkaXN0YW5jZScpIGRpc3RhbmNlOiBudW1iZXI7XG5cbiAgQElucHV0KCdjbHMtcGlja2VyJykgY2xzUGlja2VyOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXBhcnQnKSBjbHNQYXJ0OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWhvdXJzJykgY2xzSG91cnM6IHN0cmluZztcbiAgQElucHV0KCdjbHMtbWludXRlcycpIGNsc01pbnV0ZXM6IHN0cmluZztcbiAgQElucHV0KCdjbHMtc2Vjb25kcycpIGNsc1NlY29uZHM6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgdGltZVBpY2tlcjogYW55O1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG5cbiAgICAgIHRoaXMudGltZVBpY2tlciA9IHRoaXMuY2xvbmVkRWxlbWVudC50aW1lcGlja2VyKCkuZGF0YSgndGltZXBpY2tlcicpO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkuZmluZCgnLnRpbWUtd3JhcHBlcicpLm9uZSgnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG91Y2hDYWxsYmFjaygpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGltZVBpY2tlci5vcHRpb25zLm9uU2V0ID0gKHZhbCwgZWxlbV92YWwpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZShtb21lbnQuZHVyYXRpb24oZWxlbV92YWwpKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNhYmxlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cblxuICBuZXdWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGltZVBpY2tlciApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWVQaWNrZXIudmFsKHRoaXMuaW5uZXJWYWx1ZSA/IGAke3RoaXMuaW5uZXJWYWx1ZS5ob3VycygpfToke3RoaXMuaW5uZXJWYWx1ZS5taW51dGVzKCl9OiR7dGhpcy5pbm5lclZhbHVlLnNlY29uZHMoKX1gIDogJycpO1xuICB9XG5cbiAgbmV3Q2xhc3NWYWx1ZShuZXdDbGFzc2VzOiBzdHJpbmdbXSwgb2xkQ2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCk7XG5cbiAgICAgIG9sZENsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGNscyk7XG4gICAgICB9KTtcblxuICAgICAgbmV3Q2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoY2xzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19