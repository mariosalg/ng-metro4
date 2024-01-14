import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ControlBase } from '../control-base';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
var KeypadComponent = /** @class */ (function (_super) {
    __extends(KeypadComponent, _super);
    function KeypadComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'text';
        return _this;
    }
    KeypadComponent_1 = KeypadComponent;
    KeypadComponent.prototype.createControl = function () {
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
            _this.keypad = _this.clonedElement.keypad().data('keypad');
            _this.clonedElement.one('blur', function () {
                _this.touchCallback();
            });
            _this.clonedElement.on('change', function () {
                asapScheduler.schedule(function () {
                    var newValue = _this.clonedElement.val();
                    if (_this.type === 'number') {
                        newValue = +newValue;
                    }
                    _this.changeValue(newValue);
                });
            });
            complete();
        });
    };
    KeypadComponent.prototype.disable = function (disabled) {
        if (disabled) {
            this.keypad.disable();
        }
        else {
            this.keypad.enable();
        }
    };
    KeypadComponent.prototype.newValue = function () {
        if (!this.keypad) {
            return;
        }
        this.keypad.val(this.innerValue ? this.innerValue.toString() : '');
    };
    KeypadComponent.prototype.newClassValue = function (newClasses, oldClasses) {
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
    var KeypadComponent_1;
    __decorate([
        Input('type'),
        __metadata("design:type", String)
    ], KeypadComponent.prototype, "type", void 0);
    __decorate([
        Input('key-size'),
        __metadata("design:type", Number)
    ], KeypadComponent.prototype, "keySize", void 0);
    __decorate([
        Input('keys'),
        __metadata("design:type", Array)
    ], KeypadComponent.prototype, "keys", void 0);
    __decorate([
        Input('key-length'),
        __metadata("design:type", Number)
    ], KeypadComponent.prototype, "keyLength", void 0);
    __decorate([
        Input('shuffle'),
        __metadata("design:type", Boolean)
    ], KeypadComponent.prototype, "shuffle", void 0);
    __decorate([
        Input('shuffle-count'),
        __metadata("design:type", Number)
    ], KeypadComponent.prototype, "shuffleCount", void 0);
    __decorate([
        Input('position'),
        __metadata("design:type", String)
    ], KeypadComponent.prototype, "position", void 0);
    __decorate([
        Input('dynamic-position'),
        __metadata("design:type", Boolean)
    ], KeypadComponent.prototype, "dynamicPosition", void 0);
    __decorate([
        Input('service-buttons'),
        __metadata("design:type", Boolean)
    ], KeypadComponent.prototype, "serviceButtons", void 0);
    __decorate([
        Input('show-value'),
        __metadata("design:type", Boolean)
    ], KeypadComponent.prototype, "showValue", void 0);
    __decorate([
        Input('open'),
        __metadata("design:type", Boolean)
    ], KeypadComponent.prototype, "open", void 0);
    __decorate([
        Input('size-as-keys'),
        __metadata("design:type", Boolean)
    ], KeypadComponent.prototype, "sizeAsKeys", void 0);
    __decorate([
        Input('cls-keypad'),
        __metadata("design:type", String)
    ], KeypadComponent.prototype, "clsKeypad", void 0);
    __decorate([
        Input('cls-input'),
        __metadata("design:type", String)
    ], KeypadComponent.prototype, "clsInput", void 0);
    __decorate([
        Input('cls-keys'),
        __metadata("design:type", String)
    ], KeypadComponent.prototype, "clsKeys", void 0);
    __decorate([
        Input('cls-key'),
        __metadata("design:type", String)
    ], KeypadComponent.prototype, "clsKey", void 0);
    __decorate([
        Input('cls-service-key'),
        __metadata("design:type", String)
    ], KeypadComponent.prototype, "clsServiceKey", void 0);
    __decorate([
        Input('cls-backspace'),
        __metadata("design:type", String)
    ], KeypadComponent.prototype, "clsBackspace", void 0);
    __decorate([
        Input('cls-clear'),
        __metadata("design:type", String)
    ], KeypadComponent.prototype, "clsClear", void 0);
    __decorate([
        ViewChild('input', { static: true }),
        __metadata("design:type", ElementRef)
    ], KeypadComponent.prototype, "input", void 0);
    KeypadComponent = KeypadComponent_1 = __decorate([
        Component({
            selector: 'm4-keypad',
            template: "<input [type]=\"type\" #input\n\n\n       [attr.data-key-size]=\"keySize\"\n       [attr.data-keys]=\"keys?.join(',')\"\n       [attr.data-key-length]=\"keyLength\"\n       [attr.data-shuffle]=\"shuffle\"\n       [attr.data-shuffle-count]=\"shuffleCount\"\n       [attr.data-position]=\"position\"\n       [attr.data-dynamic-position]=\"dynamicPosition\"\n       [attr.data-service-buttons]=\"serviceButtons\"\n       [attr.data-show-value]=\"showValue\"\n       [attr.data-open]=\"open\"\n       [attr.data-size-as-keys]=\"sizeAsKeys\"\n\n       [attr.data-cls-keypad]=\"clsKeypad\"\n       [attr.data-cls-input]=\"clsInput\"\n       [attr.data-cls-keys]=\"clsKeys\"\n       [attr.data-cls-key]=\"clsKey\"\n       [attr.data-cls-service-key]=\"clsServiceKey\"\n       [attr.data-cls-backspace]=\"clsBackspace\"\n       [attr.data-cls-clear]=\"clsClear\">\n",
            providers: [DefaultValueAccessor.get(KeypadComponent_1), TypeAlias.get(KeypadComponent_1)],
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [""]
        })
    ], KeypadComponent);
    return KeypadComponent;
}(ControlBase));
export { KeypadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cGFkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2tleXBhZC9rZXlwYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU1QyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFXeEQ7SUFBcUMsbUNBQTBCO0lBQS9EO1FBQUEscUVBOEZDO1FBNUZnQixVQUFJLEdBQWMsTUFBTSxDQUFDOztJQTRGMUMsQ0FBQzt3QkE5RlksZUFBZTtJQTJCMUIsdUNBQWEsR0FBYjtRQUFBLGlCQW1DQztRQWxDQyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsUUFBUTtZQUNoQyxJQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRW5DLElBQUksS0FBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN0QztZQUVELEtBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFD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c0RBQW1CO0lBQ25CO1FBQW5CLEtBQUssQ0FBQyxXQUFXLENBQUM7O3FEQUFrQjtJQUNsQjtRQUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOztvREFBaUI7SUFDakI7UUFBakIsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7bURBQWdCO0lBQ1A7UUFBekIsS0FBSyxDQUFDLGlCQUFpQixDQUFDOzswREFBdUI7SUFDeEI7UUFBdkIsS0FBSyxDQUFDLGVBQWUsQ0FBQzs7eURBQXNCO0lBQ3pCO1FBQW5CLEtBQUssQ0FBQyxXQUFXLENBQUM7O3FEQUFrQjtJQUVDO1FBQXJDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQWdCLFVBQVU7a0RBQUM7SUF2QnJELGVBQWU7UUFQM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIscTJCQUFzQztZQUV0QyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsaUJBQWUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWUsQ0FBQyxDQUFDO1lBQ3RGLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDO09BQ1csZUFBZSxDQThGM0I7SUFBRCxzQkFBQztDQUFBLEFBOUZELENBQXFDLFdBQVcsR0E4Ri9DO1NBOUZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vaGVscGVyL2RlZmF1bHQtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHtDb250cm9sQmFzZX0gZnJvbSAnLi4vY29udHJvbC1iYXNlJztcbmltcG9ydCB7SW5wdXRUeXBlLCBQb3NpdGlvblR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQta2V5cGFkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2tleXBhZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2tleXBhZC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW0RlZmF1bHRWYWx1ZUFjY2Vzc29yLmdldChLZXlwYWRDb21wb25lbnQpLCBUeXBlQWxpYXMuZ2V0KEtleXBhZENvbXBvbmVudCldLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBLZXlwYWRDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQmFzZTxzdHJpbmd8bnVtYmVyPiB7XG5cbiAgQElucHV0KCd0eXBlJykgdHlwZTogSW5wdXRUeXBlID0gJ3RleHQnO1xuICBASW5wdXQoJ2tleS1zaXplJykga2V5U2l6ZTogbnVtYmVyO1xuICBASW5wdXQoJ2tleXMnKSBrZXlzOiBzdHJpbmdbXTtcbiAgQElucHV0KCdrZXktbGVuZ3RoJykga2V5TGVuZ3RoOiBudW1iZXI7XG4gIEBJbnB1dCgnc2h1ZmZsZScpIHNodWZmbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgnc2h1ZmZsZS1jb3VudCcpIHNodWZmbGVDb3VudDogbnVtYmVyO1xuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IFBvc2l0aW9uVHlwZTtcbiAgQElucHV0KCdkeW5hbWljLXBvc2l0aW9uJykgZHluYW1pY1Bvc2l0aW9uOiBib29sZWFuO1xuICBASW5wdXQoJ3NlcnZpY2UtYnV0dG9ucycpIHNlcnZpY2VCdXR0b25zOiBib29sZWFuO1xuICBASW5wdXQoJ3Nob3ctdmFsdWUnKSBzaG93VmFsdWU6IGJvb2xlYW47XG4gIEBJbnB1dCgnb3BlbicpIG9wZW46IGJvb2xlYW47XG4gIEBJbnB1dCgnc2l6ZS1hcy1rZXlzJykgc2l6ZUFzS2V5czogYm9vbGVhbjtcblxuICBASW5wdXQoJ2Nscy1rZXlwYWQnKSBjbHNLZXlwYWQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtaW5wdXQnKSBjbHNJbnB1dDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1rZXlzJykgY2xzS2V5czogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1rZXknKSBjbHNLZXk6IHN0cmluZztcbiAgQElucHV0KCdjbHMtc2VydmljZS1rZXknKSBjbHNTZXJ2aWNlS2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWJhY2tzcGFjZScpIGNsc0JhY2tzcGFjZTogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jbGVhcicpIGNsc0NsZWFyOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGtleXBhZDogYW55O1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG5cbiAgICAgIHRoaXMua2V5cGFkID0gdGhpcy5jbG9uZWRFbGVtZW50LmtleXBhZCgpLmRhdGEoJ2tleXBhZCcpO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQub25lKCdibHVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvdWNoQ2FsbGJhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gdGhpcy5jbG9uZWRFbGVtZW50LnZhbCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gK25ld1ZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuXG5cbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMua2V5cGFkLmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rZXlwYWQuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgbmV3VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmtleXBhZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMua2V5cGFkLnZhbCh0aGlzLmlubmVyVmFsdWUgPyB0aGlzLmlubmVyVmFsdWUudG9TdHJpbmcoKSA6ICcnKTtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpO1xuXG4gICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhjbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LmFkZENsYXNzKGNscyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19