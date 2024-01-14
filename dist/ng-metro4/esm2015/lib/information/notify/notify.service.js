import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let NotifyService = class NotifyService {
    constructor() { }
    /**
     * Setup the notify system
     * @param options The options for the setup
     */
    setup(options) {
        window.Metro.notify.setup(options);
    }
    /**
     * Reset the settings of the notify system
     */
    reset() {
        window.Metro.notify.reset();
    }
    /**
     * Create a notify
     * @param message The message
     * @param title The title
     * @param options Optional options object
     */
    create(message, title, options) {
        const closeSubject$ = new Subject();
        window.Metro.notify.create(message, title, Object.assign({ onClose: () => {
                closeSubject$.next();
                closeSubject$.complete();
            } }, options));
        return closeSubject$.asObservable();
    }
};
NotifyService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], NotifyService);
export { NotifyService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvaW5mb3JtYXRpb24vbm90aWZ5L25vdGlmeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYSxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFtQnpDLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFFeEIsZ0JBQWdCLENBQUM7SUFFakI7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLE9BQTJCO1FBQ2hDLE1BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLO1FBQ0osTUFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLE9BQWUsRUFBRSxLQUFjLEVBQUUsT0FBdUI7UUFDcEUsTUFBTSxhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUVuQyxNQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssa0JBQzlDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1osYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQixhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDM0IsQ0FBQyxJQUNFLE9BQU8sRUFDVixDQUFDO1FBRUgsT0FBTyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEMsQ0FBQztDQUNGLENBQUE7QUF0Q1ksYUFBYTtJQUR6QixVQUFVLEVBQUU7O0dBQ0EsYUFBYSxDQXNDekI7U0F0Q1ksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Vhc2luZ1R5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZ5U2V0dXBPcHRpb25zIHtcbiAgY29udGFpbmVyPzogc3RyaW5nO1xuICB3aWR0aD86IHN0cmluZztcbiAgdGltZW91dD86IG51bWJlcjtcbiAgZHVyYXRpb24/OiBudW1iZXI7XG4gIGRpc3RhbmNlPzogc3RyaW5nO1xuICBhbmltYXRpb24/OiBFYXNpbmdUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmeU9wdGlvbnMge1xuICBrZWVwT3Blbj86IGJvb2xlYW47XG4gIGNscz86IHN0cmluZztcbiAgd2lkdGg/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RpZnlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCB0aGUgbm90aWZ5IHN5c3RlbVxuICAgKiBAcGFyYW0gb3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIHNldHVwXG4gICAqL1xuICBwdWJsaWMgc2V0dXAob3B0aW9uczogTm90aWZ5U2V0dXBPcHRpb25zKSB7XG4gICAgKDxhbnk+d2luZG93KS5NZXRyby5ub3RpZnkuc2V0dXAob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHNldHRpbmdzIG9mIHRoZSBub3RpZnkgc3lzdGVtXG4gICAqL1xuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgKDxhbnk+d2luZG93KS5NZXRyby5ub3RpZnkucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBub3RpZnlcbiAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2VcbiAgICogQHBhcmFtIHRpdGxlIFRoZSB0aXRsZVxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIG9iamVjdFxuICAgKi9cbiAgcHVibGljIGNyZWF0ZShtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvcHRpb25zPzogTm90aWZ5T3B0aW9ucyk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IGNsb3NlU3ViamVjdCQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgICAoPGFueT53aW5kb3cpLk1ldHJvLm5vdGlmeS5jcmVhdGUobWVzc2FnZSwgdGl0bGUsIHtcbiAgICAgIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgY2xvc2VTdWJqZWN0JC5uZXh0KCk7XG4gICAgICAgIGNsb3NlU3ViamVjdCQuY29tcGxldGUoKTtcbiAgICAgIH0sXG4gICAgICAuLi5vcHRpb25zXG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xvc2VTdWJqZWN0JC5hc09ic2VydmFibGUoKTtcbiAgfVxufVxuIl19