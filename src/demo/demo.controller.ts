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
        const encryptedText = this.cryptoService.encrypt(
            storeDemoDto.encryption_key,
            JSON.stringify(storeDemoDto.value)
        );

        return this.demoService.store({
            ...storeDemoDto,
            value: encryptedText
        });
    }

    @Get("retrieve")
    async retrieve(@Query() queryParamsDto: QueryParamDto) {
        const demos = await this.demoService.retrieve(queryParamsDto);

        return demos.map(demo => {
            const decryptedText = this.cryptoService.decrypt(
                queryParamsDto.decryption_key,
                demo.value
            );

            return {
                ...demo,
                value: JSON.parse(decryptedText)
            };
        });
    }
}
