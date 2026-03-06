function doGet(e) {

  var email = e.parameter.email;
  var action = e.parameter.action;

  if (action == "confirm") {
    var template = HtmlService.createTemplateFromFile("confirm");
    template.email = email;
    return template.evaluate();
  }

  if (action == "unsubscribe") {
    saveUnsubscribe(email);

    var template = HtmlService.createTemplateFromFile("success");
    template.email = email;
    return template.evaluate();
  }

  return HtmlService.createHtmlOutput("Invalid request");
}

function saveUnsubscribe(email) {

  var sheet = SpreadsheetApp
  .openById("YOUR_SHEET_ID")
  .getSheetByName("Unsubscribe Data");

  sheet.appendRow([
    email,
    new Date(),
    "Unsubscribed"
  ]);
}
