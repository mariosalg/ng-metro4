import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ControlBase } from '../control-base';
import { TypeAlias } from '../../helper/type-alias';
import { ObjectHelper } from '../../helper/object-helper';
var SwitchComponent = /** @class */ (function (_super) {
    __extends(SwitchComponent, _super);
    function SwitchComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.readonly = false;
        return _this;
    }
    SwitchComponent_1 = SwitchComponent;
    SwitchComponent.prototype.createControl = function () {
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
            _this.switch = _this.clonedElement.switch().data('switch');
            _this.clonedElement.one('blur', function () {
                _this.touchCallback();
            });
            _this.clonedElement.on('change', function () {
                _this.changeValue(_this.clonedElement.prop('checked'));
            });
            complete();
        });
    };
    SwitchComponent.prototype.disable = function (disabled) {
        if (disabled) {
            this.clonedElement.attr('disabled', 'disabled');
            this.switch.disable();
        }
        else {
            this.clonedElement.removeAttr('disabled');
            this.switch.enable();
        }
    };
    SwitchComponent.prototype.newValue = function () {
        if (!this.switch) {
            return;
        }
        this.clonedElement.prop('checked', this.innerValue);
    };
    SwitchComponent.prototype.newClassValue = function (newClasses, oldClasses) {
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
    var SwitchComponent_1;
    __decorate([
        Input('material'),
        __metadata("design:type", Boolean)
    ], SwitchComponent.prototype, "material", void 0);
    __decorate([
        Input('readonly'),
        __metadata("design:type", Object)
    ], SwitchComponent.prototype, "readonly", void 0);
    __decorate([
        Input('caption'),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "caption", void 0);
    __decorate([
        Input('caption-position'),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "captionPosition", void 0);
    __decorate([
        Input('cls-switch'),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "clsSwitch", void 0);
    __decorate([
        Input('cls-caption'),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "clsCaption", void 0);
    __decorate([
        Input('cls-check'),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "clsCheck", void 0);
    __decorate([
        ViewChild('input', { static: true }),
        __metadata("design:type", ElementRef)
    ], SwitchComponent.prototype, "input", void 0);
    SwitchComponent = SwitchComponent_1 = __decorate([
        Component({
            selector: 'm4-switch',
            template: "<input type=\"checkbox\" #input\n\n\n       [readonly]=\"readonly\"\n\n       [attr.data-material]=\"material\"\n       [attr.data-caption]=\"caption\"\n       [attr.data-caption-position]=\"captionPosition\"\n\n       [attr.data-cls-switch]=\"clsSwitch\"\n       [attr.data-cls-caption]=\"clsCaption\"\n       [attr.data-cls-check]=\"clsCheck\">\n",
            providers: [DefaultValueAccessor.get(SwitchComponent_1), TypeAlias.get(SwitchComponent_1)],
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            styles: [".switch.primary input[type=checkbox]:checked~.check{background-color:#0366d6;border-color:#0366d6}.switch.primary input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.primary .check{border-color:#0366d6}.switch.primary .check::after{background-color:#0366d6;border-color:#0366d6}.switch.secondary input[type=checkbox]:checked~.check{background-color:#607d8b;border-color:#607d8b}.switch.secondary input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.secondary .check{border-color:#607d8b}.switch.secondary .check::after{background-color:#607d8b;border-color:#607d8b}.switch.success input[type=checkbox]:checked~.check{background-color:#60a917;border-color:#60a917}.switch.success input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.success .check{border-color:#60a917}.switch.success .check::after{background-color:#60a917;border-color:#60a917}.switch.alert input[type=checkbox]:checked~.check{background-color:#ce352c;border-color:#ce352c}.switch.alert input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.alert .check{border-color:#ce352c}.switch.alert .check::after{background-color:#ce352c;border-color:#ce352c}.switch.warning input[type=checkbox]:checked~.check{background-color:#ff9447;border-color:#ff9447}.switch.warning input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.warning .check{border-color:#ff9447}.switch.warning .check::after{background-color:#ff9447;border-color:#ff9447}.switch.yellow input[type=checkbox]:checked~.check{background-color:#ffe484;border-color:#ffe484}.switch.yellow input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.yellow .check{border-color:#ffe484}.switch.yellow .check::after{background-color:#ffe484;border-color:#ffe484}.switch.info input[type=checkbox]:checked~.check{background-color:#5ebdec;border-color:#5ebdec}.switch.info input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.info .check{border-color:#5ebdec}.switch.info .check::after{background-color:#5ebdec;border-color:#5ebdec}.switch.dark input[type=checkbox]:checked~.check{background-color:#505050;border-color:#505050}.switch.dark input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.dark .check{border-color:#505050}.switch.dark .check::after{background-color:#505050;border-color:#505050}.switch.light input[type=checkbox]:checked~.check{background-color:#f8f8f8;border-color:#f8f8f8}.switch.light input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.light .check{border-color:#f8f8f8}.switch.light .check::after{background-color:#f8f8f8;border-color:#f8f8f8}"]
        })
    ], SwitchComponent);
    return SwitchComponent;
}(ControlBase));
export { SwitchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBWXhEO0lBQXFDLG1DQUFvQjtJQUF6RDtRQUFBLHFFQTBFQztRQXZFb0IsY0FBUSxHQUFHLEtBQUssQ0FBQzs7SUF1RXRDLENBQUM7d0JBMUVZLGVBQWU7SUFlMUIsdUNBQWEsR0FBYjtRQUFBLGlCQTBCQztRQXpCQyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsUUFBUTtZQUNoQyxJQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRW5DLElBQUksS0FBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN0QztZQUVELEtBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FB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LENBQXFDLFdBQVcsR0EwRS9DO1NBMUVZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4uLy4uL2hlbHBlci9kZWZhdWx0LXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7Q29udHJvbEJhc2V9IGZyb20gJy4uL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHtQb3NpdGlvbkhvcml6b250YWxUeXBlfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZXMnO1xuaW1wb3J0IHtPYmplY3RIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QtaGVscGVyJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtNC1zd2l0Y2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3dpdGNoLmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW0RlZmF1bHRWYWx1ZUFjY2Vzc29yLmdldChTd2l0Y2hDb21wb25lbnQpLCBUeXBlQWxpYXMuZ2V0KFN3aXRjaENvbXBvbmVudCldLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTd2l0Y2hDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQmFzZTxib29sZWFuPiB7XG5cbiAgQElucHV0KCdtYXRlcmlhbCcpIG1hdGVyaWFsOiBib29sZWFuO1xuICBASW5wdXQoJ3JlYWRvbmx5JykgcmVhZG9ubHkgPSBmYWxzZTtcbiAgQElucHV0KCdjYXB0aW9uJykgY2FwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoJ2NhcHRpb24tcG9zaXRpb24nKSBjYXB0aW9uUG9zaXRpb246IFBvc2l0aW9uSG9yaXpvbnRhbFR5cGU7XG5cbiAgQElucHV0KCdjbHMtc3dpdGNoJykgY2xzU3dpdGNoOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNhcHRpb24nKSBjbHNDYXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNoZWNrJykgY2xzQ2hlY2s6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2xvbmVkRWxlbWVudDogYW55O1xuICBwcml2YXRlIHN3aXRjaDogYW55O1xuXG4gIGNyZWF0ZUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChjb21wbGV0ZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcblxuICAgICAgdGhpcy5zd2l0Y2ggPSB0aGlzLmNsb25lZEVsZW1lbnQuc3dpdGNoKCkuZGF0YSgnc3dpdGNoJyk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5vbmUoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG91Y2hDYWxsYmFjaygpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMuY2xvbmVkRWxlbWVudC5wcm9wKCdjaGVja2VkJykpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbXBsZXRlKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgdGhpcy5zd2l0Y2guZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgIHRoaXMuc3dpdGNoLmVuYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5ld1ZhbHVlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zd2l0Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsb25lZEVsZW1lbnQucHJvcCgnY2hlY2tlZCcsIHRoaXMuaW5uZXJWYWx1ZSk7XG4gIH1cblxuICBuZXdDbGFzc1ZhbHVlKG5ld0NsYXNzZXM6IHN0cmluZ1tdLCBvbGRDbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKTtcblxuICAgICAgb2xkQ2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICB0YXJnZXQucmVtb3ZlQ2xhc3MoY2xzKTtcbiAgICAgIH0pO1xuXG4gICAgICBuZXdDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRhcmdldC5hZGRDbGFzcyhjbHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=