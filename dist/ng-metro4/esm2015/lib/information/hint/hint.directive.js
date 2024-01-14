import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { AttributeHelper } from '../../helper/attribute-helper';
import { asapScheduler } from 'rxjs';
let HintDirective = class HintDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.hintPosition = 'top';
        this.hintOffset = 6;
    }
    createElement() {
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-hint-text', this.hintText);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-hint-position', this.hintPosition);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-hint-hide', this.hintHide);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-cls-hint', this.clsHint);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-hint-offset', this.hintOffset);
        asapScheduler.schedule(() => {
            if (!this.hintObj) {
                this.hintObj = $(this.element.nativeElement).hint().data('hint');
            }
            else {
                this.hintObj.options.hintText = this.hintText;
                this.hintObj.options.hintPosition = this.hintPosition;
                this.hintObj.options.hintHide = this.hintHide;
                this.hintObj.options.clsHint = this.clsHint;
                this.hintObj.options.hintOffset = this.hintOffset;
            }
        });
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
};
HintDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input('m4-hint'),
    __metadata("design:type", String)
], HintDirective.prototype, "hintText", void 0);
__decorate([
    Input('hint-position'),
    __metadata("design:type", String)
], HintDirective.prototype, "hintPosition", void 0);
__decorate([
    Input('hint-hide'),
    __metadata("design:type", Number)
], HintDirective.prototype, "hintHide", void 0);
__decorate([
    Input('cls-hint'),
    __metadata("design:type", String)
], HintDirective.prototype, "clsHint", void 0);
__decorate([
    Input('hint-offset'),
    __metadata("design:type", Object)
], HintDirective.prototype, "hintOffset", void 0);
HintDirective = __decorate([
    Directive({
        selector: '[m4-hint]'
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], HintDirective);
export { HintDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGludC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvaW5mb3JtYXRpb24vaGludC9oaW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQVFuQyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBU3hCLFlBQW9CLE9BQW1CLEVBQVUsUUFBbUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFQNUMsaUJBQVksR0FBcUIsS0FBSyxDQUFDO1FBR3pDLGVBQVUsR0FBRyxDQUFDLENBQUM7SUFJbUMsQ0FBQztJQUVqRSxhQUFhO1FBQ25CLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzRixlQUFlLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkcsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNGLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekYsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRS9GLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDbkQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRixDQUFBOztZQTdCOEIsVUFBVTtZQUFvQixTQUFTOztBQVJsRDtJQUFqQixLQUFLLENBQUMsU0FBUyxDQUFDOzsrQ0FBa0I7QUFDWDtJQUF2QixLQUFLLENBQUMsZUFBZSxDQUFDOzttREFBd0M7QUFDM0M7SUFBbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7K0NBQWtCO0FBQ2xCO0lBQWxCLEtBQUssQ0FBQyxVQUFVLENBQUM7OzhDQUFpQjtBQUNiO0lBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7O2lEQUFnQjtBQUwxQixhQUFhO0lBSHpCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO0tBQ3RCLENBQUM7cUNBVTZCLFVBQVUsRUFBb0IsU0FBUztHQVR6RCxhQUFhLENBc0N6QjtTQXRDWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QXR0cmlidXRlSGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvYXR0cmlidXRlLWhlbHBlcic7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtQb3NpdGlvbkJhc2VUeXBlfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZXMnO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttNC1oaW50XSdcbn0pXG5leHBvcnQgY2xhc3MgSGludERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdtNC1oaW50JykgaGludFRleHQ6IHN0cmluZztcbiAgQElucHV0KCdoaW50LXBvc2l0aW9uJykgaGludFBvc2l0aW9uOiBQb3NpdGlvbkJhc2VUeXBlID0gJ3RvcCc7XG4gIEBJbnB1dCgnaGludC1oaWRlJykgaGludEhpZGU6IG51bWJlcjtcbiAgQElucHV0KCdjbHMtaGludCcpIGNsc0hpbnQ6IHN0cmluZztcbiAgQElucHV0KCdoaW50LW9mZnNldCcpIGhpbnRPZmZzZXQgPSA2O1xuXG4gIGhpbnRPYmo6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KCkge1xuICAgIEF0dHJpYnV0ZUhlbHBlci5zZXRBdHRyaWJ1dGUodGhpcy5yZW5kZXJlciwgdGhpcy5lbGVtZW50LCAnZGF0YS1oaW50LXRleHQnLCB0aGlzLmhpbnRUZXh0KTtcbiAgICBBdHRyaWJ1dGVIZWxwZXIuc2V0QXR0cmlidXRlKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgJ2RhdGEtaGludC1wb3NpdGlvbicsIHRoaXMuaGludFBvc2l0aW9uKTtcbiAgICBBdHRyaWJ1dGVIZWxwZXIuc2V0QXR0cmlidXRlKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgJ2RhdGEtaGludC1oaWRlJywgdGhpcy5oaW50SGlkZSk7XG4gICAgQXR0cmlidXRlSGVscGVyLnNldEF0dHJpYnV0ZSh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsICdkYXRhLWNscy1oaW50JywgdGhpcy5jbHNIaW50KTtcbiAgICBBdHRyaWJ1dGVIZWxwZXIuc2V0QXR0cmlidXRlKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgJ2RhdGEtaGludC1vZmZzZXQnLCB0aGlzLmhpbnRPZmZzZXQpO1xuXG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaGludE9iaikge1xuICAgICAgICB0aGlzLmhpbnRPYmogPSAkKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KS5oaW50KCkuZGF0YSgnaGludCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaW50T2JqLm9wdGlvbnMuaGludFRleHQgPSB0aGlzLmhpbnRUZXh0O1xuICAgICAgICB0aGlzLmhpbnRPYmoub3B0aW9ucy5oaW50UG9zaXRpb24gPSB0aGlzLmhpbnRQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5oaW50T2JqLm9wdGlvbnMuaGludEhpZGUgPSB0aGlzLmhpbnRIaWRlO1xuICAgICAgICB0aGlzLmhpbnRPYmoub3B0aW9ucy5jbHNIaW50ID0gdGhpcy5jbHNIaW50O1xuICAgICAgICB0aGlzLmhpbnRPYmoub3B0aW9ucy5oaW50T2Zmc2V0ID0gdGhpcy5oaW50T2Zmc2V0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cbn1cbiJdfQ==