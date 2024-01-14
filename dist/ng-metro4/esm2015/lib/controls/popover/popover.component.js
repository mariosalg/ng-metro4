import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { PopoverDirective } from './popover.directive';
import { asapScheduler } from 'rxjs';
let PopoverComponent = class PopoverComponent {
    ngAfterViewInit() {
        asapScheduler.schedule(() => {
            this.popover.popoverObj.options.onPopoverShow = () => {
                if (this.popover.popoverObj.popover) {
                    $(this.content.nativeElement).children().appendTo(this.popover.popoverObj.popover.find('.popover-content'));
                    this.popover.popoverObj.size = Metro.utils.hiddenElementSize(this.popover.popoverObj.popover);
                    this.popover.popoverObj.setPosition();
                }
            };
            this.popover.popoverObj.options.onPopoverHide = () => {
                asapScheduler.schedule(() => {
                    if (this.popover.popoverObj && this.popover.popoverObj.popover) {
                        this.popover.popoverObj.popover.find('.popover-content').children().appendTo($(this.content.nativeElement));
                    }
                }, 300);
            };
        }, 1);
    }
};
__decorate([
    ContentChild(PopoverDirective, { static: true }),
    __metadata("design:type", PopoverDirective)
], PopoverComponent.prototype, "popover", void 0);
__decorate([
    ViewChild('popoverContent', { static: true }),
    __metadata("design:type", ElementRef)
], PopoverComponent.prototype, "content", void 0);
PopoverComponent = __decorate([
    Component({
        selector: 'm4-popover',
        template: "<ng-content></ng-content>\n\n<div class=\"m4-popover-content\" #popoverContent>\n  <ng-content select=\"[content]\"></ng-content>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".m4-popover-content{display:none}"]
    })
], PopoverComponent);
export { PopoverComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQVduQyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUkzQixlQUFlO1FBQ2IsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxHQUFHLEVBQUU7Z0JBQ25ELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO29CQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7b0JBRTVHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM5RixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDdkM7WUFDSCxDQUFDLENBQUM7WUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLEdBQUcsRUFBRTtnQkFDbkQsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7b0JBQzFCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO3dCQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7cUJBQzdHO2dCQUNILENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQztRQUNKLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Q0FDRixDQUFBO0FBdkJtRDtJQUFqRCxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQVUsZ0JBQWdCO2lEQUFDO0FBQzdCO0lBQTlDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBVSxVQUFVO2lEQUFDO0FBRnhELGdCQUFnQjtJQU41QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0Qix1SkFBdUM7UUFFdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7R0FDVyxnQkFBZ0IsQ0F3QjVCO1NBeEJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQb3BvdmVyRGlyZWN0aXZlfSBmcm9tICcuL3BvcG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7YXNhcFNjaGVkdWxlcn0gZnJvbSAncnhqcyc7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcbmRlY2xhcmUgdmFyIE1ldHJvOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LXBvcG92ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcG9wb3Zlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BvcG92ZXIuY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBDb250ZW50Q2hpbGQoUG9wb3ZlckRpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgcG9wb3ZlcjogUG9wb3ZlckRpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZCgncG9wb3ZlckNvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250ZW50OiBFbGVtZW50UmVmO1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIHRoaXMucG9wb3Zlci5wb3BvdmVyT2JqLm9wdGlvbnMub25Qb3BvdmVyU2hvdyA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucG9wb3Zlci5wb3BvdmVyT2JqLnBvcG92ZXIpIHtcbiAgICAgICAgICAkKHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50KS5jaGlsZHJlbigpLmFwcGVuZFRvKHRoaXMucG9wb3Zlci5wb3BvdmVyT2JqLnBvcG92ZXIuZmluZCgnLnBvcG92ZXItY29udGVudCcpKTtcblxuICAgICAgICAgIHRoaXMucG9wb3Zlci5wb3BvdmVyT2JqLnNpemUgPSBNZXRyby51dGlscy5oaWRkZW5FbGVtZW50U2l6ZSh0aGlzLnBvcG92ZXIucG9wb3Zlck9iai5wb3BvdmVyKTtcbiAgICAgICAgICB0aGlzLnBvcG92ZXIucG9wb3Zlck9iai5zZXRQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnBvcG92ZXIucG9wb3Zlck9iai5vcHRpb25zLm9uUG9wb3ZlckhpZGUgPSAoKSA9PiB7XG4gICAgICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnBvcG92ZXIucG9wb3Zlck9iaiAmJiB0aGlzLnBvcG92ZXIucG9wb3Zlck9iai5wb3BvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLnBvcG92ZXIucG9wb3Zlck9iai5wb3BvdmVyLmZpbmQoJy5wb3BvdmVyLWNvbnRlbnQnKS5jaGlsZHJlbigpLmFwcGVuZFRvKCQodGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICB9O1xuICAgIH0sIDEpO1xuICB9XG59XG4iXX0=