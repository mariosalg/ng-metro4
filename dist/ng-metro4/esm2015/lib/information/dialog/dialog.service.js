import { __decorate, __metadata } from "tslib";
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, startWith } from 'rxjs/operators';
import { FormBuilderComponent } from '../../form/form-builder/form-builder.component';
let DialogService = class DialogService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * Create a custom dialog
     * @param options The options of the dialog
     */
    create(options) {
        return window.Metro.dialog.create(options);
    }
    /**
     * Close a created dialog
     * @param dialogObj The object returned by the create method
     */
    close(dialogObj) {
        return window.Metro.dialog.close(dialogObj);
    }
    /**
     * Shows an alert dialog
     * @param title The title of the dialog
     * @param message The message of the dialog
     * @param cls Optional css classes
     * @param okBtnText The text of the OK-Button
     * @param okBtnCls An optional css class for the OK-Button
     */
    alert(title, message, cls, okBtnText, okBtnCls) {
        const subject$ = new Subject();
        const options = {
            title: title,
            content: message,
            clsDialog: cls,
            overlayClickClose: true
        };
        if (okBtnText) {
            options.actions = [{
                    caption: okBtnText,
                    cls: (okBtnCls ? okBtnCls : '') + ' js-dialog-close',
                    onclick: () => {
                        subject$.next();
                        subject$.complete();
                    }
                }];
        }
        const alertObj = this.create(options);
        return subject$.asObservable().pipe(finalize(() => {
            this.close(alertObj);
        }));
    }
    /**
     * Shows a confirm dialog
     * @param title The title of the confirm
     * @param message The message of the confirm
     * @param yesBtnText The text for the Yes-Button
     * @param noBtnText The text for the No-Button
     * @param cls An optional css class for the dialog
     * @param yesBtnCls An optional css class for the Yes-Button
     * @param noBtnCls An optional css class for the No-Button
     */
    confirm(title, message, yesBtnText, noBtnText, cls, yesBtnCls, noBtnCls) {
        const subject$ = new Subject();
        const options = {
            title: title,
            content: message,
            actions: [
                {
                    caption: yesBtnText ? yesBtnText : 'Yes',
                    cls: (yesBtnCls ? yesBtnCls : 'success') + ' js-dialog-close',
                    onclick: () => {
                        subject$.next(true);
                        subject$.complete();
                    }
                },
                {
                    caption: noBtnText ? noBtnText : 'No',
                    cls: (noBtnCls ? noBtnCls : 'alert') + ' js-dialog-close',
                    onclick: () => {
                        subject$.next(false);
                        subject$.complete();
                    }
                }
            ],
            clsDialog: cls
        };
        const confirmObj = this.create(options);
        return subject$.asObservable().pipe(finalize(() => {
            this.close(confirmObj);
        }));
    }
    /**
     * Show a prompt dialog
     * @param title The title of the prompt
     * @param message The message of the prompt
     * @param submitBtnText The text of the Submit-Button
     * @param placeholder The placeholder of the input
     * @param cls An optional css class for the dialog
     * @param submitBtnCls An optional css class for Submit-Button
     * @param inputCls An optional css class for the input
     */
    prompt(title, message, submitBtnText, placeholder, cls, submitBtnCls, inputCls) {
        const subject$ = new Subject();
        const options = {
            title: title,
            content: (message ? message : '') +
                `<br><input data-role="input" type="text" class="${inputCls}" placeholder="${placeholder ? placeholder : ''}" />`,
            actions: [
                {
                    caption: submitBtnText ? submitBtnText : 'Submit',
                    cls: (submitBtnCls ? submitBtnCls : 'success') + ' js-dialog-close',
                    onclick: () => {
                        subject$.next(value);
                        subject$.complete();
                    }
                }
            ],
            clsDialog: cls
        };
        const promptObj = this.create(options);
        const input = promptObj.find('input');
        let value = '';
        input.on('change', () => {
            value = input.val();
        });
        return subject$.asObservable().pipe(finalize(() => {
            this.close(promptObj);
        }));
    }
    /**
     * Show a prompt dialog that contains a form
     * @param title The title of the prompt
     * @param form The form group
     * @param submitBtnText The text of the Submit-Button
     * @param abortBtnText The text of the Abort-Button
     * @param placeholder The placeholder of the input
     * @param cls An optional css class for the dialog
     * @param submitBtnCls An optional css class for Submit-Button
     * @param abortBtnCls An optional css class for Abort-Button
     */
    formPrompt(title, form, submitBtnText, abortBtnText, placeholder, cls, submitBtnCls, abortBtnCls) {
        const componentRef = this.componentFactoryResolver.resolveComponentFactory(FormBuilderComponent).create(this.injector);
        componentRef.instance.formGroup = form;
        this.appRef.attachView(componentRef.hostView);
        const domElement = componentRef.hostView.rootNodes[0];
        const subject$ = new Subject();
        const options = {
            title: title,
            content: 'content',
            actions: [
                {
                    caption: abortBtnText ? abortBtnText : 'Abort',
                    cls: abortBtnCls ? abortBtnCls : 'warning',
                    onclick: () => {
                        subject$.next(null);
                        subject$.complete();
                    }
                },
                {
                    caption: submitBtnText ? submitBtnText : 'Submit',
                    cls: (submitBtnCls ? submitBtnCls : 'success') + ' submit-btn',
                    onclick: () => {
                        subject$.next(form.value);
                        subject$.complete();
                    }
                }
            ],
            clsDialog: cls
        };
        const promptObj = this.create(options);
        promptObj.find('.dialog-content').empty().append(domElement);
        const formStateSubscription = form.statusChanges.pipe(startWith(form.status)).subscribe((valid) => {
            const submitBtn = promptObj.find('.dialog-actions button.submit-btn');
            if (valid === 'VALID') {
                submitBtn.removeAttr('disabled');
            }
            else {
                submitBtn.attr('disabled', 'disabled');
            }
        });
        return subject$.asObservable().pipe(finalize(() => {
            this.close(promptObj);
            componentRef.destroy();
            formStateSubscription.unsubscribe();
        }));
    }
    /**
     * Show a dialog that contains a component
     * @param component The component class to render
     * @param dialogData Data to pass to the new component instance
     * @param title The title of the dialog
     * @param closeBtnText Custom text for the close button
     * @param cls Custom dialog class (accent, size etc.)
     * @param closeBtnCls Custom close button class
     */
    show(component, dialogData, title, closeBtnText, cls, closeBtnCls) {
        const componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
        if (!!dialogData) {
            componentRef.instance.dialogDataInput = dialogData;
        }
        this.appRef.attachView(componentRef.hostView);
        const domElement = componentRef.hostView.rootNodes[0];
        const subject$ = new Subject();
        let dialogDataSubscription;
        if (!!componentRef.instance.dialogDataEmitter) {
            dialogDataSubscription = componentRef.instance.dialogDataEmitter
                .pipe(finalize(() => {
                subject$.complete();
            })).subscribe((data) => {
                subject$.next(data);
            });
        }
        const options = {
            title: title,
            content: $(domElement),
            actions: [
                {
                    caption: closeBtnText ? closeBtnText : 'Submit',
                    cls: (closeBtnCls ? closeBtnCls : 'success') + ' submit-btn',
                    onclick: () => {
                        subject$.complete();
                    }
                }
            ],
            clsDialog: cls
        };
        const dialogObj = this.create(options);
        return subject$.asObservable().pipe(finalize(() => {
            if (dialogDataSubscription) {
                dialogDataSubscription.unsubscribe();
            }
            this.close(dialogObj);
            componentRef.destroy();
        }));
    }
    /**
     * Show an info dialog
     * @param content The content of the info
     * @param options Options for info
     */
    info(content, options) {
        return window.Metro.infobox.create(content, '', options).data('infobox');
    }
};
DialogService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
DialogService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ComponentFactoryResolver,
        ApplicationRef,
        Injector])
], DialogService);
export { DialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvaW5mb3JtYXRpb24vZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFFLHdCQUF3QixFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQWEsT0FBTyxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUE0Q3BGLElBQWEsYUFBYSxHQUExQixNQUFhLGFBQWE7SUFFeEIsWUFBb0Isd0JBQWtELEVBQ2xELE1BQXNCLEVBQ3RCLFFBQWtCO1FBRmxCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFJLENBQUM7SUFFM0M7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLE9BQXNCO1FBQ2xDLE9BQWEsTUFBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsU0FBYztRQUN6QixPQUFhLE1BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLEtBQUssQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLEdBQVksRUFBRSxTQUFrQixFQUFFLFFBQWlCO1FBQzlGLE1BQU0sUUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFckMsTUFB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QzVELE9BQU8sRUFBRSxHQUFHLEVBQUU7d0JBQ1osUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN0QixDQUFDO2lCQUNGO2FBQ0Y7WUFDRCxTQUFTLEVBQUUsR0FBRztTQUNmLENBQUM7UUFFRixNQUFNLFNBQVMsR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVDLE9BQU8sUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDakMsUUFBUSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksc0JBQXNCLEVBQUU7Z0JBQzFCLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3RDO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QixZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksSUFBSSxDQUFDLE9BQWUsRUFBRSxPQUF3QjtRQUVuRCxPQUFhLE1BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRixDQUFDO0NBQ0YsQ0FBQTs7WUFoUytDLHdCQUF3QjtZQUMxQyxjQUFjO1lBQ1osUUFBUTs7QUFKM0IsYUFBYTtJQUR6QixVQUFVLEVBQUU7cUNBR21DLHdCQUF3QjtRQUMxQyxjQUFjO1FBQ1osUUFBUTtHQUozQixhQUFhLENBa1N6QjtTQWxTWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEVtYmVkZGVkVmlld1JlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3J9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtmaW5hbGl6ZSwgc3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyQ29tcG9uZW50fSBmcm9tICcuLi8uLi9mb3JtL2Zvcm0tYnVpbGRlci9mb3JtLWJ1aWxkZXIuY29tcG9uZW50JztcbmltcG9ydCB7TTRGb3JtR3JvdXB9IGZyb20gJy4uLy4uL2Zvcm0vbTQtZm9ybS1ncm91cCc7XG5pbXBvcnQge000RGlhbG9nRGF0YUVtaXR0ZXIsIE00RGlhbG9nRGF0YUlucHV0fSBmcm9tICcuL2RpYWxvZy1pbnRlcmZhY2VzJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ09wdGlvbnMge1xuICB0aXRsZT86IHN0cmluZztcbiAgY29udGVudD86IHN0cmluZ3xhbnk7XG4gIGFjdGlvbnM/OiB7IGNhcHRpb246IHN0cmluZywgY2xzOiBzdHJpbmcsIG9uY2xpY2s6ICgpID0+IHZvaWQgfVtdO1xuICBhY3Rpb25zQWxpZ24/OiAnbGVmdCd8J3JpZ2h0JztcbiAgZGVmYXVsdEFjdGlvbj86IGJvb2xlYW47XG4gIG92ZXJsYXk/OiBib29sZWFuO1xuICBvdmVybGF5Q29sb3I/OiBzdHJpbmc7XG4gIG92ZXJsYXlBbHBoYT86IG51bWJlcjtcbiAgb3ZlcmxheUNsaWNrQ2xvc2U/OiBib29sZWFuO1xuICB3aWR0aD86IG51bWJlcjtcbiAgY2xvc2VBY3Rpb24/OiBib29sZWFuO1xuICBjbHNEaWFsb2c/OiBzdHJpbmc7XG4gIGNsc1RpdGxlPzogc3RyaW5nO1xuICBjbHNDb250ZW50Pzogc3RyaW5nO1xuICBjbHNBY3Rpb24/OiBzdHJpbmc7XG4gIGNsc0RlZmF1bHRBY3Rpb24/OiBzdHJpbmc7XG4gIGF1dG9IaWRlPzogbnVtYmVyO1xuICByZW1vdmVPbkNsb3NlPzogYm9vbGVhbjtcbiAgc2hvdz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5mb2JveE9wdGlvbnMge1xuICB0eXBlPzogJ2RlZmF1bHQnfCdzdWNjZXNzJ3wnaW5mbyd8J2FsZXJ0J3wnd2FybmluZyc7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIG92ZXJsYXk/OiBib29sZWFuO1xuICBvdmVybGF5Q29sb3I/OiBzdHJpbmc7XG4gIG92ZXJsYXlBbHBoYT86IHN0cmluZztcbiAgYXV0b0hpZGU/OiBudW1iZXI7XG4gIHJlbW92ZU9uQ2xvc2U/OiBib29sZWFuO1xuICBjbG9zZUJ1dHRvbj86IGJvb2xlYW47XG4gIGNsc0JveD86IHN0cmluZztcbiAgY2xzQm94Q29udGVudD86IHN0cmluZztcbiAgY2xzT3ZlcmxheT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERpYWxvZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHsgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBjdXN0b20gZGlhbG9nXG4gICAqIEBwYXJhbSBvcHRpb25zIFRoZSBvcHRpb25zIG9mIHRoZSBkaWFsb2dcbiAgICovXG4gIHB1YmxpYyBjcmVhdGUob3B0aW9uczogRGlhbG9nT3B0aW9ucyk6IGFueSB7XG4gICAgcmV0dXJuICg8YW55PndpbmRvdykuTWV0cm8uZGlhbG9nLmNyZWF0ZShvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBhIGNyZWF0ZWQgZGlhbG9nXG4gICAqIEBwYXJhbSBkaWFsb2dPYmogVGhlIG9iamVjdCByZXR1cm5lZCBieSB0aGUgY3JlYXRlIG1ldGhvZFxuICAgKi9cbiAgcHVibGljIGNsb3NlKGRpYWxvZ09iajogYW55KTogYW55IHtcbiAgICByZXR1cm4gKDxhbnk+d2luZG93KS5NZXRyby5kaWFsb2cuY2xvc2UoZGlhbG9nT2JqKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBhbiBhbGVydCBkaWFsb2dcbiAgICogQHBhcmFtIHRpdGxlIFRoZSB0aXRsZSBvZiB0aGUgZGlhbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIG9mIHRoZSBkaWFsb2dcbiAgICogQHBhcmFtIGNscyBPcHRpb25hbCBjc3MgY2xhc3Nlc1xuICAgKiBAcGFyYW0gb2tCdG5UZXh0IFRoZSB0ZXh0IG9mIHRoZSBPSy1CdXR0b25cbiAgICogQHBhcmFtIG9rQnRuQ2xzIEFuIG9wdGlvbmFsIGNzcyBjbGFzcyBmb3IgdGhlIE9LLUJ1dHRvblxuICAgKi9cbiAgcHVibGljIGFsZXJ0KHRpdGxlOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgY2xzPzogc3RyaW5nLCBva0J0blRleHQ/OiBzdHJpbmcsIG9rQnRuQ2xzPzogc3RyaW5nKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgY29uc3Qgc3ViamVjdCQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gICAgY29uc3Qgb3B0aW9uczogRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGNvbnRlbnQ6IG1lc3NhZ2UsXG4gICAgICBjbHNEaWFsb2c6IGNscyxcbiAgICAgIG92ZXJsYXlDbGlja0Nsb3NlOiB0cnVlXG4gICAgfTtcblxuICAgIGlmIChva0J0blRleHQpIHtcbiAgICAgIG9wdGlvbnMuYWN0aW9ucyA9IFt7XG4gICAgICAgIGNhcHRpb246IG9rQnRuVGV4dCxcbiAgICAgICAgY2xzOiAob2tCdG5DbHMgPyBva0J0bkNscyA6ICcnKSArICcganMtZGlhbG9nLWNsb3NlJyxcbiAgICAgICAgb25jbGljazogKCkgPT4ge1xuICAgICAgICAgIHN1YmplY3QkLm5leHQoKTtcbiAgICAgICAgICBzdWJqZWN0JC5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XTtcbiAgICB9XG5cbiAgICBjb25zdCBhbGVydE9iaiA9IHRoaXMuY3JlYXRlKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoYWxlcnRPYmopO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGEgY29uZmlybSBkaWFsb2dcbiAgICogQHBhcmFtIHRpdGxlIFRoZSB0aXRsZSBvZiB0aGUgY29uZmlybVxuICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBvZiB0aGUgY29uZmlybVxuICAgKiBAcGFyYW0geWVzQnRuVGV4dCBUaGUgdGV4dCBmb3IgdGhlIFllcy1CdXR0b25cbiAgICogQHBhcmFtIG5vQnRuVGV4dCBUaGUgdGV4dCBmb3IgdGhlIE5vLUJ1dHRvblxuICAgKiBAcGFyYW0gY2xzIEFuIG9wdGlvbmFsIGNzcyBjbGFzcyBmb3IgdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0geWVzQnRuQ2xzIEFuIG9wdGlvbmFsIGNzcyBjbGFzcyBmb3IgdGhlIFllcy1CdXR0b25cbiAgICogQHBhcmFtIG5vQnRuQ2xzIEFuIG9wdGlvbmFsIGNzcyBjbGFzcyBmb3IgdGhlIE5vLUJ1dHRvblxuICAgKi9cbiAgcHVibGljIGNvbmZpcm0odGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCB5ZXNCdG5UZXh0Pzogc3RyaW5nLCBub0J0blRleHQ/OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgIGNscz86IHN0cmluZywgeWVzQnRuQ2xzPzogc3RyaW5nLCBub0J0bkNscz86IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHN1YmplY3QkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcblxuICAgIGNvbnN0IG9wdGlvbnM6IERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBjb250ZW50OiBtZXNzYWdlLFxuICAgICAgYWN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2FwdGlvbjogeWVzQnRuVGV4dCA/IHllc0J0blRleHQgOiAnWWVzJyxcbiAgICAgICAgICBjbHM6ICh5ZXNCdG5DbHMgPyB5ZXNCdG5DbHMgOiAnc3VjY2VzcycpICsgJyBqcy1kaWFsb2ctY2xvc2UnLFxuICAgICAgICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHN1YmplY3QkLm5leHQodHJ1ZSk7XG4gICAgICAgICAgICBzdWJqZWN0JC5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNhcHRpb246IG5vQnRuVGV4dCA/IG5vQnRuVGV4dCA6ICdObycsXG4gICAgICAgICAgY2xzOiAobm9CdG5DbHMgPyBub0J0bkNscyA6ICdhbGVydCcpICsgJyBqcy1kaWFsb2ctY2xvc2UnLFxuICAgICAgICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHN1YmplY3QkLm5leHQoZmFsc2UpO1xuICAgICAgICAgICAgc3ViamVjdCQuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBjbHNEaWFsb2c6IGNsc1xuICAgIH07XG5cbiAgICBjb25zdCBjb25maXJtT2JqID0gdGhpcy5jcmVhdGUob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gc3ViamVjdCQuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZShjb25maXJtT2JqKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGEgcHJvbXB0IGRpYWxvZ1xuICAgKiBAcGFyYW0gdGl0bGUgVGhlIHRpdGxlIG9mIHRoZSBwcm9tcHRcbiAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2Ugb2YgdGhlIHByb21wdFxuICAgKiBAcGFyYW0gc3VibWl0QnRuVGV4dCBUaGUgdGV4dCBvZiB0aGUgU3VibWl0LUJ1dHRvblxuICAgKiBAcGFyYW0gcGxhY2Vob2xkZXIgVGhlIHBsYWNlaG9sZGVyIG9mIHRoZSBpbnB1dFxuICAgKiBAcGFyYW0gY2xzIEFuIG9wdGlvbmFsIGNzcyBjbGFzcyBmb3IgdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0gc3VibWl0QnRuQ2xzIEFuIG9wdGlvbmFsIGNzcyBjbGFzcyBmb3IgU3VibWl0LUJ1dHRvblxuICAgKiBAcGFyYW0gaW5wdXRDbHMgQW4gb3B0aW9uYWwgY3NzIGNsYXNzIGZvciB0aGUgaW5wdXRcbiAgICovXG4gIHB1YmxpYyBwcm9tcHQodGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBzdWJtaXRCdG5UZXh0Pzogc3RyaW5nLCBwbGFjZWhvbGRlcj86IHN0cmluZyxcbiAgICAgICAgICAgICAgICBjbHM/OiBzdHJpbmcsIHN1Ym1pdEJ0bkNscz86IHN0cmluZywgaW5wdXRDbHM/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IHN1YmplY3QkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gICAgY29uc3Qgb3B0aW9uczogRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGNvbnRlbnQ6IChtZXNzYWdlID8gbWVzc2FnZSA6ICcnKSArXG4gICAgICAgICAgICAgICAgYDxicj48aW5wdXQgZGF0YS1yb2xlPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiJHtpbnB1dENsc31cIiBwbGFjZWhvbGRlcj1cIiR7cGxhY2Vob2xkZXIgPyBwbGFjZWhvbGRlciA6ICcnfVwiIC8+YCxcbiAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNhcHRpb246IHN1Ym1pdEJ0blRleHQgPyBzdWJtaXRCdG5UZXh0IDogJ1N1Ym1pdCcsXG4gICAgICAgICAgY2xzOiAoc3VibWl0QnRuQ2xzID8gc3VibWl0QnRuQ2xzIDogJ3N1Y2Nlc3MnKSArICcganMtZGlhbG9nLWNsb3NlJyxcbiAgICAgICAgICBvbmNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBzdWJqZWN0JC5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIHN1YmplY3QkLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgY2xzRGlhbG9nOiBjbHNcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvbXB0T2JqOiBhbnkgPSB0aGlzLmNyZWF0ZShvcHRpb25zKTtcbiAgICBjb25zdCBpbnB1dCA9IHByb21wdE9iai5maW5kKCdpbnB1dCcpO1xuXG4gICAgbGV0IHZhbHVlID0gJyc7XG4gICAgaW5wdXQub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIHZhbHVlID0gaW5wdXQudmFsKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3ViamVjdCQuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZShwcm9tcHRPYmopO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYSBwcm9tcHQgZGlhbG9nIHRoYXQgY29udGFpbnMgYSBmb3JtXG4gICAqIEBwYXJhbSB0aXRsZSBUaGUgdGl0bGUgb2YgdGhlIHByb21wdFxuICAgKiBAcGFyYW0gZm9ybSBUaGUgZm9ybSBncm91cFxuICAgKiBAcGFyYW0gc3VibWl0QnRuVGV4dCBUaGUgdGV4dCBvZiB0aGUgU3VibWl0LUJ1dHRvblxuICAgKiBAcGFyYW0gYWJvcnRCdG5UZXh0IFRoZSB0ZXh0IG9mIHRoZSBBYm9ydC1CdXR0b25cbiAgICogQHBhcmFtIHBsYWNlaG9sZGVyIFRoZSBwbGFjZWhvbGRlciBvZiB0aGUgaW5wdXRcbiAgICogQHBhcmFtIGNscyBBbiBvcHRpb25hbCBjc3MgY2xhc3MgZm9yIHRoZSBkaWFsb2dcbiAgICogQHBhcmFtIHN1Ym1pdEJ0bkNscyBBbiBvcHRpb25hbCBjc3MgY2xhc3MgZm9yIFN1Ym1pdC1CdXR0b25cbiAgICogQHBhcmFtIGFib3J0QnRuQ2xzIEFuIG9wdGlvbmFsIGNzcyBjbGFzcyBmb3IgQWJvcnQtQnV0dG9uXG4gICAqL1xuICBwdWJsaWMgZm9ybVByb21wdDxUID0gc3RyaW5nPih0aXRsZTogc3RyaW5nLCBmb3JtOiBNNEZvcm1Hcm91cCwgc3VibWl0QnRuVGV4dD86IHN0cmluZywgYWJvcnRCdG5UZXh0Pzogc3RyaW5nLCBwbGFjZWhvbGRlcj86IHN0cmluZyxcbiAgICAgICAgICAgICAgICBjbHM/OiBzdHJpbmcsIHN1Ym1pdEJ0bkNscz86IHN0cmluZywgYWJvcnRCdG5DbHM/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCBjb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxGb3JtQnVpbGRlckNvbXBvbmVudD4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShGb3JtQnVpbGRlckNvbXBvbmVudCkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuICAgIGNvbXBvbmVudFJlZi5pbnN0YW5jZS5mb3JtR3JvdXAgPSBmb3JtO1xuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3Qgc3ViamVjdCQgPSBuZXcgU3ViamVjdDxUPigpO1xuXG4gICAgY29uc3Qgb3B0aW9uczogRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGNvbnRlbnQ6ICdjb250ZW50JyxcbiAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNhcHRpb246IGFib3J0QnRuVGV4dCA/IGFib3J0QnRuVGV4dCA6ICdBYm9ydCcsXG4gICAgICAgICAgY2xzOiBhYm9ydEJ0bkNscyA/IGFib3J0QnRuQ2xzIDogJ3dhcm5pbmcnLFxuICAgICAgICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHN1YmplY3QkLm5leHQobnVsbCk7XG4gICAgICAgICAgICBzdWJqZWN0JC5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNhcHRpb246IHN1Ym1pdEJ0blRleHQgPyBzdWJtaXRCdG5UZXh0IDogJ1N1Ym1pdCcsXG4gICAgICAgICAgY2xzOiAoc3VibWl0QnRuQ2xzID8gc3VibWl0QnRuQ2xzIDogJ3N1Y2Nlc3MnKSArICcgc3VibWl0LWJ0bicsXG4gICAgICAgICAgb25jbGljazogKCkgPT4ge1xuICAgICAgICAgICAgc3ViamVjdCQubmV4dChmb3JtLnZhbHVlKTtcbiAgICAgICAgICAgIHN1YmplY3QkLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgY2xzRGlhbG9nOiBjbHNcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvbXB0T2JqOiBhbnkgPSB0aGlzLmNyZWF0ZShvcHRpb25zKTtcbiAgICBwcm9tcHRPYmouZmluZCgnLmRpYWxvZy1jb250ZW50JykuZW1wdHkoKS5hcHBlbmQoZG9tRWxlbWVudCk7XG5cbiAgICBjb25zdCBmb3JtU3RhdGVTdWJzY3JpcHRpb24gPSBmb3JtLnN0YXR1c0NoYW5nZXMucGlwZShzdGFydFdpdGgoZm9ybS5zdGF0dXMpKS5zdWJzY3JpYmUoKHZhbGlkOiAnVkFMSUQnfCdJTlZBTElEJykgPT4ge1xuICAgICAgY29uc3Qgc3VibWl0QnRuID0gcHJvbXB0T2JqLmZpbmQoJy5kaWFsb2ctYWN0aW9ucyBidXR0b24uc3VibWl0LWJ0bicpO1xuXG4gICAgICBpZiAodmFsaWQgPT09ICdWQUxJRCcpIHtcbiAgICAgICAgc3VibWl0QnRuLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJtaXRCdG4uYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJqZWN0JC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlKHByb21wdE9iaik7XG4gICAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgIGZvcm1TdGF0ZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYSBkaWFsb2cgdGhhdCBjb250YWlucyBhIGNvbXBvbmVudFxuICAgKiBAcGFyYW0gY29tcG9uZW50IFRoZSBjb21wb25lbnQgY2xhc3MgdG8gcmVuZGVyXG4gICAqIEBwYXJhbSBkaWFsb2dEYXRhIERhdGEgdG8gcGFzcyB0byB0aGUgbmV3IGNvbXBvbmVudCBpbnN0YW5jZVxuICAgKiBAcGFyYW0gdGl0bGUgVGhlIHRpdGxlIG9mIHRoZSBkaWFsb2dcbiAgICogQHBhcmFtIGNsb3NlQnRuVGV4dCBDdXN0b20gdGV4dCBmb3IgdGhlIGNsb3NlIGJ1dHRvblxuICAgKiBAcGFyYW0gY2xzIEN1c3RvbSBkaWFsb2cgY2xhc3MgKGFjY2VudCwgc2l6ZSBldGMuKVxuICAgKiBAcGFyYW0gY2xvc2VCdG5DbHMgQ3VzdG9tIGNsb3NlIGJ1dHRvbiBjbGFzc1xuICAgKi9cbiAgcHVibGljIHNob3c8VE91dHB1dCA9IG51bGw+KGNvbXBvbmVudDogbmV3ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55LCBkaWFsb2dEYXRhPzogYW55LCB0aXRsZT86IHN0cmluZywgY2xvc2VCdG5UZXh0Pzogc3RyaW5nLCBjbHM/OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUJ0bkNscz86IHN0cmluZyk6IE9ic2VydmFibGU8VE91dHB1dD4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT4gPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnQpLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuICAgIGlmICghIWRpYWxvZ0RhdGEpIHtcbiAgICAgICg8TTREaWFsb2dEYXRhSW5wdXQ8VE91dHB1dD4+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5kaWFsb2dEYXRhSW5wdXQgPSBkaWFsb2dEYXRhO1xuICAgIH1cblxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3Qgc3ViamVjdCQgPSBuZXcgU3ViamVjdDxUT3V0cHV0PigpO1xuXG4gICAgbGV0IGRpYWxvZ0RhdGFTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGlmICghISg8TTREaWFsb2dEYXRhRW1pdHRlcjxUT3V0cHV0Pj5jb21wb25lbnRSZWYuaW5zdGFuY2UpLmRpYWxvZ0RhdGFFbWl0dGVyKSB7XG4gICAgICBkaWFsb2dEYXRhU3Vic2NyaXB0aW9uID0gKDxNNERpYWxvZ0RhdGFFbWl0dGVyPFRPdXRwdXQ+PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGlhbG9nRGF0YUVtaXR0ZXJcbiAgICAgICAgLnBpcGUoZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIHN1YmplY3QkLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgICBzdWJqZWN0JC5uZXh0KGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zOiBEaWFsb2dPcHRpb25zID0ge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgY29udGVudDogJChkb21FbGVtZW50KSxcbiAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNhcHRpb246IGNsb3NlQnRuVGV4dCA/IGNsb3NlQnRuVGV4dCA6ICdTdWJtaXQnLFxuICAgICAgICAgIGNsczogKGNsb3NlQnRuQ2xzID8gY2xvc2VCdG5DbHMgOiAnc3VjY2VzcycpICsgJyBzdWJtaXQtYnRuJyxcbiAgICAgICAgICBvbmNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBzdWJqZWN0JC5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGNsc0RpYWxvZzogY2xzXG4gICAgfTtcblxuICAgIGNvbnN0IGRpYWxvZ09iajogYW55ID0gdGhpcy5jcmVhdGUob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gc3ViamVjdCQuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgaWYgKGRpYWxvZ0RhdGFTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICBkaWFsb2dEYXRhU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsb3NlKGRpYWxvZ09iaik7XG4gICAgICAgIGNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhbiBpbmZvIGRpYWxvZ1xuICAgKiBAcGFyYW0gY29udGVudCBUaGUgY29udGVudCBvZiB0aGUgaW5mb1xuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciBpbmZvXG4gICAqL1xuICBwdWJsaWMgaW5mbyhjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBJbmZvYm94T3B0aW9ucyk6IHsgc2V0Q29udGVudDogKGNvbnRlbnQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBzZXRUeXBlOiAodHlwZTogJ2RlZmF1bHQnfCdzdWNjZXNzJ3wnaW5mbyd8J2FsZXJ0J3wnd2FybmluZycpID0+IHZvaWQ7IGNsb3NlOiAoKSA9PiB2b2lkIH0ge1xuICAgIHJldHVybiAoPGFueT53aW5kb3cpLk1ldHJvLmluZm9ib3guY3JlYXRlKGNvbnRlbnQsICcnLCBvcHRpb25zKS5kYXRhKCdpbmZvYm94Jyk7XG4gIH1cbn1cbiJdfQ==