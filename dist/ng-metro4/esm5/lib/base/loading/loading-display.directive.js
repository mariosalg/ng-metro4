import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { LoadingDirective } from './loading.directive';
var LoadingDisplayDirective = /** @class */ (function () {
    function LoadingDisplayDirective(element, templateRef, viewContainer, loadingDirective) {
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
    Object.defineProperty(LoadingDisplayDirective.prototype, "loading", {
        set: function (val) {
            this.conditionValue = val;
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    LoadingDisplayDirective.prototype.updateView = function () {
        this.viewContainer.clear();
        if (this.loadingState || this.conditionValue) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    };
    LoadingDisplayDirective.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    LoadingDisplayDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TemplateRef },
        { type: ViewContainerRef },
        { type: LoadingDirective }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LoadingDisplayDirective.prototype, "loading", null);
    LoadingDisplayDirective = __decorate([
        Directive({
            selector: '[loading]'
        }),
        __metadata("design:paramtypes", [ElementRef,
            TemplateRef,
            ViewContainerRef,
            LoadingDirective])
    ], LoadingDisplayDirective);
    return LoadingDisplayDirective;
}());
export { LoadingDisplayDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1kaXNwbGF5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2xvYWRpbmcvbG9hZGluZy1kaXNwbGF5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFNckQ7SUFXRSxpQ0FBb0IsT0FBbUIsRUFDbkIsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWtDO1FBSHRELGlCQVFDO1FBUm1CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFnQjtZQUMvRSxLQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztZQUM1QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBYkQsc0JBQUksNENBQU87YUFBWCxVQUFZLEdBQUc7WUFDYixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFZTyw0Q0FBVSxHQUFsQjtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFM0IsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7Z0JBdEI0QixVQUFVO2dCQUNOLFdBQVc7Z0JBQ1QsZ0JBQWdCO2dCQUNiLGdCQUFnQjs7SUFSdEQ7UUFEQyxLQUFLLEVBQUU7OzswREFJUDtJQVRVLHVCQUF1QjtRQUhuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztTQUN0QixDQUFDO3lDQVk2QixVQUFVO1lBQ04sV0FBVztZQUNULGdCQUFnQjtZQUNiLGdCQUFnQjtPQWQzQyx1QkFBdUIsQ0FrQ25DO0lBQUQsOEJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWxDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtMb2FkaW5nRGlyZWN0aXZlfSBmcm9tICcuL2xvYWRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7U3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2xvYWRpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nRGlzcGxheURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgbG9hZGluZ1N0YXRlOiBib29sZWFuO1xuICBwcml2YXRlIGNvbmRpdGlvblZhbHVlOiBhbnk7XG5cbiAgQElucHV0KClcbiAgc2V0IGxvYWRpbmcodmFsKSB7XG4gICAgdGhpcy5jb25kaXRpb25WYWx1ZSA9IHZhbDtcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvYWRpbmdEaXJlY3RpdmU6IExvYWRpbmdEaXJlY3RpdmUpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMubG9hZGluZ0RpcmVjdGl2ZS5zdGF0ZUNoYW5nZS5zdWJzY3JpYmUoKGxvYWRpbmc6IGJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMubG9hZGluZ1N0YXRlID0gbG9hZGluZztcbiAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWaWV3KCkge1xuICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuXG4gICAgaWYgKHRoaXMubG9hZGluZ1N0YXRlIHx8IHRoaXMuY29uZGl0aW9uVmFsdWUpIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19