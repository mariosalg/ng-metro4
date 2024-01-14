import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { LoadingDirective } from './loading.directive';
let LoadingDisplayDirective = class LoadingDisplayDirective {
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
    set loading(val) {
        this.conditionValue = val;
        this.updateView();
    }
    updateView() {
        this.viewContainer.clear();
        if (this.loadingState || this.conditionValue) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
LoadingDisplayDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: LoadingDirective }
];
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
export { LoadingDisplayDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1kaXNwbGF5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2xvYWRpbmcvbG9hZGluZy1kaXNwbGF5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFNckQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFXbEMsWUFBb0IsT0FBbUIsRUFDbkIsV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsZ0JBQWtDO1FBSGxDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDbkYsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWJELElBQUksT0FBTyxDQUFDLEdBQUc7UUFDYixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQVlPLFVBQVU7UUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUzQixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUF2QjhCLFVBQVU7WUFDTixXQUFXO1lBQ1QsZ0JBQWdCO1lBQ2IsZ0JBQWdCOztBQVJ0RDtJQURDLEtBQUssRUFBRTs7O3NEQUlQO0FBVFUsdUJBQXVCO0lBSG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO0tBQ3RCLENBQUM7cUNBWTZCLFVBQVU7UUFDTixXQUFXO1FBQ1QsZ0JBQWdCO1FBQ2IsZ0JBQWdCO0dBZDNDLHVCQUF1QixDQWtDbkM7U0FsQ1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TG9hZGluZ0RpcmVjdGl2ZX0gZnJvbSAnLi9sb2FkaW5nLmRpcmVjdGl2ZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tsb2FkaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0Rpc3BsYXlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGxvYWRpbmdTdGF0ZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBjb25kaXRpb25WYWx1ZTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsb2FkaW5nKHZhbCkge1xuICAgIHRoaXMuY29uZGl0aW9uVmFsdWUgPSB2YWw7XG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgICAgICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBsb2FkaW5nRGlyZWN0aXZlOiBMb2FkaW5nRGlyZWN0aXZlKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmxvYWRpbmdEaXJlY3RpdmUuc3RhdGVDaGFuZ2Uuc3Vic2NyaWJlKChsb2FkaW5nOiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmxvYWRpbmdTdGF0ZSA9IGxvYWRpbmc7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmlldygpIHtcbiAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcblxuICAgIGlmICh0aGlzLmxvYWRpbmdTdGF0ZSB8fCB0aGlzLmNvbmRpdGlvblZhbHVlKSB7XG4gICAgICB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==