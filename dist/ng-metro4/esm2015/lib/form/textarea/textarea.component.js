var TextareaComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
let TextareaComponent = TextareaComponent_1 = class TextareaComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.placeholder = '';
        this.readonly = false;
    }
    createControl() {
        return new Promise((complete) => {
            const originalElement = $(this.textarea.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.parent().remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.textareaObj = this.clonedElement.textarea().data('textarea');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('keydown change', () => {
                asapScheduler.schedule(() => {
                    this.changeValue(this.clonedElement.val());
                });
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.textareaObj.disable();
        }
        else {
            this.textareaObj.enable();
        }
    }
    newValue() {
        if (!this.textareaObj) {
            return;
        }
        this.clonedElement.val(this.innerValue);
        this.textareaObj.resize();
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
    Input('placeholder'),
    __metadata("design:type", Object)
], TextareaComponent.prototype, "placeholder", void 0);
__decorate([
    Input('readonly'),
    __metadata("design:type", Object)
], TextareaComponent.prototype, "readonly", void 0);
__decorate([
    Input('default-value'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "defaultValue", void 0);
__decorate([
    Input('prepend'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "prepend", void 0);
__decorate([
    Input('append'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "append", void 0);
__decorate([
    Input('clear-button'),
    __metadata("design:type", Boolean)
], TextareaComponent.prototype, "clearButton", void 0);
__decorate([
    Input('clear-button-icon'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "clearButtonIcon", void 0);
__decorate([
    Input('auto-size'),
    __metadata("design:type", Boolean)
], TextareaComponent.prototype, "autoSize", void 0);
__decorate([
    Input('cls-component'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "clsComponent", void 0);
__decorate([
    Input('cls-textarea'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "clsTextarea", void 0);
__decorate([
    Input('cls-prepend'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "clsPrepend", void 0);
__decorate([
    Input('cls-append'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "clsAppend", void 0);
__decorate([
    ViewChild('textarea', { static: true }),
    __metadata("design:type", ElementRef)
], TextareaComponent.prototype, "textarea", void 0);
TextareaComponent = TextareaComponent_1 = __decorate([
    Component({
        selector: 'm4-textarea',
        template: "<textarea #textarea\n\n\n          [placeholder]=\"placeholder\"\n          [readonly]=\"readonly\"\n\n          [attr.data-default-value]=\"defaultValue\"\n          [attr.data-prepend]=\"prepend\"\n          [attr.data-append]=\"append\"\n          [attr.data-clear-button]=\"clearButton\"\n          [attr.data-clear-button-icon]=\"clearButtonIcon\"\n          [attr.data-auto-size]=\"autoSize\"\n\n          [attr.data-cls-component]=\"clsComponent\"\n          [attr.data-cls-textarea]=\"clsTextarea\"\n          [attr.data-cls-prepend]=\"clsPrepend\"\n          [attr.data-cls-append]=\"clsAppend\">\n</textarea>\n",
        providers: [DefaultValueAccessor.get(TextareaComponent_1), TypeAlias.get(TextareaComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], TextareaComponent);
export { TextareaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBV3hELElBQWEsaUJBQWlCLHlCQUE5QixNQUFhLGlCQUFrQixTQUFRLFdBQW1CO0lBQTFEOztRQUV3QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBOEV0QyxDQUFDO0lBN0RDLGFBQWE7UUFDWCxPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDcEMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkQsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDdEM7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QyxZQUFZLENBQUMsSUFBSSxD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QVA3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2Qix3bkJBQXdDO1FBRXhDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQWlCLENBQUMsQ0FBQztRQUMxRixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztHQUNXLGlCQUFpQixDQWlGN0I7U0FqRlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbEJhc2V9IGZyb20gJy4uL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0YXJlYS5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW0RlZmF1bHRWYWx1ZUFjY2Vzc29yLmdldChUZXh0YXJlYUNvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoVGV4dGFyZWFDb21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQmFzZTxzdHJpbmc+IHtcblxuICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXIgPSAnJztcbiAgQElucHV0KCdyZWFkb25seScpIHJlYWRvbmx5ID0gZmFsc2U7XG4gIEBJbnB1dCgnZGVmYXVsdC12YWx1ZScpIGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xuICBASW5wdXQoJ3ByZXBlbmQnKSBwcmVwZW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgnYXBwZW5kJykgYXBwZW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xlYXItYnV0dG9uJykgY2xlYXJCdXR0b246IGJvb2xlYW47XG4gIEBJbnB1dCgnY2xlYXItYnV0dG9uLWljb24nKSBjbGVhckJ1dHRvbkljb246IHN0cmluZztcbiAgQElucHV0KCdhdXRvLXNpemUnKSBhdXRvU2l6ZTogYm9vbGVhbjtcblxuICBASW5wdXQoJ2Nscy1jb21wb25lbnQnKSBjbHNDb21wb25lbnQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtdGV4dGFyZWEnKSBjbHNUZXh0YXJlYTogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1wcmVwZW5kJykgY2xzUHJlcGVuZDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1hcHBlbmQnKSBjbHNBcHBlbmQ6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCd0ZXh0YXJlYScsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgdGV4dGFyZWE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgdGV4dGFyZWFPYmo6IGFueTtcbiAgcHJpdmF0ZSBjbG9uZWRFbGVtZW50OiBhbnk7XG5cbiAgY3JlYXRlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGNvbXBsZXRlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSAkKHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudCk7XG4gICAgICBPYmplY3RIZWxwZXIuaGlkZShvcmlnaW5hbEVsZW1lbnQpO1xuXG4gICAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50LmNsb25lKCk7XG4gICAgICBPYmplY3RIZWxwZXIuc2hvdyh0aGlzLmNsb25lZEVsZW1lbnQpO1xuICAgICAgb3JpZ2luYWxFbGVtZW50LnBhcmVudCgpLmFwcGVuZCh0aGlzLmNsb25lZEVsZW1lbnQpO1xuXG4gICAgICB0aGlzLnRleHRhcmVhT2JqID0gdGhpcy5jbG9uZWRFbGVtZW50LnRleHRhcmVhKCkuZGF0YSgndGV4dGFyZWEnKTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50Lm9uZSgnYmx1cicsICgpID0+IHtcbiAgICAgICAgdGhpcy50b3VjaENhbGxiYWNrKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50Lm9uKCdrZXlkb3duIGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmNsb25lZEVsZW1lbnQudmFsKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuXG4gIH1cblxuICBkaXNhYmxlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLnRleHRhcmVhT2JqLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXh0YXJlYU9iai5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBuZXdWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGV4dGFyZWFPYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsb25lZEVsZW1lbnQudmFsKHRoaXMuaW5uZXJWYWx1ZSk7XG4gICAgdGhpcy50ZXh0YXJlYU9iai5yZXNpemUoKTtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpO1xuXG4gICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhjbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LmFkZENsYXNzKGNscyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19