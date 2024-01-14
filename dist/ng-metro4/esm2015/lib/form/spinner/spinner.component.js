var SpinnerComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
let SpinnerComponent = SpinnerComponent_1 = class SpinnerComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.step = 1;
        this.fixed = 0;
        this.hideCursor = false;
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
            this.spinner = this.clonedElement.spinner().data('spinner');
            this.clonedElement.parent().off('mousedown mouseup keydown change');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('change', () => {
                if (this.disableUpdate) {
                    return;
                }
                const newVal = +this.clonedElement.val();
                this.changeValue(newVal);
                this.setValue(newVal);
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.spinner.disable();
        }
        else {
            this.spinner.enable();
        }
    }
    setValue(newValue) {
        if (this.minValue !== undefined && this.minValue !== null && newValue < this.minValue) {
            newValue = this.minValue;
            asapScheduler.schedule(() => {
                this.changeValue(newValue);
            });
        }
        if (this.maxValue !== undefined && this.maxValue !== null && newValue > this.maxValue) {
            newValue = this.maxValue;
            asapScheduler.schedule(() => {
                this.changeValue(newValue);
            });
        }
        this.clonedElement.val(newValue.toFixed(this.fixed));
    }
    newValue() {
        if (!this.spinner || !this.innerValue) {
            return;
        }
        this.setValue(this.innerValue);
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
export { SpinnerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvZm9ybS9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFbkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBV3hELElBQWEsZ0JBQWdCLHdCQUE3QixNQUFhLGdCQUFpQixTQUFRLFdBQW1CO0lBQXpEOztRQUVpQixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBTVIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNKLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFrRzNDLENBQUM7SUF0RkMsYUFBYTtRQUNYLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQyxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRW5DLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN0QztZQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lB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LGtCQUFnQixDQUFDLENBQUM7UUFDeEYsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7R0FDVyxnQkFBZ0IsQ0EyRzVCO1NBM0dZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vaGVscGVyL2RlZmF1bHQtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHtUeXBlQWxpYXN9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlLWFsaWFzJztcbmltcG9ydCB7YXNhcFNjaGVkdWxlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1NwaW5uZXJCdXR0b25Qb3NpdGlvblR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5pbXBvcnQge09iamVjdEhlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NwaW5uZXIuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoU3Bpbm5lckNvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoU3Bpbm5lckNvbXBvbmVudCldLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTcGlubmVyQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8bnVtYmVyPiB7XG5cbiAgQElucHV0KCdzdGVwJykgc3RlcCA9IDE7XG4gIEBJbnB1dCgncGx1cy1pY29uJykgcGx1c0ljb246IHN0cmluZztcbiAgQElucHV0KCdtaW51cy1pY29uJykgbWludXNJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgnYnV0dG9ucy1wb3NpdGlvbicpIGJ1dHRvbnNQb3NpdGlvbjogU3Bpbm5lckJ1dHRvblBvc2l0aW9uVHlwZTtcbiAgQElucHV0KCdtaW4tdmFsdWUnKSBtaW5WYWx1ZTogbnVtYmVyO1xuICBASW5wdXQoJ21heC12YWx1ZScpIG1heFZhbHVlOiBudW1iZXI7XG4gIEBJbnB1dCgnZml4ZWQnKSBmaXhlZCA9IDA7XG4gIEBJbnB1dCgnaGlkZS1jdXJzb3InKSBoaWRlQ3Vyc29yID0gZmFsc2U7XG5cbiAgQElucHV0KCdjbHMtc3Bpbm5lcicpIGNsc1NwaW5uZXI6IHN0cmluZztcbiAgQElucHV0KCdjbHMtc3Bpbm5lci1pbnB1dCcpIGNsc1NwaW5uZXJJbnB1dDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1zcGlubmVyLWJ1dHRvbicpIGNsc1NwaW5uZXJCdXR0b246IHN0cmluZztcbiAgQElucHV0KCdjbHMtc3Bpbm5lci1idXR0b24tcGx1cycpIGNsc1NwaW5uZXJCdXR0b25QbHVzOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXNwaW5uZXItYnV0dG9uLW1pbnVzJykgY2xzU3Bpbm5lckJ1dHRvbk1pbnVzOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIHNwaW5uZXI6IGFueTtcbiAgcHJpdmF0ZSBjbG9uZWRFbGVtZW50OiBhbnk7XG5cbiAgY3JlYXRlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGNvbXBsZXRlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCk7XG4gICAgICBPYmplY3RIZWxwZXIuaGlkZShvcmlnaW5hbEVsZW1lbnQpO1xuXG4gICAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50LmNsb25lKCk7XG4gICAgICBPYmplY3RIZWxwZXIuc2hvdyh0aGlzLmNsb25lZEVsZW1lbnQpO1xuICAgICAgb3JpZ2luYWxFbGVtZW50LnBhcmVudCgpLmFwcGVuZCh0aGlzLmNsb25lZEVsZW1lbnQpO1xuXG4gICAgICB0aGlzLnNwaW5uZXIgPSB0aGlzLmNsb25lZEVsZW1lbnQuc3Bpbm5lcigpLmRhdGEoJ3NwaW5uZXInKTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLm9mZignbW91c2Vkb3duIG1vdXNldXAga2V5ZG93biBjaGFuZ2UnKTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50Lm9uZSgnYmx1cicsICgpID0+IHtcbiAgICAgICAgdGhpcy50b3VjaENhbGxiYWNrKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVVcGRhdGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdWYWwgPSArdGhpcy5jbG9uZWRFbGVtZW50LnZhbCgpO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlVmFsdWUobmV3VmFsKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWwpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbXBsZXRlKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc3Bpbm5lci5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Bpbm5lci5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZShuZXdWYWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMubWluVmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm1pblZhbHVlICE9PSBudWxsICYmIG5ld1ZhbHVlIDwgdGhpcy5taW5WYWx1ZSkge1xuICAgICAgbmV3VmFsdWUgPSB0aGlzLm1pblZhbHVlO1xuXG4gICAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXhWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMubWF4VmFsdWUgIT09IG51bGwgJiYgbmV3VmFsdWUgPiB0aGlzLm1heFZhbHVlKSB7XG4gICAgICBuZXdWYWx1ZSA9IHRoaXMubWF4VmFsdWU7XG5cbiAgICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY2xvbmVkRWxlbWVudC52YWwobmV3VmFsdWUudG9GaXhlZCh0aGlzLmZpeGVkKSk7XG4gIH1cblxuICBuZXdWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3Bpbm5lciB8fCAhdGhpcy5pbm5lclZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmlubmVyVmFsdWUpO1xuICB9XG5cbiAgbmV3Q2xhc3NWYWx1ZShuZXdDbGFzc2VzOiBzdHJpbmdbXSwgb2xkQ2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCk7XG5cbiAgICAgIG9sZENsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGNscyk7XG4gICAgICB9KTtcblxuICAgICAgbmV3Q2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoY2xzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19