webpackJsonp([0],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespondentProfilePageModule", function() { return RespondentProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__respondent_profile__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RespondentProfilePageModule = /** @class */ (function () {
    function RespondentProfilePageModule() {
    }
    RespondentProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__respondent_profile__["a" /* RespondentProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__respondent_profile__["a" /* RespondentProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
        })
    ], RespondentProfilePageModule);
    return RespondentProfilePageModule;
}());

//# sourceMappingURL=respondent-profile.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonic3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);


var BrMaskModel = (function () {
    function BrMaskModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
    }
    return BrMaskModel;
}());

var BrMaskerIonic3 = (function () {
    function BrMaskerIonic3(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.brmasker = new BrMaskModel();
    }
    BrMaskerIonic3.prototype.inputKeyup = function (event) {
        var value = this.returnValue(event.target.value);
        this.writeValue(value);
        event.target.value = value;
    };
    BrMaskerIonic3.prototype.inputOnblur = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.inputFocus = function (event) {
        var value = this.returnValue(event.value);
        this.writeValue(value);
        event.value = value;
    };
    BrMaskerIonic3.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
    };
    BrMaskerIonic3.prototype.writeValue = function (fn) {
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', fn);
    };
    BrMaskerIonic3.prototype.registerOnChange = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.registerOnTouched = function (fn) {
        return;
    };
    BrMaskerIonic3.prototype.setDisabledState = function (isDisabled) {
        if (isDisabled) {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'true');
        }
        else {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'disabled', 'false');
        }
    };
    BrMaskerIonic3.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    BrMaskerIonic3.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    BrMaskerIonic3.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    BrMaskerIonic3.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskModel(); }
        return this.moneyMask(value, config);
    };
    BrMaskerIonic3.prototype.returnValue = function (value) {
        if (!this.brmasker.mask) {
            this.brmasker.mask = '';
        }
        if (value) {
            var v = value;
            if (this.brmasker.type == 'alfa') {
                v = v.replace(/\d/gi, '');
            }
            if (this.brmasker.type == 'num') {
                v = v.replace(/\D/gi, '');
            }
            if (this.brmasker.money) {
                return this.moneyMask(this.onInput(v), this.brmasker);
            }
            if (this.brmasker.phone) {
                return this.phoneMask(v);
            }
            if (this.brmasker.phoneNotDDD) {
                return this.phoneNotDDDMask(v);
            }
            if (this.brmasker.person) {
                return this.peapollMask(v);
            }
            if (this.brmasker.percent) {
                return this.percentMask(v);
            }
            if (this.brmasker.numberAndTousand) {
                return this.thousand(v);
            }
            if (this.brmasker.userCaracters) {
                return this.usingSpecialCharacters(v, this.brmasker.mask, this.brmasker.len);
            }
            return this.onInput(v);
        }
        else {
            return '';
        }
    };
    BrMaskerIonic3.prototype.percentMask = function (v) {
        var tmp = v;
        tmp = tmp.replace(/\D/gi, '');
        tmp = tmp.replace(/%/gi, '');
        tmp = tmp.replace(/([0-9]{0})$/gi, '%$1');
        return tmp;
    };
    BrMaskerIonic3.prototype.phoneMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 15;
            this.brmasker.mask = '(99) 99999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{5})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '(99) 9999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1 $2');
            n = n.replace(/(\d{4})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.phoneNotDDDMask = function (v) {
        var n = v;
        if (n.length > 9) {
            this.brmasker.len = 10;
            this.brmasker.mask = '99999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{5})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        else {
            this.brmasker.len = 9;
            this.brmasker.mask = '9999-9999';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{4})(\d)/gi, '$1-$2');
            n = n.replace(/(\d{4})(\d)/gi, '$1$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.peapollMask = function (v) {
        var n = v;
        if (n.length > 14) {
            this.brmasker.len = 18;
            this.brmasker.mask = '99.999.999/9999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{2})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1/$2');
            n = n.replace(/(\d{4})(\d{1,4})$/gi, '$1-$2');
            n = n.replace(/(\d{2})(\d{1,2})$/gi, '$1$2');
        }
        else {
            this.brmasker.len = 14;
            this.brmasker.mask = '999.999.999-99';
            n = n.replace(/\D/gi, '');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d)/gi, '$1.$2');
            n = n.replace(/(\d{3})(\d{1,2})$/gi, '$1-$2');
        }
        return this.onInput(n);
    };
    BrMaskerIonic3.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp("([0-9]{" + decimal + "})$", "g"), config.decimalCaracter + '$1');
        if (value.length === decimal + 1) {
            return "0" + value; // leading 0 so we're not left with something weird like ",50"
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1); // remove leading 0 when we don't need it anymore
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    BrMaskerIonic3.prototype.onInput = function (value) {
        var ret = this.formatField(value, this.brmasker.mask, this.brmasker.len);
        return ret;
        // if (ret) {
        //   this.element.nativeElement.value = ret;
        // }
    };
    BrMaskerIonic3.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        if (thousands) {
            return thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        }
        return val;
    };
    BrMaskerIonic3.prototype.usingSpecialCharacters = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    BrMaskerIonic3.prototype.formatField = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskerIonic3;
}());

BrMaskerIonic3.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[brmasker]',
                providers: [
                    {
                        provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                        useExisting: BrMaskerIonic3,
                        multi: true
                    }
                ]
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
BrMaskerIonic3.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], },
]; };
BrMaskerIonic3.propDecorators = {
    'brmasker': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */] },],
    'inputKeyup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['keyup', ['$event'],] },],
    'inputOnblur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['ionBlur', ['$event'],] },],
    'inputFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */], args: ['ionFocus', ['$event'],] },],
};
//# sourceMappingURL=brmasker-ionic-3.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BrMaskServicesModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerIonicServices3; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var BrMaskServicesModel = (function () {
    function BrMaskServicesModel() {
        this.type = 'alfa';
        this.decimal = 2;
        this.decimalCaracter = ",";
        this.userCaracters = false;
        this.numberAndTousand = false;
    }
    return BrMaskServicesModel;
}());

var BrMaskerIonicServices3 = (function () {
    function BrMaskerIonicServices3() {
        this.brmasker = new BrMaskServicesModel();
    }
    BrMaskerIonicServices3.prototype.ngOnInit = function () {
        if (!this.brmasker.type) {
            this.brmasker.type = 'all';
        }
        if (!this.brmasker.decimal) {
            this.brmasker.decimal = 2;
        }
        if (!this.brmasker.decimalCaracter) {
            this.brmasker.decimalCaracter = ',';
        }
    };
    BrMaskerIonicServices3.prototype.writeCreateValue = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        if (value && config.phone) {
            return value.replace(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/gi, '$1 ($2) $3-$4');
        }
        if (value && config.money) {
            return this.writeValueMoney(value, config);
        }
        if (value && config.person) {
            return this.writeValuePerson(value);
        }
        if (value && config.percent) {
            return this.writeValuePercent(value);
        }
        if (value && config.numberAndTousand) {
            return this.writeValueNumberAndThousand(value);
        }
        if (value && config.userCaracters) {
            return this.writeValueusingSpecialCharacters(value);
        }
        if (value && config.mask) {
            this.brmasker.mask = config.mask;
            if (config.len) {
                this.brmasker.len = config.len;
            }
            return this.onInput(value);
        }
        return value;
    };
    BrMaskerIonicServices3.prototype.writeValuePercent = function (value) {
        value.replace(/\D/gi, '');
        value.replace(/%/gi, '');
        return value.replace(/([0-9]{0})$/gi, '%$1');
    };
    BrMaskerIonicServices3.prototype.writeValuePerson = function (value) {
        if (value.length <= 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, '\$1.\$2.\$3\-\$4');
        }
        else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/gi, '\$1.\$2.\$3\/\$4\-\$5');
        }
    };
    BrMaskerIonicServices3.prototype.writeValueMoney = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.moneyMask(value, config);
    };
    BrMaskerIonicServices3.prototype.writeValueNumberAndThousand = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.thousand(value);
    };
    BrMaskerIonicServices3.prototype.writeValueusingSpecialCharacters = function (value, config) {
        if (config === void 0) { config = new BrMaskServicesModel(); }
        return this.usingSpecialCharacters(value, config.mask, config.len);
    };
    BrMaskerIonicServices3.prototype.moneyMask = function (value, config) {
        var decimal = config.decimal || this.brmasker.decimal;
        value = value
            .replace(/\D/gi, '')
            .replace(new RegExp("([0-9]{" + decimal + "})$", "g"), config.decimalCaracter + '$1');
        if (value.length === decimal + 1) {
            return "0" + value; // leading 0 so we're not left with something weird like ",50"
        }
        else if (value.length > decimal + 2 && value.charAt(0) === '0') {
            return value.substr(1); // remove leading 0 when we don't need it anymore
        }
        if (config.thousand && value.length > (Number(4) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.decimalCaracter + "$2");
        }
        if (config.thousand && value.length > (Number(8) + Number(config.decimal))) {
            value = value.replace(new RegExp("([0-9]{3})" + config.thousand + "([0-9]{3})" + config.decimalCaracter + "([0-9]{" + config.decimal + "}$)", "g"), config.thousand + "$1" + config.thousand + "$2" + config.decimalCaracter + "$3");
        }
        return value;
    };
    BrMaskerIonicServices3.prototype.onInput = function (value) {
        var ret = this.formatField(value, this.brmasker.mask, this.brmasker.len);
        return ret;
    };
    BrMaskerIonicServices3.prototype.thousand = function (value) {
        var val = value.replace(/\D/gi, '');
        var reverse = val.toString().split('').reverse().join('');
        var thousands = reverse.match(/\d{1,3}/g);
        val = thousands.join("" + (this.brmasker.thousand || '.')).split('').reverse().join('');
        return val;
    };
    BrMaskerIonicServices3.prototype.usingSpecialCharacters = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\,| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === ','));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    BrMaskerIonicServices3.prototype.formatField = function (campo, Mascara, tamanho) {
        if (!tamanho) {
            tamanho = 99999999999;
        }
        var boleanoMascara;
        var exp = /\-|\.|\/|\(|\)|\,|\*|\+|\@|\#|\$|\&|\%|\:| /gi;
        var campoSoNumeros = campo.toString().replace(exp, '');
        var posicaoCampo = 0;
        var NovoValorCampo = '';
        var TamanhoMascara = campoSoNumeros.length;
        for (var i = 0; i < TamanhoMascara; i++) {
            if (i < tamanho) {
                boleanoMascara = ((Mascara.charAt(i) === '-') || (Mascara.charAt(i) === '.') || (Mascara.charAt(i) === '/'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '(') || (Mascara.charAt(i) === ')') || (Mascara.charAt(i) === ' '));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === ',') || (Mascara.charAt(i) === '*') || (Mascara.charAt(i) === '+'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '@') || (Mascara.charAt(i) === '#') || (Mascara.charAt(i) === ':'));
                boleanoMascara = boleanoMascara || ((Mascara.charAt(i) === '$') || (Mascara.charAt(i) === '&') || (Mascara.charAt(i) === '%'));
                if (boleanoMascara) {
                    NovoValorCampo += Mascara.charAt(i);
                    TamanhoMascara++;
                }
                else {
                    NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                    posicaoCampo++;
                }
            }
        }
        return NovoValorCampo;
    };
    return BrMaskerIonicServices3;
}());

BrMaskerIonicServices3.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */], args: [{
                selector: '[brmasker]',
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */] },
];
/** @nocollapse */
BrMaskerIonicServices3.ctorParameters = function () { return []; };
//# sourceMappingURL=brmasker-ionic-services.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RespondentProfilePage; });
/* unused harmony export ResidenceTime */
/* unused harmony export SalaryRange */
/* unused harmony export Respondent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_city_city__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_neighborhood_neighborhood__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_database_database__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_respondent_respondent__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_prioritization_prioritization__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var RespondentProfilePage = /** @class */ (function () {
    function RespondentProfilePage(navCtrl, databaseProvider, cityProvider, formBuilder, respondentProvider, neighborhoodProvider, priorizationProvider, alertCtrl, storage, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.databaseProvider = databaseProvider;
        this.cityProvider = cityProvider;
        this.formBuilder = formBuilder;
        this.respondentProvider = respondentProvider;
        this.neighborhoodProvider = neighborhoodProvider;
        this.priorizationProvider = priorizationProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.cities = [];
        this.residenceTimeList = [];
        this.salaryRangeList = [];
        this.residenceTimeName = "";
        this.salaryRangeName = "";
        this.metricItems = [];
        this.jobNeighborhoodDisabled = true;
        this.isSameJobCity = "hide";
        this.QUESTIONARY_CASE_TEST = "Urbanização";
        this.createForm();
        this.getAllCities();
        this.loadMetrics();
        this.loadResidenceTime();
        this.loadSalaryRange();
        setTimeout(function () {
            _this.existsRespondent();
        }, 1000);
    }
    RespondentProfilePage.prototype.existsRespondent = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        this.storage.get('respondent')
            .then(function (respondent) {
            _this.setFormData();
            if (respondent != null) {
                _this.respondentForm.controls['cpf'].setValue(respondent.cpf);
                _this.respondentForm.controls['email'].setValue(respondent.email);
                _this.respondentForm.controls['residenceTimeRange'].setValue(respondent.residenceTimeRange);
                _this.respondentForm.controls['salaryRange'].setValue(respondent.salaryRange);
                _this.respondentForm.controls['residenceNeighborhood'].setValue(respondent.residenceNeighborhood);
                _this.respondentForm.controls['jobCity'].setValue(respondent.jobCity);
                if (respondent.jobNeighborhood != null) {
                    _this.respondentForm.controls['jobNeighborhood'].setValue(respondent.jobNeighborhood);
                    _this.jobCity = respondent.jobCity;
                    _this.loadJobNeighborhoods();
                    _this.isSameJobCity = "";
                }
            }
        })
            .catch(function () {
            _this.navigateBack();
        });
    };
    RespondentProfilePage.prototype.setFormData = function () {
        var _this = this;
        var entities = ['city', 'plan', 'isRuralZone', 'questionaries'];
        this.databaseProvider.verifyEntities(entities)
            .then(function (data) {
            if (data.length > 0 && data.filter(function (data) { return data == false; }).length == 0) {
                _this.setEntities();
            }
            else {
                _this.navigateBack();
            }
        })
            .catch(function () {
            _this.navigateBack();
        });
    };
    RespondentProfilePage.prototype.navigateBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */], {}).then(this.loader.dismiss());
    };
    RespondentProfilePage.prototype.setEntities = function () {
        var _this = this;
        this.storage.get('city')
            .then(function (data) {
            if (data != null) {
                _this.city = data;
                _this.cityName = _this.city.name;
                _this.storage.get('plan')
                    .then(function (data) {
                    if (data != null) {
                        _this.plan = data;
                        _this.storage.get('questionaries')
                            .then(function (data) {
                            _this.questionaries = data;
                            _this.loadResidenceNeighborhoods();
                        });
                    }
                    else {
                        _this.navigateBack();
                    }
                })
                    .catch(function () { return _this.navigateBack(); });
            }
            else {
                _this.navigateBack();
            }
        })
            .catch(function () { return _this.navigateBack(); });
    };
    RespondentProfilePage.prototype.getAllCities = function () {
        var _this = this;
        this.cityProvider.getAllCities()
            .then(function (cities) {
            if (cities != null) {
                _this.cities = _this.sortAscCollection(cities);
            }
            else {
                _this.showAlertGetAllCities();
            }
        })
            .catch(function () {
            _this.showAlertGetAllCities();
        });
    };
    RespondentProfilePage.prototype.showAlertGetAllCities = function () {
        var _this = this;
        this.cities = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.getAllCities();
                    }
                }]
        });
        alert.present();
    };
    RespondentProfilePage.prototype.loadMetrics = function () {
        var _this = this;
        //------------------------CARREGA OS ITENS DE MÉTRICAS-----------------------------
        //1 - GUT, 2 - ESCALA QUALITATIVA, (3-17) - Métricas do questionário de teste
        this.priorizationProvider.getMetricItems(1)
            .then(function (metricItems) {
            if (metricItems != null) {
                _this.metricItems = metricItems;
                //------------------------CARREGA OS VALORES DE MÉTRICA-----------------------------
                _this.priorizationProvider.getMetricValues()
                    .then(function (result) {
                    if (result != null) {
                        //------------------------ASSOCIA OS VALORES AOS ITENS-----------------------------
                        for (var i = 0; i < _this.metricItems.length; i++) {
                            var metricItem = _this.metricItems[i];
                            for (var j = 0; j < result.length; j++) {
                                var metricValue = result[j];
                                if (metricItem.id == metricValue.metricItemId) {
                                    _this.metricItems[i].metricValues.push(metricValue);
                                }
                            }
                        }
                        //------------------------SALVA OS ITENS DE MÉTRICA-----------------------------
                        _this.storage.set('metricItems', _this.metricItems);
                    }
                    else {
                        _this.showAlertLoadMetrics();
                    }
                })
                    .catch(function () {
                    _this.showAlertLoadMetrics();
                });
            }
            else {
                _this.showAlertLoadMetrics();
            }
        })
            .catch(function () {
            _this.showAlertLoadMetrics();
        });
    };
    RespondentProfilePage.prototype.showAlertLoadMetrics = function () {
        var _this = this;
        this.metricItems = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.loadMetrics();
                    }
                }]
        });
        alert.present();
    };
    RespondentProfilePage.prototype.createForm = function () {
        this.respondentForm = this.formBuilder.group({
            cpf: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required], this.validateCPF.bind(this)],
            email: [''],
            residenceTimeRange: [''],
            residenceNeighborhood: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            jobCity: [''],
            jobNeighborhood: [''],
            salaryRange: ['']
        });
        this.respondentForm.controls['residenceTimeRange'].setValue(0);
        this.respondentForm.controls['salaryRange'].setValue(0);
    };
    RespondentProfilePage.prototype.loadResidenceNeighborhoods = function () {
        var _this = this;
        this.neighborhoodProvider.getAllNeighborhoodsByCity(this.city)
            .then(function (neighborhoods) {
            if (neighborhoods != null) {
                _this.residenceNeighborhoods = _this.sortAscCollection(neighborhoods);
                _this.storage.set('neighborhoods', _this.residenceNeighborhoods);
                _this.loader.dismiss();
            }
            else {
                _this.showAlertLoadResidenceNeighborhoods();
            }
        })
            .catch(function () {
            _this.showAlertLoadResidenceNeighborhoods();
        });
    };
    RespondentProfilePage.prototype.showAlertLoadResidenceNeighborhoods = function () {
        var _this = this;
        this.loader.dismiss();
        this.residenceNeighborhoods = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.loadResidenceNeighborhoods();
                    }
                }]
        });
        alert.present();
    };
    RespondentProfilePage.prototype.selectCity = function (city) {
        this.jobCity = city;
        if (this.compareFn(this.jobCity, this.city)) {
            this.isSameJobCity = "";
            this.respondentForm.controls['jobNeighborhood'].setValue('');
        }
        else {
            this.isSameJobCity = "hide";
        }
    };
    RespondentProfilePage.prototype.loadJobNeighborhoods = function () {
        var _this = this;
        this.neighborhoodProvider.getAllNeighborhoodsByCity(this.jobCity)
            .then(function (neighborhoods) {
            if (neighborhoods != null) {
                _this.jobNeighborhoodDisabled = false;
                _this.jobNeighborhoods = _this.sortAscCollection(neighborhoods);
                if (_this.compareFn(_this.jobCity, _this.city)) {
                    _this.isSameJobCity = "";
                }
                else {
                    _this.isSameJobCity = "hide";
                }
            }
            else {
                _this.showAlertLoadJobNeighborhoods();
            }
        })
            .catch(function () {
            _this.showAlertLoadJobNeighborhoods();
        });
    };
    RespondentProfilePage.prototype.showAlertLoadJobNeighborhoods = function () {
        var _this = this;
        this.jobNeighborhoods = [];
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.loadJobNeighborhoods();
                    }
                }]
        });
        alert.present();
    };
    RespondentProfilePage.prototype.validate = function (cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '')
            return false;
        // Elimina CPFs invalidos conhecidos
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
        // Valida 1o digito
        var add = 0;
        for (var i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        var rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        // Valida 2o digito
        add = 0;
        for (var i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        return rev == parseInt(cpf.charAt(10));
    };
    RespondentProfilePage.prototype.validateCPF = function (control) {
        var isValid = this.validate(control.value.toString());
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["of"])(!isValid).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["map"])(function (result) { return result ? { invalid: true } : null; }));
    };
    RespondentProfilePage.prototype.sortAscCollection = function (collection) {
        return collection.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
    };
    RespondentProfilePage.prototype.saveRespondentInfo = function () {
        var _this = this;
        this.loader = this.loadingCtrl.create();
        this.loader.present();
        var cpf = this.respondentForm.controls['cpf'];
        var email = this.respondentForm.controls['email'];
        var residenceNeighborhood = this.respondentForm.controls['residenceNeighborhood'];
        var residenceTimeRange = this.respondentForm.controls['residenceTimeRange'];
        var jobCity = this.respondentForm.controls['jobCity'];
        var jobNeighborhood = this.respondentForm.controls['jobNeighborhood'];
        var salaryRange = this.respondentForm.controls['salaryRange'];
        if (!this.respondentForm.valid) {
            if (!cpf.valid) {
                cpf.markAsTouched();
            }
            if (!residenceNeighborhood.valid) {
                residenceNeighborhood.markAsTouched();
            }
            this.loader.dismiss();
        }
        else {
            var respondent_1 = new Respondent();
            respondent_1.cpf = cpf.value;
            respondent_1.email = email.value;
            respondent_1.residenceTimeRange = residenceTimeRange.value;
            respondent_1.residenceNeighborhood = residenceNeighborhood.value;
            respondent_1.jobCity = jobCity.value;
            respondent_1.jobNeighborhood = jobNeighborhood.value;
            respondent_1.salaryRange = salaryRange.value;
            this.respondentProvider.getRespondentByCPF(respondent_1.cpf)
                .then(function (result) {
                // respondente já está cadastrado
                if (!!result) {
                    respondent_1.id = result.id;
                    _this.respondentProvider.updateRespondent(respondent_1)
                        .then(function () {
                        _this.navigate(respondent_1);
                    })
                        .catch(function () {
                        _this.tryAgainSaveRespondent();
                    });
                }
                else {
                    _this.respondentProvider.insertRespondent(respondent_1)
                        .then(function (data) {
                        respondent_1.id = data.id;
                        _this.navigate(respondent_1);
                    })
                        .catch(function () {
                        _this.tryAgainSaveRespondent();
                    });
                }
                if (respondent_1.id % 2 == 0) {
                    _this.storage.set('useGame', true);
                }
                else {
                    _this.storage.set('useGame', false);
                }
            })
                .catch(function () {
                _this.tryAgainSaveRespondent();
            });
        }
    };
    RespondentProfilePage.prototype.tryAgainSaveRespondent = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            message: 'Não foi possível acessar os dados do servidor. Por favor, tente novamente.',
            buttons: [{
                    text: "Tentar novamente",
                    handler: function () {
                        _this.saveRespondentInfo();
                    }
                }]
        });
        this.loader.dismiss();
        alert.present();
    };
    RespondentProfilePage.prototype.navigate = function (respondent) {
        this.storage.set('respondent', respondent);
        this.navCtrl.setRoot('QuestionariesListPage', {}).then(this.loader.dismiss());
    };
    RespondentProfilePage.prototype.getResidenceTimeNameByValue = function (event) {
        var residenceTimeChosen = event.value;
        this.residenceTimeName = this.residenceTimeList[residenceTimeChosen].name;
    };
    RespondentProfilePage.prototype.getSalaryRangeNameByValue = function (event) {
        var salaryRangeChosen = event.value;
        this.salaryRangeName = this.salaryRangeList[salaryRangeChosen].name;
    };
    RespondentProfilePage.prototype.loadResidenceTime = function () {
        var residenceTime = new ResidenceTime();
        residenceTime.name = "Menos de um 1 ano";
        residenceTime.value = 0;
        this.residenceTimeList.push(residenceTime);
        residenceTime = new ResidenceTime();
        residenceTime.name = "De 1 a 5 anos";
        residenceTime.value = 1;
        this.residenceTimeList.push(residenceTime);
        residenceTime = new ResidenceTime();
        residenceTime.name = "De 5 a 10 anos";
        residenceTime.value = 2;
        this.residenceTimeList.push(residenceTime);
        residenceTime = new ResidenceTime();
        residenceTime.name = "De 10 a 20 anos";
        residenceTime.value = 3;
        this.residenceTimeList.push(residenceTime);
        residenceTime = new ResidenceTime();
        residenceTime.name = "Mais de 20 anos";
        residenceTime.value = 4;
        this.residenceTimeList.push(residenceTime);
        this.residenceTimeName = this.residenceTimeList[0].name;
    };
    RespondentProfilePage.prototype.loadSalaryRange = function () {
        var salaryRange = new SalaryRange();
        salaryRange.name = "Até 2 Salários Mínimos";
        salaryRange.value = 0;
        this.salaryRangeList.push(salaryRange);
        salaryRange = new SalaryRange();
        salaryRange.name = "De 2 a 4 Salários Mínimos";
        salaryRange.value = 1;
        this.salaryRangeList.push(salaryRange);
        salaryRange = new SalaryRange();
        salaryRange.name = "De 4 a 10 Salários Mínimos";
        salaryRange.value = 2;
        this.salaryRangeList.push(salaryRange);
        salaryRange = new SalaryRange();
        salaryRange.name = "De 10 a 20 Salários Mínimos";
        salaryRange.value = 3;
        this.salaryRangeList.push(salaryRange);
        salaryRange = new SalaryRange();
        salaryRange.name = "Acima de 20 Salários Mínimos";
        salaryRange.value = 4;
        this.salaryRangeList.push(salaryRange);
        this.salaryRangeName = this.salaryRangeList[0].name;
    };
    RespondentProfilePage.prototype.compareFn = function (e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    };
    RespondentProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-respondent-profile',template:/*ion-inline-start:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\respondent-profile\respondent-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <div offset-3 col-6 text-center>\n      <img class="img-responsive" src="assets/imgs/header-logo.png" />\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 col-12 text-center>Perfil do respondente</h2>\n  <ion-title>{{cityName}}</ion-title>\n  <form [formGroup]="respondentForm" (submit)="saveRespondentInfo()">\n    <ion-item>\n      <ion-label floating>CPF</ion-label>\n      <ion-input [formControl]="respondentForm.controls[\'cpf\']" type="text"\n        [brmasker]="{mask: \'000.000.000-00\', type:\'num\', len: 14}" required></ion-input>\n    </ion-item>\n    <div class="validator-error"\n      *ngIf="respondentForm.controls[\'cpf\'].hasError(\'required\') && respondentForm.controls[\'cpf\'].touched">* CPF é\n      obrigatório!\n    </div>\n    <div class="validator-error"\n      *ngIf="respondentForm.controls[\'cpf\'].hasError(\'invalid\') && respondentForm.controls[\'cpf\'].touched">* CPF é\n      inválido!\n    </div>\n    <ion-item>\n      <ion-label floating>Bairro de Residência</ion-label>\n      <ion-select [formControl]="respondentForm.controls[\'residenceNeighborhood\']" [compareWith]="compareFn">\n        <ion-option *ngFor="let residenceNeighborhood of residenceNeighborhoods" [value]="residenceNeighborhood">\n          {{residenceNeighborhood.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <div class="validator-error"\n      *ngIf="respondentForm.controls[\'residenceNeighborhood\'].hasError(\'required\') && respondentForm.controls[\'residenceNeighborhood\'].touched">\n      * Bairro de Residência é obrigatório!\n    </div>\n\n    <ion-item>\n      <ion-label floating>Cidade de Trabalho</ion-label>\n      <ion-select [formControl]="respondentForm.controls[\'jobCity\']" (ionChange)="loadJobNeighborhoods()"\n        [compareWith]="compareFn">\n        <ion-option *ngFor="let jobCity of cities" [value]="jobCity" (ionSelect)="selectCity(jobCity)">\n          {{jobCity.name}}\n        </ion-option>\n      </ion-select>\n    </ion-item>\n\n    <div class="{{isSameJobCity}}">\n      <ion-item>\n        <ion-label floating>Bairro de Trabalho</ion-label>\n        <ion-select [formControl]="respondentForm.controls[\'jobNeighborhood\']" [disabled]="jobNeighborhoodDisabled"\n          [compareWith]="compareFn">\n          <ion-option *ngFor="let jobNeighborhood of jobNeighborhoods" [value]="jobNeighborhood">\n            {{jobNeighborhood.name}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input [formControl]="respondentForm.controls[\'email\']" type="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Tempo de Residência</ion-label>\n      <ion-range [min]="0" [max]="4" [step]="1" (ionChange)="getResidenceTimeNameByValue($event)"\n        [formControl]="respondentForm.controls[\'residenceTimeRange\']">\n        <ion-icon small range-left name="ios-home-outline"></ion-icon>\n      </ion-range>\n      <ion-label>{{residenceTimeName}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Renda</ion-label>\n      <ion-range [min]="0" [max]="4" [step]="1" (ionChange)="getSalaryRangeNameByValue($event)"\n        [formControl]="respondentForm.controls[\'salaryRange\']">\n        <ion-icon small range-left name="logo-usd"></ion-icon>\n      </ion-range>\n      <ion-label>{{salaryRangeName}}</ion-label>\n    </ion-item>\n    <ion-row>\n      <ion-col text-center>\n        <button ion-button block class="button-background" type="submit" [disabled]="!respondentForm.valid">\n          Salvar\n        </button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\IONIC Projects\neiru_surveys_app-develop\src\pages\respondent-profile\respondent-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_city_city__["a" /* CityProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_9__providers_respondent_respondent__["a" /* RespondentProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_neighborhood_neighborhood__["a" /* NeighborhoodProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_prioritization_prioritization__["a" /* PrioritizationProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], RespondentProfilePage);
    return RespondentProfilePage;
}());

var ResidenceTime = /** @class */ (function () {
    function ResidenceTime() {
    }
    return ResidenceTime;
}());

var SalaryRange = /** @class */ (function () {
    function SalaryRange() {
    }
    return SalaryRange;
}());

var Respondent = /** @class */ (function () {
    function Respondent() {
    }
    return Respondent;
}());

//# sourceMappingURL=respondent-profile.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(307);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives__ = __webpack_require__(308);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrMaskerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__ = __webpack_require__(299);




var BrMaskerModule = (function () {
    function BrMaskerModule() {
    }
    return BrMaskerModule;
}());

BrMaskerModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
                    __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_2__directives_brmasker_ionic_3__["a" /* BrMaskerIonic3 */],
                    __WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
                ],
                schemas: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]
                ],
                providers: [__WEBPACK_IMPORTED_MODULE_3__directives_brmasker_ionic_services__["a" /* BrMaskerIonicServices3 */]]
            },] },
];
/** @nocollapse */
BrMaskerModule.ctorParameters = function () { return []; };
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brmasker_ionic_3__ = __webpack_require__(298);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__brmasker_ionic_services__ = __webpack_require__(299);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=0.js.map