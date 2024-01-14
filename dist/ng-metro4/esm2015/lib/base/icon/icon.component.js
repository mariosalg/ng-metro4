import { __decorate, __metadata, __param } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, Optional, SimpleChanges } from '@angular/core';
import { AttributeHelper } from '../../helper/attribute-helper';
let IconComponent = class IconComponent {
    constructor(mainElement) {
        this.mainElement = mainElement;
        this.size = 0;
    }
    createElement() {
        const sizeClass = this.size === 0 ? '' : this.size === 1 ? ' mif-lg' : ' mif-' + this.size + 'x';
        this.elementClass = `${this.class ? this.class + ' ' : ''}mif-${this.icon}${sizeClass}${this.color ? ' fg-' + this.color : ''}`;
    }
    ngOnInit() {
        this.classObserver = AttributeHelper.createObserver(this.mainElement, (newClasses, oldClasses) => {
            this.class = newClasses.join(' ');
            this.createElement();
        });
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
    ngOnDestroy() {
        if (this.classObserver) {
            this.classObserver.disconnect();
        }
    }
};
IconComponent.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Optional }] }
];
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
export { IconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvYmFzZS9pY29uL2ljb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUzSSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFROUQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQVV4QixZQUFnQyxXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQVI5QyxTQUFJLEdBQWdCLENBQUMsQ0FBQztJQVE0QixDQUFDO0lBRXBELGFBQWE7UUFDbkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNsSSxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFO1lBQy9GLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7Q0FDRixDQUFBOztZQXpCOEMsVUFBVSx1QkFBMUMsUUFBUTs7QUFUWjtJQUFSLEtBQUssRUFBRTs7MkNBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7OzJDQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTs7NENBQWtCO0FBRWpCO0lBQVIsS0FBSyxFQUFFOzs0Q0FBZTtBQUxaLGFBQWE7SUFOekIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsc0RBQW9DO1FBRXBDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPOztLQUNqRCxDQUFDO0lBV2EsV0FBQSxRQUFRLEVBQUUsQ0FBQTtxQ0FBc0IsVUFBVTtHQVY1QyxhQUFhLENBbUN6QjtTQW5DWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb2xvclR5cGUsIEljb25UeXBlfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZXMnO1xuaW1wb3J0IHtBdHRyaWJ1dGVIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9hdHRyaWJ1dGUtaGVscGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaWNvbi5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGljb246IEljb25UeXBlO1xuICBASW5wdXQoKSBzaXplOiAwfDF8MnwzfDR8NSA9IDA7XG4gIEBJbnB1dCgpIGNvbG9yOiBDb2xvclR5cGU7XG5cbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcblxuICBlbGVtZW50Q2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBjbGFzc09ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgbWFpbkVsZW1lbnQ6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBjb25zdCBzaXplQ2xhc3MgPSB0aGlzLnNpemUgPT09IDAgPyAnJyA6IHRoaXMuc2l6ZSA9PT0gMSA/ICcgbWlmLWxnJyA6ICcgbWlmLScgKyB0aGlzLnNpemUgKyAneCc7XG4gICAgdGhpcy5lbGVtZW50Q2xhc3MgPSBgJHt0aGlzLmNsYXNzID8gdGhpcy5jbGFzcyArICcgJyA6ICcnfW1pZi0ke3RoaXMuaWNvbn0ke3NpemVDbGFzc30ke3RoaXMuY29sb3IgPyAnIGZnLScgKyB0aGlzLmNvbG9yIDogJyd9YDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NPYnNlcnZlciA9IEF0dHJpYnV0ZUhlbHBlci5jcmVhdGVPYnNlcnZlcih0aGlzLm1haW5FbGVtZW50LCAobmV3Q2xhc3Nlcywgb2xkQ2xhc3NlcykgPT4ge1xuICAgICAgdGhpcy5jbGFzcyA9IG5ld0NsYXNzZXMuam9pbignICcpO1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYXNzT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuY2xhc3NPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=