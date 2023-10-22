import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
  UploadedFile,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './productDto/product.dto';
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  //getAllprod
  @Get()
  getAllProduct() {
    return this.productService.findAllProduct();
  }

  //getSingleProduct
  @Get('/:id')
  getSingleproduct(@Param('id') id: string) {
    return this.productService.getSingleProduct(parseInt(id));
  }

  //updateProduct
  @Patch('/:id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  //deleteProduct
  @Delete('/:id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.deleteproduct(id);
  }

  //createProduct
  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }
}
