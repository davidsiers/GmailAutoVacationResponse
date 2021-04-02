function setVacationSettings() {
    var keep_going = true;
    var date = new Date();
    var day = date.getDay();
    var hour = date.getHours();
  
    // create a new VacationSettings
    var vacationSetting =   Gmail.newVacationSettings();

    // get existing VacationSettings
    // var vacationSetting =   Gmail.Users.Settings.getVacation('me');

    if (keep_going === true && 0 === day) {
      console.log('SUNDAY');
      vacationSetting.enableAutoReply = true;
      vacationSetting.responseSubject = "Out of Office";
      vacationSetting.responseBodyPlainText = "I am out of the office and will not receive this email until 8am on Monday. If this is an urgent request, please call the church office at (520) 748-1525. Thank you!";
      vacationSetting.startTime = date.getTime();
      Gmail.Users.Settings.updateVacation(vacationSetting, 'me');
      keep_going = false;

    }

    if (keep_going === true && 4 === day) {
      console.log('THURSDAY');
      vacationSetting.enableAutoReply = true;
      vacationSetting.responseSubject = "Out of Office";
      vacationSetting.responseBodyPlainText = "I am out of the office and will not receive this email until 8am on Friday. If this is an urgent request, please call the church office at (520) 748-1525. Thank you!";
      vacationSetting.startTime = date.getTime();
      Gmail.Users.Settings.updateVacation(vacationSetting, 'me');
      keep_going = false;

    }

    if (keep_going === true && [1,2,3,5,6].indexOf(day) > -1) {
      if (hour < 8 || hour >= 17) {
      console.log('AFTER HOURS WEEKDAY');
      // create a new VacationSettings
      vacationSetting.enableAutoReply = true;
      vacationSetting.responseSubject = "Out of Office";
      vacationSetting.responseBodyPlainText = "I am out of the office and will not receive this email until 8am of the next work day. If this is an urgent request, please call the church office at (520) 748-1525. Thank you!";
      vacationSetting.startTime = date.getTime();
      Gmail.Users.Settings.updateVacation(vacationSetting, 'me');
      keep_going = false;
      }
    } else {
      
      // Disable VacationSettings
      vacationSetting.enableAutoReply = false;
      Gmail.Users.Settings.updateVacation(vacationSetting, 'me');
      
    }

}
