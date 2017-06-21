each(
  dataPath("data[*]"),
  create("Contact", fields(
    relationship('RecordType', 'id', 'Beneficiary'),
    field('Phone', dataValue('cell')),
    field('MailingStreet', dataValue('street-address')),
    field('Race__c', dataValue('race')),
    field('Device_ID__c', dataValue('deviceID')),
    field('Nationality__c', dataValue('nationality')),
    field('LastName', dataValue('surname')),
    // field('FirstName', dataValue('first-name')), //CONCAT?
    // field('FirstName', dataValue('second-name')), //CONCAT?
    field('SA_ID_Number__c', dataValue('ID')),
    field('Natal__c', dataValue('natal')),
    field('Unique_ID__c', dataValue('child-scan')),
    field('Site__c', dataValue('site')),
    field('Site__c', dataValue('site_other')),
    field('Disability__c', dataValue('disability')),
    field('Disability_Detail__c', dataValue('disability_specify')),
    field('HomePhone', dataValue('home-tel')),
    field('road2health__c', dataValue('road2health')),
    field('socialgrant__c', dataValue('socialgrant')),
    field('Weight__c', dataValue('weight')),
    field('Gender__c', dataValue('gender')),
    field('Height_in_cm__c', dataValue('height')),
    field('Email', dataValue('email')),
    field('birthcert__c', dataValue('birthcert')),
    field('Home_Language__c', dataValue('language')),
    field('Area__c', dataValue('area')),
    field('RecordTypeId', dataValue('RecordTypeID')),
    field('Other_languages__c', dataValue('language_other')),
    field('Fax', dataValue('fax')),
    field('Consent_signed__c', dataValue('consent-sign')),
    field('Title', dataValue('title')),
    field('Birthdate (concatenate)', dataValue('birthyear')),
    field('', dataValue('birthmonth')),
    field('', dataValue('birthdate')),
    // field('Next_of_kin_name__c', dataValue('surname-guardian')), //CONCAT?
    // field('Next_of_kin_name__c', dataValue('first-name-guardian')), //CONCAT?
    // field('Next_of_kin_name__c', dataValue('second-name-guardian')), //CONCAT?
    field('Next_of_kin_relationship__c', dataValue('relationship')),
    field('Highest_Standard_Passed__c', dataValue('passed')),
    field('Year_Completed__c', dataValue('complete')),
    field('Number_of_Dependents__c', dataValue('dependents')),
    field('Are_you_employed__c', dataValue('employment')),
    field('Weeks_Pregnant__c', dataValue('preg_duration')),
    field('When_was_your_last_checkup__c', dataValue('checkup')),
    field('Services__c', dataValue('services')),
    field('participateECD__c', dataValue('participate')),
    field('Form_signed__c', dataValue('form-sign'))
  ))
);
