each(
  dataPath("data[*]"),
  combine(
    upsert("Programme_Activities__c", "ID__c", fields(
      field("ID__c", dataValue("instanceID")),
      field("RecordTypeID", "012580000002RYsAAM"),
      field('SNA__c', dataValue('sna')),
      field('Start_Time__c', dataValue('shift_start')),
      field("Intervention__c", function(state){return dataValue("form")(state).toString().replace("_"," ")}),
      field('Where_is_the_kiosk_deployed__c', dataValue('deployment_place')),
      field('Did_you_record_incidents_from_the_kiosk__c', dataValue('incidents')),
      field('How_many_incidents_did_you_report__c', dataValue('incidents_no')),
      field('Does_kiosk_contain_a_full_first_aid_kit__c', dataValue('first_aid_kit')),
      field('Did_you_use_the_first_aid_kit__c', dataValue('use_first_kit')),
      field("Photo_1__c", function(state){
  if (state.data.photo !== null) {
    return dataValue("photo.url")(state)
  } if (state.data.photo_NHW !== null) {
    return dataValue("photo_NHW.url'")(state)
  } if (state.data.photo_visitor !== null) {
    return dataValue("photo_visitor.url'")(state)
  } if (state.data.photo_walking !== null) {
    return dataValue("photo_walking.url'")(state)
  } if (state.data.event_photo !== null) {
    return dataValue("event_photo.url'")(state)
  } else {
    null
  }
}),
      field('Do_you_have_enough_pamphlets__c', dataValue('pamphlet_stock')),
      // field("Visitor__c",dataValue('visitor')),
//       field("Visitor__c", function(state){
//   if (state.data.visitor !== (undefined || null)) {
//     return dataValue("visitor")(state).toString().replace("_"," ")
//   } else {
//  null
//   }
// }),
      field('End_Time__c', dataValue('shift_end')),
      field("What_is_the_voluntary_activity__c", dataValue('voluntary_activity')),
//       field("What_is_the_voluntary_activity__c", function(state){
//   if (state.data.voluntary_activity !== (undefined || null)) {
//     return dataValue("voluntary_activity")(state).toString().replace("_"," ")
//   } else {
//  null
//   }
// }),
      field('NHW_present__c', dataValue('nhw_count')),
      field('Please_provide_more_details__c', dataValue('describe_voluntary')),
      field('Visitor__c', dataValue('visitor')),
      field('Visitor_Name__c', dataValue('name_visitor')),
      field('Location_of_Kiosk_deployment__Latitude__s', dataValue('geopoint:Latitude')),
      field('Location_of_Kiosk_deployment__Longitude__s', dataValue('geopoint:Longitude')),
      field('Geopoint_Accuracy__c', dataValue('geopoint:Accuracy')),
      field('Activity_End_Date__c', dataValue('*meta-date-marked-as-complete*')),
      field('Visit_Time__c', dataValue('visit_time')),
      field('Activity_Start_Date__c', dataValue('Start')),
      field("What_is_the_reason_for_visit__c", dataValue('reason')),
//       field("What_is_the_reason_for_visit__c", function(state){
//   if (state.data.reason !== (undefined || null)) {
//     return dataValue("reason")(state).toString().replace("_"," ")
//   } else {
//  null
//   }
// }),
      field('Specify_the_reason_for_visit__c', dataValue('reason_other')),
      field('Did_you_distribute_a_pamphlet_to_them__c', dataValue('pamphlet')),
      field('What_pamphlet_did_you_give_them__c', dataValue('pamph_which')),

      field('Comment__c', dataValue('comment')),
      field("What_activity_are_you_currently_doing__c",dataValue('activity')),
     //  field("What_activity_are_you_currently_doing__c", function(state){
     //  if (state.data.activity !== (undefined || null)) {
     //  return dataValue("activity")(state).toString().replace("_"," ")
     //  } else {
     // null
     //  }
     //  }),

      field('Walking_Bus_Start_Time__c', dataValue('walking_time')),
      field('Number_of_children_walking_with__c', dataValue('children')),

      // field('What_is_the_voluntary_activity__c', dataValue('event_describe')),
      // field('Please_provide_more_details__c', dataValue('assist')),

      field("Device_ID__c", dataValue("DeviceID")),
      field('Role__c', dataValue('role')),
      field('Duties__c', dataValue('duties')),
      field('Duration__c', dataValue('duration')),
      field("Describe_Duties__c", dataValue('duties_describe')),
      // field("Describe_Duties__c", function(state){
      // if (state.data.duties_describe !== (undefined || null)) {
      // return dataValue("duties_describe")(state).toString().replace("_"," ")
      // } else {
      // null
      // }
      // }),
      field('Photo_2__c', dataValue('signature_NHW.url')),
      field('Official__c', dataValue('official'))
    )),

      function(state) {if (state.data.scan_timesheet!== (undefined || null)) {relationship("NHW_Member__r", "Unique_ID__c", dataValue("scan_timesheet"))
        }
          else {
          return null}},
        function(state) {if (state.data.scan_timesheet_leader !== (undefined || null)) {relationship("NHW_Leader__r", "Unique_ID__c", dataValue("scan_timesheet_leader"))
        }
        else {
          return null}},

    each(
      merge(dataPath("scan_repeat[*]"), fields(
        field("parentId", dataValue("instanceID"))
      )),
      upsert("Beneficiary_Attendance__c", "Unique_ID__c",fields(
        field("Unique_ID__c", function(state) {
          return `${state.data.parentId}__`.concat(state.data.scan_nhw)
        }),
        field("Attended_Left__c", "Attended"),
        relationship("Beneficiary__r", "Unique_ID__c", dataValue("scan_nhw")),
        relationship("Programme_Activity__r", "ID__c", dataValue("parentId"))
      )
  )
))
)
