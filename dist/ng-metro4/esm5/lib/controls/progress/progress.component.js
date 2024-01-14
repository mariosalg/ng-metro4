import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { asapScheduler } from 'rxjs';
import { ObjectHelper } from '../../helper/object-helper';
var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
    }
    ProgressComponent.prototype.createControl = function () {
        var _this = this;
        asapScheduler.schedule(function () {
            var originalElement = $(_this.progress.nativeElement);
            ObjectHelper.hide(originalElement);
            if (_this.clonedElement) {
                _this.clonedElement.remove();
            }
            _this.clonedElement = originalElement.clone();
            ObjectHelper.show(_this.clonedElement);
            originalElement.parent().append(_this.clonedElement);
            _this.progressObj = _this.clonedElement.progress().data('progress');
        });
    };
    ProgressComponent.prototype.ngOnInit = function () {
        this.createControl();
    };
    ProgressComponent.prototype.ngOnChanges = function (changes) {
        if (Object.keys(changes).filter(function (c) { return c !== 'value' && c !== 'buffer'; }).length > 0) {
            this.createControl();
        }
        else {
            if (this.progressObj) {
                this.progressObj.val(this.value);
                this.progressObj.buff(this.buffer);
            }
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ProgressComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], ProgressComponent.prototype, "buffer", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ProgressComponent.prototype, "small", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ProgressComponent.prototype, "type", void 0);
    __decorate([
        Input('cls-back'),
        __metadata("design:type", String)
    ], ProgressComponent.prototype, "clsBack", void 0);
    __decorate([
        Input('cls-bar'),
        __metadata("design:type", String)
    ], ProgressComponent.prototype, "clsBar", void 0);
    __decorate([
        Input('cls-buffer'),
        __metadata("design:type", String)
    ], ProgressComponent.prototype, "clsBuffer", void 0);
    __decorate([
        ViewChild('progress', { static: true }),
        __metadata("design:type", ElementRef)
    ], ProgressComponent.prototype, "progress", void 0);
    ProgressComponent = __decorate([
        Component({
            selector: 'm4-progress',
            template: "<div #progress\n     [attr.data-value]=\"value\"\n     [attr.data-buffer]=\"buffer\"\n     [attr.data-small]=\"small\"\n     [attr.data-type]=\"type\"\n     [attr.data-cls-back]=\"clsBack\"\n     [attr.data-cls-bar]=\"clsBar\"\n     [attr.data-cls-buffer]=\"clsBuffer\"\n></div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());
export { ProgressComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2NvbnRyb2xzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUVuQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFVeEQ7SUFjRTtJQUFnQixDQUFDO0lBRVQseUNBQWEsR0FBckI7UUFBQSxpQkFlQztRQWRDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDckIsSUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkQsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuQyxJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDN0I7WUFFRCxLQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM3QyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0QyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUVwRCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLE9BQU8sSUFBSSxDQUFDLEtBQUssUUFBUSxFQUEvQixDQUErQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNoRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDcEM7U0FDRjtJQUNILENBQUM7SUE3Q1E7UUFBUixLQUFLLEVBQUU7O29EQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7O3FEQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOztvREFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTs7bURBQXdCO0lBRWI7UUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzs7c0RBQWlCO0lBQ2pCO1FBQWpCLEtBQUssQ0FBQyxTQUFTLENBQUM7O3FEQUFnQjtJQUNaO1FBQXBCLEtBQUssQ0FBQyxZQUFZLENBQUM7O3dEQUFtQjtJQUVFO1FBQXhDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7a0NBQW1CLFVBQVU7dURBQUM7SUFWM0QsaUJBQWlCO1FBTjdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLG9TQUF3QztZQUV4QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQzs7T0FDVyxpQkFBaUIsQ0FnRDdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhERCxJQWdEQztTQWhEWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7YXNhcFNjaGVkdWxlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1Byb2dyZXNzVHlwZVR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5pbXBvcnQge09iamVjdEhlbHBlcn0gZnJvbSAnLi4vLi4vaGVscGVyL29iamVjdC1oZWxwZXInO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LXByb2dyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3MuY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdmFsdWU6IG51bWJlcjtcbiAgQElucHV0KCkgYnVmZmVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNtYWxsOiBib29sZWFuO1xuICBASW5wdXQoKSB0eXBlOiBQcm9ncmVzc1R5cGVUeXBlO1xuXG4gIEBJbnB1dCgnY2xzLWJhY2snKSBjbHNCYWNrOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWJhcicpIGNsc0Jhcjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1idWZmZXInKSBjbHNCdWZmZXI6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdwcm9ncmVzcycsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgcHJvZ3Jlc3M6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgY2xvbmVkRWxlbWVudDogYW55O1xuICBwcml2YXRlIHByb2dyZXNzT2JqOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwcml2YXRlIGNyZWF0ZUNvbnRyb2woKSB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSAkKHRoaXMucHJvZ3Jlc3MubmF0aXZlRWxlbWVudCk7XG4gICAgICBPYmplY3RIZWxwZXIuaGlkZShvcmlnaW5hbEVsZW1lbnQpO1xuXG4gICAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbG9uZWRFbGVtZW50ID0gb3JpZ2luYWxFbGVtZW50LmNsb25lKCk7XG4gICAgICBPYmplY3RIZWxwZXIuc2hvdyh0aGlzLmNsb25lZEVsZW1lbnQpO1xuICAgICAgb3JpZ2luYWxFbGVtZW50LnBhcmVudCgpLmFwcGVuZCh0aGlzLmNsb25lZEVsZW1lbnQpO1xuXG4gICAgICB0aGlzLnByb2dyZXNzT2JqID0gdGhpcy5jbG9uZWRFbGVtZW50LnByb2dyZXNzKCkuZGF0YSgncHJvZ3Jlc3MnKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3JlYXRlQ29udHJvbCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoYyA9PiBjICE9PSAndmFsdWUnICYmIGMgIT09ICdidWZmZXInKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmNyZWF0ZUNvbnRyb2woKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NPYmopIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc09iai52YWwodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NPYmouYnVmZih0aGlzLmJ1ZmZlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==