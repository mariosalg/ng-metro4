import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let ToastService = class ToastService {
    constructor() { }
    /**
     * Create a toast message
     * @param message The message
     * @param options The options of the toast
     */
    create(message, options = {}) {
        const closeSubject$ = new Subject();
        window.Metro.toast.create(message, () => {
            closeSubject$.next();
            closeSubject$.complete();
        }, options.timeout, options.cls, options.additional);
        return closeSubject$.asObservable();
    }
};
ToastService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ToastService);
export { ToastService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9pbmZvcm1hdGlvbi90b2FzdC90b2FzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFZekMsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUV2QixnQkFBZ0IsQ0FBQztJQUVqQjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLE9BQWUsRUFBRSxVQUF3QixFQUFFO1FBQ3ZELE1BQU0sYUFBYSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFcEMsTUFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDN0MsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JCLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVyRCxPQUFPLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0NBQ0YsQ0FBQTtBQW5CWSxZQUFZO0lBRHhCLFVBQVUsRUFBRTs7R0FDQSxZQUFZLENBbUJ4QjtTQW5CWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY2NlbnRUeXBlfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZXMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdE9wdGlvbnMge1xuICB0aW1lb3V0PzogbnVtYmVyO1xuICBjbHM/OiBzdHJpbmd8QWNjZW50VHlwZTtcbiAgYWRkaXRpb25hbD86IHtcbiAgICBkaXN0YW5jZT86IG51bWJlcjtcbiAgICBzaG93VG9wPzogYm9vbGVhbjtcbiAgfTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgdG9hc3QgbWVzc2FnZVxuICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZVxuICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyBvZiB0aGUgdG9hc3RcbiAgICovXG4gIHB1YmxpYyBjcmVhdGUobWVzc2FnZTogc3RyaW5nLCBvcHRpb25zOiBUb2FzdE9wdGlvbnMgPSB7fSk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IGNsb3NlU3ViamVjdCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gICAgKDxhbnk+d2luZG93KS5NZXRyby50b2FzdC5jcmVhdGUobWVzc2FnZSwgKCkgPT4ge1xuICAgICAgY2xvc2VTdWJqZWN0JC5uZXh0KCk7XG4gICAgICBjbG9zZVN1YmplY3QkLmNvbXBsZXRlKCk7XG4gICAgfSwgb3B0aW9ucy50aW1lb3V0LCBvcHRpb25zLmNscywgb3B0aW9ucy5hZGRpdGlvbmFsKTtcblxuICAgIHJldHVybiBjbG9zZVN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=