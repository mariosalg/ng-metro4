import { __decorate, __extends, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { ObjectHelper } from '../../helper/object-helper';
var FileInputComponent = /** @class */ (function (_super) {
    __extends(FileInputComponent, _super);
    function FileInputComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.multiple = false;
        _this.accept = '';
        _this.read = '';
        _this.drop = false;
        return _this;
    }
    FileInputComponent_1 = FileInputComponent;
    FileInputComponent.prototype.createControl = function () {
        var _this = this;
        return new Promise(function (complete) {
            var originalElement = $(_this.input.nativeElement);
            ObjectHelper.hide(originalElement);
            if (_this.clonedElement) {
                _this.clonedElement.parent().remove();
            }
            _this.clonedElement = originalElement.clone();
            ObjectHelper.show(_this.clonedElement);
            originalElement.parent().append(_this.clonedElement);
            _this.fileInput = _this.clonedElement.file().data('file');
            if (_this.drop) {
                if (_this.buttonTitle) {
                    var captionElement = _this.clonedElement.closest('label.drop-zone').find('span.caption');
                    captionElement.html(_this.buttonTitle);
                }
                if (_this.infoText) {
                    _this.updateInfoText();
                }
            }
            _this.fileInput.options.onSelect = function (files) {
                if (_this.multiple) {
                    var result = [];
                    for (var i = 0; i < files.length; i++) {
                        result.push(files[i]);
                    }
                    if (_this.read) {
                        _this.readFiles(files);
                    }
                    else {
                        _this.changeValue(result);
                    }
                }
                else {
                    if (_this.read) {
                        _this.readFiles(files);
                    }
                    else {
                        _this.changeValue(files[0]);
                    }
                }
                if (_this.drop && _this.infoText) {
                    _this.updateInfoText();
                }
            };
            _this.clonedElement.one('blur', function () {
                _this.touchCallback();
            });
            complete();
        });
    };
    FileInputComponent.prototype.readFiles = function (files) {
        var _this = this;
        var fileLoadPromises = [];
        var _loop_1 = function (i) {
            var file = files[i];
            var loadPromise = new Promise(function (resolve) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    resolve({ content: reader.result, file: file });
                };
                switch (_this.read) {
                    case 'arrayBuffer':
                        reader.readAsArrayBuffer(file);
                        break;
                    case 'binaryString':
                        reader.readAsBinaryString(file);
                        break;
                    case 'dataUrl':
                        reader.readAsDataURL(file);
                        break;
                    case 'text':
                    default:
                        reader.readAsText(file);
                        break;
                }
            });
            fileLoadPromises.push(loadPromise);
        };
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
        Promise.all(fileLoadPromises).then(function (fileEntries) {
            if (_this.multiple) {
                _this.changeValue(fileEntries);
            }
            else {
                _this.changeValue(fileEntries[0]);
            }
        });
    };
    FileInputComponent.prototype.disable = function (disabled) {
        if (disabled) {
            this.fileInput.disable();
        }
        else {
            this.fileInput.enable();
        }
    };
    FileInputComponent.prototype.newValue = function () {
        if (!this.fileInput || this.drop || this.read || !this.innerValue) {
            return;
        }
        var name;
        if (this.innerValue instanceof Array) {
            name = this.innerValue.map(function (v) {
                if (v instanceof File) {
                    return v.name;
                }
                else {
                    return v.file.name;
                }
            }).join(', ');
        }
        else {
            name = this.innerValue instanceof File ? this.innerValue.name : this.innerValue.file.name;
        }
        this.clonedElement.parent().find('span.caption').html(name);
    };
    FileInputComponent.prototype.newClassValue = function (newClasses, oldClasses) {
        if (this.clonedElement) {
            var target_1 = this.clonedElement.parent();
            oldClasses.forEach(function (cls) {
                target_1.removeClass(cls);
            });
            newClasses.forEach(function (cls) {
                target_1.addClass(cls);
            });
        }
    };
    FileInputComponent.prototype.updateInfoText = function () {
        var infoTextContent = this.infoText
            .split('{0}')
            .join(this.innerValue instanceof Array ? "" + this.innerValue.length : this.innerValue ? '1' : '0');
        var infoTextElement = this.clonedElement.closest('label.drop-zone').find('span.files');
        infoTextElement.html(infoTextContent);
    };
    var FileInputComponent_1;
    __decorate([
        Input('multiple'),
        __metadata("design:type", Object)
    ], FileInputComponent.prototype, "multiple", void 0);
    __decorate([
        Input('accept'),
        __metadata("design:type", Object)
    ], FileInputComponent.prototype, "accept", void 0);
    __decorate([
        Input('read'),
        __metadata("design:type", String)
    ], FileInputComponent.prototype, "read", void 0);
    __decorate([
        Input('prepend'),
        __metadata("design:type", String)
    ], FileInputComponent.prototype, "prepend", void 0);
    __decorate([
        Input('button-title'),
        __metadata("design:type", String)
    ], FileInputComponent.prototype, "buttonTitle", void 0);
    __decorate([
        Input('info-text'),
        __metadata("design:type", String)
    ], FileInputComponent.prototype, "infoText", void 0);
    __decorate([
        Input('drop'),
        __metadata("design:type", Object)
    ], FileInputComponent.prototype, "drop", void 0);
    __decorate([
        Input('cls-component'),
        __metadata("design:type", String)
    ], FileInputComponent.prototype, "clsComponent", void 0);
    __decorate([
        Input('cls-caption'),
        __metadata("design:type", String)
    ], FileInputComponent.prototype, "clsCaption", void 0);
    __decorate([
        Input('cls-prepend'),
        __metadata("design:type", String)
    ], FileInputComponent.prototype, "clsPrepend", void 0);
    __decorate([
        Input('cls-button'),
        __metadata("design:type", String)
    ], FileInputComponent.prototype, "clsButton", void 0);
    __decorate([
        ViewChild('input', { static: true }),
        __metadata("design:type", ElementRef)
    ], FileInputComponent.prototype, "input", void 0);
    FileInputComponent = FileInputComponent_1 = __decorate([
        Component({
            selector: 'm4-file-input',
            template: "<input type=\"file\" #input\n\n\n       [accept]=\"accept\"\n       [multiple]=\"multiple\"\n       [attr.data-prepend]=\"prepend\"\n       [attr.data-button-title]=\"buttonTitle\"\n       [attr.data-mode]=\"drop === true ? 'drop' : null\"\n\n       [attr.data-cls-component]=\"clsComponent\"\n       [attr.data-cls-caption]=\"clsCaption\"\n       [attr.data-cls-prepend]=\"clsPrepend\"\n       [attr.data-cls-button]=\"clsButton\">\n",
            providers: [DefaultValueAccessor.get(FileInputComponent_1), TypeAlias.get(FileInputComponent_1)],
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            styles: [".drop-zone.primary{outline-color:#0366d6}.drop-zone.secondary{outline-color:#607d8b}.drop-zone.success{outline-color:#60a917}.drop-zone.alert{outline-color:#ce352c}.drop-zone.warning{outline-color:#ff9447}.drop-zone.yellow{outline-color:#ffe484}.drop-zone.info{outline-color:#5ebdec}.drop-zone.dark{outline-color:#505050}.drop-zone.light{outline-color:#f8f8f8}"]
        })
    ], FileInputComponent);
    return FileInputComponent;
}(ControlBase));
export { FileInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvZm9ybS9maWxlLWlucHV0L2ZpbGUtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBa0J4RDtJQUF3QyxzQ0FBb0Q7SUFBNUY7UUFBQSxxRUFnTEM7UUE5S29CLGNBQVEsR0FBRyxLQUFLLENBQUM7UUFDbkIsWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNkLFVBQUksR0FBcUIsRUFBRSxDQUFDO1FBSzVCLFVBQUksR0FBRyxLQUFLLENBQUM7O0lBdUs5QixDQUFDOzJCQWhMWSxrQkFBa0I7SUFvQjdCLDBDQUFhLEdBQWI7UUFBQSxpQkEyREM7UUExREMsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLFFBQVE7WUFDaEMsSUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuQyxJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDdEM7WUFFRCxLQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxL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WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6Qiw4YkFBMEM7WUFFMUMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLG9CQUFrQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBa0IsQ0FBQyxDQUFDO1lBQzVGLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO09BQ1csa0JBQWtCLENBZ0w5QjtJQUFELHlCQUFDO0NBQUEsQUFoTEQsQ0FBd0MsV0FBVyxHQWdMbEQ7U0FoTFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbnRyb2xCYXNlfSBmcm9tICcuLi9jb250cm9sLWJhc2UnO1xuaW1wb3J0IHtEZWZhdWx0VmFsdWVBY2Nlc3Nvcn0gZnJvbSAnLi4vLi4vaGVscGVyL2RlZmF1bHQtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHtUeXBlQWxpYXN9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlLWFsaWFzJztcbmltcG9ydCB7T2JqZWN0SGVscGVyfSBmcm9tICcuLi8uLi9oZWxwZXIvb2JqZWN0LWhlbHBlcic7XG5pbXBvcnQge0ZpbGVSZWFkTW9kZVR5cGV9IGZyb20gJy4uLy4uL2hlbHBlci90eXBlcyc7XG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuZXhwb3J0IGludGVyZmFjZSBGaWxlRW50cnkge1xuICBmaWxlOiBGaWxlO1xuICBjb250ZW50OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ200LWZpbGUtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpbGUtaW5wdXQuY29tcG9uZW50Lmxlc3MnXSxcbiAgcHJvdmlkZXJzOiBbRGVmYXVsdFZhbHVlQWNjZXNzb3IuZ2V0KEZpbGVJbnB1dENvbXBvbmVudCksIFR5cGVBbGlhcy5nZXQoRmlsZUlucHV0Q29tcG9uZW50KV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVJbnB1dENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xCYXNlPEZpbGUgfCBGaWxlW10gfCBGaWxlRW50cnkgfCBGaWxlRW50cnlbXT4ge1xuXG4gIEBJbnB1dCgnbXVsdGlwbGUnKSBtdWx0aXBsZSA9IGZhbHNlO1xuICBASW5wdXQoJ2FjY2VwdCcpIGFjY2VwdCA9ICcnO1xuICBASW5wdXQoJ3JlYWQnKSByZWFkOiBGaWxlUmVhZE1vZGVUeXBlID0gJyc7XG5cbiAgQElucHV0KCdwcmVwZW5kJykgcHJlcGVuZDogc3RyaW5nO1xuICBASW5wdXQoJ2J1dHRvbi10aXRsZScpIGJ1dHRvblRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgnaW5mby10ZXh0JykgaW5mb1RleHQ6IHN0cmluZztcbiAgQElucHV0KCdkcm9wJykgZHJvcCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnY2xzLWNvbXBvbmVudCcpIGNsc0NvbXBvbmVudDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1jYXB0aW9uJykgY2xzQ2FwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1wcmVwZW5kJykgY2xzUHJlcGVuZDogc3RyaW5nO1xuICBASW5wdXQoJ2Nscy1idXR0b24nKSBjbHNCdXR0b246IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdpbnB1dCcsIHtzdGF0aWM6IHRydWV9KSBwcml2YXRlIGlucHV0OiBFbGVtZW50UmVmO1xuICBwcml2YXRlIGZpbGVJbnB1dDogYW55O1xuICBwcml2YXRlIGNsb25lZEVsZW1lbnQ6IGFueTtcblxuICBjcmVhdGVDb250cm9sKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigoY29tcGxldGUpID0+IHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9ICQodGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIE9iamVjdEhlbHBlci5oaWRlKG9yaWdpbmFsRWxlbWVudCk7XG5cbiAgICAgIGlmICh0aGlzLmNsb25lZEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmUoKTtcbiAgICAgIE9iamVjdEhlbHBlci5zaG93KHRoaXMuY2xvbmVkRWxlbWVudCk7XG4gICAgICBvcmlnaW5hbEVsZW1lbnQucGFyZW50KCkuYXBwZW5kKHRoaXMuY2xvbmVkRWxlbWVudCk7XG5cbiAgICAgIHRoaXMuZmlsZUlucHV0ID0gdGhpcy5jbG9uZWRFbGVtZW50LmZpbGUoKS5kYXRhKCdmaWxlJyk7XG5cbiAgICAgIGlmICh0aGlzLmRyb3ApIHtcbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uVGl0bGUpIHtcbiAgICAgICAgICBjb25zdCBjYXB0aW9uRWxlbWVudCA9IHRoaXMuY2xvbmVkRWxlbWVudC5jbG9zZXN0KCdsYWJlbC5kcm9wLXpvbmUnKS5maW5kKCdzcGFuLmNhcHRpb24nKTtcbiAgICAgICAgICBjYXB0aW9uRWxlbWVudC5odG1sKHRoaXMuYnV0dG9uVGl0bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5mb1RleHQpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUluZm9UZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5maWxlSW5wdXQub3B0aW9ucy5vblNlbGVjdCA9IChmaWxlcykgPT4ge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdDogRmlsZVtdID0gW107XG5cbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChmaWxlc1tpXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMucmVhZCkge1xuICAgICAgICAgICAgdGhpcy5yZWFkRmlsZXMoZmlsZXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKHJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLnJlYWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZEZpbGVzKGZpbGVzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZShmaWxlc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZHJvcCAmJiB0aGlzLmluZm9UZXh0KSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVJbmZvVGV4dCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmNsb25lZEVsZW1lbnQub25lKCdibHVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnRvdWNoQ2FsbGJhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb21wbGV0ZSgpO1xuICAgIH0pO1xuXG4gIH1cblxuICByZWFkRmlsZXMoZmlsZXM6IEZpbGVbXSkge1xuICAgIGNvbnN0IGZpbGVMb2FkUHJvbWlzZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcblxuICAgICAgY29uc3QgbG9hZFByb21pc2UgPSBuZXcgUHJvbWlzZTxGaWxlRW50cnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7Y29udGVudDogcmVhZGVyLnJlc3VsdCwgZmlsZTogZmlsZX0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5yZWFkKSB7XG4gICAgICAgICAgY2FzZSAnYXJyYXlCdWZmZXInOlxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYmluYXJ5U3RyaW5nJzpcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdkYXRhVXJsJzpcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmaWxlTG9hZFByb21pc2VzLnB1c2gobG9hZFByb21pc2UpO1xuICAgIH1cblxuICAgIFByb21pc2UuYWxsKGZpbGVMb2FkUHJvbWlzZXMpLnRoZW4oKGZpbGVFbnRyaWVzOiBGaWxlRW50cnlbXSkgPT4ge1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VWYWx1ZShmaWxlRW50cmllcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKGZpbGVFbnRyaWVzWzBdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRpc2FibGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZmlsZUlucHV0LmRpc2FibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWxlSW5wdXQuZW5hYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgbmV3VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZpbGVJbnB1dCB8fCB0aGlzLmRyb3AgfHwgdGhpcy5yZWFkIHx8ICF0aGlzLmlubmVyVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmFtZTtcblxuICAgIGlmICh0aGlzLmlubmVyVmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgbmFtZSA9ICg8YW55PnRoaXMuaW5uZXJWYWx1ZSkubWFwKCh2OiBGaWxlIHwgRmlsZUVudHJ5KSA9PiB7XG4gICAgICAgIGlmICh2IGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICAgIHJldHVybiB2Lm5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHYuZmlsZS5uYW1lO1xuICAgICAgICB9XG4gICAgICB9KS5qb2luKCcsICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gdGhpcy5pbm5lclZhbHVlIGluc3RhbmNlb2YgRmlsZSA/IHRoaXMuaW5uZXJWYWx1ZS5uYW1lIDogdGhpcy5pbm5lclZhbHVlLmZpbGUubmFtZTtcbiAgICB9XG5cbiAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkuZmluZCgnc3Bhbi5jYXB0aW9uJykuaHRtbChuYW1lKTtcbiAgfVxuXG4gIG5ld0NsYXNzVmFsdWUobmV3Q2xhc3Nlczogc3RyaW5nW10sIG9sZENsYXNzZXM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jbG9uZWRFbGVtZW50LnBhcmVudCgpO1xuXG4gICAgICBvbGRDbGFzc2VzLmZvckVhY2goKGNsczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDbGFzcyhjbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIG5ld0NsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LmFkZENsYXNzKGNscyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUluZm9UZXh0KCkge1xuICAgIGNvbnN0IGluZm9UZXh0Q29udGVudCA9IHRoaXMuaW5mb1RleHRcbiAgICAgIC5zcGxpdCgnezB9JylcbiAgICAgIC5qb2luKHRoaXMuaW5uZXJWYWx1ZSBpbnN0YW5jZW9mIEFycmF5ID8gYCR7dGhpcy5pbm5lclZhbHVlLmxlbmd0aH1gIDogdGhpcy5pbm5lclZhbHVlID8gJzEnIDogJzAnKTtcblxuICAgIGNvbnN0IGluZm9UZXh0RWxlbWVudCA9IHRoaXMuY2xvbmVkRWxlbWVudC5jbG9zZXN0KCdsYWJlbC5kcm9wLXpvbmUnKS5maW5kKCdzcGFuLmZpbGVzJyk7XG4gICAgaW5mb1RleHRFbGVtZW50Lmh0bWwoaW5mb1RleHRDb250ZW50KTtcbiAgfVxuXG59XG4iXX0=