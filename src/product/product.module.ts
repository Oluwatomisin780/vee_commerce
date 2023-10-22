import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from '../prisma/prisma.module';

import { CloudinaryModule } from '../cloundinary/cloundinary.module';

@Module({
  imports: [PrismaModule, CloudinaryModule],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
