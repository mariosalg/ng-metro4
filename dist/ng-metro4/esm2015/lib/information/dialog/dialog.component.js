import { __decorate, __metadata } from "tslib";
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, take } from 'rxjs/operators';
let DialogComponent = class DialogComponent {
    constructor(element) {
        this.element = element;
        this.isOpen = false;
        this.closeEvent = new EventEmitter();
        this.closeSubject$ = new Subject();
    }
    open() {
        this.dialogObj.open();
        return this.closeSubject$.pipe(take(1), finalize(() => this.close()));
    }
    close() {
        if (this.dialogObj) {
            this.dialogObj.close();
        }
    }
    ngAfterViewInit() {
        const dialogOptions = {
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
        this.dialogObj.options.onClose = () => {
            this.closeEvent.emit();
            this.closeSubject$.next(this.data);
        };
        this.observeClassValue();
    }
    observeClassValue() {
        const classValueCallback = () => {
            const classValue = this.element.nativeElement.getAttribute('class');
            this.dialogObj.element.attr('class', `${classValue ? classValue + ' ' : ''}dialog`);
        };
        this.classObserver = new MutationObserver(classValueCallback);
        this.classObserver.observe(this.element.nativeElement, {
            attributeFilter: ['class'],
            attributes: true
        });
        classValueCallback();
    }
    ngOnChanges(changes) {
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
                this.dialogObj.element.css('width', `${this.width}px`);
            }
            if (changes['overlay'] || changes['overlayColor'] || changes['overlayAlpha'] || changes['overlayClickClose']) {
                this.dialogObj.options.overlay = this.overlay;
                this.dialogObj.options.overlayColor = this.overlayColor;
                this.dialogObj.options.overlayAlpha = this.overlayAlpha;
                this.dialogObj.options.overlayClickClose = this.overlayClickClose;
            }
        }
    }
    ngOnDestroy() {
        if (this.dialogObj) {
            this.close();
            this.dialogObj.element.remove();
        }
        if (this.classObserver) {
            this.classObserver.disconnect();
        }
    }
};
DialogComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
export { DialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9pbmZvcm1hdGlvbi9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFBRSxZQUFZLEVBQ3hCLEtBQUssRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUFFLE1BQU0sRUFDakIsYUFBYSxFQUNiLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWEsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFVOUMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQW1CMUIsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQWxCeEIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQVVQLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBS3JELGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUdELENBQUM7SUFFcEMsSUFBSTtRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxhQUFhLEdBQVE7WUFDekIs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Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZmluYWxpemUsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtNC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGlhbG9nLmNvbXBvbmVudC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoJ29wZW4nKSBpc09wZW4gPSBmYWxzZTtcbiAgQElucHV0KCd3aWR0aCcpIHdpZHRoOiBzdHJpbmc7XG4gIEBJbnB1dCgnb3ZlcmxheScpIG92ZXJsYXk6IGJvb2xlYW47XG4gIEBJbnB1dCgnb3ZlcmxheS1jb2xvcicpIG92ZXJsYXlDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoJ292ZXJsYXktYWxwaGEnKSBvdmVybGF5QWxwaGE6IHN0cmluZztcbiAgQElucHV0KCdvdmVybGF5LWNsaWNrLWNsb3NlJykgb3ZlcmxheUNsaWNrQ2xvc2U6IGJvb2xlYW47XG5cbiAgQElucHV0KCdkYXRhJykgZGF0YTogYW55O1xuXG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZycsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgZGlhbG9nOiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KCdjbG9zZS1ldmVudCcpIGNsb3NlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblxuICBkaWFsb2dPYmo6IGFueTtcblxuICBwcml2YXRlIGNsb3NlU3ViamVjdCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgY2xhc3NPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgcHVibGljIG9wZW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLmRpYWxvZ09iai5vcGVuKCk7XG4gICAgcmV0dXJuIHRoaXMuY2xvc2VTdWJqZWN0JC5waXBlKHRha2UoMSksIGZpbmFsaXplKCgpID0+IHRoaXMuY2xvc2UoKSkpO1xuICB9XG5cbiAgcHVibGljIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLmRpYWxvZ09iaikge1xuICAgICAgdGhpcy5kaWFsb2dPYmouY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nT3B0aW9uczogYW55ID0ge1xuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBzaG93OiB0aGlzLmlzT3BlbixcbiAgICAgIG92ZXJsYXk6IHRoaXMub3ZlcmxheSxcbiAgICAgIG92ZXJsYXlDbGlja0Nsb3NlOiB0aGlzLm92ZXJsYXlDbGlja0Nsb3NlXG4gICAgfTtcblxuICAgIGlmICh0aGlzLm92ZXJsYXlDb2xvcikge1xuICAgICAgZGlhbG9nT3B0aW9ucy5vdmVybGF5Q29sb3IgPSB0aGlzLm92ZXJsYXlDb2xvcjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vdmVybGF5QWxwaGEpIHtcbiAgICAgIGRpYWxvZ09wdGlvbnMub3ZlcmxheUFscGhhID0gdGhpcy5vdmVybGF5QWxwaGE7XG4gICAgfVxuXG4gICAgdGhpcy5kaWFsb2dPYmogPSAkKHRoaXMuZGlhbG9nLm5hdGl2ZUVsZW1lbnQpLmRpYWxvZyhkaWFsb2dPcHRpb25zKS5kYXRhKCdkaWFsb2cnKTtcbiAgICB0aGlzLmRpYWxvZ09iai5vcHRpb25zLm9uQ2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlRXZlbnQuZW1pdCgpO1xuICAgICAgdGhpcy5jbG9zZVN1YmplY3QkLm5leHQodGhpcy5kYXRhKTtcbiAgICB9O1xuXG4gICAgdGhpcy5vYnNlcnZlQ2xhc3NWYWx1ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBvYnNlcnZlQ2xhc3NWYWx1ZSgpIHtcbiAgICBjb25zdCBjbGFzc1ZhbHVlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjbGFzc1ZhbHVlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgdGhpcy5kaWFsb2dPYmouZWxlbWVudC5hdHRyKCdjbGFzcycsIGAke2NsYXNzVmFsdWUgPyBjbGFzc1ZhbHVlICsgJyAnIDogJyd9ZGlhbG9nYCk7XG4gICAgfTtcbiAgICB0aGlzLmNsYXNzT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjbGFzc1ZhbHVlQ2FsbGJhY2spO1xuXG4gICAgdGhpcy5jbGFzc09ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWydjbGFzcyddLFxuICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgIH0pO1xuXG4gICAgY2xhc3NWYWx1ZUNhbGxiYWNrKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlhbG9nT2JqKSB7XG4gICAgICBpZiAoY2hhbmdlc1snaXNPcGVuJ10pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VzWyd3aWR0aCddKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nT2JqLmVsZW1lbnQuY3NzKCd3aWR0aCcsIGAke3RoaXMud2lkdGh9cHhgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZXNbJ292ZXJsYXknXSB8fCBjaGFuZ2VzWydvdmVybGF5Q29sb3InXSB8fCBjaGFuZ2VzWydvdmVybGF5QWxwaGEnXSB8fCBjaGFuZ2VzWydvdmVybGF5Q2xpY2tDbG9zZSddKSB7XG4gICAgICAgIHRoaXMuZGlhbG9nT2JqLm9wdGlvbnMub3ZlcmxheSA9IHRoaXMub3ZlcmxheTtcbiAgICAgICAgdGhpcy5kaWFsb2dPYmoub3B0aW9ucy5vdmVybGF5Q29sb3IgPSB0aGlzLm92ZXJsYXlDb2xvcjtcbiAgICAgICAgdGhpcy5kaWFsb2dPYmoub3B0aW9ucy5vdmVybGF5QWxwaGEgPSB0aGlzLm92ZXJsYXlBbHBoYTtcbiAgICAgICAgdGhpcy5kaWFsb2dPYmoub3B0aW9ucy5vdmVybGF5Q2xpY2tDbG9zZSA9IHRoaXMub3ZlcmxheUNsaWNrQ2xvc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGlhbG9nT2JqKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB0aGlzLmRpYWxvZ09iai5lbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNsYXNzT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuY2xhc3NPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=