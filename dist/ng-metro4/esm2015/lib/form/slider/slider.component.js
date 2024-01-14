var SliderComponent_1;
import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
let SliderComponent = SliderComponent_1 = class SliderComponent extends ControlBase {
    createControl() {
        return new Promise((complete) => {
            const originalElement = $(this.input.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.parent().parent().find('.slider-min-max').remove();
                this.clonedElement.parent().remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.slider = this.clonedElement.slider().data('slider');
            this.clonedElement.parent().find('button.marker').one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('change', () => {
                asapScheduler.schedule(() => {
                    this.changeValue(+this.clonedElement.val());
                });
            });
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
        if (!this.slider) {
            return;
        }
        this.slider.val(this.innerValue);
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
    Input('min'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "min", void 0);
__decorate([
    Input('max'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "max", void 0);
__decorate([
    Input('show-min-max'),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "showMinMax", void 0);
__decorate([
    Input('accuracy'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "accuracy", void 0);
__decorate([
    Input('buffer'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "buffer", void 0);
__decorate([
    Input('hint'),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "hint", void 0);
__decorate([
    Input('hint-always'),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "hintAlways", void 0);
__decorate([
    Input('hint-position'),
    __metadata("design:type", String)
], SliderComponent.prototype, "hintPosition", void 0);
__decorate([
    Input('hint-mask'),
    __metadata("design:type", String)
], SliderComponent.prototype, "hintMask", void 0);
__decorate([
    Input('vertical'),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "vertical", void 0);
__decorate([
    Input('size'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "size", void 0);
__decorate([
    Input('thin'),
    __metadata("design:type", String)
], SliderComponent.prototype, "thin", void 0);
__decorate([
    Input('cycle-marker'),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "cycleMarker", void 0);
__decorate([
    Input('cls-slider'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsSlider", void 0);
__decorate([
    Input('cls-backside'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsBackside", void 0);
__decorate([
    Input('cls-complete'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsComplete", void 0);
__decorate([
    Input('cls-buffer'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsBuffer", void 0);
__decorate([
    Input('cls-marker'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsMarker", void 0);
__decorate([
    Input('cls-hint'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsHint", void 0);
__decorate([
    Input('cls-min-max'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsMinMax", void 0);
__decorate([
    Input('cls-min'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsMin", void 0);
__decorate([
    Input('cls-max'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsMax", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], SliderComponent.prototype, "input", void 0);
SliderComponent = SliderComponent_1 = __decorate([
    Component({
        selector: 'm4-slider',
        template: "<input type=\"number\" #input\n\n\n       [attr.data-min]=\"min\"\n       [attr.data-max]=\"max\"\n       [attr.data-show-min-max]=\"showMinMax\"\n       [attr.data-accuracy]=\"accuracy\"\n       [attr.data-buffer]=\"buffer\"\n       [attr.data-hint]=\"hint\"\n       [attr.data-hint-always]=\"hintAlways\"\n       [attr.data-hint-position]=\"hintPosition\"\n       [attr.data-hint-mask]=\"hintMask\"\n       [attr.data-vertical]=\"vertical\"\n       [attr.data-size]=\"size\"\n\n       [attr.data-cls-slider]=\"clsSlider\"\n       [attr.data-cls-backside]=\"clsBackside\"\n       [attr.data-cls-complete]=\"clsComplete\"\n       [attr.data-cls-buffer]=\"clsBuffer\"\n       [attr.data-cls-marker]=\"clsMarker\"\n       [attr.data-cls-hint]=\"clsHint\"\n       [attr.data-cls-min-max]=\"clsMinMax\"\n       [attr.data-cls-min]=\"clsMin\"\n       [attr.data-cls-max]=\"clsMax\"\n\n       [class.thin]=\"thin === 'thin'\"\n       [class.ultra-thin]=\"thin === 'ultra-thin'\"\n       [class.cycle-marker]=\"cycleMarker\">\n",
        providers: [DefaultValueAccessor.get(SliderComponent_1), TypeAlias.get(SliderComponent_1)],
        encapsulation: ViewEncapsulation.None,
        styles: [".slider.primary .complete{background-color:#0366d6}.slider.primary .backside{background-color:#3969a0}.slider.secondary .complete{background-color:#607d8b}.slider.secondary .backside{background-color:#767676}.slider.success .complete{background-color:#60a917}.slider.success .backside{background-color:#607947}.slider.alert .complete{background-color:#ce352c}.slider.alert .backside{background-color:#906d6b}.slider.warning .complete{background-color:#ff9447}.slider.warning .backside{background-color:#d19c75}.slider.yellow .complete{background-color:#ffe484}.slider.yellow .backside{background-color:#e0d3a3}.slider.info .complete{background-color:#5ebdec}.slider.info .backside{background-color:#8baebf}.slider.dark .backside,.slider.dark .complete{background-color:#505050}.slider.light .backside,.slider.light .complete{background-color:#f8f8f8}m4-slider .disabled .complete,m4-slider .disabled button.marker{background-color:#989898}"]
    })
], SliderComponent);
export { SliderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFbkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBV3hELElBQWEsZUFBZSx1QkFBNUIsTUFBYSxlQUFnQixTQUFRLFdBQW1CO0lBK0J0RCxhQUFhO1FBQ1gsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0RSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3RDO1lBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFD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c0I7QUFFdkI7SUFBcEIsS0FBSyxDQUFDLFlBQVksQ0FBQzs7a0RBQW1CO0FBQ2hCO0lBQXRCLEtBQUssQ0FBQyxjQUFjLENBQUM7O29EQUFxQjtBQUNwQjtJQUF0QixLQUFLLENBQUMsY0FBYyxDQUFDOztvREFBcUI7QUFDdEI7SUFBcEIsS0FBSyxDQUFDLFlBQVksQ0FBQzs7a0RBQW1CO0FBQ2xCO0lBQXBCLEtBQUssQ0FBQyxZQUFZLENBQUM7O2tEQUFtQjtBQUNwQjtJQUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOztnREFBaUI7QUFDYjtJQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOztrREFBbUI7QUFDdEI7SUFBakIsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7K0NBQWdCO0FBQ2Y7SUFBakIsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7K0NBQWdCO0FBRUs7SUFBckMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBZ0IsVUFBVTs4Q0FBQztBQTNCckQsZUFBZTtJQVAzQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQix3Z0NBQXNDO1FBRXRDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxpQkFBZSxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBZSxDQUFDLENBQUM7UUFDdEYsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7R0FDVyxlQUFlLENBMkYzQjtTQTNGWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbEJhc2V9IGZyb20gJy4uL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7UG9zaXRpb25CYXNlVHlwZSwgVGhpblR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5pbXBvcnQge09iamVjdEhlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbGlkZXIuY29tcG9uZW50Lmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbRGVmYXVsdFZhbHVlQWNjZXNzb3IuZ2V0KFNsaWRlckNvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoU2xpZGVyQ29tcG9uZW50KV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8bnVtYmVyPiB7XG5cbiAgQElucHV0KCdtaW4nKSBtaW46IG51bWJlcjtcbiAgQElucHV0KCdtYXgnKSBtYXg6IG51bWJlcjtcbiAgQElucHV0KCdzaG93LW1pbi1tYXgnKSBzaG93TWluTWF4OiBib29sZWFuO1xuICBASW5wdXQoJ2FjY3VyYWN5JykgYWNjdXJhY3k6IG51bWJlcjtcbiAgQElucHV0KCdidWZmZXInKSBidWZmZXI6IG51bWJlcjtcbiAgQElucHV0KCdoaW50JykgaGludDogYm9vbGVhbjtcbiAgQElucHV0KCdoaW50LWFsd2F5cycpIGhpbnRBbHdheXM6IGJvb2xlYW47XG4gIEBJbnB1dCgnaGludC1wb3NpdGlvbicpIGhpbnRQb3NpdGlvbjogUG9zaXRpb25CYXNlVHlwZTtcbiAgQElucHV0KCdoaW50LW1hc2snKSBoaW50TWFzazogc3RyaW5nO1xuICBASW5wdXQoJ3ZlcnRpY2FsJykgdmVydGljYWw6IGJvb2xlYW47XG4gIEBJbnB1dCgnc2l6ZScpIHNpemU6IG51bWJlcjtcblxuICBASW5wdXQoJ3RoaW4nKSB0aGluOiBUaGluVHlwZTtcbiAgQElucHV0KCdjeWNsZS1tYXJrZXInKSBjeWNsZU1hcmtlcjogYm9vbGVhbjtcblxuICBASW5wdXQoJ2Nscy1zbGlkZXInKSBjbHNTbGlkZXI6IHN0cmluZztcbiAgQElucHV0KCdjbHMtYmFja3NpZGUnKSBjbHNCYWNrc2lkZTogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jb21wbGV0ZScpIGNsc0NvbXBsZXRlOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWJ1ZmZlcicpIGNsc0J1ZmZlcjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1tYXJrZXInKSBjbHNNYXJrZXI6IHN0cmluZztcbiAgQElucHV0KCdjbHMtaGludCcpIGNsc0hpbnQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtbWluLW1heCcpIGNsc01pbk1heDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1taW4nKSBjbHNNaW46IHN0cmluZztcbiAgQElucHV0KCdjbHMtbWF4JykgY2xzTWF4OiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIHNsaWRlcjogYW55O1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5zbGlkZXItbWluLW1heCcpLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcblxuICAgICAgdGhpcy5zbGlkZXIgPSB0aGlzLmNsb25lZEVsZW1lbnQuc2xpZGVyKCkuZGF0YSgnc2xpZGVyJyk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5maW5kKCdidXR0b24ubWFya2VyJykub25lKCdibHVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvdWNoQ2FsbGJhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSgrdGhpcy5jbG9uZWRFbGVtZW50LnZhbCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgY29tcGxldGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxuXG4gIG5ld1ZhbHVlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zbGlkZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNsaWRlci52YWwodGhpcy5pbm5lclZhbHVlKTtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpO1xuXG4gICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhjbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LmFkZENsYXNzKGNscyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19