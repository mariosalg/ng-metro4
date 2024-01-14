var KeypadComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ControlBase } from '../control-base';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
let KeypadComponent = KeypadComponent_1 = class KeypadComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.type = 'text';
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
            this.keypad = this.clonedElement.keypad().data('keypad');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('change', () => {
                asapScheduler.schedule(() => {
                    let newValue = this.clonedElement.val();
                    if (this.type === 'number') {
                        newValue = +newValue;
                    }
                    this.changeValue(newValue);
                });
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.keypad.disable();
        }
        else {
            this.keypad.enable();
        }
    }
    newValue() {
        if (!this.keypad) {
            return;
        }
        this.keypad.val(this.innerValue ? this.innerValue.toString() : '');
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
    Input('type'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "type", void 0);
__decorate([
    Input('key-size'),
    __metadata("design:type", Number)
], KeypadComponent.prototype, "keySize", void 0);
__decorate([
    Input('keys'),
    __metadata("design:type", Array)
], KeypadComponent.prototype, "keys", void 0);
__decorate([
    Input('key-length'),
    __metadata("design:type", Number)
], KeypadComponent.prototype, "keyLength", void 0);
__decorate([
    Input('shuffle'),
    __metadata("design:type", Boolean)
], KeypadComponent.prototype, "shuffle", void 0);
__decorate([
    Input('shuffle-count'),
    __metadata("design:type", Number)
], KeypadComponent.prototype, "shuffleCount", void 0);
__decorate([
    Input('position'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "position", void 0);
__decorate([
    Input('dynamic-position'),
    __metadata("design:type", Boolean)
], KeypadComponent.prototype, "dynamicPosition", void 0);
__decorate([
    Input('service-buttons'),
    __metadata("design:type", Boolean)
], KeypadComponent.prototype, "serviceButtons", void 0);
__decorate([
    Input('show-value'),
    __metadata("design:type", Boolean)
], KeypadComponent.prototype, "showValue", void 0);
__decorate([
    Input('open'),
    __metadata("design:type", Boolean)
], KeypadComponent.prototype, "open", void 0);
__decorate([
    Input('size-as-keys'),
    __metadata("design:type", Boolean)
], KeypadComponent.prototype, "sizeAsKeys", void 0);
__decorate([
    Input('cls-keypad'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsKeypad", void 0);
__decorate([
    Input('cls-input'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsInput", void 0);
__decorate([
    Input('cls-keys'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsKeys", void 0);
__decorate([
    Input('cls-key'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsKey", void 0);
__decorate([
    Input('cls-service-key'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsServiceKey", void 0);
__decorate([
    Input('cls-backspace'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsBackspace", void 0);
__decorate([
    Input('cls-clear'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsClear", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], KeypadComponent.prototype, "input", void 0);
KeypadComponent = KeypadComponent_1 = __decorate([
    Component({
        selector: 'm4-keypad',
        template: "<input [type]=\"type\" #input\n\n\n       [attr.data-key-size]=\"keySize\"\n       [attr.data-keys]=\"keys?.join(',')\"\n       [attr.data-key-length]=\"keyLength\"\n       [attr.data-shuffle]=\"shuffle\"\n       [attr.data-shuffle-count]=\"shuffleCount\"\n       [attr.data-position]=\"position\"\n       [attr.data-dynamic-position]=\"dynamicPosition\"\n       [attr.data-service-buttons]=\"serviceButtons\"\n       [attr.data-show-value]=\"showValue\"\n       [attr.data-open]=\"open\"\n       [attr.data-size-as-keys]=\"sizeAsKeys\"\n\n       [attr.data-cls-keypad]=\"clsKeypad\"\n       [attr.data-cls-input]=\"clsInput\"\n       [attr.data-cls-keys]=\"clsKeys\"\n       [attr.data-cls-key]=\"clsKey\"\n       [attr.data-cls-service-key]=\"clsServiceKey\"\n       [attr.data-cls-backspace]=\"clsBackspace\"\n       [attr.data-cls-clear]=\"clsClear\">\n",
        providers: [DefaultValueAccessor.get(KeypadComponent_1), TypeAlias.get(KeypadComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], KeypadComponent);
export { KeypadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cGFkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2tleXBhZC9rZXlwYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFNUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBV3hELElBQWEsZUFBZSx1QkFBNUIsTUFBYSxlQUFnQixTQUFRLFdBQTBCO0lBQS9EOztRQUVpQixTQUFJLEdBQWMsTUFBTSxDQUFDO0lBNEYxQyxDQUFDO0lBbkVDLGFBQWE7UUFDWCxPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDcEMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDdEM7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0Qyxl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O0FBRXRCO0lBQXBCLEtBQUssQ0FBQyxZQUFZLENBQUM7O2tEQUFtQjtBQUNuQjtJQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOztpREFBa0I7QUFDbEI7SUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7Z0RBQWlCO0FBQ2pCO0lBQWpCLEtBQUssQ0FBQyxTQUFTLENBQUM7OytDQUFnQjtBQUNQO0lBQXpCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7c0RBQXVCO0FBQ3hCO0lBQXZCLEtBQUssQ0FBQyxlQUFlLENBQUM7O3FEQUFzQjtBQUN6QjtJQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOztpREFBa0I7QUFFQztJQUFyQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzhCQUFnQixVQUFVOzhDQUFDO0FBdkJyRCxlQUFlO0lBUDNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLHEyQkFBc0M7UUFFdEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLGlCQUFlLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFlLENBQUMsQ0FBQztRQUN0RixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztHQUNXLGVBQWUsQ0E4RjNCO1NBOUZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vaGVscGVyL2RlZmF1bHQtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHtDb250cm9sQmFzZX0gZnJvbSAnLi4vY29udHJvbC1iYXNlJztcbmltcG9ydCB7SW5wdXRUeXBlLCBQb3NpdGlvblR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQta2V5cGFkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2tleXBhZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2tleXBhZC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW0RlZmF1bHRWYWx1ZUFjY2Vzc29yLmdldChLZXlwYWRDb21wb25lbnQpLCBUeXBlQWxpYXMuZ2V0KEtleXBhZENvbXBvbmVudCldLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBLZXlwYWRDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQmFzZTxzdHJpbmd8bnVtYmVyPiB7XG5cbiAgQElucHV0KCd0eXBlJykgdHlwZTogSW5wdXRUeXBlID0gJ3RleHQnO1xuICBASW5wdXQoJ2tleS1zaXplJykga2V5U2l6ZTogbnVtYmVyO1xuICBASW5wdXQoJ2tleXMnKSBrZXlzOiBzdHJpbmdbXTtcbiAgQElucHV0KCdrZXktbGVuZ3RoJykga2V5TGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgnc2h1ZmZsZScpIHNodWZmbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgnc2h1ZmZsZS1jb3VudCcpIHNodWZmbGVDb3VudDogbnVtYmVyO1xuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IFBvc2l0aW9uVHlwZTtcbiAgQElucHV0KCdkeW5hbWljLXBvc2l0aW9uJykgZHluYW1pY1Bvc2l0aW9uOiBib29sZWFuO1xuICBASW5wdXQoJ3NlcnZpY2UtYnV0dG9ucycpIHNlcnZpY2VCdXR0b25zOiBib29sZWFuO1xuICBASW5wdXQoJ3Nob3ctdmFsdWUnKSBzaG93VmFsdWU6IGJvb2xlYW47XG4gIEBJbnB1dCgnb3BlbicpIG9wZW46IGJvb2xlYW47XG4gIEBJbnB1dCgnc2l6ZS1hcy1rZXlzJykgc2l6ZUFzS2V5czogYm9vbGVhbjtcblxuICBASW5wdXQoJ2Nscy1rZXlwYWQnKSBjbHNLZXlwYWQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtaW5wdXQnKSBjbHNJbnB1dDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1rZXlzJykgY2xzS2V5czogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1rZXknKSBjbHNLZXk6IHN0cmluZztcbiAgQElucHV0KCdjbHMtc2VydmljZS1rZXknKSBjbHNTZXJ2aWNlS2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWJhY2tzcGFjZScpIGNsc0JhY2tzcGFjZTogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jbGVhcicpIGNsc0NsZWFyOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGtleXBhZDogYW55O1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG5cbiAgICAgIHRoaXMua2V5cGFkID0gdGhpcy5jbG9uZWRFbGVtZW50LmtleXBhZCgpLmRhdGEoJ2tleXBhZCcpO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQub25lKCdibHVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvdWNoQ2FsbGJhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gdGhpcy5jbG9uZWRFbGVtZW50LnZhbCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gK25ld1ZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuXG5cbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMua2V5cGFkLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rZXlwYWQuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgbmV3VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmtleXBhZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMua2V5cGFkLnZhbCh0aGlzLmlubmVyVmFsdWUgPyB0aGlzLmlubmVyVmFsdWUudG9TdHJpbmcoKSA6ICcnKTtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpO1xuXG4gICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhjbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LmFkZENsYXNzKGNscyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19