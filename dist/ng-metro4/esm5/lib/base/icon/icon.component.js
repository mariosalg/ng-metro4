import { __decorate, __metadata, __param } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, Optional, SimpleChanges } from '@angular/core';
import { AttributeHelper } from '../../helper/attribute-helper';
var IconComponent = /** @class */ (function () {
    function IconComponent(mainElement) {
        this.mainElement = mainElement;
        this.size = 0;
    }
    IconComponent.prototype.createElement = function () {
        var sizeClass = this.size === 0 ? '' : this.size === 1 ? ' mif-lg' : ' mif-' + this.size + 'x';
        this.elementClass = (this.class ? this.class + ' ' : '') + "mif-" + this.icon + sizeClass + (this.color ? ' fg-' + this.color : '');
    };
    IconComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classObserver = AttributeHelper.createObserver(this.mainElement, function (newClasses, oldClasses) {
            _this.class = newClasses.join(' ');
            _this.createElement();
        });
        this.createElement();
    };
    IconComponent.prototype.ngOnChanges = function (changes) {
        this.createElement();
    };
    IconComponent.prototype.ngOnDestroy = function () {
        if (this.classObserver) {
            this.classObserver.disconnect();
        }
    };
    IconComponent.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Optional }] }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IconComponent.prototype, "icon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], IconComponent.prototype, "size", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IconComponent.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IconComponent.prototype, "class", void 0);
    IconComponent = __decorate([
        Component({
            selector: 'm4-icon',
            template: "<span [ngClass]=\"elementClass\"></span>\n",
            changeDetection: ChangeDetectionStrategy.Default,
            styles: [""]
        }),
        __param(0, Optional()),
        __metadata("design:paramtypes", [ElementRef])
    ], IconComponent);
    return IconComponent;
}());
export { IconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvYmFzZS9pY29uL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUzSSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFROUQ7SUFVRSx1QkFBZ0MsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFSOUMsU0FBSSxHQUFnQixDQUFDLENBQUM7SUFRNEIsQ0FBQztJQUVwRCxxQ0FBYSxHQUFyQjtRQUNFLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNqRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBTyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFFLENBQUM7SUFDbEksQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFVBQUMsVUFBVSxFQUFFLFVBQVU7WUFDM0YsS0FBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBeEI0QyxVQUFVLHVCQUExQyxRQUFROztJQVRaO1FBQVIsS0FBSyxFQUFFOzsrQ0FBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTs7K0NBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFOztnREFBa0I7SUFFakI7UUFBUixLQUFLLEVBQUU7O2dEQUFlO0lBTFosYUFBYTtRQU56QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixzREFBb0M7WUFFcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87O1NBQ2pELENBQUM7UUFXYSxXQUFBLFFBQVEsRUFBRSxDQUFBO3lDQUFzQixVQUFVO09BVjVDLGFBQWEsQ0FtQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQW5DWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb2xvclR5cGUsIEljb25UeXBlfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZXMnO1xuaW1wb3J0IHtBdHRyaWJ1dGVIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9hdHRyaWJ1dGUtaGVscGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaWNvbi5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGljb246IEljb25UeXBlO1xuICBASW5wdXQoKSBzaXplOiAwfDF8MnwzfDR8NSA9IDA7XG4gIEBJbnB1dCgpIGNvbG9yOiBDb2xvclR5cGU7XG5cbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcblxuICBlbGVtZW50Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBjbGFzc09ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgbWFpbkVsZW1lbnQ6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBjb25zdCBzaXplQ2xhc3MgPSB0aGlzLnNpemUgPT09IDAgPyAnJyA6IHRoaXMuc2l6ZSA9PT0gMSA/ICcgbWlmLWxnJyA6ICcgbWlmLScgKyB0aGlzLnNpemUgKyAneCc7XG4gICAgdGhpcy5lbGVtZW50Q2xhc3MgPSBgJHt0aGlzLmNsYXNzID8gdGhpcy5jbGFzcyArICcgJyA6ICcnfW1pZi0ke3RoaXMuaWNvbn0ke3NpemVDbGFzc30ke3RoaXMuY29sb3IgPyAnIGZnLScgKyB0aGlzLmNvbG9yIDogJyd9YDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NPYnNlcnZlciA9IEF0dHJpYnV0ZUhlbHBlci5jcmVhdGVPYnNlcnZlcih0aGlzLm1haW5FbGVtZW50LCAobmV3Q2xhc3Nlcywgb2xkQ2xhc3NlcykgPT4ge1xuICAgICAgdGhpcy5jbGFzcyA9IG5ld0NsYXNzZXMuam9pbignICcpO1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYXNzT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuY2xhc3NPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=