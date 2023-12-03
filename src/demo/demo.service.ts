import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm'
import { Demo } from './entity/demo.entity';
import { StoreDemoDto } from './dto/store-demo.dto';
import { QueryParamDto } from './dto/query-param.dto';

@Injectable()
export class DemoService {
    constructor(
        @InjectRepository(Demo)
        private readonly demoRepository: Repository<Demo>
    ) { }

    store(storeDemoDto: StoreDemoDto) {
        const demo = {
            id: storeDemoDto.id,
            value: storeDemoDto.value as string
        };

        return this.demoRepository.save(demo);
    }

    async retrieve(queryParamsDto: QueryParamDto) {
        const demos = await this.demoRepository.find({
            where: {
                id: ILike(`${queryParamsDto.id}%`)
            }
        });

        return demos;
    }
}
