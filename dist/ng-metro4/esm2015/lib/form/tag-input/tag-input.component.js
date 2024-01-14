var TagInputComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ControlBase } from '../control-base';
import { TypeAlias } from '../../helper/type-alias';
import { ObjectHelper } from '../../helper/object-helper';
let TagInputComponent = TagInputComponent_1 = class TagInputComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.clearButton = true;
        this.readonly = false;
        this.backspace = true;
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
            this.tagInput = this.clonedElement.taginput().data('taginput');
            this.clonedElement.next('.input-wrapper').one('blur', () => {
                this.touchCallback();
            });
            this.tagInput.options.onTag = (tag, val, vals) => {
                this.changeValue(vals.slice(0));
            };
            complete();
        });
    }
    disable(disabled) {
        if (this.tagInput) {
            const target = this.tagInput.element.parent('div.tag-input');
            if (target != null) {
                if (disabled) {
                    target.addClass('disabled');
                }
                else {
                    target.removeClass('disabled');
                }
            }
        }
    }
    newValue() {
        if (!this.tagInput) {
            return;
        }
        this.tagInput.clear();
        if (this.innerValue && this.innerValue.length > 0) {
            this.tagInput.val(this.innerValue);
        }
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
    Input('random-color'),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "randomColor", void 0);
__decorate([
    Input('max-tags'),
    __metadata("design:type", Number)
], TagInputComponent.prototype, "maxTags", void 0);
__decorate([
    Input('tag-trigger'),
    __metadata("design:type", Array)
], TagInputComponent.prototype, "tagTrigger", void 0);
__decorate([
    Input('clear-button'),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "clearButton", void 0);
__decorate([
    Input('clear-button-icon'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clearButtonIcon", void 0);
__decorate([
    Input('readonly'),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "readonly", void 0);
__decorate([
    Input('backspace'),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "backspace", void 0);
__decorate([
    Input('cls-tag'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clsTag", void 0);
__decorate([
    Input('cls-tag-title'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clsTagTitle", void 0);
__decorate([
    Input('cls-tag-remover'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clsTagRemover", void 0);
__decorate([
    Input('cls-clear-button'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clsClearButton", void 0);
__decorate([
    Input('cls-component'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clsComponent", void 0);
__decorate([
    Input('cls-input'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clsInput", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], TagInputComponent.prototype, "input", void 0);
TagInputComponent = TagInputComponent_1 = __decorate([
    Component({
        selector: 'm4-tag-input',
        template: "<input type=\"text\" #input\n\n\n       [readonly]=\"readonly\"\n\n       [attr.data-random-color]=\"randomColor\"\n       [attr.data-max-tags]=\"maxTags\"\n       [attr.data-tag-trigger]=\"tagTrigger?.join(',')\"\n       [attr.data-backspace]=\"backspace\"\n       [attr.data-clear-button]=\"clearButton\"\n       [attr.data-clear-button-icon]=\"clearButtonIcon\"\n\n       [attr.data-cls-tag]=\"clsTag\"\n       [attr.data-cls-tag-title]=\"clsTagTitle\"\n       [attr.data-cls-tag-remover]=\"clsTagRemover\"\n       [attr.data-cls-component]=\"clsComponent\"\n       [attr.data-cls-input]=\"clsInput\"\n       [attr.data-cls-clear-button]=\"clsClearButton\">\n",
        providers: [DefaultValueAccessor.get(TagInputComponent_1), TypeAlias.get(TagInputComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], TagInputComponent);
export { TagInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL3RhZy1pbnB1dC90YWctaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQVd4RCxJQUFhLGlCQUFpQix5QkFBOUIsTUFBYSxpQkFBa0IsU0FBUSxXQUFxQjtJQUE1RDs7UUFLeUIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFdkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsSUFBSSxDQUFDO0lBZ0Z2QyxDQUFDO0lBbkVDLGFBQWE7UUFDWCxPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDcEMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDdEM7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FB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QjtJQUF6QixLQUFLLENBQUMsaUJBQWlCLENBQUM7O3dEQUF1QjtBQUNyQjtJQUExQixLQUFLLENBQUMsa0JBQWtCLENBQUM7O3lEQUF3QjtBQUMxQjtJQUF2QixLQUFLLENBQUMsZUFBZSxDQUFDOzt1REFBc0I7QUFDekI7SUFBbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7bURBQWtCO0FBRUM7SUFBckMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBZ0IsVUFBVTtnREFBQztBQWpCckQsaUJBQWlCO0lBUDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLGtxQkFBeUM7UUFFekMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLG1CQUFpQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsQ0FBQyxDQUFDO1FBQzFGLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNoRCxDQUFDO0dBQ1csaUJBQWlCLENBd0Y3QjtTQXhGWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vaGVscGVyL2RlZmF1bHQtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHtDb250cm9sQmFzZX0gZnJvbSAnLi4vY29udHJvbC1iYXNlJztcbmltcG9ydCB7VHlwZUFsaWFzfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZS1hbGlhcyc7XG5pbXBvcnQge09iamVjdEhlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LXRhZy1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWctaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWctaW5wdXQuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoVGFnSW5wdXRDb21wb25lbnQpLCBUeXBlQWxpYXMuZ2V0KFRhZ0lucHV0Q29tcG9uZW50KV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFRhZ0lucHV0Q29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8c3RyaW5nW10+IHtcblxuICBASW5wdXQoJ3JhbmRvbS1jb2xvcicpIHJhbmRvbUNvbG9yOiBib29sZWFuO1xuICBASW5wdXQoJ21heC10YWdzJykgbWF4VGFnczogbnVtYmVyO1xuICBASW5wdXQoJ3RhZy10cmlnZ2VyJykgdGFnVHJpZ2dlcjogc3RyaW5nW107XG4gIEBJbnB1dCgnY2xlYXItYnV0dG9uJykgY2xlYXJCdXR0b24gPSB0cnVlO1xuICBASW5wdXQoJ2NsZWFyLWJ1dHRvbi1pY29uJykgY2xlYXJCdXR0b25JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgncmVhZG9ubHknKSByZWFkb25seSA9IGZhbHNlO1xuICBASW5wdXQoJ2JhY2tzcGFjZScpIGJhY2tzcGFjZSA9IHRydWU7XG5cbiAgQElucHV0KCdjbHMtdGFnJykgY2xzVGFnOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXRhZy10aXRsZScpIGNsc1RhZ1RpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXRhZy1yZW1vdmVyJykgY2xzVGFnUmVtb3Zlcjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jbGVhci1idXR0b24nKSBjbHNDbGVhckJ1dHRvbjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jb21wb25lbnQnKSBjbHNDb21wb25lbnQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtaW5wdXQnKSBjbHNJbnB1dDogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSB0YWdJbnB1dDogYW55O1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG5cbiAgICAgIHRoaXMudGFnSW5wdXQgPSB0aGlzLmNsb25lZEVsZW1lbnQudGFnaW5wdXQoKS5kYXRhKCd0YWdpbnB1dCcpO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQubmV4dCgnLmlucHV0LXdyYXBwZXInKS5vbmUoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG91Y2hDYWxsYmFjaygpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGFnSW5wdXQub3B0aW9ucy5vblRhZyA9ICh0YWcsIHZhbCwgdmFscykgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHMuc2xpY2UoMCkpO1xuICAgICAgfTtcblxuICAgICAgY29tcGxldGUoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhZ0lucHV0KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhZ0lucHV0LmVsZW1lbnQucGFyZW50KCdkaXYudGFnLWlucHV0Jyk7XG5cbiAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRhZ0lucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50YWdJbnB1dC5jbGVhcigpO1xuXG4gICAgaWYgKHRoaXMuaW5uZXJWYWx1ZSAmJiB0aGlzLmlubmVyVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy50YWdJbnB1dC52YWwodGhpcy5pbm5lclZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBuZXdDbGFzc1ZhbHVlKG5ld0NsYXNzZXM6IHN0cmluZ1tdLCBvbGRDbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKTtcblxuICAgICAgb2xkQ2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICB0YXJnZXQucmVtb3ZlQ2xhc3MoY2xzKTtcbiAgICAgIH0pO1xuXG4gICAgICBuZXdDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRhcmdldC5hZGRDbGFzcyhjbHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=