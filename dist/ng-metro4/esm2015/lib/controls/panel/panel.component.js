import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
let PanelComponent = class PanelComponent {
    constructor() { }
    createElement() {
        asapScheduler.schedule(() => {
            const originalElement = $(this.panel.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.children().appendTo(originalElement);
                this.clonedElement.parent().remove();
            }
            this.clonedElement = originalElement.clone();
            originalElement.children().appendTo(this.clonedElement);
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.panelObj = this.clonedElement.panel({
                customButtons: this.customButtons
            }).data('panel');
        });
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
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
export { PanelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFVeEQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztJQW9CekIsZ0JBQWdCLENBQUM7SUFFakIsYUFBYTtRQUNYLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQzFCLE1BQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN0QztZQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hELFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXBELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTthQUNsQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNGLENBQUE7QUFqRFU7SUFBUixLQUFLLEVBQUU7OzZDQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7OzhDQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFOzs2Q0FBZTtBQUNGO0lBQXBCLEtBQUssQ0FBQyxZQUFZLENBQUM7O2lEQUFtQjtBQUM5QjtJQUFSLEtBQUssRUFBRTs7bURBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFOztpREFBb0I7QUFDSDtJQUF4QixLQUFLLENBQUMsZ0JBQWdCLENBQUM7O3FEQUFpRTtBQUVyRTtJQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOztnREFBa0I7QUFDakI7SUFBbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7Z0RBQWtCO0FBQ1Q7SUFBM0IsS0FBSyxDQUFDLG1CQUFtQixDQUFDOzt1REFBeUI7QUFDM0I7SUFBeEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztvREFBc0I7QUFDeEI7SUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7a0RBQW9CO0FBQ1g7SUFBN0IsS0FBSyxDQUFDLHFCQUFxQixDQUFDOzt5REFBMkI7QUFFbEI7SUFBckMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBUSxVQUFVOzZDQUFDO0FBaEI3QyxjQUFjO0lBTjFCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLHlsQkFBcUM7UUFFckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7O0dBQ1csY0FBYyxDQWtEMUI7U0FsRFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtcGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYW5lbC5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCd0aXRsZS1pY29uJykgdGl0bGVJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbGxhcHNpYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBjb2xsYXBzZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgnY3VzdG9tLWJ1dHRvbnMnKSBjdXN0b21CdXR0b25zOiB7IGh0bWw6IHN0cmluZywgY2xzOiBzdHJpbmcsIG9uY2xpY2s6IHN0cmluZyB9W107XG5cbiAgQElucHV0KCdjbHMtcGFuZWwnKSBjbHNQYW5lbDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy10aXRsZScpIGNsc1RpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXRpdGxlLWNhcHRpb24nKSBjbHNUaXRsZUNhcHRpb246IHN0cmluZztcbiAgQElucHV0KCdjbHMtdGl0bGUtaWNvbicpIGNsc1RpdGxlSWNvbjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jb250ZW50JykgY2xzQ29udGVudDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jb2xsYXBzZS10b2dnbGUnKSBjbHNDb2xsYXBzZVRvZ2dsZTogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ3BhbmVsJywgeyBzdGF0aWM6IHRydWUgfSkgcGFuZWw6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2xvbmVkRWxlbWVudDogYW55O1xuICBwYW5lbE9iajogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5wYW5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LmNoaWxkcmVuKCkuYXBwZW5kVG8ob3JpZ2luYWxFbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5jaGlsZHJlbigpLmFwcGVuZFRvKHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBPYmplY3RIZWxwZXIuc2hvdyh0aGlzLmNsb25lZEVsZW1lbnQpO1xuICAgICAgb3JpZ2luYWxFbGVtZW50LnBhcmVudCgpLmFwcGVuZCh0aGlzLmNsb25lZEVsZW1lbnQpO1xuXG4gICAgICB0aGlzLnBhbmVsT2JqID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhbmVsKHtcbiAgICAgICAgY3VzdG9tQnV0dG9uczogdGhpcy5jdXN0b21CdXR0b25zXG4gICAgICB9KS5kYXRhKCdwYW5lbCcpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cbn1cbiJdfQ==