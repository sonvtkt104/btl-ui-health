import { FoodsService } from './foods.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
export declare class FoodsController {
    private readonly foodsService;
    constructor(foodsService: FoodsService);
    create(createFoodDto: CreateFoodDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFoodDto: UpdateFoodDto): string;
    remove(id: string): string;
}
