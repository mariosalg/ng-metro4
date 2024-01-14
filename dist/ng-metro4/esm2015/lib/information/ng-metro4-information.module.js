import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintDirective } from './hint/hint.directive';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';
import { NotifyService } from './notify/notify.service';
import { ToastService } from './toast/toast.service';
import 'metro4';
const declarations = [
    HintDirective,
    DialogComponent
];
let NgMetro4InformationModule = class NgMetro4InformationModule {
};
NgMetro4InformationModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            ...declarations,
        ],
        exports: [
            ...declarations
        ],
        providers: [
            DialogService,
            NotifyService,
            ToastService
        ]
    })
], NgMetro4InformationModule);
export { NgMetro4InformationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWV0cm80LWluZm9ybWF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9pbmZvcm1hdGlvbi9uZy1tZXRybzQtaW5mb3JtYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sUUFBUSxDQUFDO0FBRWhCLE1BQU0sWUFBWSxHQUFHO0lBQ25CLGFBQWE7SUFDYixlQUFlO0NBQ2hCLENBQUM7QUFrQkYsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7Q0FBSSxDQUFBO0FBQTdCLHlCQUF5QjtJQWhCckMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtTQUNiO1FBQ0QsWUFBWSxFQUFFO1lBQ1osR0FBRyxZQUFZO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsR0FBRyxZQUFZO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsYUFBYTtZQUNiLGFBQWE7WUFDYixZQUFZO1NBQ2I7S0FDRixDQUFDO0dBQ1cseUJBQXlCLENBQUk7U0FBN0IseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIaW50RGlyZWN0aXZlIH0gZnJvbSAnLi9oaW50L2hpbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9nL2RpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHtEaWFsb2dTZXJ2aWNlfSBmcm9tICcuL2RpYWxvZy9kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQge05vdGlmeVNlcnZpY2V9IGZyb20gJy4vbm90aWZ5L25vdGlmeS5zZXJ2aWNlJztcbmltcG9ydCB7VG9hc3RTZXJ2aWNlfSBmcm9tICcuL3RvYXN0L3RvYXN0LnNlcnZpY2UnO1xuaW1wb3J0ICdtZXRybzQnO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG4gIEhpbnREaXJlY3RpdmUsXG4gIERpYWxvZ0NvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5kZWNsYXJhdGlvbnMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5kZWNsYXJhdGlvbnNcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGlhbG9nU2VydmljZSxcbiAgICBOb3RpZnlTZXJ2aWNlLFxuICAgIFRvYXN0U2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nTWV0cm80SW5mb3JtYXRpb25Nb2R1bGUgeyB9XG4iXX0=