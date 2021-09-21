export interface PeriodModel{
  title: string,
  isActive: true,
  ownerUserId:number ,
  isScheduled: true,
  startOn:Date,
  finishOn:Date,
  characterRecognitionSurveyId:number ,
  attitudeSurveyId:number,
  loginUrl:string ,
  periodStateId: number
}
