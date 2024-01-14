import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AttributeHelper } from '../../helper/attribute-helper';
let LoadingDirective = class LoadingDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.stateChange = new EventEmitter();
    }
    createElement() {
        if (this.registeredTeardownLogic) {
            this.registeredTeardownLogic.unsubscribe();
        }
        if (this.subscription) {
            this.setDisabled(!this.subscription.closed);
            this.registeredTeardownLogic = this.subscription.add(() => {
                this.setDisabled(!this.subscription.closed);
            });
        }
        else {
            this.setDisabled(false);
        }
    }
    setDisabled(loading) {
        this.stateChange.emit(loading);
        AttributeHelper.setAttribute(this.renderer, this.element, 'disabled', this.disabled || loading);
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
};
LoadingDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input('m4-loading'),
    __metadata("design:type", Subscription)
], LoadingDirective.prototype, "subscription", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LoadingDirective.prototype, "disabled", void 0);
LoadingDirective = __decorate([
    Directive({
        selector: '[m4-loading]'
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], LoadingDirective);
export { LoadingDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvYmFzZS9sb2FkaW5nL2xvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUs5RCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQVEzQixZQUFvQixPQUFtQixFQUFVLFFBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSjdELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUl1QixDQUFDO0lBRWpFLGFBQWE7UUFDbkIsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVDO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRU8sV0FBVyxDQUFDLE9BQWdCO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRixDQUFBOztZQTlCOEIsVUFBVTtZQUFvQixTQUFTOztBQVAvQztJQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDOzhCQUFlLFlBQVk7c0RBQUM7QUFDdkM7SUFBUixLQUFLLEVBQUU7O2tEQUFtQjtBQUZoQixnQkFBZ0I7SUFINUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7S0FDekIsQ0FBQztxQ0FTNkIsVUFBVSxFQUFvQixTQUFTO0dBUnpELGdCQUFnQixDQXNDNUI7U0F0Q1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtBdHRyaWJ1dGVIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9hdHRyaWJ1dGUtaGVscGVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW200LWxvYWRpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoJ200LWxvYWRpbmcnKSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgcHVibGljIHN0YXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgcmVnaXN0ZXJlZFRlYXJkb3duTG9naWM6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KCkge1xuICAgIGlmICh0aGlzLnJlZ2lzdGVyZWRUZWFyZG93bkxvZ2ljKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWRUZWFyZG93bkxvZ2ljLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnNldERpc2FibGVkKCF0aGlzLnN1YnNjcmlwdGlvbi5jbG9zZWQpO1xuXG4gICAgICB0aGlzLnJlZ2lzdGVyZWRUZWFyZG93bkxvZ2ljID0gdGhpcy5zdWJzY3JpcHRpb24uYWRkKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXREaXNhYmxlZCghdGhpcy5zdWJzY3JpcHRpb24uY2xvc2VkKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldERpc2FibGVkKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldERpc2FibGVkKGxvYWRpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlLmVtaXQobG9hZGluZyk7XG4gICAgQXR0cmlidXRlSGVscGVyLnNldEF0dHJpYnV0ZSh0aGlzLnJlbmRlcmVyLCB0aGlzLmVsZW1lbnQsICdkaXNhYmxlZCcsIHRoaXMuZGlzYWJsZWQgfHwgbG9hZGluZyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxufVxuIl19