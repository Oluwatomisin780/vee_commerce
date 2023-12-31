import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  CreateProductDto,
  UpdateProductDto,
  createCategoryDto,
} from './productDto/product.dto';
import { wishListDto } from './productDto/wishList.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  //getAllprod
  @Get()
  getAllProduct() {
    return this.productService.findAllProduct();
  }
  @Get('category/product')
  getProductByCategory(@Query('categoryId', ParseIntPipe) categoryId: number) {
    return this.productService.findproductByCate(categoryId);
  }
  @Get('category')
  getCategory() {
    return this.productService.getCategory();
  }
  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
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
  @Delete('/category/:id')
  deleteCategory(@Param('id') id: string) {
    return this.productService.delete_category(parseInt(id));
  }
  //createProduct

  //createCate
  @Post('category')
  createCategory(@Body() createCate: createCategoryDto) {
    return this.productService.createCategory(createCate);
  }

  //wishlist
  @Post('wishlist')
  createWishList(@Body() wishlist: wishListDto) {
    return this.productService.wishlist(wishlist);
  }
}
