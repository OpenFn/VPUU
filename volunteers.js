each(
  // Access the ODK data array....
  dataPath("data[*]"),
  upsert("Contact", "Unique_ID__c", fields(
    // relationship('RecordType', 'name', 'ECD Beneficiary'),
    relationship('RecordType', 'name', 'Volunteer'),
    field('Phone', dataValue('contact')),
    field('Device_ID__c', dataValue('deviceID')),
    field('Nationality__c', dataValue('nationality')),
	  field('LastName', dataValue('surname')),
	  field('FirstName', dataValue('name')),
    field('SA_ID_Number__c', dataValue('ID')),
    field('Natal__c', dataValue('natal')),
    field('Unique_ID__c', dataValue('scan')),
    //AKA Child_Scan
    field("MailingStreet", function(state) {
      const string = dataValue("house")(state)+" "+
        dataValue("street")(state)
    }),
    field("MailingCity", dataValue('area')),
    field('Site__c', dataValue('site')),
    field('Other_Site__c', dataValue('site_other')),
    field('Disability__c', function(state) { return ((dataValue("disability")(state)==="yes")?"true":"false")}),
    field('Disability_Detail__c', dataValue('disability_specify')),
    field('HomePhone', dataValue('home-tel')),
    field('road2health__c', dataValue('road2health')),
    field('socialgrant__c', dataValue('socialgrant')),
    field('Weight__c', dataValue('weight')),
    field('Gender__c',function(state) { return ((dataValue("gender")(state)==="m")?"Male":"Female")}),
    field('Height_in_cm__c', dataValue('height')),
    field('Email', dataValue('email')),
    field('birthcert__c', dataValue('birthcert')),
    field('Home_Language__c', dataValue('language')),
    field('SNA__c', dataValue('nhw')),
    field('RecordTypeId', dataValue('RecordTypeID')),
    field('Other_languages__c', dataValue('language_other')),
    field('Fax', dataValue('fax')),
    field('Consent_signed__c', dataValue('consent-sign')),
    field('Title', dataValue('title')),
    // field("Birthdate",function(state) {
    //     dataValue("birthday")
    //   return new Date(string).toISOString()
    // }),
    field('Next_of_kin_name__c', dataValue('emergency_contact')),
    field('Next_of_kin_contact_number__c', dataValue('emergency_number')),
    field('Next_of_kin_relationship__c', dataValue('relationship')),
    field('Highest_Standard_Passed__c', dataValue('passed')),
    field('Year_Completed__c', dataValue('complete')),
    field('Number_of_Dependents__c', dataValue('dependents')),
    field('Are_you_employed__c', dataValue('employment')),
    field('Weeks_Pregnant__c', dataValue('preg_duration')),
    field('When_was_your_last_checkup__c', dataValue('checkup')),
    // field("Services__c",function(state) {
    //             return Array.apply(
    //              null, dataValue("services")(state)
    //             ).join(';').replace(/_/g," ")
    //         }),
    field('participateECD__c', dataValue('participate')),
    // field('Volunteer_Type__c', function(state){
    // // return dataValue("Volunteer_Type")(state).toString().replace(" ","_")
    //     }
    //   ),

    field('Form_signed__c', dataValue('form-sign'))
  ))
);
