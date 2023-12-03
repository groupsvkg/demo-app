import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { CryptoService } from 'src/common/service/crypto.service';

@Module({
    controllers: [DemoController],
    providers: [DemoService, CryptoService]
})
export class DemoModule {}
