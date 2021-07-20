import {
  Controller,
  Body,
  Get,
  Post,
  Param,
  Delete,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company as CompanyModel } from '@prisma/client';
import { RequestWithUser } from '../auth/interface/requestWithUser';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt';

@Controller('companies')
@UseGuards(JwtAuthGuard)
export class CompaniesController {
  constructor(private companiesService: CompaniesService) {}

  @Post()
  async createCompanycookies(
    @Req() req: RequestWithUser,
    @Body() data: CreateCompanyDto,
  ) {
    return this.companiesService.createCompany(req.user, data);
  }

  @Put(':id')
  async updateCompanyById(
    @Param('id') id: string,
    @Body() payload: CreateCompanyDto,
  ): Promise<CompanyModel> {
    return await this.companiesService.updateCompany({
      where: { id },
      data: payload,
    });
  }

  @Delete('/:id')
  async deleteCompany(@Param('id') id: string): Promise<CompanyModel> {
    return this.companiesService.deleteCompany({ id });
  }

  @Put(':id')
  async updateCompanyById(
    @Param('id') id: string,
    @Body() payload: CreateCompanyDto,
  ): Promise<CompanyModel> {
    return await this.companiesService.updateCompany({
      where: { id },
      data: payload,
    });
  }

  @Delete('/:id')
  async deleteCompany(@Param('id') id: string): Promise<CompanyModel> {
    return this.companiesService.deleteCompany({ id });
  }
}
