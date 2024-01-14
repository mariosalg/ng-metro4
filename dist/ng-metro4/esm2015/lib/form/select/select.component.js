var SelectComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
import { StringHelper } from '../../helper/string-helper';
let SelectComponent = SelectComponent_1 = class SelectComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.multiple = false;
        this.duration = 0;
    }
    createControl() {
        return new Promise((complete) => {
            const originalElement = $(this.input.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.children().appendTo(originalElement);
                this.clonedElement.parent().remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            originalElement.children().appendTo(this.clonedElement);
            this.select = this.clonedElement.select().data('select');
            this.clonedElement.parent().on('mousedown', (ev) => {
                if (ev.button === 0) {
                    this.touchCallback();
                    this.clonedElement.parent().off('mousedown');
                }
            });
            this.select.options.onChange = (val) => {
                if (this.options instanceof Array) {
                    const allOptions = [];
                    this.options.forEach((option) => {
                        if (!!option.options) {
                            option.options.forEach((subOption) => {
                                allOptions.push(subOption);
                            });
                        }
                        else {
                            allOptions.push(option);
                        }
                    });
                    val = val.map(key => allOptions.find(option => StringHelper.createHash(option.value) === key)).filter(v => !!v).map(v => v.value);
                }
                if (this.multiple) {
                    this.changeValue(val.slice(0));
                }
                else {
                    this.changeValue(val[0]);
                }
            };
            if (this.options && !(this.options instanceof Array)) {
                this.select.data(this.options);
            }
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.select.disable();
        }
        else {
            this.select.enable();
        }
    }
    newValue() {
        if (!this.select) {
            return;
        }
        let selectValue = this.multiple ? this.innerValue : [this.innerValue];
        if (this.options instanceof Array) {
            selectValue = selectValue.map(v => StringHelper.createHash(v));
        }
        if (this.multiple) {
            this.select.reset();
        }
        this.select.val(selectValue);
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
        }, 1);
    }
};
__decorate([
    Input('options'),
    __metadata("design:type", Object)
], SelectComponent.prototype, "options", void 0);
__decorate([
    Input('multiple'),
    __metadata("design:type", Object)
], SelectComponent.prototype, "multiple", void 0);
__decorate([
    Input('duration'),
    __metadata("design:type", Object)
], SelectComponent.prototype, "duration", void 0);
__decorate([
    Input('prepend'),
    __metadata("design:type", String)
], SelectComponent.prototype, "prepend", void 0);
__decorate([
    Input('append'),
    __metadata("design:type", String)
], SelectComponent.prototype, "append", void 0);
__decorate([
    Input('drop-height'),
    __metadata("design:type", Number)
], SelectComponent.prototype, "dropHeight", void 0);
__decorate([
    Input('filter'),
    __metadata("design:type", Boolean)
], SelectComponent.prototype, "filter", void 0);
__decorate([
    Input('filter-placeholder'),
    __metadata("design:type", String)
], SelectComponent.prototype, "filterPlaceholder", void 0);
__decorate([
    Input('cls-select'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsSelect", void 0);
__decorate([
    Input('cls-prepend'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsPrepend", void 0);
__decorate([
    Input('cls-append'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsAppend", void 0);
__decorate([
    Input('cls-option'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsOption", void 0);
__decorate([
    Input('cls-option-group'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsOptionGroup", void 0);
__decorate([
    Input('cls-drop-list'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsDropList", void 0);
__decorate([
    Input('cls-selected-item'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsSelectedItem", void 0);
__decorate([
    Input('cls-selected-item-remover'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsSelectedItemRemover", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], SelectComponent.prototype, "input", void 0);
SelectComponent = SelectComponent_1 = __decorate([
    Component({
        selector: 'm4-select',
        template: "<select #input [multiple]=\"multiple\"\n\n\n        [attr.data-prepend]=\"prepend\"\n        [attr.data-duration]=\"duration\"\n        [attr.data-append]=\"append\"\n        [attr.data-drop-height]=\"dropHeight\"\n        [attr.data-filter]=\"filter\"\n        [attr.data-filter-placeholder]=\"filterPlaceholder\"\n\n        [attr.data-cls-select]=\"clsSelect\"\n        [attr.data-cls-prepend]=\"clsPrepend\"\n        [attr.data-cls-append]=\"clsAppend\"\n        [attr.data-cls-option]=\"clsOption\"\n        [attr.data-cls-option-group]=\"clsOptionGroup\"\n        [attr.data-cls-drop-list]=\"clsDropList\"\n        [attr.data-cls-selected-item]=\"clsSelectedItem\"\n        [attr.data-cls-selected-item-remover]=\"clsSelectedItemRemover\">\n\n  <ng-content *ngIf=\"!options\"></ng-content>\n\n  <ng-container *ngIf=\"options | isArray\">\n    <ng-container *ngFor=\"let option of options\">\n      <option *ngIf=\"!option.options\" [value]=\"option.value | createHash\" [attr.data-template]=\"option.dataTemplate\">\n        {{option.title}}\n      </option>\n\n      <optgroup *ngIf=\"option.options\" [label]=\"option.groupName\">\n        <option *ngFor=\"let childOption of option.options\" [value]=\"childOption.value | createHash\" [attr.data-template]=\"childOption.dataTemplate\">\n          {{childOption.title}}\n        </option>\n      </optgroup>\n    </ng-container>\n  </ng-container>\n</select>\n",
        providers: [DefaultValueAccessor.get(SelectComponent_1), TypeAlias.get(SelectComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], SelectComponent);
export { SelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDbkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQWlCeEQsSUFBYSxlQUFlLHVCQUE1QixNQUFhLGVBQWdCLFNBQVEsV0FBNEI7SUFBakU7O1FBSXFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLENBQUMsQ0FBQztJQXNIbEMsQ0FBQztJQWxHQyxhQUFhO1FBQ1gsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3BDLE1BQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVB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QWUsQ0FBQyxDQUFDO1FBQ3RGLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNoRCxDQUFDO0dBQ1csZUFBZSxDQTJIM0I7U0EzSFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbEJhc2V9IGZyb20gJy4uL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5pbXBvcnQge1N0cmluZ0hlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL3N0cmluZy1oZWxwZXInO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGF0YVRlbXBsYXRlOiBzdHJpbmc7XG4gIHZhbHVlOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoU2VsZWN0Q29tcG9uZW50KSwgVHlwZUFsaWFzLmdldChTZWxlY3RDb21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8b2JqZWN0fG9iamVjdFtdPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCdvcHRpb25zJykgb3B0aW9uczogeyBba2V5OiBzdHJpbmddOiAoc3RyaW5nIHwgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkgfSB8XG4gICAgKE9wdGlvbiB8IHsgZ3JvdXBOYW1lOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbltdIH0pW107XG4gIEBJbnB1dCgnbXVsdGlwbGUnKSBtdWx0aXBsZSA9IGZhbHNlO1xuICBASW5wdXQoJ2R1cmF0aW9uJykgZHVyYXRpb24gPSAwO1xuICBASW5wdXQoJ3ByZXBlbmQnKSBwcmVwZW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgnYXBwZW5kJykgYXBwZW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgnZHJvcC1oZWlnaHQnKSBkcm9wSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgnZmlsdGVyJykgZmlsdGVyOiBib29sZWFuO1xuICBASW5wdXQoJ2ZpbHRlci1wbGFjZWhvbGRlcicpIGZpbHRlclBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KCdjbHMtc2VsZWN0JykgY2xzU2VsZWN0OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXByZXBlbmQnKSBjbHNQcmVwZW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWFwcGVuZCcpIGNsc0FwcGVuZDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1vcHRpb24nKSBjbHNPcHRpb246IHN0cmluZztcbiAgQElucHV0KCdjbHMtb3B0aW9uLWdyb3VwJykgY2xzT3B0aW9uR3JvdXA6IHN0cmluZztcbiAgQElucHV0KCdjbHMtZHJvcC1saXN0JykgY2xzRHJvcExpc3Q6IHN0cmluZztcbiAgQElucHV0KCdjbHMtc2VsZWN0ZWQtaXRlbScpIGNsc1NlbGVjdGVkSXRlbTogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1zZWxlY3RlZC1pdGVtLXJlbW92ZXInKSBjbHNTZWxlY3RlZEl0ZW1SZW1vdmVyOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIHNlbGVjdDogYW55O1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LmNoaWxkcmVuKCkuYXBwZW5kVG8ob3JpZ2luYWxFbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG5cbiAgICAgIG9yaWdpbmFsRWxlbWVudC5jaGlsZHJlbigpLmFwcGVuZFRvKHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICB0aGlzLnNlbGVjdCA9IHRoaXMuY2xvbmVkRWxlbWVudC5zZWxlY3QoKS5kYXRhKCdzZWxlY3QnKTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLm9uKCdtb3VzZWRvd24nLCAoZXY6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgIHRoaXMudG91Y2hDYWxsYmFjaygpO1xuICAgICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5vZmYoJ21vdXNlZG93bicpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zZWxlY3Qub3B0aW9ucy5vbkNoYW5nZSA9ICh2YWwpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgY29uc3QgYWxsT3B0aW9uczogT3B0aW9uW10gPSBbXTtcblxuICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb246IE9wdGlvbiAgfCB7IG9wdGlvbnM6IE9wdGlvbltdIH0pID0+IHtcbiAgICAgICAgICAgIGlmICghISg8YW55Pm9wdGlvbikub3B0aW9ucykge1xuICAgICAgICAgICAgICAoPGFueT5vcHRpb24pLm9wdGlvbnMuZm9yRWFjaCgoc3ViT3B0aW9uOiBPcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBhbGxPcHRpb25zLnB1c2goc3ViT3B0aW9uKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGxPcHRpb25zLnB1c2goPE9wdGlvbj5vcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFsID0gdmFsLm1hcChrZXkgPT4gYWxsT3B0aW9ucy5maW5kKG9wdGlvbiA9PiBTdHJpbmdIZWxwZXIuY3JlYXRlSGFzaChvcHRpb24udmFsdWUpID09PSBrZXkpKS5maWx0ZXIodiA9PiAhIXYpLm1hcCh2ID0+IHYudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbC5zbGljZSgwKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh2YWxbMF0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmICEodGhpcy5vcHRpb25zIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmRhdGEodGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgY29tcGxldGUoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZWxlY3QuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdC5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBuZXdWYWx1ZSgpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdFZhbHVlOiBhbnlbXSA9IHRoaXMubXVsdGlwbGUgPyA8YW55W10+dGhpcy5pbm5lclZhbHVlIDogWyB0aGlzLmlubmVyVmFsdWUgXTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgc2VsZWN0VmFsdWUgPSBzZWxlY3RWYWx1ZS5tYXAodiA9PiBTdHJpbmdIZWxwZXIuY3JlYXRlSGFzaCh2KSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0LnJlc2V0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3QudmFsKHNlbGVjdFZhbHVlKTtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKTtcblxuICAgICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGNscyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoY2xzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMSk7XG4gIH1cbn1cbiJdfQ==