import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { LoadingDirective } from './loading.directive';
let NotLoadingDisplayDirective = class NotLoadingDisplayDirective {
    constructor(element, templateRef, viewContainer, loadingDirective) {
        this.element = element;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.loadingDirective = loadingDirective;
        this.subscription = this.loadingDirective.stateChange.subscribe((loading) => {
            this.loadingState = loading;
            this.updateView();
        });
    }
    set notLoading(val) {
        this.conditionValue = val;
        this.updateView();
    }
    updateView() {
        this.viewContainer.clear();
        if (!this.loadingState || this.conditionValue) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
NotLoadingDisplayDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: LoadingDirective }
];
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NotLoadingDisplayDirective.prototype, "notLoading", null);
NotLoadingDisplayDirective = __decorate([
    Directive({
        selector: '[notLoading]'
    }),
    __metadata("design:paramtypes", [ElementRef,
        TemplateRef,
        ViewContainerRef,
        LoadingDirective])
], NotLoadingDisplayDirective);
export { NotLoadingDisplayDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWxvYWRpbmctZGlzcGxheS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvYmFzZS9sb2FkaW5nL25vdC1sb2FkaW5nLWRpc3BsYXkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU1yRCxJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQVdyQyxZQUFvQixPQUFtQixFQUNuQixXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBa0M7UUFIbEMsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUNuRixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBYkQsSUFBSSxVQUFVLENBQUMsR0FBRztRQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQVlPLFVBQVU7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7Q0FDRixDQUFBOztZQXZCOEIsVUFBVTtZQUNOLFdBQVc7WUFDVCxnQkFBZ0I7WUFDYixnQkFBZ0I7O0FBUnREO0lBREMsS0FBSyxFQUFFOzs7NERBSVA7QUFUVSwwQkFBMEI7SUFIdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7S0FDekIsQ0FBQztxQ0FZNkIsVUFBVTtRQUNOLFdBQVc7UUFDVCxnQkFBZ0I7UUFDYixnQkFBZ0I7R0FkM0MsMEJBQTBCLENBa0N0QztTQWxDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMb2FkaW5nRGlyZWN0aXZlfSBmcm9tICcuL2xvYWRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdExvYWRpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBOb3RMb2FkaW5nRGlzcGxheURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgbG9hZGluZ1N0YXRlOiBib29sZWFuO1xuICBwcml2YXRlIGNvbmRpdGlvblZhbHVlOiBhbnk7XG5cbiAgQElucHV0KClcbiAgc2V0IG5vdExvYWRpbmcodmFsKSB7XG4gICAgdGhpcy5jb25kaXRpb25WYWx1ZSA9IHZhbDtcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvYWRpbmdEaXJlY3RpdmU6IExvYWRpbmdEaXJlY3RpdmUpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubG9hZGluZ0RpcmVjdGl2ZS5zdGF0ZUNoYW5nZS5zdWJzY3JpYmUoKGxvYWRpbmc6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMubG9hZGluZ1N0YXRlID0gbG9hZGluZztcbiAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWaWV3KCkge1xuICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuXG4gICAgaWYgKCF0aGlzLmxvYWRpbmdTdGF0ZSB8fCB0aGlzLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==