import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, forwardRef, Input, QueryList, ViewChildren } from '@angular/core';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ControlBase } from '../control-base';
import { RadioComponent } from '../radio/radio.component';
import { StringHelper } from '../../helper/string-helper';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
var RadioGroupComponent = /** @class */ (function (_super) {
    __extends(RadioGroupComponent, _super);
    function RadioGroupComponent(element, cdRef) {
        var _this = _super.call(this, element, cdRef) || this;
        _this.name = StringHelper.guid();
        return _this;
    }
    RadioGroupComponent_1 = RadioGroupComponent;
    RadioGroupComponent.prototype.createControl = function () {
        var _this = this;
        return new Promise(function (complete) {
            asapScheduler.schedule(function () {
                _this.radios = !!_this.options ? _this.radiosView : _this.radiosContent;
                var radioCreations = _this.radios.map(function (item) {
                    return new Promise(function (radioComplete) {
                        item.name = _this.name;
                        item.registerOnChange(function (v) {
                            _this.changeValue(v);
                            _this.newValue();
                        });
                        item.registerOnTouched(function () {
                            _this.touchCallback();
                        });
                        asapScheduler.schedule(function () {
                            item.createControl().then(function () {
                                radioComplete();
                            });
                        }, 1);
                    });
                });
                Promise.all(radioCreations).then(function () {
                    _this.callNewValue();
                    complete();
                });
            });
        });
    };
    RadioGroupComponent.prototype.disable = function (disabled) {
        this.radios.forEach(function (item) {
            asapScheduler.schedule(function () {
                item.disable(disabled);
            }, 1);
        });
    };
    RadioGroupComponent.prototype.newValue = function () {
        var _this = this;
        if (!this.radios) {
            return;
        }
        this.radios.forEach(function (item) {
            item.writeValue(_this.innerValue);
        });
    };
    RadioGroupComponent.prototype.newClassValue = function (newClasses, oldClasses) {
        this.radios.forEach(function (item) {
            asapScheduler.schedule(function () {
                item.newClassValue(newClasses, oldClasses);
            }, 1);
        });
    };
    var RadioGroupComponent_1;
    RadioGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], RadioGroupComponent.prototype, "options", void 0);
    __decorate([
        ContentChildren(forwardRef(function () { return RadioComponent; }), { descendants: true }),
        __metadata("design:type", QueryList)
    ], RadioGroupComponent.prototype, "radiosContent", void 0);
    __decorate([
        ViewChildren(forwardRef(function () { return RadioComponent; })),
        __metadata("design:type", QueryList)
    ], RadioGroupComponent.prototype, "radiosView", void 0);
    RadioGroupComponent = RadioGroupComponent_1 = __decorate([
        Component({
            selector: 'm4-radio-group',
            template: "<ng-container *ngIf=\"options; else noOptions\">\n  <m4-radio *ngFor=\"let option of options | objectKeys\" [value]=\"options[option]\"\n            [caption]=\"option\" [name]=\"name\"></m4-radio>\n</ng-container>\n<ng-template #noOptions>\n  <ng-content></ng-content>\n</ng-template>\n",
            providers: [DefaultValueAccessor.get(RadioGroupComponent_1), TypeAlias.get(RadioGroupComponent_1)],
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [""]
        }),
        __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
    ], RadioGroupComponent);
    return RadioGroupComponent;
}(ControlBase));
export { RadioGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vcmFkaW8tZ3JvdXAvcmFkaW8tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFXbkM7SUFBeUMsdUNBQWdCO0lBV3ZELDZCQUFZLE9BQW1CLEVBQUUsS0FBd0I7UUFBekQsWUFDRSxrQkFBTSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBRXRCO1FBREMsS0FBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7O0lBQ2xDLENBQUM7NEJBZFUsbUJBQW1CO0lBZ0I5QiwyQ0FBYSxHQUFiO1FBQUEsaUJBZ0NDO1FBL0JDLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxRQUFRO1lBQ2hDLGFBQWEsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFD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LGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDO3lDQVlxQixVQUFVLEVBQVMsaUJBQWlCO09BWDlDLG1CQUFtQixDQTJFL0I7SUFBRCwwQkFBQztDQUFBLEFBM0VELENBQXlDLFdBQVcsR0EyRW5EO1NBM0VZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4uLy4uL2hlbHBlci9kZWZhdWx0LXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7Q29udHJvbEJhc2V9IGZyb20gJy4uL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQge1JhZGlvQ29tcG9uZW50fSBmcm9tICcuLi9yYWRpby9yYWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHtTdHJpbmdIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9zdHJpbmctaGVscGVyJztcbmltcG9ydCB7VHlwZUFsaWFzfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZS1hbGlhcyc7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LXJhZGlvLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGlvLWdyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmFkaW8tZ3JvdXAuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoUmFkaW9Hcm91cENvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoUmFkaW9Hcm91cENvbXBvbmVudCldLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0dyb3VwQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8YW55PiB7XG5cbiAgQElucHV0KCkgb3B0aW9uczogeyBbdGl0bGU6IHN0cmluZ106IGFueSB9O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBSYWRpb0NvbXBvbmVudCksIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgcmFkaW9zQ29udGVudDogUXVlcnlMaXN0PFJhZGlvQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZHJlbihmb3J3YXJkUmVmKCgpID0+IFJhZGlvQ29tcG9uZW50KSkgcmFkaW9zVmlldzogUXVlcnlMaXN0PFJhZGlvQ29tcG9uZW50PjtcblxuICBwcml2YXRlIHJhZGlvczogUXVlcnlMaXN0PFJhZGlvQ29tcG9uZW50PjtcblxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNkUmVmKTtcbiAgICB0aGlzLm5hbWUgPSBTdHJpbmdIZWxwZXIuZ3VpZCgpO1xuICB9XG5cbiAgY3JlYXRlQ29udHJvbCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKGNvbXBsZXRlKSA9PiB7XG4gICAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yYWRpb3MgPSAhIXRoaXMub3B0aW9ucyA/IHRoaXMucmFkaW9zVmlldyA6IHRoaXMucmFkaW9zQ29udGVudDtcblxuICAgICAgICBjb25zdCByYWRpb0NyZWF0aW9ucyA9IHRoaXMucmFkaW9zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmFkaW9Db21wbGV0ZSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgaXRlbS5yZWdpc3Rlck9uQ2hhbmdlKCh2KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodik7XG4gICAgICAgICAgICAgIHRoaXMubmV3VmFsdWUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdGVtLnJlZ2lzdGVyT25Ub3VjaGVkKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50b3VjaENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGl0ZW0uY3JlYXRlQ29udHJvbCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJhZGlvQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgUHJvbWlzZS5hbGwocmFkaW9DcmVhdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FsbE5ld1ZhbHVlKCk7XG4gICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucmFkaW9zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICBpdGVtLmRpc2FibGUoZGlzYWJsZWQpO1xuICAgICAgfSwgMSk7XG4gICAgfSk7XG4gIH1cblxuICBuZXdWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucmFkaW9zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yYWRpb3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS53cml0ZVZhbHVlKHRoaXMuaW5uZXJWYWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBuZXdDbGFzc1ZhbHVlKG5ld0NsYXNzZXM6IHN0cmluZ1tdLCBvbGRDbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMucmFkaW9zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICBpdGVtLm5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlcywgb2xkQ2xhc3Nlcyk7XG4gICAgICB9LCAxKTtcbiAgICB9KTtcbiAgfVxufVxuIl19