var RadioGroupComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, forwardRef, Input, QueryList, ViewChildren } from '@angular/core';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { ControlBase } from '../control-base';
import { RadioComponent } from '../radio/radio.component';
import { StringHelper } from '../../helper/string-helper';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
let RadioGroupComponent = RadioGroupComponent_1 = class RadioGroupComponent extends ControlBase {
    constructor(element, cdRef) {
        super(element, cdRef);
        this.name = StringHelper.guid();
    }
    createControl() {
        return new Promise((complete) => {
            asapScheduler.schedule(() => {
                this.radios = !!this.options ? this.radiosView : this.radiosContent;
                const radioCreations = this.radios.map((item) => {
                    return new Promise((radioComplete) => {
                        item.name = this.name;
                        item.registerOnChange((v) => {
                            this.changeValue(v);
                            this.newValue();
                        });
                        item.registerOnTouched(() => {
                            this.touchCallback();
                        });
                        asapScheduler.schedule(() => {
                            item.createControl().then(() => {
                                radioComplete();
                            });
                        }, 1);
                    });
                });
                Promise.all(radioCreations).then(() => {
                    this.callNewValue();
                    complete();
                });
            });
        });
    }
    disable(disabled) {
        this.radios.forEach((item) => {
            asapScheduler.schedule(() => {
                item.disable(disabled);
            }, 1);
        });
    }
    newValue() {
        if (!this.radios) {
            return;
        }
        this.radios.forEach((item) => {
            item.writeValue(this.innerValue);
        });
    }
    newClassValue(newClasses, oldClasses) {
        this.radios.forEach((item) => {
            asapScheduler.schedule(() => {
                item.newClassValue(newClasses, oldClasses);
            }, 1);
        });
    }
};
RadioGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], RadioGroupComponent.prototype, "options", void 0);
__decorate([
    ContentChildren(forwardRef(() => RadioComponent), { descendants: true }),
    __metadata("design:type", QueryList)
], RadioGroupComponent.prototype, "radiosContent", void 0);
__decorate([
    ViewChildren(forwardRef(() => RadioComponent)),
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
export { RadioGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vcmFkaW8tZ3JvdXAvcmFkaW8tZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBV25DLElBQWEsbUJBQW1CLDJCQUFoQyxNQUFhLG1CQUFvQixTQUFRLFdBQWdCO0lBV3ZELFlBQVksT0FBbUIsRUFBRSxLQUF3QjtRQUN2RCxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3BDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFO2dCQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxD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QUUzQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMscUJBQW1CLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLHFCQUFtQixDQUFDLENBQUM7UUFDOUYsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7cUNBWXFCLFVBQVUsRUFBUyxpQkFBaUI7R0FYOUMsbUJBQW1CLENBMkUvQjtTQTNFWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRyZW5cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHtSYWRpb0NvbXBvbmVudH0gZnJvbSAnLi4vcmFkaW8vcmFkaW8uY29tcG9uZW50JztcbmltcG9ydCB7U3RyaW5nSGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvc3RyaW5nLWhlbHBlcic7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtNC1yYWRpby1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhZGlvLWdyb3VwLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbRGVmYXVsdFZhbHVlQWNjZXNzb3IuZ2V0KFJhZGlvR3JvdXBDb21wb25lbnQpLCBUeXBlQWxpYXMuZ2V0KFJhZGlvR3JvdXBDb21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9Hcm91cENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xCYXNlPGFueT4ge1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IHsgW3RpdGxlOiBzdHJpbmddOiBhbnkgfTtcblxuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gUmFkaW9Db21wb25lbnQpLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIHJhZGlvc0NvbnRlbnQ6IFF1ZXJ5TGlzdDxSYWRpb0NvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBSYWRpb0NvbXBvbmVudCkpIHJhZGlvc1ZpZXc6IFF1ZXJ5TGlzdDxSYWRpb0NvbXBvbmVudD47XG5cbiAgcHJpdmF0ZSByYWRpb3M6IFF1ZXJ5TGlzdDxSYWRpb0NvbXBvbmVudD47XG5cbiAgcHVibGljIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjZFJlZik7XG4gICAgdGhpcy5uYW1lID0gU3RyaW5nSGVscGVyLmd1aWQoKTtcbiAgfVxuXG4gIGNyZWF0ZUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChjb21wbGV0ZSkgPT4ge1xuICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIHRoaXMucmFkaW9zID0gISF0aGlzLm9wdGlvbnMgPyB0aGlzLnJhZGlvc1ZpZXcgOiB0aGlzLnJhZGlvc0NvbnRlbnQ7XG5cbiAgICAgICAgY29uc3QgcmFkaW9DcmVhdGlvbnMgPSB0aGlzLnJhZGlvcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJhZGlvQ29tcGxldGUpID0+IHtcbiAgICAgICAgICAgIGl0ZW0ubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgICAgIGl0ZW0ucmVnaXN0ZXJPbkNoYW5nZSgodikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHYpO1xuICAgICAgICAgICAgICB0aGlzLm5ld1ZhbHVlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXRlbS5yZWdpc3Rlck9uVG91Y2hlZCgoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMudG91Y2hDYWxsYmFjaygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICBpdGVtLmNyZWF0ZUNvbnRyb2woKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByYWRpb0NvbXBsZXRlKCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFByb21pc2UuYWxsKHJhZGlvQ3JlYXRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNhbGxOZXdWYWx1ZSgpO1xuICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgaXRlbS5kaXNhYmxlKGRpc2FibGVkKTtcbiAgICAgIH0sIDEpO1xuICAgIH0pO1xuICB9XG5cbiAgbmV3VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJhZGlvcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmFkaW9zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0ud3JpdGVWYWx1ZSh0aGlzLmlubmVyVmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgbmV3Q2xhc3NWYWx1ZShuZXdDbGFzc2VzOiBzdHJpbmdbXSwgb2xkQ2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICB0aGlzLnJhZGlvcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgaXRlbS5uZXdDbGFzc1ZhbHVlKG5ld0NsYXNzZXMsIG9sZENsYXNzZXMpO1xuICAgICAgfSwgMSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==