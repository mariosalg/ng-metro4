import { CompareHelper } from './compare-helper';
export class ArrayHelper {
    /**
     * Check if two sequences are equal
     * @param firstArray First array
     * @param secondArray Second array
     */
    static sequenceEquals(firstArray, secondArray) {
        if (firstArray.length === secondArray.length) {
            for (let i = 0; i < firstArray.length; i++) {
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
    }
    /**
     * Checks if an array contains a specific object
     * @param array The array to check
     * @param object The object to search for
     */
    static contains(array, object) {
        return array.findIndex(v => CompareHelper.equal(v, object)) !== -1;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctbWV0cm80LyIsInNvdXJjZXMiOlsibGliL2hlbHBlci9hcnJheS1oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE1BQU0sT0FBTyxXQUFXO0lBQ3RCOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQWlCLEVBQUUsV0FBa0I7UUFDaEUsSUFBSSxVQUFVLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDNUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxFQUFFO29CQUNyRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzRDtxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzlELE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7WUFFRCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBWSxFQUFFLE1BQVc7UUFDOUMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBhcmVIZWxwZXJ9IGZyb20gJy4vY29tcGFyZS1oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlIZWxwZXIge1xuICAvKipcbiAgICogQ2hlY2sgaWYgdHdvIHNlcXVlbmNlcyBhcmUgZXF1YWxcbiAgICogQHBhcmFtIGZpcnN0QXJyYXkgRmlyc3QgYXJyYXlcbiAgICogQHBhcmFtIHNlY29uZEFycmF5IFNlY29uZCBhcnJheVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzZXF1ZW5jZUVxdWFscyhmaXJzdEFycmF5OiBhbnlbXSwgc2Vjb25kQXJyYXk6IGFueVtdKSB7XG4gICAgaWYgKGZpcnN0QXJyYXkubGVuZ3RoID09PSBzZWNvbmRBcnJheS5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlyc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZmlyc3RBcnJheVtpXSBpbnN0YW5jZW9mIEFycmF5ICYmIHNlY29uZEFycmF5W2ldIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXF1ZW5jZUVxdWFscyhmaXJzdEFycmF5W2ldLCBzZWNvbmRBcnJheVtpXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIUNvbXBhcmVIZWxwZXIuZXF1YWwoZmlyc3RBcnJheVtpXSwgc2Vjb25kQXJyYXlbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYW4gYXJyYXkgY29udGFpbnMgYSBzcGVjaWZpYyBvYmplY3RcbiAgICogQHBhcmFtIGFycmF5IFRoZSBhcnJheSB0byBjaGVja1xuICAgKiBAcGFyYW0gb2JqZWN0IFRoZSBvYmplY3QgdG8gc2VhcmNoIGZvclxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjb250YWlucyhhcnJheTogYW55W10sIG9iamVjdDogYW55KSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbmRJbmRleCh2ID0+IENvbXBhcmVIZWxwZXIuZXF1YWwodiwgb2JqZWN0KSkgIT09IC0xO1xuICB9XG59XG4iXX0=