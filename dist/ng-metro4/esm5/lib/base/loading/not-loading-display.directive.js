import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { LoadingDirective } from './loading.directive';
var NotLoadingDisplayDirective = /** @class */ (function () {
    function NotLoadingDisplayDirective(element, templateRef, viewContainer, loadingDirective) {
        var _this = this;
        this.element = element;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.loadingDirective = loadingDirective;
        this.subscription = this.loadingDirective.stateChange.subscribe(function (loading) {
            _this.loadingState = loading;
            _this.updateView();
        });
    }
    Object.defineProperty(NotLoadingDisplayDirective.prototype, "notLoading", {
        set: function (val) {
            this.conditionValue = val;
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    NotLoadingDisplayDirective.prototype.updateView = function () {
        this.viewContainer.clear();
        if (!this.loadingState || this.conditionValue) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    };
    NotLoadingDisplayDirective.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    NotLoadingDisplayDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: LoadingDirective }
    ]; };
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
    return NotLoadingDisplayDirective;
}());
export { NotLoadingDisplayDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWxvYWRpbmctZGlzcGxheS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvYmFzZS9sb2FkaW5nL25vdC1sb2FkaW5nLWRpc3BsYXkuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQU1yRDtJQVdFLG9DQUFvQixPQUFtQixFQUNuQixXQUE2QixFQUM3QixhQUErQixFQUMvQixnQkFBa0M7UUFIdEQsaUJBUUM7UUFSbUIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDcEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFDLE9BQWdCO1lBQy9FLEtBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFiRCxzQkFBSSxrREFBVTthQUFkLFVBQWUsR0FBRztZQUNoQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFZTywrQ0FBVSxHQUFsQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkF0QjRCLFVBQVU7Z0JBQ04sV0FBVztnQkFDVCxnQkFBZ0I7Z0JBQ2IsZ0JBQWdCOztJQVJ0RDtRQURDLEtBQUssRUFBRTs7O2dFQUlQO0lBVFUsMEJBQTBCO1FBSHRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1NBQ3pCLENBQUM7eUNBWTZCLFVBQVU7WUFDTixXQUFXO1lBQ1QsZ0JBQWdCO1lBQ2IsZ0JBQWdCO09BZDNDLDBCQUEwQixDQWtDdEM7SUFBRCxpQ0FBQztDQUFBLEFBbENELElBa0NDO1NBbENZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0xvYWRpbmdEaXJlY3RpdmV9IGZyb20gJy4vbG9hZGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm90TG9hZGluZ10nXG59KVxuZXhwb3J0IGNsYXNzIE5vdExvYWRpbmdEaXNwbGF5RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBsb2FkaW5nU3RhdGU6IGJvb2xlYW47XG4gIHByaXZhdGUgY29uZGl0aW9uVmFsdWU6IGFueTtcblxuICBASW5wdXQoKVxuICBzZXQgbm90TG9hZGluZyh2YWwpIHtcbiAgICB0aGlzLmNvbmRpdGlvblZhbHVlID0gdmFsO1xuICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgICAgICAgICAgICBwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9hZGluZ0RpcmVjdGl2ZTogTG9hZGluZ0RpcmVjdGl2ZSkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5sb2FkaW5nRGlyZWN0aXZlLnN0YXRlQ2hhbmdlLnN1YnNjcmliZSgobG9hZGluZzogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nU3RhdGUgPSBsb2FkaW5nO1xuICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZpZXcoKSB7XG4gICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG5cbiAgICBpZiAoIXRoaXMubG9hZGluZ1N0YXRlIHx8IHRoaXMuY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19