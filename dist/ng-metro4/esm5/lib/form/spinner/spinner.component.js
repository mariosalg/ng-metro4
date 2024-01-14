import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
var SpinnerComponent = /** @class */ (function (_super) {
    __extends(SpinnerComponent, _super);
    function SpinnerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.step = 1;
        _this.fixed = 0;
        _this.hideCursor = false;
        return _this;
    }
    SpinnerComponent_1 = SpinnerComponent;
    SpinnerComponent.prototype.createControl = function () {
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
            _this.spinner = _this.clonedElement.spinner().data('spinner');
            _this.clonedElement.parent().off('mousedown mouseup keydown change');
            _this.clonedElement.one('blur', function () {
                _this.touchCallback();
            });
            _this.clonedElement.on('change', function () {
                if (_this.disableUpdate) {
                    return;
                }
                var newVal = +_this.clonedElement.val();
                _this.changeValue(newVal);
                _this.setValue(newVal);
            });
            complete();
        });
    };
    SpinnerComponent.prototype.disable = function (disabled) {
        if (disabled) {
            this.spinner.disable();
        }
        else {
            this.spinner.enable();
        }
    };
    SpinnerComponent.prototype.setValue = function (newValue) {
        var _this = this;
        if (this.minValue !== undefined && this.minValue !== null && newValue < this.minValue) {
            newValue = this.minValue;
            asapScheduler.schedule(function () {
                _this.changeValue(newValue);
            });
        }
        if (this.maxValue !== undefined && this.maxValue !== null && newValue > this.maxValue) {
            newValue = this.maxValue;
            asapScheduler.schedule(function () {
                _this.changeValue(newValue);
            });
        }
        this.clonedElement.val(newValue.toFixed(this.fixed));
    };
    SpinnerComponent.prototype.newValue = function () {
        if (!this.spinner || !this.innerValue) {
            return;
        }
        this.setValue(this.innerValue);
    };
    SpinnerComponent.prototype.newClassValue = function (newClasses, oldClasses) {
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
    var SpinnerComponent_1;
    __decorate([
        Input('step'),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "step", void 0);
    __decorate([
        Input('plus-icon'),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "plusIcon", void 0);
    __decorate([
        Input('minus-icon'),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "minusIcon", void 0);
    __decorate([
        Input('buttons-position'),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "buttonsPosition", void 0);
    __decorate([
        Input('min-value'),
        __metadata("design:type", Number)
    ], SpinnerComponent.prototype, "minValue", void 0);
    __decorate([
        Input('max-value'),
        __metadata("design:type", Number)
    ], SpinnerComponent.prototype, "maxValue", void 0);
    __decorate([
        Input('fixed'),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "fixed", void 0);
    __decorate([
        Input('hide-cursor'),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "hideCursor", void 0);
    __decorate([
        Input('cls-spinner'),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "clsSpinner", void 0);
    __decorate([
        Input('cls-spinner-input'),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "clsSpinnerInput", void 0);
    __decorate([
        Input('cls-spinner-button'),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "clsSpinnerButton", void 0);
    __decorate([
        Input('cls-spinner-button-plus'),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "clsSpinnerButtonPlus", void 0);
    __decorate([
        Input('cls-spinner-button-minus'),
        __metadata("design:type", String)
    ], SpinnerComponent.prototype, "clsSpinnerButtonMinus", void 0);
    __decorate([
        ViewChild('input', { static: true }),
        __metadata("design:type", ElementRef)
    ], SpinnerComponent.prototype, "input", void 0);
    SpinnerComponent = SpinnerComponent_1 = __decorate([
        Component({
            selector: 'm4-spinner',
            template: "<input type=\"text\" #input\n\n\n       [attr.data-step]=\"step\"\n       [attr.data-fixed]=\"fixed\"\n       [attr.data-plus-icon]=\"plusIcon\"\n       [attr.data-minus-icon]=\"minusIcon\"\n       [attr.data-buttons-position]=\"buttonsPosition\"\n\n       [attr.data-hide-cursor]=\"hideCursor\"\n       [style.textShadow]=\"hideCursor ? '0 0 0 #1d1d1d' : null\"\n\n       [attr.data-cls-spinner]=\"clsSpinner\"\n       [attr.data-cls-spinner-input]=\"clsSpinnerInput\"\n       [attr.data-cls-spinner-button]=\"clsSpinnerButton\"\n       [attr.data-cls-spinner-button-minus]=\"clsSpinnerButtonMinus\"\n       [attr.data-cls-spinner-button-plus]=\"clsSpinnerButtonPlus\" >\n",
            providers: [DefaultValueAccessor.get(SpinnerComponent_1), TypeAlias.get(SpinnerComponent_1)],
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [""]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}(ControlBase));
export { SpinnerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvZm9ybS9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUVuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFXeEQ7SUFBc0Msb0NBQW1CO0lBQXpEO1FBQUEscUVBMkdDO1FBekdnQixVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBTVIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNKLGdCQUFVLEdBQUcsS0FBSyxDQUFDOztJQWtHM0MsQ0FBQzt5QkEzR1ksZ0JBQWdCO0lBcUIzQix3Q0FBYSxHQUFiO1FBQUEsaUJBbUNDO1FBbENDLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxRQUFRO1lBQ2hDLElBQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3RDO1lBRUQsS0FBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFF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QUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQztPQUNXLGdCQUFnQixDQTJHNUI7SUFBRCx1QkFBQztDQUFBLEFBM0dELENBQXNDLFdBQVcsR0EyR2hEO1NBM0dZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vaGVscGVyL2RlZmF1bHQtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHtUeXBlQWxpYXN9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlLWFsaWFzJztcbmltcG9ydCB7YXNhcFNjaGVkdWxlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1NwaW5uZXJCdXR0b25Qb3NpdGlvblR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5pbXBvcnQge09iamVjdEhlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NwaW5uZXIuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoU3Bpbm5lckNvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoU3Bpbm5lckNvbXBvbmVudCldLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTcGlubmVyQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8bnVtYmVyPiB7XG5cbiAgQElucHV0KCdzdGVwJykgc3RlcCA9IDE7XG4gIEBJbnB1dCgncGx1cy1pY29uJykgcGx1c0ljb246IHN0cmluZztcbiAgQElucHV0KCdtaW51cy1pY29uJykgbWludXNJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgnYnV0dG9ucy1wb3NpdGlvbicpIGJ1dHRvbnNQb3NpdGlvbjogU3Bpbm5lckJ1dHRvblBvc2l0aW9uVHlwZTtcbiAgQElucHV0KCdtaW4tdmFsdWUnKSBtaW5WYWx1ZTogbnVtYmVyO1xuICBASW5wdXQoJ21heC12YWx1ZScpIG1heFZhbHVlOiBudW1iZXI7XG4gIEBJbnB1dCgnZml4ZWQnKSBmaXhlZCA9IDA7XG4gIEBJbnB1dCgnaGlkZS1jdXJzb3InKSBoaWRlQ3Vyc29yID0gZmFsc2U7XG5cbiAgQElucHV0KCdjbHMtc3Bpbm5lcicpIGNsc1NwaW5uZXI6IHN0cmluZztcbiAgQElucHV0KCdjbHMtc3Bpbm5lci1pbnB1dCcpIGNsc1NwaW5uZXJJbnB1dDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1zcGlubmVyLWJ1dHRvbicpIGNsc1NwaW5uZXJCdXR0b246IHN0cmluZztcbiAgQElucHV0KCdjbHMtc3Bpbm5lci1idXR0b24tcGx1cycpIGNsc1NwaW5uZXJCdXR0b25QbHVzOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXNwaW5uZXItYnV0dG9uLW1pbnVzJykgY2xzU3Bpbm5lckJ1dHRvbk1pbnVzOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIHNwaW5uZXI6IGFueTtcbiAgcHJpdmF0ZSBjbG9uZWRFbGVtZW50OiBhbnk7XG5cbiAgY3JlYXRlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGNvbXBsZXRlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCk7XG4gICAgICBPYmplY3RIZWxwZXIuaGlkZShvcmlnaW5hbEVsZW1lbnQpO1xuXG4gICAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50LmNsb25lKCk7XG4gICAgICBPYmplY3RIZWxwZXIuc2hvdyh0aGlzLmNsb25lZEVsZW1lbnQpO1xuICAgICAgb3JpZ2luYWxFbGVtZW50LnBhcmVudCgpLmFwcGVuZCh0aGlzLmNsb25lZEVsZW1lbnQpO1xuXG4gICAgICB0aGlzLnNwaW5uZXIgPSB0aGlzLmNsb25lZEVsZW1lbnQuc3Bpbm5lcigpLmRhdGEoJ3NwaW5uZXInKTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLm9mZignbW91c2Vkb3duIG1vdXNldXAga2V5ZG93biBjaGFuZ2UnKTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50Lm9uZSgnYmx1cicsICgpID0+IHtcbiAgICAgICAgdGhpcy50b3VjaENhbGxiYWNrKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVVcGRhdGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdWYWwgPSArdGhpcy5jbG9uZWRFbGVtZW50LnZhbCgpO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlVmFsdWUobmV3VmFsKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWwpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbXBsZXRlKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc3Bpbm5lci5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Bpbm5lci5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZShuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubWluVmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm1pblZhbHVlICE9PSBudWxsICYmIG5ld1ZhbHVlIDwgdGhpcy5taW5WYWx1ZSkge1xuICAgICAgbmV3VmFsdWUgPSB0aGlzLm1pblZhbHVlO1xuXG4gICAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXhWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMubWF4VmFsdWUgIT09IG51bGwgJiYgbmV3VmFsdWUgPiB0aGlzLm1heFZhbHVlKSB7XG4gICAgICBuZXdWYWx1ZSA9IHRoaXMubWF4VmFsdWU7XG5cbiAgICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY2xvbmVkRWxlbWVudC52YWwobmV3VmFsdWUudG9GaXhlZCh0aGlzLmZpeGVkKSk7XG4gIH1cblxuICBuZXdWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3Bpbm5lciB8fCAhdGhpcy5pbm5lclZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlubmVyVmFsdWUpO1xuICB9XG5cbiAgbmV3Q2xhc3NWYWx1ZShuZXdDbGFzc2VzOiBzdHJpbmdbXSwgb2xkQ2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCk7XG5cbiAgICAgIG9sZENsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGNscyk7XG4gICAgICB9KTtcblxuICAgICAgbmV3Q2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoY2xzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19