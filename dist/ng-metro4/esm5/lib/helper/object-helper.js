import { ArrayHelper } from './array-helper';
import { CompareHelper } from './compare-helper';
var ObjectHelper = /** @class */ (function () {
    function ObjectHelper() {
    }
    /**
     * Compares to objects
     * @param firstObject The first object
     * @param secondObject The second object
     */
    ObjectHelper.compare = function (firstObject, secondObject) {
        if (firstObject instanceof Array && secondObject instanceof Array) {
            if (ArrayHelper.sequenceEquals(secondObject, firstObject)) {
                return true;
            }
        }
        else {
            return CompareHelper.equal(firstObject, secondObject);
        }
        return false;
    };
    /**
     * Hides an HTML object
     * @param object The HTML object
     */
    ObjectHelper.hide = function (object) {
        object.addClass('d-none');
    };
    /**
     * Shows an HTML object
     * @param object The HTML object
     */
    ObjectHelper.show = function (object) {
        object.removeClass('d-none');
    };
    return ObjectHelper;
}());
export { ObjectHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXIvb2JqZWN0LWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DO0lBQUE7SUFpQ0EsQ0FBQztJQWhDQzs7OztPQUlHO0lBQ1csb0JBQU8sR0FBckIsVUFBc0IsV0FBZ0IsRUFBRSxZQUFpQjtRQUN2RCxJQUFJLFdBQVcsWUFBWSxLQUFLLElBQUksWUFBWSxZQUFZLEtBQUssRUFBRTtZQUNqRSxJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxFQUFFO2dCQUN6RCxPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDdkQ7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7O09BR0c7SUFDVyxpQkFBSSxHQUFsQixVQUFtQixNQUFXO1FBQzVCLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNXLGlCQUFJLEdBQWxCLFVBQW1CLE1BQVc7UUFDNUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcnJheUhlbHBlcn0gZnJvbSAnLi9hcnJheS1oZWxwZXInO1xuaW1wb3J0IHtDb21wYXJlSGVscGVyfSBmcm9tICcuL2NvbXBhcmUtaGVscGVyJztcblxuZXhwb3J0IGNsYXNzIE9iamVjdEhlbHBlciB7XG4gIC8qKlxuICAgKiBDb21wYXJlcyB0byBvYmplY3RzXG4gICAqIEBwYXJhbSBmaXJzdE9iamVjdCBUaGUgZmlyc3Qgb2JqZWN0XG4gICAqIEBwYXJhbSBzZWNvbmRPYmplY3QgVGhlIHNlY29uZCBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29tcGFyZShmaXJzdE9iamVjdDogYW55LCBzZWNvbmRPYmplY3Q6IGFueSkge1xuICAgIGlmIChmaXJzdE9iamVjdCBpbnN0YW5jZW9mIEFycmF5ICYmIHNlY29uZE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBpZiAoQXJyYXlIZWxwZXIuc2VxdWVuY2VFcXVhbHMoc2Vjb25kT2JqZWN0LCBmaXJzdE9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBDb21wYXJlSGVscGVyLmVxdWFsKGZpcnN0T2JqZWN0LCBzZWNvbmRPYmplY3QpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlcyBhbiBIVE1MIG9iamVjdFxuICAgKiBAcGFyYW0gb2JqZWN0IFRoZSBIVE1MIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBoaWRlKG9iamVjdDogYW55KSB7XG4gICAgb2JqZWN0LmFkZENsYXNzKCdkLW5vbmUnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBhbiBIVE1MIG9iamVjdFxuICAgKiBAcGFyYW0gb2JqZWN0IFRoZSBIVE1MIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzaG93KG9iamVjdDogYW55KSB7XG4gICAgb2JqZWN0LnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcbiAgfVxufVxuIl19