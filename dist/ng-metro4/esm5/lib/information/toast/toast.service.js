import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var ToastService = /** @class */ (function () {
    function ToastService() {
    }
    /**
     * Create a toast message
     * @param message The message
     * @param options The options of the toast
     */
    ToastService.prototype.create = function (message, options) {
        if (options === void 0) { options = {}; }
        var closeSubject$ = new Subject();
        window.Metro.toast.create(message, function () {
            closeSubject$.next();
            closeSubject$.complete();
        }, options.timeout, options.cls, options.additional);
        return closeSubject$.asObservable();
    };
    ToastService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ToastService);
    return ToastService;
}());
export { ToastService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9pbmZvcm1hdGlvbi90b2FzdC90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFZekM7SUFFRTtJQUFnQixDQUFDO0lBRWpCOzs7O09BSUc7SUFDSSw2QkFBTSxHQUFiLFVBQWMsT0FBZSxFQUFFLE9BQTBCO1FBQTFCLHdCQUFBLEVBQUEsWUFBMEI7UUFDdkQsSUFBTSxhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUVwQyxNQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3hDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFckQsT0FBTyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQWxCVSxZQUFZO1FBRHhCLFVBQVUsRUFBRTs7T0FDQSxZQUFZLENBbUJ4QjtJQUFELG1CQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FuQlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWNjZW50VHlwZX0gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGVzJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RPcHRpb25zIHtcbiAgdGltZW91dD86IG51bWJlcjtcbiAgY2xzPzogc3RyaW5nfEFjY2VudFR5cGU7XG4gIGFkZGl0aW9uYWw/OiB7XG4gICAgZGlzdGFuY2U/OiBudW1iZXI7XG4gICAgc2hvd1RvcD86IGJvb2xlYW47XG4gIH07XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRvYXN0IG1lc3NhZ2VcbiAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2VcbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgb2YgdGhlIHRvYXN0XG4gICAqL1xuICBwdWJsaWMgY3JlYXRlKG1lc3NhZ2U6IHN0cmluZywgb3B0aW9uczogVG9hc3RPcHRpb25zID0ge30pOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCBjbG9zZVN1YmplY3QkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAgICg8YW55PndpbmRvdykuTWV0cm8udG9hc3QuY3JlYXRlKG1lc3NhZ2UsICgpID0+IHtcbiAgICAgIGNsb3NlU3ViamVjdCQubmV4dCgpO1xuICAgICAgY2xvc2VTdWJqZWN0JC5jb21wbGV0ZSgpO1xuICAgIH0sIG9wdGlvbnMudGltZW91dCwgb3B0aW9ucy5jbHMsIG9wdGlvbnMuYWRkaXRpb25hbCk7XG5cbiAgICByZXR1cm4gY2xvc2VTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgfVxufVxuIl19