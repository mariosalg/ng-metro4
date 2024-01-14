import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { M4FormGroup } from '../m4-form-group';
import { M4FormControl } from '../m4-form-control';
var FormBuilderComponent = /** @class */ (function () {
    function FormBuilderComponent() {
    }
    FormBuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formStyle = this.formGroup.formStyle;
        this.dynamicControls = Object.keys(this.formGroup.controls)
            .map(function (key, index) {
            var control = _this.formGroup.controls[key];
            if (control instanceof M4FormControl) {
                control.fieldName = key;
                control.index = index;
                return control;
            }
        })
            .filter(function (control) { return !!control; });
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
    return FormBuilderComponent;
}());
export { FormBuilderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1idWlsZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2Zvcm0tYnVpbGRlci9mb3JtLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN2RCxPQUFPLEVBQVksV0FBVyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDeEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBUWpEO0lBTUU7SUFBZ0IsQ0FBQztJQUVqQix1Q0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBRTFDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzthQUN4RCxHQUFHLENBQUMsVUFBQyxHQUFXLEVBQUUsS0FBYTtZQUM5QixJQUFNLE9BQU8sR0FBb0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFOUQsSUFBSSxPQUFPLFlBQVksYUFBYSxFQUFFO2dCQUNwQyxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLE9BQU8sT0FBTyxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsTUFBTSxDQUFDLFVBQUMsT0FBMkIsSUFBSyxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQXJCUTtRQUFSLEtBQUssRUFBRTtrQ0FBWSxXQUFXOzJEQUFDO0lBRHJCLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLGl0QkFBNEM7O1NBRTdDLENBQUM7O09BQ1csb0JBQW9CLENBd0JoQztJQUFELDJCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F4Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtU3R5bGUsIE00Rm9ybUdyb3VwfSBmcm9tICcuLi9tNC1mb3JtLWdyb3VwJztcbmltcG9ydCB7TTRGb3JtQ29udHJvbH0gZnJvbSAnLi4vbTQtZm9ybS1jb250cm9sJztcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LWZvcm0tYnVpbGRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb3JtLWJ1aWxkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mb3JtLWJ1aWxkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1CdWlsZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZm9ybUdyb3VwOiBNNEZvcm1Hcm91cDtcblxuICBmb3JtU3R5bGU6IEZvcm1TdHlsZTtcbiAgZHluYW1pY0NvbnRyb2xzOiBNNEZvcm1Db250cm9sPGFueT5bXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybVN0eWxlID0gdGhpcy5mb3JtR3JvdXAuZm9ybVN0eWxlO1xuXG4gICAgdGhpcy5keW5hbWljQ29udHJvbHMgPSBPYmplY3Qua2V5cyh0aGlzLmZvcm1Hcm91cC5jb250cm9scylcbiAgICAgIC5tYXAoKGtleTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2tleV07XG5cbiAgICAgICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBNNEZvcm1Db250cm9sKSB7XG4gICAgICAgICAgY29udHJvbC5maWVsZE5hbWUgPSBrZXk7XG4gICAgICAgICAgY29udHJvbC5pbmRleCA9IGluZGV4O1xuICAgICAgICAgIHJldHVybiBjb250cm9sO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoY29udHJvbDogTTRGb3JtQ29udHJvbDxhbnk+KSA9PiAhIWNvbnRyb2wpO1xuICB9XG5cbn1cbiJdfQ==