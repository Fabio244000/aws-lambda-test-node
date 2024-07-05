import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from 'aws-lambda';
import { main } from '../../src/handlers/hello';
import {describe, it} from "node:test";


describe('Hello handler', () => {
    it('should return a greeting message', async () => {
        const event: Partial<APIGatewayProxyEvent> = {};
        const context: Partial<Context> = {};

        const result = await main(event as APIGatewayProxyEvent, context as Context, () => {}) as APIGatewayProxyResult;

        expect(result.statusCode).toEqual(200);
        expect(result.body).toContain('Hello World!');
    });
});
