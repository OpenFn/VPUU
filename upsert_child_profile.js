each(
  // Access the ODK data array....
  dataPath("data[*]"),
  upsert("Contact", "Unique_ID__c", fields(
    relationship('RecordType', 'name', function(state) {
    if (state.data.profile_type === ("beneficiary")) {
      return "ECD Beneficiary"
    } else {
    return "Volunteer"
    }
    }),
    field('Beneficiary_Type__c',function(state) {
      if (state.data.beneficiary_type !== (undefined || null)) {
 return dataValue("beneficiary_type")(state).toString().replace("_"," ")
 } else {
  null
   }
 }),
 field('Volunteer_Type__c', dataValue('volunteer_type')),
 field('SNA__c', dataValue('sna')),
 field('Phone', dataValue('contact')),
 field('Device_ID__c', dataValue('deviceID')),
 field('Nationality__c', dataValue('nationality')),
 field('SNA__c', dataValue('sna')),
 field('LastName', dataValue('surname')),
 field('Device_ID__c', dataValue('deviceID')),
 field('FirstName', dataValue('first-name')),
 field('SA_ID_Number__c', dataValue('ID')),
 field('Phone', dataValue('contact')),
 field('Natal__c', dataValue('natal')),
 field('Unique_ID__c', dataValue('scan')),
//  field('MailingStreet', function(state) {
//      const string = dataValue("street-address")(state)+" "+
//        dataValue("street-address-kin")(state)
//    }),
//
//    if (state.data."street-address" !== (undefined || null)) {
// return dataValue("street-address")
// } if (state.data."street-address-kin" !== (undefined || null)) {
// return dataValue('street-address-kin')
// }
// }),
 field('MailingStreet', function(state) {
   const string = dataValue("street-address")(state)+" "+
     dataValue("street-address-kin")(state)
 }),
 field('MailingCity', dataValue('area')),
 field('Site__c', dataValue('site')),
 field('Other_Site__c', dataValue('site_other')),
 field('Disability__c', function(state) { return ((dataValue("disability")(state)==="yes")?"true":"false")}),
 field('Disability_Detail__c', dataValue('disability_specify')),
 field('HomePhone', dataValue('home-tel')),
 field('Phone', dataValue('contact')),
 field('road2health__c', dataValue('road2health')),
 field('socialgrant__c', dataValue('socialgrant')),
 field('Weight__c', dataValue('weight')),
 field('Gender__c', dataValue('gender')),
 field('Race__c', dataValue('race')),
 field('Height_in_cm__c', dataValue('height')),
 field('Email', dataValue('email')),
 field('birthcert__c', dataValue('birthcert')),
 field('Home_Language__c', dataValue('language')),
 field('Other_languages__c', dataValue('language_other')),
 field('Consent_signed__c', dataValue('consent-sign')),
 field('Birthdate', dataValue('birthdate')),
 field('Next_of_kin_contact_number__c', dataValue('contact-kin')),
 field('Next_of_kin_name__c', function(state) {
   const string = dataValue("name-kin")(state)+" "+
     dataValue("surname-kin")(state)
 }),
 field('Next_of_kin_relationship__c', dataValue('relationship')),
 field('Home_Language__c', dataValue('language')),
 field('Other_languages__c', dataValue('language_other')),
 field('Highest_Standard_Passed__c', dataValue('passed')),
 field('Year_Completed__c', dataValue('complete')),
 field('Number_of_Dependents__c', dataValue('dependents')),
 field('Are_you_employed__c', dataValue('employment')),
 field('Weeks_Pregnant__c', dataValue('preg_duration')),
 field('When_was_your_last_checkup__c', dataValue('checkup')),
 field('Are_you_employed__c', dataValue('employment')),
 field('Weeks_Pregnant__c', dataValue('preg_duration')),
 field('participateECD__c', dataValue('participate')),
 field('Form_signed__c', dataValue('form-sign')),
 field('Do_you_attend_school__c', dataValue('school')),
 field('Which_School__c', dataValue('school_which')),
 field('Not_In_School_Currently__c', dataValue('not_school'))

))
);
