import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
let AnimationDirective = class AnimationDirective {
    constructor(element) {
        this.element = element;
        this.oldClasses = [];
        this.jElement = $(this.element.nativeElement);
    }
    createElement() {
        const newClasses = [`ani-${this.hover ? 'hover-' : ''}${this.animation}`];
        this.oldClasses.forEach(c => {
            this.jElement.removeClass(c);
        });
        newClasses.forEach(c => {
            this.jElement.addClass(c);
        });
        this.oldClasses = newClasses;
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
};
AnimationDirective.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('m4-animation'),
    __metadata("design:type", String)
], AnimationDirective.prototype, "animation", void 0);
__decorate([
    Input('animation-hover'),
    __metadata("design:type", Boolean)
], AnimationDirective.prototype, "hover", void 0);
AnimationDirective = __decorate([
    Directive({
        selector: '[m4-animation]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], AnimationDirective);
export { AnimationDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2FuaW1hdGlvbi9hbmltYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFRN0YsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFPN0IsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUYvQixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBR2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLGFBQWE7UUFDbkIsTUFBTSxVQUFVLEdBQUcsQ0FBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBRSxDQUFDO1FBRTVFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRixDQUFBOztZQXZCOEIsVUFBVTs7QUFOaEI7SUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQzs7cURBQTBCO0FBQ3RCO0lBQXpCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzs7aURBQWdCO0FBRjlCLGtCQUFrQjtJQUg5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO0tBQzNCLENBQUM7cUNBUTZCLFVBQVU7R0FQNUIsa0JBQWtCLENBOEI5QjtTQTlCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QW5pbWF0aW9uVHlwZX0gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGVzJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbTQtYW5pbWF0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoJ200LWFuaW1hdGlvbicpIGFuaW1hdGlvbjogQW5pbWF0aW9uVHlwZTtcbiAgQElucHV0KCdhbmltYXRpb24taG92ZXInKSBob3ZlcjogYm9vbGVhbjtcblxuICBwcml2YXRlIGpFbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgb2xkQ2xhc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmpFbGVtZW50ID0gJCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgY29uc3QgbmV3Q2xhc3NlcyA9IFsgYGFuaS0ke3RoaXMuaG92ZXIgPyAnaG92ZXItJyA6ICcnfSR7dGhpcy5hbmltYXRpb259YCBdO1xuXG4gICAgdGhpcy5vbGRDbGFzc2VzLmZvckVhY2goYyA9PiB7XG4gICAgICB0aGlzLmpFbGVtZW50LnJlbW92ZUNsYXNzKGMpO1xuICAgIH0pO1xuICAgIG5ld0NsYXNzZXMuZm9yRWFjaChjID0+IHtcbiAgICAgIHRoaXMuakVsZW1lbnQuYWRkQ2xhc3MoYyk7XG4gICAgfSk7XG4gICAgdGhpcy5vbGRDbGFzc2VzID0gbmV3Q2xhc3NlcztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG59XG4iXX0=