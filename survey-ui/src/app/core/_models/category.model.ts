export interface CategoryModel {
  id:number;
  categoryTitle: string;
  isActive: boolean;
}
export interface CatogoryEditModel{
  title: string,
  isActive:boolean,
  id?:number
}
