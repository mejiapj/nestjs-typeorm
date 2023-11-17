import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { Product } from './entities/product.entity';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductsService, BrandsService, CategoriesService],
  exports: [ProductsService],
})
export class ProductsModule {}
