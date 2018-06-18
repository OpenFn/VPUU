// Add a contact FIRST
beta.each(
  dataPath("data[0].child_repeat[*]"),
  upsert("Contact", "Unique_ID__c", fields(
    // relationship('RecordType', 'id', 'Beneficiary'))
    field("Unique_ID__c", dataValue("child_scan")),
    field("LastName", "Unknown...")
  ))
);

// Then add the program activities record and attendance records...
each(
  dataPath("data[*]"),
  combine(
    upsert("Programme_Activities__c", "ID__c", fields(
      field("ID__c", dataValue("instanceID")), // Must set this up in Salesforce.
      field('Parent_Workshop__c', dataValue('parentworkshop')),
      field('Tidying_up_and_Toilet_routine__c', dataValue('tidyingtoilet2')),
      field('Breakfast__c', dataValue('breakfast')),
      field('Photo_1__c', dataValue('photo1.url')),
      field('Photo_2__c', dataValue('photo2.url')),
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
      // Join this into a semi-colon separated string for Salesforce multi-select
      field('Data_Collector__c', function(state) {
        return state.data.datacollector.split('_').join(' ')
      }),
      // field('Data_Collector__c', dataValue('data_other')), Where should this go?
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
        if (spacey_fieldworkers.join(";") == 'other') {
          return "";
        } else return spacey_fieldworkers.join(";");
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
      field('SNA__c', dataValue('area')),
      field('Cohort_Age__c', function(state) {
        return state.data.age.join(";");
      }),
      field('Number_of_Parents__c', dataValue('parents')),
      field('Activity_Two__c', dataValue('activity2')),
      field('Arrival_and_Free_Play__c', dataValue('arrival')),
      field('Activity_One__c', dataValue('activity1')),
      field('Activity_End_Date__c', dataValue('End'))
    )),
    each(
      merge(dataPath("child_repeat[*]"), fields(
        field("migration?", dataValue("migration")),
        field("parentId", dataValue("instanceID"))
      )),
      upsert("Beneficiary_Attendance__c", "Unique_ID__c", fields(
        field("Unique_ID__c", function(state) {
          return `${state.data.parentId}__`.concat(state.data.child_scan)
        }),
        field("Attended_Left__c", function(state) {
          return (state.data.migration == "yes" ? "Left" : "Attended")
        }),
        // field("Reason_for_Migration__c", dataValue("xxx")),
        relationship("Beneficiary__r", "Unique_ID__c", dataValue("child_scan")),
        relationship("Programme_Activity__r", "ID__c", dataValue("parentId"))
      ))
    )
  )
)
