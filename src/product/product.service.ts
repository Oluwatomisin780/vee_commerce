import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto, UpdateProductDto } from './productDto/product.dto';
import { ApiProperty } from '@nestjs/swagger';
//import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

import toStream = require('buffer-to-stream');
@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  //findallProduct
  async findAllProduct() {
    return this.prismaService.product.findMany();
  }

  // createProducts
  async createProduct(createProduct: CreateProductDto) {
    const createdProduct = await this.prismaService.product.create({
      data: {
        ...createProduct,
      },
    });
    return createdProduct;
  }

  //update product
  async updateProduct(id: number, updateDto: UpdateProductDto) {
    const checkId = await this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
    if (!checkId) throw new NotFoundException('');
    await this.prismaService.product.update({
      where: { id },
      data: {
        ...updateDto,
      },
    });
  }

  //get Single prod
  async getSingleProduct(id: number) {
    // check if id exist
    const getSingleProd = await this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
    if (!getSingleProd) throw new NotFoundException('');

    return getSingleProd;
  }

  // delete prod
  @ApiProperty()
  async deleteproduct(id: number) {
    const checkId = await this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
    if (!checkId) throw new NotFoundException('product does not exist');
    await this.prismaService.product.delete({ where: { id } });
  }
  //file uplaod
}
