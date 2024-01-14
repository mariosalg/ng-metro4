import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
var RatingComponent = /** @class */ (function (_super) {
    __extends(RatingComponent, _super);
    function RatingComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RatingComponent_1 = RatingComponent;
    RatingComponent.prototype.createControl = function () {
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
            _this.rating = _this.clonedElement.rating().data('rating');
            _this.clonedElement.parent().find('ul li').one('click', function () {
                _this.touchCallback();
            });
            _this.clonedElement.on('change', function () {
                var newValue = _this.clonedElement.val();
                var valueParsed = +newValue;
                if (!Number.isNaN(valueParsed)) {
                    _this.changeValue(valueParsed);
                }
                else {
                    _this.changeValue(newValue);
                }
            });
            complete();
        });
    };
    RatingComponent.prototype.disable = function (disabled) {
        if (disabled) {
            this.clonedElement.parent().parent().addClass('disabled');
        }
        else {
            this.clonedElement.parent().parent().removeClass('disabled');
        }
    };
    RatingComponent.prototype.newValue = function () {
        if (!this.rating) {
            return;
        }
        var stars = this.clonedElement.parent().find('ul li');
        stars.removeClass('on');
        if (this.values) {
            var index = this.values.indexOf(this.innerValue);
            if (index !== -1) {
                for (var i = 0; i <= index; i++) {
                    $(stars.get(i)).addClass('on');
                }
            }
        }
        else {
            this.rating.val(this.innerValue);
        }
    };
    RatingComponent.prototype.newClassValue = function (newClasses, oldClasses) {
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
        });
    };
    var RatingComponent_1;
    __decorate([
        Input('stars'),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "stars", void 0);
    __decorate([
        Input('round-func'),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "roundFunc", void 0);
    __decorate([
        Input('values'),
        __metadata("design:type", Array)
    ], RatingComponent.prototype, "values", void 0);
    __decorate([
        Input('message'),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "message", void 0);
    __decorate([
        Input('star-color'),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "starColor", void 0);
    __decorate([
        Input('stared-color'),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "staredColor", void 0);
    __decorate([
        Input('static'),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "static", void 0);
    __decorate([
        Input('cls-rating'),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "clsRating", void 0);
    __decorate([
        Input('cls-stars'),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "clsStars", void 0);
    __decorate([
        Input('cls-result'),
        __metadata("design:type", String)
    ], RatingComponent.prototype, "clsResult", void 0);
    __decorate([
        ViewChild('input', { static: true }),
        __metadata("design:type", ElementRef)
    ], RatingComponent.prototype, "input", void 0);
    RatingComponent = RatingComponent_1 = __decorate([
        Component({
            selector: 'm4-rating',
            template: "<input type=\"text\" #input\n\n\n       [attr.data-stars]=\"values ? values.length : stars\"\n       [attr.data-round-func]=\"roundFunc\"\n       [attr.data-values]=\"values?.join(',')\"\n       [attr.data-message]=\"message\"\n       [attr.data-star-color]=\"starColor\"\n       [attr.data-stared-color]=\"staredColor\"\n       [attr.data-static]=\"static\"\n\n       [attr.data-cls-rating]=\"clsRating\"\n       [attr.data-cls-stars]=\"clsStars\"\n       [attr.data-cls-result]=\"clsResult\">\n",
            encapsulation: ViewEncapsulation.None,
            providers: [DefaultValueAccessor.get(RatingComponent_1), TypeAlias.get(RatingComponent_1)],
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".rating.primary .stars li{color:#3969a0}.rating.primary .stars li.on{color:#0366d6}.rating.secondary .stars li{color:#767676}.rating.secondary .stars li.on{color:#607d8b}.rating.success .stars li{color:#607947}.rating.success .stars li.on{color:#60a917}.rating.alert .stars li{color:#906d6b}.rating.alert .stars li.on{color:#ce352c}.rating.warning .stars li{color:#d19c75}.rating.warning .stars li.on{color:#ff9447}.rating.yellow .stars li{color:#e0d3a3}.rating.yellow .stars li.on{color:#ffe484}.rating.info .stars li{color:#8baebf}.rating.info .stars li.on{color:#5ebdec}.rating.dark .stars li,.rating.dark .stars li.on{color:#505050}.rating.light .stars li,.rating.light .stars li.on{color:#f8f8f8}.disabled .rating .stars li.on{color:#e4e4e4!important}"]
        })
    ], RatingComponent);
    return RatingComponent;
}(ControlBase));
export { RatingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUVuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFZeEQ7SUFBcUMsbUNBQTBCO0lBQS9EOztJQW1HQSxDQUFDO3dCQW5HWSxlQUFlO0lBa0IxQix1Q0FBYSxHQUFiO1FBQUEsaUJBaUNDO1FBaENDLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQyxRQUFRO1lBQ2hDLElBQU0sZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFbkMsSUFBSSxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3RDO1lBRUQsS0FBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0MsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFcEQsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV6RCxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUNyRCxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Z0JBQzlCLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzFDLElBQU0sV0FBVyxHQUFHLENBQUMsUUFBUSxDQUFDO2dCQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDOUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDL0I7cUJBQU07b0JBQ0wsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDNUI7WUFDSCxDQUFDLENBQUMsQ0FBQztZQUVILFFBQVEsRUFBRSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLFFBQWlCO1FBQ3ZCLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDM0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFFRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVuRCxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDL0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hDO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2xDO0lBRUgsQ0FBQztJQUVELHVDQUFhLEdBQWIsVUFBYyxVQUFvQixFQUFFLFVBQW9CO1FBQXhELGlCQWNDO1FBYkMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUNyQixJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQU0sUUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRTNDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFXO29CQUM3QixRQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQztnQkFFSCxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVztvQkFDN0IsUUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7SUEvRmU7UUFBZixLQUFLLENBQUMsT0FBTyxDQUFDOztrREFBZTtJQUNUO1FBQXBCLEtBQUssQ0FBQyxZQUFZLENBQUM7O3NEQUEwQjtJQUM3QjtRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOzttREFBMkI7SUFDekI7UUFBakIsS0FBSyxDQUFDLFNBQVMsQ0FBQzs7b0RBQWlCO0lBQ2I7UUFBcEIsS0FBSyxDQUFDLFlBQVksQ0FBQzs7c0RBQW1CO0lBQ2hCO1FBQXRCLEtBQUssQ0FBQyxjQUFjLENBQUM7O3dEQUFxQjtJQUMxQjtRQUFoQixLQUFLLENBQUMsUUFBUSxDQUFDOzttREFBaUI7SUFFWjtRQUFwQixLQUFLLENBQUMsWUFBWSxDQUFDOztzREFBbUI7SUFDbkI7UUFBbkIsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7cURBQWtCO0lBQ2hCO1FBQXBCLEtBQUssQ0FBQyxZQUFZLENBQUM7O3NEQUFtQjtJQUVEO1FBQXJDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQWdCLFVBQVU7a0RBQUM7SUFkckQsZUFBZTtRQVIzQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQiw0ZkFBc0M7WUFFdEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFDckMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLGlCQUFlLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFlLENBQUMsQ0FBQztZQUN0RixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQztPQUNXLGVBQWUsQ0FtRzNCO0lBQUQsc0JBQUM7Q0FBQSxBQW5HRCxDQUFxQyxXQUFXLEdBbUcvQztTQW5HWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vaGVscGVyL2RlZmF1bHQtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHtUeXBlQWxpYXN9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlLWFsaWFzJztcbmltcG9ydCB7YXNhcFNjaGVkdWxlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1JvdW5kVHlwZVR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5pbXBvcnQge09iamVjdEhlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LXJhdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYXRpbmcuY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbRGVmYXVsdFZhbHVlQWNjZXNzb3IuZ2V0KFJhdGluZ0NvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoUmF0aW5nQ29tcG9uZW50KV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCBleHRlbmRzIENvbnRyb2xCYXNlPHN0cmluZ3xudW1iZXI+IHtcblxuICBASW5wdXQoJ3N0YXJzJykgc3RhcnM6IG51bWJlcjtcbiAgQElucHV0KCdyb3VuZC1mdW5jJykgcm91bmRGdW5jOiBSb3VuZFR5cGVUeXBlO1xuICBASW5wdXQoJ3ZhbHVlcycpIHZhbHVlczogKHN0cmluZ3xudW1iZXIpW107XG4gIEBJbnB1dCgnbWVzc2FnZScpIG1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCdzdGFyLWNvbG9yJykgc3RhckNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgnc3RhcmVkLWNvbG9yJykgc3RhcmVkQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCdzdGF0aWMnKSBzdGF0aWM6IGJvb2xlYW47XG5cbiAgQElucHV0KCdjbHMtcmF0aW5nJykgY2xzUmF0aW5nOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXN0YXJzJykgY2xzU3RhcnM6IHN0cmluZztcbiAgQElucHV0KCdjbHMtcmVzdWx0JykgY2xzUmVzdWx0OiBzdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIHJhdGluZzogYW55O1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG5cbiAgICAgIHRoaXMucmF0aW5nID0gdGhpcy5jbG9uZWRFbGVtZW50LnJhdGluZygpLmRhdGEoJ3JhdGluZycpO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkuZmluZCgndWwgbGknKS5vbmUoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvdWNoQ2FsbGJhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmNsb25lZEVsZW1lbnQudmFsKCk7XG4gICAgICAgIGNvbnN0IHZhbHVlUGFyc2VkID0gK25ld1ZhbHVlO1xuXG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHZhbHVlUGFyc2VkKSkge1xuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUodmFsdWVQYXJzZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29tcGxldGUoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgbmV3VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJhdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJzID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLmZpbmQoJ3VsIGxpJyk7XG4gICAgc3RhcnMucmVtb3ZlQ2xhc3MoJ29uJyk7XG5cbiAgICBpZiAodGhpcy52YWx1ZXMpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy52YWx1ZXMuaW5kZXhPZih0aGlzLmlubmVyVmFsdWUpO1xuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4OyBpKyspIHtcbiAgICAgICAgICAkKHN0YXJzLmdldChpKSkuYWRkQ2xhc3MoJ29uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yYXRpbmcudmFsKHRoaXMuaW5uZXJWYWx1ZSk7XG4gICAgfVxuXG4gIH1cblxuICBuZXdDbGFzc1ZhbHVlKG5ld0NsYXNzZXM6IHN0cmluZ1tdLCBvbGRDbGFzc2VzOiBzdHJpbmdbXSkge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCk7XG5cbiAgICAgICAgb2xkQ2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhjbHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBuZXdDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGFyZ2V0LmFkZENsYXNzKGNscyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==