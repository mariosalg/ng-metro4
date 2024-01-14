import { __decorate, __metadata } from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var LetDirective = /** @class */ (function () {
    function LetDirective(vcRef, templateRef) {
        this.vcRef = vcRef;
        this.templateRef = templateRef;
        this.context = {};
    }
    Object.defineProperty(LetDirective.prototype, "m4Let", {
        set: function (context) {
            this.context.$implicit = this.context.ngVar = context;
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    LetDirective.prototype.updateView = function () {
        this.vcRef.clear();
        this.vcRef.createEmbeddedView(this.templateRef, this.context);
    };
    LetDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
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
    return LetDirective;
}());
export { LetDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2xldC9sZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNOUU7SUFVRSxzQkFBb0IsS0FBdUIsRUFBVSxXQUE2QjtRQUE5RCxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUYxRSxZQUFPLEdBQVEsRUFBRSxDQUFDO0lBRTJELENBQUM7SUFQdEYsc0JBQUksK0JBQUs7YUFBVCxVQUFVLE9BQVk7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ3RELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQU1ELGlDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Z0JBTDBCLGdCQUFnQjtnQkFBdUIsV0FBVzs7SUFQN0U7UUFEQyxLQUFLLEVBQUU7Ozs2Q0FJUDtJQU5VLFlBQVk7UUFKeEIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQzt5Q0FXMkIsZ0JBQWdCLEVBQXVCLFdBQVc7T0FWbEUsWUFBWSxDQWdCeEI7SUFBRCxtQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW200TGV0XScsXG4gIGV4cG9ydEFzOiAnbGV0J1xufSlcbmV4cG9ydCBjbGFzcyBMZXREaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgpXG4gIHNldCBtNExldChjb250ZXh0OiBhbnkpIHtcbiAgICB0aGlzLmNvbnRleHQuJGltcGxpY2l0ID0gdGhpcy5jb250ZXh0Lm5nVmFyID0gY29udGV4dDtcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29udGV4dDogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge31cblxuICB1cGRhdGVWaWV3KCkge1xuICAgIHRoaXMudmNSZWYuY2xlYXIoKTtcbiAgICB0aGlzLnZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmLCB0aGlzLmNvbnRleHQpO1xuICB9XG59XG4iXX0=