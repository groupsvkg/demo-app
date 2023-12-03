import { Module } from '@nestjs/common';
import { DemoController } from './demo.controller';
import { DemoService } from './demo.service';
import { CryptoService } from 'src/common/service/crypto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demo } from './entity/demo.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Demo])],
    controllers: [DemoController],
    providers: [DemoService, CryptoService]
})
export class DemoModule { }
