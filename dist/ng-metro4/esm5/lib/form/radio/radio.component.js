import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ObjectHelper } from '../../helper/object-helper';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
var RadioComponent = /** @class */ (function (_super) {
    __extends(RadioComponent, _super);
    function RadioComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioComponent_1 = RadioComponent;
    RadioComponent.prototype.createControl = function () {
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
            _this.clonedElement.attr('name', _this.name);
            _this.radio = _this.clonedElement.radio().data('radio');
            _this.clonedElement.one('blur', function () {
                _this.touchCallback();
            });
            _this.clonedElement.on('change', function () {
                _this.changeValue(_this.value);
            });
            complete();
        });
    };
    RadioComponent.prototype.disable = function (disabled) {
        var _this = this;
        asapScheduler.schedule(function () {
            if (disabled) {
                _this.clonedElement.parent().addClass('disabled');
                _this.clonedElement.attr('disabled', 'disabled');
            }
            else {
                _this.clonedElement.parent().removeClass('disabled');
                _this.clonedElement.removeAttr('disabled');
            }
        });
    };
    RadioComponent.prototype.newValue = function () {
        if (!this.radio) {
            return;
        }
        if (ObjectHelper.compare(this.innerValue, this.value)) {
            this.clonedElement.prop('checked', true);
        }
        else {
            this.clonedElement.prop('checked', false);
        }
    };
    RadioComponent.prototype.newClassValue = function (newClasses, oldClasses) {
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
    var RadioComponent_1;
    __decorate([
        Input('name'),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "name", void 0);
    __decorate([
        Input('value'),
        __metadata("design:type", Object)
    ], RadioComponent.prototype, "value", void 0);
    __decorate([
        Input('style'),
        __metadata("design:type", Number)
    ], RadioComponent.prototype, "style", void 0);
    __decorate([
        Input('caption'),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "caption", void 0);
    __decorate([
        Input('caption-position'),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "captionPosition", void 0);
    __decorate([
        Input('cls-radio'),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "clsRadio", void 0);
    __decorate([
        Input('cls-caption'),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "clsCaption", void 0);
    __decorate([
        Input('cls-check'),
        __metadata("design:type", String)
    ], RadioComponent.prototype, "clsCheck", void 0);
    __decorate([
        ViewChild('input', { static: true }),
        __metadata("design:type", ElementRef)
    ], RadioComponent.prototype, "input", void 0);
    RadioComponent = RadioComponent_1 = __decorate([
        Component({
            selector: 'm4-radio',
            template: "<input #input\n\n\n       [attr.data-style]=\"style\"\n       [attr.data-caption]=\"caption\"\n       [attr.data-caption-position]=\"captionPosition\"\n\n       [attr.data-cls-radio]=\"clsRadio\"\n       [attr.data-cls-caption]=\"clsCaption\"\n       [attr.data-cls-check]=\"clsCheck\">\n",
            providers: [DefaultValueAccessor.get(RadioComponent_1), TypeAlias.get(RadioComponent_1)],
            changeDetection: ChangeDetectionStrategy.Default,
            encapsulation: ViewEncapsulation.None,
            styles: [".radio.primary input[type=radio]:checked~.check{background-color:#0366d6;border-color:#0366d6}.radio.primary .check{border-color:#0366d6}.radio.secondary input[type=radio]:checked~.check{background-color:#607d8b;border-color:#607d8b}.radio.secondary .check{border-color:#607d8b}.radio.success input[type=radio]:checked~.check{background-color:#60a917;border-color:#60a917}.radio.success .check{border-color:#60a917}.radio.alert input[type=radio]:checked~.check{background-color:#ce352c;border-color:#ce352c}.radio.alert .check{border-color:#ce352c}.radio.warning input[type=radio]:checked~.check{background-color:#ff9447;border-color:#ff9447}.radio.warning .check{border-color:#ff9447}.radio.yellow input[type=radio]:checked~.check{background-color:#ffe484;border-color:#ffe484}.radio.yellow .check{border-color:#ffe484}.radio.info input[type=radio]:checked~.check{background-color:#5ebdec;border-color:#5ebdec}.radio.info .check{border-color:#5ebdec}.radio.dark input[type=radio]:checked~.check{background-color:#505050;border-color:#505050}.radio.dark .check{border-color:#505050}.radio.light input[type=radio]:checked~.check{background-color:#f8f8f8;border-color:#f8f8f8}.radio.light .check{border-color:#f8f8f8}"]
        })
    ], RadioComponent);
    return RadioComponent;
}(ControlBase));
export { RadioComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFhbkM7SUFBb0Msa0NBQWdCO0lBQXBEOztJQXNGQSxDQUFDO3VCQXRGWSxjQUFjO0lBaUJ6QixzQ0FBYSxHQUFiO1FBQUEsaUJBMkJDO1FBMUJDLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxRQUFRO1lBQ2hDLElBQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3RDO1lBRUQsS0FBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFD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QUNyQjtRQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOztvREFBa0I7SUFFQztRQUFyQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUFnQixVQUFVO2lEQUFDO0lBYnJELGNBQWM7UUFSMUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsNFNBQXFDO1lBRXJDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxnQkFBYyxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxDQUFDLENBQUM7WUFDcEYsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87WUFDaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7T0FDVyxjQUFjLENBc0YxQjtJQUFELHFCQUFDO0NBQUEsQUF0RkQsQ0FBb0MsV0FBVyxHQXNGOUM7U0F0RlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sQmFzZX0gZnJvbSAnLi4vY29udHJvbC1iYXNlJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4uLy4uL2hlbHBlci9kZWZhdWx0LXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7UG9zaXRpb25Ib3Jpem9udGFsVHlwZX0gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGVzJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtNC1yYWRpbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW0RlZmF1bHRWYWx1ZUFjY2Vzc29yLmdldChSYWRpb0NvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoUmFkaW9Db21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8YW55PiB7XG5cbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ3ZhbHVlJykgdmFsdWU6IGFueTtcblxuICBASW5wdXQoJ3N0eWxlJykgc3R5bGU6IDF8MjtcbiAgQElucHV0KCdjYXB0aW9uJykgY2FwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoJ2NhcHRpb24tcG9zaXRpb24nKSBjYXB0aW9uUG9zaXRpb246IFBvc2l0aW9uSG9yaXpvbnRhbFR5cGU7XG5cbiAgQElucHV0KCdjbHMtcmFkaW8nKSBjbHNSYWRpbzogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jYXB0aW9uJykgY2xzQ2FwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jaGVjaycpIGNsc0NoZWNrOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSByYWRpbzogYW55O1xuXG4gIGNyZWF0ZUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChjb21wbGV0ZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5hdHRyKCduYW1lJywgdGhpcy5uYW1lKTtcblxuICAgICAgdGhpcy5yYWRpbyA9IHRoaXMuY2xvbmVkRWxlbWVudC5yYWRpbygpLmRhdGEoJ3JhZGlvJyk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5vbmUoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG91Y2hDYWxsYmFjaygpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbXBsZXRlKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5ld1ZhbHVlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5yYWRpbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChPYmplY3RIZWxwZXIuY29tcGFyZSh0aGlzLmlubmVyVmFsdWUsIHRoaXMudmFsdWUpKSB7XG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBuZXdDbGFzc1ZhbHVlKG5ld0NsYXNzZXM6IHN0cmluZ1tdLCBvbGRDbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCk7XG5cbiAgICAgICAgb2xkQ2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhjbHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBuZXdDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGFyZ2V0LmFkZENsYXNzKGNscyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==