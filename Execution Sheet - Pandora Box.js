Have a whole json ready to for Pandora Box for boiler plate
and a generator from sheet : Once All Execution Sheets Are in correct Order.

Json Be something like This. Extendable with each change in structure and granularity. For now the granular level for each project is
Raw Plan : <Project Name>.
Execution Sheet : <Project Name>
{
	"Project Name" : 
	"Raw Plan Document Link" : // As Soon as I have parser functions written for google doc, I will Add Meta for raw plan and master plan as well
	"Execution Sheet Index Sheet Link" :
	"Execution Sheet Meta" : {
		"List of Sheets" : [
			"The Applications" : {
				"list of projects" : [
					"Project Name" :
					"Raw Plan Document Link" : 
					"Execution Sheet Index Sheet Link" :
					"Execution Sheet Meta" : 
				]
			},
			"Collaborative Applications" :  
		]
	}
}

The reason for having subProjects is various Research from other projects might lead to similar paths, so we might need to merge, pivot and incrementally change

Make it dynamic enough to be created as sheet, sql, or a simple JSON in a few seconds from an identified stored structure.
/**
	Each Plan will have (createPlan) 
		Raw Plan : <Project Name> rawPlan( User Generated for now) (createRawPlan)
		Tracker Sheet : <Project Name> createdOnce( User Generated for now) (createTrackerSheet)
			Index
				0.0 starts with currentPlan
				planName : planExtensionLists(DERIVED : 
					list of plan in PlanExtension folder, if any, 
					The first row will always be meta info of current plan derived from the RIB
				), 
				planDescription(),
				trackerSheetLink(if planExtensionLists greater than and equals to 2)
				forEachBranch([RIB]),
					getSheet([RIB])
					countOfTasks(DERIVED),
					countOfCompletedTasks(DERIVED),
					branchStatusColorCode(DERIVED)
				planStatusColorCode(DERIVED)
			Research (Auto Filled From Execution Sheet)
			Implementation (Auto Filled From Execution Sheet)
			Business (Auto Filled From Execution Sheet)
	Following Sub Folders (RIB)
		planName : Research
			Execution Sheet
		planName : Implementation
			Execution Sheet
		planName : Business
			Execution Sheet
		planName : Extensions ([Optional])
			planExtensionFolders with all what a plan will have (createPlan)
	**/
createPlan(planName) {
	// creation of folder in pandora box
	prepareRIB(planName, boolean planExtensionFolders)
	createTrackerSheet(planName)
	createRawPlan(planName)
}

prepareRIB(planName, boolean planExtensionFolders){
	// Creation of sub folders
	// Creation of Execution sheet in each folder with EXECUTION_SHEET_HEADERS
}

createTrackerSheet(planName){
	// Creation of a Tracker SpreadSheet with TRACKER_MANDATORY_SHEETS
	createSheet(planName, String tracker)
	// Creation of index sheet, scrapping extensionListPlans if any and picking 0th Row of index sheet of tracker sheet of that plan
	
}

createRawPlan(planName){

}

PreRequisites : 
When You have these things ready you can start categorizing it as a part of Pandora Box
// References : 
RIB : [Research, Implementation, Business]
EXECUTION_SHEET_HEADERS : []
/**
Execution Sheet : <Project Name> (Try Reading Naming conventions of apple using verbNounAnd some rule to name the function)
		Situation(descriptionOfTheExecutionItem)
		Task(taskOfTheExecutionItem)
		Action(to Be filled after execution) :
		ExpectedOutput(shouldProduceThis) : 
		Result(to Be filled after execution) : 
		Status :
**/
TRACKER_MANDATORY_SHEETS : [INDEX, [RIB]]

// Plan

getPlans() {
	// Fetch All Folders in Pandora Box
}

// PreRequisites 
createExecutionSheet(planName, RIBEnum) {
	createRawPlan()
	prepareRIB(RIBEnum)
	branchToRIB()
	createTrackerSheet()
	// Creating a spreadsheet in planName Folder with RIB
}

createRawPlan(planName) {
	// Creating a raw Plan doc in planName Folder
}
getRawPlan(planName) {
	// Getting Raw Plan from the planName 
	// If Parsing possible generating info based on that
	// Extendable Interfaces if Parsers 
}


executionSheet(planName)

trackerSheet(planName){
	Creating a Tracker Sheet and writing down separate executionSheets for Research, Implementation and Business.
	Tracker sheet will be able to read execution sheet of [Research, Implementation and Business folders]
}

Step Two : 
Categorize raw plan into Research Implementation and Business part of the 








Create a google document -- in a location or drive directory if possible
get google document see how many cases are possible, by link, name or etc..different functions for each;

Add sheet to it
get list of sheets of a google document
get sheet of a google document by name


remove the common filter out of the sheetList like index, references etc, if needed.




// https://developers.google.com/apps-script/articles/tutorials

function getSheetByName(String ){
	var sheet = SpreadsheetApp.getActive().getSheetByName('Local')
}

function getListOfSheets() {
  try {
    var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets()
    var out = new Array( sheets.length - 1 ) ;
    //out[0] = [ "Sheet1" , "Sheet2" ];
    for (var i = 1 ; i < sheets.length ; i++ ) {
      out[i-1] = [sheets[i].getName()];
    }
    return out
  }
  catch( err ) {
    return "#ERROR!"
  }
}



/**
 * Creates a Google Doc and sends an email to the current user with a link to the doc.
 */
function createAndSendDocument() {
  // Create a new Google Doc named 'Hello, world!'
  var doc = DocumentApp.create('Hello, world!');

  // Access the body of the document, then add a paragraph.
  doc.getBody().appendParagraph('This document was created by Google Apps Script.');

  // Get the URL of the document.
  var url = doc.getUrl();

  // Get the email address of the active user - that's you.
  var email = Session.getActiveUser().getEmail();

  // Get the name of the document to use as an email subject line.
  var subject = doc.getName();

  // Append a new string to the "url" variable to use as an email body.
  var body = 'Link to your doc: ' + url;

  // Send yourself an email with a link to the document.
  GmailApp.sendEmail(email, subject, body);
}