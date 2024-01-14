var CompareHelper = /** @class */ (function () {
    function CompareHelper() {
    }
    /**
     * Compares to objects and checks if they are equal
     * @param firstObject The first object
     * @param secondObject The second object
     */
    CompareHelper.equal = function (firstObject, secondObject) {
        if (firstObject instanceof File && secondObject instanceof File) {
            return firstObject.name === secondObject.name;
        }
        if (firstObject === secondObject) {
            return true;
        }
        if (JSON.stringify(firstObject) === JSON.stringify(secondObject)) {
            return true;
        }
        return false;
    };
    return CompareHelper;
}());
export { CompareHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyZS1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvaGVscGVyL2NvbXBhcmUtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQUE7SUFxQkEsQ0FBQztJQXBCQzs7OztPQUlHO0lBQ1csbUJBQUssR0FBbkIsVUFBb0IsV0FBZ0IsRUFBRSxZQUFpQjtRQUNyRCxJQUFJLFdBQVcsWUFBWSxJQUFJLElBQUksWUFBWSxZQUFZLElBQUksRUFBRTtZQUMvRCxPQUFjLFdBQVksQ0FBQyxJQUFJLEtBQVksWUFBYSxDQUFDLElBQUksQ0FBQztTQUMvRDtRQUVELElBQUksV0FBVyxLQUFLLFlBQVksRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDaEUsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXJCRCxJQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21wYXJlSGVscGVyIHtcbiAgLyoqXG4gICAqIENvbXBhcmVzIHRvIG9iamVjdHMgYW5kIGNoZWNrcyBpZiB0aGV5IGFyZSBlcXVhbFxuICAgKiBAcGFyYW0gZmlyc3RPYmplY3QgVGhlIGZpcnN0IG9iamVjdFxuICAgKiBAcGFyYW0gc2Vjb25kT2JqZWN0IFRoZSBzZWNvbmQgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGVxdWFsKGZpcnN0T2JqZWN0OiBhbnksIHNlY29uZE9iamVjdDogYW55KSB7XG4gICAgaWYgKGZpcnN0T2JqZWN0IGluc3RhbmNlb2YgRmlsZSAmJiBzZWNvbmRPYmplY3QgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICByZXR1cm4gKDxGaWxlPmZpcnN0T2JqZWN0KS5uYW1lID09PSAoPEZpbGU+c2Vjb25kT2JqZWN0KS5uYW1lO1xuICAgIH1cblxuICAgIGlmIChmaXJzdE9iamVjdCA9PT0gc2Vjb25kT2JqZWN0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZmlyc3RPYmplY3QpID09PSBKU09OLnN0cmluZ2lmeShzZWNvbmRPYmplY3QpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==