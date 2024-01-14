import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { AttributeHelper } from '../../helper/attribute-helper';
import { asapScheduler } from 'rxjs';
var HintDirective = /** @class */ (function () {
    function HintDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.hintPosition = 'top';
        this.hintOffset = 6;
    }
    HintDirective.prototype.createElement = function () {
        var _this = this;
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-hint-text', this.hintText);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-hint-position', this.hintPosition);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-hint-hide', this.hintHide);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-cls-hint', this.clsHint);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-hint-offset', this.hintOffset);
        asapScheduler.schedule(function () {
            if (!_this.hintObj) {
                _this.hintObj = $(_this.element.nativeElement).hint().data('hint');
            }
            else {
                _this.hintObj.options.hintText = _this.hintText;
                _this.hintObj.options.hintPosition = _this.hintPosition;
                _this.hintObj.options.hintHide = _this.hintHide;
                _this.hintObj.options.clsHint = _this.clsHint;
                _this.hintObj.options.hintOffset = _this.hintOffset;
            }
        });
    };
    HintDirective.prototype.ngOnInit = function () {
        this.createElement();
    };
    HintDirective.prototype.ngOnChanges = function (changes) {
        this.createElement();
    };
    HintDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input('m4-hint'),
        __metadata("design:type", String)
    ], HintDirective.prototype, "hintText", void 0);
    __decorate([
        Input('hint-position'),
        __metadata("design:type", String)
    ], HintDirective.prototype, "hintPosition", void 0);
    __decorate([
        Input('hint-hide'),
        __metadata("design:type", Number)
    ], HintDirective.prototype, "hintHide", void 0);
    __decorate([
        Input('cls-hint'),
        __metadata("design:type", String)
    ], HintDirective.prototype, "clsHint", void 0);
    __decorate([
        Input('hint-offset'),
        __metadata("design:type", Object)
    ], HintDirective.prototype, "hintOffset", void 0);
    HintDirective = __decorate([
        Directive({
            selector: '[m4-hint]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], HintDirective);
    return HintDirective;
}());
export { HintDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvaW5mb3JtYXRpb24vaGludC9oaW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQVFuQztJQVNFLHVCQUFvQixPQUFtQixFQUFVLFFBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBUDVDLGlCQUFZLEdBQXFCLEtBQUssQ0FBQztRQUd6QyxlQUFVLEdBQUcsQ0FBQyxDQUFDO0lBSW1DLENBQUM7SUFFakUscUNBQWEsR0FBckI7UUFBQSxpQkFrQkM7UUFqQkMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNGLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0YsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RixlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFL0YsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEU7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQzlDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN0RCxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQztnQkFDOUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQzVDLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDO2FBQ25EO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOztnQkE1QjRCLFVBQVU7Z0JBQW9CLFNBQVM7O0lBUmxEO1FBQWpCLEtBQUssQ0FBQyxTQUFTLENBQUM7O21EQUFrQjtJQUNYO1FBQXZCLEtBQUssQ0FBQyxlQUFlLENBQUM7O3VEQUF3QztJQUMzQztRQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOzttREFBa0I7SUFDbEI7UUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7a0RBQWlCO0lBQ2I7UUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7cURBQWdCO0lBTDFCLGFBQWE7UUFIekIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7U0FDdEIsQ0FBQzt5Q0FVNkIsVUFBVSxFQUFvQixTQUFTO09BVHpELGFBQWEsQ0FzQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXRDWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXR0cmlidXRlSGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvYXR0cmlidXRlLWhlbHBlcic7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtQb3NpdGlvbkJhc2VUeXBlfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZXMnO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttNC1oaW50XSdcbn0pXG5leHBvcnQgY2xhc3MgSGludERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdtNC1oaW50JykgaGludFRleHQ6IHN0cmluZztcbiAgQElucHV0KCdoaW50LXBvc2l0aW9uJykgaGludFBvc2l0aW9uOiBQb3NpdGlvbkJhc2VUeXBlID0gJ3RvcCc7XG4gIEBJbnB1dCgnaGludC1oaWRlJykgaGludEhpZGU6IG51bWJlcjtcbiAgQElucHV0KCdjbHMtaGludCcpIGNsc0hpbnQ6IHN0cmluZztcbiAgQElucHV0KCdoaW50LW9mZnNldCcpIGhpbnRPZmZzZXQgPSA2O1xuXG4gIGhpbnRPYmo6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KCkge1xuICAgIEF0dHJpYnV0ZUhlbHBlci5zZXRBdHRyaWJ1dGUodGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCAnZGF0YS1oaW50LXRleHQnLCB0aGlzLmhpbnRUZXh0KTtcbiAgICBBdHRyaWJ1dGVIZWxwZXIuc2V0QXR0cmlidXRlKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgJ2RhdGEtaGludC1wb3NpdGlvbicsIHRoaXMuaGludFBvc2l0aW9uKTtcbiAgICBBdHRyaWJ1dGVIZWxwZXIuc2V0QXR0cmlidXRlKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgJ2RhdGEtaGludC1oaWRlJywgdGhpcy5oaW50SGlkZSk7XG4gICAgQXR0cmlidXRlSGVscGVyLnNldEF0dHJpYnV0ZSh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsICdkYXRhLWNscy1oaW50JywgdGhpcy5jbHNIaW50KTtcbiAgICBBdHRyaWJ1dGVIZWxwZXIuc2V0QXR0cmlidXRlKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgJ2RhdGEtaGludC1vZmZzZXQnLCB0aGlzLmhpbnRPZmZzZXQpO1xuXG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaGludE9iaikge1xuICAgICAgICB0aGlzLmhpbnRPYmogPSAkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5oaW50KCkuZGF0YSgnaGludCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaW50T2JqLm9wdGlvbnMuaGludFRleHQgPSB0aGlzLmhpbnRUZXh0O1xuICAgICAgICB0aGlzLmhpbnRPYmoub3B0aW9ucy5oaW50UG9zaXRpb24gPSB0aGlzLmhpbnRQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5oaW50T2JqLm9wdGlvbnMuaGludEhpZGUgPSB0aGlzLmhpbnRIaWRlO1xuICAgICAgICB0aGlzLmhpbnRPYmoub3B0aW9ucy5jbHNIaW50ID0gdGhpcy5jbHNIaW50O1xuICAgICAgICB0aGlzLmhpbnRPYmoub3B0aW9ucy5oaW50T2Zmc2V0ID0gdGhpcy5oaW50T2Zmc2V0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cbn1cbiJdfQ==