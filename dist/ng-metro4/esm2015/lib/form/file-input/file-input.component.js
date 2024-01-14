var FileInputComponent_1;
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlBase } from '../control-base';
import { DefaultValueAccessor } from '../../helper/default-value-accessor';
import { TypeAlias } from '../../helper/type-alias';
import { ObjectHelper } from '../../helper/object-helper';
let FileInputComponent = FileInputComponent_1 = class FileInputComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.multiple = false;
        this.accept = '';
        this.read = '';
        this.drop = false;
    }
    createControl() {
        return new Promise((complete) => {
            const originalElement = $(this.input.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.parent().remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.fileInput = this.clonedElement.file().data('file');
            if (this.drop) {
                if (this.buttonTitle) {
                    const captionElement = this.clonedElement.closest('label.drop-zone').find('span.caption');
                    captionElement.html(this.buttonTitle);
                }
                if (this.infoText) {
                    this.updateInfoText();
                }
            }
            this.fileInput.options.onSelect = (files) => {
                if (this.multiple) {
                    const result = [];
                    for (let i = 0; i < files.length; i++) {
                        result.push(files[i]);
                    }
                    if (this.read) {
                        this.readFiles(files);
                    }
                    else {
                        this.changeValue(result);
                    }
                }
                else {
                    if (this.read) {
                        this.readFiles(files);
                    }
                    else {
                        this.changeValue(files[0]);
                    }
                }
                if (this.drop && this.infoText) {
                    this.updateInfoText();
                }
            };
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            complete();
        });
    }
    readFiles(files) {
        const fileLoadPromises = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const loadPromise = new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    resolve({ content: reader.result, file: file });
                };
                switch (this.read) {
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
        }
        Promise.all(fileLoadPromises).then((fileEntries) => {
            if (this.multiple) {
                this.changeValue(fileEntries);
            }
            else {
                this.changeValue(fileEntries[0]);
            }
        });
    }
    disable(disabled) {
        if (disabled) {
            this.fileInput.disable();
        }
        else {
            this.fileInput.enable();
        }
    }
    newValue() {
        if (!this.fileInput || this.drop || this.read || !this.innerValue) {
            return;
        }
        let name;
        if (this.innerValue instanceof Array) {
            name = this.innerValue.map((v) => {
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
    }
    newClassValue(newClasses, oldClasses) {
        if (this.clonedElement) {
            const target = this.clonedElement.parent();
            oldClasses.forEach((cls) => {
                target.removeClass(cls);
            });
            newClasses.forEach((cls) => {
                target.addClass(cls);
            });
        }
    }
    updateInfoText() {
        const infoTextContent = this.infoText
            .split('{0}')
            .join(this.innerValue instanceof Array ? `${this.innerValue.length}` : this.innerValue ? '1' : '0');
        const infoTextElement = this.clonedElement.closest('label.drop-zone').find('span.files');
        infoTextElement.html(infoTextContent);
    }
};
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
export { FileInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1tZXRybzQvIiwic291cmNlcyI6WyJsaWIvZm9ybS9maWxlLWlucHV0L2ZpbGUtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNsSCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2xELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQWtCeEQsSUFBYSxrQkFBa0IsMEJBQS9CLE1BQWEsa0JBQW1CLFNBQVEsV0FBb0Q7SUFBNUY7O1FBRXFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNkLFNBQUksR0FBcUIsRUFBRSxDQUFDO1FBSzVCLFNBQUksR0FBRyxLQUFLLENBQUM7SUF1SzlCLENBQUM7SUE1SkMsYUFBYTtRQUNYLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQyxNQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRW5DLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN0QztZQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFB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LGtCQUFrQjtJQVI5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6Qiw4YkFBMEM7UUFFMUMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLG9CQUFrQixDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBa0IsQ0FBQyxDQUFDO1FBQzVGLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztLQUN0QyxDQUFDO0dBQ1csa0JBQWtCLENBZ0w5QjtTQWhMWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29udHJvbEJhc2V9IGZyb20gJy4uL2NvbnRyb2wtYmFzZSc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZUFjY2Vzc29yfSBmcm9tICcuLi8uLi9oZWxwZXIvZGVmYXVsdC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQge1R5cGVBbGlhc30gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGUtYWxpYXMnO1xuaW1wb3J0IHtPYmplY3RIZWxwZXJ9IGZyb20gJy4uLy4uL2hlbHBlci9vYmplY3QtaGVscGVyJztcbmltcG9ydCB7RmlsZVJlYWRNb2RlVHlwZX0gZnJvbSAnLi4vLi4vaGVscGVyL3R5cGVzJztcblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbGVFbnRyeSB7XG4gIGZpbGU6IEZpbGU7XG4gIGNvbnRlbnQ6IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbTQtZmlsZS1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS1pbnB1dC5jb21wb25lbnQubGVzcyddLFxuICBwcm92aWRlcnM6IFtEZWZhdWx0VmFsdWVBY2Nlc3Nvci5nZXQoRmlsZUlucHV0Q29tcG9uZW50KSwgVHlwZUFsaWFzLmdldChGaWxlSW5wdXRDb21wb25lbnQpXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsZUlucHV0Q29tcG9uZW50IGV4dGVuZHMgQ29udHJvbEJhc2U8RmlsZSB8IEZpbGVbXSB8IEZpbGVFbnRyeSB8IEZpbGVFbnRyeVtdPiB7XG5cbiAgQElucHV0KCdtdWx0aXBsZScpIG11bHRpcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgnYWNjZXB0JykgYWNjZXB0ID0gJyc7XG4gIEBJbnB1dCgncmVhZCcpIHJlYWQ6IEZpbGVSZWFkTW9kZVR5cGUgPSAnJztcblxuICBASW5wdXQoJ3ByZXBlbmQnKSBwcmVwZW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgnYnV0dG9uLXRpdGxlJykgYnV0dG9uVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCdpbmZvLXRleHQnKSBpbmZvVGV4dDogc3RyaW5nO1xuICBASW5wdXQoJ2Ryb3AnKSBkcm9wID0gZmFsc2U7XG5cbiAgQElucHV0KCdjbHMtY29tcG9uZW50JykgY2xzQ29tcG9uZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWNhcHRpb24nKSBjbHNDYXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLXByZXBlbmQnKSBjbHNQcmVwZW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgnY2xzLWJ1dHRvbicpIGNsc0J1dHRvbjogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0Jywge3N0YXRpYzogdHJ1ZX0pIHByaXZhdGUgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIHByaXZhdGUgZmlsZUlucHV0OiBhbnk7XG4gIHByaXZhdGUgY2xvbmVkRWxlbWVudDogYW55O1xuXG4gIGNyZWF0ZUNvbnRyb2woKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChjb21wbGV0ZSkgPT4ge1xuICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gJCh0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgT2JqZWN0SGVscGVyLmhpZGUob3JpZ2luYWxFbGVtZW50KTtcblxuICAgICAgaWYgKHRoaXMuY2xvbmVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZSgpO1xuICAgICAgT2JqZWN0SGVscGVyLnNob3codGhpcy5jbG9uZWRFbGVtZW50KTtcbiAgICAgIG9yaWdpbmFsRWxlbWVudC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jbG9uZWRFbGVtZW50KTtcblxuICAgICAgdGhpcy5maWxlSW5wdXQgPSB0aGlzLmNsb25lZEVsZW1lbnQuZmlsZSgpLmRhdGEoJ2ZpbGUnKTtcblxuICAgICAgaWYgKHRoaXMuZHJvcCkge1xuICAgICAgICBpZiAodGhpcy5idXR0b25UaXRsZSkge1xuICAgICAgICAgIGNvbnN0IGNhcHRpb25FbGVtZW50ID0gdGhpcy5jbG9uZWRFbGVtZW50LmNsb3Nlc3QoJ2xhYmVsLmRyb3Atem9uZScpLmZpbmQoJ3NwYW4uY2FwdGlvbicpO1xuICAgICAgICAgIGNhcHRpb25FbGVtZW50Lmh0bWwodGhpcy5idXR0b25UaXRsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbmZvVGV4dCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlSW5mb1RleHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbGVJbnB1dC5vcHRpb25zLm9uU2VsZWN0ID0gKGZpbGVzKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0OiBGaWxlW10gPSBbXTtcblxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZpbGVzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5yZWFkKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRGaWxlcyhmaWxlcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVmFsdWUocmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMucmVhZCkge1xuICAgICAgICAgICAgdGhpcy5yZWFkRmlsZXMoZmlsZXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKGZpbGVzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kcm9wICYmIHRoaXMuaW5mb1RleHQpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUluZm9UZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY2xvbmVkRWxlbWVudC5vbmUoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMudG91Y2hDYWxsYmFjaygpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbXBsZXRlKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHJlYWRGaWxlcyhmaWxlczogRmlsZVtdKSB7XG4gICAgY29uc3QgZmlsZUxvYWRQcm9taXNlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZmlsZSA9IGZpbGVzW2ldO1xuXG4gICAgICBjb25zdCBsb2FkUHJvbWlzZSA9IG5ldyBQcm9taXNlPEZpbGVFbnRyeT4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHtjb250ZW50OiByZWFkZXIucmVzdWx0LCBmaWxlOiBmaWxlfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnJlYWQpIHtcbiAgICAgICAgICBjYXNlICdhcnJheUJ1ZmZlcic6XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdiaW5hcnlTdHJpbmcnOlxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2RhdGFVcmwnOlxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGZpbGVMb2FkUHJvbWlzZXMucHVzaChsb2FkUHJvbWlzZSk7XG4gICAgfVxuXG4gICAgUHJvbWlzZS5hbGwoZmlsZUxvYWRQcm9taXNlcykudGhlbigoZmlsZUVudHJpZXM6IEZpbGVFbnRyeVtdKSA9PiB7XG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZhbHVlKGZpbGVFbnRyaWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVmFsdWUoZmlsZUVudHJpZXNbMF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZGlzYWJsZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5maWxlSW5wdXQuZGlzYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbGVJbnB1dC5lbmFibGUoKTtcbiAgICB9XG4gIH1cblxuICBuZXdWYWx1ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZmlsZUlucHV0IHx8IHRoaXMuZHJvcCB8fCB0aGlzLnJlYWQgfHwgIXRoaXMuaW5uZXJWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBuYW1lO1xuXG4gICAgaWYgKHRoaXMuaW5uZXJWYWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICBuYW1lID0gKDxhbnk+dGhpcy5pbm5lclZhbHVlKS5tYXAoKHY6IEZpbGUgfCBGaWxlRW50cnkpID0+IHtcbiAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICAgICAgcmV0dXJuIHYubmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdi5maWxlLm5hbWU7XG4gICAgICAgIH1cbiAgICAgIH0pLmpvaW4oJywgJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWUgPSB0aGlzLmlubmVyVmFsdWUgaW5zdGFuY2VvZiBGaWxlID8gdGhpcy5pbm5lclZhbHVlLm5hbWUgOiB0aGlzLmlubmVyVmFsdWUuZmlsZS5uYW1lO1xuICAgIH1cblxuICAgIHRoaXMuY2xvbmVkRWxlbWVudC5wYXJlbnQoKS5maW5kKCdzcGFuLmNhcHRpb24nKS5odG1sKG5hbWUpO1xuICB9XG5cbiAgbmV3Q2xhc3NWYWx1ZShuZXdDbGFzc2VzOiBzdHJpbmdbXSwgb2xkQ2xhc3Nlczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy5jbG9uZWRFbGVtZW50KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmNsb25lZEVsZW1lbnQucGFyZW50KCk7XG5cbiAgICAgIG9sZENsYXNzZXMuZm9yRWFjaCgoY2xzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKGNscyk7XG4gICAgICB9KTtcblxuICAgICAgbmV3Q2xhc3Nlcy5mb3JFYWNoKChjbHM6IHN0cmluZykgPT4ge1xuICAgICAgICB0YXJnZXQuYWRkQ2xhc3MoY2xzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSW5mb1RleHQoKSB7XG4gICAgY29uc3QgaW5mb1RleHRDb250ZW50ID0gdGhpcy5pbmZvVGV4dFxuICAgICAgLnNwbGl0KCd7MH0nKVxuICAgICAgLmpvaW4odGhpcy5pbm5lclZhbHVlIGluc3RhbmNlb2YgQXJyYXkgPyBgJHt0aGlzLmlubmVyVmFsdWUubGVuZ3RofWAgOiB0aGlzLmlubmVyVmFsdWUgPyAnMScgOiAnMCcpO1xuXG4gICAgY29uc3QgaW5mb1RleHRFbGVtZW50ID0gdGhpcy5jbG9uZWRFbGVtZW50LmNsb3Nlc3QoJ2xhYmVsLmRyb3Atem9uZScpLmZpbmQoJ3NwYW4uZmlsZXMnKTtcbiAgICBpbmZvVGV4dEVsZW1lbnQuaHRtbChpbmZvVGV4dENvbnRlbnQpO1xuICB9XG5cbn1cbiJdfQ==