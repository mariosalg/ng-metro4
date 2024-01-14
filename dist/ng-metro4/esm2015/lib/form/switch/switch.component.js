var SwitchComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ControlBase } from '../control-base';
import { TypeAlias } from '../../helper/type-alias';
import { ObjectHelper } from '../../helper/object-helper';
let SwitchComponent = SwitchComponent_1 = class SwitchComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.readonly = false;
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
            this.switch = this.clonedElement.switch().data('switch');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('change', () => {
                this.changeValue(this.clonedElement.prop('checked'));
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.clonedElement.attr('disabled', 'disabled');
            this.switch.disable();
        }
        else {
            this.clonedElement.removeAttr('disabled');
            this.switch.enable();
        }
    }
    newValue() {
        if (!this.switch) {
            return;
        }
        this.clonedElement.prop('checked', this.innerValue);
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
    Input('material'),
    __metadata("design:type", Boolean)
], SwitchComponent.prototype, "material", void 0);
__decorate([
    Input('readonly'),
    __metadata("design:type", Object)
], SwitchComponent.prototype, "readonly", void 0);
__decorate([
    Input('caption'),
    __metadata("design:type", String)
], SwitchComponent.prototype, "caption", void 0);
__decorate([
    Input('caption-position'),
    __metadata("design:type", String)
], SwitchComponent.prototype, "captionPosition", void 0);
__decorate([
    Input('cls-switch'),
    __metadata("design:type", String)
], SwitchComponent.prototype, "clsSwitch", void 0);
__decorate([
    Input('cls-caption'),
    __metadata("design:type", String)
], SwitchComponent.prototype, "clsCaption", void 0);
__decorate([
    Input('cls-check'),
    __metadata("design:type", String)
], SwitchComponent.prototype, "clsCheck", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], SwitchComponent.prototype, "input", void 0);
SwitchComponent = SwitchComponent_1 = __decorate([
    Component({
        selector: 'm4-switch',
        template: "<input type=\"checkbox\" #input\n\n\n       [readonly]=\"readonly\"\n\n       [attr.data-material]=\"material\"\n       [attr.data-caption]=\"caption\"\n       [attr.data-caption-position]=\"captionPosition\"\n\n       [attr.data-cls-switch]=\"clsSwitch\"\n       [attr.data-cls-caption]=\"clsCaption\"\n       [attr.data-cls-check]=\"clsCheck\">\n",
        providers: [DefaultValueAccessor.get(SwitchComponent_1), TypeAlias.get(SwitchComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        styles: [".switch.primary input[type=checkbox]:checked~.check{background-color:#0366d6;border-color:#0366d6}.switch.primary input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.primary .check{border-color:#0366d6}.switch.primary .check::after{background-color:#0366d6;border-color:#0366d6}.switch.secondary input[type=checkbox]:checked~.check{background-color:#607d8b;border-color:#607d8b}.switch.secondary input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.secondary .check{border-color:#607d8b}.switch.secondary .check::after{background-color:#607d8b;border-color:#607d8b}.switch.success input[type=checkbox]:checked~.check{background-color:#60a917;border-color:#60a917}.switch.success input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.success .check{border-color:#60a917}.switch.success .check::after{background-color:#60a917;border-color:#60a917}.switch.alert input[type=checkbox]:checked~.check{background-color:#ce352c;border-color:#ce352c}.switch.alert input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.alert .check{border-color:#ce352c}.switch.alert .check::after{background-color:#ce352c;border-color:#ce352c}.switch.warning input[type=checkbox]:checked~.check{background-color:#ff9447;border-color:#ff9447}.switch.warning input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.warning .check{border-color:#ff9447}.switch.warning .check::after{background-color:#ff9447;border-color:#ff9447}.switch.yellow input[type=checkbox]:checked~.check{background-color:#ffe484;border-color:#ffe484}.switch.yellow input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.yellow .check{border-color:#ffe484}.switch.yellow .check::after{background-color:#ffe484;border-color:#ffe484}.switch.info input[type=checkbox]:checked~.check{background-color:#5ebdec;border-color:#5ebdec}.switch.info input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.info .check{border-color:#5ebdec}.switch.info .check::after{background-color:#5ebdec;border-color:#5ebdec}.switch.dark input[type=checkbox]:checked~.check{background-color:#505050;border-color:#505050}.switch.dark input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.dark .check{border-color:#505050}.switch.dark .check::after{background-color:#505050;border-color:#505050}.switch.light input[type=checkbox]:checked~.check{background-color:#f8f8f8;border-color:#f8f8f8}.switch.light input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.light .check{border-color:#f8f8f8}.switch.light .check::after{background-color:#f8f8f8;border-color:#f8f8f8}"]
    })
], SwitchComponent);
export { SwitchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRWxELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQVl4RCxJQUFhLGVBQWUsdUJBQTVCLE1BQWEsZUFBZ0IsU0FBUSxXQUFvQjtJQUF6RDs7UUFHcUIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQXVFdEMsQ0FBQztJQTNEQyxhQUFhO1FBQ1gsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3RDO1lBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0s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M0I7U0ExRVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vaGVscGVyL2RlZmF1bHQtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHtDb250cm9sQmFzZX0gZnJvbSAnLi4vY29udHJvbC1iYXNlJztcbmltcG9ydCB7VHlwZUFsaWFzfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZS1hbGlhcyc7XG5pbXBvcnQge1Bvc2l0aW9uSG9yaXpvbnRhbFR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5pbXBvcnQge09iamVjdEhlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LXN3aXRjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zd2l0Y2guY29tcG9uZW50Lmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbRGVmYXVsdFZhbHVlQWNjZXNzb3IuZ2V0KFN3aXRjaENvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoU3dpdGNoQ29tcG9uZW50KV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN3aXRjaENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xCYXNlPGJvb2xlYW4+IHtcblxuICBASW5wdXQoJ21hdGVyaWFsJykgbWF0ZXJpYWw6IGJvb2xlYW47XG4gIEBJbnB1dCgncmVhZG9ubHknKSByZWFkb25seSA9IGZhbHNlO1xuICBASW5wdXQoJ2NhcHRpb24nKSBjYXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2FwdGlvbi1wb3NpdGlvbicpIGNhcHRpb25Qb3NpdGlvbjogUG9zaXRpb25Ib3Jpem9udGFsVHlwZTtcblxuICBASW5wdXQoJ2Nscy1zd2l0Y2gnKSBjbHNTd2l0Y2g6IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2FwdGlvbicpIGNsc0NhcHRpb246IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2hlY2snKSBjbHNDaGVjazogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjbG9uZWRFbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgc3dpdGNoOiBhbnk7XG5cbiAgY3JlYXRlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGNvbXBsZXRlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCk7XG4gICAgICBPYmplY3RIZWxwZXIuaGlkZShvcmlnaW5hbEVsZW1lbnQpO1xuXG4gICAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50LmNsb25lKCk7XG4gICAgICBPYmplY3RIZWxwZXIuc2hvdyh0aGlzLmNsb25lZEVsZW1lbnQpO1xuICAgICAgb3JpZ2luYWxFbGVtZW50LnBhcmVudCgpLmFwcGVuZCh0aGlzLmNsb25lZEVsZW1lbnQpO1xuXG4gICAgICB0aGlzLnN3aXRjaCA9IHRoaXMuY2xvbmVkRWxlbWVudC5zd2l0Y2goKS5kYXRhKCdzd2l0Y2gnKTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50Lm9uZSgnYmx1cicsICgpID0+IHtcbiAgICAgICAgdGhpcy50b3VjaENhbGxiYWNrKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5jbG9uZWRFbGVtZW50LnByb3AoJ2NoZWNrZWQnKSk7XG4gICAgICB9KTtcblxuICAgICAgY29tcGxldGUoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB0aGlzLnN3aXRjaC5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgdGhpcy5zd2l0Y2guZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgbmV3VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnN3aXRjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wcm9wKCdjaGVja2VkJywgdGhpcy5pbm5lclZhbHVlKTtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpO1xuXG4gICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhjbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LmFkZENsYXNzKGNscyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==