import { __decorate, __metadata } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
var HotkeyDirective = /** @class */ (function () {
    function HotkeyDirective() {
        this.hotkeyClick = new EventEmitter();
    }
    HotkeyDirective.prototype.createElement = function () {
        var _this = this;
        this.unregister();
        this.previousKey = this.hotkey;
        $('body').hotkey(this.hotkey, function () {
            _this.hotkeyClick.emit();
        });
    };
    HotkeyDirective.prototype.ngOnInit = function () {
        this.createElement();
    };
    HotkeyDirective.prototype.ngOnChanges = function (changes) {
        this.createElement();
    };
    HotkeyDirective.prototype.unregister = function () {
        if (this.previousKey) {
            $('body').off('keyup', null, { ns: 'hotkey-method-' + this.previousKey });
        }
    };
    HotkeyDirective.prototype.ngOnDestroy = function () {
        this.unregister();
    };
    __decorate([
        Input('m4-hotkey'),
        __metadata("design:type", String)
    ], HotkeyDirective.prototype, "hotkey", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], HotkeyDirective.prototype, "hotkeyClick", void 0);
    HotkeyDirective = __decorate([
        Directive({
            selector: '[m4-hotkey]'
        }),
        __metadata("design:paramtypes", [])
    ], HotkeyDirective);
    return HotkeyDirective;
}());
export { HotkeyDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9ob3RrZXkvaG90a2V5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBT2xIO0lBTUU7UUFKVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJNUIsQ0FBQztJQUVSLHVDQUFhLEdBQXJCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRS9CLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM1QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLG9DQUFVLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFDLEVBQUUsRUFBRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztTQUN6RTtJQUNILENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFoQ21CO1FBQW5CLEtBQUssQ0FBQyxXQUFXLENBQUM7O21EQUFnQjtJQUN6QjtRQUFULE1BQU0sRUFBRTs7d0RBQWtDO0lBRmhDLGVBQWU7UUFIM0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7U0FDeEIsQ0FBQzs7T0FDVyxlQUFlLENBa0MzQjtJQUFELHNCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7U0FsQ1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttNC1ob3RrZXldJ1xufSlcbmV4cG9ydCBjbGFzcyBIb3RrZXlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCdtNC1ob3RrZXknKSBob3RrZXk6IHN0cmluZztcbiAgQE91dHB1dCgpIGhvdGtleUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgcHJldmlvdXNLZXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHJpdmF0ZSBjcmVhdGVFbGVtZW50KCkge1xuICAgIHRoaXMudW5yZWdpc3RlcigpO1xuICAgIHRoaXMucHJldmlvdXNLZXkgPSB0aGlzLmhvdGtleTtcblxuICAgICQoJ2JvZHknKS5ob3RrZXkodGhpcy5ob3RrZXksICgpID0+IHtcbiAgICAgIHRoaXMuaG90a2V5Q2xpY2suZW1pdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gIH1cblxuICBwcml2YXRlIHVucmVnaXN0ZXIoKSB7XG4gICAgaWYgKHRoaXMucHJldmlvdXNLZXkpIHtcbiAgICAgICQoJ2JvZHknKS5vZmYoJ2tleXVwJywgbnVsbCwge25zOiAnaG90a2V5LW1ldGhvZC0nICsgdGhpcy5wcmV2aW91c0tleX0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5yZWdpc3RlcigpO1xuICB9XG59XG4iXX0=