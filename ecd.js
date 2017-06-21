each(dataPath("data[*]"),
  combine(
    upsert("Program_Activities__c", "unique_id__c", fields(
      // field("unique_id__c", dataValue("xxx")), // Must set this.
      field('Parent_Workshop__c', dataValue('parentworkshop')),
      field('Tidying_up_and_Toilet_routine__c', dataValue('tidyingtoilet2')),
      field('Breakfast__c', dataValue('breakfast')),
      field('Number_of_Children__c', dataValue('children')),
      field('Device_ID__c', dataValue('DeviceID')),
      field('Early_Morning_Routine__c', dataValue('earlyroutine')),
      field('Unlimited_Child_Week__c', dataValue('week')),
      field('Important_Session_Notes__c', dataValue('notefinal')),
      // field('Session_Location__Latitude__s', dataValue('geopoint')), //THIS DOESN'T LOOK RIGHT
      // field('Session_Location__Longitude__s', dataValue('geopoint\:Longitude')), //THIS DOESN'T LOOK RIGHT
      field('Form_Completed_At__c', dataValue('end_time')),
      field('Activity_Start_Date__c', dataValue('Start')),
      field('Form_Started_At__c', dataValue('start_time')),
      field('Data_Collector__c', dataValue('datacollector')),
      field('Data_Collector__c', dataValue('data_other')),
      field('Intervention__c', dataValue('intervention')),
      field('Health__c', dataValue('health')),
      field('Lunch__c', dataValue('lunch')),
      field('Activity_Two_Detail__c', dataValue('activity2detail')),
      field('Snack_time__c', dataValue('snack')),
      field('Subscriber_ID__c', dataValue('SubscriberID')),
      field('Field_Workers__c', dataValue('fieldworkers')),
      field('Fieldworker_Other__c', dataValue('field_other')),
      field('Number_of_Facilitators__c', dataValue('facilitators')),
      field('Activity_One_Detail__c', dataValue('activity1detail')),
      field('Home_Based__c', dataValue('homebased')),
      field('Unlimited_Programs__c', dataValue('unlimitedprog')),
      field('Awareness__c', dataValue('awareness')),
      field('Outdoor_Play__c', dataValue('outdoor')),
      field('Site__c', dataValue('site')),
      field('Unlimited_Child_Day__c', dataValue('activityday')),
      field('Area__c', dataValue('area')),
      field('Cohort_Age__c', dataValue('Age')),
      field('Number_of_Parents__c', dataValue('parents')),
      field('Activity_Two__c', dataValue('activity2')),
      field('Arrival_and_Free_Play__c', dataValue('arrival')),
      field('Activity_One__c', dataValue('activity1')),
      field('Activity_End_Date__c', dataValue('End'))
    )),
    each(dataPath("attendance[*]"),
      upsert("Beneficiary_Attendance__c", "some_id__c", fields(
      // field("some_id__c", dataValue("xxx"),
      // field("Migration__c", dataValue("xxx")),
      // field("Picklist__c", dataValue("xxx")),
      // relationship("Beneficiary", dataValue("xxx")),
      // relationship("Event", dataValue("xxx")),
      ))
    )
  )
);
