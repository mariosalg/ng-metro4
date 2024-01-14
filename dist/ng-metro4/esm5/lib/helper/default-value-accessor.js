import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef } from '@angular/core';
var DefaultValueAccessor = /** @class */ (function () {
    function DefaultValueAccessor() {
    }
    DefaultValueAccessor.get = function (type) {
        return {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(function () { return type; }),
            multi: true
        };
    };
    return DefaultValueAccessor;
}());
export { DefaultValueAccessor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDO0lBQUE7SUFRQSxDQUFDO0lBUGUsd0JBQUcsR0FBakIsVUFBa0IsSUFBUztRQUN6QixPQUFPO1lBQ0wsT0FBTyxFQUFFLGlCQUFpQjtZQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1lBQ25DLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQztJQUNKLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQUFSRCxJQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIERlZmF1bHRWYWx1ZUFjY2Vzc29yIHtcbiAgcHVibGljIHN0YXRpYyBnZXQodHlwZTogYW55KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gdHlwZSksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH07XG4gIH1cbn1cbiJdfQ==