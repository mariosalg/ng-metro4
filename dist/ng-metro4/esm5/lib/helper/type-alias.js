import { forwardRef } from '@angular/core';
import { ControlBase } from '../form/control-base';
var TypeAlias = /** @class */ (function () {
    function TypeAlias() {
    }
    TypeAlias.get = function (type) {
        return {
            provide: ControlBase,
            useExisting: forwardRef(function () { return type; })
        };
    };
    return TypeAlias;
}());
export { TypeAlias };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1hbGlhcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXIvdHlwZS1hbGlhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRDtJQUFBO0lBT0EsQ0FBQztJQU5lLGFBQUcsR0FBakIsVUFBa0IsSUFBUztRQUN6QixPQUFPO1lBQ0wsT0FBTyxFQUFFLFdBQVc7WUFDcEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztTQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2ZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sQmFzZX0gZnJvbSAnLi4vZm9ybS9jb250cm9sLWJhc2UnO1xuXG5leHBvcnQgY2xhc3MgVHlwZUFsaWFzIHtcbiAgcHVibGljIHN0YXRpYyBnZXQodHlwZTogYW55KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3ZpZGU6IENvbnRyb2xCYXNlLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gdHlwZSlcbiAgICB9O1xuICB9XG59XG4iXX0=