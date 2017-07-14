// Access the ODK data array.
each(
  dataPath("data[*]"),
  combine(
    upsert("Programme_Activities__c", "ID__c", fields(
      field("ID__c", dataValue("instanceID")), // Must set this up in Salesforce.
      field('Parent_Workshop__c', dataValue('parentworkshop')),
      field('Tidying_up_and_Toilet_routine__c', dataValue('tidyingtoilet2')),
      field('Breakfast__c', dataValue('breakfast')),
      field('Number_of_Children__c', dataValue('children_count')),
      field('Device_ID__c', dataValue('DeviceID')),
      field('Early_Morning_Routine__c', dataValue('earlyroutine')),
      field('Unlimited_Child_Week__c', dataValue('week')),
      field('Important_Session_Notes__c', dataValue('notefinal')),
      field('Session_Location__Latitude__s', dataValue('geopoint:Latitude')),
      field('Session_Location__Longitude__s', dataValue('geopoint:Longitude')),
      field('Form_Completed_At__c', dataValue('*meta-date-marked-as-complete*')),
      field('Activity_Start_Date__c', dataValue('Start')),
      field('Form_Started_At__c', dataValue('Start')),
      field('Data_Collector__c', dataValue('datacollector')),
      field('Data_Collector__c', dataValue('data_other')),
      field('Intervention__c', dataValue('intervention')),
      field('Health__c', dataValue('health')),
      field('Lunch__c', dataValue('lunch')),
      field('Activity_Two_Detail__c', dataValue('activity2detail')),
      field('Snack_time__c', dataValue('snack')),
      field('Subscriber_ID__c', dataValue('SubscriberID')),
      field('Field_Workers__c', function(state) {
        const spacey_fieldworkers = state.data.fieldworkers.map((name) => {
          return name.split('_').join(' ');
        });
        return spacey_fieldworkers.join(";");
      }),
      field('Fieldworker_Other__c', dataValue('field_other')),
      field('Number_of_Facilitators__c', dataValue('facilitators')),
      field('Activity_One_Detail__c', dataValue('activity1detail')),
      field('Home_Based__c', dataValue('homebased')),
      field('Unlimited_Programs__c', dataValue('unlimitedprog')),
      field('Awareness__c', dataValue('awareness')),
      field('Outdoor_Play__c', dataValue('outdoor')),
      field('Site__c', dataValue('site')),
      field('Unlimited_Child_Day__c', dataValue('activityday')),
      // field('Area__c', dataValue('area')), // no such field
      field('Cohort_Age__c', dataValue('Age')),
      field('Number_of_Parents__c', dataValue('parents')),
      field('Activity_Two__c', dataValue('activity2')),
      field('Arrival_and_Free_Play__c', dataValue('arrival')),
      field('Activity_One__c', dataValue('activity1')),
      field('Activity_End_Date__c', dataValue('End'))
    )),
    each(
      merge(dataPath("child_repeat[*]"), fields(
        field("migration?", dataValue("migration")),
        field("parentId", lastReferenceValue("id"))
      )),
      upsert("Beneficiary_Attendance__c", "Unique_ID__c", fields(
        field("Unique_ID__c", function(state) {
          console.log(state)
          return `x${state.data.parentId}`.concat(state.data.child_scan)
        }),
        field("Attended_Left__c", function(state) {
          return (state.data.migration == "yes" ? "Left" : "Attended")
        }),
        // field("Reason_for_Migration__c", dataValue("xxx")),
        relationship("Beneficiary__r", "Unique_ID__c", dataValue("child_scan")),
        field("Programme_Activity__c", dataValue("parentId"))
      ))
    )
  )
)
