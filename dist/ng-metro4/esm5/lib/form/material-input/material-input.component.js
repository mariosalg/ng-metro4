import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ControlBase } from '../control-base';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
var MaterialInputComponent = /** @class */ (function (_super) {
    __extends(MaterialInputComponent, _super);
    function MaterialInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'text';
        _this.placeholder = '';
        _this.readonly = false;
        return _this;
    }
    MaterialInputComponent_1 = MaterialInputComponent;
    MaterialInputComponent.prototype.createControl = function () {
        var _this = this;
        return new Promise(function (complete) {
            var originalElement = $(_this.input.nativeElement);
            ObjectHelper.hide(originalElement);
            if (_this.clonedElement) {
                _this.clonedElement.parent().remove();
            }
            _this.clonedElement = originalElement.clone();
            ObjectHelper.show(_this.clonedElement);
            originalElement.parent().append(_this.clonedElement);
            _this.materialInput = _this.clonedElement.materialinput().data('materialinput');
            _this.clonedElement.one('blur', function () {
                _this.touchCallback();
            });
            _this.clonedElement.on('keydown change', function () {
                asapScheduler.schedule(function () {
                    var newValue = _this.clonedElement.val();
                    if (_this.type === 'number') {
                        newValue = +newValue;
                    }
                    _this.changeValue(newValue);
                }, 1);
            });
            complete();
        });
    };
    MaterialInputComponent.prototype.disable = function (disabled) {
        if (disabled) {
            this.clonedElement.attr('disabled', 'disabled');
            this.materialInput.disable();
        }
        else {
            this.clonedElement.removeAttr('disabled');
            this.materialInput.enable();
        }
    };
    MaterialInputComponent.prototype.newValue = function () {
        if (!this.materialInput) {
            return;
        }
        this.clonedElement.val(this.innerValue);
    };
    MaterialInputComponent.prototype.newClassValue = function (newClasses, oldClasses) {
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
    var MaterialInputComponent_1;
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
    return MaterialInputComponent;
}(ControlBase));
export { MaterialInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vbWF0ZXJpYWwtaW5wdXQvbWF0ZXJpYWwtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFZeEQ7SUFBNEMsMENBQW1CO0lBQS9EO1FBQUEscUVBcUZDO1FBbkZnQixVQUFJLEdBQWMsTUFBTSxDQUFDO1FBQ2xCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGNBQVEsR0FBRyxLQUFLLENBQUM7O0lBaUZ0QyxDQUFDOytCQXJGWSxzQkFBc0I7SUFpQmpDLDhDQUFhLEdBQWI7UUFBQSxpQkFrQ0M7UUFqQ0MsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLFFBQVE7WUFDaEMsSUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuQyxJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDdEM7WUFFRCxLQUFJLENBQUMsYUFBYSxH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QyxVQUFVLENBQUM7OzJEQUFpQjtJQUVHO1FBQXJDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQWdCLFVBQVU7eURBQUM7SUFickQsc0JBQXNCO1FBUGxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0Isc1pBQThDO1lBRTlDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyx3QkFBc0IsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0JBQXNCLENBQUMsQ0FBQztZQUNwRyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQztPQUNXLHNCQUFzQixDQXFGbEM7SUFBRCw2QkFBQztDQUFBLEFBckZELENBQTRDLFdBQVcsR0FxRnREO1NBckZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHtUeXBlQWxpYXN9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlLWFsaWFzJztcbmltcG9ydCB7YXNhcFNjaGVkdWxlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge09iamVjdEhlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xuaW1wb3J0IHtJbnB1dFR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtbWF0ZXJpYWwtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0ZXJpYWwtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXRlcmlhbC1pbnB1dC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW0RlZmF1bHRWYWx1ZUFjY2Vzc29yLmdldChNYXRlcmlhbElucHV0Q29tcG9uZW50KSwgVHlwZUFsaWFzLmdldChNYXRlcmlhbElucHV0Q29tcG9uZW50KV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQmFzZTxzdHJpbmc+IHtcblxuICBASW5wdXQoJ3R5cGUnKSB0eXBlOiBJbnB1dFR5cGUgPSAndGV4dCc7XG4gIEBJbnB1dCgncGxhY2Vob2xkZXInKSBwbGFjZWhvbGRlciA9ICcnO1xuICBASW5wdXQoJ3JlYWRvbmx5JykgcmVhZG9ubHkgPSBmYWxzZTtcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgnaW5mb3JtZXInKSBpbmZvcm1lcjogc3RyaW5nO1xuICBASW5wdXQoJ2ljb24nKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWxpbmUnKSBjbHNMaW5lOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWxhYmVsJykgY2xzTGFiZWw6IHN0cmluZztcbiAgQElucHV0KCdjbHMtaW5mb3JtZXInKSBjbHNJbmZvcm1lcjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1pY29uJykgY2xzSWNvbjogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBpbnB1dDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBtYXRlcmlhbElucHV0OiBhbnk7XG4gIHByaXZhdGUgY2xvbmVkRWxlbWVudDogYW55O1xuXG4gIGNyZWF0ZUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChjb21wbGV0ZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcblxuICAgICAgdGhpcy5tYXRlcmlhbElucHV0ID0gdGhpcy5jbG9uZWRFbGVtZW50Lm1hdGVyaWFsaW5wdXQoKS5kYXRhKCdtYXRlcmlhbGlucHV0Jyk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5vbmUoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG91Y2hDYWxsYmFjaygpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5vbigna2V5ZG93biBjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHRoaXMuY2xvbmVkRWxlbWVudC52YWwoKTtcblxuICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9ICtuZXdWYWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgfSwgMSk7XG4gICAgICB9KTtcblxuICAgICAgY29tcGxldGUoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB0aGlzLm1hdGVyaWFsSW5wdXQuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgIHRoaXMubWF0ZXJpYWxJbnB1dC5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBuZXdWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubWF0ZXJpYWxJbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2xvbmVkRWxlbWVudC52YWwodGhpcy5pbm5lclZhbHVlKTtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpO1xuXG4gICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhjbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LmFkZENsYXNzKGNscyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19