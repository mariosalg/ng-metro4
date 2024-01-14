import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
import { StringHelper } from '../../helper/string-helper';
var SelectComponent = /** @class */ (function (_super) {
    __extends(SelectComponent, _super);
    function SelectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.multiple = false;
        _this.duration = 0;
        return _this;
    }
    SelectComponent_1 = SelectComponent;
    SelectComponent.prototype.createControl = function () {
        var _this = this;
        return new Promise(function (complete) {
            var originalElement = $(_this.input.nativeElement);
            ObjectHelper.hide(originalElement);
            if (_this.clonedElement) {
                _this.clonedElement.children().appendTo(originalElement);
                _this.clonedElement.parent().remove();
            }
            _this.clonedElement = originalElement.clone();
            ObjectHelper.show(_this.clonedElement);
            originalElement.parent().append(_this.clonedElement);
            originalElement.children().appendTo(_this.clonedElement);
            _this.select = _this.clonedElement.select().data('select');
            _this.clonedElement.parent().on('mousedown', function (ev) {
                if (ev.button === 0) {
                    _this.touchCallback();
                    _this.clonedElement.parent().off('mousedown');
                }
            });
            _this.select.options.onChange = function (val) {
                if (_this.options instanceof Array) {
                    var allOptions_1 = [];
                    _this.options.forEach(function (option) {
                        if (!!option.options) {
                            option.options.forEach(function (subOption) {
                                allOptions_1.push(subOption);
                            });
                        }
                        else {
                            allOptions_1.push(option);
                        }
                    });
                    val = val.map(function (key) { return allOptions_1.find(function (option) { return StringHelper.createHash(option.value) === key; }); }).filter(function (v) { return !!v; }).map(function (v) { return v.value; });
                }
                if (_this.multiple) {
                    _this.changeValue(val.slice(0));
                }
                else {
                    _this.changeValue(val[0]);
                }
            };
            if (_this.options && !(_this.options instanceof Array)) {
                _this.select.data(_this.options);
            }
            complete();
        });
    };
    SelectComponent.prototype.disable = function (disabled) {
        if (disabled) {
            this.select.disable();
        }
        else {
            this.select.enable();
        }
    };
    SelectComponent.prototype.newValue = function () {
        if (!this.select) {
            return;
        }
        var selectValue = this.multiple ? this.innerValue : [this.innerValue];
        if (this.options instanceof Array) {
            selectValue = selectValue.map(function (v) { return StringHelper.createHash(v); });
        }
        if (this.multiple) {
            this.select.reset();
        }
        this.select.val(selectValue);
    };
    SelectComponent.prototype.newClassValue = function (newClasses, oldClasses) {
        var _this = this;
        asapScheduler.schedule(function () {
            if (_this.clonedElement) {
                var target_1 = _this.clonedElement.parent();
                oldClasses.forEach(function (cls) {
                    target_1.removeClass(cls);
                });
                newClasses.forEach(function (cls) {
                    target_1.addClass(cls);
                });
            }
        }, 1);
    };
    var SelectComponent_1;
    __decorate([
        Input('options'),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "options", void 0);
    __decorate([
        Input('multiple'),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "multiple", void 0);
    __decorate([
        Input('duration'),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "duration", void 0);
    __decorate([
        Input('prepend'),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "prepend", void 0);
    __decorate([
        Input('append'),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "append", void 0);
    __decorate([
        Input('drop-height'),
        __metadata("design:type", Number)
    ], SelectComponent.prototype, "dropHeight", void 0);
    __decorate([
        Input('filter'),
        __metadata("design:type", Boolean)
    ], SelectComponent.prototype, "filter", void 0);
    __decorate([
        Input('filter-placeholder'),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "filterPlaceholder", void 0);
    __decorate([
        Input('cls-select'),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "clsSelect", void 0);
    __decorate([
        Input('cls-prepend'),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "clsPrepend", void 0);
    __decorate([
        Input('cls-append'),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "clsAppend", void 0);
    __decorate([
        Input('cls-option'),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "clsOption", void 0);
    __decorate([
        Input('cls-option-group'),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "clsOptionGroup", void 0);
    __decorate([
        Input('cls-drop-list'),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "clsDropList", void 0);
    __decorate([
        Input('cls-selected-item'),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "clsSelectedItem", void 0);
    __decorate([
        Input('cls-selected-item-remover'),
        __metadata("design:type", String)
    ], SelectComponent.prototype, "clsSelectedItemRemover", void 0);
    __decorate([
        ViewChild('input', { static: true }),
        __metadata("design:type", ElementRef)
    ], SelectComponent.prototype, "input", void 0);
    SelectComponent = SelectComponent_1 = __decorate([
        Component({
            selector: 'm4-select',
            template: "<select #input [multiple]=\"multiple\"\n\n\n        [attr.data-prepend]=\"prepend\"\n        [attr.data-duration]=\"duration\"\n        [attr.data-append]=\"append\"\n        [attr.data-drop-height]=\"dropHeight\"\n        [attr.data-filter]=\"filter\"\n        [attr.data-filter-placeholder]=\"filterPlaceholder\"\n\n        [attr.data-cls-select]=\"clsSelect\"\n        [attr.data-cls-prepend]=\"clsPrepend\"\n        [attr.data-cls-append]=\"clsAppend\"\n        [attr.data-cls-option]=\"clsOption\"\n        [attr.data-cls-option-group]=\"clsOptionGroup\"\n        [attr.data-cls-drop-list]=\"clsDropList\"\n        [attr.data-cls-selected-item]=\"clsSelectedItem\"\n        [attr.data-cls-selected-item-remover]=\"clsSelectedItemRemover\">\n\n  <ng-content *ngIf=\"!options\"></ng-content>\n\n  <ng-container *ngIf=\"options | isArray\">\n    <ng-container *ngFor=\"let option of options\">\n      <option *ngIf=\"!option.options\" [value]=\"option.value | createHash\" [attr.data-template]=\"option.dataTemplate\">\n        {{option.title}}\n      </option>\n\n      <optgroup *ngIf=\"option.options\" [label]=\"option.groupName\">\n        <option *ngFor=\"let childOption of option.options\" [value]=\"childOption.value | createHash\" [attr.data-template]=\"childOption.dataTemplate\">\n          {{childOption.title}}\n        </option>\n      </optgroup>\n    </ng-container>\n  </ng-container>\n</select>\n",
            providers: [DefaultValueAccessor.get(SelectComponent_1), TypeAlias.get(SelectComponent_1)],
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [""]
        })
    ], SelectComponent);
    return SelectComponent;
}(ControlBase));
export { SelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBaUJ4RDtJQUFxQyxtQ0FBNEI7SUFBakU7UUFBQSxxRUEySEM7UUF2SG9CLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUSxHQUFHLENBQUMsQ0FBQzs7SUFzSGxDLENBQUM7d0JBM0hZLGVBQWU7SUF5QjFCLHVDQUFhLEdBQWI7UUFBQSxpQkF1REM7UUF0REMsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLFFBQVE7WUFDaEMsSUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuQyxJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN4RCxLQUFJLENBQUMsYUFBYSxDQUFD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LEdBQUcsQ0FBQyxpQkFBZSxDQUFDLENBQUM7WUFDdEYsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O1NBQ2hELENBQUM7T0FDVyxlQUFlLENBMkgzQjtJQUFELHNCQUFDO0NBQUEsQUEzSEQsQ0FBcUMsV0FBVyxHQTJIL0M7U0EzSFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbEJhc2V9IGZyb20gJy4uL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHthc2FwU2NoZWR1bGVyfSBmcm9tICdyeGpzJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5pbXBvcnQge1N0cmluZ0hlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL3N0cmluZy1oZWxwZXInO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGF0YVRlbXBsYXRlOiBzdHJpbmc7XG4gIHZhbHVlOiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWxlY3QuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoU2VsZWN0Q29tcG9uZW50KSwgVHlwZUFsaWFzLmdldChTZWxlY3RDb21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8b2JqZWN0fG9iamVjdFtdPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCdvcHRpb25zJykgb3B0aW9uczogeyBba2V5OiBzdHJpbmddOiAoc3RyaW5nIHwgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSkgfSB8XG4gICAgKE9wdGlvbiB8IHsgZ3JvdXBOYW1lOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbltdIH0pW107XG4gIEBJbnB1dCgnbXVsdGlwbGUnKSBtdWx0aXBsZSA9IGZhbHNlO1xuICBASW5wdXQoJ2R1cmF0aW9uJykgZHVyYXRpb24gPSAwO1xuICBASW5wdXQoJ3ByZXBlbmQnKSBwcmVwZW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgnYXBwZW5kJykgYXBwZW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgnZHJvcC1oZWlnaHQnKSBkcm9wSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgnZmlsdGVyJykgZmlsdGVyOiBib29sZWFuO1xuICBASW5wdXQoJ2ZpbHRlci1wbGFjZWhvbGRlcicpIGZpbHRlclBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KCdjbHMtc2VsZWN0JykgY2xzU2VsZWN0OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXByZXBlbmQnKSBjbHNQcmVwZW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWFwcGVuZCcpIGNsc0FwcGVuZDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1vcHRpb24nKSBjbHNPcHRpb246IHN0cmluZztcbiAgQElucHV0KCdjbHMtb3B0aW9uLWdyb3VwJykgY2xzT3B0aW9uR3JvdXA6IHN0cmluZztcbiAgQElucHV0KCdjbHMtZHJvcC1saXN0JykgY2xzRHJvcExpc3Q6IHN0cmluZztcbiAgQElucHV0KCdjbHMtc2VsZWN0ZWQtaXRlbScpIGNsc1NlbGVjdGVkSXRlbTogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1zZWxlY3RlZC1pdGVtLXJlbW92ZXInKSBjbHNTZWxlY3RlZEl0ZW1SZW1vdmVyOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIHNlbGVjdDogYW55O1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LmNoaWxkcmVuKCkuYXBwZW5kVG8ob3JpZ2luYWxFbGVtZW50KTtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG5cbiAgICAgIG9yaWdpbmFsRWxlbWVudC5jaGlsZHJlbigpLmFwcGVuZFRvKHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICB0aGlzLnNlbGVjdCA9IHRoaXMuY2xvbmVkRWxlbWVudC5zZWxlY3QoKS5kYXRhKCdzZWxlY3QnKTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLm9uKCdtb3VzZWRvd24nLCAoZXY6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICAgIHRoaXMudG91Y2hDYWxsYmFjaygpO1xuICAgICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5vZmYoJ21vdXNlZG93bicpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zZWxlY3Qub3B0aW9ucy5vbkNoYW5nZSA9ICh2YWwpID0+IHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgY29uc3QgYWxsT3B0aW9uczogT3B0aW9uW10gPSBbXTtcblxuICAgICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb246IE9wdGlvbiAgfCB7IG9wdGlvbnM6IE9wdGlvbltdIH0pID0+IHtcbiAgICAgICAgICAgIGlmICghISg8YW55Pm9wdGlvbikub3B0aW9ucykge1xuICAgICAgICAgICAgICAoPGFueT5vcHRpb24pLm9wdGlvbnMuZm9yRWFjaCgoc3ViT3B0aW9uOiBPcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBhbGxPcHRpb25zLnB1c2goc3ViT3B0aW9uKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhbGxPcHRpb25zLnB1c2goPE9wdGlvbj5vcHRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFsID0gdmFsLm1hcChrZXkgPT4gYWxsT3B0aW9ucy5maW5kKG9wdGlvbiA9PiBTdHJpbmdIZWxwZXIuY3JlYXRlSGFzaChvcHRpb24udmFsdWUpID09PSBrZXkpKS5maWx0ZXIodiA9PiAhIXYpLm1hcCh2ID0+IHYudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbC5zbGljZSgwKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh2YWxbMF0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zICYmICEodGhpcy5vcHRpb25zIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0LmRhdGEodGhpcy5vcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgY29tcGxldGUoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbikge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZWxlY3QuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdC5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBuZXdWYWx1ZSgpIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdFZhbHVlOiBhbnlbXSA9IHRoaXMubXVsdGlwbGUgPyA8YW55W10+dGhpcy5pbm5lclZhbHVlIDogWyB0aGlzLmlubmVyVmFsdWUgXTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgc2VsZWN0VmFsdWUgPSBzZWxlY3RWYWx1ZS5tYXAodiA9PiBTdHJpbmdIZWxwZXIuY3JlYXRlSGFzaCh2KSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0LnJlc2V0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZWxlY3QudmFsKHNlbGVjdFZhbHVlKTtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKTtcblxuICAgICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGNscyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoY2xzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMSk7XG4gIH1cbn1cbiJdfQ==