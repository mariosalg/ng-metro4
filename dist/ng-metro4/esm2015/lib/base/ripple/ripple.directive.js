import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { AttributeHelper } from '../../helper/attribute-helper';
import { asapScheduler } from 'rxjs';
let RippleDirective = class RippleDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    createElement() {
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-ripple-target', this.rippleTarget);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-ripple-color', this.rippleColor);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-ripple-alpha', this.rippleAlpha);
        asapScheduler.schedule(() => {
            if (!this.rippleObj) {
                this.rippleObj = $(this.element.nativeElement).ripple().data('ripple');
            }
            else {
                this.rippleObj.options.rippleColor = this.rippleColor;
                this.rippleObj.options.rippleTarget = this.rippleTarget;
                this.rippleObj.options.rippleAlpha = this.rippleAlpha;
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
RippleDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { RippleDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmlwcGxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL3JpcHBsZS9yaXBwbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hHLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBT25DLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFPMUIsWUFBb0IsT0FBbUIsRUFBVSxRQUFtQjtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUFJLENBQUM7SUFFakUsYUFBYTtRQUNuQixlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkcsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pHLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVqRyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDeEU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN2RDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNGLENBQUE7O1lBekI4QixVQUFVO1lBQW9CLFNBQVM7O0FBTjVDO0lBQXZCLEtBQUssQ0FBQyxlQUFlLENBQUM7O3FEQUFzQjtBQUN0QjtJQUF0QixLQUFLLENBQUMsY0FBYyxDQUFDOztvREFBcUI7QUFDcEI7SUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQzs7b0RBQXFCO0FBSGhDLGVBQWU7SUFIM0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7S0FDeEIsQ0FBQztxQ0FRNkIsVUFBVSxFQUFvQixTQUFTO0dBUHpELGVBQWUsQ0FnQzNCO1NBaENZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBdHRyaWJ1dGVIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9hdHRyaWJ1dGUtaGVscGVyJztcbmltcG9ydCB7YXNhcFNjaGVkdWxlcn0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW200LXJpcHBsZV0nXG59KVxuZXhwb3J0IGNsYXNzIFJpcHBsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdyaXBwbGUtdGFyZ2V0JykgcmlwcGxlVGFyZ2V0OiBzdHJpbmc7XG4gIEBJbnB1dCgncmlwcGxlLWNvbG9yJykgcmlwcGxlQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCdyaXBwbGUtYWxwaGEnKSByaXBwbGVBbHBoYTogbnVtYmVyO1xuXG4gIHJpcHBsZU9iajogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgQXR0cmlidXRlSGVscGVyLnNldEF0dHJpYnV0ZSh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsICdkYXRhLXJpcHBsZS10YXJnZXQnLCB0aGlzLnJpcHBsZVRhcmdldCk7XG4gICAgQXR0cmlidXRlSGVscGVyLnNldEF0dHJpYnV0ZSh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsICdkYXRhLXJpcHBsZS1jb2xvcicsIHRoaXMucmlwcGxlQ29sb3IpO1xuICAgIEF0dHJpYnV0ZUhlbHBlci5zZXRBdHRyaWJ1dGUodGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCAnZGF0YS1yaXBwbGUtYWxwaGEnLCB0aGlzLnJpcHBsZUFscGhhKTtcblxuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnJpcHBsZU9iaikge1xuICAgICAgICB0aGlzLnJpcHBsZU9iaiA9ICQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnJpcHBsZSgpLmRhdGEoJ3JpcHBsZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yaXBwbGVPYmoub3B0aW9ucy5yaXBwbGVDb2xvciA9IHRoaXMucmlwcGxlQ29sb3I7XG4gICAgICAgIHRoaXMucmlwcGxlT2JqLm9wdGlvbnMucmlwcGxlVGFyZ2V0ID0gdGhpcy5yaXBwbGVUYXJnZXQ7XG4gICAgICAgIHRoaXMucmlwcGxlT2JqLm9wdGlvbnMucmlwcGxlQWxwaGEgPSB0aGlzLnJpcHBsZUFscGhhO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cbn1cbiJdfQ==