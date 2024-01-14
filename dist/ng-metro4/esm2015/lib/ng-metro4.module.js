import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMetro4FormsModule } from './form/ng-metro4-forms.module';
import { NgMetro4BaseModule } from './base/ng-metro4-base.module';
import { NgMetro4ControlsModule } from './controls/ng-metro4-controls.module';
import { NgMetro4InformationModule } from './information/ng-metro4-information.module';
import 'metro4';
const imports = [
    NgMetro4BaseModule,
    NgMetro4FormsModule,
    NgMetro4ControlsModule,
    NgMetro4InformationModule
];
let NgMetro4Module = class NgMetro4Module {
};
NgMetro4Module = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ...imports
        ],
        declarations: [],
        exports: [
            ...imports,
        ],
        providers: []
    })
], NgMetro4Module);
export { NgMetro4Module };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbWV0cm80Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9uZy1tZXRybzQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUNyRixPQUFPLFFBQVEsQ0FBQztBQUVoQixNQUFNLE9BQU8sR0FBRztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtDQUMxQixDQUFDO0FBaUJGLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FDMUIsQ0FBQTtBQURZLGNBQWM7SUFmMUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLEdBQUcsT0FBTztTQUNYO1FBQ0QsWUFBWSxFQUFFLEVBRWI7UUFDRCxPQUFPLEVBQUU7WUFDUCxHQUFHLE9BQU87U0FDWDtRQUNELFNBQVMsRUFBRSxFQUVWO0tBQ0YsQ0FBQztHQUNXLGNBQWMsQ0FDMUI7U0FEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNZXRybzRGb3Jtc01vZHVsZX0gZnJvbSAnLi9mb3JtL25nLW1ldHJvNC1mb3Jtcy5tb2R1bGUnO1xuaW1wb3J0IHtOZ01ldHJvNEJhc2VNb2R1bGV9IGZyb20gJy4vYmFzZS9uZy1tZXRybzQtYmFzZS5tb2R1bGUnO1xuaW1wb3J0IHtOZ01ldHJvNENvbnRyb2xzTW9kdWxlfSBmcm9tICcuL2NvbnRyb2xzL25nLW1ldHJvNC1jb250cm9scy5tb2R1bGUnO1xuaW1wb3J0IHtOZ01ldHJvNEluZm9ybWF0aW9uTW9kdWxlfSBmcm9tICcuL2luZm9ybWF0aW9uL25nLW1ldHJvNC1pbmZvcm1hdGlvbi5tb2R1bGUnO1xuaW1wb3J0ICdtZXRybzQnO1xuXG5jb25zdCBpbXBvcnRzID0gW1xuICBOZ01ldHJvNEJhc2VNb2R1bGUsXG4gIE5nTWV0cm80Rm9ybXNNb2R1bGUsXG4gIE5nTWV0cm80Q29udHJvbHNNb2R1bGUsXG4gIE5nTWV0cm80SW5mb3JtYXRpb25Nb2R1bGVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgLi4uaW1wb3J0c1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcblxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uaW1wb3J0cyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG5cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ01ldHJvNE1vZHVsZSB7XG59XG4iXX0=