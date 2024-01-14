import { __decorate, __metadata, __param } from "tslib";
import { Directive, ElementRef, Inject, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AttributeHelper } from '../../helper/attribute-helper';
import { asapScheduler } from 'rxjs';
var PopoverDirective = /** @class */ (function () {
    function PopoverDirective(element, renderer, document) {
        this.element = element;
        this.renderer = renderer;
        this.document = document;
        this.popoverPosition = 'top';
    }
    PopoverDirective.prototype.createElement = function () {
        var _this = this;
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-popover-text', this.popoverText);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-popover-position', this.popoverPosition);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-popover-trigger', this.popoverTrigger);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-popover-hide', this.popoverHide);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-cls-popover', this.clsPopover);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-close-button', this.closeBtn);
        asapScheduler.schedule(function () {
            if (!_this.popoverObj) {
                _this.popoverObj = $(_this.element.nativeElement).popover().data('popover');
            }
            else {
                _this.popoverObj.options.popoverText = _this.popoverText;
                _this.popoverObj.options.popoverPosition = _this.popoverPosition;
                _this.popoverObj.options.popoverTrigger = _this.popoverTrigger;
                _this.popoverObj.options.popoverHide = _this.popoverHide;
                _this.popoverObj.options.closeButton = _this.closeBtn;
                _this.popoverObj.options.clsPopover = _this.clsPopover;
            }
        });
    };
    PopoverDirective.prototype.ngOnInit = function () {
        this.createElement();
    };
    PopoverDirective.prototype.ngOnChanges = function (changes) {
        this.createElement();
    };
    PopoverDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    __decorate([
        Input('m4-popover'),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "popoverText", void 0);
    __decorate([
        Input('popover-position'),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "popoverPosition", void 0);
    __decorate([
        Input('popover-trigger'),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "popoverTrigger", void 0);
    __decorate([
        Input('popover-hide'),
        __metadata("design:type", Number)
    ], PopoverDirective.prototype, "popoverHide", void 0);
    __decorate([
        Input('popover-close-button'),
        __metadata("design:type", Boolean)
    ], PopoverDirective.prototype, "closeBtn", void 0);
    __decorate([
        Input('cls-popover'),
        __metadata("design:type", Number)
    ], PopoverDirective.prototype, "clsPopover", void 0);
    PopoverDirective = __decorate([
        Directive({
            selector: '[m4-popover]'
        }),
        __param(2, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [ElementRef, Renderer2, Object])
    ], PopoverDirective);
    return PopoverDirective;
}());
export { PopoverDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvcG9wb3Zlci9wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBUW5DO0lBVUUsMEJBQW9CLE9BQW1CLEVBQVUsUUFBbUIsRUFBNEIsUUFBUTtRQUFwRixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBUjdFLG9CQUFlLEdBQXFCLEtBQUssQ0FBQztJQVVyRSxDQUFDO0lBRU8sd0NBQWEsR0FBckI7UUFBQSxpQkFvQkM7UUFuQkMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pHLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6RyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdkcsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pHLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvRixlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUYsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDM0U7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZELEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDO2dCQUMvRCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQztnQkFDN0QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZELEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNwRCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQzthQUN0RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Z0JBaEM0QixVQUFVO2dCQUFvQixTQUFTO2dEQUFHLE1BQU0sU0FBQyxRQUFROztJQVRqRTtRQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDOzt5REFBcUI7SUFDZDtRQUExQixLQUFLLENBQUMsa0JBQWtCLENBQUM7OzZEQUEyQztJQUMzQztRQUF6QixLQUFLLENBQUMsaUJBQWlCLENBQUM7OzREQUFvQztJQUN0QztRQUF0QixLQUFLLENBQUMsY0FBYyxDQUFDOzt5REFBcUI7SUFDWjtRQUE5QixLQUFLLENBQUMsc0JBQXNCLENBQUM7O3NEQUFtQjtJQUMzQjtRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOzt3REFBb0I7SUFOOUIsZ0JBQWdCO1FBSDVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1NBQ3pCLENBQUM7UUFXdUUsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7eUNBQTFELFVBQVUsRUFBb0IsU0FBUztPQVZ6RCxnQkFBZ0IsQ0E0QzVCO0lBQUQsdUJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTVDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtBdHRyaWJ1dGVIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9hdHRyaWJ1dGUtaGVscGVyJztcbmltcG9ydCB7YXNhcFNjaGVkdWxlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1BvcG92ZXJUcmlnZ2VyVHlwZSwgUG9zaXRpb25CYXNlVHlwZX0gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGVzJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbTQtcG9wb3Zlcl0nXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnbTQtcG9wb3ZlcicpIHBvcG92ZXJUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgncG9wb3Zlci1wb3NpdGlvbicpIHBvcG92ZXJQb3NpdGlvbjogUG9zaXRpb25CYXNlVHlwZSA9ICd0b3AnO1xuICBASW5wdXQoJ3BvcG92ZXItdHJpZ2dlcicpIHBvcG92ZXJUcmlnZ2VyOiBQb3BvdmVyVHJpZ2dlclR5cGU7XG4gIEBJbnB1dCgncG9wb3Zlci1oaWRlJykgcG9wb3ZlckhpZGU6IG51bWJlcjtcbiAgQElucHV0KCdwb3BvdmVyLWNsb3NlLWJ1dHRvbicpIGNsb3NlQnRuOiBib29sZWFuO1xuICBASW5wdXQoJ2Nscy1wb3BvdmVyJykgY2xzUG9wb3ZlcjogbnVtYmVyO1xuXG4gIHBvcG92ZXJPYmo6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudCkge1xuXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgQXR0cmlidXRlSGVscGVyLnNldEF0dHJpYnV0ZSh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsICdkYXRhLXBvcG92ZXItdGV4dCcsIHRoaXMucG9wb3ZlclRleHQpO1xuICAgIEF0dHJpYnV0ZUhlbHBlci5zZXRBdHRyaWJ1dGUodGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCAnZGF0YS1wb3BvdmVyLXBvc2l0aW9uJywgdGhpcy5wb3BvdmVyUG9zaXRpb24pO1xuICAgIEF0dHJpYnV0ZUhlbHBlci5zZXRBdHRyaWJ1dGUodGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCAnZGF0YS1wb3BvdmVyLXRyaWdnZXInLCB0aGlzLnBvcG92ZXJUcmlnZ2VyKTtcbiAgICBBdHRyaWJ1dGVIZWxwZXIuc2V0QXR0cmlidXRlKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgJ2RhdGEtcG9wb3Zlci1oaWRlJywgdGhpcy5wb3BvdmVySGlkZSk7XG4gICAgQXR0cmlidXRlSGVscGVyLnNldEF0dHJpYnV0ZSh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsICdkYXRhLWNscy1wb3BvdmVyJywgdGhpcy5jbHNQb3BvdmVyKTtcbiAgICBBdHRyaWJ1dGVIZWxwZXIuc2V0QXR0cmlidXRlKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgJ2RhdGEtY2xvc2UtYnV0dG9uJywgdGhpcy5jbG9zZUJ0bik7XG5cbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5wb3BvdmVyT2JqKSB7XG4gICAgICAgIHRoaXMucG9wb3Zlck9iaiA9ICQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnBvcG92ZXIoKS5kYXRhKCdwb3BvdmVyJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBvcG92ZXJPYmoub3B0aW9ucy5wb3BvdmVyVGV4dCA9IHRoaXMucG9wb3ZlclRleHQ7XG4gICAgICAgIHRoaXMucG9wb3Zlck9iai5vcHRpb25zLnBvcG92ZXJQb3NpdGlvbiA9IHRoaXMucG9wb3ZlclBvc2l0aW9uO1xuICAgICAgICB0aGlzLnBvcG92ZXJPYmoub3B0aW9ucy5wb3BvdmVyVHJpZ2dlciA9IHRoaXMucG9wb3ZlclRyaWdnZXI7XG4gICAgICAgIHRoaXMucG9wb3Zlck9iai5vcHRpb25zLnBvcG92ZXJIaWRlID0gdGhpcy5wb3BvdmVySGlkZTtcbiAgICAgICAgdGhpcy5wb3BvdmVyT2JqLm9wdGlvbnMuY2xvc2VCdXR0b24gPSB0aGlzLmNsb3NlQnRuO1xuICAgICAgICB0aGlzLnBvcG92ZXJPYmoub3B0aW9ucy5jbHNQb3BvdmVyID0gdGhpcy5jbHNQb3BvdmVyO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxufVxuIl19