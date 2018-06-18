each(
  dataPath("data[*]"),
  upsert("Case", "ODK_ID__c", fields(
  field("ODK_ID__c", dataValue("instanceID")),
  field("Form_Started_At__c", dataValue("start")),
  field("FORM_COMPLETED_AT__C", dataValue("end")),
  function(state) {if (state.data.scan_NHW !== (undefined || null)) {relationship("Contact", "Unique_ID__c", dataValue("scan_NHW"))
    }
      else {
      return null}},
  field("SUPPLIEDNAME", dataValue("name")),
  field("STATUS", dataValue("New")),
  field("REASON", dataValue("category")),
  field("ORIGIN", dataValue("ODK")),
  field("DEVICE_ID__C", dataValue("deviceID")),
  field("SNA__C", dataValue("nhw")),
  field("PHOTO_OF_INCIDENT__C", dataValue("photo_incident.url")),
  field("INCIDENT_TIME__C", dataValue("time_occured")),
  field("CRIME__C", dataValue("crime")),
  field("ACCIDENT__C", dataValue("accident")),
  field("WHAT_WAS_THE_PROBLEM__C", dataValue("dispute_category")),
  field("DESCRIBE_THE_VANDALISM__C", dataValue("vandalism_category")),
  field("CATEGORY_OF_SEXUAL_VIOLENCE__C", dataValue("sexual_category")),
  field("MURDER_ATTEMPT__C", dataValue("murder_attempt")),
  field("SAPS__C", dataValue("SAPS_called")),
  field("Person_injured_by_the_incident__c", dataValue("injury")),
  field("AMBULANCE_CALLED_FOR_ASSISTANCE__C", dataValue("injury_ambulance")),
  field("ALCOHOL_INVOLVED_IN_THE_INCIDENT__C", dataValue("alcohol_involved")),
  field("WHO_WAS_UNDER_THE_INFLUENCE_OF_ALCOHOL__C", dataValue("alcohol_who")),
  field("AT_WHAT_TIME_WAS_THEIR_LAST_DRINK_CONSUM__C", dataValue("last_drink_time")),
  field("Location_of_Last_Drink__c", dataValue("last_drink_where")),
  field("REFERRED_VICTIM_TO_MOSAIC__C", dataValue("mosaic")),
  field("PUBLIC_INFRASTRCTURE_PROBLEM__C", dataValue("infrastructure")),
  field("ELECTRICAL_PROBLEM__C", dataValue("electricity")),
  field("Streetlights_Not_Working__c", dataValue("lights_out")),
  field("PROBLEM_WITH_TAP__C", dataValue("taps")),
  field("VPUU_TAP_ID_NUMBER__C", dataValue("tap_monwabisi")),
  field("TOILET_PROBLEM__C", dataValue("toilets")),
  field("COMMUNITY_LEADER__C", dataValue("toilet_leader")),
  field("COMMUNITY_LEADER_NAME__C", dataValue("leader_name")),
  field("TOILET_ID__C", dataValue("toilet_door")),
  field("VPUU_TOILET_ID__C", dataValue("toilet_monwabisi")),
  field("DUMPING__C", dataValue("dumping")),
  field("DRAINS__C", dataValue("drains")),
  field("ROADS__C", dataValue("roads")),
  field("DESCRIBE_ACCIDENT__C", dataValue("describe_accident")),
  field("TRAFFIC_ENFORCEMENT_CALLED__C", dataValue("traffic_called")),
  field("FIRE_DEPARTMENT_CALLED__C", dataValue("fire_called")),
  field("DRM_CALLED__C", dataValue("DRM_called")),
  field("AMBULANCE_CALLED__C",function(state) {
    if (state.data.ambulance_called !== (undefined || null)) {
 return dataValue("ambulance_called")
 } if (state.data.injury_ambulance !== (undefined || null)) {
 return dataValue('injury_ambulance')
 }
 }),
  field("SAPS_PRESENT__C", dataValue("saps_present")),
  field("SAPS_OFFICER_NAME__C", dataValue("saps_name")),
  field("TRAFFIC_OFFICER_PRESENT__C", dataValue("traffic_present")),
  field("FIRE_OFFICER_PRESENT__C", dataValue("fire_present")),
  field("DRM_PRESENT__C", dataValue("DRM_present")),
  field("AMBULANCE_PRESENT__C", dataValue("ambulance_present")),
  function(state) {if (state.data.scan_NHW !== (undefined || null)) {relationship("Contact", "Unique_ID__c", dataValue("scan_NHW"))
    }
      else {
      return null}},
  field("FIRST_AID_USED__C", dataValue("firstaid_used")),
  field("PHOTO_OF_FIRST_AID_KIT__C", dataValue("photo_firstaid.url")),
  field("REPORTING_FROM__C", dataValue("reporting_from")),
  field("SUB_AREA__C", dataValue("sub_area")),
  field("SUB_AREA_OTHER__C", dataValue("subarea_other")),
  field("STREETS__C", dataValue("streets")),
  field("STREETS_OTHER__C", dataValue("streetother")),
  field('HOUSE_NUMBER__C', function(state) {
    if (state.data.house_no !== (undefined || null)) {
 return dataValue("house_no")
 } if (state.data.house_no_monwabisi !== (undefined || null)) {
 return dataValue('house_no_monwabisi')
 }
 if (state.data.house_no_harare !== (undefined || null)) {
 return dataValue('house_no_harare')
 }
 if (state.data.house_no_lotuspark !== (undefined || null)) {
 return dataValue('house_no_lotuspark')
 }
 }),
  field("WHERE_DID_THE_INCIDENT_TAKE_PLACE__C", dataValue("noss_location")),
  field("REFERENCE_NUMBER__C", dataValue("reference_num")),
  field("GPS_COORDINATES__longitude__s",dataValue('structure_name:Longitude')),
  field("GPS_COORDINATES__latitude__s",dataValue('structure_name:Latitude'))
  ))
);
