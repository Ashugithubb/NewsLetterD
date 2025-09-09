import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Status } from "../enum/news-letter.enum";
import { Type } from "class-transformer";

export class GetNewsLetterQueryDto {
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    page?: number = 1;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    limit?: number = 5;

    @IsOptional()
    @IsString()
    search?: string;
}
