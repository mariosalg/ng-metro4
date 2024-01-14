import { ArrayHelper } from './array-helper';
import { CompareHelper } from './compare-helper';
export class ObjectHelper {
    /**
     * Compares to objects
     * @param firstObject The first object
     * @param secondObject The second object
     */
    static compare(firstObject, secondObject) {
        if (firstObject instanceof Array && secondObject instanceof Array) {
            if (ArrayHelper.sequenceEquals(secondObject, firstObject)) {
                return true;
            }
        }
        else {
            return CompareHelper.equal(firstObject, secondObject);
        }
        return false;
    }
    /**
     * Hides an HTML object
     * @param object The HTML object
     */
    static hide(object) {
        object.addClass('d-none');
    }
    /**
     * Shows an HTML object
     * @param object The HTML object
     */
    static show(object) {
        object.removeClass('d-none');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXIvb2JqZWN0LWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQWdCLEVBQUUsWUFBaUI7UUFDdkQsSUFBSSxXQUFXLFlBQVksS0FBSyxJQUFJLFlBQVksWUFBWSxLQUFLLEVBQUU7WUFDakUsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsRUFBRTtnQkFDekQsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO2FBQU07WUFDTCxPQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFXO1FBQzVCLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBVztRQUM1QixNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXJyYXlIZWxwZXJ9IGZyb20gJy4vYXJyYXktaGVscGVyJztcbmltcG9ydCB7Q29tcGFyZUhlbHBlcn0gZnJvbSAnLi9jb21wYXJlLWhlbHBlcic7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RIZWxwZXIge1xuICAvKipcbiAgICogQ29tcGFyZXMgdG8gb2JqZWN0c1xuICAgKiBAcGFyYW0gZmlyc3RPYmplY3QgVGhlIGZpcnN0IG9iamVjdFxuICAgKiBAcGFyYW0gc2Vjb25kT2JqZWN0IFRoZSBzZWNvbmQgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNvbXBhcmUoZmlyc3RPYmplY3Q6IGFueSwgc2Vjb25kT2JqZWN0OiBhbnkpIHtcbiAgICBpZiAoZmlyc3RPYmplY3QgaW5zdGFuY2VvZiBBcnJheSAmJiBzZWNvbmRPYmplY3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgaWYgKEFycmF5SGVscGVyLnNlcXVlbmNlRXF1YWxzKHNlY29uZE9iamVjdCwgZmlyc3RPYmplY3QpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQ29tcGFyZUhlbHBlci5lcXVhbChmaXJzdE9iamVjdCwgc2Vjb25kT2JqZWN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgYW4gSFRNTCBvYmplY3RcbiAgICogQHBhcmFtIG9iamVjdCBUaGUgSFRNTCBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaGlkZShvYmplY3Q6IGFueSkge1xuICAgIG9iamVjdC5hZGRDbGFzcygnZC1ub25lJyk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgYW4gSFRNTCBvYmplY3RcbiAgICogQHBhcmFtIG9iamVjdCBUaGUgSFRNTCBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2hvdyhvYmplY3Q6IGFueSkge1xuICAgIG9iamVjdC5yZW1vdmVDbGFzcygnZC1ub25lJyk7XG4gIH1cbn1cbiJdfQ==