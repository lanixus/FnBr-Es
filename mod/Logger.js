"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Colors_1 = tslib_1.__importDefault(require("./Colors"));
const { text, style } = Colors_1.default;

class Logger {
    constructor(options) {
        // Inicializa options como un objeto vacío si no se proporciona
        this.options = options || {};
        this.options.symbols = this.options.symbols ?? true;
        this.options.text = this.options.text ?? true;
        this.options.date = this.options.date ?? true;
        this.options.isEnabled = this.options.isEnabled ?? true;
    }

    log(...str) {
        return this.print({
            symbol: '➤',
            txt: 'LOG',
            color: text.white
        }, ...str);
    }

    success(...str) {
        return this.print({
            symbol: '✔',
            txt: 'SUCCESS',
            color: text.green
        }, ...str);
    }

    error(...str) {
        return this.print({
            symbol: '✖',
            txt: 'ERROR',
            color: text.red
        }, ...str);
    }

    warn(...str) {
        return this.print({
            symbol: '⚠',
            txt: 'WARNING',
            color: text.yellow
        }, ...str);
    }

    debug(...str) {
        return this.print({
            symbol: '⁇',
            txt: 'DEBUG',
            color: text.magenta
        }, ...str);
    }

    info(...str) {
        return this.print({
            symbol: 'ℹ',
            txt: 'INFO',
            color: text.cyan
        }, ...str);
    }

    print(options = {
        symbol: '',
        txt: '',
        color: text.white
    }, ...args) {
        if (!this.options.isEnabled)
            return;
        const { symbols, text: data, date } = this.options;
        const parts = [];
        if (symbols)
            parts.push(`${options.color}${options.symbol}${style.reset}`);
        if (data)
            parts.push(`[${options.color}${options.txt.toUpperCase()}${style.reset}]`);
        if (date)
            parts.push(`[${text.white}${new Date().toLocaleString()}${style.reset}]`);
        return console.log(...parts, ...args);
    }
}

exports.default = Logger;
//# sourceMappingURL=Logger.js.map
