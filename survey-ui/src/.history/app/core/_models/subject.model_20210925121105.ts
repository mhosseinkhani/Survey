export interface SubjectModel {
  title: string;
  categoryId:string;
  isActive: boolean;
}
export interface EditSubjectmodel{

  id: number,
  categoryId: number,
  categoryTitle: string,
  subjectTitle : string,
  isActive:boolean
}
