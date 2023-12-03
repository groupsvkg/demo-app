import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DemoService } from './demo.service';
import { CryptoService } from 'src/common/service/crypto.service';

@Controller('demo')
export class DemoController {

    constructor(
        private readonly demoService: DemoService,
        private readonly cryptoService: CryptoService
    ){}

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
