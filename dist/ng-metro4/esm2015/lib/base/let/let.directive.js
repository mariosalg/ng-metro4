import { __decorate, __metadata } from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
let LetDirective = class LetDirective {
    constructor(vcRef, templateRef) {
        this.vcRef = vcRef;
        this.templateRef = templateRef;
        this.context = {};
    }
    set m4Let(context) {
        this.context.$implicit = this.context.ngVar = context;
        this.updateView();
    }
    updateView() {
        this.vcRef.clear();
        this.vcRef.createEmbeddedView(this.templateRef, this.context);
    }
};
LetDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LetDirective.prototype, "m4Let", null);
LetDirective = __decorate([
    Directive({
        selector: '[m4Let]',
        exportAs: 'let'
    }),
    __metadata("design:paramtypes", [ViewContainerRef, TemplateRef])
], LetDirective);
export { LetDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2xldC9sZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNOUUsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQVV2QixZQUFvQixLQUF1QixFQUFVLFdBQTZCO1FBQTlELFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBRjFFLFlBQU8sR0FBUSxFQUFFLENBQUM7SUFFMkQsQ0FBQztJQVB0RixJQUFJLEtBQUssQ0FBQyxPQUFZO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUN0RCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQU1ELFVBQVU7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGLENBQUE7O1lBTjRCLGdCQUFnQjtZQUF1QixXQUFXOztBQVA3RTtJQURDLEtBQUssRUFBRTs7O3lDQUlQO0FBTlUsWUFBWTtJQUp4QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFDO3FDQVcyQixnQkFBZ0IsRUFBdUIsV0FBVztHQVZsRSxZQUFZLENBZ0J4QjtTQWhCWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttNExldF0nLFxuICBleHBvcnRBczogJ2xldCdcbn0pXG5leHBvcnQgY2xhc3MgTGV0RGlyZWN0aXZlIHtcblxuICBASW5wdXQoKVxuICBzZXQgbTRMZXQoY29udGV4dDogYW55KSB7XG4gICAgdGhpcy5jb250ZXh0LiRpbXBsaWNpdCA9IHRoaXMuY29udGV4dC5uZ1ZhciA9IGNvbnRleHQ7XG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBwcml2YXRlIGNvbnRleHQ6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHt9XG5cbiAgdXBkYXRlVmlldygpIHtcbiAgICB0aGlzLnZjUmVmLmNsZWFyKCk7XG4gICAgdGhpcy52Y1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZiwgdGhpcy5jb250ZXh0KTtcbiAgfVxufVxuIl19