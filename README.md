# GmailAutoVacationResponse
This is a Google App Script to set vacation auto response in Gmail setting. 
The setup will trigger this script to run once every minute. 

## Prerequisite
The following *Advanced Google Services* need to be enabled before running this script. Please refer to https://developers.google.com/apps-script/guides/services/advanced
- Gmail

## Usage
1. Login to Google drive and create a new App Scriot
2. Copy the [Code.gs](https://github.com/davidsiers/GmailAutoVacationResponse/blob/master/Code.gs) and paste into the new App Script
3. To test this standalone script, follow https://developers.google.com/apps-script/guides/standalone and choose `run` or `debug`.
5. To schedule **time trigger** go to Edit -> Current project's trigger -> Add a new trigger -> Select to run `setVacationSettings` fucntion -> Time driven -> Set to run once every minute.
![Image Time Trigger](https://raw.githubusercontent.com/davidsiers/GmailAutoVacationResponse/master/images/trigger-2.png)
6. To verify the result, go to Gmail->Setting, then scroll all the way to the end and verify Vacation responder is turned on with all the other field populated.
![Image Gmail Vacation Setting](https://raw.githubusercontent.com/davidsiers/GmailAutoVacationResponse/master/images/auto-responder.png)

