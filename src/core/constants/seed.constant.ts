// Background Survey Seed Data

export const genderSeedData = [
  'Gender.Girl',
  'Gender.Boy',
].map(data => ({ description: data }));

export const reasonForUpdateSeedData = [
  'ReasonForUpdate.OwnApplication',
  'ReasonForUpdate.ReportOfConcern',
].map(data => ({ description: data }));

export const problemAreaSeedData = [
  'ProblemArea.SchoolProblems',
  'ProblemArea.Abuse',
  'ProblemArea.MentalIllness',
  'ProblemArea.ConflictsBetweenChildrenAndAdults',
  'ProblemArea.ConflictsBetweenParents',
  'ProblemArea.ProblematicRelationships',
  'ProblemArea.ViolenceInTheFamily',
  'ProblemArea.Crime',
  'Other',
  'OtherText'
].map(data => ({ description: data }));

export const previousInterventionSeedData = [
  'PreviousIntervention.No',
  'PreviousIntervention.YesOutpatientCare',
  'PreviousIntervention.YesOtherSocial',
  'PreviousIntervention.YesOtherHealth',
  'Other',
  'OtherText'
].map(data => ({ description: data }));

export const otherInterventionsSeedData = [
  'OtherInterventions.No',
  'OtherInterventions.YesBUP',
  'OtherInterventions.YesFirstLinePsychiatry',
  'OtherInterventions.YesHabilitation',
  'OtherInterventions.YesStudentHealth',
  'OtherInterventions.YesMariaUngdom',
  'OtherInterventions.YesGroupActivities',
  'Other',
  'OtherText'
].map(data => ({ description: data }));

export const familyConstellationSeedData = [
  'FamilyConstellation.LiveWithBothVH',
  'FamilyConstellation.LivingWithAVH',
  'FamilyConstellation.LivingAlternately',
  'FamilyConstellation.LivesWithVH',
  'FamilyConstellation.LivesInAnotherFamily',
  'Other',
  'OtherText'
].map(data => ({ description: data }));

export const whoParticipatesSeedData = [
  'WhoParticipates.TheChild',
  'WhoParticipates.Siblings',
  'WhoParticipates.AParent',
  'WhoParticipates.BothParents',
  'WhoParticipates.Parent',
  'Other',
  'OtherText',
].map(data => ({ description: data }));

export const educationVh1SeedData = [
  'EducationVh.ElementarySchool',
  'EducationVh.Gymnasium',
  'EducationVh.Post',
  'EducationVh.College',
  'EducationVh.Education',
].map(data => ({ description: data }));

export const educationVh2SeedData = [
  'EducationVh.ElementarySchool',
  'EducationVh.Gymnasium',
  'EducationVh.Post',
  'EducationVh.College',
  'EducationVh.Education',
].map(data => ({ description: data }));

export const employmentVh1SeedData = [
  'EmploymentVh.FullTimeEmployment',
  'EmploymentVh.EmploymentPartTime',
  'EmploymentVh.JobSeeker',
  'EmploymentVh.SickLeave',
  'EmploymentVh.ParentalLeave',
].map(data => ({ description: data }));

export const employmentVh2SeedData = [
  'EmploymentVh.FullTimeEmployment',
  'EmploymentVh.EmploymentPartTime',
  'EmploymentVh.JobSeeker',
  'EmploymentVh.SickLeave',
  'EmploymentVh.ParentalLeave',
].map(data => ({ description: data }));

export const interpreterRequiredSeedData = [
  'Yes',
  'No',
].map(data => ({ description: data }));

export const typeOfEffortSeedData = [
  'TypeOfEffort.FamilyTreatment',
  'TypeOfEffort.Repulse',
  'TypeOfEffort.EnhancedComet',
  'TypeOfEffort.IndividualComet',
  'TypeOfEffort.KIBB',
  'TypeOfEffort.IntensiveSupport',
  'TypeOfEffort.ONE',
].map(data => ({ description: data }));

export const establishedDiagnosesSeedData = [
  'EstablishedDiagnoses.NoDiagnosis',
  'EstablishedDiagnoses.ADHD',
  'EstablishedDiagnoses.ADD',
  'EstablishedDiagnoses.AST',
  'EstablishedDiagnoses.PsychiatricDiagnoses',
  'EstablishedDiagnoses.GiftedFunctionalVariation',
  'EstablishedDiagnoses.EatingDisorder',
  'EstablishedDiagnoses.SelfInjuriousBehavior',
  'EstablishedDiagnoses.LanguageDisorder',
  'EstablishedDiagnoses.DefianceSyndrome',
  'EstablishedDiagnoses.Other',
  'OtherText'
].map(data => ({ description: data }));

export const schoolUniformSeedData = [
  'SchoolUniform.OrdinarySchoolForm',
  'SchoolUniform.ResourceSchool',
  'SchoolUniform.SpecialTeachingGroup',
  'SchoolUniform.ElementarySpecialSchool',
  'SchoolUniform.NoLongerHasCompulsorySchooling',
].map(data => ({ description: data }));

export const interventionPeriodSeedData = [
  "InterventionPeriod.0-3",
  "InterventionPeriod.3-6",
  "InterventionPeriod.6-9",
  "InterventionPeriod.9-12",
  "InterventionPeriod.StillOngoing",
].map(data => ({ description: data }));

export const timeConsumptionSeedData = [
  "TimeConsumption.0-20",
  "TimeConsumption.20-40",
  "TimeConsumption.40-60",
  "TimeConsumption.60-80",
  "TimeConsumption.80-100",
  "TimeConsumption.MoreThan100Hours",
].map(data => ({ description: data }));

export const reasonForTerminationSeedData = [
  "ReasonForTermination.TheGoals",
  "ReasonForTermination.TheFamily",
  "ReasonForTermination.MoveTo",
  "ReasonForTermination.Investment",
  "ReasonForTermination.SocialServices",
  "Other",
  "OtherText",
].map(data => ({ description: data }));

export const interventionProgressSeedData = [
  "InterventionProgress.NotAchievedAtAll",
  "InterventionProgress.ASmallPartAchieved",
  "InterventionProgress.AboutHalfAchieved",
  "InterventionProgress.ALargePartAchieved",
  "InterventionProgress.FullyAchieved",
].map(data => ({ description: data }));

// Questions seed data after 12 months

export const otherInterventionsStartedSeedData = [
  'OtherInterventionsStarted.NoOtherInitiativesStarted',
  'OtherInterventionsStarted.YesOtherIntervention',
  'OtherInterventionsStarted.YesOtherContribution',
  'OtherInterventionsStarted.Medication',
  'OtherInterventionsStarted.OtherEffort'
].map(data => ({ description: data }));

export const duringInterventionSeedData = [
  'DuringIntervention.BUP',
  'DuringIntervention.FirstLinePsychiatry',
  'DuringIntervention.Habilitation',
  'DuringIntervention.SchoolStaff',
  'DuringIntervention.StudentHealth',
  'DuringIntervention.MariaYouth',
  'DuringIntervention.OtherPartWithinSocial'
].map(data => ({ description: data }));

export const duringPastSeedData = [
  'DuringPast.NoInvestigationDone',
  'DuringPast.InvestigationDoneNoDiagnosisReceived',
  'DuringPast.ADHD',
  'DuringPast.ADD',
  'DuringPast.AST',
  'DuringPast.PsychiatricDiagnosis',
  'DuringPast.GiftedFunctionalVariation',
  'DuringPast.LanguageDisorder',
  'DuringPast.Other'
].map(data => ({ description: data }));

export const childSchoolSeedData = [
  'ChildSchool.TheChildSchoolingHasBeen',
  'ChildSchool.TheChildHasChangedSchools',
  'ChildSchool.TheChildHasChangedSchoolForm',
  'ChildSchool.ThechildHasCtartedSpecialPrimarySchool',
  'ChildSchool.TheChildHasFinishedSchool',
].map(data => ({ description: data }));

export const changeAccomodationSeedData = [
  'ChangeAccomodation.TheChildLivingSituationHasRemained',
  'ChangeAccomodation.TheChildHasStartedLivingAlternately',
  'ChangeAccomodation.TheChildHasStartedLivingWith',
  'ChangeAccomodation.TheChildHasBeenPlacedThrough',
].map(data => ({ description: data }));

export const changeEmploymentVh1SeedData = [
  'ChangeEmploymentVh1.Guardian1HasTheSameOccupation',
  'ChangeEmploymentVh1.EmploymentChangedToFull-time',
  'ChangeEmploymentVh1.EmploymentChangedToPart-time',
  'ChangeEmploymentVh1.BecameAJobSeeker',
  'ChangeEmploymentVh1.BeenOnSickLeave',
  'ChangeEmploymentVh1.BeenOnParentalLeave',
].map(data => ({ description: data }));

export const changeEmploymentVh2SeedData = [
  'ChangeEmploymentVh2.Guardian2HasTheSameOccupation',
  'ChangeEmploymentVh2.EmploymentChangedToFull-time',
  'ChangeEmploymentVh2.EmploymentChangedToPart-time',
  'ChangeEmploymentVh2.BecameAJobSeeker',
  'ChangeEmploymentVh2.BeenOnSickLeave',
  'ChangeEmploymentVh2.BeenOnParentalLeave',
].map(data => ({ description: data }));