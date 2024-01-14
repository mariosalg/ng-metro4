import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
let ButtonDirective = class ButtonDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.oldClasses = [];
        this.jElement = $(this.element.nativeElement);
    }
    createElement() {
        if (!this.type) {
            this.type = 'button';
        }
        const buttonClass = this.specialBtn === 'command' ? 'command-button' :
            this.specialBtn === 'image' ? 'image-button' :
                this.specialBtn === 'shortcut' ? 'shortcut' :
                    this.specialBtn === 'ribbon' ? 'ribbon-button' :
                        this.specialBtn === 'action' || this.specialBtn === 'multi-action' ? 'action-button' : 'button';
        const newClasses = [buttonClass];
        if (this.btnStyle) {
            newClasses.push(this.btnStyle);
        }
        if (this.outline) {
            newClasses.push('outline');
        }
        if (this.size) {
            newClasses.push(this.size);
        }
        if (this.rounded) {
            newClasses.push('rounded');
        }
        if (this.shape) {
            newClasses.push(this.shape);
        }
        if (this.shadow) {
            newClasses.push('drop-shadow');
        }
        if (this.flat) {
            newClasses.push('flat-button');
        }
        this.oldClasses.forEach(c => {
            this.jElement.removeClass(c);
        });
        newClasses.forEach(c => {
            this.jElement.addClass(c);
        });
        this.oldClasses = newClasses;
    }
    clickEvent() {
        if (this.specialBtn === 'multi-action') {
            this.jElement.toggleClass('active');
        }
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
};
ButtonDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input('btn-style'),
    __metadata("design:type", String)
], ButtonDirective.prototype, "btnStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ButtonDirective.prototype, "outline", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonDirective.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ButtonDirective.prototype, "rounded", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonDirective.prototype, "shape", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ButtonDirective.prototype, "shadow", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ButtonDirective.prototype, "flat", void 0);
__decorate([
    Input('special-btn'),
    __metadata("design:type", String)
], ButtonDirective.prototype, "specialBtn", void 0);
__decorate([
    Input(), HostBinding('type'),
    __metadata("design:type", Object)
], ButtonDirective.prototype, "type", void 0);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ButtonDirective.prototype, "clickEvent", null);
ButtonDirective = __decorate([
    Directive({
        selector: 'button[m4-button]',
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], ButtonDirective);
export { ButtonDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFTbkksSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQWUxQixZQUFvQixPQUFtQixFQUFVLFFBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBRjVELGVBQVUsR0FBYSxFQUFFLENBQUM7UUFHaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sYUFBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1NBQ3RCO1FBRUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLFVBQVUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQzNDLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxjQUFjLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRXhHLE1BQU0sVUFBVSxHQUFHLENBQUUsV0FBVyxDQUFFLENBQUM7UUFFbkMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFHRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLGNBQWMsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRixDQUFBOztZQXBFOEIsVUFBVTtZQUFvQixTQUFTOztBQWRoRDtJQUFuQixLQUFLLENBQUMsV0FBVyxDQUFDOztpREFBc0I7QUFDaEM7SUFBUixLQUFLLEVBQUU7O2dEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTs7NkNBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7O2dEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTs7OENBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFOzsrQ0FBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7OzZDQUFlO0FBQ0Q7SUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7bURBQStCO0FBRXRCO0lBQTdCLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUM7OzZDQUFNO0FBNERuQztJQURDLFlBQVksQ0FBQyxPQUFPLENBQUM7Ozs7aURBS3JCO0FBMUVVLGVBQWU7SUFKM0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtLQUU5QixDQUFDO3FDQWdCNkIsVUFBVSxFQUFvQixTQUFTO0dBZnpELGVBQWUsQ0FtRjNCO1NBbkZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY2NlbnRUeXBlLCBCdXR0b25TaGFwZVR5cGUsIEJ1dHRvblNwZWNpYWxUeXBlLCBTaXplVHlwZX0gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGVzJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdidXR0b25bbTQtYnV0dG9uXScsXG5cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoJ2J0bi1zdHlsZScpIGJ0blN0eWxlOiBBY2NlbnRUeXBlO1xuICBASW5wdXQoKSBvdXRsaW5lOiBib29sZWFuO1xuICBASW5wdXQoKSBzaXplOiBTaXplVHlwZTtcbiAgQElucHV0KCkgcm91bmRlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hhcGU6IEJ1dHRvblNoYXBlVHlwZTtcbiAgQElucHV0KCkgc2hhZG93OiBib29sZWFuO1xuICBASW5wdXQoKSBmbGF0OiBib29sZWFuO1xuICBASW5wdXQoJ3NwZWNpYWwtYnRuJykgc3BlY2lhbEJ0bjogQnV0dG9uU3BlY2lhbFR5cGU7XG5cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCd0eXBlJykgdHlwZTtcblxuICBwcml2YXRlIGpFbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgb2xkQ2xhc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuakVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMudHlwZSkge1xuICAgICAgdGhpcy50eXBlID0gJ2J1dHRvbic7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSB0aGlzLnNwZWNpYWxCdG4gPT09ICdjb21tYW5kJyA/ICdjb21tYW5kLWJ1dHRvbicgOlxuICAgICAgdGhpcy5zcGVjaWFsQnRuID09PSAnaW1hZ2UnID8gJ2ltYWdlLWJ1dHRvbicgOlxuICAgICAgICB0aGlzLnNwZWNpYWxCdG4gPT09ICdzaG9ydGN1dCcgPyAnc2hvcnRjdXQnIDpcbiAgICAgICAgICB0aGlzLnNwZWNpYWxCdG4gPT09ICdyaWJib24nID8gJ3JpYmJvbi1idXR0b24nIDpcbiAgICAgICAgICAgIHRoaXMuc3BlY2lhbEJ0biA9PT0gJ2FjdGlvbicgfHwgdGhpcy5zcGVjaWFsQnRuID09PSAnbXVsdGktYWN0aW9uJyA/ICdhY3Rpb24tYnV0dG9uJyA6ICdidXR0b24nO1xuXG4gICAgY29uc3QgbmV3Q2xhc3NlcyA9IFsgYnV0dG9uQ2xhc3MgXTtcblxuICAgIGlmICh0aGlzLmJ0blN0eWxlKSB7XG4gICAgICBuZXdDbGFzc2VzLnB1c2godGhpcy5idG5TdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3V0bGluZSkge1xuICAgICAgbmV3Q2xhc3Nlcy5wdXNoKCdvdXRsaW5lJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgbmV3Q2xhc3Nlcy5wdXNoKHRoaXMuc2l6ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm91bmRlZCkge1xuICAgICAgbmV3Q2xhc3Nlcy5wdXNoKCdyb3VuZGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hhcGUpIHtcbiAgICAgIG5ld0NsYXNzZXMucHVzaCh0aGlzLnNoYXBlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaGFkb3cpIHtcbiAgICAgIG5ld0NsYXNzZXMucHVzaCgnZHJvcC1zaGFkb3cnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mbGF0KSB7XG4gICAgICBuZXdDbGFzc2VzLnB1c2goJ2ZsYXQtYnV0dG9uJyk7XG4gICAgfVxuXG4gICAgdGhpcy5vbGRDbGFzc2VzLmZvckVhY2goYyA9PiB7XG4gICAgICB0aGlzLmpFbGVtZW50LnJlbW92ZUNsYXNzKGMpO1xuICAgIH0pO1xuICAgIG5ld0NsYXNzZXMuZm9yRWFjaChjID0+IHtcbiAgICAgIHRoaXMuakVsZW1lbnQuYWRkQ2xhc3MoYyk7XG4gICAgfSk7XG4gICAgdGhpcy5vbGRDbGFzc2VzID0gbmV3Q2xhc3NlcztcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgY2xpY2tFdmVudCgpIHtcbiAgICBpZiAodGhpcy5zcGVjaWFsQnRuID09PSAnbXVsdGktYWN0aW9uJykge1xuICAgICAgdGhpcy5qRWxlbWVudC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cbn1cbiJdfQ==