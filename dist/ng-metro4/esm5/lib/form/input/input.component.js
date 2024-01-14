import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
var InputComponent = /** @class */ (function (_super) {
    __extends(InputComponent, _super);
    function InputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchButtonClick = new EventEmitter();
        _this.readonly = false;
        _this.placeholder = '';
        _this.type = 'text';
        _this.customButtons = [];
        return _this;
    }
    InputComponent_1 = InputComponent;
    InputComponent.prototype.createControl = function () {
        var _this = this;
        return new Promise(function (complete) {
            var originalElement = $(_this.input.nativeElement);
            ObjectHelper.hide(originalElement);
            if (_this.clonedElement) {
                _this.clonedElement.parent().remove();
            }
            _this.clonedElement = originalElement.clone();
            ObjectHelper.show(_this.clonedElement);
            originalElement.parent().append(_this.clonedElement);
            _this.inputObj = _this.clonedElement.input({
                customButtons: _this.customButtons,
                onSearchButtonClick: function (val) { return _this.searchButtonClick.emit(val); }
            }).data('input');
            _this.clonedElement.one('blur', function () {
                _this.touchCallback();
            });
            _this.clonedElement.on('keydown change', function (event) {
                asapScheduler.schedule(function () {
                    var newValue = _this.clonedElement.val();
                    if (_this.type === 'number') {
                        newValue = +newValue;
                    }
                    _this.changeValue(newValue);
                }, 1);
            });
            complete();
        });
    };
    InputComponent.prototype.disable = function (disabled) {
        if (disabled) {
            this.inputObj.disable();
        }
        else {
            this.inputObj.enable();
        }
    };
    InputComponent.prototype.newValue = function () {
        if (!this.inputObj) {
            return;
        }
        this.clonedElement.val(this.innerValue);
    };
    InputComponent.prototype.newClassValue = function (newClasses, oldClasses) {
        if (this.clonedElement) {
            var target_1 = this.clonedElement.parent();
            oldClasses.forEach(function (cls) {
                target_1.removeClass(cls);
            });
            newClasses.forEach(function (cls) {
                target_1.addClass(cls);
            });
        }
    };
    var InputComponent_1;
    __decorate([
        Output('search-button-click'),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "searchButtonClick", void 0);
    __decorate([
        Input('readonly'),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "readonly", void 0);
    __decorate([
        Input('placeholder'),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "placeholder", void 0);
    __decorate([
        Input('type'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "type", void 0);
    __decorate([
        Input('default-value'),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "defaultValue", void 0);
    __decorate([
        Input('size'),
        __metadata("design:type", Number)
    ], InputComponent.prototype, "size", void 0);
    __decorate([
        Input('prepend'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "prepend", void 0);
    __decorate([
        Input('append'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "append", void 0);
    __decorate([
        Input('clear-button'),
        __metadata("design:type", Boolean)
    ], InputComponent.prototype, "clearButton", void 0);
    __decorate([
        Input('clear-button-icon'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "clearButtonIcon", void 0);
    __decorate([
        Input('reveal-button'),
        __metadata("design:type", Boolean)
    ], InputComponent.prototype, "revealButton", void 0);
    __decorate([
        Input('reveal-button-icon'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "revealButtonIcon", void 0);
    __decorate([
        Input('custom-buttons'),
        __metadata("design:type", Array)
    ], InputComponent.prototype, "customButtons", void 0);
    __decorate([
        Input('search-button'),
        __metadata("design:type", Boolean)
    ], InputComponent.prototype, "searchButton", void 0);
    __decorate([
        Input('search-button-icon'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "searchButtonIcon", void 0);
    __decorate([
        Input('autocomplete'),
        __metadata("design:type", Array)
    ], InputComponent.prototype, "autocomplete", void 0);
    __decorate([
        Input('autocomplete-list-height'),
        __metadata("design:type", Number)
    ], InputComponent.prototype, "autocompleteListHeight", void 0);
    __decorate([
        Input('cls-component'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "clsComponent", void 0);
    __decorate([
        Input('cls-input'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "clsInput", void 0);
    __decorate([
        Input('cls-prepend'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "clsPrepend", void 0);
    __decorate([
        Input('cls-append'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "clsAppend", void 0);
    __decorate([
        Input('cls-clear-button'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "clsClearButton", void 0);
    __decorate([
        Input('cls-reveal-button'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "clsRevealButton", void 0);
    __decorate([
        Input('cls-custom-button'),
        __metadata("design:type", String)
    ], InputComponent.prototype, "clsCustomButton", void 0);
    __decorate([
        ViewChild('input', { static: true }),
        __metadata("design:type", ElementRef)
    ], InputComponent.prototype, "input", void 0);
    InputComponent = InputComponent_1 = __decorate([
        Component({
            selector: 'm4-input',
            template: "<input [type]=\"type\" #input\n\n       [readonly]=\"readonly\"\n       [placeholder]=\"placeholder\"\n\n       [attr.data-default-value]=\"defaultValue\"\n       [attr.data-size]=\"size\"\n       [attr.data-prepend]=\"prepend\"\n       [attr.data-append]=\"append\"\n       [attr.data-clear-button]=\"clearButton\"\n       [attr.data-clear-button-icon]=\"clearButtonIcon\"\n       [attr.data-reveal-button]=\"revealButton\"\n       [attr.data-reveal-button-icon]=\"revealButtonIcon\"\n       [attr.data-search-button]=\"searchButton\"\n       [attr.data-search-button-icon]=\"searchButtonIcon\"\n       data-search-button-click=\"custom\"\n       [attr.data-autocomplete]=\"autocomplete?.join(',')\"\n       [attr.data-autocomplete-list-height]=\"autocompleteListHeight\"\n\n       [attr.data-cls-component]=\"clsComponent\"\n       [attr.data-cls-input]=\"clsInput\"\n       [attr.data-cls-prepend]=\"clsPrepend\"\n       [attr.data-cls-append]=\"clsAppend\"\n       [attr.data-cls-clear-button]=\"clsClearButton\"\n       [attr.data-cls-reveal-button]=\"clsRevealButton\"\n       [attr.data-cls-custom-button]=\"clsCustomButton\">\n",
            providers: [DefaultValueAccessor.get(InputComponent_1), TypeAlias.get(InputComponent_1)],
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["m4-input .autocomplete-list{z-index:1000}"]
        })
    ], InputComponent);
    return InputComponent;
}(ControlBase));
export { InputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Zvcm0vaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQUUsU0FBUyxFQUNqQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQWF4RDtJQUFvQyxrQ0FBMEI7SUFBOUQ7UUFBQSxxRUFtR0M7UUFsR2dDLHVCQUFpQixHQUFHLElBQUksWUFBWSxFQUFpQixDQUFDO1FBRWxFLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDZCxpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUN4QixVQUFJLEdBQWMsTUFBTSxDQUFDO1FBU2YsbUJBQWEsR0FBcUQsRUFBRSxDQUFDOztJQXFGaEcsQ0FBQzt1QkFuR1ksY0FBYztJQWdDekIsc0NBQWEsR0FBYjtRQUFBLGlCQW9DQztRQW5DQyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQUMsUUFBUTtZQUNoQyxJQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRW5DLElBQUksS0FBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN0QztZQUVELEtBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXBELEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQ3ZDLGFBQWEsRUFBRSxLQUFJLENBQUMsYUFBYTtnQkFDakMsbUJBQW1CLEVBQUUsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFoQyxDQUFnQzthQUMvRCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWpCLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBRUgsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxLQUFLO2dCQUM1QyxhQUFhLENBQUMsUUFBUSxDQUFDO29CQUNyQixJQUFJLFFBQVEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUV4QyxJQUFJLEtBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO3dCQUMxQixRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUM7cUJBQ3RCO29CQUVELEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNSLENBQUMsQ0FBQyxDQUFDO1lBRUgsUUFBUSxFQUFFLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBTyxHQUFQLFVBQVEsUUFBaUI7UUFDdkIsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3pCO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxVQUFvQixFQUFFLFVBQW9CO1FBQ3RELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFNLFFBQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTNDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXO2dCQUM3QixRQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1lBRUgsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVc7Z0JBQzdCLFFBQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O0lBakc4QjtRQUE5QixNQUFNLENBQUMscUJBQXFCLENBQUM7OzZEQUF1RDtJQUVsRTtRQUFsQixLQUFLLENBQUMsVUFBVSxDQUFDOztvREFBa0I7SUFDZDtRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOzt1REFBa0I7SUFDeEI7UUFBZCxLQUFLLENBQUMsTUFBTSxDQUFDOztnREFBMEI7SUFDaEI7UUFBdkIsS0FBSyxDQUFDLGVBQWUsQ0FBQzs7d0RBQW1CO0lBQzNCO1FBQWQsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7Z0RBQWM7SUFDVjtRQUFqQixLQUFLLENBQUMsU0FBUyxDQUFDOzttREFBaUI7SUFDakI7UUFBaEIsS0FBSyxDQUFDLFFBQVEsQ0FBQzs7a0RBQWdCO0lBQ1Q7UUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQzs7dURBQXNCO0lBQ2hCO1FBQTNCLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQzs7MkRBQXlCO0lBQzVCO1FBQXZCLEtBQUssQ0FBQyxlQUFlLENBQUM7O3dEQUF1QjtJQUNqQjtRQUE1QixLQUFLLENBQUMsb0JBQW9CLENBQUM7OzREQUEwQjtJQUM3QjtRQUF4QixLQUFLLENBQUMsZ0JBQWdCLENBQUM7O3lEQUFzRTtJQUN0RTtRQUF2QixLQUFLLENBQUMsZUFBZSxDQUFDOzt3REFBdUI7SUFDakI7UUFBNUIsS0FBSyxDQUFDLG9CQUFvQixDQUFDOzs0REFBMEI7SUFDL0I7UUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQzs7d0RBQXdCO0lBQ1g7UUFBbEMsS0FBSyxDQUFDLDBCQUEwQixDQUFDOztrRUFBZ0M7SUFFMUM7UUFBdkIsS0FBSyxDQUFDLGVBQWUsQ0FBQzs7d0RBQXNCO0lBQ3pCO1FBQW5CLEtBQUssQ0FBQyxXQUFXLENBQUM7O29EQUFrQjtJQUNmO1FBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7O3NEQUFvQjtJQUNwQjtRQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDOztxREFBbUI7SUFDWjtRQUExQixLQUFLLENBQUMsa0JBQWtCLENBQUM7OzBEQUF3QjtJQUN0QjtRQUEzQixLQUFLLENBQUMsbUJBQW1CLENBQUM7OzJEQUF5QjtJQUN4QjtRQUEzQixLQUFLLENBQUMsbUJBQW1CLENBQUM7OzJEQUF5QjtJQUVkO1FBQXJDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQWdCLFVBQVU7aURBQUM7SUE1QnJELGNBQWM7UUFSMUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsMm5DQUFxQztZQUVyQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsZ0JBQWMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWMsQ0FBQyxDQUFDO1lBQ3BGLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDO09BQ1csY0FBYyxDQW1HMUI7SUFBRCxxQkFBQztDQUFBLEFBbkdELENBQW9DLFdBQVcsR0FtRzlDO1NBbkdZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vaGVscGVyL2RlZmF1bHQtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHtUeXBlQWxpYXN9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlLWFsaWFzJztcbmltcG9ydCB7YXNhcFNjaGVkdWxlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge09iamVjdEhlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xuaW1wb3J0IHtJbnB1dFR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW0RlZmF1bHRWYWx1ZUFjY2Vzc29yLmdldChJbnB1dENvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoSW5wdXRDb21wb25lbnQpXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQmFzZTxzdHJpbmd8bnVtYmVyPiB7XG4gIEBPdXRwdXQoJ3NlYXJjaC1idXR0b24tY2xpY2snKSBzZWFyY2hCdXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nfG51bWJlcj4oKTtcblxuICBASW5wdXQoJ3JlYWRvbmx5JykgcmVhZG9ubHkgPSBmYWxzZTtcbiAgQElucHV0KCdwbGFjZWhvbGRlcicpIHBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgndHlwZScpIHR5cGU6IElucHV0VHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCdkZWZhdWx0LXZhbHVlJykgZGVmYXVsdFZhbHVlOiBhbnk7XG4gIEBJbnB1dCgnc2l6ZScpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCdwcmVwZW5kJykgcHJlcGVuZDogc3RyaW5nO1xuICBASW5wdXQoJ2FwcGVuZCcpIGFwcGVuZDogc3RyaW5nO1xuICBASW5wdXQoJ2NsZWFyLWJ1dHRvbicpIGNsZWFyQnV0dG9uOiBib29sZWFuO1xuICBASW5wdXQoJ2NsZWFyLWJ1dHRvbi1pY29uJykgY2xlYXJCdXR0b25JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgncmV2ZWFsLWJ1dHRvbicpIHJldmVhbEJ1dHRvbjogYm9vbGVhbjtcbiAgQElucHV0KCdyZXZlYWwtYnV0dG9uLWljb24nKSByZXZlYWxCdXR0b25JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY3VzdG9tLWJ1dHRvbnMnKSBjdXN0b21CdXR0b25zOiB7IGh0bWw6IHN0cmluZywgY2xzOiBzdHJpbmcsIG9uY2xpY2s6IHN0cmluZyB9W10gPSBbXTtcbiAgQElucHV0KCdzZWFyY2gtYnV0dG9uJykgc2VhcmNoQnV0dG9uOiBib29sZWFuO1xuICBASW5wdXQoJ3NlYXJjaC1idXR0b24taWNvbicpIHNlYXJjaEJ1dHRvbkljb246IHN0cmluZztcbiAgQElucHV0KCdhdXRvY29tcGxldGUnKSBhdXRvY29tcGxldGU6IHN0cmluZ1tdO1xuICBASW5wdXQoJ2F1dG9jb21wbGV0ZS1saXN0LWhlaWdodCcpIGF1dG9jb21wbGV0ZUxpc3RIZWlnaHQ6IG51bWJlcjtcblxuICBASW5wdXQoJ2Nscy1jb21wb25lbnQnKSBjbHNDb21wb25lbnQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtaW5wdXQnKSBjbHNJbnB1dDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1wcmVwZW5kJykgY2xzUHJlcGVuZDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1hcHBlbmQnKSBjbHNBcHBlbmQ6IHN0cmluZztcbiAgQElucHV0KCdjbHMtY2xlYXItYnV0dG9uJykgY2xzQ2xlYXJCdXR0b246IHN0cmluZztcbiAgQElucHV0KCdjbHMtcmV2ZWFsLWJ1dHRvbicpIGNsc1JldmVhbEJ1dHRvbjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jdXN0b20tYnV0dG9uJykgY2xzQ3VzdG9tQnV0dG9uOiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGlucHV0T2JqOiBhbnk7XG4gIHByaXZhdGUgY2xvbmVkRWxlbWVudDogYW55O1xuXG4gIGNyZWF0ZUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChjb21wbGV0ZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcblxuICAgICAgdGhpcy5pbnB1dE9iaiA9IHRoaXMuY2xvbmVkRWxlbWVudC5pbnB1dCh7XG4gICAgICAgIGN1c3RvbUJ1dHRvbnM6IHRoaXMuY3VzdG9tQnV0dG9ucyxcbiAgICAgICAgb25TZWFyY2hCdXR0b25DbGljazogKHZhbCkgPT4gdGhpcy5zZWFyY2hCdXR0b25DbGljay5lbWl0KHZhbClcbiAgICAgIH0pLmRhdGEoJ2lucHV0Jyk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5vbmUoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG91Y2hDYWxsYmFjaygpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5vbigna2V5ZG93biBjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgbGV0IG5ld1ZhbHVlID0gdGhpcy5jbG9uZWRFbGVtZW50LnZhbCgpO1xuXG4gICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gK25ld1ZhbHVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9LCAxKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5pbnB1dE9iai5kaXNhYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5wdXRPYmouZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgbmV3VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlucHV0T2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jbG9uZWRFbGVtZW50LnZhbCh0aGlzLmlubmVyVmFsdWUpO1xuICB9XG5cbiAgbmV3Q2xhc3NWYWx1ZShuZXdDbGFzc2VzOiBzdHJpbmdbXSwgb2xkQ2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCk7XG5cbiAgICAgIG9sZENsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGNscyk7XG4gICAgICB9KTtcblxuICAgICAgbmV3Q2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoY2xzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19