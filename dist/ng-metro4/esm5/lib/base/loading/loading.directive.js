import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { AttributeHelper } from '../../helper/attribute-helper';
var LoadingDirective = /** @class */ (function () {
    function LoadingDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.stateChange = new EventEmitter();
    }
    LoadingDirective.prototype.createElement = function () {
        var _this = this;
        if (this.registeredTeardownLogic) {
            this.registeredTeardownLogic.unsubscribe();
        }
        if (this.subscription) {
            this.setDisabled(!this.subscription.closed);
            this.registeredTeardownLogic = this.subscription.add(function () {
                _this.setDisabled(!_this.subscription.closed);
            });
        }
        else {
            this.setDisabled(false);
        }
    };
    LoadingDirective.prototype.setDisabled = function (loading) {
        this.stateChange.emit(loading);
        AttributeHelper.setAttribute(this.renderer, this.element, 'disabled', this.disabled || loading);
    };
    LoadingDirective.prototype.ngOnInit = function () {
        this.createElement();
    };
    LoadingDirective.prototype.ngOnChanges = function (changes) {
        this.createElement();
    };
    LoadingDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return LoadingDirective;
}());
export { LoadingDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvYmFzZS9sb2FkaW5nL2xvYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0SCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUs5RDtJQVFFLDBCQUFvQixPQUFtQixFQUFVLFFBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSjdELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUl1QixDQUFDO0lBRWpFLHdDQUFhLEdBQXJCO1FBQUEsaUJBY0M7UUFiQyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUNoQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUM7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFNUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO2dCQUNuRCxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVPLHNDQUFXLEdBQW5CLFVBQW9CLE9BQWdCO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O2dCQTdCNEIsVUFBVTtnQkFBb0IsU0FBUzs7SUFQL0M7UUFBcEIsS0FBSyxDQUFDLFlBQVksQ0FBQztrQ0FBZSxZQUFZOzBEQUFDO0lBQ3ZDO1FBQVIsS0FBSyxFQUFFOztzREFBbUI7SUFGaEIsZ0JBQWdCO1FBSDVCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1NBQ3pCLENBQUM7eUNBUzZCLFVBQVUsRUFBb0IsU0FBUztPQVJ6RCxnQkFBZ0IsQ0FzQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXRDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0F0dHJpYnV0ZUhlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL2F0dHJpYnV0ZS1oZWxwZXInO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbTQtbG9hZGluZ10nXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnbTQtbG9hZGluZycpIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBwdWJsaWMgc3RhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgcHJpdmF0ZSByZWdpc3RlcmVkVGVhcmRvd25Mb2dpYzogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMucmVnaXN0ZXJlZFRlYXJkb3duTG9naWMpIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJlZFRlYXJkb3duTG9naWMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc2V0RGlzYWJsZWQoIXRoaXMuc3Vic2NyaXB0aW9uLmNsb3NlZCk7XG5cbiAgICAgIHRoaXMucmVnaXN0ZXJlZFRlYXJkb3duTG9naWMgPSB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldERpc2FibGVkKCF0aGlzLnN1YnNjcmlwdGlvbi5jbG9zZWQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0RGlzYWJsZWQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RGlzYWJsZWQobG9hZGluZzogYm9vbGVhbikge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2UuZW1pdChsb2FkaW5nKTtcbiAgICBBdHRyaWJ1dGVIZWxwZXIuc2V0QXR0cmlidXRlKHRoaXMucmVuZGVyZXIsIHRoaXMuZWxlbWVudCwgJ2Rpc2FibGVkJywgdGhpcy5kaXNhYmxlZCB8fCBsb2FkaW5nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpO1xuICB9XG59XG4iXX0=