export const genderSeedData = [
  'Girl',
  'Boy',
].map(data => ({ description: data }));

export const reasonForUpdateSeedData = [
  'Own application',
  'Report of concern',
].map(data => ({ description: data }));

export const problemAreaSeedData = [
  'School problems',
  'Abuse',
  'Mental illness',
  'Conflicts between children and adults',
  'Conflicts between parents',
  'Problematic relationships',
  'Violence in the family',
  'Crime',
  'Other'
].map(data => ({ description: data }));

export const previousInterventionSeedData = [
  'No',
  'Yes - outpatient care',
  'Yes - other social services contribution (LSS, placement, LUL)',
  'Yes - other health and medical services (e.g. BUP, Habilitation, student health)',
  'Other'
].map(data => ({ description: data }));

export const otherInterventionsSeedData = [
  'No',
  'Yes - BUP',
  'Yes - first line psychiatry',
  'Yes - Habilitation',
  'Yes - Student health',
  'Yes - Maria Ungdom',
  'Yes - group activities within social services',
  'Other'
].map(data => ({ description: data }));

export const familyConstellationSeedData = [
  'Live with both VH',
  'Living with a VH',
  'Living alternately/getting together',
  'Lives with VH + bonus parent',
  'Lives in another family',
  'Other'
].map(data => ({ description: data }));

export const whoParticipatesSeedData = [
  'The child',
  'Siblings',
  'A parent',
  'Both parents',
  'Parent + bonus parent',
  'Other',
].map(data => ({ description: data }));

export const educationVh1SeedData = [
  'Elementary school',
  'Gymnasium',
  'Post-secondary education',
  'College',
  'Education from another country',
].map(data => ({ description: data }));

export const educationVh2SeedData = [
  'Elementary school',
  'Gymnasium',
  'Post-secondary education',
  'College',
  'Education from another country',
].map(data => ({ description: data }));

export const employmentVh1SeedData = [
  'Full-time employment (job/study)',
  'Employment part-time',
  'Job seeker',
  'Sick leave',
  'Parental leave',
].map(data => ({ description: data }));

export const employmentVh2SeedData = [
  'Full-time employment (job/study)',
  'Employment part-time',
  'Job seeker',
  'Sick leave',
  'Parental leave',
].map(data => ({ description: data }));

export const interpreterRequiredSeedData = [
  'Yes',
  'No',
].map(data => ({ description: data }));

export const typeOfEffortSeedData = [
  'Family treatment ( not manual)',
  'Repulse',
  'Enhanced Comet',
  'Individual Comet',
  'KIBB',
  'Intensive support',
  'ONE',
].map(data => ({ description: data }));

export const establishedDiagnosesSeedData = [
  'No diagnosis',
  'ADHD',
  'ADD',
  'AST',
  'Psychiatric diagnoses',
  'Gifted functional variation',
  'Eating disorder',
  'Self-injurious behavior',
  'Language disorder',
  'Defiance syndrome',
  'Other'
].map(data => ({ description: data }));

export const schoolUniformSeedData = [
  'Ordinary school form',
  'Resource school',
  'Special teaching group',
  'Elementary special school',
  'no longer has compulsory schooling',
].map(data => ({ description: data }));

export const interventionPeriodData = [
  "0-3 months",
  "3-6 months",
  "6-9 months",
  "9-12 months",
  "Still ongoing",
].map(data => ({ description: data }));

export const interventionProgressData = [
  "0-20 hours",
  "20-40 hours",
  "40-60 hours",
  "60-80 hours",
  "80-100 hours",
  "Other",
].map(data => ({ description: data }));

export const reasonForTerminationData = [
  "The goals of the effort were achieved",
  "The family is not interested in further contact",
  "Move to another municipality",
  "Investment",
  "Social services have assessed that the conditions for reaching the goals are lacking",
  "Other",
].map(data => ({ description: data }));

export const timeConsumptionData = [
  "Not achieved at all",
  "A small part achieved",
  "About half achieved",
  "A large part achieved",
  "Fully achieved",
].map(data => ({ description: data }));
