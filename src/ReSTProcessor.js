"use strict";

import { parse } from "./rst-to-ast";

export default class ReSTProcessor {
    constructor(config) {
        this.config = config;
        this.extensions = this.config.extensions ? this.config.extensions : [];
    }

    availableExtensions() {
        return [
            ".rst",
            ".rest"
        ].concat(this.extensions);
    }

    processor(ext) {
        return {
            preProcess(text, filePath) {
                return parse(text);
            },
            postProcess(messages, filePath) {
                return {
                    messages,
                    filePath: filePath ? filePath : "<rst>"
                };
            }
        };
    }
}
