export interface PeriodModel{
  id?:number,
  title: string,
  isActive: boolean,
  ownerUserId:number ,
  isScheduled: boolean,
  startOn:Date,
  finishOn:Date,
  characterRecognitionSurveyId:number ,
  attitudeSurveyId:number,
  loginUrl:string ,
  periodStateId: number
}
