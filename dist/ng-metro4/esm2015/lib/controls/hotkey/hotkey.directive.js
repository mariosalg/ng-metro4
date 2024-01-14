import { __decorate, __metadata } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
let HotkeyDirective = class HotkeyDirective {
    constructor() {
        this.hotkeyClick = new EventEmitter();
    }
    createElement() {
        this.unregister();
        this.previousKey = this.hotkey;
        $('body').hotkey(this.hotkey, () => {
            this.hotkeyClick.emit();
        });
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
    unregister() {
        if (this.previousKey) {
            $('body').off('keyup', null, { ns: 'hotkey-method-' + this.previousKey });
        }
    }
    ngOnDestroy() {
        this.unregister();
    }
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
export { HotkeyDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90a2V5LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9ob3RrZXkvaG90a2V5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBT2xILElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFNMUI7UUFKVSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJNUIsQ0FBQztJQUVSLGFBQWE7UUFDbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUUvQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU8sVUFBVTtRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUMsRUFBRSxFQUFFLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUMsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztDQUNGLENBQUE7QUFqQ3FCO0lBQW5CLEtBQUssQ0FBQyxXQUFXLENBQUM7OytDQUFnQjtBQUN6QjtJQUFULE1BQU0sRUFBRTs7b0RBQWtDO0FBRmhDLGVBQWU7SUFIM0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7S0FDeEIsQ0FBQzs7R0FDVyxlQUFlLENBa0MzQjtTQWxDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW200LWhvdGtleV0nXG59KVxuZXhwb3J0IGNsYXNzIEhvdGtleURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoJ200LWhvdGtleScpIGhvdGtleTogc3RyaW5nO1xuICBAT3V0cHV0KCkgaG90a2V5Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBwcmV2aW91c0tleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgdGhpcy51bnJlZ2lzdGVyKCk7XG4gICAgdGhpcy5wcmV2aW91c0tleSA9IHRoaXMuaG90a2V5O1xuXG4gICAgJCgnYm9keScpLmhvdGtleSh0aGlzLmhvdGtleSwgKCkgPT4ge1xuICAgICAgdGhpcy5ob3RrZXlDbGljay5lbWl0KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgdW5yZWdpc3RlcigpIHtcbiAgICBpZiAodGhpcy5wcmV2aW91c0tleSkge1xuICAgICAgJCgnYm9keScpLm9mZigna2V5dXAnLCBudWxsLCB7bnM6ICdob3RrZXktbWV0aG9kLScgKyB0aGlzLnByZXZpb3VzS2V5fSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnJlZ2lzdGVyKCk7XG4gIH1cbn1cbiJdfQ==