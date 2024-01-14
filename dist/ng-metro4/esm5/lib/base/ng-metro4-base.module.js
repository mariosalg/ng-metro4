import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button/button.directive';
import { IconComponent } from './icon/icon.component';
import { RippleDirective } from './ripple/ripple.directive';
import { LoadingDirective } from './loading/loading.directive';
import { LoadingDisplayDirective } from './loading/loading-display.directive';
import { AnimationDirective } from './animation/animation.directive';
import { LetDirective } from './let/let.directive';
import 'metro4';
import { NotLoadingDisplayDirective } from './loading/not-loading-display.directive';
var declarations = [
    ButtonDirective,
    IconComponent,
    RippleDirective,
    LoadingDirective,
    LoadingDisplayDirective,
    NotLoadingDisplayDirective,
    AnimationDirective,
    LetDirective,
];
var NgMetro4BaseModule = /** @class */ (function () {
    function NgMetro4BaseModule() {
    }
    NgMetro4BaseModule = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: __spread(declarations),
            exports: __spread(declarations)
        })
    ], NgMetro4BaseModule);
    return NgMetro4BaseModule;
}());
export { NgMetro4BaseModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWV0cm80LWJhc2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2Jhc2UvbmctbWV0cm80LWJhc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFFbkYsSUFBTSxZQUFZLEdBQUc7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7Q0FDYixDQUFDO0FBYUY7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQVg5QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTthQUNiO1lBQ0QsWUFBWSxXQUNQLFlBQVksQ0FDaEI7WUFDRCxPQUFPLFdBQ0YsWUFBWSxDQUNoQjtTQUNGLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7U0FBdEIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi9idXR0b24uZGlyZWN0aXZlJztcbmltcG9ydCB7IEljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24vaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmlwcGxlRGlyZWN0aXZlIH0gZnJvbSAnLi9yaXBwbGUvcmlwcGxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMb2FkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9sb2FkaW5nL2xvYWRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IExvYWRpbmdEaXNwbGF5RGlyZWN0aXZlIH0gZnJvbSAnLi9sb2FkaW5nL2xvYWRpbmctZGlzcGxheS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9hbmltYXRpb24vYW5pbWF0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMZXREaXJlY3RpdmUgfSBmcm9tICcuL2xldC9sZXQuZGlyZWN0aXZlJztcbmltcG9ydCAnbWV0cm80JztcbmltcG9ydCB7Tm90TG9hZGluZ0Rpc3BsYXlEaXJlY3RpdmV9IGZyb20gJy4vbG9hZGluZy9ub3QtbG9hZGluZy1kaXNwbGF5LmRpcmVjdGl2ZSc7XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcbiAgQnV0dG9uRGlyZWN0aXZlLFxuICBJY29uQ29tcG9uZW50LFxuICBSaXBwbGVEaXJlY3RpdmUsXG4gIExvYWRpbmdEaXJlY3RpdmUsXG4gIExvYWRpbmdEaXNwbGF5RGlyZWN0aXZlLFxuICBOb3RMb2FkaW5nRGlzcGxheURpcmVjdGl2ZSxcbiAgQW5pbWF0aW9uRGlyZWN0aXZlLFxuICBMZXREaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmRlY2xhcmF0aW9ucyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLmRlY2xhcmF0aW9uc1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nTWV0cm80QmFzZU1vZHVsZSB7IH1cbiJdfQ==