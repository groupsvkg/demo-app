import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('demo')
export class DemoController {
    @Post("store")
    store(@Body() body){
        return body;
    }

    @Get("retrieve")
    retrieve(@Query() queryParams){
        return {
            data: [
                {
                    key1: "value1",
                    key2: "value2"
                }
            ]
        }
    }
}
