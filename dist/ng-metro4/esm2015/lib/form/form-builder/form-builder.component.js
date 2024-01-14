import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { M4FormGroup } from '../m4-form-group';
import { M4FormControl } from '../m4-form-control';
let FormBuilderComponent = class FormBuilderComponent {
    constructor() { }
    ngOnInit() {
        this.formStyle = this.formGroup.formStyle;
        this.dynamicControls = Object.keys(this.formGroup.controls)
            .map((key, index) => {
            const control = this.formGroup.controls[key];
            if (control instanceof M4FormControl) {
                control.fieldName = key;
                control.index = index;
                return control;
            }
        })
            .filter((control) => !!control);
    }
};
__decorate([
    Input(),
    __metadata("design:type", M4FormGroup)
], FormBuilderComponent.prototype, "formGroup", void 0);
FormBuilderComponent = __decorate([
    Component({
        selector: 'm4-form-builder',
        template: "<m4-form-wrapper [formGroup]=\"formGroup\" [title]=\"formStyle?.title | unwrapObservableOrValue\"\n                 [description]=\"formStyle?.description | unwrapObservableOrValue\" [show-errors]=\"!formStyle?.hideErrors\">\n  <m4-dynamic-form-control *ngFor=\"let control of dynamicControls\" [formControl]=\"control\"></m4-dynamic-form-control>\n\n  <ng-template #formError let-error=\"error\">\n    <span *ngIf=\"formStyle?.createError; else defaultError\"\n                  [innerHTML]=\"formStyle.createError | executeFunctionOnce:error | unwrapObservableOrValue | trustHtml\">\n    </span>\n    <ng-template #defaultError>\n      {{ error }}\n    </ng-template>\n  </ng-template>\n</m4-form-wrapper>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], FormBuilderComponent);
export { FormBuilderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1idWlsZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2Zvcm0tYnVpbGRlci9mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQVksV0FBVyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBUWpELElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBTS9CLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBRTFDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzthQUN4RCxHQUFHLENBQUMsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDbEMsTUFBTSxPQUFPLEdBQW9CLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTlELElBQUksT0FBTyxZQUFZLGFBQWEsRUFBRTtnQkFDcEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixPQUFPLE9BQU8sQ0FBQzthQUNoQjtRQUNILENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxDQUFDLE9BQTJCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBRUYsQ0FBQTtBQXZCVTtJQUFSLEtBQUssRUFBRTs4QkFBWSxXQUFXO3VEQUFDO0FBRHJCLG9CQUFvQjtJQUxoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLGl0QkFBNEM7O0tBRTdDLENBQUM7O0dBQ1csb0JBQW9CLENBd0JoQztTQXhCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1TdHlsZSwgTTRGb3JtR3JvdXB9IGZyb20gJy4uL200LWZvcm0tZ3JvdXAnO1xuaW1wb3J0IHtNNEZvcm1Db250cm9sfSBmcm9tICcuLi9tNC1mb3JtLWNvbnRyb2wnO1xuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtZm9ybS1idWlsZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvcm0tYnVpbGRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zvcm0tYnVpbGRlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRm9ybUJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmb3JtR3JvdXA6IE00Rm9ybUdyb3VwO1xuXG4gIGZvcm1TdHlsZTogRm9ybVN0eWxlO1xuICBkeW5hbWljQ29udHJvbHM6IE00Rm9ybUNvbnRyb2w8YW55PltdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mb3JtU3R5bGUgPSB0aGlzLmZvcm1Hcm91cC5mb3JtU3R5bGU7XG5cbiAgICB0aGlzLmR5bmFtaWNDb250cm9scyA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKVxuICAgICAgLm1hcCgoa2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgY29udHJvbDogQWJzdHJhY3RDb250cm9sID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNba2V5XTtcblxuICAgICAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIE00Rm9ybUNvbnRyb2wpIHtcbiAgICAgICAgICBjb250cm9sLmZpZWxkTmFtZSA9IGtleTtcbiAgICAgICAgICBjb250cm9sLmluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgcmV0dXJuIGNvbnRyb2w7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChjb250cm9sOiBNNEZvcm1Db250cm9sPGFueT4pID0+ICEhY29udHJvbCk7XG4gIH1cblxufVxuIl19