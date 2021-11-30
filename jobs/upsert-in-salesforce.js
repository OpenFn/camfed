each('$.submissions[*]',
  upsert('Camfed_Annual_data__c', 'MetaInstanceID__c',
    fields(
      field('School__c', dataValue('School__c')),
      field('MetaInstanceID__c', dataValue('meta.instanceID')),
      // ...Taylor to add some more fields once SF privs are confirmed
    )
  )
);