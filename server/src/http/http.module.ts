import { Module } from '@nestjs/common';
import { FoodsModule } from './foods/foods.module';

@Module({
    imports: [FoodsModule],
    controllers: [],
    providers: []
})
export class HttpModule {}
