import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.createElement = function () {
        var _this = this;
        asapScheduler.schedule(function () {
            var originalElement = $(_this.panel.nativeElement);
            ObjectHelper.hide(originalElement);
            if (_this.clonedElement) {
                _this.clonedElement.children().appendTo(originalElement);
                _this.clonedElement.parent().remove();
            }
            _this.clonedElement = originalElement.clone();
            originalElement.children().appendTo(_this.clonedElement);
            ObjectHelper.show(_this.clonedElement);
            originalElement.parent().append(_this.clonedElement);
            _this.panelObj = _this.clonedElement.panel({
                customButtons: _this.customButtons
            }).data('panel');
        });
    };
    PanelComponent.prototype.ngOnInit = function () {
        this.createElement();
    };
    PanelComponent.prototype.ngOnChanges = function (changes) {
        this.createElement();
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PanelComponent.prototype, "width", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], PanelComponent.prototype, "height", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PanelComponent.prototype, "title", void 0);
    __decorate([
        Input('title-icon'),
        __metadata("design:type", String)
    ], PanelComponent.prototype, "titleIcon", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PanelComponent.prototype, "collapsible", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PanelComponent.prototype, "collapsed", void 0);
    __decorate([
        Input('custom-buttons'),
        __metadata("design:type", Array)
    ], PanelComponent.prototype, "customButtons", void 0);
    __decorate([
        Input('cls-panel'),
        __metadata("design:type", String)
    ], PanelComponent.prototype, "clsPanel", void 0);
    __decorate([
        Input('cls-title'),
        __metadata("design:type", String)
    ], PanelComponent.prototype, "clsTitle", void 0);
    __decorate([
        Input('cls-title-caption'),
        __metadata("design:type", String)
    ], PanelComponent.prototype, "clsTitleCaption", void 0);
    __decorate([
        Input('cls-title-icon'),
        __metadata("design:type", String)
    ], PanelComponent.prototype, "clsTitleIcon", void 0);
    __decorate([
        Input('cls-content'),
        __metadata("design:type", String)
    ], PanelComponent.prototype, "clsContent", void 0);
    __decorate([
        Input('cls-collapse-toggle'),
        __metadata("design:type", String)
    ], PanelComponent.prototype, "clsCollapseToggle", void 0);
    __decorate([
        ViewChild('panel', { static: true }),
        __metadata("design:type", ElementRef)
    ], PanelComponent.prototype, "panel", void 0);
    PanelComponent = __decorate([
        Component({
            selector: 'm4-panel',
            template: "<div #panel\n     [attr.data-width]=\"width\"\n     [attr.data-height]=\"height\"\n     [attr.data-title-caption]=\"title\"\n     [attr.data-title-icon]=\"titleIcon\"\n     [attr.data-collapsible]=\"collapsible\"\n     [attr.data-collapsed]=\"collapsed\"\n\n     [attr.data-cls-panel]=\"clsPanel\"\n     [attr.data-cls-title]=\"clsTitle\"\n     [attr.data-cls-title-caption]=\"clsTitleCaption\"\n     [attr.data-cls-title-icon]=\"clsTitleIcon\"\n     [attr.data-cls-content]=\"clsContent\"\n     [attr.data-cls-collapse-toggle]=\"clsCollapseToggle\">\n  <ng-content></ng-content>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());
export { PanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFVeEQ7SUFvQkU7SUFBZ0IsQ0FBQztJQUVqQixzQ0FBYSxHQUFiO1FBQUEsaUJBbUJDO1FBbEJDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDckIsSUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuQyxJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN4RCxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3RDO1lBRUQsS0FBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEQsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFcEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztnQkFDdkMsYUFBYSxFQUFFLEtBQUksQ0FBQyxhQUFhO2FBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBaERRO1FBQVIsS0FBSyxFQUFFOztpREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOztrREFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTs7aURBQWU7SUFDRjtRQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDOztxREFBbUI7SUFDOUI7UUFBUixLQUFLLEVBQUU7O3VEQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTs7cURBQW9CO0lBQ0g7UUFBeEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDOzt5REFBaUU7SUFFckU7UUFBbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7b0RBQWtCO0lBQ2pCO1FBQW5CLEtBQUssQ0FBQyxXQUFXLENBQUM7O29EQUFrQjtJQUNUO1FBQTNCLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzs7MkRBQXlCO0lBQzNCO1FBQXhCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7d0RBQXNCO0lBQ3hCO1FBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7O3NEQUFvQjtJQUNYO1FBQTdCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7NkRBQTJCO0lBRWxCO1FBQXJDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQVEsVUFBVTtpREFBQztJQWhCN0MsY0FBYztRQU4xQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQix5bEJBQXFDO1lBRXJDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDOztPQUNXLGNBQWMsQ0FrRDFCO0lBQUQscUJBQUM7Q0FBQSxBQWxERCxJQWtEQztTQWxEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtPYmplY3RIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QtaGVscGVyJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtNC1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhbmVsLmNvbXBvbmVudC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoJ3RpdGxlLWljb24nKSB0aXRsZUljb246IHN0cmluZztcbiAgQElucHV0KCkgY29sbGFwc2libGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvbGxhcHNlZDogYm9vbGVhbjtcbiAgQElucHV0KCdjdXN0b20tYnV0dG9ucycpIGN1c3RvbUJ1dHRvbnM6IHsgaHRtbDogc3RyaW5nLCBjbHM6IHN0cmluZywgb25jbGljazogc3RyaW5nIH1bXTtcblxuICBASW5wdXQoJ2Nscy1wYW5lbCcpIGNsc1BhbmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXRpdGxlJykgY2xzVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCdjbHMtdGl0bGUtY2FwdGlvbicpIGNsc1RpdGxlQ2FwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy10aXRsZS1pY29uJykgY2xzVGl0bGVJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNvbnRlbnQnKSBjbHNDb250ZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNvbGxhcHNlLXRvZ2dsZScpIGNsc0NvbGxhcHNlVG9nZ2xlOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgncGFuZWwnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwYW5lbDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjbG9uZWRFbGVtZW50OiBhbnk7XG4gIHBhbmVsT2JqOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gJCh0aGlzLnBhbmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQuY2hpbGRyZW4oKS5hcHBlbmRUbyhvcmlnaW5hbEVsZW1lbnQpO1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgb3JpZ2luYWxFbGVtZW50LmNoaWxkcmVuKCkuYXBwZW5kVG8odGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG5cbiAgICAgIHRoaXMucGFuZWxPYmogPSB0aGlzLmNsb25lZEVsZW1lbnQucGFuZWwoe1xuICAgICAgICBjdXN0b21CdXR0b25zOiB0aGlzLmN1c3RvbUJ1dHRvbnNcbiAgICAgIH0pLmRhdGEoJ3BhbmVsJyk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxufVxuIl19