import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { ObjectHelper } from '../../helper/object-helper';
var CheckboxComponent = /** @class */ (function (_super) {
    __extends(CheckboxComponent, _super);
    function CheckboxComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.readonly = false;
        return _this;
    }
    CheckboxComponent_1 = CheckboxComponent;
    CheckboxComponent.prototype.createControl = function () {
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
            _this.checkbox = _this.clonedElement.checkbox().data('checkbox');
            _this.clonedElement.one('blur', function () {
                _this.touchCallback();
            });
            _this.clonedElement.on('change', function () {
                _this.changeValue(_this.clonedElement.prop('checked'));
            });
            complete();
        });
    };
    CheckboxComponent.prototype.disable = function (disabled) {
        if (disabled) {
            this.clonedElement.attr('disabled', 'disabled');
            this.checkbox.disable();
        }
        else {
            this.clonedElement.removeAttr('disabled');
            this.checkbox.enable();
        }
    };
    CheckboxComponent.prototype.newValue = function () {
        if (!this.checkbox) {
            return;
        }
        this.clonedElement.prop('checked', this.innerValue);
    };
    CheckboxComponent.prototype.newClassValue = function (newClasses, oldClasses) {
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
    var CheckboxComponent_1;
    __decorate([
        Input('value'),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "value", void 0);
    __decorate([
        Input('readonly'),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "readonly", void 0);
    __decorate([
        Input('style'),
        __metadata("design:type", Number)
    ], CheckboxComponent.prototype, "style", void 0);
    __decorate([
        Input('caption'),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "caption", void 0);
    __decorate([
        Input('caption-position'),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "captionPosition", void 0);
    __decorate([
        Input('indeterminate'),
        __metadata("design:type", Boolean)
    ], CheckboxComponent.prototype, "indeterminate", void 0);
    __decorate([
        Input('cls-checkbox'),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "clsCheckbox", void 0);
    __decorate([
        Input('cls-caption'),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "clsCaption", void 0);
    __decorate([
        Input('cls-check'),
        __metadata("design:type", String)
    ], CheckboxComponent.prototype, "clsCheck", void 0);
    __decorate([
        ViewChild('input', { static: true }),
        __metadata("design:type", ElementRef)
    ], CheckboxComponent.prototype, "input", void 0);
    CheckboxComponent = CheckboxComponent_1 = __decorate([
        Component({
            selector: 'm4-checkbox',
            template: "<input type=\"checkbox\" #input\n\n\n       [readonly]=\"readonly\"\n\n       [attr.data-style]=\"style\"\n       [attr.data-caption]=\"caption\"\n       [attr.data-caption-position]=\"captionPosition\"\n       [attr.data-indeterminate]=\"indeterminate\"\n       [attr.data-cls-radio]=\"clsCheckbox\"\n       [attr.data-cls-caption]=\"clsCaption\"\n       [attr.data-cls-check]=\"clsCheck\">\n",
            providers: [DefaultValueAccessor.get(CheckboxComponent_1), TypeAlias.get(CheckboxComponent_1)],
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            styles: [".checkbox.primary input[data-indeterminate=true]~.check,.checkbox.primary input[type=checkbox]:checked~.check{background-color:#0366d6;border-color:#0366d6}.checkbox.primary .check{border-color:#0366d6}.checkbox.secondary input[data-indeterminate=true]~.check,.checkbox.secondary input[type=checkbox]:checked~.check{background-color:#607d8b;border-color:#607d8b}.checkbox.secondary .check{border-color:#607d8b}.checkbox.success input[data-indeterminate=true]~.check,.checkbox.success input[type=checkbox]:checked~.check{background-color:#60a917;border-color:#60a917}.checkbox.success .check{border-color:#60a917}.checkbox.alert input[data-indeterminate=true]~.check,.checkbox.alert input[type=checkbox]:checked~.check{background-color:#ce352c;border-color:#ce352c}.checkbox.alert .check{border-color:#ce352c}.checkbox.warning input[data-indeterminate=true]~.check,.checkbox.warning input[type=checkbox]:checked~.check{background-color:#ff9447;border-color:#ff9447}.checkbox.warning .check{border-color:#ff9447}.checkbox.yellow input[data-indeterminate=true]~.check,.checkbox.yellow input[type=checkbox]:checked~.check{background-color:#ffe484;border-color:#ffe484}.checkbox.yellow .check{border-color:#ffe484}.checkbox.info input[data-indeterminate=true]~.check,.checkbox.info input[type=checkbox]:checked~.check{background-color:#5ebdec;border-color:#5ebdec}.checkbox.info .check{border-color:#5ebdec}.checkbox.dark input[data-indeterminate=true]~.check,.checkbox.dark input[type=checkbox]:checked~.check{background-color:#505050;border-color:#505050}.checkbox.dark .check{border-color:#505050}.checkbox.light input[data-indeterminate=true]~.check,.checkbox.light input[type=checkbox]:checked~.check{background-color:#f8f8f8;border-color:#f8f8f8}.checkbox.light .check{border-color:#f8f8f8}"]
        })
    ], CheckboxComponent);
    return CheckboxComponent;
}(ControlBase));
export { CheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBWXhEO0lBQXVDLHFDQUFvQjtJQUEzRDtRQUFBLHFFQThFQztRQTFFb0IsY0FBUSxHQUFHLEtBQUssQ0FBQzs7SUEwRXRDLENBQUM7MEJBOUVZLGlCQUFpQjtJQWtCNUIseUNBQWEsR0FBYjtRQUFBLGlCQTBCQztRQXpCQyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsUUFBUTtZQUNoQyxJQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRW5DLElBQUksS0FBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN0QztZQUVELEtBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RDLGVBQWUsQ0FBQyxNQUFN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QU07WUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7T0FDVyxpQkFBaUIsQ0E4RTdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlFRCxDQUF1QyxXQUFXLEdBOEVqRDtTQTlFWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbEJhc2V9IGZyb20gJy4uL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHtQb3NpdGlvbkhvcml6b250YWxUeXBlfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZXMnO1xuaW1wb3J0IHtPYmplY3RIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QtaGVscGVyJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtNC1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LmNvbXBvbmVudC5sZXNzJ10sXG4gIHByb3ZpZGVyczogW0RlZmF1bHRWYWx1ZUFjY2Vzc29yLmdldChDaGVja2JveENvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoQ2hlY2tib3hDb21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQmFzZTxib29sZWFuPiB7XG5cbiAgQElucHV0KCd2YWx1ZScpIHZhbHVlOiBhbnk7XG5cbiAgQElucHV0KCdyZWFkb25seScpIHJlYWRvbmx5ID0gZmFsc2U7XG4gIEBJbnB1dCgnc3R5bGUnKSBzdHlsZTogMXwyO1xuICBASW5wdXQoJ2NhcHRpb24nKSBjYXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2FwdGlvbi1wb3NpdGlvbicpIGNhcHRpb25Qb3NpdGlvbjogUG9zaXRpb25Ib3Jpem9udGFsVHlwZTtcbiAgQElucHV0KCdpbmRldGVybWluYXRlJykgaW5kZXRlcm1pbmF0ZTogYm9vbGVhbjtcblxuICBASW5wdXQoJ2Nscy1jaGVja2JveCcpIGNsc0NoZWNrYm94OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNhcHRpb24nKSBjbHNDYXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNoZWNrJykgY2xzQ2hlY2s6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2xvbmVkRWxlbWVudDogYW55O1xuICBwcml2YXRlIGNoZWNrYm94OiBhbnk7XG5cbiAgY3JlYXRlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGNvbXBsZXRlKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSAkKHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCk7XG4gICAgICBPYmplY3RIZWxwZXIuaGlkZShvcmlnaW5hbEVsZW1lbnQpO1xuXG4gICAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50LmNsb25lKCk7XG4gICAgICBPYmplY3RIZWxwZXIuc2hvdyh0aGlzLmNsb25lZEVsZW1lbnQpO1xuICAgICAgb3JpZ2luYWxFbGVtZW50LnBhcmVudCgpLmFwcGVuZCh0aGlzLmNsb25lZEVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmNoZWNrYm94ID0gdGhpcy5jbG9uZWRFbGVtZW50LmNoZWNrYm94KCkuZGF0YSgnY2hlY2tib3gnKTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50Lm9uZSgnYmx1cicsICgpID0+IHtcbiAgICAgICAgdGhpcy50b3VjaENhbGxiYWNrKCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodGhpcy5jbG9uZWRFbGVtZW50LnByb3AoJ2NoZWNrZWQnKSk7XG4gICAgICB9KTtcblxuICAgICAgY29tcGxldGUoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB0aGlzLmNoZWNrYm94LmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICB0aGlzLmNoZWNrYm94LmVuYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5ld1ZhbHVlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jaGVja2JveCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wcm9wKCdjaGVja2VkJywgdGhpcy5pbm5lclZhbHVlKTtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpO1xuXG4gICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhjbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LmFkZENsYXNzKGNscyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19