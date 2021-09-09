import { QuestionItemModel } from "./questionItem.model";

export interface QuestionModel {
  questionTitle: string,
  isActive: boolean,
  surveyId: number,
  subjectId:number,
  questionTypeId: number,
  questionParameters: string,
  priority: 0,
  isRequired:boolean,
  questionItems:QuestionItemModel[]
}
