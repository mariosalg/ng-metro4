var MaterialInputComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ControlBase } from '../control-base';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
let MaterialInputComponent = MaterialInputComponent_1 = class MaterialInputComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.type = 'text';
        this.placeholder = '';
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
            this.materialInput = this.clonedElement.materialinput().data('materialinput');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('keydown change', () => {
                asapScheduler.schedule(() => {
                    let newValue = this.clonedElement.val();
                    if (this.type === 'number') {
                        newValue = +newValue;
                    }
                    this.changeValue(newValue);
                }, 1);
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.clonedElement.attr('disabled', 'disabled');
            this.materialInput.disable();
        }
        else {
            this.clonedElement.removeAttr('disabled');
            this.materialInput.enable();
        }
    }
    newValue() {
        if (!this.materialInput) {
            return;
        }
        this.clonedElement.val(this.innerValue);
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
], MaterialInputComponent.prototype, "type", void 0);
__decorate([
    Input('placeholder'),
    __metadata("design:type", Object)
], MaterialInputComponent.prototype, "placeholder", void 0);
__decorate([
    Input('readonly'),
    __metadata("design:type", Object)
], MaterialInputComponent.prototype, "readonly", void 0);
__decorate([
    Input('label'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "label", void 0);
__decorate([
    Input('informer'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "informer", void 0);
__decorate([
    Input('icon'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "icon", void 0);
__decorate([
    Input('cls-line'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "clsLine", void 0);
__decorate([
    Input('cls-label'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "clsLabel", void 0);
__decorate([
    Input('cls-informer'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "clsInformer", void 0);
__decorate([
    Input('cls-icon'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "clsIcon", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], MaterialInputComponent.prototype, "input", void 0);
MaterialInputComponent = MaterialInputComponent_1 = __decorate([
    Component({
        selector: 'm4-material-input',
        template: "<input [type]=\"type\" #input\n\n\n       [placeholder]=\"placeholder\"\n       [readonly]=\"readonly\"\n\n       [attr.data-icon]=\"icon\"\n       [attr.data-label]=\"label\"\n       [attr.data-informer]=\"informer\"\n       [attr.data-cls-line]=\"clsLine\"\n       [attr.data-cls-label]=\"clsLabel\"\n       [attr.data-cls-informer]=\"clsInformer\"\n       [attr.data-cls-icon]=\"clsIcon\">\n",
        providers: [DefaultValueAccessor.get(MaterialInputComponent_1), TypeAlias.get(MaterialInputComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], MaterialInputComponent);
export { MaterialInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vbWF0ZXJpYWwtaW5wdXQvbWF0ZXJpYWwtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBWXhELElBQWEsc0JBQXNCLDhCQUFuQyxNQUFhLHNCQUF1QixTQUFRLFdBQW1CO0lBQS9EOztRQUVpQixTQUFJLEdBQWMsTUFBTSxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFpRnRDLENBQUM7SUFwRUMsYUFBYTtRQUNYLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQyxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRW5DLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN0QztZQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsZUFB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YyxDQUFDOzsyREFBcUI7QUFDeEI7SUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7dURBQWlCO0FBRUc7SUFBckMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBZ0IsVUFBVTtxREFBQztBQWJyRCxzQkFBc0I7SUFQbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixzWkFBOEM7UUFFOUMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLHdCQUFzQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBc0IsQ0FBQyxDQUFDO1FBQ3BHLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNoRCxDQUFDO0dBQ1csc0JBQXNCLENBcUZsQztTQXJGWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vaGVscGVyL2RlZmF1bHQtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHtDb250cm9sQmFzZX0gZnJvbSAnLi4vY29udHJvbC1iYXNlJztcbmltcG9ydCB7VHlwZUFsaWFzfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZS1hbGlhcyc7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtPYmplY3RIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QtaGVscGVyJztcbmltcG9ydCB7SW5wdXRUeXBlfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZXMnO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LW1hdGVyaWFsLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21hdGVyaWFsLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWF0ZXJpYWwtaW5wdXQuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoTWF0ZXJpYWxJbnB1dENvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoTWF0ZXJpYWxJbnB1dENvbXBvbmVudCldLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbElucHV0Q29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8c3RyaW5nPiB7XG5cbiAgQElucHV0KCd0eXBlJykgdHlwZTogSW5wdXRUeXBlID0gJ3RleHQnO1xuICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXIgPSAnJztcbiAgQElucHV0KCdyZWFkb25seScpIHJlYWRvbmx5ID0gZmFsc2U7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoJ2luZm9ybWVyJykgaW5mb3JtZXI6IHN0cmluZztcbiAgQElucHV0KCdpY29uJykgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1saW5lJykgY2xzTGluZTogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1sYWJlbCcpIGNsc0xhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWluZm9ybWVyJykgY2xzSW5mb3JtZXI6IHN0cmluZztcbiAgQElucHV0KCdjbHMtaWNvbicpIGNsc0ljb246IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgbWF0ZXJpYWxJbnB1dDogYW55O1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG5cbiAgICAgIHRoaXMubWF0ZXJpYWxJbnB1dCA9IHRoaXMuY2xvbmVkRWxlbWVudC5tYXRlcmlhbGlucHV0KCkuZGF0YSgnbWF0ZXJpYWxpbnB1dCcpO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQub25lKCdibHVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvdWNoQ2FsbGJhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQub24oJ2tleWRvd24gY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB0aGlzLmNsb25lZEVsZW1lbnQudmFsKCk7XG5cbiAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSArbmV3VmFsdWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIH0sIDEpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbXBsZXRlKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgdGhpcy5tYXRlcmlhbElucHV0LmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICB0aGlzLm1hdGVyaWFsSW5wdXQuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgbmV3VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm1hdGVyaWFsSW5wdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsb25lZEVsZW1lbnQudmFsKHRoaXMuaW5uZXJWYWx1ZSk7XG4gIH1cblxuICBuZXdDbGFzc1ZhbHVlKG5ld0NsYXNzZXM6IHN0cmluZ1tdLCBvbGRDbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKTtcblxuICAgICAgb2xkQ2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICB0YXJnZXQucmVtb3ZlQ2xhc3MoY2xzKTtcbiAgICAgIH0pO1xuXG4gICAgICBuZXdDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRhcmdldC5hZGRDbGFzcyhjbHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==