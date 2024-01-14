import { __decorate, __read, __spread } from "tslib";
import 'metro4';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GravatarComponent } from './gravatar/gravatar.component';
import { DonutComponent } from './donut/donut.component';
import { ProgressComponent } from './progress/progress.component';
import { ActivityComponent } from './activity/activity.component';
import { PopoverDirective } from './popover/popover.directive';
import { PanelComponent } from './panel/panel.component';
import { HotkeyDirective } from './hotkey/hotkey.directive';
import { PopoverComponent } from './popover/popover.component';
import { ActivityService } from './activity/activity.service';
import { DraggableDirective } from './draggable/draggable.directive';
var declarations = [
    GravatarComponent,
    DonutComponent,
    ProgressComponent,
    ActivityComponent,
    PopoverDirective,
    PanelComponent,
    HotkeyDirective,
    PopoverComponent,
    DraggableDirective
];
var NgMetro4ControlsModule = /** @class */ (function () {
    function NgMetro4ControlsModule() {
    }
    NgMetro4ControlsModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
            ],
            declarations: __spread(declarations),
            exports: __spread(declarations),
            providers: [
                ActivityService
            ]
        })
    ], NgMetro4ControlsModule);
    return NgMetro4ControlsModule;
}());
export { NgMetro4ControlsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWV0cm80LWNvbnRyb2xzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9uZy1tZXRybzQtY29udHJvbHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLFFBQVEsQ0FBQztBQUNoQixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsSUFBTSxZQUFZLEdBQUc7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDbkIsQ0FBQztBQWdCRjtJQUFBO0lBQ0EsQ0FBQztJQURZLHNCQUFzQjtRQWRsQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTthQUNiO1lBQ0QsWUFBWSxXQUNQLFlBQVksQ0FDaEI7WUFDRCxPQUFPLFdBQ0YsWUFBWSxDQUNoQjtZQUNELFNBQVMsRUFBRTtnQkFDVCxlQUFlO2FBQ2hCO1NBQ0YsQ0FBQztPQUNXLHNCQUFzQixDQUNsQztJQUFELDZCQUFDO0NBQUEsQUFERCxJQUNDO1NBRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdtZXRybzQnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7R3JhdmF0YXJDb21wb25lbnR9IGZyb20gJy4vZ3JhdmF0YXIvZ3JhdmF0YXIuY29tcG9uZW50JztcbmltcG9ydCB7RG9udXRDb21wb25lbnR9IGZyb20gJy4vZG9udXQvZG9udXQuY29tcG9uZW50JztcbmltcG9ydCB7UHJvZ3Jlc3NDb21wb25lbnR9IGZyb20gJy4vcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50JztcbmltcG9ydCB7QWN0aXZpdHlDb21wb25lbnR9IGZyb20gJy4vYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50JztcbmltcG9ydCB7UG9wb3ZlckRpcmVjdGl2ZX0gZnJvbSAnLi9wb3BvdmVyL3BvcG92ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9wYW5lbC9wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG90a2V5RGlyZWN0aXZlIH0gZnJvbSAnLi9ob3RrZXkvaG90a2V5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50JztcbmltcG9ydCB7QWN0aXZpdHlTZXJ2aWNlfSBmcm9tICcuL2FjdGl2aXR5L2FjdGl2aXR5LnNlcnZpY2UnO1xuaW1wb3J0IHtEcmFnZ2FibGVEaXJlY3RpdmV9IGZyb20gJy4vZHJhZ2dhYmxlL2RyYWdnYWJsZS5kaXJlY3RpdmUnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG4gIEdyYXZhdGFyQ29tcG9uZW50LFxuICBEb251dENvbXBvbmVudCxcbiAgUHJvZ3Jlc3NDb21wb25lbnQsXG4gIEFjdGl2aXR5Q29tcG9uZW50LFxuICBQb3BvdmVyRGlyZWN0aXZlLFxuICBQYW5lbENvbXBvbmVudCxcbiAgSG90a2V5RGlyZWN0aXZlLFxuICBQb3BvdmVyQ29tcG9uZW50LFxuICBEcmFnZ2FibGVEaXJlY3RpdmVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmRlY2xhcmF0aW9ucyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLmRlY2xhcmF0aW9ucyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQWN0aXZpdHlTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdNZXRybzRDb250cm9sc01vZHVsZSB7XG59XG4iXX0=