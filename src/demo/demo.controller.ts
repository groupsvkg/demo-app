import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { DemoService } from './demo.service';
import { CryptoService } from 'src/common/service/crypto.service';
import { StoreDemoDto } from './dto/store-demo.dto';
import { QueryParamDto } from './dto/query-param.dto';

@Controller('demo')
export class DemoController {

    constructor(
        private readonly demoService: DemoService,
        private readonly cryptoService: CryptoService
    ) { }

    @Post("store")
    store(@Body() storeDemoDto: StoreDemoDto) {
        return this.demoService.store(storeDemoDto);
    }

    @Get("retrieve")
    retrieve(@Query() queryParamsDto: QueryParamDto) {
        return this.demoService.retrieve(queryParamsDto);
    }
}
