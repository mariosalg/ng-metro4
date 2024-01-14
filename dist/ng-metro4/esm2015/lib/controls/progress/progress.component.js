import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
let ProgressComponent = class ProgressComponent {
    constructor() { }
    createControl() {
        asapScheduler.schedule(() => {
            const originalElement = $(this.progress.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.progressObj = this.clonedElement.progress().data('progress');
        });
    }
    ngOnInit() {
        this.createControl();
    }
    ngOnChanges(changes) {
        if (Object.keys(changes).filter(c => c !== 'value' && c !== 'buffer').length > 0) {
            this.createControl();
        }
        else {
            if (this.progressObj) {
                this.progressObj.val(this.value);
                this.progressObj.buff(this.buffer);
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], ProgressComponent.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ProgressComponent.prototype, "buffer", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ProgressComponent.prototype, "small", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ProgressComponent.prototype, "type", void 0);
__decorate([
    Input('cls-back'),
    __metadata("design:type", String)
], ProgressComponent.prototype, "clsBack", void 0);
__decorate([
    Input('cls-bar'),
    __metadata("design:type", String)
], ProgressComponent.prototype, "clsBar", void 0);
__decorate([
    Input('cls-buffer'),
    __metadata("design:type", String)
], ProgressComponent.prototype, "clsBuffer", void 0);
__decorate([
    ViewChild('progress', { static: true }),
    __metadata("design:type", ElementRef)
], ProgressComponent.prototype, "progress", void 0);
ProgressComponent = __decorate([
    Component({
        selector: 'm4-progress',
        template: "<div #progress\n     [attr.data-value]=\"value\"\n     [attr.data-buffer]=\"buffer\"\n     [attr.data-small]=\"small\"\n     [attr.data-type]=\"type\"\n     [attr.data-cls-back]=\"clsBack\"\n     [attr.data-cls-bar]=\"clsBar\"\n     [attr.data-cls-buffer]=\"clsBuffer\"\n></div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], ProgressComponent);
export { ProgressComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUVuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFVeEQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFjNUIsZ0JBQWdCLENBQUM7SUFFVCxhQUFhO1FBQ25CLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQzFCLE1BQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdCO1lBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxPQUFPLElBQUksQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEYsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3BDO1NBQ0Y7SUFDSCxDQUFDO0NBRUYsQ0FBQTtBQS9DVTtJQUFSLEtBQUssRUFBRTs7Z0RBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTs7aURBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7O2dEQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFOzsrQ0FBd0I7QUFFYjtJQUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOztrREFBaUI7QUFDakI7SUFBakIsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7aURBQWdCO0FBQ1o7SUFBcEIsS0FBSyxDQUFDLFlBQVksQ0FBQzs7b0RBQW1CO0FBRUU7SUFBeEMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBbUIsVUFBVTttREFBQztBQVYzRCxpQkFBaUI7SUFON0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsb1NBQXdDO1FBRXhDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNoRCxDQUFDOztHQUNXLGlCQUFpQixDQWdEN0I7U0FoRFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtQcm9ncmVzc1R5cGVUeXBlfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZXMnO1xuaW1wb3J0IHtPYmplY3RIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QtaGVscGVyJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtNC1wcm9ncmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLmNvbXBvbmVudC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XG4gIEBJbnB1dCgpIGJ1ZmZlcjogbnVtYmVyO1xuICBASW5wdXQoKSBzbWFsbDogYm9vbGVhbjtcbiAgQElucHV0KCkgdHlwZTogUHJvZ3Jlc3NUeXBlVHlwZTtcblxuICBASW5wdXQoJ2Nscy1iYWNrJykgY2xzQmFjazogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1iYXInKSBjbHNCYXI6IHN0cmluZztcbiAgQElucHV0KCdjbHMtYnVmZmVyJykgY2xzQnVmZmVyOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgncHJvZ3Jlc3MnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIHByb2dyZXNzOiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSBwcm9ncmVzc09iajogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb250cm9sKCkge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gJCh0aGlzLnByb2dyZXNzLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcblxuICAgICAgdGhpcy5wcm9ncmVzc09iaiA9IHRoaXMuY2xvbmVkRWxlbWVudC5wcm9ncmVzcygpLmRhdGEoJ3Byb2dyZXNzJyk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZUNvbnRyb2woKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoY2hhbmdlcykuZmlsdGVyKGMgPT4gYyAhPT0gJ3ZhbHVlJyAmJiBjICE9PSAnYnVmZmVyJykubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jcmVhdGVDb250cm9sKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzT2JqKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NPYmoudmFsKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLnByb2dyZXNzT2JqLmJ1ZmYodGhpcy5idWZmZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iXX0=