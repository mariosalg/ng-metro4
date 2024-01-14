import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';
import { asapScheduler } from 'rxjs';
let DraggableDirective = class DraggableDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.dragStart = new EventEmitter();
        this.dragStop = new EventEmitter();
        this.dragMove = new EventEmitter();
    }
    createElement() {
        asapScheduler.schedule(() => {
            if (this.draggableData) {
                if (this.dragArea) {
                    this.draggableData.elem.remove();
                }
                this.draggableData.destroy();
            }
            const draggableOptions = {
                onDragStart: (position) => {
                    this.dragStart.emit(position);
                },
                onDragStop: (position) => {
                    this.dragStop.emit(position);
                },
                onDragMove: (position) => {
                    this.dragMove.emit(position);
                }
            };
            if (this.dragElement) {
                draggableOptions.dragElement = this.dragElement;
            }
            if (this.dragArea) {
                draggableOptions.dragArea = this.dragArea;
            }
            this.draggableData = $(this.element.nativeElement).draggable(draggableOptions).data('draggable');
        });
    }
    setPosition(position) {
        if (this.draggableData) {
            $(this.draggableData.elem).css({
                left: position.x + 'px',
                top: position.y + 'px'
            });
        }
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
    ngOnDestroy() {
        $(this.element.nativeElement).remove();
    }
};
DraggableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input('m4-draggable'),
    __metadata("design:type", String)
], DraggableDirective.prototype, "dragElement", void 0);
__decorate([
    Input('drag-area'),
    __metadata("design:type", String)
], DraggableDirective.prototype, "dragArea", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "dragStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "dragStop", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "dragMove", void 0);
DraggableDirective = __decorate([
    Directive({
        selector: '[m4-draggable]'
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], DraggableDirective);
export { DraggableDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9kcmFnZ2FibGUvZHJhZ2dhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6SSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBWW5DLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBVTdCLFlBQW9CLE9BQW1CLEVBQVUsUUFBbUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFOMUQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBQzdDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUM1QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7SUFJaUIsQ0FBQztJQUVoRSxhQUFhO1FBQ25CLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDbEM7Z0JBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM5QjtZQUVELE1BQU0sZ0JBQWdCLEdBQVE7Z0JBQzVCLFdBQVcsRUFBRSxDQUFDLFFBQXNCLEVBQUUsRUFBRTtvQkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBQ0QsVUFBVSxFQUFFLENBQUMsUUFBc0IsRUFBRSxFQUFFO29CQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztnQkFDRCxVQUFVLEVBQUUsQ0FBQyxRQUFzQixFQUFFLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2FBQ0YsQ0FBQztZQUVGLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDakQ7WUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQzNDO1lBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkcsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sV0FBVyxDQUFDLFFBQXNCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQzdCLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUk7Z0JBQ3ZCLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUk7YUFDdkIsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVztRQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pDLENBQUM7Q0FDRixDQUFBOztZQXhEOEIsVUFBVTtZQUFvQixTQUFTOztBQVQ3QztJQUF0QixLQUFLLENBQUMsY0FBYyxDQUFDOzt1REFBcUI7QUFDdkI7SUFBbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7b0RBQWtCO0FBRTNCO0lBQVQsTUFBTSxFQUFFOztxREFBOEM7QUFDN0M7SUFBVCxNQUFNLEVBQUU7O29EQUE2QztBQUM1QztJQUFULE1BQU0sRUFBRTs7b0RBQTZDO0FBTjNDLGtCQUFrQjtJQUg5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO0tBQzNCLENBQUM7cUNBVzZCLFVBQVUsRUFBb0IsU0FBUztHQVZ6RCxrQkFBa0IsQ0FrRTlCO1NBbEVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ1Bvc2l0aW9uIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttNC1kcmFnZ2FibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCdtNC1kcmFnZ2FibGUnKSBkcmFnRWxlbWVudDogc3RyaW5nO1xuICBASW5wdXQoJ2RyYWctYXJlYScpIGRyYWdBcmVhOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGRyYWdTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1Bvc2l0aW9uPigpO1xuICBAT3V0cHV0KCkgZHJhZ1N0b3AgPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdQb3NpdGlvbj4oKTtcbiAgQE91dHB1dCgpIGRyYWdNb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnUG9zaXRpb24+KCk7XG5cbiAgcHJpdmF0ZSBkcmFnZ2FibGVEYXRhO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyYWdnYWJsZURhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0FyZWEpIHtcbiAgICAgICAgICB0aGlzLmRyYWdnYWJsZURhdGEuZWxlbS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZHJhZ2dhYmxlRGF0YS5kZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRyYWdnYWJsZU9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgb25EcmFnU3RhcnQ6IChwb3NpdGlvbjogRHJhZ1Bvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmFnU3RhcnQuZW1pdChwb3NpdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJhZ1N0b3A6IChwb3NpdGlvbjogRHJhZ1Bvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmFnU3RvcC5lbWl0KHBvc2l0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25EcmFnTW92ZTogKHBvc2l0aW9uOiBEcmFnUG9zaXRpb24pID0+IHtcbiAgICAgICAgICB0aGlzLmRyYWdNb3ZlLmVtaXQocG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5kcmFnRWxlbWVudCkge1xuICAgICAgICBkcmFnZ2FibGVPcHRpb25zLmRyYWdFbGVtZW50ID0gdGhpcy5kcmFnRWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZHJhZ0FyZWEpIHtcbiAgICAgICAgZHJhZ2dhYmxlT3B0aW9ucy5kcmFnQXJlYSA9IHRoaXMuZHJhZ0FyZWE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZHJhZ2dhYmxlRGF0YSA9ICQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLmRyYWdnYWJsZShkcmFnZ2FibGVPcHRpb25zKS5kYXRhKCdkcmFnZ2FibGUnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQb3NpdGlvbihwb3NpdGlvbjogRHJhZ1Bvc2l0aW9uKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlRGF0YSkge1xuICAgICAgJCh0aGlzLmRyYWdnYWJsZURhdGEuZWxlbSkuY3NzKHtcbiAgICAgICAgbGVmdDogcG9zaXRpb24ueCArICdweCcsXG4gICAgICAgIHRvcDogcG9zaXRpb24ueSArICdweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgJCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkucmVtb3ZlKCk7XG4gIH1cbn1cbiJdfQ==