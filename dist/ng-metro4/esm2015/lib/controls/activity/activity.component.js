import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
let ActivityComponent = class ActivityComponent {
    constructor() { }
    createControl() {
        asapScheduler.schedule(() => {
            const originalElement = $(this.activity.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.clonedElement.activity();
        });
    }
    ngOnInit() {
        this.createControl();
    }
    ngOnChanges(changes) {
        this.createControl();
    }
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
export { ActivityComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakksT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFVeEQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFPNUIsZ0JBQWdCLENBQUM7SUFFVCxhQUFhO1FBQ25CLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQzFCLE1BQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdCO1lBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FFRixDQUFBO0FBakNVO0lBQVIsS0FBSyxFQUFFOzsrQ0FBb0I7QUFDSDtJQUF4QixLQUFLLENBQUMsZ0JBQWdCLENBQUM7O3dEQUFrQztBQUVqQjtJQUF4QyxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzhCQUFtQixVQUFVO21EQUFDO0FBSjNELGlCQUFpQjtJQU43QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QiwrR0FBd0M7UUFFeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7O0dBQ1csaUJBQWlCLENBa0M3QjtTQWxDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZpdHlTdHlsZVR5cGUsIEFjdGl2aXR5VHlwZX0gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGVzJztcbmltcG9ydCB7YXNhcFNjaGVkdWxlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge09iamVjdEhlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LWFjdGl2aXR5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGl2aXR5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aXZpdHkuY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpdml0eUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdHlwZTogQWN0aXZpdHlUeXBlO1xuICBASW5wdXQoJ2FjdGl2aXR5LXN0eWxlJykgYWN0aXZpdHlTdHlsZTogQWN0aXZpdHlTdHlsZVR5cGU7XG5cbiAgQFZpZXdDaGlsZCgnYWN0aXZpdHknLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGFjdGl2aXR5OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ29udHJvbCgpIHtcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5hY3Rpdml0eS5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5hY3Rpdml0eSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVDb250cm9sKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5jcmVhdGVDb250cm9sKCk7XG4gIH1cblxufVxuIl19