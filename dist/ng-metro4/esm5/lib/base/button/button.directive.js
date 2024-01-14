import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
var ButtonDirective = /** @class */ (function () {
    function ButtonDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.oldClasses = [];
        this.jElement = $(this.element.nativeElement);
    }
    ButtonDirective.prototype.createElement = function () {
        var _this = this;
        if (!this.type) {
            this.type = 'button';
        }
        var buttonClass = this.specialBtn === 'command' ? 'command-button' :
            this.specialBtn === 'image' ? 'image-button' :
                this.specialBtn === 'shortcut' ? 'shortcut' :
                    this.specialBtn === 'ribbon' ? 'ribbon-button' :
                        this.specialBtn === 'action' || this.specialBtn === 'multi-action' ? 'action-button' : 'button';
        var newClasses = [buttonClass];
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
        this.oldClasses.forEach(function (c) {
            _this.jElement.removeClass(c);
        });
        newClasses.forEach(function (c) {
            _this.jElement.addClass(c);
        });
        this.oldClasses = newClasses;
    };
    ButtonDirective.prototype.clickEvent = function () {
        if (this.specialBtn === 'multi-action') {
            this.jElement.toggleClass('active');
        }
    };
    ButtonDirective.prototype.ngOnInit = function () {
        this.createElement();
    };
    ButtonDirective.prototype.ngOnChanges = function (changes) {
        this.createElement();
    };
    ButtonDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return ButtonDirective;
}());
export { ButtonDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9iYXNlL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFTbkk7SUFlRSx5QkFBb0IsT0FBbUIsRUFBVSxRQUFtQjtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUY1RCxlQUFVLEdBQWEsRUFBRSxDQUFDO1FBR2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLHVDQUFhLEdBQXJCO1FBQUEsaUJBZ0RDO1FBL0NDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7U0FDdEI7UUFFRCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsVUFBVSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDM0MsSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUM5QyxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFeEcsSUFBTSxVQUFVLEdBQUcsQ0FBRSxXQUFXLENBQUUsQ0FBQztRQUVuQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QjtRQUVELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBR0Qsb0NBQVUsR0FBVjtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxjQUFjLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQscUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOztnQkFuRTRCLFVBQVU7Z0JBQW9CLFNBQVM7O0lBZGhEO1FBQW5CLEtBQUssQ0FBQyxXQUFXLENBQUM7O3FEQUFzQjtJQUNoQztRQUFSLEtBQUssRUFBRTs7b0RBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFOztpREFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTs7b0RBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFOztrREFBd0I7SUFDdkI7UUFBUixLQUFLLEVBQUU7O21EQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTs7aURBQWU7SUFDRDtRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOzt1REFBK0I7SUFFdEI7UUFBN0IsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQzs7aURBQU07SUE0RG5DO1FBREMsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7OztxREFLckI7SUExRVUsZUFBZTtRQUozQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1NBRTlCLENBQUM7eUNBZ0I2QixVQUFVLEVBQW9CLFNBQVM7T0FmekQsZUFBZSxDQW1GM0I7SUFBRCxzQkFBQztDQUFBLEFBbkZELElBbUZDO1NBbkZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY2NlbnRUeXBlLCBCdXR0b25TaGFwZVR5cGUsIEJ1dHRvblNwZWNpYWxUeXBlLCBTaXplVHlwZX0gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGVzJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdidXR0b25bbTQtYnV0dG9uXScsXG5cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoJ2J0bi1zdHlsZScpIGJ0blN0eWxlOiBBY2NlbnRUeXBlO1xuICBASW5wdXQoKSBvdXRsaW5lOiBib29sZWFuO1xuICBASW5wdXQoKSBzaXplOiBTaXplVHlwZTtcbiAgQElucHV0KCkgcm91bmRlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hhcGU6IEJ1dHRvblNoYXBlVHlwZTtcbiAgQElucHV0KCkgc2hhZG93OiBib29sZWFuO1xuICBASW5wdXQoKSBmbGF0OiBib29sZWFuO1xuICBASW5wdXQoJ3NwZWNpYWwtYnRuJykgc3BlY2lhbEJ0bjogQnV0dG9uU3BlY2lhbFR5cGU7XG5cbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCd0eXBlJykgdHlwZTtcblxuICBwcml2YXRlIGpFbGVtZW50OiBhbnk7XG4gIHByaXZhdGUgb2xkQ2xhc3Nlczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuakVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMudHlwZSkge1xuICAgICAgdGhpcy50eXBlID0gJ2J1dHRvbic7XG4gICAgfVxuXG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSB0aGlzLnNwZWNpYWxCdG4gPT09ICdjb21tYW5kJyA/ICdjb21tYW5kLWJ1dHRvbicgOlxuICAgICAgdGhpcy5zcGVjaWFsQnRuID09PSAnaW1hZ2UnID8gJ2ltYWdlLWJ1dHRvbicgOlxuICAgICAgICB0aGlzLnNwZWNpYWxCdG4gPT09ICdzaG9ydGN1dCcgPyAnc2hvcnRjdXQnIDpcbiAgICAgICAgICB0aGlzLnNwZWNpYWxCdG4gPT09ICdyaWJib24nID8gJ3JpYmJvbi1idXR0b24nIDpcbiAgICAgICAgICAgIHRoaXMuc3BlY2lhbEJ0biA9PT0gJ2FjdGlvbicgfHwgdGhpcy5zcGVjaWFsQnRuID09PSAnbXVsdGktYWN0aW9uJyA/ICdhY3Rpb24tYnV0dG9uJyA6ICdidXR0b24nO1xuXG4gICAgY29uc3QgbmV3Q2xhc3NlcyA9IFsgYnV0dG9uQ2xhc3MgXTtcblxuICAgIGlmICh0aGlzLmJ0blN0eWxlKSB7XG4gICAgICBuZXdDbGFzc2VzLnB1c2godGhpcy5idG5TdHlsZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3V0bGluZSkge1xuICAgICAgbmV3Q2xhc3Nlcy5wdXNoKCdvdXRsaW5lJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2l6ZSkge1xuICAgICAgbmV3Q2xhc3Nlcy5wdXNoKHRoaXMuc2l6ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm91bmRlZCkge1xuICAgICAgbmV3Q2xhc3Nlcy5wdXNoKCdyb3VuZGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hhcGUpIHtcbiAgICAgIG5ld0NsYXNzZXMucHVzaCh0aGlzLnNoYXBlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaGFkb3cpIHtcbiAgICAgIG5ld0NsYXNzZXMucHVzaCgnZHJvcC1zaGFkb3cnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mbGF0KSB7XG4gICAgICBuZXdDbGFzc2VzLnB1c2goJ2ZsYXQtYnV0dG9uJyk7XG4gICAgfVxuXG4gICAgdGhpcy5vbGRDbGFzc2VzLmZvckVhY2goYyA9PiB7XG4gICAgICB0aGlzLmpFbGVtZW50LnJlbW92ZUNsYXNzKGMpO1xuICAgIH0pO1xuICAgIG5ld0NsYXNzZXMuZm9yRWFjaChjID0+IHtcbiAgICAgIHRoaXMuakVsZW1lbnQuYWRkQ2xhc3MoYyk7XG4gICAgfSk7XG4gICAgdGhpcy5vbGRDbGFzc2VzID0gbmV3Q2xhc3NlcztcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgY2xpY2tFdmVudCgpIHtcbiAgICBpZiAodGhpcy5zcGVjaWFsQnRuID09PSAnbXVsdGktYWN0aW9uJykge1xuICAgICAgdGhpcy5qRWxlbWVudC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cbn1cbiJdfQ==