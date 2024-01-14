import { __decorate, __metadata, __param } from "tslib";
import { Directive, ElementRef, Inject, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AttributeHelper } from '../../helper/attribute-helper';
import { asapScheduler } from 'rxjs';
let PopoverDirective = class PopoverDirective {
    constructor(element, renderer, document) {
        this.element = element;
        this.renderer = renderer;
        this.document = document;
        this.popoverPosition = 'top';
    }
    createElement() {
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-popover-text', this.popoverText);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-popover-position', this.popoverPosition);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-popover-trigger', this.popoverTrigger);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-popover-hide', this.popoverHide);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-cls-popover', this.clsPopover);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-close-button', this.closeBtn);
        asapScheduler.schedule(() => {
            if (!this.popoverObj) {
                this.popoverObj = $(this.element.nativeElement).popover().data('popover');
            }
            else {
                this.popoverObj.options.popoverText = this.popoverText;
                this.popoverObj.options.popoverPosition = this.popoverPosition;
                this.popoverObj.options.popoverTrigger = this.popoverTrigger;
                this.popoverObj.options.popoverHide = this.popoverHide;
                this.popoverObj.options.closeButton = this.closeBtn;
                this.popoverObj.options.clsPopover = this.clsPopover;
            }
        });
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
};
PopoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
export { PopoverDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvcG9wb3Zlci9wb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEgsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBUW5DLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBVTNCLFlBQW9CLE9BQW1CLEVBQVUsUUFBbUIsRUFBNEIsUUFBUTtRQUFwRixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBUjdFLG9CQUFlLEdBQXFCLEtBQUssQ0FBQztJQVVyRSxDQUFDO0lBRU8sYUFBYTtRQUNuQixlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakcsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pHLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2RyxlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakcsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9GLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU5RixhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDM0U7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDN0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN0RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUVGLENBQUE7O1lBbEM4QixVQUFVO1lBQW9CLFNBQVM7NENBQUcsTUFBTSxTQUFDLFFBQVE7O0FBVGpFO0lBQXBCLEtBQUssQ0FBQyxZQUFZLENBQUM7O3FEQUFxQjtBQUNkO0lBQTFCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzs7eURBQTJDO0FBQzNDO0lBQXpCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7d0RBQW9DO0FBQ3RDO0lBQXRCLEtBQUssQ0FBQyxjQUFjLENBQUM7O3FEQUFxQjtBQUNaO0lBQTlCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQzs7a0RBQW1CO0FBQzNCO0lBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7O29EQUFvQjtBQU45QixnQkFBZ0I7SUFINUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7S0FDekIsQ0FBQztJQVd1RSxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtxQ0FBMUQsVUFBVSxFQUFvQixTQUFTO0dBVnpELGdCQUFnQixDQTRDNUI7U0E1Q1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7QXR0cmlidXRlSGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvYXR0cmlidXRlLWhlbHBlcic7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtQb3BvdmVyVHJpZ2dlclR5cGUsIFBvc2l0aW9uQmFzZVR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW200LXBvcG92ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoJ200LXBvcG92ZXInKSBwb3BvdmVyVGV4dDogc3RyaW5nO1xuICBASW5wdXQoJ3BvcG92ZXItcG9zaXRpb24nKSBwb3BvdmVyUG9zaXRpb246IFBvc2l0aW9uQmFzZVR5cGUgPSAndG9wJztcbiAgQElucHV0KCdwb3BvdmVyLXRyaWdnZXInKSBwb3BvdmVyVHJpZ2dlcjogUG9wb3ZlclRyaWdnZXJUeXBlO1xuICBASW5wdXQoJ3BvcG92ZXItaGlkZScpIHBvcG92ZXJIaWRlOiBudW1iZXI7XG4gIEBJbnB1dCgncG9wb3Zlci1jbG9zZS1idXR0b24nKSBjbG9zZUJ0bjogYm9vbGVhbjtcbiAgQElucHV0KCdjbHMtcG9wb3ZlcicpIGNsc1BvcG92ZXI6IG51bWJlcjtcblxuICBwb3BvdmVyT2JqOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQpIHtcblxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KCkge1xuICAgIEF0dHJpYnV0ZUhlbHBlci5zZXRBdHRyaWJ1dGUodGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCAnZGF0YS1wb3BvdmVyLXRleHQnLCB0aGlzLnBvcG92ZXJUZXh0KTtcbiAgICBBdHRyaWJ1dGVIZWxwZXIuc2V0QXR0cmlidXRlKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgJ2RhdGEtcG9wb3Zlci1wb3NpdGlvbicsIHRoaXMucG9wb3ZlclBvc2l0aW9uKTtcbiAgICBBdHRyaWJ1dGVIZWxwZXIuc2V0QXR0cmlidXRlKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgJ2RhdGEtcG9wb3Zlci10cmlnZ2VyJywgdGhpcy5wb3BvdmVyVHJpZ2dlcik7XG4gICAgQXR0cmlidXRlSGVscGVyLnNldEF0dHJpYnV0ZSh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsICdkYXRhLXBvcG92ZXItaGlkZScsIHRoaXMucG9wb3ZlckhpZGUpO1xuICAgIEF0dHJpYnV0ZUhlbHBlci5zZXRBdHRyaWJ1dGUodGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCAnZGF0YS1jbHMtcG9wb3ZlcicsIHRoaXMuY2xzUG9wb3Zlcik7XG4gICAgQXR0cmlidXRlSGVscGVyLnNldEF0dHJpYnV0ZSh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsICdkYXRhLWNsb3NlLWJ1dHRvbicsIHRoaXMuY2xvc2VCdG4pO1xuXG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucG9wb3Zlck9iaikge1xuICAgICAgICB0aGlzLnBvcG92ZXJPYmogPSAkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5wb3BvdmVyKCkuZGF0YSgncG9wb3ZlcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wb3BvdmVyT2JqLm9wdGlvbnMucG9wb3ZlclRleHQgPSB0aGlzLnBvcG92ZXJUZXh0O1xuICAgICAgICB0aGlzLnBvcG92ZXJPYmoub3B0aW9ucy5wb3BvdmVyUG9zaXRpb24gPSB0aGlzLnBvcG92ZXJQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5wb3BvdmVyT2JqLm9wdGlvbnMucG9wb3ZlclRyaWdnZXIgPSB0aGlzLnBvcG92ZXJUcmlnZ2VyO1xuICAgICAgICB0aGlzLnBvcG92ZXJPYmoub3B0aW9ucy5wb3BvdmVySGlkZSA9IHRoaXMucG9wb3ZlckhpZGU7XG4gICAgICAgIHRoaXMucG9wb3Zlck9iai5vcHRpb25zLmNsb3NlQnV0dG9uID0gdGhpcy5jbG9zZUJ0bjtcbiAgICAgICAgdGhpcy5wb3BvdmVyT2JqLm9wdGlvbnMuY2xzUG9wb3ZlciA9IHRoaXMuY2xzUG9wb3ZlcjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG5cbn1cbiJdfQ==