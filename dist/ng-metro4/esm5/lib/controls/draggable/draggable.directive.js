import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, SimpleChanges } from '@angular/core';
import { asapScheduler } from 'rxjs';
var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.dragStart = new EventEmitter();
        this.dragStop = new EventEmitter();
        this.dragMove = new EventEmitter();
    }
    DraggableDirective.prototype.createElement = function () {
        var _this = this;
        asapScheduler.schedule(function () {
            if (_this.draggableData) {
                if (_this.dragArea) {
                    _this.draggableData.elem.remove();
                }
                _this.draggableData.destroy();
            }
            var draggableOptions = {
                onDragStart: function (position) {
                    _this.dragStart.emit(position);
                },
                onDragStop: function (position) {
                    _this.dragStop.emit(position);
                },
                onDragMove: function (position) {
                    _this.dragMove.emit(position);
                }
            };
            if (_this.dragElement) {
                draggableOptions.dragElement = _this.dragElement;
            }
            if (_this.dragArea) {
                draggableOptions.dragArea = _this.dragArea;
            }
            _this.draggableData = $(_this.element.nativeElement).draggable(draggableOptions).data('draggable');
        });
    };
    DraggableDirective.prototype.setPosition = function (position) {
        if (this.draggableData) {
            $(this.draggableData.elem).css({
                left: position.x + 'px',
                top: position.y + 'px'
            });
        }
    };
    DraggableDirective.prototype.ngOnInit = function () {
        this.createElement();
    };
    DraggableDirective.prototype.ngOnChanges = function (changes) {
        this.createElement();
    };
    DraggableDirective.prototype.ngOnDestroy = function () {
        $(this.element.nativeElement).remove();
    };
    DraggableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return DraggableDirective;
}());
export { DraggableDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9kcmFnZ2FibGUvZHJhZ2dhYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6SSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBWW5DO0lBVUUsNEJBQW9CLE9BQW1CLEVBQVUsUUFBbUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFOMUQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBQzdDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUM1QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7SUFJaUIsQ0FBQztJQUVoRSwwQ0FBYSxHQUFyQjtRQUFBLGlCQWdDQztRQS9CQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3JCLElBQUksS0FBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDbEM7Z0JBRUQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUM5QjtZQUVELElBQU0sZ0JBQWdCLEdBQVE7Z0JBQzVCLFdBQVcsRUFBRSxVQUFDLFFBQXNCO29CQUNsQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFDRCxVQUFVLEVBQUUsVUFBQyxRQUFzQjtvQkFDakMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0QsVUFBVSxFQUFFLFVBQUMsUUFBc0I7b0JBQ2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2FBQ0YsQ0FBQztZQUVGLElBQUksS0FBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsZ0JBQWdCLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUM7YUFDakQ7WUFFRCxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDO2FBQzNDO1lBRUQsS0FBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkcsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sd0NBQVcsR0FBbEIsVUFBbUIsUUFBc0I7UUFDdkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDN0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSTtnQkFDdkIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSTthQUN2QixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx3Q0FBVyxHQUFYO1FBQ0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekMsQ0FBQzs7Z0JBdkQ0QixVQUFVO2dCQUFvQixTQUFTOztJQVQ3QztRQUF0QixLQUFLLENBQUMsY0FBYyxDQUFDOzsyREFBcUI7SUFDdkI7UUFBbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7d0RBQWtCO0lBRTNCO1FBQVQsTUFBTSxFQUFFOzt5REFBOEM7SUFDN0M7UUFBVCxNQUFNLEVBQUU7O3dEQUE2QztJQUM1QztRQUFULE1BQU0sRUFBRTs7d0RBQTZDO0lBTjNDLGtCQUFrQjtRQUg5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCLENBQUM7eUNBVzZCLFVBQVUsRUFBb0IsU0FBUztPQVZ6RCxrQkFBa0IsQ0FrRTlCO0lBQUQseUJBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQWxFWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdQb3NpdGlvbiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbTQtZHJhZ2dhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgnbTQtZHJhZ2dhYmxlJykgZHJhZ0VsZW1lbnQ6IHN0cmluZztcbiAgQElucHV0KCdkcmFnLWFyZWEnKSBkcmFnQXJlYTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdQb3NpdGlvbj4oKTtcbiAgQE91dHB1dCgpIGRyYWdTdG9wID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnUG9zaXRpb24+KCk7XG4gIEBPdXRwdXQoKSBkcmFnTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1Bvc2l0aW9uPigpO1xuXG4gIHByaXZhdGUgZHJhZ2dhYmxlRGF0YTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmFnZ2FibGVEYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmRyYWdBcmVhKSB7XG4gICAgICAgICAgdGhpcy5kcmFnZ2FibGVEYXRhLmVsZW0ucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYWdnYWJsZURhdGEuZGVzdHJveSgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkcmFnZ2FibGVPcHRpb25zOiBhbnkgPSB7XG4gICAgICAgIG9uRHJhZ1N0YXJ0OiAocG9zaXRpb246IERyYWdQb3NpdGlvbikgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQocG9zaXRpb24pO1xuICAgICAgICB9LFxuICAgICAgICBvbkRyYWdTdG9wOiAocG9zaXRpb246IERyYWdQb3NpdGlvbikgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhZ1N0b3AuZW1pdChwb3NpdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRHJhZ01vdmU6IChwb3NpdGlvbjogRHJhZ1Bvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmFnTW92ZS5lbWl0KHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuZHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgZHJhZ2dhYmxlT3B0aW9ucy5kcmFnRWxlbWVudCA9IHRoaXMuZHJhZ0VsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRyYWdBcmVhKSB7XG4gICAgICAgIGRyYWdnYWJsZU9wdGlvbnMuZHJhZ0FyZWEgPSB0aGlzLmRyYWdBcmVhO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRyYWdnYWJsZURhdGEgPSAkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5kcmFnZ2FibGUoZHJhZ2dhYmxlT3B0aW9ucykuZGF0YSgnZHJhZ2dhYmxlJyk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2V0UG9zaXRpb24ocG9zaXRpb246IERyYWdQb3NpdGlvbikge1xuICAgIGlmICh0aGlzLmRyYWdnYWJsZURhdGEpIHtcbiAgICAgICQodGhpcy5kcmFnZ2FibGVEYXRhLmVsZW0pLmNzcyh7XG4gICAgICAgIGxlZnQ6IHBvc2l0aW9uLnggKyAncHgnLFxuICAgICAgICB0b3A6IHBvc2l0aW9uLnkgKyAncHgnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpLnJlbW92ZSgpO1xuICB9XG59XG4iXX0=