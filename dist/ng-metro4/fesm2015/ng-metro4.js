import { __decorate, __param, __metadata } from 'tslib';
import { forwardRef, ElementRef, Optional, ChangeDetectorRef, Directive, Input, ViewChild, Component, ChangeDetectionStrategy, EventEmitter, Output, ViewEncapsulation, ContentChildren, QueryList, ViewChildren, Pipe, Host, SkipSelf, ContentChild, TemplateRef, ComponentFactoryResolver, ViewContainerRef, NgModule, Renderer2, HostBinding, HostListener, Inject, Injectable, ApplicationRef, Injector } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import 'metro4';
import { NG_VALUE_ACCESSOR, ControlContainer, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { asapScheduler, BehaviorSubject, Observable, Subscription, Subject } from 'rxjs';
import * as moment from 'moment';
import { duration } from 'moment';
import { startWith, filter, take, finalize } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

class DefaultValueAccessor {
    static get(type) {
        return {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => type),
            multi: true
        };
    }
}

class CompareHelper {
    /**
     * Compares to objects and checks if they are equal
     * @param firstObject The first object
     * @param secondObject The second object
     */
    static equal(firstObject, secondObject) {
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
    }
}

class ArrayHelper {
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

class ObjectHelper {
    /**
     * Compares to objects
     * @param firstObject The first object
     * @param secondObject The second object
     */
    static compare(firstObject, secondObject) {
        if (firstObject instanceof Array && secondObject instanceof Array) {
            if (ArrayHelper.sequenceEquals(secondObject, firstObject)) {
                return true;
            }
        }
        else {
            return CompareHelper.equal(firstObject, secondObject);
        }
        return false;
    }
    /**
     * Hides an HTML object
     * @param object The HTML object
     */
    static hide(object) {
        object.addClass('d-none');
    }
    /**
     * Shows an HTML object
     * @param object The HTML object
     */
    static show(object) {
        object.removeClass('d-none');
    }
}

const observerClassExceptions = ['ng-valid', 'ng-dirty', 'ng-touched', 'ng-untouched', 'ng-pristine', 'ng-invalid'];
const iconDictionary = {
    '3d-rotation': { 'category': 'application', 'name': '3d-rotation' },
    'ac_unit': { 'category': 'application', 'name': 'ac_unit' },
    'accessible': { 'category': 'application', 'name': 'accessible' },
    'adb': { 'category': 'application', 'name': 'adb' },
    'add': { 'category': 'application', 'name': 'add' },
    'add-photo': { 'category': 'application', 'name': 'add-photo' },
    'add-shopping-cart': { 'category': 'application', 'name': 'add-shopping-cart' },
    'air': { 'category': 'application', 'name': 'air' },
    'alarm': { 'category': 'application', 'name': 'alarm' },
    'alarm-on': { 'category': 'application', 'name': 'alarm-on' },
    'amex': { 'category': 'application', 'name': 'amex' },
    'anchor': { 'category': 'application', 'name': 'anchor' },
    'apps': { 'category': 'application', 'name': 'apps' },
    'arrow-drop-down': { 'category': 'application', 'name': 'arrow-drop-down' },
    'arrow-drop-up': { 'category': 'application', 'name': 'arrow-drop-up' },
    'assignment': { 'category': 'application', 'name': 'assignment' },
    'attachment': { 'category': 'application', 'name': 'attachment' },
    'backspace': { 'category': 'application', 'name': 'backspace' },
    'backspace1': { 'category': 'application', 'name': 'backspace1' },
    'balance-scale': { 'category': 'application', 'name': 'balance-scale' },
    'barbell': { 'category': 'application', 'name': 'barbell' },
    'barcode': { 'category': 'application', 'name': 'barcode' },
    'beenhere': { 'category': 'application', 'name': 'beenhere' },
    'bell': { 'category': 'application', 'name': 'bell' },
    'bin': { 'category': 'application', 'name': 'bin' },
    'bitcoin': { 'category': 'application', 'name': 'bitcoin' },
    'blocked': { 'category': 'application', 'name': 'blocked' },
    'bold': { 'category': 'application', 'name': 'bold' },
    'book-reference': { 'category': 'application', 'name': 'book-reference' },
    'bookmark': { 'category': 'application', 'name': 'bookmark' },
    'bookmarks': { 'category': 'application', 'name': 'bookmarks' },
    'books': { 'category': 'application', 'name': 'books' },
    'brightness': { 'category': 'application', 'name': 'brightness' },
    'brightness-auto': { 'category': 'application', 'name': 'brightness-auto' },
    'broadcast': { 'category': 'application', 'name': 'broadcast' },
    'bubble': { 'category': 'application', 'name': 'bubble' },
    'bubbles': { 'category': 'application', 'name': 'bubbles' },
    'bug': { 'category': 'application', 'name': 'bug' },
    'cabinet': { 'category': 'application', 'name': 'cabinet' },
    'cake': { 'category': 'application', 'name': 'cake' },
    'calculator': { 'category': 'application', 'name': 'calculator' },
    'calculator2': { 'category': 'application', 'name': 'calculator2' },
    'calendar': { 'category': 'application', 'name': 'calendar' },
    'camera': { 'category': 'application', 'name': 'camera' },
    'camera-front': { 'category': 'application', 'name': 'camera-front' },
    'camera-rear': { 'category': 'application', 'name': 'camera-rear' },
    'cancel': { 'category': 'application', 'name': 'cancel' },
    'cart': { 'category': 'application', 'name': 'cart' },
    'cast': { 'category': 'application', 'name': 'cast' },
    'cast-connected': { 'category': 'application', 'name': 'cast-connected' },
    'cc-paypal': { 'category': 'application', 'name': 'cc-paypal' },
    'cell-no-internet': { 'category': 'application', 'name': 'cell-no-internet' },
    'cell-null': { 'category': 'application', 'name': 'cell-null' },
    'cell-off': { 'category': 'application', 'name': 'cell-off' },
    'cell-setting': { 'category': 'application', 'name': 'cell-setting' },
    'chat': { 'category': 'application', 'name': 'chat' },
    'chat-bubble': { 'category': 'application', 'name': 'chat-bubble' },
    'chat-bubble-outline': { 'category': 'application', 'name': 'chat-bubble-outline' },
    'checkmark': { 'category': 'application', 'name': 'checkmark' },
    'clipboard': { 'category': 'application', 'name': 'clipboard' },
    'cloud': { 'category': 'application', 'name': 'cloud' },
    'cloud-download': { 'category': 'application', 'name': 'cloud-download' },
    'cloud-upload': { 'category': 'application', 'name': 'cloud-upload' },
    'cny': { 'category': 'application', 'name': 'cny' },
    'cog': { 'category': 'application', 'name': 'cog' },
    'cogs': { 'category': 'application', 'name': 'cogs' },
    'coins': { 'category': 'application', 'name': 'coins' },
    'command': { 'category': 'application', 'name': 'command' },
    'comment': { 'category': 'application', 'name': 'comment' },
    'compass': { 'category': 'application', 'name': 'compass' },
    'compass2': { 'category': 'application', 'name': 'compass2' },
    'contacts-dialer': { 'category': 'application', 'name': 'contacts-dialer' },
    'contacts-mail': { 'category': 'application', 'name': 'contacts-mail' },
    'contrast': { 'category': 'application', 'name': 'contrast' },
    'copy': { 'category': 'application', 'name': 'copy' },
    'copyright': { 'category': 'application', 'name': 'copyright' },
    'create-new-folder': { 'category': 'application', 'name': 'create-new-folder' },
    'creative-commons': { 'category': 'application', 'name': 'creative-commons' },
    'credit-card': { 'category': 'application', 'name': 'credit-card' },
    'crop': { 'category': 'application', 'name': 'crop' },
    'cross': { 'category': 'application', 'name': 'cross' },
    'cut': { 'category': 'application', 'name': 'cut' },
    'dashboard': { 'category': 'application', 'name': 'dashboard' },
    'database': { 'category': 'application', 'name': 'database' },
    'developer_board': { 'category': 'application', 'name': 'developer_board' },
    'devices': { 'category': 'application', 'name': 'devices' },
    'dice': { 'category': 'application', 'name': 'dice' },
    'discout': { 'category': 'application', 'name': 'discout' },
    'discover': { 'category': 'application', 'name': 'discover' },
    'dollar': { 'category': 'application', 'name': 'dollar' },
    'dollar2': { 'category': 'application', 'name': 'dollar2' },
    'dollars': { 'category': 'application', 'name': 'dollars' },
    'done': { 'category': 'application', 'name': 'done' },
    'done_all': { 'category': 'application', 'name': 'done_all' },
    'download': { 'category': 'application', 'name': 'download' },
    'download2': { 'category': 'application', 'name': 'download2' },
    'drafts': { 'category': 'application', 'name': 'drafts' },
    'drive': { 'category': 'application', 'name': 'drive' },
    'drive2': { 'category': 'application', 'name': 'drive2' },
    'earth': { 'category': 'application', 'name': 'earth' },
    'earth2': { 'category': 'application', 'name': 'earth2' },
    'embed': { 'category': 'application', 'name': 'embed' },
    'embed2': { 'category': 'application', 'name': 'embed2' },
    'enlarge': { 'category': 'application', 'name': 'enlarge' },
    'enlarge2': { 'category': 'application', 'name': 'enlarge2' },
    'enter': { 'category': 'application', 'name': 'enter' },
    'envelop': { 'category': 'application', 'name': 'envelop' },
    'equalizer': { 'category': 'application', 'name': 'equalizer' },
    'equalizer-v': { 'category': 'application', 'name': 'equalizer-v' },
    'eur': { 'category': 'application', 'name': 'eur' },
    'ev-station': { 'category': 'application', 'name': 'ev-station' },
    'event-available': { 'category': 'application', 'name': 'event-available' },
    'event-busy': { 'category': 'application', 'name': 'event-busy' },
    'exit': { 'category': 'application', 'name': 'exit' },
    'expand-less': { 'category': 'application', 'name': 'expand-less' },
    'expand-more': { 'category': 'application', 'name': 'expand-more' },
    'eye': { 'category': 'application', 'name': 'eye' },
    'eyedropper': { 'category': 'application', 'name': 'eyedropper' },
    'favorite': { 'category': 'application', 'name': 'favorite' },
    'feed3': { 'category': 'application', 'name': 'feed3' },
    'female': { 'category': 'application', 'name': 'female' },
    'film': { 'category': 'application', 'name': 'film' },
    'filter': { 'category': 'application', 'name': 'filter' },
    'fingerprint': { 'category': 'application', 'name': 'fingerprint' },
    'fire': { 'category': 'application', 'name': 'fire' },
    'fire-extinguisher': { 'category': 'application', 'name': 'fire-extinguisher' },
    'flag': { 'category': 'application', 'name': 'flag' },
    'flash-auto': { 'category': 'application', 'name': 'flash-auto' },
    'flash-off': { 'category': 'application', 'name': 'flash-off' },
    'flash-on': { 'category': 'application', 'name': 'flash-on' },
    'floppy-disk': { 'category': 'application', 'name': 'floppy-disk' },
    'florist': { 'category': 'application', 'name': 'florist' },
    'flow-branch': { 'category': 'application', 'name': 'flow-branch' },
    'flow-cascade': { 'category': 'application', 'name': 'flow-cascade' },
    'flow-line': { 'category': 'application', 'name': 'flow-line' },
    'flow-parallel': { 'category': 'application', 'name': 'flow-parallel' },
    'flow-tree': { 'category': 'application', 'name': 'flow-tree' },
    'fonticons': { 'category': 'application', 'name': 'fonticons' },
    'gamepad': { 'category': 'application', 'name': 'gamepad' },
    'gas-station': { 'category': 'application', 'name': 'gas-station' },
    'gbp': { 'category': 'application', 'name': 'gbp' },
    'gift': { 'category': 'application', 'name': 'gift' },
    'goat': { 'category': 'application', 'name': 'goat' },
    'hammer': { 'category': 'application', 'name': 'hammer' },
    'hdr-off': { 'category': 'application', 'name': 'hdr-off' },
    'hdr-on': { 'category': 'application', 'name': 'hdr-on' },
    'headphones': { 'category': 'application', 'name': 'headphones' },
    'help': { 'category': 'application', 'name': 'help' },
    'history': { 'category': 'application', 'name': 'history' },
    'home': { 'category': 'application', 'name': 'home' },
    'hotel': { 'category': 'application', 'name': 'hotel' },
    'hour-glass': { 'category': 'application', 'name': 'hour-glass' },
    'http': { 'category': 'application', 'name': 'http' },
    'image': { 'category': 'application', 'name': 'image' },
    'images': { 'category': 'application', 'name': 'images' },
    'import-contacts': { 'category': 'application', 'name': 'import-contacts' },
    'import-export': { 'category': 'application', 'name': 'import-export' },
    'inbox': { 'category': 'application', 'name': 'inbox' },
    'indent-decrease': { 'category': 'application', 'name': 'indent-decrease' },
    'indent-increase': { 'category': 'application', 'name': 'indent-increase' },
    'info': { 'category': 'application', 'name': 'info' },
    'inr': { 'category': 'application', 'name': 'inr' },
    'insert-drive-file': { 'category': 'application', 'name': 'insert-drive-file' },
    'insert-template': { 'category': 'application', 'name': 'insert-template' },
    'install': { 'category': 'application', 'name': 'install' },
    'italic': { 'category': 'application', 'name': 'italic' },
    'justice': { 'category': 'application', 'name': 'justice' },
    'key': { 'category': 'application', 'name': 'key' },
    'keyboard': { 'category': 'application', 'name': 'keyboard' },
    'keyboard-return': { 'category': 'application', 'name': 'keyboard-return' },
    'keyboard-tab': { 'category': 'application', 'name': 'keyboard-tab' },
    'keyboard-voice': { 'category': 'application', 'name': 'keyboard-voice' },
    'krw': { 'category': 'application', 'name': 'krw' },
    'lamp': { 'category': 'application', 'name': 'lamp' },
    'language': { 'category': 'application', 'name': 'language' },
    'layers': { 'category': 'application', 'name': 'layers' },
    'layers-clear': { 'category': 'application', 'name': 'layers-clear' },
    'leanpub': { 'category': 'application', 'name': 'leanpub' },
    'library': { 'category': 'application', 'name': 'library' },
    'link': { 'category': 'application', 'name': 'link' },
    'list': { 'category': 'application', 'name': 'list' },
    'list-numbered': { 'category': 'application', 'name': 'list-numbered' },
    'list2': { 'category': 'application', 'name': 'list2' },
    'local-service': { 'category': 'application', 'name': 'local-service' },
    'location': { 'category': 'application', 'name': 'location' },
    'location-city': { 'category': 'application', 'name': 'location-city' },
    'location-off': { 'category': 'application', 'name': 'location-off' },
    'lock': { 'category': 'application', 'name': 'lock' },
    'lock-rotation': { 'category': 'application', 'name': 'lock-rotation' },
    'looks': { 'category': 'application', 'name': 'looks' },
    'ltr': { 'category': 'application', 'name': 'ltr' },
    'magic-wand': { 'category': 'application', 'name': 'magic-wand' },
    'mail': { 'category': 'application', 'name': 'mail' },
    'mail-read': { 'category': 'application', 'name': 'mail-read' },
    'male': { 'category': 'application', 'name': 'male' },
    'map': { 'category': 'application', 'name': 'map' },
    'map2': { 'category': 'application', 'name': 'map2' },
    'mars': { 'category': 'application', 'name': 'mars' },
    'mastercard': { 'category': 'application', 'name': 'mastercard' },
    'medal': { 'category': 'application', 'name': 'medal' },
    'medium': { 'category': 'application', 'name': 'medium' },
    'menu': { 'category': 'application', 'name': 'menu' },
    'meter': { 'category': 'application', 'name': 'meter' },
    'minus': { 'category': 'application', 'name': 'minus' },
    'money': { 'category': 'application', 'name': 'money' },
    'more-horiz': { 'category': 'application', 'name': 'more-horiz' },
    'more-vert': { 'category': 'application', 'name': 'more-vert' },
    'move-down': { 'category': 'application', 'name': 'move-down' },
    'move-up': { 'category': 'application', 'name': 'move-up' },
    'move_to_inbox': { 'category': 'application', 'name': 'move_to_inbox' },
    'multitrack-audio': { 'category': 'application', 'name': 'multitrack-audio' },
    'music': { 'category': 'application', 'name': 'music' },
    'navigation': { 'category': 'application', 'name': 'navigation' },
    'near-me': { 'category': 'application', 'name': 'near-me' },
    'network-cell': { 'category': 'application', 'name': 'network-cell' },
    'network-locked': { 'category': 'application', 'name': 'network-locked' },
    'network-wifi': { 'category': 'application', 'name': 'network-wifi' },
    'news': { 'category': 'application', 'name': 'news' },
    'not': { 'category': 'application', 'name': 'not' },
    'notification': { 'category': 'application', 'name': 'notification' },
    'open-book': { 'category': 'application', 'name': 'open-book' },
    'organization': { 'category': 'application', 'name': 'organization' },
    'page-break': { 'category': 'application', 'name': 'page-break' },
    'paint': { 'category': 'application', 'name': 'paint' },
    'palette': { 'category': 'application', 'name': 'palette' },
    'pan-tool': { 'category': 'application', 'name': 'pan-tool' },
    'paper-plane': { 'category': 'application', 'name': 'paper-plane' },
    'paragraph-center': { 'category': 'application', 'name': 'paragraph-center' },
    'paragraph-justify': { 'category': 'application', 'name': 'paragraph-justify' },
    'paragraph-left': { 'category': 'application', 'name': 'paragraph-left' },
    'paragraph-right': { 'category': 'application', 'name': 'paragraph-right' },
    'paste': { 'category': 'application', 'name': 'paste' },
    'paw': { 'category': 'application', 'name': 'paw' },
    'pencil': { 'category': 'application', 'name': 'pencil' },
    'phonelink-erase': { 'category': 'application', 'name': 'phonelink-erase' },
    'phonelink-lock': { 'category': 'application', 'name': 'phonelink-lock' },
    'phonelink-ring': { 'category': 'application', 'name': 'phonelink-ring' },
    'phonelink-setup': { 'category': 'application', 'name': 'phonelink-setup' },
    'photo-camera': { 'category': 'application', 'name': 'photo-camera' },
    'photo-camera-enhance': { 'category': 'application', 'name': 'photo-camera-enhance' },
    'piano': { 'category': 'application', 'name': 'piano' },
    'pilcrow': { 'category': 'application', 'name': 'pilcrow' },
    'pin': { 'category': 'application', 'name': 'pin' },
    'plus': { 'category': 'application', 'name': 'plus' },
    'power': { 'category': 'application', 'name': 'power' },
    'power-cord': { 'category': 'application', 'name': 'power-cord' },
    'present-all': { 'category': 'application', 'name': 'present-all' },
    'printer': { 'category': 'application', 'name': 'printer' },
    'profile': { 'category': 'application', 'name': 'profile' },
    'qa': { 'category': 'application', 'name': 'qa' },
    'qrcode': { 'category': 'application', 'name': 'qrcode' },
    'question': { 'category': 'application', 'name': 'question' },
    'quote': { 'category': 'application', 'name': 'quote' },
    'record_voice_over': { 'category': 'application', 'name': 'record_voice_over' },
    'redo': { 'category': 'application', 'name': 'redo' },
    'refresh': { 'category': 'application', 'name': 'refresh' },
    'registered': { 'category': 'application', 'name': 'registered' },
    'replay': { 'category': 'application', 'name': 'replay' },
    'reply': { 'category': 'application', 'name': 'reply' },
    'reply_all': { 'category': 'application', 'name': 'reply_all' },
    'restaurant': { 'category': 'application', 'name': 'restaurant' },
    'rocket': { 'category': 'application', 'name': 'rocket' },
    'room': { 'category': 'application', 'name': 'room' },
    'rotation': { 'category': 'application', 'name': 'rotation' },
    'rouble': { 'category': 'application', 'name': 'rouble' },
    'rtl': { 'category': 'application', 'name': 'rtl' },
    'school': { 'category': 'application', 'name': 'school' },
    'sd-card': { 'category': 'application', 'name': 'sd-card' },
    'search': { 'category': 'application', 'name': 'search' },
    'section': { 'category': 'application', 'name': 'section' },
    'security': { 'category': 'application', 'name': 'security' },
    'server': { 'category': 'application', 'name': 'server' },
    'settings-ethernet': { 'category': 'application', 'name': 'settings-ethernet' },
    'settings-power': { 'category': 'application', 'name': 'settings-power' },
    'settings-voice': { 'category': 'application', 'name': 'settings-voice' },
    'share': { 'category': 'application', 'name': 'share' },
    'shareable': { 'category': 'application', 'name': 'shareable' },
    'shift': { 'category': 'application', 'name': 'shift' },
    'shit': { 'category': 'application', 'name': 'shit' },
    'shop': { 'category': 'application', 'name': 'shop' },
    'shopping-basket': { 'category': 'application', 'name': 'shopping-basket' },
    'shopping-basket2': { 'category': 'application', 'name': 'shopping-basket2' },
    'shrink': { 'category': 'application', 'name': 'shrink' },
    'shrink2': { 'category': 'application', 'name': 'shrink2' },
    'sort-asc': { 'category': 'application', 'name': 'sort-asc' },
    'sort-desc': { 'category': 'application', 'name': 'sort-desc' },
    'spell-check': { 'category': 'application', 'name': 'spell-check' },
    'spoon-fork': { 'category': 'application', 'name': 'spoon-fork' },
    'squirrel': { 'category': 'application', 'name': 'squirrel' },
    'stack': { 'category': 'application', 'name': 'stack' },
    'stack2': { 'category': 'application', 'name': 'stack2' },
    'stack3': { 'category': 'application', 'name': 'stack3' },
    'star-empty': { 'category': 'application', 'name': 'star-empty' },
    'star-full': { 'category': 'application', 'name': 'star-full' },
    'star-half': { 'category': 'application', 'name': 'star-half' },
    'steps': { 'category': 'application', 'name': 'steps' },
    'strikethrough': { 'category': 'application', 'name': 'strikethrough' },
    'subscript': { 'category': 'application', 'name': 'subscript' },
    'suitcase': { 'category': 'application', 'name': 'suitcase' },
    'superscript': { 'category': 'application', 'name': 'superscript' },
    'switch': { 'category': 'application', 'name': 'switch' },
    'sync-disabled': { 'category': 'application', 'name': 'sync-disabled' },
    'sync-problem': { 'category': 'application', 'name': 'sync-problem' },
    'tab': { 'category': 'application', 'name': 'tab' },
    'table': { 'category': 'application', 'name': 'table' },
    'tag': { 'category': 'application', 'name': 'tag' },
    'tags': { 'category': 'application', 'name': 'tags' },
    'target': { 'category': 'application', 'name': 'target' },
    'thumbs-down': { 'category': 'application', 'name': 'thumbs-down' },
    'thumbs-up': { 'category': 'application', 'name': 'thumbs-up' },
    'tools': { 'category': 'application', 'name': 'tools' },
    'trademark': { 'category': 'application', 'name': 'trademark' },
    'traff': { 'category': 'application', 'name': 'traff' },
    'traffic-cone': { 'category': 'application', 'name': 'traffic-cone' },
    'tree': { 'category': 'application', 'name': 'tree' },
    'trophy': { 'category': 'application', 'name': 'trophy' },
    'try': { 'category': 'application', 'name': 'try' },
    'underline': { 'category': 'application', 'name': 'underline' },
    'undo': { 'category': 'application', 'name': 'undo' },
    'unfold-less': { 'category': 'application', 'name': 'unfold-less' },
    'unfold-more': { 'category': 'application', 'name': 'unfold-more' },
    'uninstall': { 'category': 'application', 'name': 'uninstall' },
    'unlink': { 'category': 'application', 'name': 'unlink' },
    'unlock': { 'category': 'application', 'name': 'unlock' },
    'upload': { 'category': 'application', 'name': 'upload' },
    'upload2': { 'category': 'application', 'name': 'upload2' },
    'usb': { 'category': 'application', 'name': 'usb' },
    'user': { 'category': 'application', 'name': 'user' },
    'user-check': { 'category': 'application', 'name': 'user-check' },
    'user-minus': { 'category': 'application', 'name': 'user-minus' },
    'user-plus': { 'category': 'application', 'name': 'user-plus' },
    'user-secret': { 'category': 'application', 'name': 'user-secret' },
    'users': { 'category': 'application', 'name': 'users' },
    'venus': { 'category': 'application', 'name': 'venus' },
    'verified': { 'category': 'application', 'name': 'verified' },
    'versions': { 'category': 'application', 'name': 'versions' },
    'vertical-align-bottom': { 'category': 'application', 'name': 'vertical-align-bottom' },
    'vertical-align-center': { 'category': 'application', 'name': 'vertical-align-center' },
    'vertical-align-top': { 'category': 'application', 'name': 'vertical-align-top' },
    'video-camera': { 'category': 'application', 'name': 'video-camera' },
    'visa': { 'category': 'application', 'name': 'visa' },
    'vpn-lock': { 'category': 'application', 'name': 'vpn-lock' },
    'vpn-publ': { 'category': 'application', 'name': 'vpn-publ' },
    'warning': { 'category': 'application', 'name': 'warning' },
    'watch': { 'category': 'application', 'name': 'watch' },
    'water': { 'category': 'application', 'name': 'water' },
    'widgets': { 'category': 'application', 'name': 'widgets' },
    'wifi-lock': { 'category': 'application', 'name': 'wifi-lock' },
    'wifi-off': { 'category': 'application', 'name': 'wifi-off' },
    'wrench': { 'category': 'application', 'name': 'wrench' },
    'zoom-in': { 'category': 'application', 'name': 'zoom-in' },
    'zoom-out': { 'category': 'application', 'name': 'zoom-out' },
    'arrow-down': { 'category': 'arrows', 'name': 'arrow-down' },
    'arrow-down-left': { 'category': 'arrows', 'name': 'arrow-down-left' },
    'arrow-down-right': { 'category': 'arrows', 'name': 'arrow-down-right' },
    'arrow-left': { 'category': 'arrows', 'name': 'arrow-left' },
    'arrow-right': { 'category': 'arrows', 'name': 'arrow-right' },
    'arrow-up': { 'category': 'arrows', 'name': 'arrow-up' },
    'arrow-up-left': { 'category': 'arrows', 'name': 'arrow-up-left' },
    'arrow-up-right': { 'category': 'arrows', 'name': 'arrow-up-right' },
    'chevron-left': { 'category': 'arrows', 'name': 'chevron-left' },
    'chevron-right': { 'category': 'arrows', 'name': 'chevron-right' },
    'chevron-thin-down': { 'category': 'arrows', 'name': 'chevron-thin-down' },
    'chevron-thin-left': { 'category': 'arrows', 'name': 'chevron-thin-left' },
    'chevron-thin-right': { 'category': 'arrows', 'name': 'chevron-thin-right' },
    'chevron-thin-up': { 'category': 'arrows', 'name': 'chevron-thin-up' },
    'amazon': { 'category': 'brand', 'name': 'amazon' },
    'android': { 'category': 'brand', 'name': 'android' },
    'apple': { 'category': 'brand', 'name': 'apple' },
    'blogger': { 'category': 'brand', 'name': 'blogger' },
    'chrome': { 'category': 'brand', 'name': 'chrome' },
    'codepen': { 'category': 'brand', 'name': 'codepen' },
    'creative-cloud': { 'category': 'brand', 'name': 'creative-cloud' },
    'css3': { 'category': 'brand', 'name': 'css3' },
    'delicious': { 'category': 'brand', 'name': 'delicious' },
    'deviantart': { 'category': 'brand', 'name': 'deviantart' },
    'digg': { 'category': 'brand', 'name': 'digg' },
    'dribbble': { 'category': 'brand', 'name': 'dribbble' },
    'dropbox': { 'category': 'brand', 'name': 'dropbox' },
    'evernote': { 'category': 'brand', 'name': 'evernote' },
    'facebook': { 'category': 'brand', 'name': 'facebook' },
    'facebook2': { 'category': 'brand', 'name': 'facebook2' },
    'finder': { 'category': 'brand', 'name': 'finder' },
    'firefox': { 'category': 'brand', 'name': 'firefox' },
    'flattr': { 'category': 'brand', 'name': 'flattr' },
    'foursquare': { 'category': 'brand', 'name': 'foursquare' },
    'git': { 'category': 'brand', 'name': 'git' },
    'github': { 'category': 'brand', 'name': 'github' },
    'gitlab': { 'category': 'brand', 'name': 'gitlab' },
    'google': { 'category': 'brand', 'name': 'google' },
    'google-plus': { 'category': 'brand', 'name': 'google-plus' },
    'google-plus2': { 'category': 'brand', 'name': 'google-plus2' },
    'google-wallet': { 'category': 'brand', 'name': 'google-wallet' },
    'grav': { 'category': 'brand', 'name': 'grav' },
    'html5': { 'category': 'brand', 'name': 'html5' },
    'IcoMoon': { 'category': 'brand', 'name': 'IcoMoon' },
    'ie': { 'category': 'brand', 'name': 'ie' },
    'imdb': { 'category': 'brand', 'name': 'imdb' },
    'instagram': { 'category': 'brand', 'name': 'instagram' },
    'joomla': { 'category': 'brand', 'name': 'joomla' },
    'jsfiddle': { 'category': 'brand', 'name': 'jsfiddle' },
    'lastfm': { 'category': 'brand', 'name': 'lastfm' },
    'linkedin': { 'category': 'brand', 'name': 'linkedin' },
    'linux': { 'category': 'brand', 'name': 'linux' },
    'meetup': { 'category': 'brand', 'name': 'meetup' },
    'odnoklassniki': { 'category': 'brand', 'name': 'odnoklassniki' },
    'onedrive': { 'category': 'brand', 'name': 'onedrive' },
    'opencart': { 'category': 'brand', 'name': 'opencart' },
    'openid': { 'category': 'brand', 'name': 'openid' },
    'opera': { 'category': 'brand', 'name': 'opera' },
    'paypal': { 'category': 'brand', 'name': 'paypal' },
    'picassa': { 'category': 'brand', 'name': 'picassa' },
    'pinterest': { 'category': 'brand', 'name': 'pinterest' },
    'reddit': { 'category': 'brand', 'name': 'reddit' },
    'safari': { 'category': 'brand', 'name': 'safari' },
    'skype': { 'category': 'brand', 'name': 'skype' },
    'soundcloud': { 'category': 'brand', 'name': 'soundcloud' },
    'stackoverflow': { 'category': 'brand', 'name': 'stackoverflow' },
    'steam': { 'category': 'brand', 'name': 'steam' },
    'steam2': { 'category': 'brand', 'name': 'steam2' },
    'stumbleupon': { 'category': 'brand', 'name': 'stumbleupon' },
    'swarm': { 'category': 'brand', 'name': 'swarm' },
    'themeisle': { 'category': 'brand', 'name': 'themeisle' },
    'tux': { 'category': 'brand', 'name': 'tux' },
    'twitch': { 'category': 'brand', 'name': 'twitch' },
    'twitter': { 'category': 'brand', 'name': 'twitter' },
    'vimeo': { 'category': 'brand', 'name': 'vimeo' },
    'vk': { 'category': 'brand', 'name': 'vk' },
    'wikipedia': { 'category': 'brand', 'name': 'wikipedia' },
    'windows': { 'category': 'brand', 'name': 'windows' },
    'wordpress': { 'category': 'brand', 'name': 'wordpress' },
    'yelp': { 'category': 'brand', 'name': 'yelp' },
    'youtube': { 'category': 'brand', 'name': 'youtube' },
    'youtube-play': { 'category': 'brand', 'name': 'youtube-play' },
    'youtube2': { 'category': 'brand', 'name': 'youtube2' },
    'chart-bars': { 'category': 'chart', 'name': 'chart-bars' },
    'chart-bars2': { 'category': 'chart', 'name': 'chart-bars2' },
    'chart-dots': { 'category': 'chart', 'name': 'chart-dots' },
    'chart-line': { 'category': 'chart', 'name': 'chart-line' },
    'chart-pie': { 'category': 'chart', 'name': 'chart-pie' },
    'display': { 'category': 'device', 'name': 'display' },
    'keyboard-hide': { 'category': 'device', 'name': 'keyboard-hide' },
    'laptop': { 'category': 'device', 'name': 'laptop' },
    'mobile': { 'category': 'device', 'name': 'mobile' },
    'tablet': { 'category': 'device', 'name': 'tablet' },
    'tablet-landscape': { 'category': 'device', 'name': 'tablet-landscape' },
    'description': { 'category': 'file', 'name': 'description' },
    'file-archive': { 'category': 'file', 'name': 'file-archive' },
    'file-audio': { 'category': 'file', 'name': 'file-audio' },
    'file-binary': { 'category': 'file', 'name': 'file-binary' },
    'file-code': { 'category': 'file', 'name': 'file-code' },
    'file-download': { 'category': 'file', 'name': 'file-download' },
    'file-empty': { 'category': 'file', 'name': 'file-empty' },
    'file-excel': { 'category': 'file', 'name': 'file-excel' },
    'file-image': { 'category': 'file', 'name': 'file-image' },
    'file-movie': { 'category': 'file', 'name': 'file-movie' },
    'file-music': { 'category': 'file', 'name': 'file-music' },
    'file-openoffice': { 'category': 'file', 'name': 'file-openoffice' },
    'file-pdf': { 'category': 'file', 'name': 'file-pdf' },
    'file-picture': { 'category': 'file', 'name': 'file-picture' },
    'file-play': { 'category': 'file', 'name': 'file-play' },
    'file-powerpoint': { 'category': 'file', 'name': 'file-powerpoint' },
    'file-text': { 'category': 'file', 'name': 'file-text' },
    'file-upload': { 'category': 'file', 'name': 'file-upload' },
    'file-video': { 'category': 'file', 'name': 'file-video' },
    'file-word': { 'category': 'file', 'name': 'file-word' },
    'file-zip': { 'category': 'file', 'name': 'file-zip' },
    'files-empty': { 'category': 'file', 'name': 'files-empty' },
    'folder': { 'category': 'file', 'name': 'folder' },
    'folder-download': { 'category': 'file', 'name': 'folder-download' },
    'folder-minus': { 'category': 'file', 'name': 'folder-minus' },
    'folder-open': { 'category': 'file', 'name': 'folder-open' },
    'folder-open2': { 'category': 'file', 'name': 'folder-open2' },
    'folder-plus': { 'category': 'file', 'name': 'folder-plus' },
    'folder-shared': { 'category': 'file', 'name': 'folder-shared' },
    'folder-special': { 'category': 'file', 'name': 'folder-special' },
    'folder-special2': { 'category': 'file', 'name': 'folder-special2' },
    'folder-upload': { 'category': 'file', 'name': 'folder-upload' },
    'folder2': { 'category': 'file', 'name': 'folder2' },
    'libreoffice': { 'category': 'file', 'name': 'libreoffice' },
    'note': { 'category': 'file', 'name': 'note' },
    'note-add': { 'category': 'file', 'name': 'note-add' },
    'ambulance': { 'category': 'medic', 'name': 'ambulance' },
    'heart': { 'category': 'medic', 'name': 'heart' },
    'heart-broken': { 'category': 'medic', 'name': 'heart-broken' },
    'heartbeat': { 'category': 'medic', 'name': 'heartbeat' },
    'injection': { 'category': 'medic', 'name': 'injection' },
    'lab': { 'category': 'medic', 'name': 'lab' },
    'medkit': { 'category': 'medic', 'name': 'medkit' },
    'microscope': { 'category': 'medic', 'name': 'microscope' },
    'stethoscope': { 'category': 'medic', 'name': 'stethoscope' },
    'thermometer2': { 'category': 'medic', 'name': 'thermometer2' },
    'user-md': { 'category': 'medic', 'name': 'user-md' },
    'battery-charge': { 'category': 'mobile', 'name': 'battery-charge' },
    'battery-empty': { 'category': 'mobile', 'name': 'battery-empty' },
    'battery-full': { 'category': 'mobile', 'name': 'battery-full' },
    'battery-one': { 'category': 'mobile', 'name': 'battery-one' },
    'battery-two': { 'category': 'mobile', 'name': 'battery-two' },
    'bluetooth': { 'category': 'mobile', 'name': 'bluetooth' },
    'bt-audio': { 'category': 'mobile', 'name': 'bt-audio' },
    'bt-connected': { 'category': 'mobile', 'name': 'bt-connected' },
    'bt-disabled': { 'category': 'mobile', 'name': 'bt-disabled' },
    'bt-searching': { 'category': 'mobile', 'name': 'bt-searching' },
    'bt-settings': { 'category': 'mobile', 'name': 'bt-settings' },
    'cell-on': { 'category': 'mobile', 'name': 'cell-on' },
    'dialer-sip': { 'category': 'mobile', 'name': 'dialer-sip' },
    'dialpad': { 'category': 'mobile', 'name': 'dialpad' },
    'feed': { 'category': 'mobile', 'name': 'feed' },
    'mic': { 'category': 'mobile', 'name': 'mic' },
    'my-location': { 'category': 'mobile', 'name': 'my-location' },
    'perm-phone-msg': { 'category': 'mobile', 'name': 'perm-phone-msg' },
    'phone': { 'category': 'mobile', 'name': 'phone' },
    'phone-bt': { 'category': 'mobile', 'name': 'phone-bt' },
    'phone-forwarded': { 'category': 'mobile', 'name': 'phone-forwarded' },
    'phone-in-talk': { 'category': 'mobile', 'name': 'phone-in-talk' },
    'phone-locked': { 'category': 'mobile', 'name': 'phone-locked' },
    'phone-missed': { 'category': 'mobile', 'name': 'phone-missed' },
    'phone-paused': { 'category': 'mobile', 'name': 'phone-paused' },
    'phonelink': { 'category': 'mobile', 'name': 'phonelink' },
    'phonelink-off': { 'category': 'mobile', 'name': 'phonelink-off' },
    'ring-volume': { 'category': 'mobile', 'name': 'ring-volume' },
    'settings-phone': { 'category': 'mobile', 'name': 'settings-phone' },
    'voicemail': { 'category': 'mobile', 'name': 'voicemail' },
    'wifi-connect': { 'category': 'mobile', 'name': 'wifi-connect' },
    'wifi-full': { 'category': 'mobile', 'name': 'wifi-full' },
    'wifi-low': { 'category': 'mobile', 'name': 'wifi-low' },
    'wifi-mid': { 'category': 'mobile', 'name': 'wifi-mid' },
    'backward': { 'category': 'player', 'name': 'backward' },
    'eject': { 'category': 'player', 'name': 'eject' },
    'equalizer2': { 'category': 'player', 'name': 'equalizer2' },
    'featured-play-list': { 'category': 'player', 'name': 'featured-play-list' },
    'featured-video': { 'category': 'player', 'name': 'featured-video' },
    'first': { 'category': 'player', 'name': 'first' },
    'forward': { 'category': 'player', 'name': 'forward' },
    'infinite': { 'category': 'player', 'name': 'infinite' },
    'last': { 'category': 'player', 'name': 'last' },
    'loop': { 'category': 'player', 'name': 'loop' },
    'loop2': { 'category': 'player', 'name': 'loop2' },
    'next': { 'category': 'player', 'name': 'next' },
    'pause': { 'category': 'player', 'name': 'pause' },
    'play': { 'category': 'player', 'name': 'play' },
    'previous': { 'category': 'player', 'name': 'previous' },
    'shuffle': { 'category': 'player', 'name': 'shuffle' },
    'stop': { 'category': 'player', 'name': 'stop' },
    'volume-high': { 'category': 'player', 'name': 'volume-high' },
    'volume-low': { 'category': 'player', 'name': 'volume-low' },
    'volume-medium': { 'category': 'player', 'name': 'volume-medium' },
    'volume-minus': { 'category': 'player', 'name': 'volume-minus' },
    'volume-mute': { 'category': 'player', 'name': 'volume-mute' },
    'volume-mute2': { 'category': 'player', 'name': 'volume-mute2' },
    'volume-plus': { 'category': 'player', 'name': 'volume-plus' },
    'spinner': { 'category': 'spinner', 'name': 'spinner' },
    'spinner2': { 'category': 'spinner', 'name': 'spinner2' },
    'spinner3': { 'category': 'spinner', 'name': 'spinner3' },
    'spinner4': { 'category': 'spinner', 'name': 'spinner4' },
    'spinner5': { 'category': 'spinner', 'name': 'spinner5' },
    'airplane': { 'category': 'vehicle', 'name': 'airplane' },
    'automobile': { 'category': 'vehicle', 'name': 'automobile' },
    'bicycle': { 'category': 'vehicle', 'name': 'bicycle' },
    'bus': { 'category': 'vehicle', 'name': 'bus' },
    'cab': { 'category': 'vehicle', 'name': 'cab' },
    'directions-bike': { 'category': 'vehicle', 'name': 'directions-bike' },
    'drive-eta': { 'category': 'vehicle', 'name': 'drive-eta' },
    'local-airport': { 'category': 'vehicle', 'name': 'local-airport' },
    'motorcycle': { 'category': 'vehicle', 'name': 'motorcycle' },
    'satellite': { 'category': 'vehicle', 'name': 'satellite' },
    'ship': { 'category': 'vehicle', 'name': 'ship' },
    'space-shuttle': { 'category': 'vehicle', 'name': 'space-shuttle' },
    'subway': { 'category': 'vehicle', 'name': 'subway' },
    'train': { 'category': 'vehicle', 'name': 'train' },
    'truck': { 'category': 'vehicle', 'name': 'truck' },
    'celsius': { 'category': 'weather', 'name': 'celsius' },
    'cloud2': { 'category': 'weather', 'name': 'cloud2' },
    'cloud3': { 'category': 'weather', 'name': 'cloud3' },
    'cloud4': { 'category': 'weather', 'name': 'cloud4' },
    'cloud5': { 'category': 'weather', 'name': 'cloud5' },
    'cloud6': { 'category': 'weather', 'name': 'cloud6' },
    'cloudy': { 'category': 'weather', 'name': 'cloudy' },
    'cloudy2': { 'category': 'weather', 'name': 'cloudy2' },
    'cloudy3': { 'category': 'weather', 'name': 'cloudy3' },
    'cloudy4': { 'category': 'weather', 'name': 'cloudy4' },
    'fahrenheit': { 'category': 'weather', 'name': 'fahrenheit' },
    'lightning': { 'category': 'weather', 'name': 'lightning' },
    'lightning2': { 'category': 'weather', 'name': 'lightning2' },
    'lightning3': { 'category': 'weather', 'name': 'lightning3' },
    'lightning4': { 'category': 'weather', 'name': 'lightning4' },
    'lightning5': { 'category': 'weather', 'name': 'lightning5' },
    'lines': { 'category': 'weather', 'name': 'lines' },
    'moon': { 'category': 'weather', 'name': 'moon' },
    'moon2': { 'category': 'weather', 'name': 'moon2' },
    'none': { 'category': 'weather', 'name': 'none' },
    'rainy': { 'category': 'weather', 'name': 'rainy' },
    'rainy2': { 'category': 'weather', 'name': 'rainy2' },
    'rainy3': { 'category': 'weather', 'name': 'rainy3' },
    'rainy4': { 'category': 'weather', 'name': 'rainy4' },
    'snowflake': { 'category': 'weather', 'name': 'snowflake' },
    'snowy': { 'category': 'weather', 'name': 'snowy' },
    'snowy2': { 'category': 'weather', 'name': 'snowy2' },
    'snowy3': { 'category': 'weather', 'name': 'snowy3' },
    'snowy4': { 'category': 'weather', 'name': 'snowy4' },
    'snowy5': { 'category': 'weather', 'name': 'snowy5' },
    'sun': { 'category': 'weather', 'name': 'sun' },
    'sun3': { 'category': 'weather', 'name': 'sun3' },
    'sun4': { 'category': 'weather', 'name': 'sun4' },
    'sunrise': { 'category': 'weather', 'name': 'sunrise' },
    'thermometer': { 'category': 'weather', 'name': 'thermometer' },
    'weather': { 'category': 'weather', 'name': 'weather' },
    'weather2': { 'category': 'weather', 'name': 'weather2' },
    'weather3': { 'category': 'weather', 'name': 'weather3' },
    'weather4': { 'category': 'weather', 'name': 'weather4' },
    'weather5': { 'category': 'weather', 'name': 'weather5' },
    'wind': { 'category': 'weather', 'name': 'wind' },
    'windy': { 'category': 'weather', 'name': 'windy' },
    'windy2': { 'category': 'weather', 'name': 'windy2' },
    'windy3': { 'category': 'weather', 'name': 'windy3' },
    'windy4': { 'category': 'weather', 'name': 'windy4' },
    'windy5': { 'category': 'weather', 'name': 'windy5' }
};
const iconCategoryDictionary = {
    'application': 'application',
    'arrows': 'arrows',
    'brand': 'brand',
    'chart': 'chart',
    'device': 'device',
    'file': 'file',
    'medic': 'medic',
    'mobile': 'mobile',
    'player': 'player',
    'spinner': 'spinner',
    'vehicle': 'vehicle',
    'weather': 'weather'
};
const colorDictionary = {
    'lightLime': 'lightLime',
    'lime': 'lime',
    'darkLime': 'darkLime',
    'lightGreen': 'lightGreen',
    'green': 'green',
    'darkGreen': 'darkGreen',
    'lightEmerald': 'lightEmerald',
    'emerald': 'emerald',
    'darkEmerald': 'darkEmerald',
    'lightBlue': 'lightBlue',
    'blue': 'blue',
    'darkBlue': 'darkBlue',
    'lightTeal': 'lightTeal',
    'teal': 'teal',
    'darkTeal': 'darkTeal',
    'lightCyan': 'lightCyan',
    'cyan': 'cyan',
    'darkCyan': 'darkCyan',
    'lightCobalt': 'lightCobalt',
    'cobalt': 'cobalt',
    'darkCobalt': 'darkCobalt',
    'lightIndigo': 'lightIndigo',
    'indigo': 'indigo',
    'darkIndigo': 'darkIndigo',
    'lightViolet': 'lightViolet',
    'violet': 'violet',
    'darkViolet': 'darkViolet',
    'lightPink': 'lightPink',
    'pink': 'pink',
    'darkPink': 'darkPink',
    'lightMagenta': 'lightMagenta',
    'magenta': 'magenta',
    'darkMagenta': 'darkMagenta',
    'lightCrimson': 'lightCrimson',
    'crimson': 'crimson',
    'darkCrimson': 'darkCrimson',
    'lightRed': 'lightRed',
    'red': 'red',
    'darkRed': 'darkRed',
    'lightOrange': 'lightOrange',
    'orange': 'orange',
    'darkOrange': 'darkOrange',
    'lightAmber': 'lightAmber',
    'amber': 'amber',
    'darkAmber': 'darkAmber',
    'lightYellow': 'lightYellow',
    'yellow': 'yellow',
    'darkYellow': 'darkYellow',
    'lightBrown': 'lightBrown',
    'brown': 'brown',
    'darkBrown': 'darkBrown',
    'lightOlive': 'lightOlive',
    'olive': 'olive',
    'darkOlive': 'darkOlive',
    'lightSteel': 'lightSteel',
    'steel': 'steel',
    'darkSteel': 'darkSteel',
    'lightMauve': 'lightMauve',
    'mauve': 'mauve',
    'darkMauve': 'darkMauve',
    'lightTaupe': 'lightTaupe',
    'taupe': 'taupe',
    'darkTaupe': 'darkTaupe',
    'lightGray': 'lightGray',
    'gray': 'gray',
    'darkGray': 'darkGray',
    'lightGrayBlue': 'lightGrayBlue',
    'grayBlue': 'grayBlue',
    'darkGrayBlue': 'darkGrayBlue',
    'black': 'black',
    'white': 'white',
    'dark': 'dark',
    'light': 'light',
    'grayWhite': 'grayWhite',
    'grayMouse': 'grayMouse'
};
const animationDictionary = {
    'spin': 'spin',
    'pulse': 'pulse',
    'spanner': 'spanner',
    'ring': 'ring',
    'vertical': 'vertical',
    'horizontal': 'horizontal',
    'flash': 'flash',
    'bounce': 'bounce',
    'float': 'float',
    'heartbeat': 'heartbeat',
    'shake': 'shake',
    'shuttle': 'shuttle',
    'pass': 'pass',
    'ripple': 'ripple',
};
const accentDictionary = {
    '': '',
    'primary': 'primary',
    'secondary': 'secondary',
    'success': 'success',
    'alert': 'alert',
    'warning': 'warning',
    'yellow': 'yellow',
    'info': 'info',
    'dark': 'dark',
    'light': 'light',
    'link': 'link'
};
const inputDictionary = {
    'text': 'text',
    'number': 'number',
    'email': 'email',
    'password': 'password',
    'datetime-local': 'datetime-local',
    'color': 'color',
    'date': 'date',
    'month': 'month',
    'time': 'time',
    'week': 'week'
};
const calendarButtonDictionary = {
    'cancel': 'cancel',
    'today': 'today',
    'clear': 'clear',
    'done': 'done',
};
const widePointDictionary = {
    'fs': 'fs',
    'sm': 'sm',
    'md': 'md',
    'lg': 'lg',
    'xl': 'xl',
    'xxl': 'xxl'
};
const positionHorizontalDictionary = {
    'left': 'left',
    'right': 'right'
};
const spinnerButtonPositionDictionary = Object.assign(Object.assign({}, positionHorizontalDictionary), { 'default': 'default' });
const positionVerticalDictionary = {
    'top': 'top',
    'bottom': 'bottom'
};
const positionBaseDictionary = Object.assign(Object.assign({}, positionHorizontalDictionary), positionVerticalDictionary);
const positionDictionary = Object.assign(Object.assign({}, positionBaseDictionary), { 'top-left': 'top-left', 'top-right': 'top-right', 'bottom-right': 'bottom-right', 'bottom-left': 'bottom-left' });
const sizeDictionary = {
    '': '',
    'mini': 'mini',
    'small': 'small',
    'large': 'large'
};
const gravatarDictionary = {
    'mm': 'mm',
    'identicon': 'identicon',
    'monsterid': 'monsterid',
    'wavatar': 'wavatar',
    'retro': 'retro',
    'robohash': 'robohash',
    'blank': 'blank'
};
const activityDictionary = {
    'ring': 'ring',
    'metro': 'metro',
    'square': 'square',
    'cycle': 'cycle',
    'simple': 'simple'
};
const activityStyleDictionary = {
    '': '',
    'dark': '',
    'color': ''
};
const buttonShapeDictionary = {
    '': '',
    'square': 'square',
    'cycle': 'cycle'
};
const buttonSpecialDictionary = {
    '': '',
    'command': 'command',
    'image': 'image',
    'shortcut': 'shortcut',
    'ribbon': 'ribbon',
    'multi-action': 'multi-action',
    'action': 'action',
};
const popoverTriggerDictionary = {
    'click': 'click',
    'focus': 'focus',
    'hover': 'hover'
};
const progressTypeDictionary = {
    '': '',
    'buffer': 'buffer',
    'load': 'load',
    'line': 'line'
};
const roundTypeDictionary = {
    'round': 'round',
    'ceil': 'ceil',
    'floor': 'floor'
};
const thinDictionary = {
    '': '',
    'thin': 'thin',
    'ultra-thin': 'ultra-thin'
};
const easingDictionary = {
    'swing': 'swing',
    'easeInQuad': 'easeInQuad',
    'easeOutQuad': 'easeOutQuad',
    'easeInOutQuad': 'easeInOutQuad',
    'easeInCubic': 'easeInCubic',
    'easeOutCubic': 'easeOutCubic',
    'easeInOutCubic': 'easeInOutCubic',
    'easeInQuart': 'easeInQuart',
    'easeOutQuart': 'easeOutQuart',
    'easeInOutQuart': 'easeInOutQuart',
    'easeInQuint': 'easeInQuint',
    'easeOutQuint': 'easeOutQuint',
    'easeInOutQuint': 'easeInOutQuint',
    'easeInSine': 'easeInSine',
    'easeOutSine': 'easeOutSine',
    'easeInOutSine': 'easeInOutSine',
    'easeInExpo': 'easeInExpo',
    'easeOutExpo': 'easeOutExpo',
    'easeInOutExpo': 'easeInOutExpo',
    'easeInCirc': 'easeInCirc',
    'easeOutCirc': 'easeOutCirc',
    'easeInOutCirc': 'easeInOutCirc',
    'easeInElastic': 'easeInElastic',
    'easeOutElastic': 'easeOutElastic',
    'easeInOutElastic': 'easeInOutElastic',
    'easeInBack': 'easeInBack',
    'easeOutBack': 'easeOutBack',
    'easeInOutBack': 'easeInOutBack',
    'easeInBounce': 'easeInBounce',
    'easeOutBounce': 'easeOutBounce',
    'easeInOutBounce': 'easeInOutBounce'
};
const fileReadModeDictionary = {
    '': '',
    'text': 'text',
    'arrayBuffer': 'arrayBuffer',
    'binaryString': 'binaryString',
    'dataUrl': 'dataUrl'
};
class Lists {
    static icons() {
        return Object.values(iconDictionary);
    }
    static iconCategories() {
        return Object.values(iconCategoryDictionary);
    }
    static colors() {
        return Object.values(colorDictionary);
    }
    static animations() {
        return Object.values(animationDictionary);
    }
    static accents() {
        return Object.values(accentDictionary);
    }
    static widePoints() {
        return Object.values(widePointDictionary);
    }
    static positions(all = true) {
        return Object.values(all ? positionDictionary : positionBaseDictionary);
    }
    static sizes() {
        return Object.values(sizeDictionary);
    }
    static gravatars() {
        return Object.values(gravatarDictionary);
    }
    static activities() {
        return Object.values(activityDictionary);
    }
    static activityStyles() {
        return Object.values(activityStyleDictionary);
    }
    static buttonShapes() {
        return Object.values(buttonShapeDictionary);
    }
    static buttonSpecials() {
        return Object.values(buttonSpecialDictionary);
    }
    static popoverTriggers() {
        return Object.values(popoverTriggerDictionary);
    }
    static progressTypes() {
        return Object.values(progressTypeDictionary);
    }
    static roundTypes() {
        return Object.values(roundTypeDictionary);
    }
    static thins() {
        return Object.values(thinDictionary);
    }
    static easings() {
        return Object.values(easingDictionary);
    }
}

class AttributeHelper {
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

let ControlBase = class ControlBase {
    constructor(mainElement, cdRef) {
        this.mainElement = mainElement;
        this.cdRef = cdRef;
        this.disableUpdate = false;
        this.touchCallback = () => { };
        this.changeCallback = (_) => { };
    }
    observeClassValue() {
        this.classObserver = AttributeHelper.createObserver(this.mainElement, (newClasses, oldClasses) => {
            this.currentClasses = newClasses;
            this.newClassValue(newClasses, oldClasses);
        });
    }
    changeValue(newValue, callback = true) {
        if (this.disableUpdate) {
            return;
        }
        if (ObjectHelper.compare(newValue, this.innerValue)) {
            return;
        }
        this.innerValue = newValue;
        if (callback) {
            this.changeCallback(this.innerValue);
        }
    }
    registerOnChange(fn) {
        this.changeCallback = fn;
    }
    registerOnTouched(fn) {
        this.touchCallback = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.disable(isDisabled);
    }
    callNewValue() {
        this.disableUpdate = true;
        this.newValue();
        this.disableUpdate = false;
    }
    writeValue(newValue) {
        this.innerValue = newValue;
        this.callNewValue();
    }
    ngAfterViewInit() {
        this.createControl().then(() => {
            this.callNewValue();
            this.observeClassValue();
        });
    }
    ngOnChanges(changes) {
        asapScheduler.schedule(() => {
            this.createControl().then(() => {
                this.setDisabledState(this.disabled);
                this.callNewValue();
                if (this.currentClasses) {
                    this.newClassValue(this.currentClasses, []);
                }
            });
        });
    }
    ngOnDestroy() {
        if (this.classObserver) {
            this.classObserver.disconnect();
        }
    }
    updateProperty(key, newValue) {
        const oldValue = this[key];
        if (oldValue !== newValue) {
            this[key] = newValue;
            if (this.cdRef) {
                this.cdRef.detectChanges();
            }
            const changes = {};
            changes[key] = { previousValue: oldValue, currentValue: newValue, firstChange: false };
            this.ngOnChanges(changes);
        }
    }
};
ControlBase.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Optional }] },
    { type: ChangeDetectorRef }
];
ControlBase = __decorate([
    Directive(),
    __param(0, Optional()),
    __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
], ControlBase);

class TypeAlias {
    static get(type) {
        return {
            provide: ControlBase,
            useExisting: forwardRef(() => type)
        };
    }
}

var TagInputComponent_1;
let TagInputComponent = TagInputComponent_1 = class TagInputComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.clearButton = true;
        this.readonly = false;
        this.backspace = true;
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
            this.tagInput = this.clonedElement.taginput().data('taginput');
            this.clonedElement.next('.input-wrapper').one('blur', () => {
                this.touchCallback();
            });
            this.tagInput.options.onTag = (tag, val, vals) => {
                this.changeValue(vals.slice(0));
            };
            complete();
        });
    }
    disable(disabled) {
        if (this.tagInput) {
            const target = this.tagInput.element.parent('div.tag-input');
            if (target != null) {
                if (disabled) {
                    target.addClass('disabled');
                }
                else {
                    target.removeClass('disabled');
                }
            }
        }
    }
    newValue() {
        if (!this.tagInput) {
            return;
        }
        this.tagInput.clear();
        if (this.innerValue && this.innerValue.length > 0) {
            this.tagInput.val(this.innerValue);
        }
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
};
__decorate([
    Input('random-color'),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "randomColor", void 0);
__decorate([
    Input('max-tags'),
    __metadata("design:type", Number)
], TagInputComponent.prototype, "maxTags", void 0);
__decorate([
    Input('tag-trigger'),
    __metadata("design:type", Array)
], TagInputComponent.prototype, "tagTrigger", void 0);
__decorate([
    Input('clear-button'),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "clearButton", void 0);
__decorate([
    Input('clear-button-icon'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clearButtonIcon", void 0);
__decorate([
    Input('readonly'),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "readonly", void 0);
__decorate([
    Input('backspace'),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "backspace", void 0);
__decorate([
    Input('cls-tag'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clsTag", void 0);
__decorate([
    Input('cls-tag-title'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clsTagTitle", void 0);
__decorate([
    Input('cls-tag-remover'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clsTagRemover", void 0);
__decorate([
    Input('cls-clear-button'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clsClearButton", void 0);
__decorate([
    Input('cls-component'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clsComponent", void 0);
__decorate([
    Input('cls-input'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "clsInput", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], TagInputComponent.prototype, "input", void 0);
TagInputComponent = TagInputComponent_1 = __decorate([
    Component({
        selector: 'm4-tag-input',
        template: "<input type=\"text\" #input\n\n\n       [readonly]=\"readonly\"\n\n       [attr.data-random-color]=\"randomColor\"\n       [attr.data-max-tags]=\"maxTags\"\n       [attr.data-tag-trigger]=\"tagTrigger?.join(',')\"\n       [attr.data-backspace]=\"backspace\"\n       [attr.data-clear-button]=\"clearButton\"\n       [attr.data-clear-button-icon]=\"clearButtonIcon\"\n\n       [attr.data-cls-tag]=\"clsTag\"\n       [attr.data-cls-tag-title]=\"clsTagTitle\"\n       [attr.data-cls-tag-remover]=\"clsTagRemover\"\n       [attr.data-cls-component]=\"clsComponent\"\n       [attr.data-cls-input]=\"clsInput\"\n       [attr.data-cls-clear-button]=\"clsClearButton\">\n",
        providers: [DefaultValueAccessor.get(TagInputComponent_1), TypeAlias.get(TagInputComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], TagInputComponent);

// @dynamic
class StringHelper {
    /**
     * Creates a GUID
     */
    static guid() {
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
        return uuid;
    }
    static createHash(object) {
        return JSON.stringify(object || null);
    }
}

var SelectComponent_1;
let SelectComponent = SelectComponent_1 = class SelectComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.multiple = false;
        this.duration = 0;
    }
    createControl() {
        return new Promise((complete) => {
            const originalElement = $(this.input.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.children().appendTo(originalElement);
                this.clonedElement.parent().remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            originalElement.children().appendTo(this.clonedElement);
            this.select = this.clonedElement.select().data('select');
            this.clonedElement.parent().on('mousedown', (ev) => {
                if (ev.button === 0) {
                    this.touchCallback();
                    this.clonedElement.parent().off('mousedown');
                }
            });
            this.select.options.onChange = (val) => {
                if (this.options instanceof Array) {
                    const allOptions = [];
                    this.options.forEach((option) => {
                        if (!!option.options) {
                            option.options.forEach((subOption) => {
                                allOptions.push(subOption);
                            });
                        }
                        else {
                            allOptions.push(option);
                        }
                    });
                    val = val.map(key => allOptions.find(option => StringHelper.createHash(option.value) === key)).filter(v => !!v).map(v => v.value);
                }
                if (this.multiple) {
                    this.changeValue(val.slice(0));
                }
                else {
                    this.changeValue(val[0]);
                }
            };
            if (this.options && !(this.options instanceof Array)) {
                this.select.data(this.options);
            }
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.select.disable();
        }
        else {
            this.select.enable();
        }
    }
    newValue() {
        if (!this.select) {
            return;
        }
        let selectValue = this.multiple ? this.innerValue : [this.innerValue];
        if (this.options instanceof Array) {
            selectValue = selectValue.map(v => StringHelper.createHash(v));
        }
        if (this.multiple) {
            this.select.reset();
        }
        this.select.val(selectValue);
    }
    newClassValue(newClasses, oldClasses) {
        asapScheduler.schedule(() => {
            if (this.clonedElement) {
                const target = this.clonedElement.parent();
                oldClasses.forEach((cls) => {
                    target.removeClass(cls);
                });
                newClasses.forEach((cls) => {
                    target.addClass(cls);
                });
            }
        }, 1);
    }
};
__decorate([
    Input('options'),
    __metadata("design:type", Object)
], SelectComponent.prototype, "options", void 0);
__decorate([
    Input('multiple'),
    __metadata("design:type", Object)
], SelectComponent.prototype, "multiple", void 0);
__decorate([
    Input('duration'),
    __metadata("design:type", Object)
], SelectComponent.prototype, "duration", void 0);
__decorate([
    Input('prepend'),
    __metadata("design:type", String)
], SelectComponent.prototype, "prepend", void 0);
__decorate([
    Input('append'),
    __metadata("design:type", String)
], SelectComponent.prototype, "append", void 0);
__decorate([
    Input('drop-height'),
    __metadata("design:type", Number)
], SelectComponent.prototype, "dropHeight", void 0);
__decorate([
    Input('filter'),
    __metadata("design:type", Boolean)
], SelectComponent.prototype, "filter", void 0);
__decorate([
    Input('filter-placeholder'),
    __metadata("design:type", String)
], SelectComponent.prototype, "filterPlaceholder", void 0);
__decorate([
    Input('cls-select'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsSelect", void 0);
__decorate([
    Input('cls-prepend'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsPrepend", void 0);
__decorate([
    Input('cls-append'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsAppend", void 0);
__decorate([
    Input('cls-option'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsOption", void 0);
__decorate([
    Input('cls-option-group'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsOptionGroup", void 0);
__decorate([
    Input('cls-drop-list'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsDropList", void 0);
__decorate([
    Input('cls-selected-item'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsSelectedItem", void 0);
__decorate([
    Input('cls-selected-item-remover'),
    __metadata("design:type", String)
], SelectComponent.prototype, "clsSelectedItemRemover", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], SelectComponent.prototype, "input", void 0);
SelectComponent = SelectComponent_1 = __decorate([
    Component({
        selector: 'm4-select',
        template: "<select #input [multiple]=\"multiple\"\n\n\n        [attr.data-prepend]=\"prepend\"\n        [attr.data-duration]=\"duration\"\n        [attr.data-append]=\"append\"\n        [attr.data-drop-height]=\"dropHeight\"\n        [attr.data-filter]=\"filter\"\n        [attr.data-filter-placeholder]=\"filterPlaceholder\"\n\n        [attr.data-cls-select]=\"clsSelect\"\n        [attr.data-cls-prepend]=\"clsPrepend\"\n        [attr.data-cls-append]=\"clsAppend\"\n        [attr.data-cls-option]=\"clsOption\"\n        [attr.data-cls-option-group]=\"clsOptionGroup\"\n        [attr.data-cls-drop-list]=\"clsDropList\"\n        [attr.data-cls-selected-item]=\"clsSelectedItem\"\n        [attr.data-cls-selected-item-remover]=\"clsSelectedItemRemover\">\n\n  <ng-content *ngIf=\"!options\"></ng-content>\n\n  <ng-container *ngIf=\"options | isArray\">\n    <ng-container *ngFor=\"let option of options\">\n      <option *ngIf=\"!option.options\" [value]=\"option.value | createHash\" [attr.data-template]=\"option.dataTemplate\">\n        {{option.title}}\n      </option>\n\n      <optgroup *ngIf=\"option.options\" [label]=\"option.groupName\">\n        <option *ngFor=\"let childOption of option.options\" [value]=\"childOption.value | createHash\" [attr.data-template]=\"childOption.dataTemplate\">\n          {{childOption.title}}\n        </option>\n      </optgroup>\n    </ng-container>\n  </ng-container>\n</select>\n",
        providers: [DefaultValueAccessor.get(SelectComponent_1), TypeAlias.get(SelectComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], SelectComponent);

var InputComponent_1;
let InputComponent = InputComponent_1 = class InputComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.searchButtonClick = new EventEmitter();
        this.readonly = false;
        this.placeholder = '';
        this.type = 'text';
        this.customButtons = [];
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
            this.inputObj = this.clonedElement.input({
                customButtons: this.customButtons,
                onSearchButtonClick: (val) => this.searchButtonClick.emit(val)
            }).data('input');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('keydown change', (event) => {
                asapScheduler.schedule(() => {
                    let newValue = this.clonedElement.val();
                    if (this.type === 'number') {
                        newValue = +newValue;
                    }
                    this.changeValue(newValue);
                }, 1);
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.inputObj.disable();
        }
        else {
            this.inputObj.enable();
        }
    }
    newValue() {
        if (!this.inputObj) {
            return;
        }
        this.clonedElement.val(this.innerValue);
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
};
__decorate([
    Output('search-button-click'),
    __metadata("design:type", Object)
], InputComponent.prototype, "searchButtonClick", void 0);
__decorate([
    Input('readonly'),
    __metadata("design:type", Object)
], InputComponent.prototype, "readonly", void 0);
__decorate([
    Input('placeholder'),
    __metadata("design:type", Object)
], InputComponent.prototype, "placeholder", void 0);
__decorate([
    Input('type'),
    __metadata("design:type", String)
], InputComponent.prototype, "type", void 0);
__decorate([
    Input('default-value'),
    __metadata("design:type", Object)
], InputComponent.prototype, "defaultValue", void 0);
__decorate([
    Input('size'),
    __metadata("design:type", Number)
], InputComponent.prototype, "size", void 0);
__decorate([
    Input('prepend'),
    __metadata("design:type", String)
], InputComponent.prototype, "prepend", void 0);
__decorate([
    Input('append'),
    __metadata("design:type", String)
], InputComponent.prototype, "append", void 0);
__decorate([
    Input('clear-button'),
    __metadata("design:type", Boolean)
], InputComponent.prototype, "clearButton", void 0);
__decorate([
    Input('clear-button-icon'),
    __metadata("design:type", String)
], InputComponent.prototype, "clearButtonIcon", void 0);
__decorate([
    Input('reveal-button'),
    __metadata("design:type", Boolean)
], InputComponent.prototype, "revealButton", void 0);
__decorate([
    Input('reveal-button-icon'),
    __metadata("design:type", String)
], InputComponent.prototype, "revealButtonIcon", void 0);
__decorate([
    Input('custom-buttons'),
    __metadata("design:type", Array)
], InputComponent.prototype, "customButtons", void 0);
__decorate([
    Input('search-button'),
    __metadata("design:type", Boolean)
], InputComponent.prototype, "searchButton", void 0);
__decorate([
    Input('search-button-icon'),
    __metadata("design:type", String)
], InputComponent.prototype, "searchButtonIcon", void 0);
__decorate([
    Input('autocomplete'),
    __metadata("design:type", Array)
], InputComponent.prototype, "autocomplete", void 0);
__decorate([
    Input('autocomplete-list-height'),
    __metadata("design:type", Number)
], InputComponent.prototype, "autocompleteListHeight", void 0);
__decorate([
    Input('cls-component'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsComponent", void 0);
__decorate([
    Input('cls-input'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsInput", void 0);
__decorate([
    Input('cls-prepend'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsPrepend", void 0);
__decorate([
    Input('cls-append'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsAppend", void 0);
__decorate([
    Input('cls-clear-button'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsClearButton", void 0);
__decorate([
    Input('cls-reveal-button'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsRevealButton", void 0);
__decorate([
    Input('cls-custom-button'),
    __metadata("design:type", String)
], InputComponent.prototype, "clsCustomButton", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], InputComponent.prototype, "input", void 0);
InputComponent = InputComponent_1 = __decorate([
    Component({
        selector: 'm4-input',
        template: "<input [type]=\"type\" #input\n\n       [readonly]=\"readonly\"\n       [placeholder]=\"placeholder\"\n\n       [attr.data-default-value]=\"defaultValue\"\n       [attr.data-size]=\"size\"\n       [attr.data-prepend]=\"prepend\"\n       [attr.data-append]=\"append\"\n       [attr.data-clear-button]=\"clearButton\"\n       [attr.data-clear-button-icon]=\"clearButtonIcon\"\n       [attr.data-reveal-button]=\"revealButton\"\n       [attr.data-reveal-button-icon]=\"revealButtonIcon\"\n       [attr.data-search-button]=\"searchButton\"\n       [attr.data-search-button-icon]=\"searchButtonIcon\"\n       data-search-button-click=\"custom\"\n       [attr.data-autocomplete]=\"autocomplete?.join(',')\"\n       [attr.data-autocomplete-list-height]=\"autocompleteListHeight\"\n\n       [attr.data-cls-component]=\"clsComponent\"\n       [attr.data-cls-input]=\"clsInput\"\n       [attr.data-cls-prepend]=\"clsPrepend\"\n       [attr.data-cls-append]=\"clsAppend\"\n       [attr.data-cls-clear-button]=\"clsClearButton\"\n       [attr.data-cls-reveal-button]=\"clsRevealButton\"\n       [attr.data-cls-custom-button]=\"clsCustomButton\">\n",
        providers: [DefaultValueAccessor.get(InputComponent_1), TypeAlias.get(InputComponent_1)],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: ["m4-input .autocomplete-list{z-index:1000}"]
    })
], InputComponent);

var MaterialInputComponent_1;
let MaterialInputComponent = MaterialInputComponent_1 = class MaterialInputComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.type = 'text';
        this.placeholder = '';
        this.readonly = false;
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
            this.materialInput = this.clonedElement.materialinput().data('materialinput');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('keydown change', () => {
                asapScheduler.schedule(() => {
                    let newValue = this.clonedElement.val();
                    if (this.type === 'number') {
                        newValue = +newValue;
                    }
                    this.changeValue(newValue);
                }, 1);
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.clonedElement.attr('disabled', 'disabled');
            this.materialInput.disable();
        }
        else {
            this.clonedElement.removeAttr('disabled');
            this.materialInput.enable();
        }
    }
    newValue() {
        if (!this.materialInput) {
            return;
        }
        this.clonedElement.val(this.innerValue);
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
};
__decorate([
    Input('type'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "type", void 0);
__decorate([
    Input('placeholder'),
    __metadata("design:type", Object)
], MaterialInputComponent.prototype, "placeholder", void 0);
__decorate([
    Input('readonly'),
    __metadata("design:type", Object)
], MaterialInputComponent.prototype, "readonly", void 0);
__decorate([
    Input('label'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "label", void 0);
__decorate([
    Input('informer'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "informer", void 0);
__decorate([
    Input('icon'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "icon", void 0);
__decorate([
    Input('cls-line'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "clsLine", void 0);
__decorate([
    Input('cls-label'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "clsLabel", void 0);
__decorate([
    Input('cls-informer'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "clsInformer", void 0);
__decorate([
    Input('cls-icon'),
    __metadata("design:type", String)
], MaterialInputComponent.prototype, "clsIcon", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], MaterialInputComponent.prototype, "input", void 0);
MaterialInputComponent = MaterialInputComponent_1 = __decorate([
    Component({
        selector: 'm4-material-input',
        template: "<input [type]=\"type\" #input\n\n\n       [placeholder]=\"placeholder\"\n       [readonly]=\"readonly\"\n\n       [attr.data-icon]=\"icon\"\n       [attr.data-label]=\"label\"\n       [attr.data-informer]=\"informer\"\n       [attr.data-cls-line]=\"clsLine\"\n       [attr.data-cls-label]=\"clsLabel\"\n       [attr.data-cls-informer]=\"clsInformer\"\n       [attr.data-cls-icon]=\"clsIcon\">\n",
        providers: [DefaultValueAccessor.get(MaterialInputComponent_1), TypeAlias.get(MaterialInputComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], MaterialInputComponent);

var TextareaComponent_1;
let TextareaComponent = TextareaComponent_1 = class TextareaComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.placeholder = '';
        this.readonly = false;
    }
    createControl() {
        return new Promise((complete) => {
            const originalElement = $(this.textarea.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.parent().remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.textareaObj = this.clonedElement.textarea().data('textarea');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('keydown change', () => {
                asapScheduler.schedule(() => {
                    this.changeValue(this.clonedElement.val());
                });
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.textareaObj.disable();
        }
        else {
            this.textareaObj.enable();
        }
    }
    newValue() {
        if (!this.textareaObj) {
            return;
        }
        this.clonedElement.val(this.innerValue);
        this.textareaObj.resize();
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
};
__decorate([
    Input('placeholder'),
    __metadata("design:type", Object)
], TextareaComponent.prototype, "placeholder", void 0);
__decorate([
    Input('readonly'),
    __metadata("design:type", Object)
], TextareaComponent.prototype, "readonly", void 0);
__decorate([
    Input('default-value'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "defaultValue", void 0);
__decorate([
    Input('prepend'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "prepend", void 0);
__decorate([
    Input('append'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "append", void 0);
__decorate([
    Input('clear-button'),
    __metadata("design:type", Boolean)
], TextareaComponent.prototype, "clearButton", void 0);
__decorate([
    Input('clear-button-icon'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "clearButtonIcon", void 0);
__decorate([
    Input('auto-size'),
    __metadata("design:type", Boolean)
], TextareaComponent.prototype, "autoSize", void 0);
__decorate([
    Input('cls-component'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "clsComponent", void 0);
__decorate([
    Input('cls-textarea'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "clsTextarea", void 0);
__decorate([
    Input('cls-prepend'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "clsPrepend", void 0);
__decorate([
    Input('cls-append'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "clsAppend", void 0);
__decorate([
    ViewChild('textarea', { static: true }),
    __metadata("design:type", ElementRef)
], TextareaComponent.prototype, "textarea", void 0);
TextareaComponent = TextareaComponent_1 = __decorate([
    Component({
        selector: 'm4-textarea',
        template: "<textarea #textarea\n\n\n          [placeholder]=\"placeholder\"\n          [readonly]=\"readonly\"\n\n          [attr.data-default-value]=\"defaultValue\"\n          [attr.data-prepend]=\"prepend\"\n          [attr.data-append]=\"append\"\n          [attr.data-clear-button]=\"clearButton\"\n          [attr.data-clear-button-icon]=\"clearButtonIcon\"\n          [attr.data-auto-size]=\"autoSize\"\n\n          [attr.data-cls-component]=\"clsComponent\"\n          [attr.data-cls-textarea]=\"clsTextarea\"\n          [attr.data-cls-prepend]=\"clsPrepend\"\n          [attr.data-cls-append]=\"clsAppend\">\n</textarea>\n",
        providers: [DefaultValueAccessor.get(TextareaComponent_1), TypeAlias.get(TextareaComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], TextareaComponent);

var CheckboxComponent_1;
let CheckboxComponent = CheckboxComponent_1 = class CheckboxComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.readonly = false;
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
            this.checkbox = this.clonedElement.checkbox().data('checkbox');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('change', () => {
                this.changeValue(this.clonedElement.prop('checked'));
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.clonedElement.attr('disabled', 'disabled');
            this.checkbox.disable();
        }
        else {
            this.clonedElement.removeAttr('disabled');
            this.checkbox.enable();
        }
    }
    newValue() {
        if (!this.checkbox) {
            return;
        }
        this.clonedElement.prop('checked', this.innerValue);
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
};
__decorate([
    Input('value'),
    __metadata("design:type", Object)
], CheckboxComponent.prototype, "value", void 0);
__decorate([
    Input('readonly'),
    __metadata("design:type", Object)
], CheckboxComponent.prototype, "readonly", void 0);
__decorate([
    Input('style'),
    __metadata("design:type", Number)
], CheckboxComponent.prototype, "style", void 0);
__decorate([
    Input('caption'),
    __metadata("design:type", String)
], CheckboxComponent.prototype, "caption", void 0);
__decorate([
    Input('caption-position'),
    __metadata("design:type", String)
], CheckboxComponent.prototype, "captionPosition", void 0);
__decorate([
    Input('indeterminate'),
    __metadata("design:type", Boolean)
], CheckboxComponent.prototype, "indeterminate", void 0);
__decorate([
    Input('cls-checkbox'),
    __metadata("design:type", String)
], CheckboxComponent.prototype, "clsCheckbox", void 0);
__decorate([
    Input('cls-caption'),
    __metadata("design:type", String)
], CheckboxComponent.prototype, "clsCaption", void 0);
__decorate([
    Input('cls-check'),
    __metadata("design:type", String)
], CheckboxComponent.prototype, "clsCheck", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], CheckboxComponent.prototype, "input", void 0);
CheckboxComponent = CheckboxComponent_1 = __decorate([
    Component({
        selector: 'm4-checkbox',
        template: "<input type=\"checkbox\" #input\n\n\n       [readonly]=\"readonly\"\n\n       [attr.data-style]=\"style\"\n       [attr.data-caption]=\"caption\"\n       [attr.data-caption-position]=\"captionPosition\"\n       [attr.data-indeterminate]=\"indeterminate\"\n       [attr.data-cls-radio]=\"clsCheckbox\"\n       [attr.data-cls-caption]=\"clsCaption\"\n       [attr.data-cls-check]=\"clsCheck\">\n",
        providers: [DefaultValueAccessor.get(CheckboxComponent_1), TypeAlias.get(CheckboxComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        styles: [".checkbox.primary input[data-indeterminate=true]~.check,.checkbox.primary input[type=checkbox]:checked~.check{background-color:#0366d6;border-color:#0366d6}.checkbox.primary .check{border-color:#0366d6}.checkbox.secondary input[data-indeterminate=true]~.check,.checkbox.secondary input[type=checkbox]:checked~.check{background-color:#607d8b;border-color:#607d8b}.checkbox.secondary .check{border-color:#607d8b}.checkbox.success input[data-indeterminate=true]~.check,.checkbox.success input[type=checkbox]:checked~.check{background-color:#60a917;border-color:#60a917}.checkbox.success .check{border-color:#60a917}.checkbox.alert input[data-indeterminate=true]~.check,.checkbox.alert input[type=checkbox]:checked~.check{background-color:#ce352c;border-color:#ce352c}.checkbox.alert .check{border-color:#ce352c}.checkbox.warning input[data-indeterminate=true]~.check,.checkbox.warning input[type=checkbox]:checked~.check{background-color:#ff9447;border-color:#ff9447}.checkbox.warning .check{border-color:#ff9447}.checkbox.yellow input[data-indeterminate=true]~.check,.checkbox.yellow input[type=checkbox]:checked~.check{background-color:#ffe484;border-color:#ffe484}.checkbox.yellow .check{border-color:#ffe484}.checkbox.info input[data-indeterminate=true]~.check,.checkbox.info input[type=checkbox]:checked~.check{background-color:#5ebdec;border-color:#5ebdec}.checkbox.info .check{border-color:#5ebdec}.checkbox.dark input[data-indeterminate=true]~.check,.checkbox.dark input[type=checkbox]:checked~.check{background-color:#505050;border-color:#505050}.checkbox.dark .check{border-color:#505050}.checkbox.light input[data-indeterminate=true]~.check,.checkbox.light input[type=checkbox]:checked~.check{background-color:#f8f8f8;border-color:#f8f8f8}.checkbox.light .check{border-color:#f8f8f8}"]
    })
], CheckboxComponent);

var RadioComponent_1;
let RadioComponent = RadioComponent_1 = class RadioComponent extends ControlBase {
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
            this.clonedElement.attr('name', this.name);
            this.radio = this.clonedElement.radio().data('radio');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('change', () => {
                this.changeValue(this.value);
            });
            complete();
        });
    }
    disable(disabled) {
        asapScheduler.schedule(() => {
            if (disabled) {
                this.clonedElement.parent().addClass('disabled');
                this.clonedElement.attr('disabled', 'disabled');
            }
            else {
                this.clonedElement.parent().removeClass('disabled');
                this.clonedElement.removeAttr('disabled');
            }
        });
    }
    newValue() {
        if (!this.radio) {
            return;
        }
        if (ObjectHelper.compare(this.innerValue, this.value)) {
            this.clonedElement.prop('checked', true);
        }
        else {
            this.clonedElement.prop('checked', false);
        }
    }
    newClassValue(newClasses, oldClasses) {
        asapScheduler.schedule(() => {
            if (this.clonedElement) {
                const target = this.clonedElement.parent();
                oldClasses.forEach((cls) => {
                    target.removeClass(cls);
                });
                newClasses.forEach((cls) => {
                    target.addClass(cls);
                });
            }
        });
    }
};
__decorate([
    Input('name'),
    __metadata("design:type", String)
], RadioComponent.prototype, "name", void 0);
__decorate([
    Input('value'),
    __metadata("design:type", Object)
], RadioComponent.prototype, "value", void 0);
__decorate([
    Input('style'),
    __metadata("design:type", Number)
], RadioComponent.prototype, "style", void 0);
__decorate([
    Input('caption'),
    __metadata("design:type", String)
], RadioComponent.prototype, "caption", void 0);
__decorate([
    Input('caption-position'),
    __metadata("design:type", String)
], RadioComponent.prototype, "captionPosition", void 0);
__decorate([
    Input('cls-radio'),
    __metadata("design:type", String)
], RadioComponent.prototype, "clsRadio", void 0);
__decorate([
    Input('cls-caption'),
    __metadata("design:type", String)
], RadioComponent.prototype, "clsCaption", void 0);
__decorate([
    Input('cls-check'),
    __metadata("design:type", String)
], RadioComponent.prototype, "clsCheck", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], RadioComponent.prototype, "input", void 0);
RadioComponent = RadioComponent_1 = __decorate([
    Component({
        selector: 'm4-radio',
        template: "<input #input\n\n\n       [attr.data-style]=\"style\"\n       [attr.data-caption]=\"caption\"\n       [attr.data-caption-position]=\"captionPosition\"\n\n       [attr.data-cls-radio]=\"clsRadio\"\n       [attr.data-cls-caption]=\"clsCaption\"\n       [attr.data-cls-check]=\"clsCheck\">\n",
        providers: [DefaultValueAccessor.get(RadioComponent_1), TypeAlias.get(RadioComponent_1)],
        changeDetection: ChangeDetectionStrategy.Default,
        encapsulation: ViewEncapsulation.None,
        styles: [".radio.primary input[type=radio]:checked~.check{background-color:#0366d6;border-color:#0366d6}.radio.primary .check{border-color:#0366d6}.radio.secondary input[type=radio]:checked~.check{background-color:#607d8b;border-color:#607d8b}.radio.secondary .check{border-color:#607d8b}.radio.success input[type=radio]:checked~.check{background-color:#60a917;border-color:#60a917}.radio.success .check{border-color:#60a917}.radio.alert input[type=radio]:checked~.check{background-color:#ce352c;border-color:#ce352c}.radio.alert .check{border-color:#ce352c}.radio.warning input[type=radio]:checked~.check{background-color:#ff9447;border-color:#ff9447}.radio.warning .check{border-color:#ff9447}.radio.yellow input[type=radio]:checked~.check{background-color:#ffe484;border-color:#ffe484}.radio.yellow .check{border-color:#ffe484}.radio.info input[type=radio]:checked~.check{background-color:#5ebdec;border-color:#5ebdec}.radio.info .check{border-color:#5ebdec}.radio.dark input[type=radio]:checked~.check{background-color:#505050;border-color:#505050}.radio.dark .check{border-color:#505050}.radio.light input[type=radio]:checked~.check{background-color:#f8f8f8;border-color:#f8f8f8}.radio.light .check{border-color:#f8f8f8}"]
    })
], RadioComponent);

var RadioGroupComponent_1;
let RadioGroupComponent = RadioGroupComponent_1 = class RadioGroupComponent extends ControlBase {
    constructor(element, cdRef) {
        super(element, cdRef);
        this.name = StringHelper.guid();
    }
    createControl() {
        return new Promise((complete) => {
            asapScheduler.schedule(() => {
                this.radios = !!this.options ? this.radiosView : this.radiosContent;
                const radioCreations = this.radios.map((item) => {
                    return new Promise((radioComplete) => {
                        item.name = this.name;
                        item.registerOnChange((v) => {
                            this.changeValue(v);
                            this.newValue();
                        });
                        item.registerOnTouched(() => {
                            this.touchCallback();
                        });
                        asapScheduler.schedule(() => {
                            item.createControl().then(() => {
                                radioComplete();
                            });
                        }, 1);
                    });
                });
                Promise.all(radioCreations).then(() => {
                    this.callNewValue();
                    complete();
                });
            });
        });
    }
    disable(disabled) {
        this.radios.forEach((item) => {
            asapScheduler.schedule(() => {
                item.disable(disabled);
            }, 1);
        });
    }
    newValue() {
        if (!this.radios) {
            return;
        }
        this.radios.forEach((item) => {
            item.writeValue(this.innerValue);
        });
    }
    newClassValue(newClasses, oldClasses) {
        this.radios.forEach((item) => {
            asapScheduler.schedule(() => {
                item.newClassValue(newClasses, oldClasses);
            }, 1);
        });
    }
};
RadioGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], RadioGroupComponent.prototype, "options", void 0);
__decorate([
    ContentChildren(forwardRef(() => RadioComponent), { descendants: true }),
    __metadata("design:type", QueryList)
], RadioGroupComponent.prototype, "radiosContent", void 0);
__decorate([
    ViewChildren(forwardRef(() => RadioComponent)),
    __metadata("design:type", QueryList)
], RadioGroupComponent.prototype, "radiosView", void 0);
RadioGroupComponent = RadioGroupComponent_1 = __decorate([
    Component({
        selector: 'm4-radio-group',
        template: "<ng-container *ngIf=\"options; else noOptions\">\n  <m4-radio *ngFor=\"let option of options | objectKeys\" [value]=\"options[option]\"\n            [caption]=\"option\" [name]=\"name\"></m4-radio>\n</ng-container>\n<ng-template #noOptions>\n  <ng-content></ng-content>\n</ng-template>\n",
        providers: [DefaultValueAccessor.get(RadioGroupComponent_1), TypeAlias.get(RadioGroupComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    }),
    __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
], RadioGroupComponent);

var SwitchComponent_1;
let SwitchComponent = SwitchComponent_1 = class SwitchComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.readonly = false;
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
            this.switch = this.clonedElement.switch().data('switch');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('change', () => {
                this.changeValue(this.clonedElement.prop('checked'));
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.clonedElement.attr('disabled', 'disabled');
            this.switch.disable();
        }
        else {
            this.clonedElement.removeAttr('disabled');
            this.switch.enable();
        }
    }
    newValue() {
        if (!this.switch) {
            return;
        }
        this.clonedElement.prop('checked', this.innerValue);
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
};
__decorate([
    Input('material'),
    __metadata("design:type", Boolean)
], SwitchComponent.prototype, "material", void 0);
__decorate([
    Input('readonly'),
    __metadata("design:type", Object)
], SwitchComponent.prototype, "readonly", void 0);
__decorate([
    Input('caption'),
    __metadata("design:type", String)
], SwitchComponent.prototype, "caption", void 0);
__decorate([
    Input('caption-position'),
    __metadata("design:type", String)
], SwitchComponent.prototype, "captionPosition", void 0);
__decorate([
    Input('cls-switch'),
    __metadata("design:type", String)
], SwitchComponent.prototype, "clsSwitch", void 0);
__decorate([
    Input('cls-caption'),
    __metadata("design:type", String)
], SwitchComponent.prototype, "clsCaption", void 0);
__decorate([
    Input('cls-check'),
    __metadata("design:type", String)
], SwitchComponent.prototype, "clsCheck", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], SwitchComponent.prototype, "input", void 0);
SwitchComponent = SwitchComponent_1 = __decorate([
    Component({
        selector: 'm4-switch',
        template: "<input type=\"checkbox\" #input\n\n\n       [readonly]=\"readonly\"\n\n       [attr.data-material]=\"material\"\n       [attr.data-caption]=\"caption\"\n       [attr.data-caption-position]=\"captionPosition\"\n\n       [attr.data-cls-switch]=\"clsSwitch\"\n       [attr.data-cls-caption]=\"clsCaption\"\n       [attr.data-cls-check]=\"clsCheck\">\n",
        providers: [DefaultValueAccessor.get(SwitchComponent_1), TypeAlias.get(SwitchComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        styles: [".switch.primary input[type=checkbox]:checked~.check{background-color:#0366d6;border-color:#0366d6}.switch.primary input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.primary .check{border-color:#0366d6}.switch.primary .check::after{background-color:#0366d6;border-color:#0366d6}.switch.secondary input[type=checkbox]:checked~.check{background-color:#607d8b;border-color:#607d8b}.switch.secondary input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.secondary .check{border-color:#607d8b}.switch.secondary .check::after{background-color:#607d8b;border-color:#607d8b}.switch.success input[type=checkbox]:checked~.check{background-color:#60a917;border-color:#60a917}.switch.success input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.success .check{border-color:#60a917}.switch.success .check::after{background-color:#60a917;border-color:#60a917}.switch.alert input[type=checkbox]:checked~.check{background-color:#ce352c;border-color:#ce352c}.switch.alert input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.alert .check{border-color:#ce352c}.switch.alert .check::after{background-color:#ce352c;border-color:#ce352c}.switch.warning input[type=checkbox]:checked~.check{background-color:#ff9447;border-color:#ff9447}.switch.warning input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.warning .check{border-color:#ff9447}.switch.warning .check::after{background-color:#ff9447;border-color:#ff9447}.switch.yellow input[type=checkbox]:checked~.check{background-color:#ffe484;border-color:#ffe484}.switch.yellow input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.yellow .check{border-color:#ffe484}.switch.yellow .check::after{background-color:#ffe484;border-color:#ffe484}.switch.info input[type=checkbox]:checked~.check{background-color:#5ebdec;border-color:#5ebdec}.switch.info input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.info .check{border-color:#5ebdec}.switch.info .check::after{background-color:#5ebdec;border-color:#5ebdec}.switch.dark input[type=checkbox]:checked~.check{background-color:#505050;border-color:#505050}.switch.dark input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.dark .check{border-color:#505050}.switch.dark .check::after{background-color:#505050;border-color:#505050}.switch.light input[type=checkbox]:checked~.check{background-color:#f8f8f8;border-color:#f8f8f8}.switch.light input[type=checkbox]:checked~.check::after{background-color:#fff;border-color:#fff}.switch.light .check{border-color:#f8f8f8}.switch.light .check::after{background-color:#f8f8f8;border-color:#f8f8f8}"]
    })
], SwitchComponent);

var FileInputComponent_1;
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

var KeypadComponent_1;
let KeypadComponent = KeypadComponent_1 = class KeypadComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.type = 'text';
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
            this.keypad = this.clonedElement.keypad().data('keypad');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('change', () => {
                asapScheduler.schedule(() => {
                    let newValue = this.clonedElement.val();
                    if (this.type === 'number') {
                        newValue = +newValue;
                    }
                    this.changeValue(newValue);
                });
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.keypad.disable();
        }
        else {
            this.keypad.enable();
        }
    }
    newValue() {
        if (!this.keypad) {
            return;
        }
        this.keypad.val(this.innerValue ? this.innerValue.toString() : '');
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
};
__decorate([
    Input('type'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "type", void 0);
__decorate([
    Input('key-size'),
    __metadata("design:type", Number)
], KeypadComponent.prototype, "keySize", void 0);
__decorate([
    Input('keys'),
    __metadata("design:type", Array)
], KeypadComponent.prototype, "keys", void 0);
__decorate([
    Input('key-length'),
    __metadata("design:type", Number)
], KeypadComponent.prototype, "keyLength", void 0);
__decorate([
    Input('shuffle'),
    __metadata("design:type", Boolean)
], KeypadComponent.prototype, "shuffle", void 0);
__decorate([
    Input('shuffle-count'),
    __metadata("design:type", Number)
], KeypadComponent.prototype, "shuffleCount", void 0);
__decorate([
    Input('position'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "position", void 0);
__decorate([
    Input('dynamic-position'),
    __metadata("design:type", Boolean)
], KeypadComponent.prototype, "dynamicPosition", void 0);
__decorate([
    Input('service-buttons'),
    __metadata("design:type", Boolean)
], KeypadComponent.prototype, "serviceButtons", void 0);
__decorate([
    Input('show-value'),
    __metadata("design:type", Boolean)
], KeypadComponent.prototype, "showValue", void 0);
__decorate([
    Input('open'),
    __metadata("design:type", Boolean)
], KeypadComponent.prototype, "open", void 0);
__decorate([
    Input('size-as-keys'),
    __metadata("design:type", Boolean)
], KeypadComponent.prototype, "sizeAsKeys", void 0);
__decorate([
    Input('cls-keypad'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsKeypad", void 0);
__decorate([
    Input('cls-input'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsInput", void 0);
__decorate([
    Input('cls-keys'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsKeys", void 0);
__decorate([
    Input('cls-key'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsKey", void 0);
__decorate([
    Input('cls-service-key'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsServiceKey", void 0);
__decorate([
    Input('cls-backspace'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsBackspace", void 0);
__decorate([
    Input('cls-clear'),
    __metadata("design:type", String)
], KeypadComponent.prototype, "clsClear", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], KeypadComponent.prototype, "input", void 0);
KeypadComponent = KeypadComponent_1 = __decorate([
    Component({
        selector: 'm4-keypad',
        template: "<input [type]=\"type\" #input\n\n\n       [attr.data-key-size]=\"keySize\"\n       [attr.data-keys]=\"keys?.join(',')\"\n       [attr.data-key-length]=\"keyLength\"\n       [attr.data-shuffle]=\"shuffle\"\n       [attr.data-shuffle-count]=\"shuffleCount\"\n       [attr.data-position]=\"position\"\n       [attr.data-dynamic-position]=\"dynamicPosition\"\n       [attr.data-service-buttons]=\"serviceButtons\"\n       [attr.data-show-value]=\"showValue\"\n       [attr.data-open]=\"open\"\n       [attr.data-size-as-keys]=\"sizeAsKeys\"\n\n       [attr.data-cls-keypad]=\"clsKeypad\"\n       [attr.data-cls-input]=\"clsInput\"\n       [attr.data-cls-keys]=\"clsKeys\"\n       [attr.data-cls-key]=\"clsKey\"\n       [attr.data-cls-service-key]=\"clsServiceKey\"\n       [attr.data-cls-backspace]=\"clsBackspace\"\n       [attr.data-cls-clear]=\"clsClear\">\n",
        providers: [DefaultValueAccessor.get(KeypadComponent_1), TypeAlias.get(KeypadComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], KeypadComponent);

var SliderComponent_1;
let SliderComponent = SliderComponent_1 = class SliderComponent extends ControlBase {
    createControl() {
        return new Promise((complete) => {
            const originalElement = $(this.input.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.parent().parent().find('.slider-min-max').remove();
                this.clonedElement.parent().remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.slider = this.clonedElement.slider().data('slider');
            this.clonedElement.parent().find('button.marker').one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('change', () => {
                asapScheduler.schedule(() => {
                    this.changeValue(+this.clonedElement.val());
                });
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.clonedElement.parent().addClass('disabled');
        }
        else {
            this.clonedElement.parent().removeClass('disabled');
        }
    }
    newValue() {
        if (!this.slider) {
            return;
        }
        this.slider.val(this.innerValue);
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
};
__decorate([
    Input('min'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "min", void 0);
__decorate([
    Input('max'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "max", void 0);
__decorate([
    Input('show-min-max'),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "showMinMax", void 0);
__decorate([
    Input('accuracy'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "accuracy", void 0);
__decorate([
    Input('buffer'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "buffer", void 0);
__decorate([
    Input('hint'),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "hint", void 0);
__decorate([
    Input('hint-always'),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "hintAlways", void 0);
__decorate([
    Input('hint-position'),
    __metadata("design:type", String)
], SliderComponent.prototype, "hintPosition", void 0);
__decorate([
    Input('hint-mask'),
    __metadata("design:type", String)
], SliderComponent.prototype, "hintMask", void 0);
__decorate([
    Input('vertical'),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "vertical", void 0);
__decorate([
    Input('size'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "size", void 0);
__decorate([
    Input('thin'),
    __metadata("design:type", String)
], SliderComponent.prototype, "thin", void 0);
__decorate([
    Input('cycle-marker'),
    __metadata("design:type", Boolean)
], SliderComponent.prototype, "cycleMarker", void 0);
__decorate([
    Input('cls-slider'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsSlider", void 0);
__decorate([
    Input('cls-backside'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsBackside", void 0);
__decorate([
    Input('cls-complete'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsComplete", void 0);
__decorate([
    Input('cls-buffer'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsBuffer", void 0);
__decorate([
    Input('cls-marker'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsMarker", void 0);
__decorate([
    Input('cls-hint'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsHint", void 0);
__decorate([
    Input('cls-min-max'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsMinMax", void 0);
__decorate([
    Input('cls-min'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsMin", void 0);
__decorate([
    Input('cls-max'),
    __metadata("design:type", String)
], SliderComponent.prototype, "clsMax", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], SliderComponent.prototype, "input", void 0);
SliderComponent = SliderComponent_1 = __decorate([
    Component({
        selector: 'm4-slider',
        template: "<input type=\"number\" #input\n\n\n       [attr.data-min]=\"min\"\n       [attr.data-max]=\"max\"\n       [attr.data-show-min-max]=\"showMinMax\"\n       [attr.data-accuracy]=\"accuracy\"\n       [attr.data-buffer]=\"buffer\"\n       [attr.data-hint]=\"hint\"\n       [attr.data-hint-always]=\"hintAlways\"\n       [attr.data-hint-position]=\"hintPosition\"\n       [attr.data-hint-mask]=\"hintMask\"\n       [attr.data-vertical]=\"vertical\"\n       [attr.data-size]=\"size\"\n\n       [attr.data-cls-slider]=\"clsSlider\"\n       [attr.data-cls-backside]=\"clsBackside\"\n       [attr.data-cls-complete]=\"clsComplete\"\n       [attr.data-cls-buffer]=\"clsBuffer\"\n       [attr.data-cls-marker]=\"clsMarker\"\n       [attr.data-cls-hint]=\"clsHint\"\n       [attr.data-cls-min-max]=\"clsMinMax\"\n       [attr.data-cls-min]=\"clsMin\"\n       [attr.data-cls-max]=\"clsMax\"\n\n       [class.thin]=\"thin === 'thin'\"\n       [class.ultra-thin]=\"thin === 'ultra-thin'\"\n       [class.cycle-marker]=\"cycleMarker\">\n",
        providers: [DefaultValueAccessor.get(SliderComponent_1), TypeAlias.get(SliderComponent_1)],
        encapsulation: ViewEncapsulation.None,
        styles: [".slider.primary .complete{background-color:#0366d6}.slider.primary .backside{background-color:#3969a0}.slider.secondary .complete{background-color:#607d8b}.slider.secondary .backside{background-color:#767676}.slider.success .complete{background-color:#60a917}.slider.success .backside{background-color:#607947}.slider.alert .complete{background-color:#ce352c}.slider.alert .backside{background-color:#906d6b}.slider.warning .complete{background-color:#ff9447}.slider.warning .backside{background-color:#d19c75}.slider.yellow .complete{background-color:#ffe484}.slider.yellow .backside{background-color:#e0d3a3}.slider.info .complete{background-color:#5ebdec}.slider.info .backside{background-color:#8baebf}.slider.dark .backside,.slider.dark .complete{background-color:#505050}.slider.light .backside,.slider.light .complete{background-color:#f8f8f8}m4-slider .disabled .complete,m4-slider .disabled button.marker{background-color:#989898}"]
    })
], SliderComponent);

var SpinnerComponent_1;
let SpinnerComponent = SpinnerComponent_1 = class SpinnerComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.step = 1;
        this.fixed = 0;
        this.hideCursor = false;
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
            this.spinner = this.clonedElement.spinner().data('spinner');
            this.clonedElement.parent().off('mousedown mouseup keydown change');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.clonedElement.on('change', () => {
                if (this.disableUpdate) {
                    return;
                }
                const newVal = +this.clonedElement.val();
                this.changeValue(newVal);
                this.setValue(newVal);
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.spinner.disable();
        }
        else {
            this.spinner.enable();
        }
    }
    setValue(newValue) {
        if (this.minValue !== undefined && this.minValue !== null && newValue < this.minValue) {
            newValue = this.minValue;
            asapScheduler.schedule(() => {
                this.changeValue(newValue);
            });
        }
        if (this.maxValue !== undefined && this.maxValue !== null && newValue > this.maxValue) {
            newValue = this.maxValue;
            asapScheduler.schedule(() => {
                this.changeValue(newValue);
            });
        }
        this.clonedElement.val(newValue.toFixed(this.fixed));
    }
    newValue() {
        if (!this.spinner || !this.innerValue) {
            return;
        }
        this.setValue(this.innerValue);
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
};
__decorate([
    Input('step'),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "step", void 0);
__decorate([
    Input('plus-icon'),
    __metadata("design:type", String)
], SpinnerComponent.prototype, "plusIcon", void 0);
__decorate([
    Input('minus-icon'),
    __metadata("design:type", String)
], SpinnerComponent.prototype, "minusIcon", void 0);
__decorate([
    Input('buttons-position'),
    __metadata("design:type", String)
], SpinnerComponent.prototype, "buttonsPosition", void 0);
__decorate([
    Input('min-value'),
    __metadata("design:type", Number)
], SpinnerComponent.prototype, "minValue", void 0);
__decorate([
    Input('max-value'),
    __metadata("design:type", Number)
], SpinnerComponent.prototype, "maxValue", void 0);
__decorate([
    Input('fixed'),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "fixed", void 0);
__decorate([
    Input('hide-cursor'),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "hideCursor", void 0);
__decorate([
    Input('cls-spinner'),
    __metadata("design:type", String)
], SpinnerComponent.prototype, "clsSpinner", void 0);
__decorate([
    Input('cls-spinner-input'),
    __metadata("design:type", String)
], SpinnerComponent.prototype, "clsSpinnerInput", void 0);
__decorate([
    Input('cls-spinner-button'),
    __metadata("design:type", String)
], SpinnerComponent.prototype, "clsSpinnerButton", void 0);
__decorate([
    Input('cls-spinner-button-plus'),
    __metadata("design:type", String)
], SpinnerComponent.prototype, "clsSpinnerButtonPlus", void 0);
__decorate([
    Input('cls-spinner-button-minus'),
    __metadata("design:type", String)
], SpinnerComponent.prototype, "clsSpinnerButtonMinus", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], SpinnerComponent.prototype, "input", void 0);
SpinnerComponent = SpinnerComponent_1 = __decorate([
    Component({
        selector: 'm4-spinner',
        template: "<input type=\"text\" #input\n\n\n       [attr.data-step]=\"step\"\n       [attr.data-fixed]=\"fixed\"\n       [attr.data-plus-icon]=\"plusIcon\"\n       [attr.data-minus-icon]=\"minusIcon\"\n       [attr.data-buttons-position]=\"buttonsPosition\"\n\n       [attr.data-hide-cursor]=\"hideCursor\"\n       [style.textShadow]=\"hideCursor ? '0 0 0 #1d1d1d' : null\"\n\n       [attr.data-cls-spinner]=\"clsSpinner\"\n       [attr.data-cls-spinner-input]=\"clsSpinnerInput\"\n       [attr.data-cls-spinner-button]=\"clsSpinnerButton\"\n       [attr.data-cls-spinner-button-minus]=\"clsSpinnerButtonMinus\"\n       [attr.data-cls-spinner-button-plus]=\"clsSpinnerButtonPlus\" >\n",
        providers: [DefaultValueAccessor.get(SpinnerComponent_1), TypeAlias.get(SpinnerComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], SpinnerComponent);

var RatingComponent_1;
let RatingComponent = RatingComponent_1 = class RatingComponent extends ControlBase {
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
            this.rating = this.clonedElement.rating().data('rating');
            this.clonedElement.parent().find('ul li').one('click', () => {
                this.touchCallback();
            });
            this.clonedElement.on('change', () => {
                const newValue = this.clonedElement.val();
                const valueParsed = +newValue;
                if (!Number.isNaN(valueParsed)) {
                    this.changeValue(valueParsed);
                }
                else {
                    this.changeValue(newValue);
                }
            });
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.clonedElement.parent().parent().addClass('disabled');
        }
        else {
            this.clonedElement.parent().parent().removeClass('disabled');
        }
    }
    newValue() {
        if (!this.rating) {
            return;
        }
        const stars = this.clonedElement.parent().find('ul li');
        stars.removeClass('on');
        if (this.values) {
            const index = this.values.indexOf(this.innerValue);
            if (index !== -1) {
                for (let i = 0; i <= index; i++) {
                    $(stars.get(i)).addClass('on');
                }
            }
        }
        else {
            this.rating.val(this.innerValue);
        }
    }
    newClassValue(newClasses, oldClasses) {
        asapScheduler.schedule(() => {
            if (this.clonedElement) {
                const target = this.clonedElement.parent();
                oldClasses.forEach((cls) => {
                    target.removeClass(cls);
                });
                newClasses.forEach((cls) => {
                    target.addClass(cls);
                });
            }
        });
    }
};
__decorate([
    Input('stars'),
    __metadata("design:type", Number)
], RatingComponent.prototype, "stars", void 0);
__decorate([
    Input('round-func'),
    __metadata("design:type", String)
], RatingComponent.prototype, "roundFunc", void 0);
__decorate([
    Input('values'),
    __metadata("design:type", Array)
], RatingComponent.prototype, "values", void 0);
__decorate([
    Input('message'),
    __metadata("design:type", String)
], RatingComponent.prototype, "message", void 0);
__decorate([
    Input('star-color'),
    __metadata("design:type", String)
], RatingComponent.prototype, "starColor", void 0);
__decorate([
    Input('stared-color'),
    __metadata("design:type", String)
], RatingComponent.prototype, "staredColor", void 0);
__decorate([
    Input('static'),
    __metadata("design:type", Boolean)
], RatingComponent.prototype, "static", void 0);
__decorate([
    Input('cls-rating'),
    __metadata("design:type", String)
], RatingComponent.prototype, "clsRating", void 0);
__decorate([
    Input('cls-stars'),
    __metadata("design:type", String)
], RatingComponent.prototype, "clsStars", void 0);
__decorate([
    Input('cls-result'),
    __metadata("design:type", String)
], RatingComponent.prototype, "clsResult", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], RatingComponent.prototype, "input", void 0);
RatingComponent = RatingComponent_1 = __decorate([
    Component({
        selector: 'm4-rating',
        template: "<input type=\"text\" #input\n\n\n       [attr.data-stars]=\"values ? values.length : stars\"\n       [attr.data-round-func]=\"roundFunc\"\n       [attr.data-values]=\"values?.join(',')\"\n       [attr.data-message]=\"message\"\n       [attr.data-star-color]=\"starColor\"\n       [attr.data-stared-color]=\"staredColor\"\n       [attr.data-static]=\"static\"\n\n       [attr.data-cls-rating]=\"clsRating\"\n       [attr.data-cls-stars]=\"clsStars\"\n       [attr.data-cls-result]=\"clsResult\">\n",
        encapsulation: ViewEncapsulation.None,
        providers: [DefaultValueAccessor.get(RatingComponent_1), TypeAlias.get(RatingComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".rating.primary .stars li{color:#3969a0}.rating.primary .stars li.on{color:#0366d6}.rating.secondary .stars li{color:#767676}.rating.secondary .stars li.on{color:#607d8b}.rating.success .stars li{color:#607947}.rating.success .stars li.on{color:#60a917}.rating.alert .stars li{color:#906d6b}.rating.alert .stars li.on{color:#ce352c}.rating.warning .stars li{color:#d19c75}.rating.warning .stars li.on{color:#ff9447}.rating.yellow .stars li{color:#e0d3a3}.rating.yellow .stars li.on{color:#ffe484}.rating.info .stars li{color:#8baebf}.rating.info .stars li.on{color:#5ebdec}.rating.dark .stars li,.rating.dark .stars li.on{color:#505050}.rating.light .stars li,.rating.light .stars li.on{color:#f8f8f8}.disabled .rating .stars li.on{color:#e4e4e4!important}"]
    })
], RatingComponent);

var CalendarPickerComponent_1;
const _moment = moment;
let CalendarPickerComponent = CalendarPickerComponent_1 = class CalendarPickerComponent extends ControlBase {
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
            this.calendarPicker = this.clonedElement.calendarpicker().data('calendarpicker');
            this.clonedElement.one('blur', () => {
                this.touchCallback();
            });
            this.calendarPicker.options.onChange = () => {
                asapScheduler.schedule(() => {
                    const val = this.calendarPicker.value;
                    this.changeValue(val ? _moment(val.toLocaleDateString('en'), 'MM/DD/YYYY') : null);
                });
            };
            complete();
        });
    }
    disable(disabled) {
        asapScheduler.schedule(() => {
            if (disabled) {
                this.calendarPicker.disable();
            }
            else {
                this.calendarPicker.enable();
            }
        });
    }
    newValue() {
        if (!this.calendarPicker) {
            return;
        }
        asapScheduler.schedule(() => {
            this.calendarPicker.val(this.innerValue ? this.innerValue.format('MM/DD/YYYY') : '01/01/0000');
        });
    }
    convertMomentArray(arr) {
        return arr ? arr.map(v => v.format('MM/DD/YYYY')).join(',') : null;
    }
    newClassValue(newClasses, oldClasses) {
        asapScheduler.schedule(() => {
            if (this.clonedElement) {
                const target = this.clonedElement.parent();
                oldClasses.forEach((cls) => {
                    target.removeClass(cls);
                });
                newClasses.forEach((cls) => {
                    target.addClass(cls);
                });
            }
        });
    }
};
__decorate([
    Input('calendar-wide'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "calendarWide", void 0);
__decorate([
    Input('calendar-wide-point'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "calendarWidePoint", void 0);
__decorate([
    Input('dialog-mode'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "dialogMode", void 0);
__decorate([
    Input('dialog-point'),
    __metadata("design:type", Number)
], CalendarPickerComponent.prototype, "dialogPoint", void 0);
__decorate([
    Input('dialog-overlay'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "dialogOverlay", void 0);
__decorate([
    Input('overlay-color'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "overlayColor", void 0);
__decorate([
    Input('overlay-alpha'),
    __metadata("design:type", Number)
], CalendarPickerComponent.prototype, "overlayAlpha", void 0);
__decorate([
    Input('locale'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "locale", void 0);
__decorate([
    Input('size'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "size", void 0);
__decorate([
    Input('format'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "format", void 0);
__decorate([
    Input('clear-button'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "clearButton", void 0);
__decorate([
    Input('clear-button-icon'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clearButtonIcon", void 0);
__decorate([
    Input('calendar-button-icon'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "calendarButtonIcon", void 0);
__decorate([
    Input('years-before'),
    __metadata("design:type", Number)
], CalendarPickerComponent.prototype, "yearsBefore", void 0);
__decorate([
    Input('years-after'),
    __metadata("design:type", Number)
], CalendarPickerComponent.prototype, "yearsAfter", void 0);
__decorate([
    Input('week-start'),
    __metadata("design:type", Number)
], CalendarPickerComponent.prototype, "weekStart", void 0);
__decorate([
    Input('outside'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "outside", void 0);
__decorate([
    Input('ripple'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "ripple", void 0);
__decorate([
    Input('ripple-color'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "rippleColor", void 0);
__decorate([
    Input('exclude'),
    __metadata("design:type", Array)
], CalendarPickerComponent.prototype, "exclude", void 0);
__decorate([
    Input('include'),
    __metadata("design:type", Array)
], CalendarPickerComponent.prototype, "include", void 0);
__decorate([
    Input('min-date'),
    __metadata("design:type", Object)
], CalendarPickerComponent.prototype, "minDate", void 0);
__decorate([
    Input('max-date'),
    __metadata("design:type", Object)
], CalendarPickerComponent.prototype, "maxDate", void 0);
__decorate([
    Input('show-header'),
    __metadata("design:type", Boolean)
], CalendarPickerComponent.prototype, "showHeader", void 0);
__decorate([
    Input('cls-picker'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsPicker", void 0);
__decorate([
    Input('cls-today'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsToday", void 0);
__decorate([
    Input('cls-selected'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsSelected", void 0);
__decorate([
    Input('cls-exclude'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsExclude", void 0);
__decorate([
    Input('cls-calendar'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsCalendar", void 0);
__decorate([
    Input('cls-calendar-header'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsCalendarHeader", void 0);
__decorate([
    Input('cls-calendar-content'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsCalendarContent", void 0);
__decorate([
    Input('cls-calendar-months'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsCalendarMonths", void 0);
__decorate([
    Input('cls-calendar-years'),
    __metadata("design:type", String)
], CalendarPickerComponent.prototype, "clsCalendarYears", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], CalendarPickerComponent.prototype, "input", void 0);
CalendarPickerComponent = CalendarPickerComponent_1 = __decorate([
    Component({
        selector: 'm4-calendar-picker',
        template: "<input type=\"text\" #input\n\n       data-input-format=\"%m/%d/%Y\"\n\n       [attr.data-calendar-wide]=\"calendarWide\"\n       [attr.data-calendar-wide-point]=\"calendarWidePoint\"\n       [attr.data-dialog-mode]=\"dialogMode\"\n       [attr.data-dialog-point]=\"dialogPoint\"\n       [attr.data-dialog-overlay]=\"dialogOverlay\"\n       [attr.data-overlay-color]=\"overlayColor\"\n       [attr.data-overlay-alpha]=\"overlayAlpha\"\n       [attr.data-locale]=\"locale\"\n       [attr.data-size]=\"size\"\n       [attr.data-format]=\"format\"\n       [attr.data-clear-button]=\"clearButton\"\n       [attr.data-clear-button-icon]=\"clearButtonIcon\"\n       [attr.data-calendar-button-icon]=\"calendarButtonIcon\"\n       [attr.data-years-before]=\"yearsBefore\"\n       [attr.data-years-after]=\"yearsAfter\"\n       [attr.data-week-start]=\"weekStart\"\n       [attr.data-outside]=\"outside\"\n       [attr.data-ripple]=\"ripple\"\n       [attr.data-ripple-color]=\"rippleColor\"\n       [attr.data-exclude]=\"convertMomentArray(exclude)\"\n       [attr.data-special]=\"convertMomentArray(include)\"\n       [attr.data-min-date]=\"minDate?.format('MM/DD/YYYY')\"\n       [attr.data-max-date]=\"maxDate?.format('MM/DD/YYYY')\"\n       [attr.data-show-header]=\"showHeader\"\n\n       [attr.data-cls-picker]=\"clsPicker\"\n       [attr.data-cls-today]=\"clsToday\"\n       [attr.data-cls-selected]=\"clsSelected\"\n       [attr.data-cls-exclude]=\"clsExclude\"\n       [attr.data-cls-calendar]=\"clsCalendar\"\n       [attr.data-cls-calendar-header]=\"clsCalendarHeader\"\n       [attr.data-cls-calendar-content]=\"clsCalendarContent\"\n       [attr.data-cls-calendar-months]=\"clsCalendarMonths\"\n       [attr.data-cls-calendar-years]=\"clsCalendarYears\">\n",
        providers: [DefaultValueAccessor.get(CalendarPickerComponent_1), TypeAlias.get(CalendarPickerComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    })
], CalendarPickerComponent);

var CalendarComponent_1;
const _moment$1 = moment;
let CalendarComponent = CalendarComponent_1 = class CalendarComponent extends ControlBase {
    createControl() {
        return new Promise((complete) => {
            const originalElement = $(this.object.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.calendar = this.clonedElement.calendar().data('calendar');
            asapScheduler.schedule(() => {
                this.clonedElement.find('.calendar-content .day, .calendar-content span, .calendar-footer button').on('click', () => {
                    this.touchCallback();
                    this.clonedElement.find('.calendar-content .day, .calendar-content span, .calendar-footer button').unbind('click');
                });
            });
            const selectDays = (selection) => {
                const dates = selection.map(s => _moment$1(s));
                if (this.multiSelect) {
                    this.changeValue(dates);
                }
                else {
                    this.changeValue(dates.length > 0 ? dates[0] : null);
                }
            };
            this.calendar.options.onDayClick = (selection) => {
                if (this.pickerMode) {
                    selectDays(selection);
                }
            };
            this.calendar.options.onDone = (selection) => {
                selectDays(selection);
            };
            complete();
        });
    }
    disable(disabled) {
        asapScheduler.schedule(() => {
            if (disabled) {
                this.clonedElement.addClass('disabled');
            }
            else {
                this.clonedElement.removeClass('disabled');
            }
        });
    }
    newValue() {
        if (!this.calendar) {
            return;
        }
        this.calendar.selected = [];
        asapScheduler.schedule(() => {
            if (this.innerValue) {
                if (this.multiSelect) {
                    this.calendar.setPreset(this.innerValue.map(v => v.format('MM/DD/YYYY')).join(','));
                }
                else {
                    this.calendar.setPreset(this.innerValue.format('MM/DD/YYYY'));
                }
            }
            else {
                this.calendar.setPreset('');
            }
        });
    }
    convertMomentArray(arr) {
        return arr ? arr.map(v => v.format('MM/DD/YYYY')).join(',') : null;
    }
    newClassValue(newClasses, oldClasses) {
        asapScheduler.schedule(() => {
            if (this.clonedElement) {
                const target = this.clonedElement;
                oldClasses.forEach((cls) => {
                    target.removeClass(cls);
                });
                newClasses.forEach((cls) => {
                    target.addClass(cls);
                });
            }
        });
    }
};
__decorate([
    Input('years-before'),
    __metadata("design:type", Number)
], CalendarComponent.prototype, "yearsBefore", void 0);
__decorate([
    Input('years-after'),
    __metadata("design:type", Number)
], CalendarComponent.prototype, "yearsAfter", void 0);
__decorate([
    Input('show'),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "show", void 0);
__decorate([
    Input('picker-mode'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "pickerMode", void 0);
__decorate([
    Input('locale'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "locale", void 0);
__decorate([
    Input('week-start'),
    __metadata("design:type", Number)
], CalendarComponent.prototype, "weekStart", void 0);
__decorate([
    Input('outside'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "outside", void 0);
__decorate([
    Input('buttons'),
    __metadata("design:type", Array)
], CalendarComponent.prototype, "buttons", void 0);
__decorate([
    Input('ripple'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "ripple", void 0);
__decorate([
    Input('ripple-color'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "rippleColor", void 0);
__decorate([
    Input('exclude'),
    __metadata("design:type", Array)
], CalendarComponent.prototype, "exclude", void 0);
__decorate([
    Input('include'),
    __metadata("design:type", Array)
], CalendarComponent.prototype, "include", void 0);
__decorate([
    Input('min-date'),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "minDate", void 0);
__decorate([
    Input('max-date'),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "maxDate", void 0);
__decorate([
    Input('week-day-click'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "weekDayClick", void 0);
__decorate([
    Input('multi-select'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "multiSelect", void 0);
__decorate([
    Input('show-header'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "showHeader", void 0);
__decorate([
    Input('show-footer'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "showFooter", void 0);
__decorate([
    Input('wide-point'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "widePoint", void 0);
__decorate([
    Input('wide'),
    __metadata("design:type", Boolean)
], CalendarComponent.prototype, "wide", void 0);
__decorate([
    Input('cls-today'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsToday", void 0);
__decorate([
    Input('cls-selected'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsSelected", void 0);
__decorate([
    Input('cls-exclude'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsExclude", void 0);
__decorate([
    Input('cls-cancel-button'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCancelButton", void 0);
__decorate([
    Input('cls-today-button'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsTodayButton", void 0);
__decorate([
    Input('cls-clear-button'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsClearButton", void 0);
__decorate([
    Input('cls-done-button'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsDoneButton", void 0);
__decorate([
    Input('cls-calendar'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCalendar", void 0);
__decorate([
    Input('cls-calendar-header'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCalendarHeader", void 0);
__decorate([
    Input('cls-calendar-content'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCalendarContent", void 0);
__decorate([
    Input('cls-calendar-footer'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCalendarFooter", void 0);
__decorate([
    Input('cls-calendar-months'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCalendarMonths", void 0);
__decorate([
    Input('cls-calendar-years'),
    __metadata("design:type", String)
], CalendarComponent.prototype, "clsCalendarYears", void 0);
__decorate([
    ViewChild('object', { static: true }),
    __metadata("design:type", ElementRef)
], CalendarComponent.prototype, "object", void 0);
CalendarComponent = CalendarComponent_1 = __decorate([
    Component({
        selector: 'm4-calendar',
        template: "<div #object\n\n\n     [attr.data-years-before]=\"yearsBefore\"\n     [attr.data-years-after]=\"yearsAfter\"\n     [attr.data-show]=\"show?.format('MM/DD/YYYY')\"\n     [attr.data-picker-mode]=\"pickerMode && !multiSelect\"\n     [attr.data-locale]=\"locale\"\n     [attr.data-week-start]=\"weekStart\"\n     [attr.data-outside]=\"outside\"\n     [attr.data-buttons]=\"buttons\"\n     [attr.data-ripple]=\"ripple\"\n     [attr.data-ripple-color]=\"rippleColor\"\n     [attr.data-exclude]=\"convertMomentArray(exclude)\"\n     [attr.data-special]=\"convertMomentArray(include)\"\n     [attr.data-min-date]=\"minDate?.format('MM/DD/YYYY')\"\n     [attr.data-max-date]=\"maxDate?.format('MM/DD/YYYY')\"\n     [attr.data-week-day-click]=\"weekDayClick\"\n     [attr.data-multi-select]=\"multiSelect\"\n     [attr.data-show-header]=\"showHeader\"\n     [attr.data-show-footer]=\"showFooter\"\n     [attr.data-wide-point]=\"widePoint\"\n     [attr.data-wide]=\"wide\"\n\n     [attr.data-cls-today]=\"clsToday\"\n     [attr.data-cls-selected]=\"clsSelected\"\n     [attr.data-cls-exclude]=\"clsExclude\"\n     [attr.data-cls-cancel-button]=\"clsCancelButton\"\n     [attr.data-cls-today-button]=\"clsTodayButton\"\n     [attr.data-cls-clear-button]=\"clsClearButton\"\n     [attr.data-cls-done-button]=\"clsDoneButton\"\n     [attr.data-cls-calendar]=\"clsCalendar\"\n     [attr.data-cls-calendar-header]=\"clsCalendarHeader\"\n     [attr.data-cls-calendar-content]=\"clsCalendarContent\"\n     [attr.data-cls-calendar-footer]=\"clsCalendarFooter\"\n     [attr.data-cls-calendar-months]=\"clsCalendarMonths\"\n     [attr.data-cls-calendar-years]=\"clsCalendarYears\">\n</div>\n",
        providers: [DefaultValueAccessor.get(CalendarComponent_1), TypeAlias.get(CalendarComponent_1)],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".calendar.primary{border-color:#0366d6}.calendar.primary .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #0366d6!important}.calendar.primary .calendar-content .day.selected::after{border-top-color:#0366d6}.calendar.primary .calendar-content .day.today,.calendar.primary .calendar-header{background-color:#0372ef}.calendar.secondary{border-color:#607d8b}.calendar.secondary .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #607d8b!important}.calendar.secondary .calendar-content .day.selected::after{border-top-color:#607d8b}.calendar.secondary .calendar-content .day.today,.calendar.secondary .calendar-header{background-color:#6b8a99}.calendar.success{border-color:#60a917}.calendar.success .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #60a917!important}.calendar.success .calendar-content .day.selected::after{border-top-color:#60a917}.calendar.success .calendar-content .day.today,.calendar.success .calendar-header{background-color:#6dbf1a}.calendar.alert{border-color:#ce352c}.calendar.alert .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #ce352c!important}.calendar.alert .calendar-content .day.selected::after{border-top-color:#ce352c}.calendar.alert .calendar-content .day.today,.calendar.alert .calendar-header{background-color:#d6463e}.calendar.warning{border-color:#ff9447}.calendar.warning .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #ff9447!important}.calendar.warning .calendar-content .day.selected::after{border-top-color:#ff9447}.calendar.warning .calendar-content .day.today,.calendar.warning .calendar-header{background-color:#ffa361}.calendar.yellow{border-color:#ffe484}.calendar.yellow .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #ffe484!important}.calendar.yellow .calendar-content .day.selected::after{border-top-color:#ffe484}.calendar.yellow .calendar-content .day.today,.calendar.yellow .calendar-header{background-color:#ffea9e}.calendar.info{border-color:#5ebdec}.calendar.info .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #5ebdec!important}.calendar.info .calendar-content .day.selected::after{border-top-color:#5ebdec}.calendar.info .calendar-content .day.today,.calendar.info .calendar-header{background-color:#75c7ee}.calendar.dark{border-color:#505050}.calendar.dark .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #505050!important}.calendar.dark .calendar-content .day.selected::after{border-top-color:#505050}.calendar.dark .calendar-content .day.today,.calendar.dark .calendar-header{background-color:#5d5d5d}.calendar.light{border-color:#f8f8f8}.calendar.light .calendar-content .day.selected{box-shadow:inset 0 0 0 1px #f8f8f8!important}.calendar.light .calendar-content .day.selected::after{border-top-color:#f8f8f8}.calendar.light .calendar-content .day.today,.calendar.light .calendar-header{background-color:#fff}.calendar.disabled .calendar-content{color:#e4e4e4!important}.calendar.disabled .calendar-footer button{color:#e4e4e4!important;opacity:.65}"]
    })
], CalendarComponent);

var DatePickerComponent_1;
const _moment$2 = moment;
let DatePickerComponent = DatePickerComponent_1 = class DatePickerComponent extends ControlBase {
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
            this.datePicker = this.clonedElement.datepicker().data('datepicker');
            this.clonedElement.parent().find('.date-wrapper').one('click', () => {
                this.touchCallback();
            });
            this.datePicker.options.onSet = (val, elem_val) => {
                this.changeValue(_moment$2(elem_val, 'YYYY-MM-DD'));
            };
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.clonedElement.parent().addClass('disabled');
        }
        else {
            this.clonedElement.parent().removeClass('disabled');
        }
    }
    newValue() {
        if (!this.datePicker) {
            return;
        }
        this.datePicker.val(this.innerValue ? this.innerValue.format('YYYY-MM-DD') : '');
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
};
__decorate([
    Input('month'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "month", void 0);
__decorate([
    Input('day'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "day", void 0);
__decorate([
    Input('year'),
    __metadata("design:type", Boolean)
], DatePickerComponent.prototype, "year", void 0);
__decorate([
    Input('locale'),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "locale", void 0);
__decorate([
    Input('min-year'),
    __metadata("design:type", Number)
], DatePickerComponent.prototype, "minYear", void 0);
__decorate([
    Input('max-year'),
    __metadata("design:type", Number)
], DatePickerComponent.prototype, "maxYear", void 0);
__decorate([
    Input('distance'),
    __metadata("design:type", Number)
], DatePickerComponent.prototype, "distance", void 0);
__decorate([
    Input('cls-picker'),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "clsPicker", void 0);
__decorate([
    Input('cls-start'),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "clsStart", void 0);
__decorate([
    Input('cls-month'),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "clsMonth", void 0);
__decorate([
    Input('cls-day'),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "clsDay", void 0);
__decorate([
    Input('cls-year'),
    __metadata("design:type", String)
], DatePickerComponent.prototype, "clsYear", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], DatePickerComponent.prototype, "input", void 0);
DatePickerComponent = DatePickerComponent_1 = __decorate([
    Component({
        selector: 'm4-date-picker',
        template: "<input type=\"text\" #input\n\n\n       [attr.data-month]=\"month\"\n       [attr.data-day]=\"day\"\n       [attr.data-year]=\"year\"\n       [attr.data-locale]=\"locale\"\n       [attr.data-min-year]=\"minYear\"\n       [attr.data-max-year]=\"maxYear\"\n       [attr.data-distance]=\"distance\"\n\n       [attr.data-cls-picker]=\"clsPicker\"\n       [attr.data-cls-start]=\"clsStart\"\n       [attr.data-cls-month]=\"clsMonth\"\n       [attr.data-cls-day]=\"clsDay\"\n       [attr.data-cls-year]=\"clsYear\">\n",
        providers: [DefaultValueAccessor.get(DatePickerComponent_1), TypeAlias.get(DatePickerComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        styles: [".date-picker.primary .date-wrapper{border-color:#0366d6}.date-picker.secondary .date-wrapper{border-color:#607d8b}.date-picker.success .date-wrapper{border-color:#60a917}.date-picker.alert .date-wrapper{border-color:#ce352c}.date-picker.warning .date-wrapper{border-color:#ff9447}.date-picker.yellow .date-wrapper{border-color:#ffe484}.date-picker.info .date-wrapper{border-color:#5ebdec}.date-picker.dark .date-wrapper{border-color:#505050}.date-picker.light .date-wrapper{border-color:#f8f8f8}"]
    })
], DatePickerComponent);

var TimePickerComponent_1;
let TimePickerComponent = TimePickerComponent_1 = class TimePickerComponent extends ControlBase {
    constructor() {
        super(...arguments);
        this.showLabels = true;
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
            this.timePicker = this.clonedElement.timepicker().data('timepicker');
            this.clonedElement.parent().find('.time-wrapper').one('click', () => {
                this.touchCallback();
            });
            this.timePicker.options.onSet = (val, elem_val) => {
                this.changeValue(duration(elem_val));
            };
            complete();
        });
    }
    disable(disabled) {
        if (disabled) {
            this.clonedElement.parent().addClass('disabled');
        }
        else {
            this.clonedElement.parent().removeClass('disabled');
        }
    }
    newValue() {
        if (!this.timePicker) {
            return;
        }
        this.timePicker.val(this.innerValue ? `${this.innerValue.hours()}:${this.innerValue.minutes()}:${this.innerValue.seconds()}` : '');
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
};
__decorate([
    Input('hours'),
    __metadata("design:type", Boolean)
], TimePickerComponent.prototype, "hours", void 0);
__decorate([
    Input('minutes'),
    __metadata("design:type", Boolean)
], TimePickerComponent.prototype, "minutes", void 0);
__decorate([
    Input('seconds'),
    __metadata("design:type", Boolean)
], TimePickerComponent.prototype, "seconds", void 0);
__decorate([
    Input('show-labels'),
    __metadata("design:type", Object)
], TimePickerComponent.prototype, "showLabels", void 0);
__decorate([
    Input('locale'),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "locale", void 0);
__decorate([
    Input('distance'),
    __metadata("design:type", Number)
], TimePickerComponent.prototype, "distance", void 0);
__decorate([
    Input('cls-picker'),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "clsPicker", void 0);
__decorate([
    Input('cls-part'),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "clsPart", void 0);
__decorate([
    Input('cls-hours'),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "clsHours", void 0);
__decorate([
    Input('cls-minutes'),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "clsMinutes", void 0);
__decorate([
    Input('cls-seconds'),
    __metadata("design:type", String)
], TimePickerComponent.prototype, "clsSeconds", void 0);
__decorate([
    ViewChild('input', { static: true }),
    __metadata("design:type", ElementRef)
], TimePickerComponent.prototype, "input", void 0);
TimePickerComponent = TimePickerComponent_1 = __decorate([
    Component({
        selector: 'm4-time-picker',
        template: "<input type=\"text\" #input\n\n\n       [attr.data-hours]=\"hours\"\n       [attr.data-minutes]=\"minutes\"\n       [attr.data-seconds]=\"seconds\"\n       [attr.data-show-labels]=\"showLabels\"\n       [attr.data-locale]=\"locale\"\n       [attr.data-distance]=\"distance\"\n\n       [attr.data-cls-picker]=\"clsPicker\"\n       [attr.data-cls-part]=\"clsPart\"\n       [attr.data-cls-hours]=\"clsHours\"\n       [attr.data-cls-minutes]=\"clsMinutes\"\n       [attr.data-cls-seconds]=\"clsSeconds\">\n",
        providers: [DefaultValueAccessor.get(TimePickerComponent_1), TypeAlias.get(TimePickerComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        styles: [".time-picker.primary .time-wrapper{border-color:#0366d6}.time-picker.secondary .time-wrapper{border-color:#607d8b}.time-picker.success .time-wrapper{border-color:#60a917}.time-picker.alert .time-wrapper{border-color:#ce352c}.time-picker.warning .time-wrapper{border-color:#ff9447}.time-picker.yellow .time-wrapper{border-color:#ffe484}.time-picker.info .time-wrapper{border-color:#5ebdec}.time-picker.dark .time-wrapper{border-color:#505050}.time-picker.light .time-wrapper{border-color:#f8f8f8}"]
    })
], TimePickerComponent);

var CheckboxGroupComponent_1;
let CheckboxGroupComponent = CheckboxGroupComponent_1 = class CheckboxGroupComponent extends ControlBase {
    constructor(element, cdRef) {
        super(element, cdRef);
        this.readonly = false;
    }
    createControl() {
        return new Promise((complete) => {
            asapScheduler.schedule(() => {
                this.checkboxes = !!this.options ? this.checkboxesView : this.checkboxesContent;
                const checkboxCreations = this.checkboxes.map((item) => {
                    return new Promise((checkboxComplete) => {
                        item.updateProperty('readonly', this.readonly);
                        item.registerOnChange((v) => {
                            this.computeInnerValue();
                        });
                        item.registerOnTouched(() => {
                            this.touchCallback();
                        });
                        asapScheduler.schedule(() => {
                            item.createControl().then(() => {
                                checkboxComplete();
                            });
                        });
                    });
                });
                Promise.all(checkboxCreations).then(() => {
                    this.callNewValue();
                    complete();
                });
            });
        });
    }
    computeInnerValue() {
        const values = this.checkboxes.filter(item => item.innerValue === true && item.value).map(item => item.value);
        this.changeValue(values);
    }
    disable(disabled) {
        this.checkboxes.forEach((item) => {
            asapScheduler.schedule(() => {
                item.disable(disabled);
            });
        });
    }
    newValue() {
        if (!this.checkboxes) {
            return;
        }
        this.checkboxes.forEach((item) => {
            item.writeValue(this.innerValue && ArrayHelper.contains(this.innerValue, item.value));
        });
    }
    newClassValue(newClasses, oldClasses) {
        this.checkboxes.forEach((item) => {
            asapScheduler.schedule(() => {
                item.newClassValue(newClasses, oldClasses);
            }, 1);
        });
    }
};
CheckboxGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], CheckboxGroupComponent.prototype, "readonly", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CheckboxGroupComponent.prototype, "options", void 0);
__decorate([
    ContentChildren(forwardRef(() => CheckboxComponent), { descendants: true }),
    __metadata("design:type", QueryList)
], CheckboxGroupComponent.prototype, "checkboxesContent", void 0);
__decorate([
    ViewChildren(forwardRef(() => CheckboxComponent)),
    __metadata("design:type", QueryList)
], CheckboxGroupComponent.prototype, "checkboxesView", void 0);
CheckboxGroupComponent = CheckboxGroupComponent_1 = __decorate([
    Component({
        selector: 'm4-checkbox-group',
        template: "<ng-container *ngIf=\"options; else noOptions\">\n  <m4-checkbox *ngFor=\"let option of options | objectKeys\" [value]=\"options[option]\" [caption]=\"option\"></m4-checkbox>\n</ng-container>\n<ng-template #noOptions>\n  <ng-content></ng-content>\n</ng-template>\n",
        providers: [DefaultValueAccessor.get(CheckboxGroupComponent_1), TypeAlias.get(CheckboxGroupComponent_1)],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    }),
    __metadata("design:paramtypes", [ElementRef, ChangeDetectorRef])
], CheckboxGroupComponent);

let IsArrayPipe = class IsArrayPipe {
    transform(value) {
        return value instanceof Array;
    }
};
IsArrayPipe = __decorate([
    Pipe({
        name: 'isArray'
    })
], IsArrayPipe);

let FormControlWrapperComponent = class FormControlWrapperComponent {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
        this.showErrors = true;
        this.marginTop = false;
    }
    ngAfterContentInit() {
        const directives = this.controlContainer.directives;
        const controlIndex = directives.findIndex(d => d.valueAccessor === this.formControl);
        const formControlNameDirective = directives[controlIndex];
        this.marginTop = controlIndex > 0;
        this.formControlName = formControlNameDirective.name;
        this.formGroup = this.controlContainer.control;
        this.formName = this.formGroup.name;
        this.formPath = `form.${this.formName}.`;
        this.formControlPath = `${this.formPath}${this.formControlName}.`;
        this.control = this.formGroup.get(this.formControlName);
        this.statusChangeSubscription = this.control.statusChanges.pipe(startWith(this.control.status))
            .subscribe((state) => {
            if (this.control.pristine) {
                return;
            }
            const validClasses = ['success'];
            const invalidClasses = ['alert'];
            const newClassValue = state === 'INVALID' ? invalidClasses : validClasses;
            const oldClassValue = state === 'INVALID' ? validClasses : invalidClasses;
            this.formControl.newClassValue(newClassValue, oldClassValue);
        });
    }
};
FormControlWrapperComponent.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] }
];
__decorate([
    Input('label'),
    __metadata("design:type", String)
], FormControlWrapperComponent.prototype, "label", void 0);
__decorate([
    Input('description'),
    __metadata("design:type", String)
], FormControlWrapperComponent.prototype, "description", void 0);
__decorate([
    Input('show-errors'),
    __metadata("design:type", Object)
], FormControlWrapperComponent.prototype, "showErrors", void 0);
__decorate([
    ContentChild(ControlBase, { static: true }),
    __metadata("design:type", ControlBase)
], FormControlWrapperComponent.prototype, "formControl", void 0);
__decorate([
    ContentChild('controlError', { static: true }),
    __metadata("design:type", TemplateRef)
], FormControlWrapperComponent.prototype, "errorTemplate", void 0);
FormControlWrapperComponent = __decorate([
    Component({
        selector: 'm4-form-control-wrapper',
        template: "<div class=\"form-group\" [class.mt-1]=\"marginTop\">\n  <label *ngIf=\"label\">{{label}}</label>\n  <ng-content></ng-content>\n  <small class=\"text-muted\" *ngIf=\"description\">{{description}}</small>\n\n  <ng-container *ngIf=\"showErrors && control.errors && control.dirty\">\n    <ul class=\"unstyled-list fg-red text-small m-1\">\n      <li *ngFor=\"let error of control.errors | errorDisplay: formControlPath\">\n        <ng-container *ngIf=\"errorTemplate\">\n          <ng-container *ngTemplateOutlet=\"errorTemplate;context:{ error: error }\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!errorTemplate\">\n          {{error}}\n        </ng-container>\n      </li>\n    </ul>\n  </ng-container>\n</div>\n",
        styles: [""]
    }),
    __param(0, Optional()), __param(0, Host()), __param(0, SkipSelf()),
    __metadata("design:paramtypes", [ControlContainer])
], FormControlWrapperComponent);

let ErrorDisplayPipe = class ErrorDisplayPipe {
    transform(errors, formControlPath) {
        if (!errors) {
            return [];
        }
        const errorKeys = Object.keys(errors);
        return errorKeys.map(key => `${formControlPath}errors.${key}`);
    }
};
ErrorDisplayPipe = __decorate([
    Pipe({
        name: 'errorDisplay'
    })
], ErrorDisplayPipe);

class M4FormGroup extends FormGroup {
    constructor(name, controls, validatorOrOpts, asyncValidator, formStyle) {
        super(controls, validatorOrOpts, asyncValidator);
        this.name = name;
        this.formStyle = formStyle;
    }
}

let FormWrapperComponent = class FormWrapperComponent {
    constructor() {
        this.showErrors = true;
    }
    ngOnInit() {
        this.formName = this.formGroup.name;
        this.formPath = `form.${this.formName}.`;
    }
};
__decorate([
    Input('title'),
    __metadata("design:type", String)
], FormWrapperComponent.prototype, "title", void 0);
__decorate([
    Input('description'),
    __metadata("design:type", String)
], FormWrapperComponent.prototype, "description", void 0);
__decorate([
    Input('show-errors'),
    __metadata("design:type", Object)
], FormWrapperComponent.prototype, "showErrors", void 0);
__decorate([
    Input(),
    __metadata("design:type", M4FormGroup)
], FormWrapperComponent.prototype, "formGroup", void 0);
__decorate([
    ContentChild('formError', { static: true }),
    __metadata("design:type", TemplateRef)
], FormWrapperComponent.prototype, "errorTemplate", void 0);
FormWrapperComponent = __decorate([
    Component({
        selector: 'm4-form-wrapper',
        template: "<h1 *ngIf=\"title\">{{title}}</h1>\n<p class=\"text-leader mb-5\" *ngIf=\"description\">{{description}}</p>\n\n<ng-content></ng-content>\n\n<ng-container *ngIf=\"showErrors && formGroup.errors && formGroup.dirty\">\n  <hr>\n\n  <ul class=\"unstyled-list fg-red text-small m-2\">\n    <li *ngFor=\"let error of formGroup.errors | errorDisplay: formPath\">\n      <ng-container *ngIf=\"errorTemplate\">\n        <ng-container *ngTemplateOutlet=\"errorTemplate;context:{ error: error }\"></ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!errorTemplate\">\n        {{error}}\n      </ng-container>\n    </li>\n  </ul>\n</ng-container>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], FormWrapperComponent);

class M4FormControl extends FormControl {
    constructor(controlType, formState, validatorOrOpts, asyncValidator, controlOptions, controlStyle) {
        super(formState, validatorOrOpts, asyncValidator);
        this.controlType = controlType;
        this.controlOptions = controlOptions;
        this.controlStyle = controlStyle;
    }
}

let FormBuilderComponent = class FormBuilderComponent {
    constructor() { }
    ngOnInit() {
        this.formStyle = this.formGroup.formStyle;
        this.dynamicControls = Object.keys(this.formGroup.controls)
            .map((key, index) => {
            const control = this.formGroup.controls[key];
            if (control instanceof M4FormControl) {
                control.fieldName = key;
                control.index = index;
                return control;
            }
        })
            .filter((control) => !!control);
    }
};
__decorate([
    Input(),
    __metadata("design:type", M4FormGroup)
], FormBuilderComponent.prototype, "formGroup", void 0);
FormBuilderComponent = __decorate([
    Component({
        selector: 'm4-form-builder',
        template: "<m4-form-wrapper [formGroup]=\"formGroup\" [title]=\"formStyle?.title | unwrapObservableOrValue\"\n                 [description]=\"formStyle?.description | unwrapObservableOrValue\" [show-errors]=\"!formStyle?.hideErrors\">\n  <m4-dynamic-form-control *ngFor=\"let control of dynamicControls\" [formControl]=\"control\"></m4-dynamic-form-control>\n\n  <ng-template #formError let-error=\"error\">\n    <span *ngIf=\"formStyle?.createError; else defaultError\"\n                  [innerHTML]=\"formStyle.createError | executeFunctionOnce:error | unwrapObservableOrValue | trustHtml\">\n    </span>\n    <ng-template #defaultError>\n      {{ error }}\n    </ng-template>\n  </ng-template>\n</m4-form-wrapper>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], FormBuilderComponent);

var DynamicFormControlComponent_1;
let DynamicFormControlComponent = DynamicFormControlComponent_1 = class DynamicFormControlComponent {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.componentReady$ = new BehaviorSubject(false);
    }
    ngAfterContentInit() {
        this.ngOnDestroy();
        const factory = this.componentFactoryResolver.resolveComponentFactory(this.formControl.controlType);
        this.componentRef = this.container.createComponent(factory);
        this.componentInstance = this.componentRef.instance;
        this.componentInstance.registerOnChange(this.onChangeFunction);
        this.componentInstance.registerOnTouched(this.onTouchedFunction);
        if (this.formControl.controlOptions) {
            Object.keys(this.formControl.controlOptions).forEach((key) => {
                this.componentInstance.updateProperty(key, this.formControl.controlOptions[key]);
            });
        }
        this.statusChangeSubscription = this.formControl.statusChanges.pipe(startWith(this.formControl.status))
            .subscribe((state) => {
            if (this.formControl.pristine) {
                return;
            }
            const validClasses = ['success'];
            const invalidClasses = ['alert'];
            const newClassValue = state === 'INVALID' ? invalidClasses : validClasses;
            const oldClassValue = state === 'INVALID' ? validClasses : invalidClasses;
            this.componentInstance.newClassValue(newClassValue, oldClassValue);
        });
        asapScheduler.schedule(() => {
            this.componentReady$.next(true);
            asapScheduler.schedule(() => {
                this.formControl.markAsPristine();
            });
        });
    }
    ngOnDestroy() {
        this.componentReady$.next(false);
        if (this.statusChangeSubscription) {
            this.statusChangeSubscription.unsubscribe();
        }
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
            this.componentInstance = null;
        }
    }
    ngOnChanges(changes) {
        this.ngAfterContentInit();
    }
    registerOnChange(fn) {
        this.onChangeFunction = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedFunction = fn;
    }
    setDisabledState(isDisabled) {
        this.componentReady$.pipe(filter(v => v), take(1)).subscribe(() => {
            this.componentInstance.setDisabledState(isDisabled);
        });
    }
    writeValue(obj) {
        this.componentReady$.pipe(filter(v => v), take(1)).subscribe(() => {
            this.componentInstance.writeValue(obj);
        });
    }
};
DynamicFormControlComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
__decorate([
    Input(),
    __metadata("design:type", M4FormControl)
], DynamicFormControlComponent.prototype, "formControl", void 0);
__decorate([
    ViewChild('container', { read: ViewContainerRef, static: true }),
    __metadata("design:type", ViewContainerRef)
], DynamicFormControlComponent.prototype, "container", void 0);
DynamicFormControlComponent = DynamicFormControlComponent_1 = __decorate([
    Component({
        selector: 'm4-dynamic-form-control',
        template: "<div class=\"form-group\" [class.mt-1]=\"formControl.index > 0\">\n  <label *ngIf=\"formControl?.controlStyle?.label\"\n         [innerHTML]=\"formControl.controlStyle.label | unwrapObservableOrValue | trustHtml\"></label>\n  <ng-template #container></ng-template>\n  <small class=\"text-muted\" *ngIf=\"formControl?.controlStyle?.description\"\n         [innerHTML]=\"formControl.controlStyle.description | unwrapObservableOrValue | trustHtml\">\n  </small>\n\n  <ng-container *ngIf=\"!(formControl?.controlStyle?.hideErrors) && formControl.errors && formControl.dirty\">\n    <ul class=\"unstyled-list fg-red text-small m-1\">\n      <li *ngFor=\"let error of formControl.errors | errorDisplay: formControl.fieldName + '.'\">\n        <span *ngIf=\"formControl?.controlStyle?.createError; else defaultErrorBlock\"\n              [innerHTML]=\"formControl.controlStyle.createError | executeFunctionOnce:error\n              | unwrapObservableOrValue | trustHtml\">\n        </span>\n\n        <ng-template #defaultErrorBlock>\n          {{error}}\n        </ng-template>\n      </li>\n    </ul>\n  </ng-container>\n</div>\n",
        providers: [DefaultValueAccessor.get(DynamicFormControlComponent_1), TypeAlias.get(DynamicFormControlComponent_1)],
        styles: [""]
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver])
], DynamicFormControlComponent);

let UnwrapObservableOrValuePipe = class UnwrapObservableOrValuePipe {
    constructor(cdRef) {
        this.cdRef = cdRef;
    }
    transform(value) {
        if (!(value instanceof Observable)) {
            return value;
        }
        if (!this.subscription) {
            if (!value) {
                return this.innerValue;
            }
            this.previousValue = value;
            this.subscription = value
                .subscribe((output) => {
                this.innerValue = output;
                this.cdRef.markForCheck();
            });
        }
        if (value !== this.previousValue) {
            this.ngOnDestroy();
            return this.transform(value);
        }
        return this.innerValue;
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.innerValue = null;
        this.subscription = null;
    }
};
UnwrapObservableOrValuePipe.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
UnwrapObservableOrValuePipe = __decorate([
    Pipe({
        name: 'unwrapObservableOrValue',
        pure: false
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], UnwrapObservableOrValuePipe);

let ExecuteFunctionOncePipe = class ExecuteFunctionOncePipe {
    transform(value, ...parameters) {
        return value(...parameters);
    }
};
ExecuteFunctionOncePipe = __decorate([
    Pipe({
        name: 'executeFunctionOnce'
    })
], ExecuteFunctionOncePipe);

let TrustHtmlPipe = class TrustHtmlPipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(value) {
        return this.domSanitizer.bypassSecurityTrustHtml(value);
    }
};
TrustHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
TrustHtmlPipe = __decorate([
    Pipe({
        name: 'trustHtml'
    }),
    __metadata("design:paramtypes", [DomSanitizer])
], TrustHtmlPipe);

let ObjectKeysPipe = class ObjectKeysPipe {
    transform(value) {
        return Object.keys(value);
    }
};
ObjectKeysPipe = __decorate([
    Pipe({
        name: 'objectKeys'
    })
], ObjectKeysPipe);

let CreateHashPipe = class CreateHashPipe {
    transform(value) {
        return StringHelper.createHash(value);
    }
};
CreateHashPipe = __decorate([
    Pipe({
        name: 'createHash'
    })
], CreateHashPipe);

const declarations = [
    TagInputComponent,
    SelectComponent,
    InputComponent,
    MaterialInputComponent,
    TextareaComponent,
    CheckboxComponent,
    CheckboxGroupComponent,
    RadioComponent,
    RadioGroupComponent,
    SwitchComponent,
    FileInputComponent,
    KeypadComponent,
    SliderComponent,
    SpinnerComponent,
    RatingComponent,
    CalendarPickerComponent,
    CalendarComponent,
    DatePickerComponent,
    TimePickerComponent,
    FormControlWrapperComponent,
    FormWrapperComponent,
    FormBuilderComponent,
    DynamicFormControlComponent,
];
let NgMetro4FormsModule = class NgMetro4FormsModule {
};
NgMetro4FormsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ],
        declarations: [
            IsArrayPipe,
            ErrorDisplayPipe,
            UnwrapObservableOrValuePipe,
            ExecuteFunctionOncePipe,
            TrustHtmlPipe,
            ObjectKeysPipe,
            ...declarations,
            CreateHashPipe,
        ],
        exports: [
            ...declarations,
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ]
    })
], NgMetro4FormsModule);

let ButtonDirective = class ButtonDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.oldClasses = [];
        this.jElement = $(this.element.nativeElement);
    }
    createElement() {
        if (!this.type) {
            this.type = 'button';
        }
        const buttonClass = this.specialBtn === 'command' ? 'command-button' :
            this.specialBtn === 'image' ? 'image-button' :
                this.specialBtn === 'shortcut' ? 'shortcut' :
                    this.specialBtn === 'ribbon' ? 'ribbon-button' :
                        this.specialBtn === 'action' || this.specialBtn === 'multi-action' ? 'action-button' : 'button';
        const newClasses = [buttonClass];
        if (this.btnStyle) {
            newClasses.push(this.btnStyle);
        }
        if (this.outline) {
            newClasses.push('outline');
        }
        if (this.size) {
            newClasses.push(this.size);
        }
        if (this.rounded) {
            newClasses.push('rounded');
        }
        if (this.shape) {
            newClasses.push(this.shape);
        }
        if (this.shadow) {
            newClasses.push('drop-shadow');
        }
        if (this.flat) {
            newClasses.push('flat-button');
        }
        this.oldClasses.forEach(c => {
            this.jElement.removeClass(c);
        });
        newClasses.forEach(c => {
            this.jElement.addClass(c);
        });
        this.oldClasses = newClasses;
    }
    clickEvent() {
        if (this.specialBtn === 'multi-action') {
            this.jElement.toggleClass('active');
        }
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
};
ButtonDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input('btn-style'),
    __metadata("design:type", String)
], ButtonDirective.prototype, "btnStyle", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ButtonDirective.prototype, "outline", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonDirective.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ButtonDirective.prototype, "rounded", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ButtonDirective.prototype, "shape", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ButtonDirective.prototype, "shadow", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ButtonDirective.prototype, "flat", void 0);
__decorate([
    Input('special-btn'),
    __metadata("design:type", String)
], ButtonDirective.prototype, "specialBtn", void 0);
__decorate([
    Input(), HostBinding('type'),
    __metadata("design:type", Object)
], ButtonDirective.prototype, "type", void 0);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ButtonDirective.prototype, "clickEvent", null);
ButtonDirective = __decorate([
    Directive({
        selector: 'button[m4-button]',
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], ButtonDirective);

let IconComponent = class IconComponent {
    constructor(mainElement) {
        this.mainElement = mainElement;
        this.size = 0;
    }
    createElement() {
        const sizeClass = this.size === 0 ? '' : this.size === 1 ? ' mif-lg' : ' mif-' + this.size + 'x';
        this.elementClass = `${this.class ? this.class + ' ' : ''}mif-${this.icon}${sizeClass}${this.color ? ' fg-' + this.color : ''}`;
    }
    ngOnInit() {
        this.classObserver = AttributeHelper.createObserver(this.mainElement, (newClasses, oldClasses) => {
            this.class = newClasses.join(' ');
            this.createElement();
        });
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
    ngOnDestroy() {
        if (this.classObserver) {
            this.classObserver.disconnect();
        }
    }
};
IconComponent.ctorParameters = () => [
    { type: ElementRef, decorators: [{ type: Optional }] }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], IconComponent.prototype, "icon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], IconComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], IconComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], IconComponent.prototype, "class", void 0);
IconComponent = __decorate([
    Component({
        selector: 'm4-icon',
        template: "<span [ngClass]=\"elementClass\"></span>\n",
        changeDetection: ChangeDetectionStrategy.Default,
        styles: [""]
    }),
    __param(0, Optional()),
    __metadata("design:paramtypes", [ElementRef])
], IconComponent);

let RippleDirective = class RippleDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    createElement() {
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-ripple-target', this.rippleTarget);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-ripple-color', this.rippleColor);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-ripple-alpha', this.rippleAlpha);
        asapScheduler.schedule(() => {
            if (!this.rippleObj) {
                this.rippleObj = $(this.element.nativeElement).ripple().data('ripple');
            }
            else {
                this.rippleObj.options.rippleColor = this.rippleColor;
                this.rippleObj.options.rippleTarget = this.rippleTarget;
                this.rippleObj.options.rippleAlpha = this.rippleAlpha;
            }
        });
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
};
RippleDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input('ripple-target'),
    __metadata("design:type", String)
], RippleDirective.prototype, "rippleTarget", void 0);
__decorate([
    Input('ripple-color'),
    __metadata("design:type", String)
], RippleDirective.prototype, "rippleColor", void 0);
__decorate([
    Input('ripple-alpha'),
    __metadata("design:type", Number)
], RippleDirective.prototype, "rippleAlpha", void 0);
RippleDirective = __decorate([
    Directive({
        selector: '[m4-ripple]'
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], RippleDirective);

let LoadingDirective = class LoadingDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.stateChange = new EventEmitter();
    }
    createElement() {
        if (this.registeredTeardownLogic) {
            this.registeredTeardownLogic.unsubscribe();
        }
        if (this.subscription) {
            this.setDisabled(!this.subscription.closed);
            this.registeredTeardownLogic = this.subscription.add(() => {
                this.setDisabled(!this.subscription.closed);
            });
        }
        else {
            this.setDisabled(false);
        }
    }
    setDisabled(loading) {
        this.stateChange.emit(loading);
        AttributeHelper.setAttribute(this.renderer, this.element, 'disabled', this.disabled || loading);
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
};
LoadingDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input('m4-loading'),
    __metadata("design:type", Subscription)
], LoadingDirective.prototype, "subscription", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], LoadingDirective.prototype, "disabled", void 0);
LoadingDirective = __decorate([
    Directive({
        selector: '[m4-loading]'
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], LoadingDirective);

let LoadingDisplayDirective = class LoadingDisplayDirective {
    constructor(element, templateRef, viewContainer, loadingDirective) {
        this.element = element;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.loadingDirective = loadingDirective;
        this.subscription = this.loadingDirective.stateChange.subscribe((loading) => {
            this.loadingState = loading;
            this.updateView();
        });
    }
    set loading(val) {
        this.conditionValue = val;
        this.updateView();
    }
    updateView() {
        this.viewContainer.clear();
        if (this.loadingState || this.conditionValue) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
LoadingDisplayDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: LoadingDirective }
];
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LoadingDisplayDirective.prototype, "loading", null);
LoadingDisplayDirective = __decorate([
    Directive({
        selector: '[loading]'
    }),
    __metadata("design:paramtypes", [ElementRef,
        TemplateRef,
        ViewContainerRef,
        LoadingDirective])
], LoadingDisplayDirective);

let AnimationDirective = class AnimationDirective {
    constructor(element) {
        this.element = element;
        this.oldClasses = [];
        this.jElement = $(this.element.nativeElement);
    }
    createElement() {
        const newClasses = [`ani-${this.hover ? 'hover-' : ''}${this.animation}`];
        this.oldClasses.forEach(c => {
            this.jElement.removeClass(c);
        });
        newClasses.forEach(c => {
            this.jElement.addClass(c);
        });
        this.oldClasses = newClasses;
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
};
AnimationDirective.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('m4-animation'),
    __metadata("design:type", String)
], AnimationDirective.prototype, "animation", void 0);
__decorate([
    Input('animation-hover'),
    __metadata("design:type", Boolean)
], AnimationDirective.prototype, "hover", void 0);
AnimationDirective = __decorate([
    Directive({
        selector: '[m4-animation]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], AnimationDirective);

let LetDirective = class LetDirective {
    constructor(vcRef, templateRef) {
        this.vcRef = vcRef;
        this.templateRef = templateRef;
        this.context = {};
    }
    set m4Let(context) {
        this.context.$implicit = this.context.ngVar = context;
        this.updateView();
    }
    updateView() {
        this.vcRef.clear();
        this.vcRef.createEmbeddedView(this.templateRef, this.context);
    }
};
LetDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], LetDirective.prototype, "m4Let", null);
LetDirective = __decorate([
    Directive({
        selector: '[m4Let]',
        exportAs: 'let'
    }),
    __metadata("design:paramtypes", [ViewContainerRef, TemplateRef])
], LetDirective);

let NotLoadingDisplayDirective = class NotLoadingDisplayDirective {
    constructor(element, templateRef, viewContainer, loadingDirective) {
        this.element = element;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.loadingDirective = loadingDirective;
        this.subscription = this.loadingDirective.stateChange.subscribe((loading) => {
            this.loadingState = loading;
            this.updateView();
        });
    }
    set notLoading(val) {
        this.conditionValue = val;
        this.updateView();
    }
    updateView() {
        this.viewContainer.clear();
        if (!this.loadingState || this.conditionValue) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
};
NotLoadingDisplayDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TemplateRef },
    { type: ViewContainerRef },
    { type: LoadingDirective }
];
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], NotLoadingDisplayDirective.prototype, "notLoading", null);
NotLoadingDisplayDirective = __decorate([
    Directive({
        selector: '[notLoading]'
    }),
    __metadata("design:paramtypes", [ElementRef,
        TemplateRef,
        ViewContainerRef,
        LoadingDirective])
], NotLoadingDisplayDirective);

const declarations$1 = [
    ButtonDirective,
    IconComponent,
    RippleDirective,
    LoadingDirective,
    LoadingDisplayDirective,
    NotLoadingDisplayDirective,
    AnimationDirective,
    LetDirective,
];
let NgMetro4BaseModule = class NgMetro4BaseModule {
};
NgMetro4BaseModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            ...declarations$1,
        ],
        exports: [
            ...declarations$1
        ]
    })
], NgMetro4BaseModule);

let GravatarComponent = class GravatarComponent {
    constructor() {
        this.size = 80;
    }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], GravatarComponent.prototype, "email", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], GravatarComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], GravatarComponent.prototype, "default", void 0);
GravatarComponent = __decorate([
    Component({
        selector: 'm4-gravatar',
        template: "<img data-role=\"gravatar\"\n     [attr.data-email]=\"email\"\n     [attr.data-size]=\"size\"\n     [attr.data-default]=\"default\">\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], GravatarComponent);

let DonutComponent = class DonutComponent {
    constructor() { }
    createControl() {
        asapScheduler.schedule(() => {
            const originalElement = $(this.donut.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.donutObj = this.clonedElement.donut().data('donut');
        });
    }
    ngOnInit() {
        this.createControl();
    }
    ngOnChanges(changes) {
        if (Object.keys(changes).filter(c => c !== 'value').length > 0) {
            this.createControl();
        }
        else {
            if (this.donutObj) {
                this.donutObj.val(this.value);
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], DonutComponent.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DonutComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DonutComponent.prototype, "radius", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DonutComponent.prototype, "hole", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DonutComponent.prototype, "background", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DonutComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DonutComponent.prototype, "stroke", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DonutComponent.prototype, "fill", void 0);
__decorate([
    Input('font-size'),
    __metadata("design:type", Number)
], DonutComponent.prototype, "fontSize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DonutComponent.prototype, "total", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DonutComponent.prototype, "caption", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], DonutComponent.prototype, "animate", void 0);
__decorate([
    Input('show-value'),
    __metadata("design:type", Boolean)
], DonutComponent.prototype, "showValue", void 0);
__decorate([
    ViewChild('donut', { static: true }),
    __metadata("design:type", ElementRef)
], DonutComponent.prototype, "donut", void 0);
DonutComponent = __decorate([
    Component({
        selector: 'm4-donut',
        template: "<div #donut\n     [attr.data-value]=\"value\"\n     [attr.data-size]=\"size\"\n     [attr.data-radius]=\"radius\"\n     [attr.data-hole]=\"hole\"\n     [attr.data-background]=\"background\"\n     [attr.data-color]=\"color\"\n     [attr.data-stroke]=\"stroke\"\n     [attr.data-fill]=\"fill\"\n     [attr.data-font-size]=\"fontSize\"\n     [attr.data-total]=\"total\"\n     [attr.data-cap]=\"caption\"\n     [attr.data-animate]=\"animate\"\n     [attr.data-show-value]=\"showValue\"></div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], DonutComponent);

let ProgressComponent = class ProgressComponent {
    constructor() { }
    createControl() {
        asapScheduler.schedule(() => {
            const originalElement = $(this.progress.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.progressObj = this.clonedElement.progress().data('progress');
        });
    }
    ngOnInit() {
        this.createControl();
    }
    ngOnChanges(changes) {
        if (Object.keys(changes).filter(c => c !== 'value' && c !== 'buffer').length > 0) {
            this.createControl();
        }
        else {
            if (this.progressObj) {
                this.progressObj.val(this.value);
                this.progressObj.buff(this.buffer);
            }
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], ProgressComponent.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ProgressComponent.prototype, "buffer", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ProgressComponent.prototype, "small", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ProgressComponent.prototype, "type", void 0);
__decorate([
    Input('cls-back'),
    __metadata("design:type", String)
], ProgressComponent.prototype, "clsBack", void 0);
__decorate([
    Input('cls-bar'),
    __metadata("design:type", String)
], ProgressComponent.prototype, "clsBar", void 0);
__decorate([
    Input('cls-buffer'),
    __metadata("design:type", String)
], ProgressComponent.prototype, "clsBuffer", void 0);
__decorate([
    ViewChild('progress', { static: true }),
    __metadata("design:type", ElementRef)
], ProgressComponent.prototype, "progress", void 0);
ProgressComponent = __decorate([
    Component({
        selector: 'm4-progress',
        template: "<div #progress\n     [attr.data-value]=\"value\"\n     [attr.data-buffer]=\"buffer\"\n     [attr.data-small]=\"small\"\n     [attr.data-type]=\"type\"\n     [attr.data-cls-back]=\"clsBack\"\n     [attr.data-cls-bar]=\"clsBar\"\n     [attr.data-cls-buffer]=\"clsBuffer\"\n></div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], ProgressComponent);

let ActivityComponent = class ActivityComponent {
    constructor() { }
    createControl() {
        asapScheduler.schedule(() => {
            const originalElement = $(this.activity.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.remove();
            }
            this.clonedElement = originalElement.clone();
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.clonedElement.activity();
        });
    }
    ngOnInit() {
        this.createControl();
    }
    ngOnChanges(changes) {
        this.createControl();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ActivityComponent.prototype, "type", void 0);
__decorate([
    Input('activity-style'),
    __metadata("design:type", String)
], ActivityComponent.prototype, "activityStyle", void 0);
__decorate([
    ViewChild('activity', { static: true }),
    __metadata("design:type", ElementRef)
], ActivityComponent.prototype, "activity", void 0);
ActivityComponent = __decorate([
    Component({
        selector: 'm4-activity',
        template: "<div #activity\n     [attr.data-type]=\"type\"\n     [attr.data-style]=\"activityStyle\"\n></div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], ActivityComponent);

let PopoverDirective = class PopoverDirective {
    constructor(element, renderer, document) {
        this.element = element;
        this.renderer = renderer;
        this.document = document;
        this.popoverPosition = 'top';
    }
    createElement() {
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-popover-text', this.popoverText);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-popover-position', this.popoverPosition);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-popover-trigger', this.popoverTrigger);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-popover-hide', this.popoverHide);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-cls-popover', this.clsPopover);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-close-button', this.closeBtn);
        asapScheduler.schedule(() => {
            if (!this.popoverObj) {
                this.popoverObj = $(this.element.nativeElement).popover().data('popover');
            }
            else {
                this.popoverObj.options.popoverText = this.popoverText;
                this.popoverObj.options.popoverPosition = this.popoverPosition;
                this.popoverObj.options.popoverTrigger = this.popoverTrigger;
                this.popoverObj.options.popoverHide = this.popoverHide;
                this.popoverObj.options.closeButton = this.closeBtn;
                this.popoverObj.options.clsPopover = this.clsPopover;
            }
        });
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
};
PopoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
__decorate([
    Input('m4-popover'),
    __metadata("design:type", String)
], PopoverDirective.prototype, "popoverText", void 0);
__decorate([
    Input('popover-position'),
    __metadata("design:type", String)
], PopoverDirective.prototype, "popoverPosition", void 0);
__decorate([
    Input('popover-trigger'),
    __metadata("design:type", String)
], PopoverDirective.prototype, "popoverTrigger", void 0);
__decorate([
    Input('popover-hide'),
    __metadata("design:type", Number)
], PopoverDirective.prototype, "popoverHide", void 0);
__decorate([
    Input('popover-close-button'),
    __metadata("design:type", Boolean)
], PopoverDirective.prototype, "closeBtn", void 0);
__decorate([
    Input('cls-popover'),
    __metadata("design:type", Number)
], PopoverDirective.prototype, "clsPopover", void 0);
PopoverDirective = __decorate([
    Directive({
        selector: '[m4-popover]'
    }),
    __param(2, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [ElementRef, Renderer2, Object])
], PopoverDirective);

let PanelComponent = class PanelComponent {
    constructor() { }
    createElement() {
        asapScheduler.schedule(() => {
            const originalElement = $(this.panel.nativeElement);
            ObjectHelper.hide(originalElement);
            if (this.clonedElement) {
                this.clonedElement.children().appendTo(originalElement);
                this.clonedElement.parent().remove();
            }
            this.clonedElement = originalElement.clone();
            originalElement.children().appendTo(this.clonedElement);
            ObjectHelper.show(this.clonedElement);
            originalElement.parent().append(this.clonedElement);
            this.panelObj = this.clonedElement.panel({
                customButtons: this.customButtons
            }).data('panel');
        });
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], PanelComponent.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], PanelComponent.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PanelComponent.prototype, "title", void 0);
__decorate([
    Input('title-icon'),
    __metadata("design:type", String)
], PanelComponent.prototype, "titleIcon", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PanelComponent.prototype, "collapsible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PanelComponent.prototype, "collapsed", void 0);
__decorate([
    Input('custom-buttons'),
    __metadata("design:type", Array)
], PanelComponent.prototype, "customButtons", void 0);
__decorate([
    Input('cls-panel'),
    __metadata("design:type", String)
], PanelComponent.prototype, "clsPanel", void 0);
__decorate([
    Input('cls-title'),
    __metadata("design:type", String)
], PanelComponent.prototype, "clsTitle", void 0);
__decorate([
    Input('cls-title-caption'),
    __metadata("design:type", String)
], PanelComponent.prototype, "clsTitleCaption", void 0);
__decorate([
    Input('cls-title-icon'),
    __metadata("design:type", String)
], PanelComponent.prototype, "clsTitleIcon", void 0);
__decorate([
    Input('cls-content'),
    __metadata("design:type", String)
], PanelComponent.prototype, "clsContent", void 0);
__decorate([
    Input('cls-collapse-toggle'),
    __metadata("design:type", String)
], PanelComponent.prototype, "clsCollapseToggle", void 0);
__decorate([
    ViewChild('panel', { static: true }),
    __metadata("design:type", ElementRef)
], PanelComponent.prototype, "panel", void 0);
PanelComponent = __decorate([
    Component({
        selector: 'm4-panel',
        template: "<div #panel\n     [attr.data-width]=\"width\"\n     [attr.data-height]=\"height\"\n     [attr.data-title-caption]=\"title\"\n     [attr.data-title-icon]=\"titleIcon\"\n     [attr.data-collapsible]=\"collapsible\"\n     [attr.data-collapsed]=\"collapsed\"\n\n     [attr.data-cls-panel]=\"clsPanel\"\n     [attr.data-cls-title]=\"clsTitle\"\n     [attr.data-cls-title-caption]=\"clsTitleCaption\"\n     [attr.data-cls-title-icon]=\"clsTitleIcon\"\n     [attr.data-cls-content]=\"clsContent\"\n     [attr.data-cls-collapse-toggle]=\"clsCollapseToggle\">\n  <ng-content></ng-content>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], PanelComponent);

let HotkeyDirective = class HotkeyDirective {
    constructor() {
        this.hotkeyClick = new EventEmitter();
    }
    createElement() {
        this.unregister();
        this.previousKey = this.hotkey;
        $('body').hotkey(this.hotkey, () => {
            this.hotkeyClick.emit();
        });
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
    unregister() {
        if (this.previousKey) {
            $('body').off('keyup', null, { ns: 'hotkey-method-' + this.previousKey });
        }
    }
    ngOnDestroy() {
        this.unregister();
    }
};
__decorate([
    Input('m4-hotkey'),
    __metadata("design:type", String)
], HotkeyDirective.prototype, "hotkey", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], HotkeyDirective.prototype, "hotkeyClick", void 0);
HotkeyDirective = __decorate([
    Directive({
        selector: '[m4-hotkey]'
    }),
    __metadata("design:paramtypes", [])
], HotkeyDirective);

let PopoverComponent = class PopoverComponent {
    ngAfterViewInit() {
        asapScheduler.schedule(() => {
            this.popover.popoverObj.options.onPopoverShow = () => {
                if (this.popover.popoverObj.popover) {
                    $(this.content.nativeElement).children().appendTo(this.popover.popoverObj.popover.find('.popover-content'));
                    this.popover.popoverObj.size = Metro.utils.hiddenElementSize(this.popover.popoverObj.popover);
                    this.popover.popoverObj.setPosition();
                }
            };
            this.popover.popoverObj.options.onPopoverHide = () => {
                asapScheduler.schedule(() => {
                    if (this.popover.popoverObj && this.popover.popoverObj.popover) {
                        this.popover.popoverObj.popover.find('.popover-content').children().appendTo($(this.content.nativeElement));
                    }
                }, 300);
            };
        }, 1);
    }
};
__decorate([
    ContentChild(PopoverDirective, { static: true }),
    __metadata("design:type", PopoverDirective)
], PopoverComponent.prototype, "popover", void 0);
__decorate([
    ViewChild('popoverContent', { static: true }),
    __metadata("design:type", ElementRef)
], PopoverComponent.prototype, "content", void 0);
PopoverComponent = __decorate([
    Component({
        selector: 'm4-popover',
        template: "<ng-content></ng-content>\n\n<div class=\"m4-popover-content\" #popoverContent>\n  <ng-content select=\"[content]\"></ng-content>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".m4-popover-content{display:none}"]
    })
], PopoverComponent);

let ActivityService = class ActivityService {
    constructor() { }
    /**
     * Open an activity
     * @param options The activity options
     */
    open(options) {
        return window.Metro.activity.open(options);
    }
    /**
     * Closes an opened activity
     * @param activity The activity object returned by open
     */
    close(activity) {
        window.Metro.activity.close(activity);
    }
};
ActivityService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ActivityService);

let DraggableDirective = class DraggableDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.dragStart = new EventEmitter();
        this.dragStop = new EventEmitter();
        this.dragMove = new EventEmitter();
    }
    createElement() {
        asapScheduler.schedule(() => {
            if (this.draggableData) {
                if (this.dragArea) {
                    this.draggableData.elem.remove();
                }
                this.draggableData.destroy();
            }
            const draggableOptions = {
                onDragStart: (position) => {
                    this.dragStart.emit(position);
                },
                onDragStop: (position) => {
                    this.dragStop.emit(position);
                },
                onDragMove: (position) => {
                    this.dragMove.emit(position);
                }
            };
            if (this.dragElement) {
                draggableOptions.dragElement = this.dragElement;
            }
            if (this.dragArea) {
                draggableOptions.dragArea = this.dragArea;
            }
            this.draggableData = $(this.element.nativeElement).draggable(draggableOptions).data('draggable');
        });
    }
    setPosition(position) {
        if (this.draggableData) {
            $(this.draggableData.elem).css({
                left: position.x + 'px',
                top: position.y + 'px'
            });
        }
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
    ngOnDestroy() {
        $(this.element.nativeElement).remove();
    }
};
DraggableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input('m4-draggable'),
    __metadata("design:type", String)
], DraggableDirective.prototype, "dragElement", void 0);
__decorate([
    Input('drag-area'),
    __metadata("design:type", String)
], DraggableDirective.prototype, "dragArea", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "dragStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "dragStop", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], DraggableDirective.prototype, "dragMove", void 0);
DraggableDirective = __decorate([
    Directive({
        selector: '[m4-draggable]'
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], DraggableDirective);

const declarations$2 = [
    GravatarComponent,
    DonutComponent,
    ProgressComponent,
    ActivityComponent,
    PopoverDirective,
    PanelComponent,
    HotkeyDirective,
    PopoverComponent,
    DraggableDirective
];
let NgMetro4ControlsModule = class NgMetro4ControlsModule {
};
NgMetro4ControlsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
        ],
        declarations: [
            ...declarations$2,
        ],
        exports: [
            ...declarations$2,
        ],
        providers: [
            ActivityService
        ]
    })
], NgMetro4ControlsModule);

let HintDirective = class HintDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.hintPosition = 'top';
        this.hintOffset = 6;
    }
    createElement() {
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-hint-text', this.hintText);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-hint-position', this.hintPosition);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-hint-hide', this.hintHide);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-cls-hint', this.clsHint);
        AttributeHelper.setAttribute(this.renderer, this.element, 'data-hint-offset', this.hintOffset);
        asapScheduler.schedule(() => {
            if (!this.hintObj) {
                this.hintObj = $(this.element.nativeElement).hint().data('hint');
            }
            else {
                this.hintObj.options.hintText = this.hintText;
                this.hintObj.options.hintPosition = this.hintPosition;
                this.hintObj.options.hintHide = this.hintHide;
                this.hintObj.options.clsHint = this.clsHint;
                this.hintObj.options.hintOffset = this.hintOffset;
            }
        });
    }
    ngOnInit() {
        this.createElement();
    }
    ngOnChanges(changes) {
        this.createElement();
    }
};
HintDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input('m4-hint'),
    __metadata("design:type", String)
], HintDirective.prototype, "hintText", void 0);
__decorate([
    Input('hint-position'),
    __metadata("design:type", String)
], HintDirective.prototype, "hintPosition", void 0);
__decorate([
    Input('hint-hide'),
    __metadata("design:type", Number)
], HintDirective.prototype, "hintHide", void 0);
__decorate([
    Input('cls-hint'),
    __metadata("design:type", String)
], HintDirective.prototype, "clsHint", void 0);
__decorate([
    Input('hint-offset'),
    __metadata("design:type", Object)
], HintDirective.prototype, "hintOffset", void 0);
HintDirective = __decorate([
    Directive({
        selector: '[m4-hint]'
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], HintDirective);

let DialogComponent = class DialogComponent {
    constructor(element) {
        this.element = element;
        this.isOpen = false;
        this.closeEvent = new EventEmitter();
        this.closeSubject$ = new Subject();
    }
    open() {
        this.dialogObj.open();
        return this.closeSubject$.pipe(take(1), finalize(() => this.close()));
    }
    close() {
        if (this.dialogObj) {
            this.dialogObj.close();
        }
    }
    ngAfterViewInit() {
        const dialogOptions = {
            width: this.width,
            show: this.isOpen,
            overlay: this.overlay,
            overlayClickClose: this.overlayClickClose
        };
        if (this.overlayColor) {
            dialogOptions.overlayColor = this.overlayColor;
        }
        if (this.overlayAlpha) {
            dialogOptions.overlayAlpha = this.overlayAlpha;
        }
        this.dialogObj = $(this.dialog.nativeElement).dialog(dialogOptions).data('dialog');
        this.dialogObj.options.onClose = () => {
            this.closeEvent.emit();
            this.closeSubject$.next(this.data);
        };
        this.observeClassValue();
    }
    observeClassValue() {
        const classValueCallback = () => {
            const classValue = this.element.nativeElement.getAttribute('class');
            this.dialogObj.element.attr('class', `${classValue ? classValue + ' ' : ''}dialog`);
        };
        this.classObserver = new MutationObserver(classValueCallback);
        this.classObserver.observe(this.element.nativeElement, {
            attributeFilter: ['class'],
            attributes: true
        });
        classValueCallback();
    }
    ngOnChanges(changes) {
        if (this.dialogObj) {
            if (changes['isOpen']) {
                if (this.isOpen) {
                    this.open();
                }
                else {
                    this.close();
                }
            }
            if (changes['width']) {
                this.dialogObj.element.css('width', `${this.width}px`);
            }
            if (changes['overlay'] || changes['overlayColor'] || changes['overlayAlpha'] || changes['overlayClickClose']) {
                this.dialogObj.options.overlay = this.overlay;
                this.dialogObj.options.overlayColor = this.overlayColor;
                this.dialogObj.options.overlayAlpha = this.overlayAlpha;
                this.dialogObj.options.overlayClickClose = this.overlayClickClose;
            }
        }
    }
    ngOnDestroy() {
        if (this.dialogObj) {
            this.close();
            this.dialogObj.element.remove();
        }
        if (this.classObserver) {
            this.classObserver.disconnect();
        }
    }
};
DialogComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input('open'),
    __metadata("design:type", Object)
], DialogComponent.prototype, "isOpen", void 0);
__decorate([
    Input('width'),
    __metadata("design:type", String)
], DialogComponent.prototype, "width", void 0);
__decorate([
    Input('overlay'),
    __metadata("design:type", Boolean)
], DialogComponent.prototype, "overlay", void 0);
__decorate([
    Input('overlay-color'),
    __metadata("design:type", String)
], DialogComponent.prototype, "overlayColor", void 0);
__decorate([
    Input('overlay-alpha'),
    __metadata("design:type", String)
], DialogComponent.prototype, "overlayAlpha", void 0);
__decorate([
    Input('overlay-click-close'),
    __metadata("design:type", Boolean)
], DialogComponent.prototype, "overlayClickClose", void 0);
__decorate([
    Input('data'),
    __metadata("design:type", Object)
], DialogComponent.prototype, "data", void 0);
__decorate([
    ViewChild('dialog', { static: true }),
    __metadata("design:type", ElementRef)
], DialogComponent.prototype, "dialog", void 0);
__decorate([
    Output('close-event'),
    __metadata("design:type", Object)
], DialogComponent.prototype, "closeEvent", void 0);
DialogComponent = __decorate([
    Component({
        selector: 'm4-dialog',
        template: "<div #dialog>\n  <div class=\"dialog-title\">\n    <ng-content select=\"[dialog-title]\"></ng-content>\n  </div>\n  <div class=\"dialog-content\">\n    <ng-content select=\"[dialog-content]\"></ng-content>\n  </div>\n  <div class=\"dialog-actions\">\n    <ng-content select=\"[dialog-actions]\"></ng-content>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    }),
    __metadata("design:paramtypes", [ElementRef])
], DialogComponent);

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

let NotifyService = class NotifyService {
    constructor() { }
    /**
     * Setup the notify system
     * @param options The options for the setup
     */
    setup(options) {
        window.Metro.notify.setup(options);
    }
    /**
     * Reset the settings of the notify system
     */
    reset() {
        window.Metro.notify.reset();
    }
    /**
     * Create a notify
     * @param message The message
     * @param title The title
     * @param options Optional options object
     */
    create(message, title, options) {
        const closeSubject$ = new Subject();
        window.Metro.notify.create(message, title, Object.assign({ onClose: () => {
                closeSubject$.next();
                closeSubject$.complete();
            } }, options));
        return closeSubject$.asObservable();
    }
};
NotifyService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], NotifyService);

let ToastService = class ToastService {
    constructor() { }
    /**
     * Create a toast message
     * @param message The message
     * @param options The options of the toast
     */
    create(message, options = {}) {
        const closeSubject$ = new Subject();
        window.Metro.toast.create(message, () => {
            closeSubject$.next();
            closeSubject$.complete();
        }, options.timeout, options.cls, options.additional);
        return closeSubject$.asObservable();
    }
};
ToastService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ToastService);

const declarations$3 = [
    HintDirective,
    DialogComponent
];
let NgMetro4InformationModule = class NgMetro4InformationModule {
};
NgMetro4InformationModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            ...declarations$3,
        ],
        exports: [
            ...declarations$3
        ],
        providers: [
            DialogService,
            NotifyService,
            ToastService
        ]
    })
], NgMetro4InformationModule);

const imports = [
    NgMetro4BaseModule,
    NgMetro4FormsModule,
    NgMetro4ControlsModule,
    NgMetro4InformationModule
];
let NgMetro4Module = class NgMetro4Module {
};
NgMetro4Module = __decorate([
    NgModule({
        imports: [
            CommonModule,
            ...imports
        ],
        declarations: [],
        exports: [
            ...imports,
        ],
        providers: []
    })
], NgMetro4Module);

/*
 * Public API Surface of ng-metro4
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ActivityComponent, ActivityService, AnimationDirective, ArrayHelper, AttributeHelper, ButtonDirective, CalendarComponent, CalendarPickerComponent, CheckboxComponent, CheckboxGroupComponent, CompareHelper, ControlBase, DatePickerComponent, DialogComponent, DialogService, DonutComponent, DraggableDirective, DynamicFormControlComponent, FileInputComponent, FormBuilderComponent, FormControlWrapperComponent, FormWrapperComponent, GravatarComponent, HintDirective, HotkeyDirective, IconComponent, InputComponent, KeypadComponent, LetDirective, Lists, LoadingDirective, LoadingDisplayDirective, M4FormControl, M4FormGroup, MaterialInputComponent, NgMetro4BaseModule, NgMetro4ControlsModule, NgMetro4FormsModule, NgMetro4InformationModule, NgMetro4Module, NotLoadingDisplayDirective, NotifyService, ObjectHelper, PanelComponent, PopoverComponent, PopoverDirective, ProgressComponent, RadioComponent, RadioGroupComponent, RatingComponent, RippleDirective, SelectComponent, SliderComponent, SpinnerComponent, StringHelper, SwitchComponent, TagInputComponent, TextareaComponent, TimePickerComponent, ToastService, accentDictionary, activityDictionary, activityStyleDictionary, animationDictionary, buttonShapeDictionary, buttonSpecialDictionary, calendarButtonDictionary, colorDictionary, easingDictionary, fileReadModeDictionary, gravatarDictionary, iconCategoryDictionary, iconDictionary, inputDictionary, observerClassExceptions, popoverTriggerDictionary, positionBaseDictionary, positionDictionary, positionHorizontalDictionary, positionVerticalDictionary, progressTypeDictionary, roundTypeDictionary, sizeDictionary, spinnerButtonPositionDictionary, thinDictionary, widePointDictionary, IsArrayPipe as ɵa, ErrorDisplayPipe as ɵb, UnwrapObservableOrValuePipe as ɵc, ExecuteFunctionOncePipe as ɵd, TrustHtmlPipe as ɵe, ObjectKeysPipe as ɵf, DefaultValueAccessor as ɵg, TypeAlias as ɵh, CreateHashPipe as ɵi };
//# sourceMappingURL=ng-metro4.js.map
