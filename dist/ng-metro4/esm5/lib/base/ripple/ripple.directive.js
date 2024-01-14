import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { AttributeHelper } from '../../helper/attribute-helper';
import { asapScheduler } from 'rxjs';
var RippleDirective = /** @class */ (function () {
    function RippleDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    RippleDirective.prototype.createElement = function () {
        var _this = this;
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-ripple-target', this.rippleTarget);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-ripple-color', this.rippleColor);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-ripple-alpha', this.rippleAlpha);
        asapScheduler.schedule(function () {
            if (!_this.rippleObj) {
                _this.rippleObj = $(_this.element.nativeElement).ripple().data('ripple');
            }
            else {
                _this.rippleObj.options.rippleColor = _this.rippleColor;
                _this.rippleObj.options.rippleTarget = _this.rippleTarget;
                _this.rippleObj.options.rippleAlpha = _this.rippleAlpha;
            }
        });
    };
    RippleDirective.prototype.ngOnInit = function () {
        this.createElement();
    };
    RippleDirective.prototype.ngOnChanges = function (changes) {
        this.createElement();
    };
    RippleDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input('ripple-target'),
        __metadata("design:type", String)
    ], RippleDirective.prototype, "rippleTarget", void 0);
    __decorate([
        Input('ripple-color'),
        __metadata("design:type", String)
    ], RippleDirective.prototype, "rippleColor", void 0);
    __decorate([
        Input('ripple-alpha'),
        __metadata("design:type", Number)
    ], RippleDirective.prototype, "rippleAlpha", void 0);
    RippleDirective = __decorate([
        Directive({
            selector: '[m4-ripple]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], RippleDirective);
    return RippleDirective;
}());
export { RippleDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL3JpcHBsZS9yaXBwbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBT25DO0lBT0UseUJBQW9CLE9BQW1CLEVBQVUsUUFBbUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFBSSxDQUFDO0lBRWpFLHVDQUFhLEdBQXJCO1FBQUEsaUJBY0M7UUFiQyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkcsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pHLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVqRyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4RTtpQkFBTTtnQkFDTCxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQztnQkFDdEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3hELEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3ZEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOztnQkF4QjRCLFVBQVU7Z0JBQW9CLFNBQVM7O0lBTjVDO1FBQXZCLEtBQUssQ0FBQyxlQUFlLENBQUM7O3lEQUFzQjtJQUN0QjtRQUF0QixLQUFLLENBQUMsY0FBYyxDQUFDOzt3REFBcUI7SUFDcEI7UUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQzs7d0RBQXFCO0lBSGhDLGVBQWU7UUFIM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7U0FDeEIsQ0FBQzt5Q0FRNkIsVUFBVSxFQUFvQixTQUFTO09BUHpELGVBQWUsQ0FnQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQWhDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXR0cmlidXRlSGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvYXR0cmlidXRlLWhlbHBlcic7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttNC1yaXBwbGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBSaXBwbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgncmlwcGxlLXRhcmdldCcpIHJpcHBsZVRhcmdldDogc3RyaW5nO1xuICBASW5wdXQoJ3JpcHBsZS1jb2xvcicpIHJpcHBsZUNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgncmlwcGxlLWFscGhhJykgcmlwcGxlQWxwaGE6IG51bWJlcjtcblxuICByaXBwbGVPYmo6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KCkge1xuICAgIEF0dHJpYnV0ZUhlbHBlci5zZXRBdHRyaWJ1dGUodGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCAnZGF0YS1yaXBwbGUtdGFyZ2V0JywgdGhpcy5yaXBwbGVUYXJnZXQpO1xuICAgIEF0dHJpYnV0ZUhlbHBlci5zZXRBdHRyaWJ1dGUodGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCAnZGF0YS1yaXBwbGUtY29sb3InLCB0aGlzLnJpcHBsZUNvbG9yKTtcbiAgICBBdHRyaWJ1dGVIZWxwZXIuc2V0QXR0cmlidXRlKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgJ2RhdGEtcmlwcGxlLWFscGhhJywgdGhpcy5yaXBwbGVBbHBoYSk7XG5cbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5yaXBwbGVPYmopIHtcbiAgICAgICAgdGhpcy5yaXBwbGVPYmogPSAkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5yaXBwbGUoKS5kYXRhKCdyaXBwbGUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmlwcGxlT2JqLm9wdGlvbnMucmlwcGxlQ29sb3IgPSB0aGlzLnJpcHBsZUNvbG9yO1xuICAgICAgICB0aGlzLnJpcHBsZU9iai5vcHRpb25zLnJpcHBsZVRhcmdldCA9IHRoaXMucmlwcGxlVGFyZ2V0O1xuICAgICAgICB0aGlzLnJpcHBsZU9iai5vcHRpb25zLnJpcHBsZUFscGhhID0gdGhpcy5yaXBwbGVBbHBoYTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG59XG4iXX0=