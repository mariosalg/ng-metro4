import { __decorate, __metadata } from "tslib";
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, startWith } from 'rxjs/operators';
import { FormBuilderComponent } from '../../form/form-builder/form-builder.component';
var DialogService = /** @class */ (function () {
    function DialogService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * Create a custom dialog
     * @param options The options of the dialog
     */
    DialogService.prototype.create = function (options) {
        return window.Metro.dialog.create(options);
    };
    /**
     * Close a created dialog
     * @param dialogObj The object returned by the create method
     */
    DialogService.prototype.close = function (dialogObj) {
        return window.Metro.dialog.close(dialogObj);
    };
    /**
     * Shows an alert dialog
     * @param title The title of the dialog
     * @param message The message of the dialog
     * @param cls Optional css classes
     * @param okBtnText The text of the OK-Button
     * @param okBtnCls An optional css class for the OK-Button
     */
    DialogService.prototype.alert = function (title, message, cls, okBtnText, okBtnCls) {
        var _this = this;
        var subject$ = new Subject();
        var options = {
            title: title,
            content: message,
            clsDialog: cls,
            overlayClickClose: true
        };
        if (okBtnText) {
            options.actions = [{
                    caption: okBtnText,
                    cls: (okBtnCls ? okBtnCls : '') + ' js-dialog-close',
                    onclick: function () {
                        subject$.next();
                        subject$.complete();
                    }
                }];
        }
        var alertObj = this.create(options);
        return subject$.asObservable().pipe(finalize(function () {
            _this.close(alertObj);
        }));
    };
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
    DialogService.prototype.confirm = function (title, message, yesBtnText, noBtnText, cls, yesBtnCls, noBtnCls) {
        var _this = this;
        var subject$ = new Subject();
        var options = {
            title: title,
            content: message,
            actions: [
                {
                    caption: yesBtnText ? yesBtnText : 'Yes',
                    cls: (yesBtnCls ? yesBtnCls : 'success') + ' js-dialog-close',
                    onclick: function () {
                        subject$.next(true);
                        subject$.complete();
                    }
                },
                {
                    caption: noBtnText ? noBtnText : 'No',
                    cls: (noBtnCls ? noBtnCls : 'alert') + ' js-dialog-close',
                    onclick: function () {
                        subject$.next(false);
                        subject$.complete();
                    }
                }
            ],
            clsDialog: cls
        };
        var confirmObj = this.create(options);
        return subject$.asObservable().pipe(finalize(function () {
            _this.close(confirmObj);
        }));
    };
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
    DialogService.prototype.prompt = function (title, message, submitBtnText, placeholder, cls, submitBtnCls, inputCls) {
        var _this = this;
        var subject$ = new Subject();
        var options = {
            title: title,
            content: (message ? message : '') +
                ("<br><input data-role=\"input\" type=\"text\" class=\"" + inputCls + "\" placeholder=\"" + (placeholder ? placeholder : '') + "\" />"),
            actions: [
                {
                    caption: submitBtnText ? submitBtnText : 'Submit',
                    cls: (submitBtnCls ? submitBtnCls : 'success') + ' js-dialog-close',
                    onclick: function () {
                        subject$.next(value);
                        subject$.complete();
                    }
                }
            ],
            clsDialog: cls
        };
        var promptObj = this.create(options);
        var input = promptObj.find('input');
        var value = '';
        input.on('change', function () {
            value = input.val();
        });
        return subject$.asObservable().pipe(finalize(function () {
            _this.close(promptObj);
        }));
    };
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
    DialogService.prototype.formPrompt = function (title, form, submitBtnText, abortBtnText, placeholder, cls, submitBtnCls, abortBtnCls) {
        var _this = this;
        var componentRef = this.componentFactoryResolver.resolveComponentFactory(FormBuilderComponent).create(this.injector);
        componentRef.instance.formGroup = form;
        this.appRef.attachView(componentRef.hostView);
        var domElement = componentRef.hostView.rootNodes[0];
        var subject$ = new Subject();
        var options = {
            title: title,
            content: 'content',
            actions: [
                {
                    caption: abortBtnText ? abortBtnText : 'Abort',
                    cls: abortBtnCls ? abortBtnCls : 'warning',
                    onclick: function () {
                        subject$.next(null);
                        subject$.complete();
                    }
                },
                {
                    caption: submitBtnText ? submitBtnText : 'Submit',
                    cls: (submitBtnCls ? submitBtnCls : 'success') + ' submit-btn',
                    onclick: function () {
                        subject$.next(form.value);
                        subject$.complete();
                    }
                }
            ],
            clsDialog: cls
        };
        var promptObj = this.create(options);
        promptObj.find('.dialog-content').empty().append(domElement);
        var formStateSubscription = form.statusChanges.pipe(startWith(form.status)).subscribe(function (valid) {
            var submitBtn = promptObj.find('.dialog-actions button.submit-btn');
            if (valid === 'VALID') {
                submitBtn.removeAttr('disabled');
            }
            else {
                submitBtn.attr('disabled', 'disabled');
            }
        });
        return subject$.asObservable().pipe(finalize(function () {
            _this.close(promptObj);
            componentRef.destroy();
            formStateSubscription.unsubscribe();
        }));
    };
    /**
     * Show a dialog that contains a component
     * @param component The component class to render
     * @param dialogData Data to pass to the new component instance
     * @param title The title of the dialog
     * @param closeBtnText Custom text for the close button
     * @param cls Custom dialog class (accent, size etc.)
     * @param closeBtnCls Custom close button class
     */
    DialogService.prototype.show = function (component, dialogData, title, closeBtnText, cls, closeBtnCls) {
        var _this = this;
        var componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
        if (!!dialogData) {
            componentRef.instance.dialogDataInput = dialogData;
        }
        this.appRef.attachView(componentRef.hostView);
        var domElement = componentRef.hostView.rootNodes[0];
        var subject$ = new Subject();
        var dialogDataSubscription;
        if (!!componentRef.instance.dialogDataEmitter) {
            dialogDataSubscription = componentRef.instance.dialogDataEmitter
                .pipe(finalize(function () {
                subject$.complete();
            })).subscribe(function (data) {
                subject$.next(data);
            });
        }
        var options = {
            title: title,
            content: $(domElement),
            actions: [
                {
                    caption: closeBtnText ? closeBtnText : 'Submit',
                    cls: (closeBtnCls ? closeBtnCls : 'success') + ' submit-btn',
                    onclick: function () {
                        subject$.complete();
                    }
                }
            ],
            clsDialog: cls
        };
        var dialogObj = this.create(options);
        return subject$.asObservable().pipe(finalize(function () {
            if (dialogDataSubscription) {
                dialogDataSubscription.unsubscribe();
            }
            _this.close(dialogObj);
            componentRef.destroy();
        }));
    };
    /**
     * Show an info dialog
     * @param content The content of the info
     * @param options Options for info
     */
    DialogService.prototype.info = function (content, options) {
        return window.Metro.infobox.create(content, '', options).data('infobox');
    };
    DialogService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector }
    ]; };
    DialogService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ComponentFactoryResolver,
            ApplicationRef,
            Injector])
    ], DialogService);
    return DialogService;
}());
export { DialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvaW5mb3JtYXRpb24vZGlhbG9nL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFFLHdCQUF3QixFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQWEsT0FBTyxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUE0Q3BGO0lBRUUsdUJBQW9CLHdCQUFrRCxFQUNsRCxNQUFzQixFQUN0QixRQUFrQjtRQUZsQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBSSxDQUFDO0lBRTNDOzs7T0FHRztJQUNJLDhCQUFNLEdBQWIsVUFBYyxPQUFzQjtRQUNsQyxPQUFhLE1BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQUssR0FBWixVQUFhLFNBQWM7UUFDekIsT0FBYSxNQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSw2QkFBSyxHQUFaLFVBQWEsS0FBYSxFQUFFLE9BQWUsRUFBRSxHQUFZLEVBQUUsU0FBa0IsRUFBRSxRQUFpQjtRQUFoRyxpQkE0QkM7UUEzQkMsSUFBTSxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUVy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QUFDO2lCQUNGO2FBQ0Y7WUFDRCxTQUFTLEVBQUUsR0FBRztTQUNmLENBQUM7UUFFRixJQUFNLFNBQVMsR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVDLE9BQU8sUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDakMsUUFBUSxDQUFDO1lBQ1AsSUFBSSxzQkFBc0IsRUFBRTtnQkFDMUIsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEM7WUFFRCxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RCLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSw0QkFBSSxHQUFYLFVBQVksT0FBZSxFQUFFLE9BQXdCO1FBRW5ELE9BQWEsTUFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7O2dCQS9SNkMsd0JBQXdCO2dCQUMxQyxjQUFjO2dCQUNaLFFBQVE7O0lBSjNCLGFBQWE7UUFEekIsVUFBVSxFQUFFO3lDQUdtQyx3QkFBd0I7WUFDMUMsY0FBYztZQUNaLFFBQVE7T0FKM0IsYUFBYSxDQWtTekI7SUFBRCxvQkFBQztDQUFBLEFBbFNELElBa1NDO1NBbFNZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgRW1iZWRkZWRWaWV3UmVmLCBJbmplY3RhYmxlLCBJbmplY3Rvcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbmFsaXplLCBzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXJDb21wb25lbnR9IGZyb20gJy4uLy4uL2Zvcm0vZm9ybS1idWlsZGVyL2Zvcm0tYnVpbGRlci5jb21wb25lbnQnO1xuaW1wb3J0IHtNNEZvcm1Hcm91cH0gZnJvbSAnLi4vLi4vZm9ybS9tNC1mb3JtLWdyb3VwJztcbmltcG9ydCB7TTREaWFsb2dEYXRhRW1pdHRlciwgTTREaWFsb2dEYXRhSW5wdXR9IGZyb20gJy4vZGlhbG9nLWludGVyZmFjZXMnO1xuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nT3B0aW9ucyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjb250ZW50Pzogc3RyaW5nfGFueTtcbiAgYWN0aW9ucz86IHsgY2FwdGlvbjogc3RyaW5nLCBjbHM6IHN0cmluZywgb25jbGljazogKCkgPT4gdm9pZCB9W107XG4gIGFjdGlvbnNBbGlnbj86ICdsZWZ0J3wncmlnaHQnO1xuICBkZWZhdWx0QWN0aW9uPzogYm9vbGVhbjtcbiAgb3ZlcmxheT86IGJvb2xlYW47XG4gIG92ZXJsYXlDb2xvcj86IHN0cmluZztcbiAgb3ZlcmxheUFscGhhPzogbnVtYmVyO1xuICBvdmVybGF5Q2xpY2tDbG9zZT86IGJvb2xlYW47XG4gIHdpZHRoPzogbnVtYmVyO1xuICBjbG9zZUFjdGlvbj86IGJvb2xlYW47XG4gIGNsc0RpYWxvZz86IHN0cmluZztcbiAgY2xzVGl0bGU/OiBzdHJpbmc7XG4gIGNsc0NvbnRlbnQ/OiBzdHJpbmc7XG4gIGNsc0FjdGlvbj86IHN0cmluZztcbiAgY2xzRGVmYXVsdEFjdGlvbj86IHN0cmluZztcbiAgYXV0b0hpZGU/OiBudW1iZXI7XG4gIHJlbW92ZU9uQ2xvc2U/OiBib29sZWFuO1xuICBzaG93PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmZvYm94T3B0aW9ucyB7XG4gIHR5cGU/OiAnZGVmYXVsdCd8J3N1Y2Nlc3MnfCdpbmZvJ3wnYWxlcnQnfCd3YXJuaW5nJztcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgb3ZlcmxheT86IGJvb2xlYW47XG4gIG92ZXJsYXlDb2xvcj86IHN0cmluZztcbiAgb3ZlcmxheUFscGhhPzogc3RyaW5nO1xuICBhdXRvSGlkZT86IG51bWJlcjtcbiAgcmVtb3ZlT25DbG9zZT86IGJvb2xlYW47XG4gIGNsb3NlQnV0dG9uPzogYm9vbGVhbjtcbiAgY2xzQm94Pzogc3RyaW5nO1xuICBjbHNCb3hDb250ZW50Pzogc3RyaW5nO1xuICBjbHNPdmVybGF5Pzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcikgeyB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGN1c3RvbSBkaWFsb2dcbiAgICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgb2YgdGhlIGRpYWxvZ1xuICAgKi9cbiAgcHVibGljIGNyZWF0ZShvcHRpb25zOiBEaWFsb2dPcHRpb25zKTogYW55IHtcbiAgICByZXR1cm4gKDxhbnk+d2luZG93KS5NZXRyby5kaWFsb2cuY3JlYXRlKG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIGEgY3JlYXRlZCBkaWFsb2dcbiAgICogQHBhcmFtIGRpYWxvZ09iaiBUaGUgb2JqZWN0IHJldHVybmVkIGJ5IHRoZSBjcmVhdGUgbWV0aG9kXG4gICAqL1xuICBwdWJsaWMgY2xvc2UoZGlhbG9nT2JqOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiAoPGFueT53aW5kb3cpLk1ldHJvLmRpYWxvZy5jbG9zZShkaWFsb2dPYmopO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGFuIGFsZXJ0IGRpYWxvZ1xuICAgKiBAcGFyYW0gdGl0bGUgVGhlIHRpdGxlIG9mIHRoZSBkaWFsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgVGhlIG1lc3NhZ2Ugb2YgdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0gY2xzIE9wdGlvbmFsIGNzcyBjbGFzc2VzXG4gICAqIEBwYXJhbSBva0J0blRleHQgVGhlIHRleHQgb2YgdGhlIE9LLUJ1dHRvblxuICAgKiBAcGFyYW0gb2tCdG5DbHMgQW4gb3B0aW9uYWwgY3NzIGNsYXNzIGZvciB0aGUgT0stQnV0dG9uXG4gICAqL1xuICBwdWJsaWMgYWxlcnQodGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBjbHM/OiBzdHJpbmcsIG9rQnRuVGV4dD86IHN0cmluZywgb2tCdG5DbHM/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCBzdWJqZWN0JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICBjb25zdCBvcHRpb25zOiBEaWFsb2dPcHRpb25zID0ge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgY29udGVudDogbWVzc2FnZSxcbiAgICAgIGNsc0RpYWxvZzogY2xzLFxuICAgICAgb3ZlcmxheUNsaWNrQ2xvc2U6IHRydWVcbiAgICB9O1xuXG4gICAgaWYgKG9rQnRuVGV4dCkge1xuICAgICAgb3B0aW9ucy5hY3Rpb25zID0gW3tcbiAgICAgICAgY2FwdGlvbjogb2tCdG5UZXh0LFxuICAgICAgICBjbHM6IChva0J0bkNscyA/IG9rQnRuQ2xzIDogJycpICsgJyBqcy1kaWFsb2ctY2xvc2UnLFxuICAgICAgICBvbmNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgc3ViamVjdCQubmV4dCgpO1xuICAgICAgICAgIHN1YmplY3QkLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1dO1xuICAgIH1cblxuICAgIGNvbnN0IGFsZXJ0T2JqID0gdGhpcy5jcmVhdGUob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gc3ViamVjdCQuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZShhbGVydE9iaik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgYSBjb25maXJtIGRpYWxvZ1xuICAgKiBAcGFyYW0gdGl0bGUgVGhlIHRpdGxlIG9mIHRoZSBjb25maXJtXG4gICAqIEBwYXJhbSBtZXNzYWdlIFRoZSBtZXNzYWdlIG9mIHRoZSBjb25maXJtXG4gICAqIEBwYXJhbSB5ZXNCdG5UZXh0IFRoZSB0ZXh0IGZvciB0aGUgWWVzLUJ1dHRvblxuICAgKiBAcGFyYW0gbm9CdG5UZXh0IFRoZSB0ZXh0IGZvciB0aGUgTm8tQnV0dG9uXG4gICAqIEBwYXJhbSBjbHMgQW4gb3B0aW9uYWwgY3NzIGNsYXNzIGZvciB0aGUgZGlhbG9nXG4gICAqIEBwYXJhbSB5ZXNCdG5DbHMgQW4gb3B0aW9uYWwgY3NzIGNsYXNzIGZvciB0aGUgWWVzLUJ1dHRvblxuICAgKiBAcGFyYW0gbm9CdG5DbHMgQW4gb3B0aW9uYWwgY3NzIGNsYXNzIGZvciB0aGUgTm8tQnV0dG9uXG4gICAqL1xuICBwdWJsaWMgY29uZmlybSh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHllc0J0blRleHQ/OiBzdHJpbmcsIG5vQnRuVGV4dD86IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgY2xzPzogc3RyaW5nLCB5ZXNCdG5DbHM/OiBzdHJpbmcsIG5vQnRuQ2xzPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3Qgc3ViamVjdCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgY29uc3Qgb3B0aW9uczogRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGNvbnRlbnQ6IG1lc3NhZ2UsXG4gICAgICBhY3Rpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjYXB0aW9uOiB5ZXNCdG5UZXh0ID8geWVzQnRuVGV4dCA6ICdZZXMnLFxuICAgICAgICAgIGNsczogKHllc0J0bkNscyA/IHllc0J0bkNscyA6ICdzdWNjZXNzJykgKyAnIGpzLWRpYWxvZy1jbG9zZScsXG4gICAgICAgICAgb25jbGljazogKCkgPT4ge1xuICAgICAgICAgICAgc3ViamVjdCQubmV4dCh0cnVlKTtcbiAgICAgICAgICAgIHN1YmplY3QkLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2FwdGlvbjogbm9CdG5UZXh0ID8gbm9CdG5UZXh0IDogJ05vJyxcbiAgICAgICAgICBjbHM6IChub0J0bkNscyA/IG5vQnRuQ2xzIDogJ2FsZXJ0JykgKyAnIGpzLWRpYWxvZy1jbG9zZScsXG4gICAgICAgICAgb25jbGljazogKCkgPT4ge1xuICAgICAgICAgICAgc3ViamVjdCQubmV4dChmYWxzZSk7XG4gICAgICAgICAgICBzdWJqZWN0JC5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGNsc0RpYWxvZzogY2xzXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmZpcm1PYmogPSB0aGlzLmNyZWF0ZShvcHRpb25zKTtcblxuICAgIHJldHVybiBzdWJqZWN0JC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlKGNvbmZpcm1PYmopO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYSBwcm9tcHQgZGlhbG9nXG4gICAqIEBwYXJhbSB0aXRsZSBUaGUgdGl0bGUgb2YgdGhlIHByb21wdFxuICAgKiBAcGFyYW0gbWVzc2FnZSBUaGUgbWVzc2FnZSBvZiB0aGUgcHJvbXB0XG4gICAqIEBwYXJhbSBzdWJtaXRCdG5UZXh0IFRoZSB0ZXh0IG9mIHRoZSBTdWJtaXQtQnV0dG9uXG4gICAqIEBwYXJhbSBwbGFjZWhvbGRlciBUaGUgcGxhY2Vob2xkZXIgb2YgdGhlIGlucHV0XG4gICAqIEBwYXJhbSBjbHMgQW4gb3B0aW9uYWwgY3NzIGNsYXNzIGZvciB0aGUgZGlhbG9nXG4gICAqIEBwYXJhbSBzdWJtaXRCdG5DbHMgQW4gb3B0aW9uYWwgY3NzIGNsYXNzIGZvciBTdWJtaXQtQnV0dG9uXG4gICAqIEBwYXJhbSBpbnB1dENscyBBbiBvcHRpb25hbCBjc3MgY2xhc3MgZm9yIHRoZSBpbnB1dFxuICAgKi9cbiAgcHVibGljIHByb21wdCh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHN1Ym1pdEJ0blRleHQ/OiBzdHJpbmcsIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGNscz86IHN0cmluZywgc3VibWl0QnRuQ2xzPzogc3RyaW5nLCBpbnB1dENscz86IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3Qgc3ViamVjdCQgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgICBjb25zdCBvcHRpb25zOiBEaWFsb2dPcHRpb25zID0ge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgY29udGVudDogKG1lc3NhZ2UgPyBtZXNzYWdlIDogJycpICtcbiAgICAgICAgICAgICAgICBgPGJyPjxpbnB1dCBkYXRhLXJvbGU9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCIke2lucHV0Q2xzfVwiIHBsYWNlaG9sZGVyPVwiJHtwbGFjZWhvbGRlciA/IHBsYWNlaG9sZGVyIDogJyd9XCIgLz5gLFxuICAgICAgYWN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2FwdGlvbjogc3VibWl0QnRuVGV4dCA/IHN1Ym1pdEJ0blRleHQgOiAnU3VibWl0JyxcbiAgICAgICAgICBjbHM6IChzdWJtaXRCdG5DbHMgPyBzdWJtaXRCdG5DbHMgOiAnc3VjY2VzcycpICsgJyBqcy1kaWFsb2ctY2xvc2UnLFxuICAgICAgICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHN1YmplY3QkLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgc3ViamVjdCQuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBjbHNEaWFsb2c6IGNsc1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9tcHRPYmo6IGFueSA9IHRoaXMuY3JlYXRlKG9wdGlvbnMpO1xuICAgIGNvbnN0IGlucHV0ID0gcHJvbXB0T2JqLmZpbmQoJ2lucHV0Jyk7XG5cbiAgICBsZXQgdmFsdWUgPSAnJztcbiAgICBpbnB1dC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdmFsdWUgPSBpbnB1dC52YWwoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJqZWN0JC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNsb3NlKHByb21wdE9iaik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhIHByb21wdCBkaWFsb2cgdGhhdCBjb250YWlucyBhIGZvcm1cbiAgICogQHBhcmFtIHRpdGxlIFRoZSB0aXRsZSBvZiB0aGUgcHJvbXB0XG4gICAqIEBwYXJhbSBmb3JtIFRoZSBmb3JtIGdyb3VwXG4gICAqIEBwYXJhbSBzdWJtaXRCdG5UZXh0IFRoZSB0ZXh0IG9mIHRoZSBTdWJtaXQtQnV0dG9uXG4gICAqIEBwYXJhbSBhYm9ydEJ0blRleHQgVGhlIHRleHQgb2YgdGhlIEFib3J0LUJ1dHRvblxuICAgKiBAcGFyYW0gcGxhY2Vob2xkZXIgVGhlIHBsYWNlaG9sZGVyIG9mIHRoZSBpbnB1dFxuICAgKiBAcGFyYW0gY2xzIEFuIG9wdGlvbmFsIGNzcyBjbGFzcyBmb3IgdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0gc3VibWl0QnRuQ2xzIEFuIG9wdGlvbmFsIGNzcyBjbGFzcyBmb3IgU3VibWl0LUJ1dHRvblxuICAgKiBAcGFyYW0gYWJvcnRCdG5DbHMgQW4gb3B0aW9uYWwgY3NzIGNsYXNzIGZvciBBYm9ydC1CdXR0b25cbiAgICovXG4gIHB1YmxpYyBmb3JtUHJvbXB0PFQgPSBzdHJpbmc+KHRpdGxlOiBzdHJpbmcsIGZvcm06IE00Rm9ybUdyb3VwLCBzdWJtaXRCdG5UZXh0Pzogc3RyaW5nLCBhYm9ydEJ0blRleHQ/OiBzdHJpbmcsIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGNscz86IHN0cmluZywgc3VibWl0QnRuQ2xzPzogc3RyaW5nLCBhYm9ydEJ0bkNscz86IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPEZvcm1CdWlsZGVyQ29tcG9uZW50PiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KEZvcm1CdWlsZGVyQ29tcG9uZW50KS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG4gICAgY29tcG9uZW50UmVmLmluc3RhbmNlLmZvcm1Hcm91cCA9IGZvcm07XG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdCBzdWJqZWN0JCA9IG5ldyBTdWJqZWN0PFQ+KCk7XG5cbiAgICBjb25zdCBvcHRpb25zOiBEaWFsb2dPcHRpb25zID0ge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgY29udGVudDogJ2NvbnRlbnQnLFxuICAgICAgYWN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2FwdGlvbjogYWJvcnRCdG5UZXh0ID8gYWJvcnRCdG5UZXh0IDogJ0Fib3J0JyxcbiAgICAgICAgICBjbHM6IGFib3J0QnRuQ2xzID8gYWJvcnRCdG5DbHMgOiAnd2FybmluZycsXG4gICAgICAgICAgb25jbGljazogKCkgPT4ge1xuICAgICAgICAgICAgc3ViamVjdCQubmV4dChudWxsKTtcbiAgICAgICAgICAgIHN1YmplY3QkLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY2FwdGlvbjogc3VibWl0QnRuVGV4dCA/IHN1Ym1pdEJ0blRleHQgOiAnU3VibWl0JyxcbiAgICAgICAgICBjbHM6IChzdWJtaXRCdG5DbHMgPyBzdWJtaXRCdG5DbHMgOiAnc3VjY2VzcycpICsgJyBzdWJtaXQtYnRuJyxcbiAgICAgICAgICBvbmNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICBzdWJqZWN0JC5uZXh0KGZvcm0udmFsdWUpO1xuICAgICAgICAgICAgc3ViamVjdCQuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBjbHNEaWFsb2c6IGNsc1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9tcHRPYmo6IGFueSA9IHRoaXMuY3JlYXRlKG9wdGlvbnMpO1xuICAgIHByb21wdE9iai5maW5kKCcuZGlhbG9nLWNvbnRlbnQnKS5lbXB0eSgpLmFwcGVuZChkb21FbGVtZW50KTtcblxuICAgIGNvbnN0IGZvcm1TdGF0ZVN1YnNjcmlwdGlvbiA9IGZvcm0uc3RhdHVzQ2hhbmdlcy5waXBlKHN0YXJ0V2l0aChmb3JtLnN0YXR1cykpLnN1YnNjcmliZSgodmFsaWQ6ICdWQUxJRCd8J0lOVkFMSUQnKSA9PiB7XG4gICAgICBjb25zdCBzdWJtaXRCdG4gPSBwcm9tcHRPYmouZmluZCgnLmRpYWxvZy1hY3Rpb25zIGJ1dHRvbi5zdWJtaXQtYnRuJyk7XG5cbiAgICAgIGlmICh2YWxpZCA9PT0gJ1ZBTElEJykge1xuICAgICAgICBzdWJtaXRCdG4ucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1Ym1pdEJ0bi5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YmplY3QkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UocHJvbXB0T2JqKTtcbiAgICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgICAgZm9ybVN0YXRlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBhIGRpYWxvZyB0aGF0IGNvbnRhaW5zIGEgY29tcG9uZW50XG4gICAqIEBwYXJhbSBjb21wb25lbnQgVGhlIGNvbXBvbmVudCBjbGFzcyB0byByZW5kZXJcbiAgICogQHBhcmFtIGRpYWxvZ0RhdGEgRGF0YSB0byBwYXNzIHRvIHRoZSBuZXcgY29tcG9uZW50IGluc3RhbmNlXG4gICAqIEBwYXJhbSB0aXRsZSBUaGUgdGl0bGUgb2YgdGhlIGRpYWxvZ1xuICAgKiBAcGFyYW0gY2xvc2VCdG5UZXh0IEN1c3RvbSB0ZXh0IGZvciB0aGUgY2xvc2UgYnV0dG9uXG4gICAqIEBwYXJhbSBjbHMgQ3VzdG9tIGRpYWxvZyBjbGFzcyAoYWNjZW50LCBzaXplIGV0Yy4pXG4gICAqIEBwYXJhbSBjbG9zZUJ0bkNscyBDdXN0b20gY2xvc2UgYnV0dG9uIGNsYXNzXG4gICAqL1xuICBwdWJsaWMgc2hvdzxUT3V0cHV0ID0gbnVsbD4oY29tcG9uZW50OiBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnksIGRpYWxvZ0RhdGE/OiBhbnksIHRpdGxlPzogc3RyaW5nLCBjbG9zZUJ0blRleHQ/OiBzdHJpbmcsIGNscz86IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQnRuQ2xzPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUT3V0cHV0PiB7XG4gICAgY29uc3QgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8YW55PiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuXG4gICAgaWYgKCEhZGlhbG9nRGF0YSkge1xuICAgICAgKDxNNERpYWxvZ0RhdGFJbnB1dDxUT3V0cHV0Pj5jb21wb25lbnRSZWYuaW5zdGFuY2UpLmRpYWxvZ0RhdGFJbnB1dCA9IGRpYWxvZ0RhdGE7XG4gICAgfVxuXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdCBzdWJqZWN0JCA9IG5ldyBTdWJqZWN0PFRPdXRwdXQ+KCk7XG5cbiAgICBsZXQgZGlhbG9nRGF0YVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgaWYgKCEhKDxNNERpYWxvZ0RhdGFFbWl0dGVyPFRPdXRwdXQ+PmNvbXBvbmVudFJlZi5pbnN0YW5jZSkuZGlhbG9nRGF0YUVtaXR0ZXIpIHtcbiAgICAgIGRpYWxvZ0RhdGFTdWJzY3JpcHRpb24gPSAoPE00RGlhbG9nRGF0YUVtaXR0ZXI8VE91dHB1dD4+Y29tcG9uZW50UmVmLmluc3RhbmNlKS5kaWFsb2dEYXRhRW1pdHRlclxuICAgICAgICAucGlwZShmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgc3ViamVjdCQuY29tcGxldGUoKTtcbiAgICAgICAgfSkpLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgIHN1YmplY3QkLm5leHQoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnM6IERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBjb250ZW50OiAkKGRvbUVsZW1lbnQpLFxuICAgICAgYWN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2FwdGlvbjogY2xvc2VCdG5UZXh0ID8gY2xvc2VCdG5UZXh0IDogJ1N1Ym1pdCcsXG4gICAgICAgICAgY2xzOiAoY2xvc2VCdG5DbHMgPyBjbG9zZUJ0bkNscyA6ICdzdWNjZXNzJykgKyAnIHN1Ym1pdC1idG4nLFxuICAgICAgICAgIG9uY2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHN1YmplY3QkLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgY2xzRGlhbG9nOiBjbHNcbiAgICB9O1xuXG4gICAgY29uc3QgZGlhbG9nT2JqOiBhbnkgPSB0aGlzLmNyZWF0ZShvcHRpb25zKTtcblxuICAgIHJldHVybiBzdWJqZWN0JC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICBpZiAoZGlhbG9nRGF0YVN1YnNjcmlwdGlvbikge1xuICAgICAgICAgIGRpYWxvZ0RhdGFTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xvc2UoZGlhbG9nT2JqKTtcbiAgICAgICAgY29tcG9uZW50UmVmLmRlc3Ryb3koKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGFuIGluZm8gZGlhbG9nXG4gICAqIEBwYXJhbSBjb250ZW50IFRoZSBjb250ZW50IG9mIHRoZSBpbmZvXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGluZm9cbiAgICovXG4gIHB1YmxpYyBpbmZvKGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IEluZm9ib3hPcHRpb25zKTogeyBzZXRDb250ZW50OiAoY29udGVudDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIHNldFR5cGU6ICh0eXBlOiAnZGVmYXVsdCd8J3N1Y2Nlc3MnfCdpbmZvJ3wnYWxlcnQnfCd3YXJuaW5nJykgPT4gdm9pZDsgY2xvc2U6ICgpID0+IHZvaWQgfSB7XG4gICAgcmV0dXJuICg8YW55PndpbmRvdykuTWV0cm8uaW5mb2JveC5jcmVhdGUoY29udGVudCwgJycsIG9wdGlvbnMpLmRhdGEoJ2luZm9ib3gnKTtcbiAgfVxufVxuIl19