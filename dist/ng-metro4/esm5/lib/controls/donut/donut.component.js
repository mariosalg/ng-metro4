import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
var DonutComponent = /** @class */ (function () {
    function DonutComponent() {
    }
    DonutComponent.prototype.createControl = function () {
        var _this = this;
        asapScheduler.schedule(function () {
            var originalElement = $(_this.donut.nativeElement);
            ObjectHelper.hide(originalElement);
            if (_this.clonedElement) {
                _this.clonedElement.remove();
            }
            _this.clonedElement = originalElement.clone();
            ObjectHelper.show(_this.clonedElement);
            originalElement.parent().append(_this.clonedElement);
            _this.donutObj = _this.clonedElement.donut().data('donut');
        });
    };
    DonutComponent.prototype.ngOnInit = function () {
        this.createControl();
    };
    DonutComponent.prototype.ngOnChanges = function (changes) {
        if (Object.keys(changes).filter(function (c) { return c !== 'value'; }).length > 0) {
            this.createControl();
        }
        else {
            if (this.donutObj) {
                this.donutObj.val(this.value);
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DonutComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DonutComponent.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DonutComponent.prototype, "radius", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DonutComponent.prototype, "hole", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DonutComponent.prototype, "background", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DonutComponent.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DonutComponent.prototype, "stroke", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DonutComponent.prototype, "fill", void 0);
    __decorate([
        Input('font-size'),
        __metadata("design:type", Number)
    ], DonutComponent.prototype, "fontSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DonutComponent.prototype, "total", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DonutComponent.prototype, "caption", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], DonutComponent.prototype, "animate", void 0);
    __decorate([
        Input('show-value'),
        __metadata("design:type", Boolean)
    ], DonutComponent.prototype, "showValue", void 0);
    __decorate([
        ViewChild('donut', { static: true }),
        __metadata("design:type", ElementRef)
    ], DonutComponent.prototype, "donut", void 0);
    DonutComponent = __decorate([
        Component({
            selector: 'm4-donut',
            template: "<div #donut\n     [attr.data-value]=\"value\"\n     [attr.data-size]=\"size\"\n     [attr.data-radius]=\"radius\"\n     [attr.data-hole]=\"hole\"\n     [attr.data-background]=\"background\"\n     [attr.data-color]=\"color\"\n     [attr.data-stroke]=\"stroke\"\n     [attr.data-fill]=\"fill\"\n     [attr.data-font-size]=\"fontSize\"\n     [attr.data-total]=\"total\"\n     [attr.data-cap]=\"caption\"\n     [attr.data-animate]=\"animate\"\n     [attr.data-show-value]=\"showValue\"></div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], DonutComponent);
    return DonutComponent;
}());
export { DonutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2RvbnV0L2RvbnV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFVeEQ7SUFtQkU7SUFBZ0IsQ0FBQztJQUVULHNDQUFhLEdBQXJCO1FBQUEsaUJBZUM7UUFkQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3JCLElBQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdCO1lBRUQsS0FBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFcEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxPQUFPLEVBQWIsQ0FBYSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7SUFDSCxDQUFDO0lBakRRO1FBQVIsS0FBSyxFQUFFOztpREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOztnREFBYztJQUNiO1FBQVIsS0FBSyxFQUFFOztrREFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTs7Z0RBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTs7c0RBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOztpREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOztrREFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTs7Z0RBQWM7SUFDRjtRQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOztvREFBa0I7SUFDNUI7UUFBUixLQUFLLEVBQUU7O2lEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7O21EQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTs7bURBQWlCO0lBQ0o7UUFBcEIsS0FBSyxDQUFDLFlBQVksQ0FBQzs7cURBQW9CO0lBRUY7UUFBckMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBZ0IsVUFBVTtpREFBQztJQWZyRCxjQUFjO1FBTjFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLHNmQUFxQztZQUVyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQzs7T0FDVyxjQUFjLENBbUQxQjtJQUFELHFCQUFDO0NBQUEsQUFuREQsSUFtREM7U0FuRFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtZG9udXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZG9udXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kb251dC5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERvbnV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyO1xuICBASW5wdXQoKSBzaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJhZGl1czogbnVtYmVyO1xuICBASW5wdXQoKSBob2xlOiBudW1iZXI7XG4gIEBJbnB1dCgpIGJhY2tncm91bmQ6IHN0cmluZztcbiAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgc3Ryb2tlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbGw6IHN0cmluZztcbiAgQElucHV0KCdmb250LXNpemUnKSBmb250U2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSB0b3RhbDogbnVtYmVyO1xuICBASW5wdXQoKSBjYXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFuaW1hdGU6IG51bWJlcjtcbiAgQElucHV0KCdzaG93LXZhbHVlJykgc2hvd1ZhbHVlOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ2RvbnV0JywgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBkb251dDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjbG9uZWRFbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgZG9udXRPYmo6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ29udHJvbCgpIHtcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5kb251dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuZG9udXRPYmogPSB0aGlzLmNsb25lZEVsZW1lbnQuZG9udXQoKS5kYXRhKCdkb251dCcpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVDb250cm9sKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNoYW5nZXMpLmZpbHRlcihjID0+IGMgIT09ICd2YWx1ZScpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY3JlYXRlQ29udHJvbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5kb251dE9iaikge1xuICAgICAgICB0aGlzLmRvbnV0T2JqLnZhbCh0aGlzLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==