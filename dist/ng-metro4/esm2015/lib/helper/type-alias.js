import { forwardRef } from '@angular/core';
import { ControlBase } from '../form/control-base';
export class TypeAlias {
    static get(type) {
        return {
            provide: ControlBase,
            useExisting: forwardRef(() => type)
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1hbGlhcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLW1ldHJvNC8iLCJzb3VyY2VzIjpbImxpYi9oZWxwZXIvdHlwZS1hbGlhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxNQUFNLE9BQU8sU0FBUztJQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBUztRQUN6QixPQUFPO1lBQ0wsT0FBTyxFQUFFLFdBQVc7WUFDcEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FDcEMsQ0FBQztJQUNKLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Zm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9mb3JtL2NvbnRyb2wtYmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBUeXBlQWxpYXMge1xuICBwdWJsaWMgc3RhdGljIGdldCh0eXBlOiBhbnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvdmlkZTogQ29udHJvbEJhc2UsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiB0eXBlKVxuICAgIH07XG4gIH1cbn1cbiJdfQ==