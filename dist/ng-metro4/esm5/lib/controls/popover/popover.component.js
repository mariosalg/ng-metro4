import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { PopoverDirective } from './popover.directive';
import { asapScheduler } from 'rxjs';
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent() {
    }
    PopoverComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        asapScheduler.schedule(function () {
            _this.popover.popoverObj.options.onPopoverShow = function () {
                if (_this.popover.popoverObj.popover) {
                    $(_this.content.nativeElement).children().appendTo(_this.popover.popoverObj.popover.find('.popover-content'));
                    _this.popover.popoverObj.size = Metro.utils.hiddenElementSize(_this.popover.popoverObj.popover);
                    _this.popover.popoverObj.setPosition();
                }
            };
            _this.popover.popoverObj.options.onPopoverHide = function () {
                asapScheduler.schedule(function () {
                    if (_this.popover.popoverObj && _this.popover.popoverObj.popover) {
                        _this.popover.popoverObj.popover.find('.popover-content').children().appendTo($(_this.content.nativeElement));
                    }
                }, 300);
            };
        }, 1);
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
    return PopoverComponent;
}());
export { PopoverComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvY29udHJvbHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQVduQztJQUFBO0lBd0JBLENBQUM7SUFwQkMsMENBQWUsR0FBZjtRQUFBLGlCQW1CQztRQWxCQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUc7Z0JBQzlDLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO29CQUNuQyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7b0JBRTVHLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM5RixLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDdkM7WUFDSCxDQUFDLENBQUM7WUFFRixLQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHO2dCQUM5QyxhQUFhLENBQUMsUUFBUSxDQUFDO29CQUNyQixJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDOUQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3FCQUM3RztnQkFDSCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDVixDQUFDLENBQUM7UUFDSixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBdEJpRDtRQUFqRCxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQVUsZ0JBQWdCO3FEQUFDO0lBQzdCO1FBQTlDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBVSxVQUFVO3FEQUFDO0lBRnhELGdCQUFnQjtRQU41QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0Qix1SkFBdUM7WUFFdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O1NBQ2hELENBQUM7T0FDVyxnQkFBZ0IsQ0F3QjVCO0lBQUQsdUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXhCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UG9wb3ZlckRpcmVjdGl2ZX0gZnJvbSAnLi9wb3BvdmVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5kZWNsYXJlIHZhciBNZXRybzogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtNC1wb3BvdmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wb3BvdmVyLmNvbXBvbmVudC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUG9wb3ZlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAQ29udGVudENoaWxkKFBvcG92ZXJEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHBvcG92ZXI6IFBvcG92ZXJEaXJlY3RpdmU7XG4gIEBWaWV3Q2hpbGQoJ3BvcG92ZXJDb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgY29udGVudDogRWxlbWVudFJlZjtcblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICB0aGlzLnBvcG92ZXIucG9wb3Zlck9iai5vcHRpb25zLm9uUG9wb3ZlclNob3cgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnBvcG92ZXIucG9wb3Zlck9iai5wb3BvdmVyKSB7XG4gICAgICAgICAgJCh0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudCkuY2hpbGRyZW4oKS5hcHBlbmRUbyh0aGlzLnBvcG92ZXIucG9wb3Zlck9iai5wb3BvdmVyLmZpbmQoJy5wb3BvdmVyLWNvbnRlbnQnKSk7XG5cbiAgICAgICAgICB0aGlzLnBvcG92ZXIucG9wb3Zlck9iai5zaXplID0gTWV0cm8udXRpbHMuaGlkZGVuRWxlbWVudFNpemUodGhpcy5wb3BvdmVyLnBvcG92ZXJPYmoucG9wb3Zlcik7XG4gICAgICAgICAgdGhpcy5wb3BvdmVyLnBvcG92ZXJPYmouc2V0UG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5wb3BvdmVyLnBvcG92ZXJPYmoub3B0aW9ucy5vblBvcG92ZXJIaWRlID0gKCkgPT4ge1xuICAgICAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5wb3BvdmVyLnBvcG92ZXJPYmogJiYgdGhpcy5wb3BvdmVyLnBvcG92ZXJPYmoucG9wb3Zlcikge1xuICAgICAgICAgICAgdGhpcy5wb3BvdmVyLnBvcG92ZXJPYmoucG9wb3Zlci5maW5kKCcucG9wb3Zlci1jb250ZW50JykuY2hpbGRyZW4oKS5hcHBlbmRUbygkKHRoaXMuY29udGVudC5uYXRpdmVFbGVtZW50KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAzMDApO1xuICAgICAgfTtcbiAgICB9LCAxKTtcbiAgfVxufVxuIl19