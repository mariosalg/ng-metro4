import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
var ActivityComponent = /** @class */ (function () {
    function ActivityComponent() {
    }
    ActivityComponent.prototype.createControl = function () {
        var _this = this;
        asapScheduler.schedule(function () {
            var originalElement = $(_this.activity.nativeElement);
            ObjectHelper.hide(originalElement);
            if (_this.clonedElement) {
                _this.clonedElement.remove();
            }
            _this.clonedElement = originalElement.clone();
            ObjectHelper.show(_this.clonedElement);
            originalElement.parent().append(_this.clonedElement);
            _this.clonedElement.activity();
        });
    };
    ActivityComponent.prototype.ngOnInit = function () {
        this.createControl();
    };
    ActivityComponent.prototype.ngOnChanges = function (changes) {
        this.createControl();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ActivityComponent.prototype, "type", void 0);
    __decorate([
        Input('activity-style'),
        __metadata("design:type", String)
    ], ActivityComponent.prototype, "activityStyle", void 0);
    __decorate([
        ViewChild('activity', { static: true }),
        __metadata("design:type", ElementRef)
    ], ActivityComponent.prototype, "activity", void 0);
    ActivityComponent = __decorate([
        Component({
            selector: 'm4-activity',
            template: "<div #activity\n     [attr.data-type]=\"type\"\n     [attr.data-style]=\"activityStyle\"\n></div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], ActivityComponent);
    return ActivityComponent;
}());
export { ActivityComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakksT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFVeEQ7SUFPRTtJQUFnQixDQUFDO0lBRVQseUNBQWEsR0FBckI7UUFBQSxpQkFlQztRQWRDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDckIsSUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkQsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuQyxJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDN0I7WUFFRCxLQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0QyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUVwRCxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQS9CUTtRQUFSLEtBQUssRUFBRTs7bURBQW9CO0lBQ0g7UUFBeEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDOzs0REFBa0M7SUFFakI7UUFBeEMsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBbUIsVUFBVTt1REFBQztJQUozRCxpQkFBaUI7UUFON0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsK0dBQXdDO1lBRXhDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDOztPQUNXLGlCQUFpQixDQWtDN0I7SUFBRCx3QkFBQztDQUFBLEFBbENELElBa0NDO1NBbENZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpdml0eVN0eWxlVHlwZSwgQWN0aXZpdHlUeXBlfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZXMnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtYWN0aXZpdHknLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aXZpdHkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hY3Rpdml0eS5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2aXR5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0eXBlOiBBY3Rpdml0eVR5cGU7XG4gIEBJbnB1dCgnYWN0aXZpdHktc3R5bGUnKSBhY3Rpdml0eVN0eWxlOiBBY3Rpdml0eVN0eWxlVHlwZTtcblxuICBAVmlld0NoaWxkKCdhY3Rpdml0eScsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgYWN0aXZpdHk6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2xvbmVkRWxlbWVudDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb250cm9sKCkge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gJCh0aGlzLmFjdGl2aXR5Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LmFjdGl2aXR5KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZUNvbnRyb2woKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLmNyZWF0ZUNvbnRyb2woKTtcbiAgfVxuXG59XG4iXX0=