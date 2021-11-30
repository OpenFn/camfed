each(
  '$.submissions[*]',
  upsert(
    'Camfed_Annual_data__c',
    'MetaInstanceID__c',
    fields(
      field('School__c', dataValue('School__c')),
      field('MetaInstanceID__c', dataValue('meta.instanceID')),
      field('Female_Enrolment__c', dataValue('Total_Female_Enrolment')),
      field('Male_Enrolment__c', dataValue('Total_Male_Enrolment')),
      field(
        'TM_in_Place__c',
        dataValue('TM_in_Place__c') == 'Yes' ? true : false
      )
    )
  )
);

// Note: At any time, you can also use a function which takes state...
// field('TM_in_Place__c', state => {
//   switch (state.data.TM_in_Place__c) {
//     case 'Yes':
//     case 'Yeah':
//     case 'Definitely':
//       return true;
//
//     default:
//       return false;
//   }
// })