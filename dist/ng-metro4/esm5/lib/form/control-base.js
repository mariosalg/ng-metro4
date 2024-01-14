import { __decorate, __metadata, __param } from "tslib";
import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, Optional, SimpleChange, SimpleChanges, Directive } from '@angular/core';
import { ObjectHelper } from '../helper/object-helper';
import { asapScheduler } from 'rxjs';
import { AttributeHelper } from '../helper/attribute-helper';
var ControlBase = /** @class */ (function () {
    function ControlBase(mainElement, cdRef) {
        this.mainElement = mainElement;
        this.cdRef = cdRef;
        this.disableUpdate = false;
        this.touchCallback = function () { };
        this.changeCallback = function (_) { };
    }
    ControlBase.prototype.observeClassValue = function () {
        var _this = this;
        this.classObserver = AttributeHelper.createObserver(this.mainElement, function (newClasses, oldClasses) {
            _this.currentClasses = newClasses;
            _this.newClassValue(newClasses, oldClasses);
        });
    };
    ControlBase.prototype.changeValue = function (newValue, callback) {
        if (callback === void 0) { callback = true; }
        if (this.disableUpdate) {
            return;
        }
        if (ObjectHelper.compare(newValue, this.innerValue)) {
            return;
        }
        this.innerValue = newValue;
        if (callback) {
            this.changeCallback(this.innerValue);
        }
    };
    ControlBase.prototype.registerOnChange = function (fn) {
        this.changeCallback = fn;
    };
    ControlBase.prototype.registerOnTouched = function (fn) {
        this.touchCallback = fn;
    };
    ControlBase.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this.disable(isDisabled);
    };
    ControlBase.prototype.callNewValue = function () {
        this.disableUpdate = true;
        this.newValue();
        this.disableUpdate = false;
    };
    ControlBase.prototype.writeValue = function (newValue) {
        this.innerValue = newValue;
        this.callNewValue();
    };
    ControlBase.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.createControl().then(function () {
            _this.callNewValue();
            _this.observeClassValue();
        });
    };
    ControlBase.prototype.ngOnChanges = function (changes) {
        var _this = this;
        asapScheduler.schedule(function () {
            _this.createControl().then(function () {
                _this.setDisabledState(_this.disabled);
                _this.callNewValue();
                if (_this.currentClasses) {
                    _this.newClassValue(_this.currentClasses, []);
                }
            });
        });
    };
    ControlBase.prototype.ngOnDestroy = function () {
        if (this.classObserver) {
            this.classObserver.disconnect();
        }
    };
    ControlBase.prototype.updateProperty = function (key, newValue) {
        var oldValue = this[key];
        if (oldValue !== newValue) {
            this[key] = newValue;
            if (this.cdRef) {
                this.cdRef.detectChanges();
            }
            var changes = {};
            changes[key] = { previousValue: oldValue, currentValue: newValue, firstChange: false };
            this.ngOnChanges(changes);
        }
    };
    ControlBase.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Optional }] },
        { type: ChangeDetectorRef }
    ]; };
    ControlBase = __decorate([
        Directive(),
        __param(0, Optional()),
        __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
    ], ControlBase);
    return ControlBase;
}());
export { ControlBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC1iYXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vY29udHJvbC1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFHM0Q7SUFXRSxxQkFBK0IsV0FBdUIsRUFBVSxLQUF3QjtRQUF6RCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBTGpGLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGtCQUFhLEdBQWUsY0FBTyxDQUFDLENBQUM7UUFDckMsbUJBQWMsR0FBOEIsVUFBQyxDQUFDLElBQU0sQ0FBQyxDQUFDO0lBRThCLENBQUM7SUFFcEYsdUNBQWlCLEdBQXpCO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFDLFVBQVUsRUFBRSxVQUFVO1lBQzNGLEtBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUlNLGlDQUFXLEdBQWxCLFVBQW1CLFFBQVcsRUFBRSxRQUF3QjtRQUF4Qix5QkFBQSxFQUFBLGVBQXdCO1FBQ3RELElBQUksSUFBSSxDQUFDLGFB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O0lBWHBFLFdBQVc7UUFEaEMsU0FBUyxFQUFFO1FBWUcsV0FBQSxRQUFRLEVBQUUsQ0FBQTt5Q0FBcUIsVUFBVSxFQUFpQixpQkFBaUI7T0FYcEUsV0FBVyxDQTRHaEM7SUFBRCxrQkFBQztDQUFBLEFBNUdELElBNEdDO1NBNUdxQixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlLCBTaW1wbGVDaGFuZ2VzLCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtBdHRyaWJ1dGVIZWxwZXJ9IGZyb20gJy4uL2hlbHBlci9hdHRyaWJ1dGUtaGVscGVyJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29udHJvbEJhc2U8VD4gaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNsYXNzT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIHByaXZhdGUgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgY3VycmVudENsYXNzZXM6IHN0cmluZ1tdO1xuXG4gIHB1YmxpYyBpbm5lclZhbHVlOiBUO1xuICBwdWJsaWMgZGlzYWJsZVVwZGF0ZSA9IGZhbHNlO1xuXG4gIHB1YmxpYyB0b3VjaENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHB1YmxpYyBjaGFuZ2VDYWxsYmFjazogKGN1cnJlbnRWYWx1ZTogVCkgPT4gdm9pZCA9IChfKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwdWJsaWMgbWFpbkVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHByaXZhdGUgb2JzZXJ2ZUNsYXNzVmFsdWUoKSB7XG4gICAgdGhpcy5jbGFzc09ic2VydmVyID0gQXR0cmlidXRlSGVscGVyLmNyZWF0ZU9ic2VydmVyKHRoaXMubWFpbkVsZW1lbnQsIChuZXdDbGFzc2VzLCBvbGRDbGFzc2VzKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRDbGFzc2VzID0gbmV3Q2xhc3NlcztcbiAgICAgIHRoaXMubmV3Q2xhc3NWYWx1ZShuZXdDbGFzc2VzLCBvbGRDbGFzc2VzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBuZXdDbGFzc1ZhbHVlKG5ld0NsYXNzZXM6IHN0cmluZ1tdLCBvbGRDbGFzc2VzOiBzdHJpbmdbXSk7XG5cbiAgcHVibGljIGNoYW5nZVZhbHVlKG5ld1ZhbHVlOiBULCBjYWxsYmFjazogYm9vbGVhbiA9IHRydWUpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlVXBkYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdEhlbHBlci5jb21wYXJlKG5ld1ZhbHVlLCB0aGlzLmlubmVyVmFsdWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pbm5lclZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY2hhbmdlQ2FsbGJhY2sodGhpcy5pbm5lclZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodjogVCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy50b3VjaENhbGxiYWNrID0gZm47XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik7XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5kaXNhYmxlKGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IG5ld1ZhbHVlKCk7XG5cbiAgY2FsbE5ld1ZhbHVlKCkge1xuICAgIHRoaXMuZGlzYWJsZVVwZGF0ZSA9IHRydWU7XG4gICAgdGhpcy5uZXdWYWx1ZSgpO1xuICAgIHRoaXMuZGlzYWJsZVVwZGF0ZSA9IGZhbHNlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShuZXdWYWx1ZTogVCk6IHZvaWQge1xuICAgIHRoaXMuaW5uZXJWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMuY2FsbE5ld1ZhbHVlKCk7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3QgY3JlYXRlQ29udHJvbCgpOiBQcm9taXNlPHZvaWQ+O1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZUNvbnRyb2woKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuY2FsbE5ld1ZhbHVlKCk7XG4gICAgICB0aGlzLm9ic2VydmVDbGFzc1ZhbHVlKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICB0aGlzLmNyZWF0ZUNvbnRyb2woKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKHRoaXMuZGlzYWJsZWQpO1xuICAgICAgICB0aGlzLmNhbGxOZXdWYWx1ZSgpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Q2xhc3Nlcykge1xuICAgICAgICAgIHRoaXMubmV3Q2xhc3NWYWx1ZSh0aGlzLmN1cnJlbnRDbGFzc2VzLCBbXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xhc3NPYnNlcnZlcikge1xuICAgICAgdGhpcy5jbGFzc09ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQcm9wZXJ0eShrZXk6IGtleW9mIHRoaXMsIG5ld1ZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXNba2V5XTtcblxuICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXNba2V5XSA9IG5ld1ZhbHVlO1xuXG4gICAgICBpZiAodGhpcy5jZFJlZikge1xuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hhbmdlczogU2ltcGxlQ2hhbmdlcyA9IHt9O1xuICAgICAgY2hhbmdlc1trZXkgYXMgc3RyaW5nXSA9IHsgcHJldmlvdXNWYWx1ZTogb2xkVmFsdWUsIGN1cnJlbnRWYWx1ZTogbmV3VmFsdWUsIGZpcnN0Q2hhbmdlOiBmYWxzZSB9IGFzIFNpbXBsZUNoYW5nZTtcbiAgICAgIHRoaXMubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG4gICAgfVxuICB9XG59XG4iXX0=