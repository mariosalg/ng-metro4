import { __decorate, __extends, __metadata } from "tslib";
import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
var SliderComponent = /** @class */ (function (_super) {
    __extends(SliderComponent, _super);
    function SliderComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SliderComponent_1 = SliderComponent;
    SliderComponent.prototype.createControl = function () {
        var _this = this;
        return new Promise(function (complete) {
            var originalElement = $(_this.input.nativeElement);
            ObjectHelper.hide(originalElement);
            if (_this.clonedElement) {
                _this.clonedElement.parent().parent().find('.slider-min-max').remove();
                _this.clonedElement.parent().remove();
            }
            _this.clonedElement = originalElement.clone();
            ObjectHelper.show(_this.clonedElement);
            originalElement.parent().append(_this.clonedElement);
            _this.slider = _this.clonedElement.slider().data('slider');
            _this.clonedElement.parent().find('button.marker').one('blur', function () {
                _this.touchCallback();
            });
            _this.clonedElement.on('change', function () {
                asapScheduler.schedule(function () {
                    _this.changeValue(+_this.clonedElement.val());
                });
            });
            complete();
        });
    };
    SliderComponent.prototype.disable = function (disabled) {
        if (disabled) {
            this.clonedElement.parent().addClass('disabled');
        }
        else {
            this.clonedElement.parent().removeClass('disabled');
        }
    };
    SliderComponent.prototype.newValue = function () {
        if (!this.slider) {
            return;
        }
        this.slider.val(this.innerValue);
    };
    SliderComponent.prototype.newClassValue = function (newClasses, oldClasses) {
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
    var SliderComponent_1;
    __decorate([
        Input('min'),
        __metadata("design:type", Number)
    ], SliderComponent.prototype, "min", void 0);
    __decorate([
        Input('max'),
        __metadata("design:type", Number)
    ], SliderComponent.prototype, "max", void 0);
    __decorate([
        Input('show-min-max'),
        __metadata("design:type", Boolean)
    ], SliderComponent.prototype, "showMinMax", void 0);
    __decorate([
        Input('accuracy'),
        __metadata("design:type", Number)
    ], SliderComponent.prototype, "accuracy", void 0);
    __decorate([
        Input('buffer'),
        __metadata("design:type", Number)
    ], SliderComponent.prototype, "buffer", void 0);
    __decorate([
        Input('hint'),
        __metadata("design:type", Boolean)
    ], SliderComponent.prototype, "hint", void 0);
    __decorate([
        Input('hint-always'),
        __metadata("design:type", Boolean)
    ], SliderComponent.prototype, "hintAlways", void 0);
    __decorate([
        Input('hint-position'),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "hintPosition", void 0);
    __decorate([
        Input('hint-mask'),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "hintMask", void 0);
    __decorate([
        Input('vertical'),
        __metadata("design:type", Boolean)
    ], SliderComponent.prototype, "vertical", void 0);
    __decorate([
        Input('size'),
        __metadata("design:type", Number)
    ], SliderComponent.prototype, "size", void 0);
    __decorate([
        Input('thin'),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "thin", void 0);
    __decorate([
        Input('cycle-marker'),
        __metadata("design:type", Boolean)
    ], SliderComponent.prototype, "cycleMarker", void 0);
    __decorate([
        Input('cls-slider'),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "clsSlider", void 0);
    __decorate([
        Input('cls-backside'),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "clsBackside", void 0);
    __decorate([
        Input('cls-complete'),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "clsComplete", void 0);
    __decorate([
        Input('cls-buffer'),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "clsBuffer", void 0);
    __decorate([
        Input('cls-marker'),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "clsMarker", void 0);
    __decorate([
        Input('cls-hint'),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "clsHint", void 0);
    __decorate([
        Input('cls-min-max'),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "clsMinMax", void 0);
    __decorate([
        Input('cls-min'),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "clsMin", void 0);
    __decorate([
        Input('cls-max'),
        __metadata("design:type", String)
    ], SliderComponent.prototype, "clsMax", void 0);
    __decorate([
        ViewChild('input', { static: true }),
        __metadata("design:type", ElementRef)
    ], SliderComponent.prototype, "input", void 0);
    SliderComponent = SliderComponent_1 = __decorate([
        Component({
            selector: 'm4-slider',
            template: "<input type=\"number\" #input\n\n\n       [attr.data-min]=\"min\"\n       [attr.data-max]=\"max\"\n       [attr.data-show-min-max]=\"showMinMax\"\n       [attr.data-accuracy]=\"accuracy\"\n       [attr.data-buffer]=\"buffer\"\n       [attr.data-hint]=\"hint\"\n       [attr.data-hint-always]=\"hintAlways\"\n       [attr.data-hint-position]=\"hintPosition\"\n       [attr.data-hint-mask]=\"hintMask\"\n       [attr.data-vertical]=\"vertical\"\n       [attr.data-size]=\"size\"\n\n       [attr.data-cls-slider]=\"clsSlider\"\n       [attr.data-cls-backside]=\"clsBackside\"\n       [attr.data-cls-complete]=\"clsComplete\"\n       [attr.data-cls-buffer]=\"clsBuffer\"\n       [attr.data-cls-marker]=\"clsMarker\"\n       [attr.data-cls-hint]=\"clsHint\"\n       [attr.data-cls-min-max]=\"clsMinMax\"\n       [attr.data-cls-min]=\"clsMin\"\n       [attr.data-cls-max]=\"clsMax\"\n\n       [class.thin]=\"thin === 'thin'\"\n       [class.ultra-thin]=\"thin === 'ultra-thin'\"\n       [class.cycle-marker]=\"cycleMarker\">\n",
            providers: [DefaultValueAccessor.get(SliderComponent_1), TypeAlias.get(SliderComponent_1)],
            encapsulation: ViewEncapsulation.None,
            styles: [".slider.primary .complete{background-color:#0366d6}.slider.primary .backside{background-color:#3969a0}.slider.secondary .complete{background-color:#607d8b}.slider.secondary .backside{background-color:#767676}.slider.success .complete{background-color:#60a917}.slider.success .backside{background-color:#607947}.slider.alert .complete{background-color:#ce352c}.slider.alert .backside{background-color:#906d6b}.slider.warning .complete{background-color:#ff9447}.slider.warning .backside{background-color:#d19c75}.slider.yellow .complete{background-color:#ffe484}.slider.yellow .backside{background-color:#e0d3a3}.slider.info .complete{background-color:#5ebdec}.slider.info .backside{background-color:#8baebf}.slider.dark .backside,.slider.dark .complete{background-color:#505050}.slider.light .backside,.slider.light .complete{background-color:#f8f8f8}m4-slider .disabled .complete,m4-slider .disabled button.marker{background-color:#989898}"]
        })
    ], SliderComponent);
    return SliderComponent;
}(ControlBase));
export { SliderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUVuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFXeEQ7SUFBcUMsbUNBQW1CO0lBQXhEOztJQTJGQSxDQUFDO3dCQTNGWSxlQUFlO0lBK0IxQix1Q0FBYSxHQUFiO1FBQUEsaUJBNEJDO1FBM0JDLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxRQUFRO1lBQ2hDLElBQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0RSxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3RDO1lBRUQsS0FBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxF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LENBQUM7O3NEQUFtQjtJQUNoQjtRQUF0QixLQUFLLENBQUMsY0FBYyxDQUFDOzt3REFBcUI7SUFDcEI7UUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQzs7d0RBQXFCO0lBQ3RCO1FBQXBCLEtBQUssQ0FBQyxZQUFZLENBQUM7O3NEQUFtQjtJQUNsQjtRQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDOztzREFBbUI7SUFDcEI7UUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7b0RBQWlCO0lBQ2I7UUFBckIsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7c0RBQW1CO0lBQ3RCO1FBQWpCLEtBQUssQ0FBQyxTQUFTLENBQUM7O21EQUFnQjtJQUNmO1FBQWpCLEtBQUssQ0FBQyxTQUFTLENBQUM7O21EQUFnQjtJQUVLO1FBQXJDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQWdCLFVBQVU7a0RBQUM7SUEzQnJELGVBQWU7UUFQM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsd2dDQUFzQztZQUV0QyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsaUJBQWUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWUsQ0FBQyxDQUFDO1lBQ3RGLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO09BQ1csZUFBZSxDQTJGM0I7SUFBRCxzQkFBQztDQUFBLEFBM0ZELENBQXFDLFdBQVcsR0EyRi9DO1NBM0ZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sQmFzZX0gZnJvbSAnLi4vY29udHJvbC1iYXNlJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlQWNjZXNzb3J9IGZyb20gJy4uLy4uL2hlbHBlci9kZWZhdWx0LXZhbHVlLWFjY2Vzc29yJztcbmltcG9ydCB7VHlwZUFsaWFzfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZS1hbGlhcyc7XG5pbXBvcnQge2FzYXBTY2hlZHVsZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtQb3NpdGlvbkJhc2VUeXBlLCBUaGluVHlwZX0gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGVzJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NsaWRlci5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoU2xpZGVyQ29tcG9uZW50KSwgVHlwZUFsaWFzLmdldChTbGlkZXJDb21wb25lbnQpXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQmFzZTxudW1iZXI+IHtcblxuICBASW5wdXQoJ21pbicpIG1pbjogbnVtYmVyO1xuICBASW5wdXQoJ21heCcpIG1heDogbnVtYmVyO1xuICBASW5wdXQoJ3Nob3ctbWluLW1heCcpIHNob3dNaW5NYXg6IGJvb2xlYW47XG4gIEBJbnB1dCgnYWNjdXJhY3knKSBhY2N1cmFjeTogbnVtYmVyO1xuICBASW5wdXQoJ2J1ZmZlcicpIGJ1ZmZlcjogbnVtYmVyO1xuICBASW5wdXQoJ2hpbnQnKSBoaW50OiBib29sZWFuO1xuICBASW5wdXQoJ2hpbnQtYWx3YXlzJykgaGludEFsd2F5czogYm9vbGVhbjtcbiAgQElucHV0KCdoaW50LXBvc2l0aW9uJykgaGludFBvc2l0aW9uOiBQb3NpdGlvbkJhc2VUeXBlO1xuICBASW5wdXQoJ2hpbnQtbWFzaycpIGhpbnRNYXNrOiBzdHJpbmc7XG4gIEBJbnB1dCgndmVydGljYWwnKSB2ZXJ0aWNhbDogYm9vbGVhbjtcbiAgQElucHV0KCdzaXplJykgc2l6ZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgndGhpbicpIHRoaW46IFRoaW5UeXBlO1xuICBASW5wdXQoJ2N5Y2xlLW1hcmtlcicpIGN5Y2xlTWFya2VyOiBib29sZWFuO1xuXG4gIEBJbnB1dCgnY2xzLXNsaWRlcicpIGNsc1NsaWRlcjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1iYWNrc2lkZScpIGNsc0JhY2tzaWRlOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNvbXBsZXRlJykgY2xzQ29tcGxldGU6IHN0cmluZztcbiAgQElucHV0KCdjbHMtYnVmZmVyJykgY2xzQnVmZmVyOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLW1hcmtlcicpIGNsc01hcmtlcjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1oaW50JykgY2xzSGludDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1taW4tbWF4JykgY2xzTWluTWF4OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLW1pbicpIGNsc01pbjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1tYXgnKSBjbHNNYXg6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgc2xpZGVyOiBhbnk7XG4gIHByaXZhdGUgY2xvbmVkRWxlbWVudDogYW55O1xuXG4gIGNyZWF0ZUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChjb21wbGV0ZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnNsaWRlci1taW4tbWF4JykucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50LmNsb25lKCk7XG4gICAgICBPYmplY3RIZWxwZXIuc2hvdyh0aGlzLmNsb25lZEVsZW1lbnQpO1xuICAgICAgb3JpZ2luYWxFbGVtZW50LnBhcmVudCgpLmFwcGVuZCh0aGlzLmNsb25lZEVsZW1lbnQpO1xuXG4gICAgICB0aGlzLnNsaWRlciA9IHRoaXMuY2xvbmVkRWxlbWVudC5zbGlkZXIoKS5kYXRhKCdzbGlkZXInKTtcblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLmZpbmQoJ2J1dHRvbi5tYXJrZXInKS5vbmUoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG91Y2hDYWxsYmFjaygpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBhc2FwU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKCt0aGlzLmNsb25lZEVsZW1lbnQudmFsKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgbmV3VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNsaWRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2xpZGVyLnZhbCh0aGlzLmlubmVyVmFsdWUpO1xuICB9XG5cbiAgbmV3Q2xhc3NWYWx1ZShuZXdDbGFzc2VzOiBzdHJpbmdbXSwgb2xkQ2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCk7XG5cbiAgICAgIG9sZENsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGNscyk7XG4gICAgICB9KTtcblxuICAgICAgbmV3Q2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoY2xzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=