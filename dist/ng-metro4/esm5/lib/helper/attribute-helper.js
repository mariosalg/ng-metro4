import { observerClassExceptions } from './lists';
var AttributeHelper = /** @class */ (function () {
    function AttributeHelper() {
    }
    /**
     * Sets an attribute to the element or removes the attribute if no value is given
     * @param renderer The renderer
     * @param element The element
     * @param attribute The attribute
     * @param value The optional value
     */
    AttributeHelper.setAttribute = function (renderer, element, attribute, value) {
        if (value) {
            renderer.setAttribute(element.nativeElement, attribute, value);
        }
        else {
            renderer.removeAttribute(element.nativeElement, attribute);
        }
    };
    /**
     * Creates a class observer on an element
     * @param element The element to observe
     * @param newClassValues The function to be called on change
     */
    AttributeHelper.createObserver = function (element, newClassValues) {
        if (!element || !element.nativeElement) {
            return null;
        }
        var previousClassValue = [];
        var classValueCallback = function () {
            var classValue = element.nativeElement.getAttribute('class') || '';
            var classValueArray = classValue.split(' ')
                .filter(function (v) { return !!v && observerClassExceptions.indexOf(v) === -1; });
            newClassValues(classValueArray, previousClassValue);
            previousClassValue = classValueArray;
        };
        var classObserver = new MutationObserver(classValueCallback);
        classObserver.observe(element.nativeElement, {
            attributeFilter: ['class'],
            attributes: true
        });
        classValueCallback();
        return classObserver;
    };
    return AttributeHelper;
}());
export { AttributeHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXIvYXR0cmlidXRlLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFFaEQ7SUFBQTtJQTZDQSxDQUFDO0lBNUNDOzs7Ozs7T0FNRztJQUNXLDRCQUFZLEdBQTFCLFVBQTJCLFFBQW1CLEVBQUUsT0FBbUIsRUFBRSxTQUFpQixFQUFFLEtBQVc7UUFDakcsSUFBSSxLQUFLLEVBQUU7WUFDVCxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2hFO2FBQU07WUFDTCxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNXLDhCQUFjLEdBQTVCLFVBQTZCLE9BQW1CLEVBQ25CLGNBQTRFO1FBQ3ZHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLGtCQUFrQixHQUFhLEVBQUUsQ0FBQztRQUN0QyxJQUFNLGtCQUFrQixHQUFHO1lBQ3pCLElBQU0sVUFBVSxHQUFXLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3RSxJQUFNLGVBQWUsR0FBYSxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztpQkFDcEQsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQztZQUNqRSxjQUFjLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDLENBQUM7WUFDcEQsa0JBQWtCLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQztRQUNGLElBQU0sYUFBYSxHQUFHLElBQUksZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUUvRCxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDM0MsZUFBZSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQzFCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUVILGtCQUFrQixFQUFFLENBQUM7UUFDckIsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQTdDRCxJQTZDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZiwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7b2JzZXJ2ZXJDbGFzc0V4Y2VwdGlvbnN9IGZyb20gJy4vbGlzdHMnO1xuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlSGVscGVyIHtcbiAgLyoqXG4gICAqIFNldHMgYW4gYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50IG9yIHJlbW92ZXMgdGhlIGF0dHJpYnV0ZSBpZiBubyB2YWx1ZSBpcyBnaXZlblxuICAgKiBAcGFyYW0gcmVuZGVyZXIgVGhlIHJlbmRlcmVyXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50XG4gICAqIEBwYXJhbSBhdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIG9wdGlvbmFsIHZhbHVlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNldEF0dHJpYnV0ZShyZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50OiBFbGVtZW50UmVmLCBhdHRyaWJ1dGU6IHN0cmluZywgdmFsdWU/OiBhbnkpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoZWxlbWVudC5uYXRpdmVFbGVtZW50LCBhdHRyaWJ1dGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY2xhc3Mgb2JzZXJ2ZXIgb24gYW4gZWxlbWVudFxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBvYnNlcnZlXG4gICAqIEBwYXJhbSBuZXdDbGFzc1ZhbHVlcyBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGNoYW5nZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjcmVhdGVPYnNlcnZlcihlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NsYXNzVmFsdWVzOiAobmV3Q2xhc3NWYWx1ZXM6IHN0cmluZ1tdLCBvbGRDbGFzc1ZhbHVlczogc3RyaW5nW10pID0+IHZvaWQpOiBNdXRhdGlvbk9ic2VydmVyIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHByZXZpb3VzQ2xhc3NWYWx1ZTogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBjbGFzc1ZhbHVlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjbGFzc1ZhbHVlOiBzdHJpbmcgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xuICAgICAgY29uc3QgY2xhc3NWYWx1ZUFycmF5OiBzdHJpbmdbXSA9IGNsYXNzVmFsdWUuc3BsaXQoJyAnKVxuICAgICAgICAuZmlsdGVyKHYgPT4gISF2ICYmIG9ic2VydmVyQ2xhc3NFeGNlcHRpb25zLmluZGV4T2YodikgPT09IC0xKTtcbiAgICAgIG5ld0NsYXNzVmFsdWVzKGNsYXNzVmFsdWVBcnJheSwgcHJldmlvdXNDbGFzc1ZhbHVlKTtcbiAgICAgIHByZXZpb3VzQ2xhc3NWYWx1ZSA9IGNsYXNzVmFsdWVBcnJheTtcbiAgICB9O1xuICAgIGNvbnN0IGNsYXNzT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjbGFzc1ZhbHVlQ2FsbGJhY2spO1xuXG4gICAgY2xhc3NPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQubmF0aXZlRWxlbWVudCwge1xuICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ2NsYXNzJ10sXG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlXG4gICAgfSk7XG5cbiAgICBjbGFzc1ZhbHVlQ2FsbGJhY2soKTtcbiAgICByZXR1cm4gY2xhc3NPYnNlcnZlcjtcbiAgfVxufVxuIl19