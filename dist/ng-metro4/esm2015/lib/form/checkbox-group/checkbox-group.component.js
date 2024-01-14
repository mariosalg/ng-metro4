var CheckboxGroupComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, forwardRef, Input, QueryList, ViewChildren } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ArrayHelper } from '../../helper/array-helper';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
let CheckboxGroupComponent = CheckboxGroupComponent_1 = class CheckboxGroupComponent extends ControlBase {
    constructor(element, cdRef) {
        super(element, cdRef);
        this.readonly = false;
    }
    createControl() {
        return new Promise((complete) => {
            asapScheduler.schedule(() => {
                this.checkboxes = !!this.options ? this.checkboxesView : this.checkboxesContent;
                const checkboxCreations = this.checkboxes.map((item) => {
                    return new Promise((checkboxComplete) => {
                        item.updateProperty('readonly', this.readonly);
                        item.registerOnChange((v) => {
                            this.computeInnerValue();
                        });
                        item.registerOnTouched(() => {
                            this.touchCallback();
                        });
                        asapScheduler.schedule(() => {
                            item.createControl().then(() => {
                                checkboxComplete();
                            });
                        });
                    });
                });
                Promise.all(checkboxCreations).then(() => {
                    this.callNewValue();
                    complete();
                });
            });
        });
    }
    computeInnerValue() {
        const values = this.checkboxes.filter(item => item.innerValue === true && item.value).map(item => item.value);
        this.changeValue(values);
    }
    disable(disabled) {
        this.checkboxes.forEach((item) => {
            asapScheduler.schedule(() => {
                item.disable(disabled);
            });
        });
    }
    newValue() {
        if (!this.checkboxes) {
            return;
        }
        this.checkboxes.forEach((item) => {
            item.writeValue(this.innerValue && ArrayHelper.contains(this.innerValue, item.value));
        });
    }
    newClassValue(newClasses, oldClasses) {
        this.checkboxes.forEach((item) => {
            asapScheduler.schedule(() => {
                item.newClassValue(newClasses, oldClasses);
            }, 1);
        });
    }
};
CheckboxGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], CheckboxGroupComponent.prototype, "readonly", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CheckboxGroupComponent.prototype, "options", void 0);
__decorate([
    ContentChildren(forwardRef(() => CheckboxComponent), { descendants: true }),
    __metadata("design:type", QueryList)
], CheckboxGroupComponent.prototype, "checkboxesContent", void 0);
__decorate([
    ViewChildren(forwardRef(() => CheckboxComponent)),
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
export { CheckboxGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vY2hlY2tib3gtZ3JvdXAvY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBU25DLElBQWEsc0JBQXNCLDhCQUFuQyxNQUFhLHNCQUF1QixTQUFRLFdBQWtCO0lBVTVELFlBQVksT0FBbUIsRUFBRSxLQUF3QjtRQUN2RCxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBVGYsYUFBUSxHQUFHLEtBQUssQ0FBQztJQVUxQixDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMs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QUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTs7dURBQW1DO0FBRWtDO0lBQTVFLGVBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBb0IsU0FBUztpRUFBb0I7QUFDMUU7SUFBbEQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOzhCQUFpQixTQUFTOzhEQUFvQjtBQU5yRixzQkFBc0I7SUFQbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixvUkFBOEM7UUFFOUMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLHdCQUFzQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBc0IsQ0FBQyxDQUFDO1FBQ3BHLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNoRCxDQUFDO3FDQVdxQixVQUFVLEVBQVMsaUJBQWlCO0dBVjlDLHNCQUFzQixDQThFbEM7U0E5RVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sQmFzZX0gZnJvbSAnLi4vY29udHJvbC1iYXNlJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4uLy4uL2hlbHBlci9kZWZhdWx0LXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7Q2hlY2tib3hDb21wb25lbnR9IGZyb20gJy4uL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudCc7XG5pbXBvcnQge0FycmF5SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvYXJyYXktaGVscGVyJztcbmltcG9ydCB7VHlwZUFsaWFzfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZS1hbGlhcyc7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtNC1jaGVja2JveC1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGVja2JveC1ncm91cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbRGVmYXVsdFZhbHVlQWNjZXNzb3IuZ2V0KENoZWNrYm94R3JvdXBDb21wb25lbnQpLCBUeXBlQWxpYXMuZ2V0KENoZWNrYm94R3JvdXBDb21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hHcm91cENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xCYXNlPGFueVtdPiB7XG5cbiAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcbiAgQElucHV0KCkgb3B0aW9uczogeyBbdGl0bGU6IHN0cmluZ106IGFueSB9O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBDaGVja2JveENvbXBvbmVudCksIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgY2hlY2tib3hlc0NvbnRlbnQ6IFF1ZXJ5TGlzdDxDaGVja2JveENvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGRyZW4oZm9yd2FyZFJlZigoKSA9PiBDaGVja2JveENvbXBvbmVudCkpIGNoZWNrYm94ZXNWaWV3OiBRdWVyeUxpc3Q8Q2hlY2tib3hDb21wb25lbnQ+O1xuXG4gIHByaXZhdGUgY2hlY2tib3hlczogUXVlcnlMaXN0PENoZWNrYm94Q29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjZFJlZik7XG4gIH1cblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoZWNrYm94ZXMgPSAhIXRoaXMub3B0aW9ucyA/IHRoaXMuY2hlY2tib3hlc1ZpZXcgOiB0aGlzLmNoZWNrYm94ZXNDb250ZW50O1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94Q3JlYXRpb25zID0gdGhpcy5jaGVja2JveGVzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY2hlY2tib3hDb21wbGV0ZSkgPT4ge1xuICAgICAgICAgICAgaXRlbS51cGRhdGVQcm9wZXJ0eSgncmVhZG9ubHknLCB0aGlzLnJlYWRvbmx5KTtcblxuICAgICAgICAgICAgaXRlbS5yZWdpc3Rlck9uQ2hhbmdlKCh2KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuY29tcHV0ZUlubmVyVmFsdWUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdGVtLnJlZ2lzdGVyT25Ub3VjaGVkKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50b3VjaENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICAgIGl0ZW0uY3JlYXRlQ29udHJvbCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoZWNrYm94Q29tcGxldGUoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgUHJvbWlzZS5hbGwoY2hlY2tib3hDcmVhdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FsbE5ld1ZhbHVlKCk7XG4gICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlSW5uZXJWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmNoZWNrYm94ZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pbm5lclZhbHVlID09PSB0cnVlICYmIGl0ZW0udmFsdWUpLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodmFsdWVzKTtcbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrYm94ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgIGl0ZW0uZGlzYWJsZShkaXNhYmxlZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5ld1ZhbHVlKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jaGVja2JveGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja2JveGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0ud3JpdGVWYWx1ZSh0aGlzLmlubmVyVmFsdWUgJiYgQXJyYXlIZWxwZXIuY29udGFpbnModGhpcy5pbm5lclZhbHVlLCBpdGVtLnZhbHVlKSk7XG4gICAgfSk7XG4gIH1cblxuICBuZXdDbGFzc1ZhbHVlKG5ld0NsYXNzZXM6IHN0cmluZ1tdLCBvbGRDbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuY2hlY2tib3hlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgaXRlbS5uZXdDbGFzc1ZhbHVlKG5ld0NsYXNzZXMsIG9sZENsYXNzZXMpO1xuICAgICAgfSwgMSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==