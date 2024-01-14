var InputComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
let InputComponent = InputComponent_1 = class InputComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.searchButtonClick = new EventEmitter();
        this.readonly = false;
        this.placeholder = '';
        this.type = 'text';
        this.customButtons = [];
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
            this.inputObj = this.clonedElement.input({
                customButtons: this.customButtons,
                onSearchButtonClick: (val) => this.searchButtonClick.emit(val)
            }).data('input');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('keydown change', (event) => {
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
            this.inputObj.disable();
        }
        else {
            this.inputObj.enable();
        }
    }
    newValue() {
        if (!this.inputObj) {
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
    Output('search-button-click'),
    __metadata("design:type", Object)
], InputComponent.prototype, "searchButtonClick", void 0);
__decorate([
    Input('readonly'),
    __metadata("design:type", Object)
], InputComponent.prototype, "readonly", void 0);
__decorate([
    Input('placeholder'),
    __metadata("design:type", Object)
], InputComponent.prototype, "placeholder", void 0);
__decorate([
    Input('type'),
    __metadata("design:type", String)
], InputComponent.prototype, "type", void 0);
__decorate([
    Input('default-value'),
    __metadata("design:type", Object)
], InputComponent.prototype, "defaultValue", void 0);
__decorate([
    Input('size'),
    __metadata("design:type", Number)
], InputComponent.prototype, "size", void 0);
__decorate([
    Input('prepend'),
    __metadata("design:type", String)
], InputComponent.prototype, "prepend", void 0);
__decorate([
    Input('append'),
    __metadata("design:type", String)
], InputComponent.prototype, "append", void 0);
__decorate([
    Input('clear-button'),
    __metadata("design:type", Boolean)
], InputComponent.prototype, "clearButton", void 0);
__decorate([
    Input('clear-button-icon'),
    __metadata("design:type", String)
], InputComponent.prototype, "clearButtonIcon", void 0);
__decorate([
    Input('reveal-button'),
    __metadata("design:type", Boolean)
], InputComponent.prototype, "revealButton", void 0);
__decorate([
    Input('reveal-button-icon'),
    __metadata("design:type", String)
], InputComponent.prototype, "revealButtonIcon", void 0);
__decorate([
    Input('custom-buttons'),
    __metadata("design:type", Array)
], InputComponent.prototype, "customButtons", void 0);
__decorate([
    Input('search-button'),
    __metadata("design:type", Boolean)
], InputComponent.prototype, "searchButton", void 0);
__decorate([
    Input('search-button-icon'),
    __metadata("design:type", String)
], InputComponent.prototype, "searchButtonIcon", void 0);
__decorate([
    Input('autocomplete'),
    __metadata("design:type", Array)
], InputComponent.prototype, "autocomplete", void 0);
__decorate([
    Input('autocomplete-list-height'),
    __metadata("design:type", Number)
], InputComponent.prototype, "autocompleteListHeight", void 0);
__decorate([
    Input('cls-component'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsComponent", void 0);
__decorate([
    Input('cls-input'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsInput", void 0);
__decorate([
    Input('cls-prepend'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsPrepend", void 0);
__decorate([
    Input('cls-append'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsAppend", void 0);
__decorate([
    Input('cls-clear-button'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsClearButton", void 0);
__decorate([
    Input('cls-reveal-button'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsRevealButton", void 0);
__decorate([
    Input('cls-custom-button'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsCustomButton", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], InputComponent.prototype, "input", void 0);
InputComponent = InputComponent_1 = __decorate([
    Component({
        selector: 'm4-input',
        template: "<input [type]=\"type\" #input\n\n       [readonly]=\"readonly\"\n       [placeholder]=\"placeholder\"\n\n       [attr.data-default-value]=\"defaultValue\"\n       [attr.data-size]=\"size\"\n       [attr.data-prepend]=\"prepend\"\n       [attr.data-append]=\"append\"\n       [attr.data-clear-button]=\"clearButton\"\n       [attr.data-clear-button-icon]=\"clearButtonIcon\"\n       [attr.data-reveal-button]=\"revealButton\"\n       [attr.data-reveal-button-icon]=\"revealButtonIcon\"\n       [attr.data-search-button]=\"searchButton\"\n       [attr.data-search-button-icon]=\"searchButtonIcon\"\n       data-search-button-click=\"custom\"\n       [attr.data-autocomplete]=\"autocomplete?.join(',')\"\n       [attr.data-autocomplete-list-height]=\"autocompleteListHeight\"\n\n       [attr.data-cls-component]=\"clsComponent\"\n       [attr.data-cls-input]=\"clsInput\"\n       [attr.data-cls-prepend]=\"clsPrepend\"\n       [attr.data-cls-append]=\"clsAppend\"\n       [attr.data-cls-clear-button]=\"clsClearButton\"\n       [attr.data-cls-reveal-button]=\"clsRevealButton\"\n       [attr.data-cls-custom-button]=\"clsCustomButton\">\n",
        providers: [DefaultValueAccessor.get(InputComponent_1), TypeAlias.get(InputComponent_1)],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: ["m4-input .autocomplete-list{z-index:1000}"]
    })
], InputComponent);
export { InputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUFFLFNBQVMsRUFDakIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFheEQsSUFBYSxjQUFjLHNCQUEzQixNQUFhLGNBQWUsU0FBUSxXQUEwQjtJQUE5RDs7UUFDaUMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFbEUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNkLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLFNBQUksR0FBYyxNQUFNLENBQUM7UUFTZixrQkFBYSxHQUFxRCxFQUFFLENBQUM7SUFxRmhHLENBQUM7SUFuRUMsYUFBYTtRQUNYLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQyxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRW5DLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGFBQWEs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QUMsR0FBRyxDQUFDLGdCQUFjLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFjLENBQUMsQ0FBQztRQUNwRixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztHQUNXLGNBQWMsQ0FtRzFCO1NBbkdZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vaGVscGVyL2RlZmF1bHQtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHtUeXBlQWxpYXN9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlLWFsaWFzJztcbmltcG9ydCB7YXNhcFNjaGVkdWxlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge09iamVjdEhlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xuaW1wb3J0IHtJbnB1dFR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW0RlZmF1bHRWYWx1ZUFjY2Vzc29yLmdldChJbnB1dENvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoSW5wdXRDb21wb25lbnQpXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQmFzZTxzdHJpbmd8bnVtYmVyPiB7XG4gIEBPdXRwdXQoJ3NlYXJjaC1idXR0b24tY2xpY2snKSBzZWFyY2hCdXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nfG51bWJlcj4oKTtcblxuICBASW5wdXQoJ3JlYWRvbmx5JykgcmVhZG9ubHkgPSBmYWxzZTtcbiAgQElucHV0KCdwbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgndHlwZScpIHR5cGU6IElucHV0VHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCdkZWZhdWx0LXZhbHVlJykgZGVmYXVsdFZhbHVlOiBhbnk7XG4gIEBJbnB1dCgnc2l6ZScpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCdwcmVwZW5kJykgcHJlcGVuZDogc3RyaW5nO1xuICBASW5wdXQoJ2FwcGVuZCcpIGFwcGVuZDogc3RyaW5nO1xuICBASW5wdXQoJ2NsZWFyLWJ1dHRvbicpIGNsZWFyQnV0dG9uOiBib29sZWFuO1xuICBASW5wdXQoJ2NsZWFyLWJ1dHRvbi1pY29uJykgY2xlYXJCdXR0b25JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgncmV2ZWFsLWJ1dHRvbicpIHJldmVhbEJ1dHRvbjogYm9vbGVhbjtcbiAgQElucHV0KCdyZXZlYWwtYnV0dG9uLWljb24nKSByZXZlYWxCdXR0b25JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY3VzdG9tLWJ1dHRvbnMnKSBjdXN0b21CdXR0b25zOiB7IGh0bWw6IHN0cmluZywgY2xzOiBzdHJpbmcsIG9uY2xpY2s6IHN0cmluZyB9W10gPSBbXTtcbiAgQElucHV0KCdzZWFyY2gtYnV0dG9uJykgc2VhcmNoQnV0dG9uOiBib29sZWFuO1xuICBASW5wdXQoJ3NlYXJjaC1idXR0b24taWNvbicpIHNlYXJjaEJ1dHRvbkljb246IHN0cmluZztcbiAgQElucHV0KCdhdXRvY29tcGxldGUnKSBhdXRvY29tcGxldGU6IHN0cmluZ1tdO1xuICBASW5wdXQoJ2F1dG9jb21wbGV0ZS1saXN0LWhlaWdodCcpIGF1dG9jb21wbGV0ZUxpc3RIZWlnaHQ6IG51bWJlcjtcblxuICBASW5wdXQoJ2Nscy1jb21wb25lbnQnKSBjbHNDb21wb25lbnQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtaW5wdXQnKSBjbHNJbnB1dDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1wcmVwZW5kJykgY2xzUHJlcGVuZDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1hcHBlbmQnKSBjbHNBcHBlbmQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2xlYXItYnV0dG9uJykgY2xzQ2xlYXJCdXR0b246IHN0cmluZztcbiAgQElucHV0KCdjbHMtcmV2ZWFsLWJ1dHRvbicpIGNsc1JldmVhbEJ1dHRvbjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jdXN0b20tYnV0dG9uJykgY2xzQ3VzdG9tQnV0dG9uOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGlucHV0T2JqOiBhbnk7XG4gIHByaXZhdGUgY2xvbmVkRWxlbWVudDogYW55O1xuXG4gIGNyZWF0ZUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChjb21wbGV0ZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcblxuICAgICAgdGhpcy5pbnB1dE9iaiA9IHRoaXMuY2xvbmVkRWxlbWVudC5pbnB1dCh7XG4gICAgICAgIGN1c3RvbUJ1dHRvbnM6IHRoaXMuY3VzdG9tQnV0dG9ucyxcbiAgICAgICAgb25TZWFyY2hCdXR0b25DbGljazogKHZhbCkgPT4gdGhpcy5zZWFyY2hCdXR0b25DbGljay5lbWl0KHZhbClcbiAgICAgIH0pLmRhdGEoJ2lucHV0Jyk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5vbmUoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG91Y2hDYWxsYmFjaygpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5vbigna2V5ZG93biBjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gdGhpcy5jbG9uZWRFbGVtZW50LnZhbCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gK25ld1ZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9LCAxKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dE9iai5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXRPYmouZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgbmV3VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlucHV0T2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbG9uZWRFbGVtZW50LnZhbCh0aGlzLmlubmVyVmFsdWUpO1xuICB9XG5cbiAgbmV3Q2xhc3NWYWx1ZShuZXdDbGFzc2VzOiBzdHJpbmdbXSwgb2xkQ2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCk7XG5cbiAgICAgIG9sZENsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGNscyk7XG4gICAgICB9KTtcblxuICAgICAgbmV3Q2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoY2xzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19