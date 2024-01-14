import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
var TextareaComponent = /** @class */ (function (_super) {
    __extends(TextareaComponent, _super);
    function TextareaComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.placeholder = '';
        _this.readonly = false;
        return _this;
    }
    TextareaComponent_1 = TextareaComponent;
    TextareaComponent.prototype.createControl = function () {
        var _this = this;
        return new Promise(function (complete) {
            var originalElement = $(_this.textarea.nativeElement);
            ObjectHelper.hide(originalElement);
            if (_this.clonedElement) {
                _this.clonedElement.parent().remove();
            }
            _this.clonedElement = originalElement.clone();
            ObjectHelper.show(_this.clonedElement);
            originalElement.parent().append(_this.clonedElement);
            _this.textareaObj = _this.clonedElement.textarea().data('textarea');
            _this.clonedElement.one('blur', function () {
                _this.touchCallback();
            });
            _this.clonedElement.on('keydown change', function () {
                asapScheduler.schedule(function () {
                    _this.changeValue(_this.clonedElement.val());
                });
            });
            complete();
        });
    };
    TextareaComponent.prototype.disable = function (disabled) {
        if (disabled) {
            this.textareaObj.disable();
        }
        else {
            this.textareaObj.enable();
        }
    };
    TextareaComponent.prototype.newValue = function () {
        if (!this.textareaObj) {
            return;
        }
        this.clonedElement.val(this.innerValue);
        this.textareaObj.resize();
    };
    TextareaComponent.prototype.newClassValue = function (newClasses, oldClasses) {
        if (this.clonedElement) {
            var target_1 = this.clonedElement.parent();
            oldClasses.forEach(function (cls) {
                target_1.removeClass(cls);
            });
            newClasses.forEach(function (cls) {
                target_1.addClass(cls);
            });
        }
    };
    var TextareaComponent_1;
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
    return TextareaComponent;
}(ControlBase));
export { TextareaComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFXeEQ7SUFBdUMscUNBQW1CO0lBQTFEO1FBQUEscUVBaUZDO1FBL0V1QixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNwQixjQUFRLEdBQUcsS0FBSyxDQUFDOztJQThFdEMsQ0FBQzswQkFqRlksaUJBQWlCO0lBb0I1Qix5Q0FBYSxHQUFiO1FBQUEsaUJBNEJDO1FBM0JDLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxRQUFRO1lBQ2hDLElBQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3RDO1lBRUQsS0FBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsWUFBWSxDQUFD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O1lBQ3ZCLHduQkFBd0M7WUFFeEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLG1CQUFpQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsQ0FBQyxDQUFDO1lBQzFGLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDO09BQ1csaUJBQWlCLENBaUY3QjtJQUFELHdCQUFDO0NBQUEsQUFqRkQsQ0FBdUMsV0FBVyxHQWlGakQ7U0FqRlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbEJhc2V9IGZyb20gJy4uL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0YXJlYS5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW0RlZmF1bHRWYWx1ZUFjY2Vzc29yLmdldChUZXh0YXJlYUNvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoVGV4dGFyZWFDb21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQmFzZTxzdHJpbmc+IHtcblxuICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcGxhY2Vob2xkZXIgPSAnJztcbiAgQElucHV0KCdyZWFkb25seScpIHJlYWRvbmx5ID0gZmFsc2U7XG4gIEBJbnB1dCgnZGVmYXVsdC12YWx1ZScpIGRlZmF1bHRWYWx1ZTogc3RyaW5nO1xuICBASW5wdXQoJ3ByZXBlbmQnKSBwcmVwZW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgnYXBwZW5kJykgYXBwZW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xlYXItYnV0dG9uJykgY2xlYXJCdXR0b246IGJvb2xlYW47XG4gIEBJbnB1dCgnY2xlYXItYnV0dG9uLWljb24nKSBjbGVhckJ1dHRvbkljb246IHN0cmluZztcbiAgQElucHV0KCdhdXRvLXNpemUnKSBhdXRvU2l6ZTogYm9vbGVhbjtcblxuICBASW5wdXQoJ2Nscy1jb21wb25lbnQnKSBjbHNDb21wb25lbnQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtdGV4dGFyZWEnKSBjbHNUZXh0YXJlYTogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1wcmVwZW5kJykgY2xzUHJlcGVuZDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1hcHBlbmQnKSBjbHNBcHBlbmQ6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCd0ZXh0YXJlYScsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgdGV4dGFyZWE6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgdGV4dGFyZWFPYmo6IGFueTtcbiAgcHJpdmF0ZSBjbG9uZWRFbGVtZW50OiBhbnk7XG5cbiAgY3JlYXRlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGNvbXBsZXRlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSAkKHRoaXMudGV4dGFyZWEubmF0aXZlRWxlbWVudCk7XG4gICAgICBPYmplY3RIZWxwZXIuaGlkZShvcmlnaW5hbEVsZW1lbnQpO1xuXG4gICAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50LmNsb25lKCk7XG4gICAgICBPYmplY3RIZWxwZXIuc2hvdyh0aGlzLmNsb25lZEVsZW1lbnQpO1xuICAgICAgb3JpZ2luYWxFbGVtZW50LnBhcmVudCgpLmFwcGVuZCh0aGlzLmNsb25lZEVsZW1lbnQpO1xuXG4gICAgICB0aGlzLnRleHRhcmVhT2JqID0gdGhpcy5jbG9uZWRFbGVtZW50LnRleHRhcmVhKCkuZGF0YSgndGV4dGFyZWEnKTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50Lm9uZSgnYmx1cicsICgpID0+IHtcbiAgICAgICAgdGhpcy50b3VjaENhbGxiYWNrKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50Lm9uKCdrZXlkb3duIGNoYW5nZScsICgpID0+IHtcbiAgICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLmNsb25lZEVsZW1lbnQudmFsKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuXG4gIH1cblxuICBkaXNhYmxlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLnRleHRhcmVhT2JqLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXh0YXJlYU9iai5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBuZXdWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGV4dGFyZWFPYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsb25lZEVsZW1lbnQudmFsKHRoaXMuaW5uZXJWYWx1ZSk7XG4gICAgdGhpcy50ZXh0YXJlYU9iai5yZXNpemUoKTtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpO1xuXG4gICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhjbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LmFkZENsYXNzKGNscyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19