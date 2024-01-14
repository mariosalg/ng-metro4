import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ControlBase } from '../control-base';
import { TypeAlias } from '../../helper/type-alias';
import { ObjectHelper } from '../../helper/object-helper';
var TagInputComponent = /** @class */ (function (_super) {
    __extends(TagInputComponent, _super);
    function TagInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clearButton = true;
        _this.readonly = false;
        _this.backspace = true;
        return _this;
    }
    TagInputComponent_1 = TagInputComponent;
    TagInputComponent.prototype.createControl = function () {
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
            _this.tagInput = _this.clonedElement.taginput().data('taginput');
            _this.clonedElement.next('.input-wrapper').one('blur', function () {
                _this.touchCallback();
            });
            _this.tagInput.options.onTag = function (tag, val, vals) {
                _this.changeValue(vals.slice(0));
            };
            complete();
        });
    };
    TagInputComponent.prototype.disable = function (disabled) {
        if (this.tagInput) {
            var target = this.tagInput.element.parent('div.tag-input');
            if (target != null) {
                if (disabled) {
                    target.addClass('disabled');
                }
                else {
                    target.removeClass('disabled');
                }
            }
        }
    };
    TagInputComponent.prototype.newValue = function () {
        if (!this.tagInput) {
            return;
        }
        this.tagInput.clear();
        if (this.innerValue && this.innerValue.length > 0) {
            this.tagInput.val(this.innerValue);
        }
    };
    TagInputComponent.prototype.newClassValue = function (newClasses, oldClasses) {
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
    var TagInputComponent_1;
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
    return TagInputComponent;
}(ControlBase));
export { TagInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL3RhZy1pbnB1dC90YWctaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBV3hEO0lBQXVDLHFDQUFxQjtJQUE1RDtRQUFBLHFFQXdGQztRQW5Gd0IsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFTLEdBQUcsSUFBSSxDQUFDOztJQWdGdkMsQ0FBQzswQkF4RlksaUJBQWlCO0lBcUI1Qix5Q0FBYSxHQUFiO1FBQUEsaUJBMEJDO1FBekJDLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxRQUFRO1lBQ2hDLElBQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3RDO1lBRUQsS0FBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxL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LENBQUM7OzREQUF1QjtJQUNyQjtRQUExQixLQUFLLENBQUMsa0JBQWtCLENBQUM7OzZEQUF3QjtJQUMxQjtRQUF2QixLQUFLLENBQUMsZUFBZSxDQUFDOzsyREFBc0I7SUFDekI7UUFBbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7dURBQWtCO0lBRUM7UUFBckMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBZ0IsVUFBVTtvREFBQztJQWpCckQsaUJBQWlCO1FBUDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLGtxQkFBeUM7WUFFekMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLG1CQUFpQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsQ0FBQyxDQUFDO1lBQzFGLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDO09BQ1csaUJBQWlCLENBd0Y3QjtJQUFELHdCQUFDO0NBQUEsQUF4RkQsQ0FBdUMsV0FBVyxHQXdGakQ7U0F4RlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4uLy4uL2hlbHBlci9kZWZhdWx0LXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7Q29udHJvbEJhc2V9IGZyb20gJy4uL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHtPYmplY3RIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QtaGVscGVyJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtNC10YWctaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFnLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFnLWlucHV0LmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbRGVmYXVsdFZhbHVlQWNjZXNzb3IuZ2V0KFRhZ0lucHV0Q29tcG9uZW50KSwgVHlwZUFsaWFzLmdldChUYWdJbnB1dENvbXBvbmVudCldLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUYWdJbnB1dENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xCYXNlPHN0cmluZ1tdPiB7XG5cbiAgQElucHV0KCdyYW5kb20tY29sb3InKSByYW5kb21Db2xvcjogYm9vbGVhbjtcbiAgQElucHV0KCdtYXgtdGFncycpIG1heFRhZ3M6IG51bWJlcjtcbiAgQElucHV0KCd0YWctdHJpZ2dlcicpIHRhZ1RyaWdnZXI6IHN0cmluZ1tdO1xuICBASW5wdXQoJ2NsZWFyLWJ1dHRvbicpIGNsZWFyQnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KCdjbGVhci1idXR0b24taWNvbicpIGNsZWFyQnV0dG9uSWNvbjogc3RyaW5nO1xuICBASW5wdXQoJ3JlYWRvbmx5JykgcmVhZG9ubHkgPSBmYWxzZTtcbiAgQElucHV0KCdiYWNrc3BhY2UnKSBiYWNrc3BhY2UgPSB0cnVlO1xuXG4gIEBJbnB1dCgnY2xzLXRhZycpIGNsc1RhZzogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy10YWctdGl0bGUnKSBjbHNUYWdUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy10YWctcmVtb3ZlcicpIGNsc1RhZ1JlbW92ZXI6IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2xlYXItYnV0dG9uJykgY2xzQ2xlYXJCdXR0b246IHN0cmluZztcbiAgQElucHV0KCdjbHMtY29tcG9uZW50JykgY2xzQ29tcG9uZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWlucHV0JykgY2xzSW5wdXQ6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgdGFnSW5wdXQ6IGFueTtcbiAgcHJpdmF0ZSBjbG9uZWRFbGVtZW50OiBhbnk7XG5cbiAgY3JlYXRlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGNvbXBsZXRlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCk7XG4gICAgICBPYmplY3RIZWxwZXIuaGlkZShvcmlnaW5hbEVsZW1lbnQpO1xuXG4gICAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50LmNsb25lKCk7XG4gICAgICBPYmplY3RIZWxwZXIuc2hvdyh0aGlzLmNsb25lZEVsZW1lbnQpO1xuICAgICAgb3JpZ2luYWxFbGVtZW50LnBhcmVudCgpLmFwcGVuZCh0aGlzLmNsb25lZEVsZW1lbnQpO1xuXG4gICAgICB0aGlzLnRhZ0lucHV0ID0gdGhpcy5jbG9uZWRFbGVtZW50LnRhZ2lucHV0KCkuZGF0YSgndGFnaW5wdXQnKTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50Lm5leHQoJy5pbnB1dC13cmFwcGVyJykub25lKCdibHVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvdWNoQ2FsbGJhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRhZ0lucHV0Lm9wdGlvbnMub25UYWcgPSAodGFnLCB2YWwsIHZhbHMpID0+IHtcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh2YWxzLnNsaWNlKDApKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbXBsZXRlKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWdJbnB1dCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YWdJbnB1dC5lbGVtZW50LnBhcmVudCgnZGl2LnRhZy1pbnB1dCcpO1xuXG4gICAgICBpZiAodGFyZ2V0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgdGFyZ2V0LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld1ZhbHVlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50YWdJbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGFnSW5wdXQuY2xlYXIoKTtcblxuICAgIGlmICh0aGlzLmlubmVyVmFsdWUgJiYgdGhpcy5pbm5lclZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudGFnSW5wdXQudmFsKHRoaXMuaW5uZXJWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbmV3Q2xhc3NWYWx1ZShuZXdDbGFzc2VzOiBzdHJpbmdbXSwgb2xkQ2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCk7XG5cbiAgICAgIG9sZENsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGNscyk7XG4gICAgICB9KTtcblxuICAgICAgbmV3Q2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoY2xzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19