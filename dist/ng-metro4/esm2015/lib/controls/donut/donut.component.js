import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
let DonutComponent = class DonutComponent {
    constructor() { }
    createControl() {
        asapScheduler.schedule(() => {
            const originalElement = $(this.donut.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.donutObj = this.clonedElement.donut().data('donut');
        });
    }
    ngOnInit() {
        this.createControl();
    }
    ngOnChanges(changes) {
        if (Object.keys(changes).filter(c => c !== 'value').length > 0) {
            this.createControl();
        }
        else {
            if (this.donutObj) {
                this.donutObj.val(this.value);
            }
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
export { DonutComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9udXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2RvbnV0L2RvbnV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFVeEQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQW1CekIsZ0JBQWdCLENBQUM7SUFFVCxhQUFhO1FBQ25CLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQzFCLE1BQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdCO1lBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzlELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0I7U0FDRjtJQUNILENBQUM7Q0FDRixDQUFBO0FBbERVO0lBQVIsS0FBSyxFQUFFOzs2Q0FBZTtBQUNkO0lBQVIsS0FBSyxFQUFFOzs0Q0FBYztBQUNiO0lBQVIsS0FBSyxFQUFFOzs4Q0FBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTs7NENBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTs7a0RBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzs2Q0FBZTtBQUNkO0lBQVIsS0FBSyxFQUFFOzs4Q0FBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTs7NENBQWM7QUFDRjtJQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOztnREFBa0I7QUFDNUI7SUFBUixLQUFLLEVBQUU7OzZDQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7OytDQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTs7K0NBQWlCO0FBQ0o7SUFBcEIsS0FBSyxDQUFDLFlBQVksQ0FBQzs7aURBQW9CO0FBRUY7SUFBckMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBZ0IsVUFBVTs2Q0FBQztBQWZyRCxjQUFjO0lBTjFCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLHNmQUFxQztRQUVyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQzs7R0FDVyxjQUFjLENBbUQxQjtTQW5EWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtPYmplY3RIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QtaGVscGVyJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtNC1kb251dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb251dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RvbnV0LmNvbXBvbmVudC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRG9udXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgcmFkaXVzOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhvbGU6IG51bWJlcjtcbiAgQElucHV0KCkgYmFja2dyb3VuZDogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBzdHJva2U6IHN0cmluZztcbiAgQElucHV0KCkgZmlsbDogc3RyaW5nO1xuICBASW5wdXQoJ2ZvbnQtc2l6ZScpIGZvbnRTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRvdGFsOiBudW1iZXI7XG4gIEBJbnB1dCgpIGNhcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgYW5pbWF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ3Nob3ctdmFsdWUnKSBzaG93VmFsdWU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZCgnZG9udXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGRvbnV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSBkb251dE9iajogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb250cm9sKCkge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gJCh0aGlzLmRvbnV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcblxuICAgICAgdGhpcy5kb251dE9iaiA9IHRoaXMuY2xvbmVkRWxlbWVudC5kb251dCgpLmRhdGEoJ2RvbnV0Jyk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZUNvbnRyb2woKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKGMgPT4gYyAhPT0gJ3ZhbHVlJykubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jcmVhdGVDb250cm9sKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmRvbnV0T2JqKSB7XG4gICAgICAgIHRoaXMuZG9udXRPYmoudmFsKHRoaXMudmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19