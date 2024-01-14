var RadioComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ObjectHelper } from '../../helper/object-helper';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
let RadioComponent = RadioComponent_1 = class RadioComponent extends ControlBase {
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
            this.clonedElement.attr('name', this.name);
            this.radio = this.clonedElement.radio().data('radio');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('change', () => {
                this.changeValue(this.value);
            });
            complete();
        });
    }
    disable(disabled) {
        asapScheduler.schedule(() => {
            if (disabled) {
                this.clonedElement.parent().addClass('disabled');
                this.clonedElement.attr('disabled', 'disabled');
            }
            else {
                this.clonedElement.parent().removeClass('disabled');
                this.clonedElement.removeAttr('disabled');
            }
        });
    }
    newValue() {
        if (!this.radio) {
            return;
        }
        if (ObjectHelper.compare(this.innerValue, this.value)) {
            this.clonedElement.prop('checked', true);
        }
        else {
            this.clonedElement.prop('checked', false);
        }
    }
    newClassValue(newClasses, oldClasses) {
        asapScheduler.schedule(() => {
            if (this.clonedElement) {
                const target = this.clonedElement.parent();
                oldClasses.forEach((cls) => {
                    target.removeClass(cls);
                });
                newClasses.forEach((cls) => {
                    target.addClass(cls);
                });
            }
        });
    }
};
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
export { RadioComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBYW5DLElBQWEsY0FBYyxzQkFBM0IsTUFBYSxjQUFlLFNBQVEsV0FBZ0I7SUFpQmxELGFBQWE7UUFDWCxPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDcEMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDdEM7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0QyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLElB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QWEsQ0FBQzs7a0RBQW9CO0FBQ3JCO0lBQW5CLEtBQUssQ0FBQyxXQUFXLENBQUM7O2dEQUFrQjtBQUVDO0lBQXJDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQWdCLFVBQVU7NkNBQUM7QUFickQsY0FBYztJQVIxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQiw0U0FBcUM7UUFFckMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLGdCQUFjLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFjLENBQUMsQ0FBQztRQUNwRixlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTztRQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztHQUNXLGNBQWMsQ0FzRjFCO1NBdEZZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbEJhc2V9IGZyb20gJy4uL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge09iamVjdEhlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xuaW1wb3J0IHtUeXBlQWxpYXN9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlLWFsaWFzJztcbmltcG9ydCB7YXNhcFNjaGVkdWxlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1Bvc2l0aW9uSG9yaXpvbnRhbFR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtcmFkaW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYWRpby5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoUmFkaW9Db21wb25lbnQpLCBUeXBlQWxpYXMuZ2V0KFJhZGlvQ29tcG9uZW50KV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCBleHRlbmRzIENvbnRyb2xCYXNlPGFueT4ge1xuXG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCd2YWx1ZScpIHZhbHVlOiBhbnk7XG5cbiAgQElucHV0KCdzdHlsZScpIHN0eWxlOiAxfDI7XG4gIEBJbnB1dCgnY2FwdGlvbicpIGNhcHRpb246IHN0cmluZztcbiAgQElucHV0KCdjYXB0aW9uLXBvc2l0aW9uJykgY2FwdGlvblBvc2l0aW9uOiBQb3NpdGlvbkhvcml6b250YWxUeXBlO1xuXG4gIEBJbnB1dCgnY2xzLXJhZGlvJykgY2xzUmFkaW86IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2FwdGlvbicpIGNsc0NhcHRpb246IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2hlY2snKSBjbHNDaGVjazogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjbG9uZWRFbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgcmFkaW86IGFueTtcblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQuYXR0cignbmFtZScsIHRoaXMubmFtZSk7XG5cbiAgICAgIHRoaXMucmFkaW8gPSB0aGlzLmNsb25lZEVsZW1lbnQucmFkaW8oKS5kYXRhKCdyYWRpbycpO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQub25lKCdibHVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvdWNoQ2FsbGJhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuXG4gIH1cblxuICBkaXNhYmxlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZXdWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmFkaW8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0SGVscGVyLmNvbXBhcmUodGhpcy5pbm5lclZhbHVlLCB0aGlzLnZhbHVlKSkge1xuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgbmV3Q2xhc3NWYWx1ZShuZXdDbGFzc2VzOiBzdHJpbmdbXSwgb2xkQ2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpO1xuXG4gICAgICAgIG9sZENsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlQ2xhc3MoY2xzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3Q2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRhcmdldC5hZGRDbGFzcyhjbHMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=