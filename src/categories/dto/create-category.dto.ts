import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCategoryDto {
  @IsNotEmpty({message:'El nombre de la categoría no puede ir vacía'})
  @IsString()
  name: string;
}
