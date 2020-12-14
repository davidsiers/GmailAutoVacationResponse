function setVacationSettings() {
  
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
  
    // create a new VacationSettings
    var vacationSetting =   Gmail.newVacationSettings();

    // get existing VacationSettings
    // var vacationSetting =   Gmail.Users.Settings.getVacation('me');

    if ([0,4].indexOf(day) > -1) {
      vacationSetting.enableAutoReply = true;
      vacationSetting.responseSubject = "Out of Office";
      vacationSetting.responseBodyPlainText = "I am out of the office and will not receive this email until 8am of the next work day. If this is an urgent request, please call the church office at (520) 748-1525. Thank you!";
      vacationSetting.startTime = date.getTime();

    }
      
    if ([1,2,3,5,6].indexOf(day) > -1 && (hour < 8) || (hour >= 17)) {
      
      // create a new VacationSettings
      vacationSetting.enableAutoReply = true;
      vacationSetting.responseSubject = "Out of Office";
      vacationSetting.responseBodyPlainText = "I am out of the office and will not receive this email until 8am of the next work day. If this is an urgent request, please call the church office at (520) 748-1525. Thank you!";
      vacationSetting.startTime = date.getTime();
      // vacationSetting.endTime = date.end.getTime();
  
      // good place to place break point to check
      // Logger.log((vacationSetting));
      
    } else {
      
      // Disable VacationSettings
      vacationSetting.enableAutoReply = false;
      
    }

  Gmail.Users.Settings.updateVacation(vacationSetting, 'me');

}