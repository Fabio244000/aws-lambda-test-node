"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_1 = require("../../src/handlers/hello");
const node_test_1 = require("node:test");
(0, node_test_1.describe)('Hello handler', () => {
    (0, node_test_1.it)('should return a greeting message', async () => {
        const event = {};
        const context = {};
        const result = await (0, hello_1.main)(event, context, () => { });
        expect(result.statusCode).toEqual(200);
        expect(result.body).toContain('Hello World!');
    });
});
