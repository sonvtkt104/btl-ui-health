"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodsService = void 0;
const common_1 = require("@nestjs/common");
let FoodsService = class FoodsService {
    create(createFoodDto) {
        return 'This action adds a new food';
    }
    findAll() {
        return `This action returns all foods`;
    }
    findOne(id) {
        return `This action returns a #${id} food`;
    }
    update(id, updateFoodDto) {
        return `This action updates a #${id} food`;
    }
    remove(id) {
        return `This action removes a #${id} food`;
    }
};
FoodsService = __decorate([
    (0, common_1.Injectable)()
], FoodsService);
exports.FoodsService = FoodsService;
//# sourceMappingURL=foods.service.js.map