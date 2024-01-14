import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
var ActivityService = /** @class */ (function () {
    function ActivityService() {
    }
    /**
     * Open an activity
     * @param options The activity options
     */
    ActivityService.prototype.open = function (options) {
        return window.Metro.activity.open(options);
    };
    /**
     * Closes an opened activity
     * @param activity The activity object returned by open
     */
    ActivityService.prototype.close = function (activity) {
        window.Metro.activity.close(activity);
    };
    ActivityService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ActivityService);
    return ActivityService;
}());
export { ActivityService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9hY3Rpdml0eS9hY3Rpdml0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBYzNDO0lBRUU7SUFBZ0IsQ0FBQztJQUVqQjs7O09BR0c7SUFDSSw4QkFBSSxHQUFYLFVBQVksT0FBd0I7UUFDbEMsT0FBYSxNQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLCtCQUFLLEdBQVosVUFBYSxRQUFhO1FBQ2xCLE1BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBbEJVLGVBQWU7UUFEM0IsVUFBVSxFQUFFOztPQUNBLGVBQWUsQ0FtQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3Rpdml0eVN0eWxlVHlwZSwgQWN0aXZpdHlUeXBlfSBmcm9tICcuLi8uLi9oZWxwZXIvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5T3B0aW9ucyB7XG4gIHR5cGU/OiBBY3Rpdml0eVR5cGU7XG4gIHN0eWxlPzogQWN0aXZpdHlTdHlsZVR5cGU7XG4gIGF1dG9IaWRlPzogbnVtYmVyO1xuICBvdmVybGF5Q2xpY2tDbG9zZT86IGJvb2xlYW47XG4gIG92ZXJsYXlDb2xvcj86IHN0cmluZztcbiAgb3ZlcmxheUFscGhhPzogbnVtYmVyO1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWN0aXZpdHlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGFuIGFjdGl2aXR5XG4gICAqIEBwYXJhbSBvcHRpb25zIFRoZSBhY3Rpdml0eSBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgb3BlbihvcHRpb25zOiBBY3Rpdml0eU9wdGlvbnMpOiBhbnkge1xuICAgIHJldHVybiAoPGFueT53aW5kb3cpLk1ldHJvLmFjdGl2aXR5Lm9wZW4ob3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFuIG9wZW5lZCBhY3Rpdml0eVxuICAgKiBAcGFyYW0gYWN0aXZpdHkgVGhlIGFjdGl2aXR5IG9iamVjdCByZXR1cm5lZCBieSBvcGVuXG4gICAqL1xuICBwdWJsaWMgY2xvc2UoYWN0aXZpdHk6IGFueSkge1xuICAgICg8YW55PndpbmRvdykuTWV0cm8uYWN0aXZpdHkuY2xvc2UoYWN0aXZpdHkpO1xuICB9XG59XG4iXX0=