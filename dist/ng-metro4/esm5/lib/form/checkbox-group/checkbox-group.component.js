import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, forwardRef, Input, QueryList, ViewChildren } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ArrayHelper } from '../../helper/array-helper';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
var CheckboxGroupComponent = /** @class */ (function (_super) {
    __extends(CheckboxGroupComponent, _super);
    function CheckboxGroupComponent(element, cdRef) {
        var _this = _super.call(this, element, cdRef) || this;
        _this.readonly = false;
        return _this;
    }
    CheckboxGroupComponent_1 = CheckboxGroupComponent;
    CheckboxGroupComponent.prototype.createControl = function () {
        var _this = this;
        return new Promise(function (complete) {
            asapScheduler.schedule(function () {
                _this.checkboxes = !!_this.options ? _this.checkboxesView : _this.checkboxesContent;
                var checkboxCreations = _this.checkboxes.map(function (item) {
                    return new Promise(function (checkboxComplete) {
                        item.updateProperty('readonly', _this.readonly);
                        item.registerOnChange(function (v) {
                            _this.computeInnerValue();
                        });
                        item.registerOnTouched(function () {
                            _this.touchCallback();
                        });
                        asapScheduler.schedule(function () {
                            item.createControl().then(function () {
                                checkboxComplete();
                            });
                        });
                    });
                });
                Promise.all(checkboxCreations).then(function () {
                    _this.callNewValue();
                    complete();
                });
            });
        });
    };
    CheckboxGroupComponent.prototype.computeInnerValue = function () {
        var values = this.checkboxes.filter(function (item) { return item.innerValue === true && item.value; }).map(function (item) { return item.value; });
        this.changeValue(values);
    };
    CheckboxGroupComponent.prototype.disable = function (disabled) {
        this.checkboxes.forEach(function (item) {
            asapScheduler.schedule(function () {
                item.disable(disabled);
            });
        });
    };
    CheckboxGroupComponent.prototype.newValue = function () {
        var _this = this;
        if (!this.checkboxes) {
            return;
        }
        this.checkboxes.forEach(function (item) {
            item.writeValue(_this.innerValue && ArrayHelper.contains(_this.innerValue, item.value));
        });
    };
    CheckboxGroupComponent.prototype.newClassValue = function (newClasses, oldClasses) {
        this.checkboxes.forEach(function (item) {
            asapScheduler.schedule(function () {
                item.newClassValue(newClasses, oldClasses);
            }, 1);
        });
    };
    var CheckboxGroupComponent_1;
    CheckboxGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CheckboxGroupComponent.prototype, "readonly", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CheckboxGroupComponent.prototype, "options", void 0);
    __decorate([
        ContentChildren(forwardRef(function () { return CheckboxComponent; }), { descendants: true }),
        __metadata("design:type", QueryList)
    ], CheckboxGroupComponent.prototype, "checkboxesContent", void 0);
    __decorate([
        ViewChildren(forwardRef(function () { return CheckboxComponent; })),
        __metadata("design:type", QueryList)
    ], CheckboxGroupComponent.prototype, "checkboxesView", void 0);
    CheckboxGroupComponent = CheckboxGroupComponent_1 = __decorate([
        Component({
            selector: 'm4-checkbox-group',
            template: "<ng-container *ngIf=\"options; else noOptions\">\n  <m4-checkbox *ngFor=\"let option of options | objectKeys\" [value]=\"options[option]\" [caption]=\"option\"></m4-checkbox>\n</ng-container>\n<ng-template #noOptions>\n  <ng-content></ng-content>\n</ng-template>\n",
            providers: [DefaultValueAccessor.get(CheckboxGroupComponent_1), TypeAlias.get(CheckboxGroupComponent_1)],
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [""]
        }),
        __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
    ], CheckboxGroupComponent);
    return CheckboxGroupComponent;
}(ControlBase));
export { CheckboxGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vY2hlY2tib3gtZ3JvdXAvY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFBRSxZQUFZLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFTbkM7SUFBNEMsMENBQWtCO0lBVTVELGdDQUFZLE9BQW1CLEVBQUUsS0FBd0I7UUFBekQsWUFDRSxrQkFBTSxPQUFPLEVBQUUsS0FBSyxDQUFDLFNBQ3RCO1FBVlEsY0FBUSxHQUFHLEtBQUssQ0FBQzs7SUFVMUIsQ0FBQzsrQkFaVSxzQkFBc0I7SUFjakMsOENBQWEsR0FBYjtRQUFBLGlCQWdDQztRQS9CQyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsUUFBUTtZQUNoQyxhQUFhLENBQUMsUUFBUSxDQUFDO2dCQUNyQixLQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJB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QUFqQixDQUFpQixDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQW9CLFNBQVM7cUVBQW9CO0lBQzFFO1FBQWxELFlBQVksQ0FBQyxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDLENBQUM7a0NBQWlCLFNBQVM7a0VBQW9CO0lBTnJGLHNCQUFzQjtRQVBsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLG9SQUE4QztZQUU5QyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsd0JBQXNCLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUFzQixDQUFDLENBQUM7WUFDcEcsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O1NBQ2hELENBQUM7eUNBV3FCLFVBQVUsRUFBUyxpQkFBaUI7T0FWOUMsc0JBQXNCLENBOEVsQztJQUFELDZCQUFDO0NBQUEsQUE5RUQsQ0FBNEMsV0FBVyxHQThFdEQ7U0E5RVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sQmFzZX0gZnJvbSAnLi4vY29udHJvbC1iYXNlJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4uLy4uL2hlbHBlci9kZWZhdWx0LXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7Q2hlY2tib3hDb21wb25lbnR9IGZyb20gJy4uL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQge0FycmF5SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvYXJyYXktaGVscGVyJztcbmltcG9ydCB7VHlwZUFsaWFzfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZS1hbGlhcyc7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtNC1jaGVja2JveC1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbRGVmYXVsdFZhbHVlQWNjZXNzb3IuZ2V0KENoZWNrYm94R3JvdXBDb21wb25lbnQpLCBUeXBlQWxpYXMuZ2V0KENoZWNrYm94R3JvdXBDb21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hHcm91cENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xCYXNlPGFueVtdPiB7XG5cbiAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcbiAgQElucHV0KCkgb3B0aW9uczogeyBbdGl0bGU6IHN0cmluZ106IGFueSB9O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBDaGVja2JveENvbXBvbmVudCksIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgY2hlY2tib3hlc0NvbnRlbnQ6IFF1ZXJ5TGlzdDxDaGVja2JveENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBDaGVja2JveENvbXBvbmVudCkpIGNoZWNrYm94ZXNWaWV3OiBRdWVyeUxpc3Q8Q2hlY2tib3hDb21wb25lbnQ+O1xuXG4gIHByaXZhdGUgY2hlY2tib3hlczogUXVlcnlMaXN0PENoZWNrYm94Q29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjZFJlZik7XG4gIH1cblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoZWNrYm94ZXMgPSAhIXRoaXMub3B0aW9ucyA/IHRoaXMuY2hlY2tib3hlc1ZpZXcgOiB0aGlzLmNoZWNrYm94ZXNDb250ZW50O1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94Q3JlYXRpb25zID0gdGhpcy5jaGVja2JveGVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY2hlY2tib3hDb21wbGV0ZSkgPT4ge1xuICAgICAgICAgICAgaXRlbS51cGRhdGVQcm9wZXJ0eSgncmVhZG9ubHknLCB0aGlzLnJlYWRvbmx5KTtcblxuICAgICAgICAgICAgaXRlbS5yZWdpc3Rlck9uQ2hhbmdlKCh2KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY29tcHV0ZUlubmVyVmFsdWUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdGVtLnJlZ2lzdGVyT25Ub3VjaGVkKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50b3VjaENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGl0ZW0uY3JlYXRlQ29udHJvbCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94Q29tcGxldGUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgUHJvbWlzZS5hbGwoY2hlY2tib3hDcmVhdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FsbE5ld1ZhbHVlKCk7XG4gICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlSW5uZXJWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmNoZWNrYm94ZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pbm5lclZhbHVlID09PSB0cnVlICYmIGl0ZW0udmFsdWUpLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodmFsdWVzKTtcbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIGl0ZW0uZGlzYWJsZShkaXNhYmxlZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5ld1ZhbHVlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jaGVja2JveGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja2JveGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0ud3JpdGVWYWx1ZSh0aGlzLmlubmVyVmFsdWUgJiYgQXJyYXlIZWxwZXIuY29udGFpbnModGhpcy5pbm5lclZhbHVlLCBpdGVtLnZhbHVlKSk7XG4gICAgfSk7XG4gIH1cblxuICBuZXdDbGFzc1ZhbHVlKG5ld0NsYXNzZXM6IHN0cmluZ1tdLCBvbGRDbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuY2hlY2tib3hlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgaXRlbS5uZXdDbGFzc1ZhbHVlKG5ld0NsYXNzZXMsIG9sZENsYXNzZXMpO1xuICAgICAgfSwgMSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==