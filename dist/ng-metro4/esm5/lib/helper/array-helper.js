import { CompareHelper } from './compare-helper';
var ArrayHelper = /** @class */ (function () {
    function ArrayHelper() {
    }
    /**
     * Check if two sequences are equal
     * @param firstArray First array
     * @param secondArray Second array
     */
    ArrayHelper.sequenceEquals = function (firstArray, secondArray) {
        if (firstArray.length === secondArray.length) {
            for (var i = 0; i < firstArray.length; i++) {
                if (firstArray[i] instanceof Array && secondArray[i] instanceof Array) {
                    return this.sequenceEquals(firstArray[i], secondArray[i]);
                }
                else if (!CompareHelper.equal(firstArray[i], secondArray[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    /**
     * Checks if an array contains a specific object
     * @param array The array to check
     * @param object The object to search for
     */
    ArrayHelper.contains = function (array, object) {
        return array.findIndex(function (v) { return CompareHelper.equal(v, object); }) !== -1;
    };
    return ArrayHelper;
}());
export { ArrayHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2hlbHBlci9hcnJheS1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DO0lBQUE7SUE4QkEsQ0FBQztJQTdCQzs7OztPQUlHO0lBQ1csMEJBQWMsR0FBNUIsVUFBNkIsVUFBaUIsRUFBRSxXQUFrQjtRQUNoRSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUM1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLEVBQUU7b0JBQ3JFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNEO3FCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDOUQsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7YUFDRjtZQUVELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7OztPQUlHO0lBQ1csb0JBQVEsR0FBdEIsVUFBdUIsS0FBWSxFQUFFLE1BQVc7UUFDOUMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEVBQTlCLENBQThCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wYXJlSGVscGVyfSBmcm9tICcuL2NvbXBhcmUtaGVscGVyJztcblxuZXhwb3J0IGNsYXNzIEFycmF5SGVscGVyIHtcbiAgLyoqXG4gICAqIENoZWNrIGlmIHR3byBzZXF1ZW5jZXMgYXJlIGVxdWFsXG4gICAqIEBwYXJhbSBmaXJzdEFycmF5IEZpcnN0IGFycmF5XG4gICAqIEBwYXJhbSBzZWNvbmRBcnJheSBTZWNvbmQgYXJyYXlcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2VxdWVuY2VFcXVhbHMoZmlyc3RBcnJheTogYW55W10sIHNlY29uZEFycmF5OiBhbnlbXSkge1xuICAgIGlmIChmaXJzdEFycmF5Lmxlbmd0aCA9PT0gc2Vjb25kQXJyYXkubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpcnN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGZpcnN0QXJyYXlbaV0gaW5zdGFuY2VvZiBBcnJheSAmJiBzZWNvbmRBcnJheVtpXSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VxdWVuY2VFcXVhbHMoZmlyc3RBcnJheVtpXSwgc2Vjb25kQXJyYXlbaV0pO1xuICAgICAgICB9IGVsc2UgaWYgKCFDb21wYXJlSGVscGVyLmVxdWFsKGZpcnN0QXJyYXlbaV0sIHNlY29uZEFycmF5W2ldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGFuIGFycmF5IGNvbnRhaW5zIGEgc3BlY2lmaWMgb2JqZWN0XG4gICAqIEBwYXJhbSBhcnJheSBUaGUgYXJyYXkgdG8gY2hlY2tcbiAgICogQHBhcmFtIG9iamVjdCBUaGUgb2JqZWN0IHRvIHNlYXJjaCBmb3JcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29udGFpbnMoYXJyYXk6IGFueVtdLCBvYmplY3Q6IGFueSkge1xuICAgIHJldHVybiBhcnJheS5maW5kSW5kZXgodiA9PiBDb21wYXJlSGVscGVyLmVxdWFsKHYsIG9iamVjdCkpICE9PSAtMTtcbiAgfVxufVxuIl19