import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
let GravatarComponent = class GravatarComponent {
    constructor() {
        this.size = 80;
    }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], GravatarComponent.prototype, "email", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GravatarComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], GravatarComponent.prototype, "default", void 0);
GravatarComponent = __decorate([
    Component({
        selector: 'm4-gravatar',
        template: "<img data-role=\"gravatar\"\n     [attr.data-email]=\"email\"\n     [attr.data-size]=\"size\"\n     [attr.data-default]=\"default\">\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], GravatarComponent);
export { GravatarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL2dyYXZhdGFyL2dyYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFXaEYsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFLNUI7UUFIUyxTQUFJLEdBQUcsRUFBRSxDQUFDO0lBR0gsQ0FBQztJQUVqQixRQUFRO0lBRVIsQ0FBQztDQUVGLENBQUE7QUFWVTtJQUFSLEtBQUssRUFBRTs7Z0RBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTs7K0NBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTs7a0RBQXNDO0FBSG5DLGlCQUFpQjtJQU43QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixrSkFBd0M7UUFFeEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7O0dBQ1csaUJBQWlCLENBVzdCO1NBWFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7R3JhdmF0YXJEZWZhdWx0c1R5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtZ3JhdmF0YXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ3JhdmF0YXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncmF2YXRhci5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEdyYXZhdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZW1haWw6IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZSA9IDgwO1xuICBASW5wdXQoKSBkZWZhdWx0OiBHcmF2YXRhckRlZmF1bHRzVHlwZXxzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbn1cbiJdfQ==