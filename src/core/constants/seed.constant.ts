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
  'ProblemArea.Other',
  'Other'
].map(data => ({ description: data }));

export const previousInterventionSeedData = [
  'PreviousIntervention.No',
  'PreviousIntervention.YesOutpatientCare',
  'PreviousIntervention.YesOtherSocial',
  'PreviousIntervention.YesOtherHealth',
  'PreviousIntervention.Other',
  'Other'
].map(data => ({ description: data }));

export const otherInterventionsSeedData = [
  'OtherInterventions.No',
  'OtherInterventions.YesBUP',
  'OtherInterventions.YesFirstLinePsychiatry',
  'OtherInterventions.YesHabilitation',
  'OtherInterventions.YesStudentHealth',
  'OtherInterventions.YesMariaUngdom',
  'OtherInterventions.YesGroupActivities',
  'OtherInterventions.Other',
  'Other'
].map(data => ({ description: data }));

export const familyConstellationSeedData = [
  'FamilyConstellation.LiveWithBothVH',
  'FamilyConstellation.LivingWithAVH',
  'FamilyConstellation.LivingAlternately',
  'FamilyConstellation.LivesWithVH',
  'FamilyConstellation.LivesInAnotherFamily',
  'FamilyConstellation.Other',
  'Other'
].map(data => ({ description: data }));

export const whoParticipatesSeedData = [
  'WhoParticipates.TheChild',
  'WhoParticipates.Siblings',
  'WhoParticipates.AParent',
  'WhoParticipates.BothParents',
  'WhoParticipates.Parent',
  'WhoParticipates.Other',
  'Other',
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
  'Other'
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
  "ReasonForTermination.Other",
  "Other",
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
  'Yes – other intervention social services (LSS, placement, LUL)',
  'Yes – other contribution to healthcare (e.g. BUP, Habilitation, student health)',
  'Medication',
  'Other effort'
].map(data => ({ description: data }));

export const duringInterventionSeedData = [
  'BUP',
  'first line psychiatry',
  'Habilitation',
  'School staff',
  'Student health',
  'Maria Youth',
  'Other part within social services, e.g. LSS, the adult unit, etc.'
].map(data => ({ description: data }));

export const duringPastSeedData = [
  'No investigation done',
  'Investigation done, no diagnosis received',
  'ADHD',
  'ADD',
  'AST',
  'Psychiatric diagnosis',
  'Gifted functional variation',
  'Language disorder',
  'Other'
].map(data => ({ description: data }));

export const childSchoolSeedData = [
  'The child schooling has been the same during the last 12 months',
  'The child has changed schools',
  'The child has changed school form',
  'The child has started special primary school',
  'The child has finished school (no longer compulsory schooling)',
].map(data => ({ description: data }));