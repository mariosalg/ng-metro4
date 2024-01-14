import { observerClassExceptions } from './lists';
export class AttributeHelper {
    /**
     * Sets an attribute to the element or removes the attribute if no value is given
     * @param renderer The renderer
     * @param element The element
     * @param attribute The attribute
     * @param value The optional value
     */
    static setAttribute(renderer, element, attribute, value) {
        if (value) {
            renderer.setAttribute(element.nativeElement, attribute, value);
        }
        else {
            renderer.removeAttribute(element.nativeElement, attribute);
        }
    }
    /**
     * Creates a class observer on an element
     * @param element The element to observe
     * @param newClassValues The function to be called on change
     */
    static createObserver(element, newClassValues) {
        if (!element || !element.nativeElement) {
            return null;
        }
        let previousClassValue = [];
        const classValueCallback = () => {
            const classValue = element.nativeElement.getAttribute('class') || '';
            const classValueArray = classValue.split(' ')
                .filter(v => !!v && observerClassExceptions.indexOf(v) === -1);
            newClassValues(classValueArray, previousClassValue);
            previousClassValue = classValueArray;
        };
        const classObserver = new MutationObserver(classValueCallback);
        classObserver.observe(element.nativeElement, {
            attributeFilter: ['class'],
            attributes: true
        });
        classValueCallback();
        return classObserver;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXIvYXR0cmlidXRlLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFFaEQsTUFBTSxPQUFPLGVBQWU7SUFDMUI7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFtQixFQUFFLE9BQW1CLEVBQUUsU0FBaUIsRUFBRSxLQUFXO1FBQ2pHLElBQUksS0FBSyxFQUFFO1lBQ1QsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoRTthQUFNO1lBQ0wsUUFBUSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQW1CLEVBQ25CLGNBQTRFO1FBQ3ZHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLGtCQUFrQixHQUFhLEVBQUUsQ0FBQztRQUN0QyxNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtZQUM5QixNQUFNLFVBQVUsR0FBVyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDN0UsTUFBTSxlQUFlLEdBQWEsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ3BELE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsY0FBYyxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3BELGtCQUFrQixHQUFHLGVBQWUsQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFDRixNQUFNLGFBQWEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFL0QsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO1lBQzNDLGVBQWUsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUMxQixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7UUFFSCxrQkFBa0IsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZiwgUmVuZGVyZXIyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7b2JzZXJ2ZXJDbGFzc0V4Y2VwdGlvbnN9IGZyb20gJy4vbGlzdHMnO1xuXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlSGVscGVyIHtcbiAgLyoqXG4gICAqIFNldHMgYW4gYXR0cmlidXRlIHRvIHRoZSBlbGVtZW50IG9yIHJlbW92ZXMgdGhlIGF0dHJpYnV0ZSBpZiBubyB2YWx1ZSBpcyBnaXZlblxuICAgKiBAcGFyYW0gcmVuZGVyZXIgVGhlIHJlbmRlcmVyXG4gICAqIEBwYXJhbSBlbGVtZW50IFRoZSBlbGVtZW50XG4gICAqIEBwYXJhbSBhdHRyaWJ1dGUgVGhlIGF0dHJpYnV0ZVxuICAgKiBAcGFyYW0gdmFsdWUgVGhlIG9wdGlvbmFsIHZhbHVlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNldEF0dHJpYnV0ZShyZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50OiBFbGVtZW50UmVmLCBhdHRyaWJ1dGU6IHN0cmluZywgdmFsdWU/OiBhbnkpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoZWxlbWVudC5uYXRpdmVFbGVtZW50LCBhdHRyaWJ1dGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY2xhc3Mgb2JzZXJ2ZXIgb24gYW4gZWxlbWVudFxuICAgKiBAcGFyYW0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBvYnNlcnZlXG4gICAqIEBwYXJhbSBuZXdDbGFzc1ZhbHVlcyBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGNoYW5nZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjcmVhdGVPYnNlcnZlcihlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NsYXNzVmFsdWVzOiAobmV3Q2xhc3NWYWx1ZXM6IHN0cmluZ1tdLCBvbGRDbGFzc1ZhbHVlczogc3RyaW5nW10pID0+IHZvaWQpOiBNdXRhdGlvbk9ic2VydmVyIHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQubmF0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHByZXZpb3VzQ2xhc3NWYWx1ZTogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBjbGFzc1ZhbHVlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjbGFzc1ZhbHVlOiBzdHJpbmcgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xuICAgICAgY29uc3QgY2xhc3NWYWx1ZUFycmF5OiBzdHJpbmdbXSA9IGNsYXNzVmFsdWUuc3BsaXQoJyAnKVxuICAgICAgICAuZmlsdGVyKHYgPT4gISF2ICYmIG9ic2VydmVyQ2xhc3NFeGNlcHRpb25zLmluZGV4T2YodikgPT09IC0xKTtcbiAgICAgIG5ld0NsYXNzVmFsdWVzKGNsYXNzVmFsdWVBcnJheSwgcHJldmlvdXNDbGFzc1ZhbHVlKTtcbiAgICAgIHByZXZpb3VzQ2xhc3NWYWx1ZSA9IGNsYXNzVmFsdWVBcnJheTtcbiAgICB9O1xuICAgIGNvbnN0IGNsYXNzT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjbGFzc1ZhbHVlQ2FsbGJhY2spO1xuXG4gICAgY2xhc3NPYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQubmF0aXZlRWxlbWVudCwge1xuICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ2NsYXNzJ10sXG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlXG4gICAgfSk7XG5cbiAgICBjbGFzc1ZhbHVlQ2FsbGJhY2soKTtcbiAgICByZXR1cm4gY2xhc3NPYnNlcnZlcjtcbiAgfVxufVxuIl19