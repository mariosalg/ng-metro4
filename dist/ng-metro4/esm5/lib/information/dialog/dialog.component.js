import { __decorate, __metadata } from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, take } from 'rxjs/operators';
var DialogComponent = /** @class */ (function () {
    function DialogComponent(element) {
        this.element = element;
        this.isOpen = false;
        this.closeEvent = new EventEmitter();
        this.closeSubject$ = new Subject();
    }
    DialogComponent.prototype.open = function () {
        var _this = this;
        this.dialogObj.open();
        return this.closeSubject$.pipe(take(1), finalize(function () { return _this.close(); }));
    };
    DialogComponent.prototype.close = function () {
        if (this.dialogObj) {
            this.dialogObj.close();
        }
    };
    DialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var dialogOptions = {
            width: this.width,
            show: this.isOpen,
            overlay: this.overlay,
            overlayClickClose: this.overlayClickClose
        };
        if (this.overlayColor) {
            dialogOptions.overlayColor = this.overlayColor;
        }
        if (this.overlayAlpha) {
            dialogOptions.overlayAlpha = this.overlayAlpha;
        }
        this.dialogObj = $(this.dialog.nativeElement).dialog(dialogOptions).data('dialog');
        this.dialogObj.options.onClose = function () {
            _this.closeEvent.emit();
            _this.closeSubject$.next(_this.data);
        };
        this.observeClassValue();
    };
    DialogComponent.prototype.observeClassValue = function () {
        var _this = this;
        var classValueCallback = function () {
            var classValue = _this.element.nativeElement.getAttribute('class');
            _this.dialogObj.element.attr('class', (classValue ? classValue + ' ' : '') + "dialog");
        };
        this.classObserver = new MutationObserver(classValueCallback);
        this.classObserver.observe(this.element.nativeElement, {
            attributeFilter: ['class'],
            attributes: true
        });
        classValueCallback();
    };
    DialogComponent.prototype.ngOnChanges = function (changes) {
        if (this.dialogObj) {
            if (changes['isOpen']) {
                if (this.isOpen) {
                    this.open();
                }
                else {
                    this.close();
                }
            }
            if (changes['width']) {
                this.dialogObj.element.css('width', this.width + "px");
            }
            if (changes['overlay'] || changes['overlayColor'] || changes['overlayAlpha'] || changes['overlayClickClose']) {
                this.dialogObj.options.overlay = this.overlay;
                this.dialogObj.options.overlayColor = this.overlayColor;
                this.dialogObj.options.overlayAlpha = this.overlayAlpha;
                this.dialogObj.options.overlayClickClose = this.overlayClickClose;
            }
        }
    };
    DialogComponent.prototype.ngOnDestroy = function () {
        if (this.dialogObj) {
            this.close();
            this.dialogObj.element.remove();
        }
        if (this.classObserver) {
            this.classObserver.disconnect();
        }
    };
    DialogComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input('open'),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "isOpen", void 0);
    __decorate([
        Input('width'),
        __metadata("design:type", String)
    ], DialogComponent.prototype, "width", void 0);
    __decorate([
        Input('overlay'),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "overlay", void 0);
    __decorate([
        Input('overlay-color'),
        __metadata("design:type", String)
    ], DialogComponent.prototype, "overlayColor", void 0);
    __decorate([
        Input('overlay-alpha'),
        __metadata("design:type", String)
    ], DialogComponent.prototype, "overlayAlpha", void 0);
    __decorate([
        Input('overlay-click-close'),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "overlayClickClose", void 0);
    __decorate([
        Input('data'),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "data", void 0);
    __decorate([
        ViewChild('dialog', { static: true }),
        __metadata("design:type", ElementRef)
    ], DialogComponent.prototype, "dialog", void 0);
    __decorate([
        Output('close-event'),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "closeEvent", void 0);
    DialogComponent = __decorate([
        Component({
            selector: 'm4-dialog',
            template: "<div #dialog>\n  <div class=\"dialog-title\">\n    <ng-content select=\"[dialog-title]\"></ng-content>\n  </div>\n  <div class=\"dialog-content\">\n    <ng-content select=\"[dialog-content]\"></ng-content>\n  </div>\n  <div class=\"dialog-actions\">\n    <ng-content select=\"[dialog-actions]\"></ng-content>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [""]
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], DialogComponent);
    return DialogComponent;
}());
export { DialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9pbmZvcm1hdGlvbi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFBRSxZQUFZLEVBQ3hCLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUFFLE1BQU0sRUFDakIsYUFBYSxFQUNiLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFVOUM7SUFtQkUseUJBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFsQnhCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFVUCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUtyRCxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFHRCxDQUFDO0lBRXBDLDhCQUFJLEdBQVg7UUFBQSxpQkFHQztRQUZDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFBQSxpQkF1QkM7UUF0QkMsSUFBTSxhQUFhLEdBQVE7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUMxQyxDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLGFBQWEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNoRDtRQUVELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDaEQ7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHO1lBQy9CLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTywyQ0FBaUIsR0FBekI7UUFBQSxpQkFhQztRQVpDLElBQU0sa0JBQWtCLEdBQUc7WUFDekIsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBUSxDQUFDLENBQUM7UUFDdEYsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDckQsZUFBZSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQzFCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUVILGtCQUFrQixFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDZixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2I7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNkO2FBQ0Y7WUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBSyxJQUFJLENBQUMsS0FBSyxPQUFJLENBQUMsQ0FBQzthQUN4RDtZQUVELElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Z0JBQzVHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzthQUNuRTtTQUNGO0lBQ0gsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakM7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQXJGNEIsVUFBVTs7SUFsQnhCO1FBQWQsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7bURBQWdCO0lBQ2Q7UUFBZixLQUFLLENBQUMsT0FBTyxDQUFDOztrREFBZTtJQUNaO1FBQWpCLEtBQUssQ0FBQyxTQUFTLENBQUM7O29EQUFrQjtJQUNYO1FBQXZCLEtBQUssQ0FBQyxlQUFlLENBQUM7O3lEQUFzQjtJQUNyQjtRQUF2QixLQUFLLENBQUMsZUFBZSxDQUFDOzt5REFBc0I7SUFDZjtRQUE3QixLQUFLLENBQUMscUJBQXFCLENBQUM7OzhEQUE0QjtJQUUxQztRQUFkLEtBQUssQ0FBQyxNQUFNLENBQUM7O2lEQUFXO0lBRWM7UUFBdEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBaUIsVUFBVTttREFBQztJQUMzQztRQUF0QixNQUFNLENBQUMsYUFBYSxDQUFDOzt1REFBdUM7SUFYbEQsZUFBZTtRQU4zQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixvVkFBc0M7WUFFdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O1NBQ2hELENBQUM7eUNBb0I2QixVQUFVO09BbkI1QixlQUFlLENBeUczQjtJQUFELHNCQUFDO0NBQUEsQUF6R0QsSUF5R0M7U0F6R1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LCBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbmFsaXplLCB0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RpYWxvZy5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCdvcGVuJykgaXNPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nO1xuICBASW5wdXQoJ292ZXJsYXknKSBvdmVybGF5OiBib29sZWFuO1xuICBASW5wdXQoJ292ZXJsYXktY29sb3InKSBvdmVybGF5Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCdvdmVybGF5LWFscGhhJykgb3ZlcmxheUFscGhhOiBzdHJpbmc7XG4gIEBJbnB1dCgnb3ZlcmxheS1jbGljay1jbG9zZScpIG92ZXJsYXlDbGlja0Nsb3NlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueTtcblxuICBAVmlld0NoaWxkKCdkaWFsb2cnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGRpYWxvZzogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgnY2xvc2UtZXZlbnQnKSBjbG9zZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cbiAgZGlhbG9nT2JqOiBhbnk7XG5cbiAgcHJpdmF0ZSBjbG9zZVN1YmplY3QkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIGNsYXNzT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIHB1YmxpYyBvcGVuKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5kaWFsb2dPYmoub3BlbigpO1xuICAgIHJldHVybiB0aGlzLmNsb3NlU3ViamVjdCQucGlwZSh0YWtlKDEpLCBmaW5hbGl6ZSgoKSA9PiB0aGlzLmNsb3NlKCkpKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5kaWFsb2dPYmopIHtcbiAgICAgIHRoaXMuZGlhbG9nT2JqLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZ09wdGlvbnM6IGFueSA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgc2hvdzogdGhpcy5pc09wZW4sXG4gICAgICBvdmVybGF5OiB0aGlzLm92ZXJsYXksXG4gICAgICBvdmVybGF5Q2xpY2tDbG9zZTogdGhpcy5vdmVybGF5Q2xpY2tDbG9zZVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5vdmVybGF5Q29sb3IpIHtcbiAgICAgIGRpYWxvZ09wdGlvbnMub3ZlcmxheUNvbG9yID0gdGhpcy5vdmVybGF5Q29sb3I7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3ZlcmxheUFscGhhKSB7XG4gICAgICBkaWFsb2dPcHRpb25zLm92ZXJsYXlBbHBoYSA9IHRoaXMub3ZlcmxheUFscGhhO1xuICAgIH1cblxuICAgIHRoaXMuZGlhbG9nT2JqID0gJCh0aGlzLmRpYWxvZy5uYXRpdmVFbGVtZW50KS5kaWFsb2coZGlhbG9nT3B0aW9ucykuZGF0YSgnZGlhbG9nJyk7XG4gICAgdGhpcy5kaWFsb2dPYmoub3B0aW9ucy5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZUV2ZW50LmVtaXQoKTtcbiAgICAgIHRoaXMuY2xvc2VTdWJqZWN0JC5uZXh0KHRoaXMuZGF0YSk7XG4gICAgfTtcblxuICAgIHRoaXMub2JzZXJ2ZUNsYXNzVmFsdWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgb2JzZXJ2ZUNsYXNzVmFsdWUoKSB7XG4gICAgY29uc3QgY2xhc3NWYWx1ZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2xhc3NWYWx1ZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIHRoaXMuZGlhbG9nT2JqLmVsZW1lbnQuYXR0cignY2xhc3MnLCBgJHtjbGFzc1ZhbHVlID8gY2xhc3NWYWx1ZSArICcgJyA6ICcnfWRpYWxvZ2ApO1xuICAgIH07XG4gICAgdGhpcy5jbGFzc09ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2xhc3NWYWx1ZUNhbGxiYWNrKTtcblxuICAgIHRoaXMuY2xhc3NPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7XG4gICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnY2xhc3MnXSxcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWVcbiAgICB9KTtcblxuICAgIGNsYXNzVmFsdWVDYWxsYmFjaygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpYWxvZ09iaikge1xuICAgICAgaWYgKGNoYW5nZXNbJ2lzT3BlbiddKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlc1snd2lkdGgnXSkge1xuICAgICAgICB0aGlzLmRpYWxvZ09iai5lbGVtZW50LmNzcygnd2lkdGgnLCBgJHt0aGlzLndpZHRofXB4YCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VzWydvdmVybGF5J10gfHwgY2hhbmdlc1snb3ZlcmxheUNvbG9yJ10gfHwgY2hhbmdlc1snb3ZlcmxheUFscGhhJ10gfHwgY2hhbmdlc1snb3ZlcmxheUNsaWNrQ2xvc2UnXSkge1xuICAgICAgICB0aGlzLmRpYWxvZ09iai5vcHRpb25zLm92ZXJsYXkgPSB0aGlzLm92ZXJsYXk7XG4gICAgICAgIHRoaXMuZGlhbG9nT2JqLm9wdGlvbnMub3ZlcmxheUNvbG9yID0gdGhpcy5vdmVybGF5Q29sb3I7XG4gICAgICAgIHRoaXMuZGlhbG9nT2JqLm9wdGlvbnMub3ZlcmxheUFscGhhID0gdGhpcy5vdmVybGF5QWxwaGE7XG4gICAgICAgIHRoaXMuZGlhbG9nT2JqLm9wdGlvbnMub3ZlcmxheUNsaWNrQ2xvc2UgPSB0aGlzLm92ZXJsYXlDbGlja0Nsb3NlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpYWxvZ09iaikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgdGhpcy5kaWFsb2dPYmouZWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jbGFzc09ic2VydmVyKSB7XG4gICAgICB0aGlzLmNsYXNzT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfVxufVxuIl19