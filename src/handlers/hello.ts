import { APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import 'source-map-support/register';

export const main: APIGatewayProxyHandler = async (event, _context): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Hello World!',
                input: 'Logré subir una lambda con Template NodeJS y TypeScrip',
            },
            null,
            2
        ),
    };
};
