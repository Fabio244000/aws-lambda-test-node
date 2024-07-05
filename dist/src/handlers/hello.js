"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
require("source-map-support/register");
const main = async (event, _context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World!',
            input: event,
        }, null, 2),
    };
};
exports.main = main;
