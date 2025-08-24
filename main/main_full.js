/*created by Rom LcO'Feer*/
//var bInitialGlobalLabel = true;
var bDarkMode = true;
var bGlobalLabel = false;
var bMessageBoxOn = false;
var bBookmarkPanelOn = false;
var sLastOpenedType = "";
var iLastOpenedTabIndex = -1;
var bFileExists = true;
var iLastTabIndex = -1;
var iMaxHistory = 20;
var sBibleSearchVersion = "NKJV";
//https://www.flaticon.com/
var bGlobalToolTip = false;
var sOldNoteFileName = "";
var cMainLayout = null;
var bMoveToVerse = false;
var dictionary = null;
var iColorIndex = -1;
var saColor = ["red", "blue", "orange", "green", "purple", "yellow", "black", "white"];
var cEastDlgPanel = null;
var cAdvQueryDlg = null; 
var cInfoLayout = null;
var cMap = null;
var iWinWidth = 800;
var iWinHeight = 400;
var cBibleOrWordsButton = null;
var cMainBible = null;
var sMainBibleVersion = "NET";
var sOldMarkText = "";

var bAtlasLoaded = false;
var caAtlas = null;

var bDictionaryLoaded = false;
var sMode = "init";
var cCenterFrame = null;
var cWestFrame = null;				
var iSearchVerseIndex = 0;
var cEastInnerLayoutPanel = null;
var cEastInnerLayout = null;

var bComment = false;
var bPrefRead = false;
var cBookmarkSearchText = null;
var cBookmarkDataStore = null;
var cBookmarkGridSelModel = "";
var bPauseSettingUpdate = false;
var cCenterFrame = null;
var sConfJason = "https://api.myjson.com/bins/i6198";
var sBookmarkJason = "https://api.myjson.com/bins/10xbu2";
var sBackupJason = "https://api.myjson.com/bins/1dlv0q";

var cBookmarkGrid = null;
var cBookmarkSelectedRow = null;

//Ext.MessageBox.alert('test', "hello");      	      
var cReadOnCheckItem = null;
var cTooltipCheckItem = null;
var cMessageCheckItem = null;
var cBookmarkCheckItem = null;
var cGLabelCheckItem = null;

var bLoaded = false;
var sBaseDir = "file:///C:/Rom/Projects/Java/Read/"
var sDownloadDir = "file:///C:/Rom/Download/"
var sImagePath = "../images/"  
var iTmpBookIndex = 0;
var iTmpChapterIndex = 0;
var cBookChapterDlg = null;
//var cReadOnButton = null;
var bReadoutBible = false;
var cSearchText = null;
var cWestInnerLayout = null;

var bShowBible = true;
var bFavShowBible = true;
var iMaxWords = 7106;
var iWords = 1;
var sWordsBibleType = "kjv";
var sFavWordsBibleType = "kjv"; 
var iWordsBookIndex = 0;
var iWordsChapterIndex = 0;

var sOldWestFileName = "";
var sOldCenterFileName = "";
var sOldEastFileName = "";

var iBookIndex = 0;
var iChapterIndex = 0;
var iVerseIndex = 0;

var iScrollPosition = 0;
var sBibleType = "kjv";
var sAudioBibleType = "niv";

var iFavBookIndex = 0;
var iFavChapterIndex = 0;
var iFavVerseIndex = 0;
var sFavBibleType = "kjv";

var caHistory = []
var caWordsHistory = []
var caHistoryMenuItem = [];
var cBibleMenuItem = null;
var cAudioBibleMenuItem = null;
var cSearchBibleMenuItem = null;

var saRed = ["Psalms","Romans", "Hebrews"];
var saUnderlined = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", 
	"Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", 
	//"1 Chronicles", "2 Chronicles", 
	"Ezra", "Nehemiah", 
	"Esther", 
	"Job", 
	//"Psalms", "Proverbs", "Ecclesiastes", 
	"Song of Songs", 
	"Isaiah", "Jeremiah", "Lamentations", "Ezekiel", 
	"Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", 
	"Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", 
	"Malachi", 
	"Matthew", 
	//"Mark", "Luke", "John", 
	"Acts", "Romans", "1 Corinthians", 
	//"2 Corinthians", 
	"Galatians", "Ephesians", "Philippians", "Colossians", 
	"1 Thessalonians", 
	//"2 Thessalonians", 
	"1 Timothy", 
	//"2 Timothy", 
	"Titus", "Philemon", 
	"Hebrews", "James", "1 Peter"
	//, "2 Peter"
	, "1 John"//, "2 John", "3 John"
	, "Jude"//, "Revelation"
	];

var saBold = ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", 
	"Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", 
	"Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Songs", 
	"Isaiah", "Jeremiah", "Lamentations", "Ezekiel", 
	"Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", 
	"Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", 
	"Matthew", "Mark", "Luke", "John", 
	"Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", 
	"1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", 
	"Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];
var saBlue = ["1 Chronicles", "2 Chronicles", 
	"Ezra", "Nehemiah", "Esther", "Psalms", "Proverbs", "Ecclesiastes", "Song of Songs", 
	"Isaiah", "Jeremiah", "Lamentations", "Ezekiel", 
	"Daniel", "Obadiah", "Jonah", "Micah", 
	"Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", 
	"Mark", "Luke", "John", 
	"2 Corinthians", 
	"2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", 
	"Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"];
var saNewLine = ["Matthew","Judges","Ezra","Isaiah","Daniel","Nahum","Acts","1 Thessalonians","Hebrews"];

var saShortBookName = ["Ge","Ex","Le","Nu","De","Jos","Jdg","Ru","1Sa","2Sa","1Ki","2Ki","1Ch","2Ch","Ezr","Ne","Es","Job","Ps","Pr","Ec","So","Is","Jer","La","Eze","Da","Ho","Joe","Am","Ob","Jon","Mic","Na","Hab","Zep","Hag","Zec","Mal","Mt","Mk","Lk","Jn","Ac","Ro","1Co","2Co","Ga","Eph","Php","Col","1Th","2Th","1Ti","2Ti","Tit","Phm","Heb","Jam","1Pe","2Pe","1Jn","2Jn","3Jn","Jud","Rev"];
var saBookName = ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"];
var iaChapter = [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22];
var iaVerse = [[31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26],[22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38],[17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34],[54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,23,31,40,16,54,42,56,29,34,13],[46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12],[18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33],[36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25],[22,23,18,22],[28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,29,22,44,25,12,25,11,31,13],[27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,33,43,26,22,51,39,25],[53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53],[18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30],[54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30],[17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23],[11,70,13,24,17,22,28,36,15,44],[11,20,32,23,19,19,73,18,38,39,36,47,31],[22,23,15,17,14,14,10,17,32,3],[22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17],[6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,9,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6],[33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31],[18,26,22,16,20,12,29,17,18,20,10,14],[17,17,11,16,16,13,13,14],[31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24],[19,37,25,31,31,30,34,22,26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34],[22,22,66,22,22],[28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35],[21,49,30,37,31,28,28,27,27,21,45,13],[11,23,5,19,15,11,16,14,17,15,12,14,16,9],[20,32,21],[15,16,15,13,27,14,17,14,15],[21],[17,10,10,11],[16,13,12,13,15,16,20],[15,13,19],[17,20,19],[18,15,20],[15,23],[21,13,10,14,11,15,14,23,17,12,17,14,9,21],[14,17,18,6],[25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20],[45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20],[80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53],[51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25],[26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31],[32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27],[31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24],[24,17,18,18,21,18,16,24,15,18,33,21,14],[24,21,29,31,26,18],[23,22,21,32,33,24],[30,30,21,23],[29,23,25,18],[10,20,13,18,28],[12,17,18],[20,15,16,16,25,21],[18,26,17,22],[16,15,15],[25],[14,18,19,16,14,20,28,13,28,39,40,29,25],[27,26,18,17,20],[25,25,22,19,14],[21,22,18],[10,29,24,21,21],[13],[14],[25],[20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21]];


var saShortBookNameList = [
["genesis", "gen", "ge", "gn"],
["exodus","ex","exo","exod"],
["leviticus","lev","le","lv"],
["numbers","num","nu","nm","nb"],
["deuteronomy","deut","de","dt"],
["joshua","josh","jos","jsh"],
["judges","judg","jdg","jg","jdgs"],
["ruth","ruth","rth","ru"],
["1samuel","1sam","1sm","1sa","1s"],
["2samuel","2sam","2sm","2sa","2s"],
["1kings","1king","1kgs","1kin","1ki","1k"],
["2kings","2king","2kgs","2kin","2ki","2k"],
["1chronicles","1chr","1ch","1chron"],
["2chronicles","2chr","2ch","2chron"],
["ezra","ezra","ezr","ez"],
["nehemiah","neh","ne"],
["esther","esth","est","es"],
["job","job","jb"],
["psalms","ps","psalm","pslm","psa","psm","pss"],
["proverbs","prov","pro","prv","pr"],
["ecclesiastes","ecc1","eccles","eccle","ecc","ec"],[
"songofsolomon","song", "so", "sng", "sos"],
["isaiah","isa","is"],
["jeremiah","jer","je","jr"],
["lamentations","lam","la"],
["ezekial","ezek","eze","ezk"],
["daniel","dan","da","dn"],
["hosea","hos","ho"],
["joel","joel","jl"],
["amos","am"],
["obadiah","oba","obad","obdh","ob"],
["jonah","jon"],
["micah","mic","mc"],
["nahum","nah","na"],
["habakkuk","hab", "hb"],
["zephaniah","zeph","zep","zp"],
["haggai","hag","hg"],
["zechariah","zech","zec","zc"],
["malachi","mal","ml"],
["matthew","mt","matt"],
["mark","mk","mrk","mar"],
["luke", "lk", "luk"], 
["john", "jn", "jhn", "joh"],
["acts","act", "ac"], 
["romans","rom","ro","rm"],
["1corinthians","1cor","1co"],
["2corinthians","2cor","2co"],
["galatians","gal","ga"],
["ephesians","eph","ephes"],
["philippians","phil","php","pp"],
["colossians","col","co"],
["1thessalonians","1thess","1thes","1th"],
["2thessalonians","2thess","2thes","2th"],
["1timothy","1tim","1ti"],
["2timothy","2tim","2ti"],
["titus","titus","tit","ti"],
["philemon","philemon"," philem","phm","pm"],
["hebrews", "heb"],
["james","jas","jm"],
["1peter","1pet","1pe","1pt","1p"],
["2peter","2pet","2pe","2pt","2p"],
["1john","1jn","1jhn","1j"],
["2john","2jn","2jhn","2j"],
["3john","3jn","3jhn","3j"],
["jude","jude","jud","jd"],
["revelation","rev", "re", "rv"]];


var audio = null;

var cNotesEastCenterPanel = null; 
var cParallelEastCenterPanel = null; 
var cCrossRefEastCenterPanel = null; 
var cLexiconEastCenterPanel = null; 
var cCommentaryEastCenterPanel = null; 
var cTopicEastCenterPanel = null; 
var cKnowledgeEastCenterPanel = null; 
var cSearchEastCenterPanel = null; 
var cChapSumEastCenterPanel = null; 
var cOtherEastCenterPanel = null; 
var cStrongEastCenterPanel = null; 


var  cWestSouthPanel = null;
var  cCenterPanel = null;
var  cWestCenterPanel = null;
var cWestInnerLayoutPanel = null;

var cInfoPanel = null;
var cTitleText = null;
/*
Ext.override(Ext.menu.Item, 
{
	setIcon: function(url)
	{	
		//var btnEl = this.getEl().child("button:first");
		this.setIcon(url);
		//var btnEl = this.getEl();
		//btnEl.setStyle('background-image', 'url(' +url+')');
	}
});
*/
audiojs.events.ready(function() {audioList = audiojs.createAll(); audio = audioList[0];});


function vHideTabs(sMode)
{
		var cTabs = cMainLayout.getRegion('east').getTabs();
		
		if(sMode == "full" || sMode == "verse")
		{
			cTabs.hideTab('mainParallelEastCenter');
			cTabs.hideTab('mainCrossRefEastCenter');
			cTabs.hideTab('mainLexiconEastCenter');
			cTabs.hideTab('mainCommentaryEastCenter');
			cTabs.hideTab('mainTopicEastCenter');
			cTabs.hideTab('mainKnowlegeEastCenter');
		}
		
		if(sMode == "full")
		{
			cTabs.hideTab('mainSearchEastCenter');	
			cTabs.hideTab('mainNoteEastCenter');	
			cTabs.hideTab('mainOtherEastCenter');			
			cTabs.hideTab('mainStrongEastCenter');						
		}
		
		cTabs.getTab(0).activate();
	}	

//file:///C:/Rom/Projects/Java/Read/Bible%20Atlas.html

function bFileExists(url)
{	
  return true;	
}

function isInteger(s) {
  return (s.toString().search(/^-?[0-9]+$/) == 0);
}

function vUpdateBookmark()
{
	/*
	var a = $.get(sBookmarkJason, function(data, textStatus, jqXHR){			
		store.set(sBookmarkJason, data);
	});
	*/
	//var a = $.get(sBookmarkJason, function(data, textStatus, jqXHR){			
		var data = store.get(sBookmarkJason);
		if(!data)
			return;
						
		var iMarkCount = 0;
		var cMarkContent = {};
		var iCount = data.count; 
		var cContent = data.content; 
				
		if(iCount !== null && typeof iCount !== 'undefined') 
			iMarkCount = iCount;		
		else
			return;
			
		if(cContent !== null && typeof cContent !== 'undefined') 
			cMarkContent = cContent;		
		else
			return;
			
		cBookmarkDataStore.removeAll();	
		var cData = [];
		for(cEachMarkIndex in cMarkContent)
		{
			cEachMarkContent = cMarkContent[cEachMarkIndex];
			cData.push([cEachMarkContent.index, cEachMarkContent.type, cEachMarkContent.bookName, cEachMarkContent.book, (cEachMarkContent.chapter+1), cEachMarkContent.text]);		;
		}
		
		cBookmarkDataStore.loadData(cData);
		cBookmarkDataStore.commitChanges();
		cBookmarkGridSelModel.selectFirstRow();  
   		
				
	//});//get
	
}

function replaceAll(oldStr,findStr,repStr)
{
  var srchNdx = 0;  // srchNdx will keep track of where in the whole line
                    // of oldStr are we searching.
  var newStr = "";  // newStr will hold the altered version of oldStr.
  while (oldStr.indexOf(findStr,srchNdx) != -1)
                    // As long as there are strings to replace, this loop
                    // will run.
  {
    newStr += oldStr.substring(srchNdx,oldStr.indexOf(findStr,srchNdx));
                    // Put it all the unaltered text from one findStr to
                    // the next findStr into newStr.
    newStr += repStr;
                    // Instead of putting the old string, put in the
                    // new string instead.
    srchNdx = (oldStr.indexOf(findStr,srchNdx) + findStr.length);
                    // Now jump to the next chunk of text till the next findStr.
  }
  newStr += oldStr.substring(srchNdx,oldStr.length);
                    // Put whatever's left into newStr.
  return newStr;
}
    
function vReadChapter(play)
{
	if(!audio)
		return;	
	/*
	if(!bLoaded)
	{
		setTimeout(function()
		{
			vReadChapter(); 
		}, 2000);		
		
		return;	
	}
	*/
	
	cWestInnerLayout.getRegion('south').show();
	var sTmpAudioBibleType = sAudioBibleType;
	if(sTmpAudioBibleType != "niv" && sTmpAudioBibleType != "esv")
		sTmpAudioBibleType = "niv";
	sURL = "../audio/" + sTmpAudioBibleType + "/" + (iBookIndex+1) + "/" + (iChapterIndex +1) + ".mp3"
	//if(!bFileExists(sURL))
	//	return;
	//alert(sURL)
 //todo audio
 	if(audio && audio.playing)	
 	{
	 	audio.pause();
 	}
 	else
 	{	 		 	
 		if(audio.mp3 != sURL)
 		{
	 		audio.load(sURL);			
	 		if(play)
	 		{
				setTimeout(function()
				{
					audio.play(); 
				}, 1000);
			}
		}
		else if(play)
			audio.play();
	}
}        

function vUpdateHistoryMenu(iTempVerseIndex)
{
	
	var caTmpHistory = []
	caTmpHistory[0] = [iBookIndex, iChapterIndex, iTempVerseIndex]

	var caCurHistory = caHistory;
	if(!bShowBible)
		caCurHistory = caWordsHistory;
		
	var iIndex = 1;
	for(var i = 0; i < caCurHistory.length; i++)
	{
		cHistory = caCurHistory[i];
		
		if(cHistory[0] == -1 || cHistory[0] == null || cHistory[0] == "null" || cHistory.length < 2 || (cHistory[0] == iBookIndex && Math.abs(cHistory[1] - iChapterIndex) < 2))
			continue;
			
		caTmpHistory[iIndex] = 	cHistory;
		iIndex++;
		//rnew
		if(iIndex >= iMaxHistory)
			break;	
	}
	
	
	if(bShowBible)
		caHistory = caTmpHistory;
	else
		caWordsHistory = caTmpHistory;
	
	//rnew
	for(var i = 0; i < iMaxHistory; i++)
	{
		if(i < caTmpHistory.length)
		{
			caHistoryMenuItem[i].show();
			//rnew
			sText = saBookName[caTmpHistory[i][0]] + " " + (caTmpHistory[i][1]+1)
			if(caTmpHistory[i].length > 2 && caTmpHistory[i][2] != 0)
				sText += ":" + caTmpHistory[i][2]
			caHistoryMenuItem[i].setText(sText);
			
			//caHistoryMenuItem[i].setIcon(sImagePath + 'old.png');
			if(caTmpHistory[i][0] == iFavBookIndex)
				caHistoryMenuItem[i].icon = sImagePath + 'flower.png';
			else if(caTmpHistory[i][0] == 18)
				caHistoryMenuItem[i].icon = sImagePath + 'psalm.png';
			else if(caTmpHistory[i][0] < 39)
				caHistoryMenuItem[i].icon = sImagePath + 'old.png';
			else //if(caTmpHistory[i][0] < )
				caHistoryMenuItem[i].icon = sImagePath + 'fire1.png';
				
		}
		else
			caHistoryMenuItem[i].hide();
	}		
		
}


function vLoadChapter(bReloadWest, vCallback)
{		
	if(iBookIndex != iTmpBookIndex)
	{
		vHideTabs("verse");
		//var cTabs = cMainLayout.getRegion('east').getTabs();
		//cTabs.getTab(0).activate();
		if(iLastOpenedTabIndex < 7)
		{
			sLastOpenedType = "";		
			iLastOpenedTabIndex = -1;
		}
	}
	
 	if(false && audio && audio.playing)	
 	{
	 	audio.pause();
	 	cWestInnerLayout.getRegion('south').hide();
 	}
	bMoveToVerse = false;
	iTmpBookIndex = iBookIndex;
	iTmpChapterIndex = iChapterIndex;
	
	var sBookChapter = "" + (iBookIndex+1) + "/" + (iChapterIndex+1) + ".html";
	var sFileName = "";
	var sTmpBibleType = sBibleType	
    if(!bShowBible) 
	   	sTmpBibleType = sWordsBibleType;

	sFileName = "../bibles/" + sTmpBibleType + "/books/" + sBookChapter;
	   		   	
	 //alert(sBibleType);
	 cWestInnerLayoutPanel.setTitle("<b>" + sTmpBibleType.toUpperCase() + "</b>" );
					
	//alert(sFileName)
	//if(bFileExists(sFileName))
	if(sMode == "search" || bReloadWest || sOldWestFileName != sFileName)
	{
		Ext.get('mainWestCenter').dom.src = sFileName;
		sOldWestFileName = sFileName;
	}

	if(bShowBible)		
		sFileName = "../bibles/" + sMainBibleVersion.toLowerCase() + "/books/" + sBookChapter;
	else
		sFileName = "../notes/words/" + iWords + ".html";
	//alert(sFileName)
	//if(bFileExists(sFileName))
	if(sMode == "search" || sOldCenterFileName != sFileName)
	{
		Ext.get('mainCenter').dom.src = sFileName;
		sOldCenterFileName = sFileName;
	}
		
	sFileName = "../bibles/net/notes/" + sBookChapter;
	//if(bFileExists(sFileName))
	if(sOldEastFileName != sFileName)
	{
		vUpdateNoteContent("load", sFileName, "Notes")
		//Ext.get('mainEastCenter').dom.src = sFileName;
		
		sOldEastFileName = sFileName;
	}
		
	//move the scroll
	
	//cTitleText.setValue("<font size=3><b>" + saBookName[iBookIndex] + "</b> </font>" + (iChapterIndex+1));	
	
	var sVerse = " (" + iaVerse[iBookIndex][iChapterIndex] + ")";
	if(iVerseIndex > 1 && (bShowBible && iFavBookIndex == iBookIndex))
		sVerse = " : <font size=4><b>" + iVerseIndex  + "</b></font>/" + iaVerse[iBookIndex][iChapterIndex];
	
	var sTitle = "";
	
	var sBibleInfo = "";
	if(bDarkMode)
		sBibleInfo = "<b style='font-size:20px'>" + saBookName[iBookIndex] + " " + (iChapterIndex+1)+ "</b>/<font style='font-size:18px'>" + iaChapter[iBookIndex] + "</font><font color=#40ff00 >" + sVerse + "</font>";
	else
		sBibleInfo = "<b style='font-size:20px'>" + saBookName[iBookIndex] + " " + (iChapterIndex+1)+ "</b>/<font style='font-size:18px'>" + iaChapter[iBookIndex] + "</font><font color=#840528 >" + sVerse + "</font>";
	if(bShowBible)
		sTitle = "<b>" + sMainBibleVersion + "</b> - <font size=2>" + sBibleInfo + "</font>" 
	else
		sTitle = "<b>WORDS</b> - <font size=4>" + iWords + "</font>" 
	
	cCenterPanel.setTitle(sTitle);
	sVerse = "";
	//if(iVerseIndex > 1 && (bShowBible && iFavBookIndex == iBookIndex))
	if(iVerseIndex > 1 && (bShowBible && iFavBookIndex == iBookIndex))
		sVerse = ":" + iVerseIndex;
	else if(iSearchVerseIndex > 1 && (!bShowBible))
		sVerse = ":" + iSearchVerseIndex;
	
	
	sBibleInfo = "<b>" + saBookName[iBookIndex] + " " + (iChapterIndex+1) + sVerse+ "</b>";
	if(bShowBible)
	 	cWestInnerLayoutPanel.setTitle("<b>" + sTmpBibleType.toUpperCase() + "</b> - " + sBibleInfo + "");	
	else
		cWestInnerLayoutPanel.setTitle("<b>" + sTmpBibleType.toUpperCase() + "</b> - <font size=4>" + sBibleInfo + "</font>" );	
	
	//vUpdateHistoryMenu();
		
	var iTempVerseIndex = 0;
	//alert(sMode);
	if(sMode == "search" && isInteger(""+iSearchVerseIndex) && Number(iSearchVerseIndex) > 2)
	{
		iTempVerseIndex = Number(iSearchVerseIndex);
		iSearchVerseIndex = 0;
		bMoveToVerse = true;
	}
	//rnew
	else if((sMode == "init" && bShowBible && iFavBookIndex == iBookIndex)
		|| (sMode == "history" && bShowBible && iVerseIndex != 0))
	{
		iTempVerseIndex = iVerseIndex;	
		bMoveToVerse = true;
	}
	
	if(sMode == "search" || iTempVerseIndex > 2 || !bGlobalToolTip)
	{
		var myIframe = document.getElementById('mainCenter');	
		//set iScollIndex = 0 when the chapter changes
		myIframe.onload = function () 
		{
			cCenterFrame = this;
			if(bMoveToVerse)			
			{
				var sBookChapVerse = saShortBookName[iBookIndex] + " " + (iChapterIndex+1) + ":" + (iTempVerseIndex-1);
				this.contentWindow.postMessage("goto:" + sBookChapVerse, '*'); 			
			}
			if(!bGlobalToolTip)
				this.contentWindow.postMessage("notip:", '*');
		}				
	}	
	
	if(bReloadWest || iTempVerseIndex != 0)
	{
		if(bReloadWest && iTempVerseIndex == 0)
			iTempVerseIndex = iVerseIndex;
		
		var myWestIframe = document.getElementById('mainWestCenter');	
		//set iScollIndex = 0 when the chapter changes
		myWestIframe.onload = function () 
		{
			if(bMoveToVerse || (bReloadWest && iTempVerseIndex != 0))			
			{
				var sBookChapVerse = saBookName[iBookIndex].toLowerCase();
				sBookChapVerse = replaceAll(sBookChapVerse, " ", "_");
				sBookChapVerse = sBookChapVerse + "/" + (iChapterIndex+1) + "-" + (iTempVerseIndex);
				this.contentWindow.postMessage("goto:" + sBookChapVerse, '*');
				//iSearchVerseIndex = 0;
			}
		}		
	}	

	vUpdateNoteContent("chapsum", "../notes/sum/" + (iBookIndex+1) + "/" + (iChapterIndex+1) + ".htm", "<img src=" + sImagePath + 'study.png' + "> " + "Chap Sum")
	vUpdateHistoryMenu(iTempVerseIndex);	
	vClose();
	sMode = "";	

  if(vCallback instanceof Function)
	  vCallback();
	
}        

function vOpenNote(iBook, iChapter)
{
	//vOpenInfo("Note", "../notes/sum/" + iBook + "/" + iChapter + ".htm")
	
	
}

function vOpenBook(bReset)  
{	  			
	if(bReset)
	{
		vHideTabs("full");
		sLastOpenedType = "";		
		iLastOpenedTabIndex = -1;
	}
	
	if(bShowBible && iFavBookIndex == iBookIndex)
	{
		iScrollPosition = 0;
		iVerseIndex = 0;
	}
	
	cBookChapterDlg.hide();
	iBookIndex = iTmpBookIndex;
	iChapterIndex = iTmpChapterIndex;
	  
	vLoadChapter(false);	
}

function vChangeBookChapter(iInBookIndex, iInChapterIndex, bOpen)
{
	if(iInBookIndex != iTmpBookIndex)
		iInChapterIndex = 0;

	iTmpBookIndex = iInBookIndex;
	iTmpChapterIndex = iInChapterIndex;
	
	//todo link to load
	var cDlgText = document.getElementById("bookChapterWest");
	var sText = "<div style='padding:6px;'><font face='verdana' size=2 >", sItem;
	for(i = 0; i < saBookName.length; i++)
	{
		sEachBook = saBookName[i]
		if(saNewLine.indexOf(sEachBook) != -1)
			sText += "<br>";
		if(sEachBook == "Matthew")
			sText += "<br>";
			
		sItem = "";	
		if(i == iInBookIndex)
			sItem = "<u><b>" + sEachBook + "</b></u> ";
		else
			sItem = sEachBook + " ";
						
		if(saRed.indexOf(sEachBook) != -1)
			sItem = "<font color=red>" + sItem + "</font>";
			
		
		if(saUnderlined.indexOf(sEachBook) != -1)
			sItem = "<u>" + sItem + "</u>";
			
		if(saBlue.indexOf(sEachBook) != -1)
			sItem = "<font color=blue>" + sItem + "</font>";
		//if(saBold.indexOf(sEachBook) != -1)
		//	sItem = "<b>" + sItem + "</b>";
			
		sText += "<a href='javascript:vChangeBookChapter(" + i + ", iTmpChapterIndex, false);'>" + sItem + "</a>&nbsp;";
		
	}
	sText += "</font></div>";
	cDlgText.innerHTML = sText;

	var cChapterText = document.getElementById("bookChapterCenter");
	var sText = "<div style='padding:6px;'><font face='verdana' size=2 >";
	
	//iaChapter[iBookIndex] = 150
	for(i = 0; i < iaChapter[iInBookIndex]; i++)
	{
		sEachBook = (i+1)
		if(i != 0 && i%10 == 0)
			sText += "<br>";
			
		sItem = "";		
		if(i == iInChapterIndex)
			sItem = "<u><b>" + sEachBook + "</b></u> ";
		else
			sItem = sEachBook + " ";
			
				sText += "<a href='javascript:vChangeBookChapter(iTmpBookIndex, " + i + ", true);'>" + sItem + "</a>&nbsp;";			
		
	}
	
	sText += "</font></div>";
	cChapterText.innerHTML = sText;			
	
	cBookChapterDlg.setTitle(saBookName[iInBookIndex] + " " + (iInChapterIndex+1) );
		
	if(bOpen)
		vOpenBook(false);	
}        

Ext.onReady(function()
{
	
 Ext.QuickTips.init();
 Ext.QuickTips.tagConfig.width = '2000px';            
 Ext.QuickTips.autoDismissDelay = 600000
 Ext.QuickTips.width = 2000;

  var cBookmarkColumModel = new Ext.grid.ColumnModel([
    {
      header: "index",
      dataIndex: 'index',
      hidden: true
    },
    {
      header: "Type",
      dataIndex: 'type',
      editor: new Ext.grid.GridEditor(new Ext.form.TextField()),
      width: 350,
      hidden: false
    },
    {
      header: "Book",
      dataIndex: 'bookName',
      //editor: new Ext.grid.GridEditor(new Ext.form.TextField()),
      width: 100
    },
    {
      header: "book",
      dataIndex: 'book',
      hidden: true
    },
    {
      header: "Chapter",
      dataIndex: 'chapter',
      //editor: new Ext.grid.GridEditor(new Ext.form.TextField()),
      width: 60,
      hidden: false
    },
    {
      header: "Text",
      dataIndex: 'text',
      editor: new Ext.grid.GridEditor(new Ext.form.TextField()),
      width: 1400,
      hidden: false
    }            
    ]);
   
   //cBookmarkColumModel.setEditable(0, false);
   //cBookmarkColumModel.setEditable(1, false);
  // by default columns are sortable
  cBookmarkColumModel.defaultSortable = true;
  
  // this could be inline, but we want to define the Plant record
  // type so we can add records dynamically
  var cBookmarkRecord = Ext.data.Record.create([
    {
      name: 'index',
      type: 'string'
    },
    {
      name: 'type',
      type: 'string'
    },
    {
      name: 'bookName',
      type: 'string'
    },
    {
      name: 'book',
      type: 'float'
    },
    {
      name: 'chapter',
      type: 'float'
    },
    {
      name: 'text',
      type: 'string'
    }    
    ]);
  
  // some data yanked off the web
  var cBookmarkData = [['', '', '', '']];
  
  // create the Data Store
  cBookmarkDataStore = new Ext.data.Store(
    {
      // Bookmark using HTTP
      // proxy: new Ext.data.HttpProxy({url: 'plants.xml'}),
      proxy: new Ext.data.MemoryProxy(cBookmarkData),
      //proxy: new Ext.data.PagingMemoryProxy(cBookmarkData),
      reader: new Ext.data.ArrayReader({}, cBookmarkRecord)
    });

  // create the editor grid
  cBookmarkGrid = new Ext.grid.EditorGrid('bookmark-grid', 
    {
      ds: cBookmarkDataStore,
      cm: cBookmarkColumModel,
       autoHeight : true,
       //autoSizeColumns : true,
       //autoSizeHeaders : true,
       autoWidth : true,
      selModel: new Ext.grid.RowSelectionModel(),
      trackMouseOver: true,
      enableDragDrop: true,
      enableColLock: false
    });
        
  // render it
  cBookmarkGrid.render();
  cBookmarkGridSelModel = cBookmarkGrid.getSelectionModel();
  
  cBookmarkGridSelModel.on('selectionchange', function()
  {	  
	var caSelectedRows = cBookmarkGridSelModel.getSelections();
   	cBookmarkSelectedRow = null;    
    if (caSelectedRows.length != 0) 
      cBookmarkSelectedRow = caSelectedRows[0];      
    
  });
  
  cBookmarkGrid.on('mouseover', function(e, t)
  {
	var cView = cBookmarkGrid.getView();
	if(!cView)  
		return;
    var row = cView.findRowIndex(t);
    var col = cView.findCellIndex(t);
    
    if(row === false || col === false)
    	return;
    
     var cell = cView.getCellText(row, col);      
     if(cell)
     	cell.qtip = "<div style='line-height: 1.3;background-color:white; padding:3px;'><font size=3>" + cell.innerHTML + "</font></div>";      
          
  }); 

	var cBookmarkGridHeader = cBookmarkGrid.getView().getHeaderPanel(true);
	var cBookmarkGridToolBar = new Ext.Toolbar(cBookmarkGridHeader);
	
  cBookmarkSearchText = new Ext.form.TextField(
    {
      fieldLabel: 'Bookmark Search',
      width: 200,
      id: 'bookmarkSearchtextfield',
      name: 'searchbookmarkword'
    });  

  cBookmarkSearchText.on("specialkey", function(field, e)
  {
    e.preventDefault();
    if (e.getKey() == e.ENTER) 
      vSearchBookmark();
    else if (e.getKey() == 27) 
      cBookmarkSearchText.setValue("");
  }, this);
	
	cBookmarkGridToolBar.add(    
	{
      handler: function()
      {
		vUpdateBookmark();		      
      },
      id: 'refreshMark',
      icon: sImagePath + 'refresh.gif',
      cls: 'x-btn-icon save',
      //text:'<b>Delete</b>',
      //cls: 'x-btn-icon',
      tooltip: '<b>Refresh</b> the bookmark list'
    },
    {
      handler: function()
      {
	    if (cBookmarkSelectedRow != null) 
	    {		  
		  	cBookmarkDataStore.remove(cBookmarkSelectedRow);
		  	//alert(rec);
		  	cBookmarkGridSelModel.selectFirstRow();
		  }		      
      },
      id: 'deleteMark',
      icon: sImagePath + 'delete.gif',
      cls: 'x-btn-icon save',
      //text:'<b>Delete</b>',
      //cls: 'x-btn-icon',
      tooltip: '<b>Delete</b> the selected bookmark'
    },
	{
      handler: function()
      {
		var iRecordCount = cBookmarkDataStore.getCount();
		var cContent = {}
		var iIndex = 1;
        //cAdvSearchDataStore.each(function(cEachRecord)
	    for(var i = 0; i < iRecordCount; i++)
	    {
		  cEachRecord = cBookmarkDataStore.getAt(i);
	      cEachData = cEachRecord.data;
	      cContent[cEachData.index] = {"index": "[" + iIndex++ + "] " + cEachData.type, "text": cEachData.text, "type": cEachData.type, "bookName": saBookName[cEachData.book], "book": cEachData.book, "chapter": cEachData.chapter-1};
      	}
      	
		var cResult = {"count": iRecordCount, "content":cContent};
	     
		store.set(sBookmarkJason, cResult)
		/*
		$.ajax({
		    url:sBookmarkJason,
		    type:"PUT",
		    data: JSON.stringify(cResult),
		    contentType:"application/json; charset=utf-8",
		    dataType:"json",
		    success: function(data, textStatus, jqXHR)
		    {
			    //alert(JSON.stringify(data))
		    }
		});     												         								
		*/
      },
      id: 'saveMarks',
      icon: sImagePath + 'save.gif',
      cls: 'x-btn-icon save',
      //text:'<b>Delete</b>',
      //cls: 'x-btn-icon',
      tooltip: '<b>Save</b> bookmarks'
    }, '-', cBookmarkSearchText, {
      handler: vSearchBookmark,
      id: 'searchbm',
      icon: sImagePath + 'search.gif',
      cls: 'x-btn-icon save',
      tooltip: '<b>Search</b> bookmarks'
    }        
    );

  
  cBookmarkGrid.on("rowdblclick", 
  	function()
  	{    
	    if (cBookmarkSelectedRow != null) 
	    {
	      //alert(cSelectedRow.data.book)
	      //alert(cSelectedRow.data.chapter)
	      iBookIndex = Number(cBookmarkSelectedRow.data.book);
	      iChapterIndex = Number(cBookmarkSelectedRow.data.chapter)-1;	      	  
	      
		  vLoadChapter(true);
	  	}
	  	
  	});
   
 var cMainToolBar = new Ext.Toolbar('main-toolbar');
   
cBibleMenuItem = [
				new Ext.menu.CheckItem({
                 text: "NIV",
                 nameid:  "niv",
                 checked: true,
                 group: 'biblemenu',
                 checkHandler: onItemCheck
                 }),
				new Ext.menu.CheckItem({
                 text: "ESV",
                 nameid:  "esv",
                 checked: false,
                 group: 'biblemenu',
                 checkHandler: onItemCheck
                 }),
				new Ext.menu.CheckItem({
                 text: "KJV",
                 nameid:  "kjv",
                 checked: false,
                 group: 'biblemenu',
                 checkHandler: onItemCheck
                 }),
				new Ext.menu.CheckItem({
                 text: "NKJV",
                 nameid:  "nkjv",
                 checked: false,
                 group: 'biblemenu',
                 checkHandler: onItemCheck
                 }),
				new Ext.menu.CheckItem({
                 text: "NET",
                 nameid:  "net",
                 checked: false,
                 group: 'biblemenu',
                 checkHandler: onItemCheck
                 }),
				new Ext.menu.CheckItem({
                 text: "YLT",
                 nameid:  "ylt",
                 checked: false,
                 group: 'biblemenu',
                 checkHandler: onItemCheck
                 })        
        ];

cAudioBibleMenuItem = [
				new Ext.menu.CheckItem({
                 text: "NIV",
                 nameid:  "niv",
                 checked: true,
                 group: 'audiobiblemenu',
                 checkHandler: onItemCheck
                 }),
				new Ext.menu.CheckItem({
                 text: "ESV",
                 nameid:  "esv",
                 checked: false,
                 group: 'audiobiblemenu',
                 checkHandler: onItemCheck
                 })      
        ];

cSearchBibleMenuItem = [
				new Ext.menu.CheckItem({
                 text: "NIV",
                 nameid:  "NIV",
                 checked: true,
                 group: 'searchbiblemenu',
                 checkHandler: onItemCheck
                 }),
				new Ext.menu.CheckItem({
                 text: "ESV",
                 nameid:  "ESV",
                 checked: false,
                 group: 'searchbiblemenu',
                 checkHandler: onItemCheck
                 }),
				new Ext.menu.CheckItem({
                 text: "NET",
                 nameid:  "NET",
                 checked: false,
                 group: 'searchbiblemenu',
                 checkHandler: onItemCheck
                 }),
				new Ext.menu.CheckItem({
                 text: "KJV",
                 nameid:  "KJS",
                 checked: false,
                 group: 'searchbiblemenu',
                 checkHandler: onItemCheck
                 }),
				new Ext.menu.CheckItem({
                 text: "NKJV",
                 nameid:  "NKJV",
                 checked: false,
                 group: 'searchbiblemenu',
                 checkHandler: onItemCheck
                 })      
        ];
                 
//todo misc
 //var cTitleText = new Ext.Toolbar.TextItem('<b>Bible</b>')
 cTitleText = new Ext.form.MiscField(
    {
      value: '<b>Bible</b>',
      width: 330,
      hidden: true,
      labelSeparator : '',
      name: 'group-label'
    });    


for(var i = 0; i < iMaxHistory; i++)
{
	caHistoryMenuItem[i] = new Ext.menu.Item(
    		{
		      icon: sImagePath + 'bymeasure1.gif',		      
		      cls: 'x-btn-text-icon',
		      hidden: true,
		      index_value: i,
		        text: '',
		        handler: function() { vOpenHistory(this.index_value);}
    		}
	);
}

cMainBible = new Ext.Toolbar.Button({
      id: 'MainBible',
      icon: sImagePath + 'book3.png',
      cls: 'x-btn-icon save',      
      disabled: false,
      pressed: false,
      enableToggle: true,
      //cls: 'x-btn-icon',
      tooltip: 'toggle <b>NET/NKJV</b>'
    });      

  cMainBible.on('toggle', function(button, toggled)
  { 
	  if(toggled)
	  	sMainBibleVersion = "NKJV";	  	
	  else
	  	sMainBibleVersion = "NET";
	  vLoadChapter(false);	  
  });
            
cBibleOrWordsButton = new Ext.Toolbar.Button({
      id: 'BibleOrWords',
      icon: sImagePath + 'burst-mode.png',
      cls: 'x-btn-icon save',      
      disabled: false,
      pressed: true,
      enableToggle: true,
      //cls: 'x-btn-icon',
      tooltip: 'toggle <b>Bible/Words</b>'
    });      
    
  cBibleOrWordsButton.on('toggle', function(button, toggled)
  { 
	  if(!bPrefRead)
	  	return;
	  	
	  bShowBible = toggled;	  
	  
	  if(!bShowBible)
	  {
   		var cDlg = Ext.MessageBox.show(
        {
            title: 'Choose the Words',
            value: ""+iWords,
            msg: "Which word do you want to read (1 - " + iMaxWords + ")?", 
            prompt: true,
            buttons: Ext.MessageBox.OKCANCEL,
            fn: function(msgbtn, text)
            {
              if (msgbtn == 'ok')
              {
	              iWords = Number(text);
				  iBookIndex = iWordsBookIndex;
				  iChapterIndex = iWordsChapterIndex;			
	            
	  			  vLoadChapter(false);	  			  
              }
     		}
        });             		  
	  }
	  else
	  {
		iBookIndex = iFavBookIndex;
		iChapterIndex = iFavChapterIndex;
		
	  	vLoadChapter(false);
  	  }
	  
  });

  //if(bInitialGlobalLabel)
  	bGlobalLabel = sGetConfigValue("glabel", false);    
  
  cSearchText = new Ext.form.TextField(
    {
      fieldLabel: 'Search',
      width: bGlobalLabel?160:140,
      id: 'searchtextfield',
      name: 'searchword'
    });  

  cSearchText.on("specialkey", function(field, e)
  {
    e.preventDefault();
    if (e.getKey() == e.ENTER) 
    {
	  if(e.shiftKey)
	  	vSearchMap();
	  else if(e.ctrlKey)
		vOpenDictionary(cSearchText.getValue().trim().toLowerCase(), true);	  
	  else if(e.altKey)
		vLookUpDictionary(cSearchText.getValue().trim().toLowerCase(), true);	  
	  else
      	vSearchBible();
  	}
    else if (e.getKey() == 27) 
      cSearchText.setValue("");
  }, this);
  
  
cReadOnCheckItem = new Ext.menu.CheckItem({
		      id: 'readon',
		      //icon: sImagePath + 'music.gif',
		      cls: 'x-btn-text-icon save',      
		      text: "<b>Read Bible</b> at start", 
		      disabled: false,
		      hide:true,
		      checked: bReadoutBible,
		      //cls: 'x-btn-icon',
		      tooltip: '<b>Bible audio play</b> at startup'
                ,checkHandler: function(item, checked)
                {
	                bReadoutBible = checked;	  
                }
            });        		

cMessageCheckItem = new Ext.menu.CheckItem({
		      id: 'msgon',
		      //icon: sImagePath + 'music.gif',
		      cls: 'x-btn-text-icon save',      
		      text: "Show <b>Message Box</b>", 
		      disabled: false,
		      checked: bMessageBoxOn,
		      //cls: 'x-btn-icon',
		      tooltip: 'Show <b>Message Box</b>'
                ,checkHandler: function(item, checked)
                {	                
	                bMessageBoxOn = checked;	  	                
                }
            });        		

cBookmarkCheckItem = new Ext.menu.CheckItem({
		      id: 'bookmarkon',
		      //icon: sImagePath + 'music.gif',
		      cls: 'x-btn-text-icon save',      
		      text: "Show <b>Bookmark Panel</b>", 
		      disabled: false,
		      checked: bBookmarkPanelOn,
		      //cls: 'x-btn-icon',
		      tooltip: 'Show <b>Bookmakr Panel</b>'
                ,checkHandler: function(item, checked)
                {	                
	                bBookmarkPanelOn = checked;	  	                
					if(bBookmarkPanelOn)
					{
						cMainLayout.getRegion('south').show();					
						setTimeout(function(){ cMainLayout.getRegion('south').expand(null, false); }, 300);		
						setTimeout(function(){ cMainLayout.getRegion('south').collapse(true); }, 500);														
					}
					else
					{
						cMainLayout.getRegion('south').expand(null, false);
						setTimeout(function(){ cMainLayout.getRegion('south').collapse(true); }, 300);		
						setTimeout(function(){ cMainLayout.getRegion('south').hide(); }, 500);																	
					}
							                
                }
            });        		
            

cGLabelCheckItem = new Ext.menu.CheckItem({
		      id: 'glabel',
		      //icon: sImagePath + 'music.gif',
		      cls: 'x-btn-text-icon save',      
		      text: "Show <b>Labels</b> on Manu Items", 
		      disabled: false,
		      checked: bGlobalLabel,
		      //cls: 'x-btn-icon',
		      tooltip: 'Show <b>Labels</b> on Manu Items'
                ,checkHandler: function(item, checked)
                {	                
	                bGlobalLabel = checked;	  	                
                }
            });        		
                        
cTooltipCheckItem = new Ext.menu.CheckItem({
		      id: 'tipon',
		      //icon: sImagePath + 'music.gif',
		      cls: 'x-btn-text-icon save',      
		      text: "Show <b>Tooltip</b> over notes", 
		      disabled: false,
		      checked: bGlobalToolTip,
		      //cls: 'x-btn-icon',
		      tooltip: '<b>Tooltip</b> when hovering over note'
                ,checkHandler: function(item, checked)
                {
	                bGlobalToolTip = checked;	  
	                //refresh the center one
					if(bShowBible)		
					{
						var sFileName = "../bibles/" + sMainBibleVersion + "/books/" + (iBookIndex+1) + "/" + (iChapterIndex+1) + ".html";
						Ext.get('mainCenter').dom.src = sFileName;
					}
	                
                }
            });        		

            
var cJSONUpdateCheckItem = new Ext.menu.CheckItem({
		      id: 'jsonupdate',
		      //icon: sImagePath + 'music.gif',
		      cls: 'x-btn-text-icon save',      
		      text: "Pause <b>setting update</b> ", 
		      disabled: false,
		      checked: bPauseSettingUpdate,
		      //cls: 'x-btn-icon',
		      tooltip: 'Pause <b>Setting update</b>'
                ,checkHandler: function(item, checked)
                {
	                bPauseSettingUpdate = checked;	  
                }
            });        		
  
cMainToolBar.add({
		   icon: sImagePath + 'tool.gif',
            cls: 'x-btn-icon', 
            tooltip: '<b>Settings</b>',
            menu: new Ext.menu.Menu({
        		id: 'valueMapMenu',
        		items: [ 
        		//cJSONUpdateCheckItem, 
        		//cReadOnCheckItem, 
        		cGLabelCheckItem, cTooltipCheckItem, cMessageCheckItem, cBookmarkCheckItem, '-',
    		        {
					      handler: function(){vDownload("Bookmarks", sBookmarkJason);},
					      id: 'downloadbookmarks',
					      icon: sImagePath + 'down_bookmark.png',
					      cls: 'x-btn-text-icon save',
					      text:'Save <b>bookmarks</b>',
					      //cls: 'x-btn-icon',
					      tooltip: 'Save <b>bookmarks</b>'
					    },{
					      handler: function(){vDownload("Settings", sConfJason);},
					      id: 'downloadsettings',
					      icon: sImagePath + 'download-setting.png',
					      cls: 'x-btn-text-icon save',
					      text:'Save <b>settings</b>',
					      //cls: 'x-btn-icon',
					      tooltip: '<b>Save </b>settings'
					    },{
					      handler: vUpload,
					      id: 'upload',
					      icon: sImagePath + 'uploading-archive.png',
					      cls: 'x-btn-text-icon save',
					      text:'<b>Upload </b>bookmarks/settings',
					      //cls: 'x-btn-icon',
					      tooltip: '<b>Upload </b>Bookmarks/Settings'
					    }, 
					    '-',
				{
				    text: "Choose <b>audio Bible</b> version",
				    icon: sImagePath + 'quaver.png',
		      		cls: 'x-btn-text-icon',   
		            menu: new Ext.menu.Menu({
	        		id: 'audioTypeMenu',
	        		items: cAudioBibleMenuItem })
       	 			},
				{
				    text: "Choose <b>Search Bible</b> version",
				    icon: sImagePath + 'search.gif',
		      		cls: 'x-btn-text-icon',   
		            menu: new Ext.menu.Menu({
	        		id: 'searchTypeMenu',
	        		items: cSearchBibleMenuItem })
       	 			}        		
        		]
   			})  // assign menu by instance
        }, '-');    
        
cMainToolBar.add(cBibleOrWordsButton,'-',
    {
      handler: function(){ 
	    if(audio && audio.playing)	
	    {
	 		audio.pause();
	 		cWestInnerLayout.getRegion('south').hide();
 		}
		cBookChapterDlg.show(); vChangeBookChapter(iBookIndex, iChapterIndex, false);},
      id: 'bookchapter',
      icon: sImagePath + 'book.png',
      cls: 'x-btn-text-icon save',
      text:bGlobalLabel?'<b>Books</b>':'',
      //cls: 'x-btn-icon',
      tooltip: 'Select a <b>Book and a chapter</b>'
    },
    {
      handler: function(){vReadChapter(true);},
      id: 'readChapter',
      icon: sImagePath + 'play_red.png',
      cls: 'x-btn-text-icon save',
      text:bGlobalLabel?'Listen':'',
      //cls: 'x-btn-icon',
      tooltip: '<b>Listen</b> to the chapter'
    }, '-',     
    {
      handler: function(){ vPrevNext(-1); },
      id: 'prevchapter',
      icon: sImagePath + 'back-arrow.png',
      cls: 'x-btn-text-icon save',
      text:bGlobalLabel?'Prev':'',
      //cls: 'x-btn-icon',
      tooltip: '<b>Previous</b> chapter'
    },    
     {
      handler: function(){ vPrevNext(1); },
      id: 'nextchapter',
      icon: sImagePath + 'forward.png',
      cls: 'x-btn-text-icon save',
      text:bGlobalLabel?'Next':'',
      //cls: 'x-btn-icon',
      tooltip: '<b>Next</b> chapter'
    }, '-', {
      icon: sImagePath + 'bytime1.gif',
      cls: 'x-btn-text-icon',   
      text: bGlobalLabel?'History':'',
      tooltip: '<b>Bible/Chapter History</b>',         
      menu:
      {
	   items: caHistoryMenuItem
      }
   },
   {
      handler: function(){ vGoBackInHistory(); },
      id: 'prevhistory',
      icon: sImagePath + 'history-back.png',
      cls: 'x-btn-icon save',
      text:'',
      //cls: 'x-btn-icon',
      tooltip: '<b>Previous</b> History'
    },
   {
      handler: function(){ 
		  iBookIndex = iFavBookIndex;			
		  iChapterIndex = iFavChapterIndex;
	      vLoadChapter(false);	  
	      },
      id: 'favhistory',
      icon: sImagePath + 'notebook.png',
      cls: 'x-btn-icon save',
      text:'',
      //cls: 'x-btn-icon',
      tooltip: '<b>Favored</b> History'
    },    
    '-', {
		    text: bGlobalLabel?"<b>Bible</b>":'',
		    icon: sImagePath + 'bible.png',
      		cls: 'x-btn-text-icon',   
            menu: new Ext.menu.Menu({
        		id: 'bibleTypeMenu',
        		items: cBibleMenuItem })
       	 }, 
	 cMainBible,       	 
	cTitleText, '-', cSearchText,{
      handler: function(){vSearchBible();},
      id: 'search',
      icon: sImagePath + 'search_book.png',
      cls: 'x-btn-icon save',
      tooltip: '<b>Search</b> Bible (d)'
    },{
      handler: function(){vSearchMap();},
      id: 'searchmap',
      icon: sImagePath + 'mpasearch.png',
      cls: 'x-btn-icon save',
      tooltip: '<b>Search</b> Map (m)'
    },{
      handler: function(){vSearchWord();},
      id: 'searchword',
      icon: sImagePath + 'search.png',
      cls: 'x-btn-icon save',
      tooltip: '<b>Search</b> a word/phrase<br>postfixed with +[filter] <br>filters: <b>o</b>ld testament,<b>h</b>istoric,p<b>s</b>alms,<b>p</b>rophetic<br><b>n</b>ew testament,<b>g</b>ospel,<b>a</b>cts<br><br>e.g. <b><i>love+a</i></b> means find all the passages in Acts with the word <i>love</i>'
    }
	); 		
 
 //var cEastToolBar = new Ext.Toolbar('east-toolbar');
 
/* 
cReadOnButton = new Ext.Toolbar.Button({
      id: 'readon',
      icon: sImagePath + 'music.gif',
      cls: 'x-btn-text-icon save',      
      text: "toggle <b>read Bible at start</b>", 
      disabled: false,
      hide:true,
      pressed: true,
      enableToggle: true,
      //cls: 'x-btn-icon',
      tooltip: 'toggle <b>audio play</b> at startup'
    });      
    

                
  cReadOnButton.on('toggle', function(button, toggled)
  { 
	  bReadoutBible = toggled;	  
  });
*/    

             
cMainToolBar.add('->',
		{
		   icon: sImagePath + 'location.png',
            cls: 'x-btn-icon', 
            menu: new Ext.menu.Menu({
        		id: 'mapsManu',
        		items: [     
    {
      handler: function(){vOpenInfo("TimeLine", "../info/timeline.jpg")},
      id: 'timelineinfo',
      icon: sImagePath + 'timeline.png',
      cls: 'x-btn-text-icon save',
      text:'Timeline Image',
      //cls: 'x-btn-icon',
      tooltip: '<b>TimeLine Image</b> '
    },{
				      handler: function(){vOpenInfo("Canaan Map", "../info/canaan.jpg")},
				      id: 'canaan',
				      icon: sImagePath + 'map.gif',
				      cls: 'x-btn-text-icon save',
				      text:"Canaan"
				    },{
				      handler: function(){vOpenInfo("Judah and Israel", "../info/JudahIsrael.jpg")},
				      id: 'canaan',
				      icon: sImagePath + 'map.gif',
				      cls: 'x-btn-text-icon save',
				      text:"Judah and Israel"
				    },'-',{
				      handler: function(){vOpenInfo("Assyrian Empire", "../info/Assyrian.jpg")},
				      id: 'assyrian',
				      icon: sImagePath + 'map.gif',
				      cls: 'x-btn-text-icon save',
				      text:"Assyrian Empire"
				    },{
				      handler: function(){vOpenInfo("Babylonian Empire", "../info/Babylonian.jpg")},
				      id: 'Babylonian',
				      icon: sImagePath + 'map.gif',
				      cls: 'x-btn-text-icon save',
				      text:"Babylonian Empire"
				    },{
				      handler: function(){vOpenInfo("Persian Empire", "../info/Persian.jpg")},
				      id: 'Persian',
				      icon: sImagePath + 'map.gif',
				      cls: 'x-btn-text-icon save',
				      text:"Persian Empire"
				    },{
				      handler: function(){vOpenInfo("Hellenistic Empire", "../info/Hellenistic.jpg")},
				      id: 'Hellenistic',
				      icon: sImagePath + 'map.gif',
				      cls: 'x-btn-text-icon save',
				      text:"Hellenistic Empire"
				    },{
				      handler: function(){vOpenInfo("Roman Empire", "../info/Roman.jpg")},
				      id: 'Roman',
				      icon: sImagePath + 'map.gif',
				      cls: 'x-btn-text-icon save',
				      text:"Roman Empire"
				    },'-',{
				      handler: function(){vOpenInfo("NT Jerusalem", "../info/NTJerusalem.jpg")},
				      id: 'NTJ',
				      icon: sImagePath + 'map.gif',
				      cls: 'x-btn-text-icon save',
				      text:"NT Jerusalem"
				    },{
				      handler: function(){vOpenInfo("Abraham's Journey", "../info/OT.jpg")},
				      id: 'otmap',
				      icon: sImagePath + 'map.gif',
				      cls: 'x-btn-text-icon save',
				      text:"Abraham's Journey"
				    },'-',
				    {
				      handler: function(){vOpenInfo("Paul's Journeys", "../info/paul.html")},
				      id: 'paulmapinfo',
				      icon: sImagePath + 'map.gif',
				      cls: 'x-btn-text-icon save',
				      text:"Paul's Journeys",
				      //cls: 'x-btn-icon',
				      tooltip: "<b>Paul's Journeys</b>"
				    },'-',
				    {
				      handler: function(){vOpenInfo("Bible Translations", "../info/translation.html")},
				      id: 'translationinfo',
				      icon: sImagePath + 'map.gif',
				      cls: 'x-btn-text-icon save',
				      text:"Bible Translations",
				      //cls: 'x-btn-icon',
				      tooltip: "<b>Bible Translations</b>"
				    },'-',
				    {
				      handler: function(){vOpenInfo("Heresies", "../info/heresies.html")},
				      id: 'heresyinfo',
				      icon: sImagePath + 'map.gif',
				      cls: 'x-btn-text-icon save',
				      text:"Heresies",
				      //cls: 'x-btn-icon',
				      tooltip: "<b>Heresies</b>"
				    },'-',
				    {
				      handler: function(){vOpenInfo("Heresies", "../info/charts.html")},
				      id: 'chartinfo',
				      icon: sImagePath + 'map.gif',
				      cls: 'x-btn-text-icon save',
				      text:"Charts",
				      //cls: 'x-btn-icon',
				      tooltip: "<b>Charts</b>"
				    }
        		]
   			})  // assign menu by instance
        },
    {
      handler: function(){vOpenInfo("Old Testament Map", "../info/ot_map.jpg")},
      id: 'otmapinfo',
      icon: sImagePath + 'earth.png',
      cls: 'x-btn-text-icon save',
      text:bGlobalLabel?'OT Map':'',
      //cls: 'x-btn-icon',
      tooltip: '<b>Old testament Map</b>'
    },
    {
      handler: function(){vOpenInfo("Old Testament Map", "../info/nt_map.jpg")},
      id: 'ntmapinfo',
      icon: sImagePath + 'planet-earth.png',
      cls: 'x-btn-text-icon save',
      text:bGlobalLabel?'NT Map':'',
      //cls: 'x-btn-icon',
      tooltip: '<b>New testament Map</b>'
    },'-',    
    {
      handler: function(){vOpenInfo("Kings", "../info/kings.jpg")},
      id: 'kingsinfo',
      icon: sImagePath + 'crowns.png',
      cls: 'x-btn-text-icon save',
      text:bGlobalLabel?'Kings':'',
      //cls: 'x-btn-icon',
      tooltip: '<b>Kings and prophets</b> '
    },'-',    
    {
      handler: function(){vOpenInfo("TimeLine", "../info/timeline.html")},
      id: 'timelineinfo',
      icon: sImagePath + 'timeline.png',
      cls: 'x-btn-text-icon save',
      text:bGlobalLabel?'Timeline':'',
      //cls: 'x-btn-icon',
      tooltip: '<b>TimeLine</b> '
    },'-', 	           
    {
      handler: function(){vOpenInfo("Temple", "../info/temple.html")},
      id: 'templeinfo',
      icon: sImagePath + 'malahide-castle.png',
      cls: 'x-btn-text-icon save',
      text:bGlobalLabel?'Temple':'',
      //cls: 'x-btn-icon',
      tooltip: '<b>Temple</b>'
    },'-',
    {
      handler: function(){vOpenInfo("Festivals", "../info/festivals.html")},
      id: 'festivalsinfo',
      icon: sImagePath + 'confetti.png',
      cls: 'x-btn-text-icon save',
      text:bGlobalLabel?'Festivals':'',
      //cls: 'x-btn-icon',
      tooltip: '<b>Festivals</b>'
    },
    {
      handler: function(){vOpenInfo("Offerings", "../info/offerings.html")},
      id: 'sacrificeleinfo',
      icon: sImagePath + 'yagna.png',
      cls: 'x-btn-text-icon save',
      text:bGlobalLabel?'Offerings':'',
      //cls: 'x-btn-icon',
      tooltip: '<b>Offerings</b>'
    }, '-', ' ', {
					handler: function(){
						 	url = "../notes/notes/" + (iBookIndex+1) + "/";
						 	sTitle = "<b>Introduction</b> - " + saBookName[iBookIndex];
						 	vUpdateNoteContent("intro", url, sTitle);						      
						      },
					      id: 'intro',
					      icon: sImagePath + 'text-file.png',
					      cls: 'x-btn-text-icon save',
					      text:bGlobalLabel?'<b>Intro</b>':'',
					      //cls: 'x-btn-icon',
					      tooltip: 'Book <b>Introduction & Summary</b>'
					    }, '-', ' ', 
	{
      handler: vSetDefault,
      id: 'save',
      icon: sImagePath + 'heart.gif',
      cls: 'x-btn-icon save',
      //cls: 'x-btn-icon',
      tooltip: 'set <b>default</b> setting'
    } 
	); 		

	      	              
  // ----------------- the main layout  
  cMainLayout = new Ext.BorderLayout("container", 
    {
      north: 
        {
          toolbar: cMainToolBar
        },	    	    
        south: 
        {
		collapsedTitle: '<b>Bookmarks</b>',
          titlebar: true,
          collapsed: true,
          collapsible: true,
          initialSize: 300,
          //maxSize: 1000,
          hide:true,
          autoScroll: true,
          closeOnTab: false
        },
      west: 
        {
	      titlebar: true,
          initialSize: 400,
          collapsible: true,
          //collapsed: !bGlobalLabel,
          split: true,	        
          autoScroll: true,
          closeOnTab: false
        },
        center: 
        {
		collapsedTitle: '<b>NET</b>',
          titlebar: true,
          collapsible: false,
          //maxSize: 1000,
          autoScroll: true,
          closeOnTab: false
        },
      east: 
        {
          collapsedTitle: '<b>Notes</b>',
          collapsed: false,
          //rnew
          resizeTabs:true,
          tabPosition: 'top',       
          alwaysShowTabs: false,
          titlebar: true,
          split: true,
          initialSize: 400,
          minSize: 0,
          maxSize: 2000,
          collapsible: true,
          animate: true
        }        
    });

  iWinWidth = cMainLayout.el.dom.clientWidth;
  iWinHeight = cMainLayout.el.dom.clientHeight;
  var iSideWidth = iWinWidth/3-70;  
  /*
  cEastInnerLayout = new Ext.BorderLayout('mainEast', 
    {
      center: 
        {
		collapsedTitle: '<b>Notes</b>',
		collapsed: false,
          titlebar: false,
          minSize: 0,
          collapsible: false,
          alwaysShowTabs: false,
          tabPosition: 'top',          
          //maxSize: 1000,
          autoScroll: true,
          closeOnTab: false,
          split: false	     
          }
                
    });
    
    
  cNotesEastCenterPanel = new Ext.ContentPanel('mainNotesEastCenter', {title:'<b>Notes</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  cParallelEastCenterPanel = new Ext.ContentPanel('mainParallelEastCenter', {title:'<b>Parallel</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  cCrossRefEastCenterPanel = new Ext.ContentPanel('mainCrossRefEastCenter', {title:'<b>Cross Ref.</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  cOtherEastCenterPanel = new Ext.ContentPanel('mainOtherEastCenter', {title:'<b>Other</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  
  
  //cEastInnerLayout.add('north', new Ext.ContentPanel('east-toolbar', 'Toolbar'));
  cEastInnerLayout.beginUpdate();
  cEastInnerLayout.add('center', cNotesEastCenterPanel);
  cEastInnerLayout.add('center', cParallelEastCenterPanel);
  cEastInnerLayout.add('center', cCrossRefEastCenterPanel);
  cEastInnerLayout.endUpdate();
  //cEastInnerLayout.add('south', cWestSouthPanel);
  cEastInnerLayoutPanel = new Ext.NestedLayoutPanel(cEastInnerLayout, {title: '<b>Notes</b>'});
  */  

  
  cWestInnerLayout = new Ext.BorderLayout('mainWest', 
    {
	 /*   
      north: 
        {
          toolbar: cMainToolBar
        },	    
      */  
      center: 
        {
		collapsedTitle: '<b>' + sFavBibleType.toUpperCase() + '</b>',
		collapsed: false,
          titlebar: false,
          minSize: 0,
          collapsible: false,
          //maxSize: 1000,
          autoScroll: true,
          closeOnTab: false,
          split: false	     
          },	    
      south: 
        {
          split: false,
          autoScroll: false,
          collapsible: false,
          titlebar: false,	                  
          initialSize: 25
        }
                
    });
    
    
  cWestCenterPanel = new Ext.ContentPanel('mainWestCenter', {title:'<b>' + sFavBibleType.toUpperCase() + '</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}});      
  cWestSouthPanel = new Ext.ContentPanel('mainWestSouth', {title:'', fitToFrame: true, fitContainer: true});  
  //cWestSouthPanel.setStyle("background: #444444;");
  //cWestInnerLayout.add('north', new Ext.ContentPanel('west-toolbar', 'Toolbar'));
  cWestInnerLayout.add('center', cWestCenterPanel);
  cWestInnerLayout.add('south', cWestSouthPanel);
  
   cWestInnerLayout.getRegion('south').hide();
  //cWestSouthPanel.hide();
  cWestInnerLayoutPanel = new Ext.NestedLayoutPanel(cWestInnerLayout, {title: '<b>' + sFavBibleType.toUpperCase() + '</b>'});
    
  cNotesEastCenterPanel = new Ext.ContentPanel('mainNotesEastCenter', {title:"<img src=" + sImagePath + 'note.png' + "> " + '<b>Notes</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  cChapSumEastCenterPanel = new Ext.ContentPanel('mainNoteEastCenter', {title:'<img src=' + sImagePath + 'ch_summary.png> <b>Chapter Summary</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  cParallelEastCenterPanel = new Ext.ContentPanel('mainParallelEastCenter', {title:"<img src=" + sImagePath + 'parallel.png' + "> " + '<b>Parallel - Intro</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  cCrossRefEastCenterPanel = new Ext.ContentPanel('mainCrossRefEastCenter', {title:"<img src=" + sImagePath + 'refer.png' + "> " + '<b>Cross Reference - Summary bibca</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  cLexiconEastCenterPanel = new Ext.ContentPanel('mainLexiconEastCenter', {title:"<img src=" + sImagePath + '3d-dictionary.png' + "> " + '<b>Lexicon - Summary bib</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  cCommentaryEastCenterPanel = new Ext.ContentPanel('mainCommentaryEastCenter', {title:"<img src=" + sImagePath + 'comment.png' + "> " + '<b>Comment - Summary esv</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  cTopicEastCenterPanel = new Ext.ContentPanel('mainTopicEastCenter', {title:"<img src=" + sImagePath + 'hash.png' + "> " + '<b>Topic</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  cKnowledgeEastCenterPanel = new Ext.ContentPanel('mainKnowlegeEastCenter', {title:"<img src=" + sImagePath + 'neuron.png' + "> " + '<b>Knowledge</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  
  cSearchEastCenterPanel = new Ext.ContentPanel('mainSearchEastCenter', {title:"<img src=" + sImagePath + 'book2.png' + "> " + '<b>Dictionary</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  cOtherEastCenterPanel = new Ext.ContentPanel('mainOtherEastCenter', {title:"<img src=" + sImagePath + 'word.png' + "> " + '<b>Word</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
  cStrongEastCenterPanel = new Ext.ContentPanel('mainStrongEastCenter', {title:"<img src=" + sImagePath + 'numbered-list.png' + "> " + '<b>Strongs</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 

          
  cCenterPanel = new Ext.ContentPanel('mainCenter', {title:'<b>NET</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}});   
  cMainLayout.beginUpdate();
  cMainLayout.add('north', new Ext.ContentPanel('main-toolbar', 'Toolbar'));
  cMainLayout.add('south', new Ext.GridPanel(cBookmarkGrid, {title:'<b>Bookmarks</b>', fitToFrame: true, fitContainer: true}));
  cMainLayout.add('center', cCenterPanel);
  cMainLayout.add('west', cWestInnerLayoutPanel);  
  
  
  //cMainLayout.add('east', cEastInnerLayoutPanel);
  cMainLayout.add('east', cNotesEastCenterPanel);
  cMainLayout.add('east', cChapSumEastCenterPanel);
  cMainLayout.add('east', cParallelEastCenterPanel);
  cMainLayout.add('east', cCrossRefEastCenterPanel);  
  cMainLayout.add('east', cLexiconEastCenterPanel);
  cMainLayout.add('east', cCommentaryEastCenterPanel);
  cMainLayout.add('east', cTopicEastCenterPanel);
  cMainLayout.add('east', cKnowledgeEastCenterPanel);
    
  cMainLayout.add('east', cSearchEastCenterPanel);
  cMainLayout.add('east', cOtherEastCenterPanel);
  cMainLayout.add('east', cStrongEastCenterPanel);
  
  cMainLayout.endUpdate();                  
    

   cMainLayout.getRegion('east').resizeTo(iSideWidth);
   cMainLayout.getRegion('west').resizeTo(iSideWidth);
   
   document.addEventListener('keydown', function(event)
   {
    	//alert(event.keyCode);
    	if(event.keyCode == 45)
    		cSearchText.focus();
	} );
   
/*
   document.addEventListener('keydown', function(event)
   {
    	//alert(event.keyCode);
    	if(event.keyCode == 45)
    		cSearchText.focus();
	} );

window.onkeyup = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 45)
        cSearchText.focus();
};	
	
   cMainLayout.getEl().addKeyListener(45, function() 
   {
	   cSearchText.focus();
	});
*/	
   //var cAudio = Ext.get('myAudio');
  //cAudio.setStyle('{width:'+ iSideWidth + '}');
   
  //cMainLayout cEastContentPanel.resizeEl.dom.clientWidth
  
  //------------------ dialog for plot
  cBookChapterDlg = new Ext.LayoutDialog("dlg-box", 
    {
      //modal:true,
      width: 1010,
      height: 350,
      resizable: true,
      shadow: true,
      minWidth: 200,
      minHeight: 0,
      buttonAlign: "center",
      //collapsible: true,      
      // proxyDrag: true,
      center: 
        {
		collapsedTitle: '<b>Chapters</b>',
          titlebar: true,
          autoScroll: true,
        },
      west: 
        {
		collapsedTitle: '<b>Books</b>',
		collapsed: false,
          titlebar: true,
          minSize: 0,
          initialSize: 610,
          //maxSize: 1000,
          autoScroll: true,
          closeOnTab: false,
          split: true	        
        }
    });
    
  cBookChapterDlg.setTitle('Books and Chapters');
  cBookChapterDlg.addKeyListener(27, cBookChapterDlg.hide, cBookChapterDlg);
  cBookChapterDlg.addKeyListener(13, function(){vOpenBook(true)}, cBookChapterDlg);
  cBookChapterDlg.addButton('Open', function()
  {
	  vOpenBook(true);
  }, cBookChapterDlg);    
  cBookChapterDlg.addButton('Cancel', cBookChapterDlg.hide, cBookChapterDlg);    

  	  
  var cBookInfoLayout = cBookChapterDlg.getLayout();
  cBookInfoLayout.beginUpdate();
  
  var cWestBibleChapterPanel = new Ext.ContentPanel('bookChapterWest', {title:'<b>Books</b>', fitToFrame: true, fitContainer: true});  
  var cCenterBibleChapterPanel = new Ext.ContentPanel('bookChapterCenter', {title:'<b>Chapters</b>', fitToFrame: true, fitContainer: true});  
  cBookInfoLayout.add('west', cWestBibleChapterPanel);
  cBookInfoLayout.add('center', cCenterBibleChapterPanel);    
  cBookInfoLayout.endUpdate();
    
  
  //------------------ dialog for plot
  var cInfoDlg = new Ext.LayoutDialog("info-dlg-box", 
    {
      //modal:true,
      width: iWinWidth-20,
      height: iWinHeight-20,
      resizable: true,
      shadow: true,
      minWidth: 200,
      minHeight: 0,
      buttonAlign: "center",
      //collapsible: true,      
      // proxyDrag: true,
      center: 
        {
		collapsedTitle: '<b>Info</b>',
          titlebar: true,
          autoScroll: true,
        }
    });
    
  cInfoDlg.setTitle('Info');
  cInfoDlg.addKeyListener(27, cInfoDlg.hide, cInfoDlg);
  	  
  var cInfoDlgLayout = cInfoDlg.getLayout();
  cInfoDlgLayout.beginUpdate();  
  //cInfoPanel = new Ext.ContentPanel('infoCenter', {title:'<b>Info</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'div'}});    
  cInfoPanel = new Ext.ContentPanel('infoCenter', {title:'<b>Info</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}});    
  //cInfoPanel = new Ext.ContentPanel('infoCenter', {title:'<b>Info</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe'}});    
  
  cInfoDlgLayout.add('center', cInfoPanel);    
  cInfoDlgLayout.endUpdate();
  //cInfoPanel.src = "1.html"; 
  
  
    
function vPrevNext(iIncrease)
{
	if(bShowBible)		
	{
		if(iFavBookIndex == iBookIndex)
		{
			iScrollPosition = 0;
			iVerseIndex = 0;
		}
		
		if(iIncrease == -1 && iChapterIndex != 0)
		{
			iChapterIndex--; 
			vLoadChapter(false);
		}		 
		if(iIncrease == 1 && iChapterIndex+1 < iaChapter[iBookIndex])
		{
			iChapterIndex++; 
			vLoadChapter(false);
		}
	}
	else
	{
		
		if(iIncrease == -1 && iWords != 1)
		{
			iWords--; 
			vLoadChapter(false);
		}		 
		if(iIncrease == 1 && iWords+1 < iMaxWords)
		{
			iWords++; 
			vLoadChapter(false);
		}				
	}
}

function vOpenInfo(sTitle, sFileName)
{	/*
	sFileName = sBaseDir + "bibles/net/books/1/1.html"
	cInfoPanel.getUpdateManager().loadScripts = true;
	cInfoPanel.load(sFileName);
	cInfoPanel.refresh();
	*/
	//var test = Ext.get('infoCenter');
	Ext.get('infoCenter').dom.src = sFileName;
		
	cInfoDlg.setTitle(sTitle);
	if(sTitle == "Note")
		cInfoDlg.resizeTo(iWinWidth/2, iWinHeight/2);
	else
		cInfoDlg.resizeTo(iWinWidth-20, iWinHeight-20);
	cInfoDlg.show();
}

function vOpenHistory(iIndex)
{
	var caCurHistory = caHistory;
	if(!bShowBible)
		caCurHistory = caWordsHistory;
		
	if(iIndex >= caCurHistory.length)
		return;
	var iBook = caCurHistory[iIndex][0];
	var iChapter = caCurHistory[iIndex][1];
	
	//rnew
	var iVerse = 0;
	if(caCurHistory[iIndex].length > 2 && caCurHistory[iIndex][2] != 0)
		iVerse = caCurHistory[iIndex][2];
	
	if(iBook != -1)	  
	{
		iBookIndex = iBook;
		iChapterIndex = iChapter;
		//rnew
		sMode = "history";
		if(iVerse != 0)
			iVerseIndex = iVerse;
		vLoadChapter(false);	
	}	
}

function vGoBackInHistory()
{
	if(caHistory.length > 1)
		vOpenHistory(1 );	
}

    function onItemCheck(item, checked)
    {	    
	    if(!item.checked)
	    	return;
	   
	if(item.group == "biblemenu")
	{
	   if(bShowBible) 
	   	sBibleType = item.nameid;
	   else
	   	sWordsBibleType = item.nameid;
	   	if(sMode != "init")
	   		vLoadChapter();
     }  	
     else if(item.group == "audiobiblemenu")
     {
	     sAudioBibleType = item.nameid;
	 	if(audio && audio.playing)	
	 	{
		 	audio.pause();
		 	cWestInnerLayout.getRegion('south').hide();
	 	}
     }
     else if(item.group == "searchbiblemenu")
     {
	     sBibleSearchVersion = item.nameid;
     }
     
    }

function vSetDefault()
{
	bFavShowBible = bShowBible;
	if(bShowBible)
	{
		iFavBookIndex = iBookIndex;
		iFavChapterIndex = iChapterIndex;
		sFavBibleType = sBibleType;	
	}
	else
	{
		iWordsBookIndex = iBookIndex;
		iWordsChapterIndex = iChapterIndex;		
		sFavWordsBibleType = sWordsBibleType;
	}
	vClose();
	/*
	var cMarkData = null;
	var cConfData = null;
	var a = $.get(sBookmarkJason, function(data, textStatus, jqXHR) 
		{			
			cMarkData = data;								         				
			
			var a = $.get(sConfJason, function(data, textStatus, jqXHR) 
				{			
					cConfData = data;								         				
					
					var cData = {"conf": cConfData, "mark": cMarkData}	
					$.ajax({
						    url:sBackupJason,
						    type:"PUT",
						    data: JSON.stringify(cData),
						    contentType:"application/json; charset=utf-8",
						    dataType:"json",
						    success: function(data, textStatus, jqXHR)
						    {
							    //alert(JSON.stringify(data))
						    }
						});     
					
					
				});//get
			
		});//get					
	*/
}

function vSearchBookmark()
{
	var sValue = cBookmarkSearchText.getValue();
	if(sValue == "")
		return;
	sValue = sValue.toLowerCase();	
	var iStartIndex = -1;	
	var iRecordCount = cBookmarkDataStore.getCount();
	
    //cAdvSearchDataStore.each(function(cEachRecord)
	for(var i = 0; i < iRecordCount; i++)
	{
	  cEachRecord = cBookmarkDataStore.getAt(i);
	  if(iStartIndex == -1)
	  {
		  if(cEachRecord == cBookmarkSelectedRow)
		  	iStartIndex = i;
		  continue;
	  }
	  
	  cEachData = cEachRecord.data;
	  if(cEachData.type.toLowerCase().indexOf(sValue) != -1
	  	|| cEachData.text.toLowerCase().indexOf(sValue) != -1)
	  {
		  cBookmarkGridSelModel.selectRow(i);
		  return;
	  }  
   }

    //cAdvSearchDataStore.each(function(cEachRecord)
	for(var i = 0; i <= iStartIndex; i++)
	{
	  cEachRecord = cBookmarkDataStore.getAt(i);	  
	  cEachData = cEachRecord.data;
	  if(cEachData.type.toLowerCase().indexOf(cEachData) != -1
	  	|| cEachData.text.toLowerCase().indexOf(cEachData) != -1)
	  {
		  cBookmarkGridSelModel.selectRow(i);
		  return;
	  }  
   }
   	            
}

function download(filename, text, time) 
{
	var currentdate = new Date(); 
	if(time)
	{
		var datetime = currentdate.getDate() + "-"
	                + (currentdate.getMonth()+1)  + "-" 
	                + currentdate.getFullYear() + "_"  
	                + currentdate.getHours() + "-"  
	                + currentdate.getMinutes() + "-" 
	                + currentdate.getSeconds();
	    filename += "_" + datetime + ".js";
	}
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}

function vDownload(sType, sKey)
{
	var data = store.get(sKey);
	var sContent = "var c" + sType + " = " + JSON.stringify(data);
	download(sType, sContent, true);	
}

cMainLayout.on('regionexpanded', function()
{
  if(bBookmarkPanelOn && !cMainLayout.getRegion('south').collapsed && cBookmarkDataStore.getCount() == 0)
  {
	vUpdateBookmark();	  
  }
}, this);


	vHideTabs("full");
		
vOpen();
//vUpdateBookmark();
//cMainLayout.getRegion('south').collapse(true);

//new
document.getElementById('mainWestSouth').style["visibility"] = "visible";
//$('.mainWestSouth').css('visibility','visible');
//cWestInnerLayout.getRegion('south').show();
//$('.mainWestSouth').css('background','#444444');
//$('.myAudio').css('visibility','visible');
//document.getElementById('audiojs').style["visibility"] = "visible";
//$('.audiojs').css('display','block');

//document.getElementById("container").removeAttribute("hidden");
//document.getElementById('container').style["visibility"] = "visible";
//document.getElementById('mainWestSouth').style["display"] = "block";
//cMainLayout.getRegion('east').getTabs().getTab(0).setWidth(100);
/*
var cTabs = cMainLayout.getRegion('east').getTabs();
cTabs.getTab(1).activate();
cTabs.getTab(0).activate();
cTabs.getTab(0).setWidth(100);
cTabs.getTab(0).setText("<b>Notes</b>");
cTabs.getTab(1).setText("<b>Parallel</b>");
cTabs.getTab(2).setText("<b>Cross Reference</b>");
cTabs.getTab(1).hide();
cTabs.getTab(2).hide();
*/

});
//ready


function vSearchWord()
{
	var sValue = cSearchText.getValue().trim().toLowerCase();
	if(sValue.length == 0)
		return;
		
	//sValue = replaceAll(sValue, " ", "+")

	bComment = true;
	sTitle = "<img src=" + sImagePath + 'magnifier-tool.png' + "> " + cSearchText.getValue();
	//sTitle = "<b>Search</b>-" + cSearchText.getValue();
	
	//OT
	if(sValue.endsWith("+o"))
	{
		sValue = sValue.substring(0, sValue.length-2);
		url = "https://www.biblegateway.com/quicksearch/?quicksearch=" + sValue + "&qs_version=" + sBibleSearchVersion + "&limit=500&begin=1&end=46";	
	}	
	else if(sValue.endsWith("+m"))
	{
		vSearchMap();
	}
	else if(sValue.endsWith("+d"))
	{
		sValue = sValue.substring(0, sValue.length-2);
		vOpenDicDotCom(sValue);
	}	
	else if(sValue.endsWith("+w"))
	{
		sValue = sValue.substring(0, sValue.length-2);
		vOpenDictionary(sValue, true);
	}
	//NT
	else if(sValue.endsWith("+n"))
	{
		sValue = sValue.substring(0, sValue.length-2);
		url = "https://www.biblegateway.com/quicksearch/?quicksearch=" + sValue + "&qs_version=" + sBibleSearchVersion + "&limit=500&begin=47&end=73";	
	}
	//NT gospel
	else if(sValue.endsWith("+g"))
	{
		sValue = sValue.substring(0, sValue.length-2);
		url = "https://www.biblegateway.com/quicksearch/?quicksearch=" + sValue + "&qs_version=" + sBibleSearchVersion + "&limit=500&begin=47&end=50";	
	}
	//NT after acts
	else if(sValue.endsWith("+a"))
	{
		sValue = sValue.substring(0, sValue.length-2);
		url = "https://www.biblegateway.com/quicksearch/?quicksearch=" + sValue + "&qs_version=" + sBibleSearchVersion + "&limit=500&begin=51&end=73";	
	}
	//OT historic books until Chronicles
	else if(sValue.endsWith("+h"))
	{
		sValue = sValue.substring(0, sValue.length-2);
		url = "https://www.biblegateway.com/quicksearch/?quicksearch=" + sValue + "&qs_version=" + sBibleSearchVersion + "&limit=500&begin=1&end=15";	
	}
	//OT propetic books from Nehemiah
	else if(sValue.endsWith("+p"))
	{
		sValue = sValue.substring(0, sValue.length-2);
		url = "https://www.biblegateway.com/quicksearch/?quicksearch=" + sValue + "&qs_version=" + sBibleSearchVersion + "&limit=500&begin=1&end=15";	
	}
	//OT psalms
	else if(sValue.endsWith("+s"))
	{
		sValue = sValue.substring(0, sValue.length-2);
		url = "https://www.biblegateway.com/quicksearch/?quicksearch=" + sValue + "&qs_version=" + sBibleSearchVersion + "&limit=500&begin=23&end=23";	
	}
	else
		url = "https://www.biblegateway.com/quicksearch/?quicksearch=" + sValue + "&qs_version=" + sBibleSearchVersion + "&limit=500";	
	
	vUpdateNoteContent("dictionary", url, sTitle);			 			            		
}

function vSearchMap()
{
	var sValue = cSearchText.getValue().trim().toLowerCase();
		
	if(sValue == "")
		return;
		
	if(!bAtlasLoaded)
	{
		loadJS('../main/atlas.js', function(){bAtlasLoaded = true; setTimeout(function()
		{
			vLookupMap(true);
		}, 1000);		
 		}, document.body);				 	
	}
	else
		vLookupMap(false);
}
	
function vLookupMap(bFirst)
{
	sValue = cSearchText.getValue().trim().toLowerCase();

	if(sValue.endsWith("+m"))	
		sValue = sValue.substring(0, sValue.length-2);
			
	if(sValue == "")
		return;
		
	while(!caAtlas)
	{
		setTimeout(function(){}, 500);										
	}
			
	sValue = replaceAll(sValue, ".", " ");	
	sValue = replaceAll(sValue, "  ", " ");	
	
	var csText = sValue.split(" ");	
	var iTextCount = csText.length
	var saResult = [];
	    	
	for(var sDic in caAtlas) //caAtlas[sDic]
	{
		if(//text.indexOf(sDic) != -1 ||
			 sDic.indexOf(sValue) != -1
			|| (iTextCount > 1 && (sDic.indexOf(csText[0]) != -1 || sDic.indexOf(csText[1]) != -1))
			|| (iTextCount > 2 && (sDic.indexOf(csText[0]) != -1 || sDic.indexOf(csText[1]) != -1 || sDic.indexOf(csText[2]) != -1))
			)	
		{
			if(sDic == sValue)
				saResult.unshift(sDic);
			else
				saResult.push(sDic);
		}
	}
	
	if(saResult.length == 0)
		return;	
	
	if(saResult.length == 1)	
	{
	 	vOpenMap(saResult[0], bFirst)
	}
	else
	{
		sMsg = '<select id="dic_select">';
		for(var i = 0; i < saResult.length; i++)
		{
			sMsg += '<option style={margin:0;padding:0;} value="' + i + '">' + saResult[i].trim() + '</option>'
		}
		sMsg += '</select>'
		
		Ext.MessageBox.show({
		    title: 'Choose the place',
		    msg: sMsg,
		    buttons: Ext.MessageBox.OKCANCEL,
		    fn: function (btn) {
		        if (btn == 'ok') 
		        {
			        var iIndex = Number(Ext.get('dic_select').getValue());
					vOpenMap(saResult[iIndex], bFirst);
		        }
		    }
		});				
	}
		
}

function pinSymbol(color) {
  return {
    path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
    fillColor: color,
    fillOpacity: 0.4,
    strokeColor: '#000',
    strokeWeight: 2,
    labelOrigin: new google.maps.Point(0, 10),  
	//origin: new google.maps.Point(10, 10),
  	//anchor: new google.maps.Point(10,65),    
    scale: 0.7
  };
}

function vOpenMap(sPlace, bFirst)
{
	if(bFirst)
	{

	  cAdvQueryDlg = new Ext.LayoutDialog("map-dlg-box", 
	    {
	      //modal:true,
	      width: 980,
	      height: 500,
	      resizable: true,
	      shadow: true,
	      minWidth: 200,
	      minHeight: 0,
	      buttonAlign: "center",
	      //collapsible: true,      
	      // proxyDrag: true,
	      center: 
	        {
			collapsed: false,
	          titlebar: true,
	          collapsible: true,
	          autoScroll: true,
	          closeOnTab: false,
	          split: true	        
	        },
	      east: 
	        {
			collapsedTitle: '<b>Detail</b>',
			collapsed: false,
	          titlebar: true,
	          minSize: 0,
	          initialSize: 800,
	          collapsible: true,
	          //maxSize: 1000,
	          autoScroll: true,
	          closeOnTab: false,
	          split: true	        
	        }
	    });
	    
	  cAdvQueryDlg.addKeyListener(27, cAdvQueryDlg.hide, cAdvQueryDlg);
	  	  
	  cInfoLayout = cAdvQueryDlg.getLayout();
	  var cCenterDlgPanel = new Ext.ContentPanel('map-panel', {title:'<b>Map</b>', fitToFrame: true, fitContainer: true});
	  cEastDlgPanel = new Ext.ContentPanel('eastDlg', {title:'<b>Notes</b>', fitToFrame: true, fitContainer: true, autoCreate: {tag: 'iframe', src: ''}}); 
	  cInfoLayout.beginUpdate();
	  cInfoLayout.add('center', cCenterDlgPanel);
	  cInfoLayout.add('east', cEastDlgPanel);
			  
	  cInfoLayout.endUpdate();
	  cAdvQueryDlg.resizeTo(iWinWidth-50, iWinHeight-50);
	  vInitializeMap();		  			
	}	
	var saValue = caAtlas[sPlace];
	var saLocation = saValue[0].split(",");      	

	while(!cAdvQueryDlg)
	{
		setTimeout(function(){}, 500);										
	}
		
    cAdvQueryDlg.setTitle('Map : ' + sPlace.toUpperCase());
	sFileName = "../notes/atlas/" + sPlace + ".html";
	
	checkFileExists(sFileName);
	setTimeout(function()
	{
		if(bFileExists)		
		{
			Ext.get('eastDlg').dom.src = sFileName;		
			cInfoLayout.getRegion('east').expand(null, false);		
			cEastDlgPanel.setTitle('Notes : ' + sPlace.toUpperCase());	
		}
		else
		{
			cInfoLayout.getRegion('east').collapse(false);		
		}
	  }, 500);
	
	//Ext.get('eastDlg').dom.src = sFileName;		
	//cInfoLayout.getRegion('east').expand(null, false);		
	
	while(!cMap)
	{
		setTimeout(function(){}, 500);										
	}

	if(cMap)
	{
		var myLatLng = {lat: Number(saLocation[0]), lng: Number(saLocation[1])};
	
		iColorIndex++;
		if(iColorIndex >= saColor.length)
			iColorIndex = 0;
		
		sPlace = sPlace.charAt(0).toUpperCase() + sPlace.substr(1);
	    var marker = new google.maps.Marker({
	          position: myLatLng,
	          map: cMap,
	          icon: pinSymbol(saColor[iColorIndex]),
	          title: sPlace,
			    label: {
			      text: sPlace,
			       fontSize: "16px",
			      //color: "#C70E20",
			      fontWeight: "bold"
			    }
	     });      
		     
	    if(saValue[1].trim() !== "")
	    {
			var infowindow = new google.maps.InfoWindow({
		    	content: saValue[1]
		  	});
		
		  	marker.addListener('click', function() {
		    	infowindow.open(cMap, marker);
		  	});
	 	}  
	 	
		cMap.setCenter(myLatLng);
	}

	cAdvQueryDlg.show();
		cAdvQueryDlg.moveTo(20, 20);
	
}


function vInitializeMap()
{   	
	
	var mapTypeControlOptions = 
	{
		mapTypeIds: [google.maps.MapTypeId.HYBRID, google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.TERRAIN]
	};
	
  // Create an array of styles.
  var styles = [{
    stylers: [
      { lightness: 50 }
    ]
  },
	{
        featureType: "poi",
        elementType: "labels",
        stylers: [
              { visibility: "off" }
        ]
    },
	{
        featureType: "road",
        elementType: "labels",
        stylers: [
              { visibility: "off" }
        ]
    },{
    "featureType": "administrative.neighborhood",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.province",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  }
  ,{
    "featureType": "administrative.locality",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  }  
  ];
// Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles, {name: "Faint"});
	
	var mapOptions = 
	 {
	    zoom: 8,
	    mapTypeControl: true,
	    mapTypeControlOptions: mapTypeControlOptions,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    center: new google.maps.LatLng(31.763872, 35.218980),
	    minZoom: 5,
	    maxZoom: 20,
	    scrollwheel: true,
	    //disableDoubleClickZoom: true,
	    zoomControl: true,
	    zoomControlOptions: google.maps.ZoomControlStyle.SMALL,
		mapTypeControlOptions: {
      		mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    	}	    	    
	  }

  	cMap = new google.maps.Map(document.getElementById("map-panel"), mapOptions); 
  	
  	if(!cMap)  	
  	  return;

	//Associate the styled map with the MapTypeId and set it to display.
  	//cMap.mapTypes.set('map_style', styledMap);
  	//cMap.setMapTypeId('map_style');

  	//bounds = new google.maps.LatLngBounds(new google.maps.LatLng(59.203759, -8.399822), new google.maps.LatLng(50.738362, 2.893765));
			
}    

function vSearchBible(sValue)
{
	if(sValue === null || typeof sValue === 'undefined')
		sValue = cSearchText.getValue().trim().toLowerCase();
		
	if(sValue == "")
		return;
			
	if(sValue.endsWith("+m") || sValue.endsWith("+d") || sValue.endsWith("+w") || sValue.endsWith("+o") || sValue.endsWith("+n") || sValue.endsWith("+a") || sValue.endsWith("+h") || sValue.endsWith("+p") || sValue.endsWith("+s") || sValue.endsWith("+g"))
	{
		vSearchWord();		
		return;
	}
			
	if(!bOpenVerse(sValue))
		vOpenDictionary(sValue, false);					 
}

function bOpenVerse(sValue)
{		
	sValue = replaceAll(sValue, ".", " ");	
	if(sValue.indexOf(':') == -1 && sValue.indexOf(';') != -1)
		sValue = replaceAll(sValue, ";", ":");	
	sValue = replaceAll(sValue, "  ", " ");	
	
	iSearchVerseIndex = 0;
	if((iIndex = sValue.indexOf(":")) != -1)
	{
		iSearchVerseIndex = sValue.substring(iIndex+1);
		iSearchVerseIndex = iSearchVerseIndex.trim();
		sValue = sValue.substring(0, iIndex);
	}

	var saValue = sValue.split(" ");	
	var iChap = -1;
	var iBook = 1;
	var iBookNum = -1;
	var sBook = sValue;
	if(saValue.length < 0)
		return false;
	var sLastWord = saValue[saValue.length-1];	

	if(isInteger(saValue[0]))
	{
	  iBookNum = Number(saValue[0]);
	  sBook = "" + iBookNum + saValue[1]
	}
	else
		sBook = saValue[0]
		
	if(isInteger(sLastWord))
		iChap = Number(sLastWord);
	else
		iChap = 1
		
	sMode = "search";	
	sBook = sBook.trim().toLowerCase();
	var iIndex = 0;
	for(iIndex = 0; iIndex < saBookName.length; iIndex++)
	{
		sBookName = saBookName[iIndex]
		sBookName = replaceAll(sBookName, " ", "").toLowerCase();
		if((sBookName.indexOf(sBook) == 0 || saShortBookNameList[iIndex].indexOf(sBook) != -1) && iaChapter[iIndex] >= iChap)
		{
			iBookIndex = iIndex;
			iChapterIndex = iChap-1;
			  
			vLoadChapter(false);	
			 
			return true;
		}
	}			

	return false;	
}

function sGetConfigValue(sName, sDefault)
{
		var data = store.get(sConfJason)
		
		if(data !== null && typeof data !== 'undefined')
		{
			if(typeof data[sName] !== 'undefined')
				return data[sName];					
		}
	return sDefault;
}

function vOpen()
{
	/*
	var a = $.get(sConfJason, function(data, textStatus, jqXHR) 
	{			
		store.set(sConfJason, data)
	});
	*/
	//var a = $.get(sConfJason, function(data, textStatus, jqXHR) {			
				
		
		var data = store.get(sConfJason)
		
		if(data !== null && typeof data !== 'undefined')
		{
				//alert(JSON.stringify(data))
			var iBook = data.book; 
			var iChapter = data.chapter; 
			//var iScroll = data.scroll; 
			var sBible = data.bible; 
			var sWBible = data.wbible; 
			var bGLabel = data.glabel;
			
			var iWord = data.words; 			
			
			var iFBook = data.fbook; 
			var bFShowBible = data.fshowbible; 
			var iFChapter = data.fchapter; 
			var iFVerse = data.fverse; 
			
			var sFBible = data.fbible; 
			var sFWBible = data.fwbible; 
					
			var iWBook = data.wbook; 
			var iWChapter = data.wchapter; 
				
			var bRead = data.read;
			var bTip = data.tip;
			var bMsg = data.msg;
			var bBookmark = data.bookmark;
			var caHist = data.history; 
			var caWHist = data.whistory; 
			var sAudioBible = data.audioBible; 
			var sSearchBible = data.searchBible; 
			var bWcollapsed = data.wcollapsed;
			var bEcollapsed = data.ecollapsed;
			
			if(bWcollapsed)
				cMainLayout.getRegion('west').collapse(true);
			else
				cMainLayout.getRegion('west').expand(null, false);

			if(bEcollapsed)
				cMainLayout.getRegion('east').collapse(true);
			else
				cMainLayout.getRegion('east').expand(null, false);
									
			var iVerse = data.verse;
			var iScroll = data.scroll; 
			if(iVerse !== null && typeof iVerse !== 'undefined') iVerseIndex = iVerse;
			if(iScroll !== null && typeof iScroll !== 'undefined') iScrollPosition = iScroll;				
			
			if(iFBook !== null && typeof iFBook !== 'undefined') iFavBookIndex = iFBook;
			if(bFShowBible !== null && typeof bFShowBible !== 'undefined') 
			{	
				bFavShowBible = bFShowBible;
				bShowBible = bFavShowBible;			
			}
			if(iFChapter !== null && typeof iFChapter !== 'undefined') iFavChapterIndex = iFChapter;
			if(iFVerse !== null && typeof iFVerse !== 'undefined') iFavVerseIndex = iFVerse;
			

			if(iWBook !== null && typeof iWBook !== 'undefined') iWordsBookIndex = iWBook;
			if(iWChapter !== null && typeof iWChapter !== 'undefined') iWordsChapterIndex = iWChapter;
									
			if(sFBible !== null && typeof sFBible !== 'undefined')
			{
				//alert(sBible);
				sFavBibleType = sFBible;
				if(sFBible == "niv")
					cBibleMenuItem[0].setChecked(true);
				else if(sFBible == "esv")	
					cBibleMenuItem[1].setChecked(true);
				else if(sFBible == "kjv")	
					cBibleMenuItem[2].setChecked(true);
				else if(sFBible == "nkjv")	
					cBibleMenuItem[3].setChecked(true);
				else if(sFBible == "net")	
					cBibleMenuItem[4].setChecked(true);
				else if(sFBible == "ylt")	
					cBibleMenuItem[5].setChecked(true);
			}

			if(sFWBible !== null && typeof sFWBible !== 'undefined')
				sFavWordsBible = sFWBible;

			if(sWBible !== null && typeof sWBible !== 'undefined')
			{
				sWordsBible = sWBible;
				for(var i = 0; !bShowBible && i < cBibleMenuItem.length; i++)
				{				
					if(cBibleMenuItem[i].nameid == sWordsBible)
					{
						cBibleMenuItem[i].setChecked(true);
						break;
					}
				}								
			}							
			
			if(sAudioBible !== null && typeof sAudioBible !== 'undefined') 
			{
				sAudioBibleType = sAudioBible;	
				
				for(var i = 0; i < cAudioBibleMenuItem.length; i++)
				{				
					if(cAudioBibleMenuItem[i].nameid == sAudioBibleType)
					{
						cAudioBibleMenuItem[i].setChecked(true);
						break;
					}
				}
			}
						
			if(sBible !== null && typeof sBible !== 'undefined') 
			{
				sBibleType = sBible;	
				
				for(var i = 0; bShowBible && i < cBibleMenuItem.length; i++)
				{				
					if(cBibleMenuItem[i].nameid == sBibleType)
					{
						cBibleMenuItem[i].setChecked(true);
						break;
					}
				}				
			}					
			
			if(sSearchBible !== null && typeof sSearchBible !== 'undefined') 
			{
				sBibleSearchVersion = sSearchBible;	
				
				for(var i = 0; i < cSearchBibleMenuItem.length; i++)
				{				
					if(cSearchBibleMenuItem[i].nameid == sBibleSearchVersion)
					{
						cSearchBibleMenuItem[i].setChecked(true);
						break;
					}
				}				
			}					
			
			if(iWord !== null && typeof iWord !== 'undefined') iWords = iWord;
			if(iBook !== null && typeof iBook !== 'undefined') iBookIndex = iBook;
			if(iChapter !== null && typeof iChapter !== 'undefined') iChapterIndex = iChapter;
						
			/*
			if(sBible !== null && typeof sBible !== 'undefined')
			{
				//alert(sBible);
				sBibleType = sBible;
				if(sBible == "niv")
					cBibleMenuItem[0].setChecked(true);
				else if(sBible == "esv")	
					cBibleMenuItem[1].setChecked(true);
			}
			*/
			
			
			if(bTip !== null && typeof bTip !== 'undefined') 
			{
				bGlobalToolTip = bTip;
				cTooltipCheckItem.setChecked(bGlobalToolTip);  
			}
			
			if(bMsg !== null && typeof bMsg !== 'undefined') 
			{
				bMessageBoxOn = bMsg;
				cMessageCheckItem.setChecked(bMessageBoxOn);  				
			}
			
			
			if(bGLabel !== null && typeof bGLabel !== 'undefined') 
			{
				bGlobalLabel = bGLabel;
				cGLabelCheckItem.setChecked(bGlobalLabel);  
			}			
			
			if(bBookmark !== null && typeof bBookmark !== 'undefined') 
			{
				bBookmarkPanelOn = bBookmark;
				cBookmarkCheckItem.setChecked(bBookmarkPanelOn);  
				if(bBookmarkPanelOn)
				{
					cMainLayout.getRegion('south').show();
					setTimeout(function(){ cMainLayout.getRegion('south').expand(null, false); }, 300);		
					setTimeout(function(){ cMainLayout.getRegion('south').collapse(true); }, 500);						
				}
				else
				{
					cMainLayout.getRegion('south').expand(null, false);
					setTimeout(function(){ cMainLayout.getRegion('south').collapse(true); }, 300);		
					setTimeout(function(){ cMainLayout.getRegion('south').hide(); }, 500);					
				}
			}
			
			if(false && bRead !== null && typeof bRead !== 'undefined') 
			{
				bReadoutBible = bRead;
				//cReadOnButton.toggle(bReadoutBible);
				cReadOnCheckItem.setChecked(bReadoutBible);  
			}
			
			if(caHist !== null && typeof caHist !== 'undefined')
			{ 
				caHistory = caHist;				
			}			

			if(caWHist !== null && typeof caWHist !== 'undefined')
			{ 
				caWordsHistory = caWHist;				
			}											
			
			if(bShowBible)
			{
				iBookIndex = iFavBookIndex;			
				iChapterIndex = iFavChapterIndex;
			}
			else
			{
				cBibleOrWordsButton.toggle(false);
				iBookIndex = iWordsBookIndex;
				iChapterIndex = iWordsChapterIndex;							
			}
			
			bPrefRead = true;
		}
		
		var bFavBibleMode = (bShowBible && iBookIndex == iFavBookIndex);		
		if(bFavBibleMode)
			iVerseIndex = iFavVerseIndex;
								
			vLoadChapter(false,
				function() {
					bLoaded = true;
					//play 
					if(bReadoutBible && bFavBibleMode)
					{
					setTimeout(function(){
						vReadChapter(true);
						//document.getElementById('readChapter') .dispatchEvent(new MouseEvent('click', {shiftKey: false}))
						}, 6000);								
					}					
				});
		
		//});

	
}

function vOpenTab_old(cTabs, sFileName, sTabName, iTabIndex)
{	
	checkFileExists(sFileName);
	
	setTimeout(function()
	{
		if(bFileExists)		
		{
			Ext.get(sTabName).dom.src = sFileName;			
			iLastTabIndex = iTabIndex;
			if(typeof cTabs.getTab(iTabIndex) !== 'undefined')
				cTabs.getTab(iTabIndex).activate();
		}
		else
			cTabs.hideTab(sTabName);	
	  }, 500);
}      

function vOpenTab(cTabs, sFileName, sTabName, iTabIndex)
{	
	Ext.get(sTabName).dom.src = sFileName;			
	
	/*
	Ext.get(sTabName).dom.onkeyup = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 45)
        cSearchText.focus();
	};	
	
	var s = document.createElement('script');
    s.type = 'text/javascript';
    var code = 'alert("hello world!");';
    try {
      s.appendChild(document.createTextNode(code));
      Ext.get(sTabName).dom.body.appendChild(s);
    } catch (e) {
      s.text = code;
      Ext.get(sTabName).dom.body.appendChild(s);
    }
    */
    	
	iLastTabIndex = iTabIndex;
	if(typeof cTabs.getTab(iTabIndex) !== 'undefined')
		cTabs.getTab(iTabIndex).activate();
}      

function vUpdateNoteContent(sType, sURL, sInTitle)
{
	iLastTabIndex = -1;
	var iTabWidth = 85, iSmallTabWidth = 85;
	sTitle = "";
	var cTabs = cMainLayout.getRegion('east').getTabs();

	var ActiveTab = cTabs.getActiveTab();
	if(sType == "chapsum" || sType == "load")
	{
		//iLastOpenedTabIndex = -1;
		for(var i = 0; i < cTabs.getCount(); i++)
		{
			//if(i != 0 && i < 7 && cTabs.getTab(i) == ActiveTab)
			if(i != 0 && i < 7 && cTabs.getTab(i) == ActiveTab)
				iLastOpenedTabIndex = i;
		}
	}
		
	/*
	cTabs.hideTab('mainParallelEastCenter');
	cTabs.hideTab('mainCrossRefEastCenter');
	cTabs.hideTab('mainLexiconEastCenter');
	cTabs.hideTab('mainCommentaryEastCenter');
	cTabs.hideTab('mainTopicEastCenter');
	*/
	//alert(sType);
	//alert(sURL);
	
	//alert(sURL)
	if(sType == "load" || sType == "restore" || sType == "netnote")	
	{	
		cTabs.getTab(0).activate();
		//cTabs.getTab(1).hide();
		//cTabs.getTab(2).hide();
		if(sType == "restore")	
		{
			var sBookChapter = "" + (iBookIndex+1) + "/" + (iChapterIndex+1) + ".html";
			sFileName = "../bibles/net/notes/" + sBookChapter;
		}
		else
			sFileName = sURL;		
				
		
		if(sOldNoteFileName == sFileName)
			return;
		//cTabs.getTab(1).activate();
		//cTabs.getTab(0).setText("<b>Notes</b>");
		//cTabs.hideTab('mainParallelEastCenter');
		//cTabs.hideTab('mainCrossRefEastCenter');
		//cTabs.hideTab('mainLexiconEastCenter');

		sOldNoteFileName = sFileName;
		Ext.get('mainNotesEastCenter').dom.src = sFileName;				
		cTabs.getTab(0).setText("<img src=" + sImagePath + 'note.png' + "> " + "Notes");		
		cTabs.getTab(0).setWidth(iSmallTabWidth);		
	}
	else if(sType == "intro")	
	{
		//cTabs.getTab(0).setText("<b>Notes</b>");
		cTabs.unhideTab('mainParallelEastCenter');
		cTabs.unhideTab('mainCrossRefEastCenter');		
		cTabs.unhideTab('mainLexiconEastCenter');		
		cTabs.unhideTab('mainCommentaryEastCenter');		
		cTabs.hideTab('mainTopicEastCenter');
		cTabs.hideTab('mainKnowlegeEastCenter');
		
		//cTabs.hideTab('mainLexiconEastCenter');
		//ActiveTab.activate();		
		
		sFileName = "../notes/summary/bible_org/" + (iBookIndex+1) + ".html"; 
		sTabName = 'mainCommentaryEastCenter';
		vOpenTab(cTabs, sFileName, sTabName, 5);
		
		sFileName = "../notes/summary/biblica/" + (iBookIndex+1) + ".html"; 
		sTabName = 'mainLexiconEastCenter';
		vOpenTab(cTabs, sFileName, sTabName, 4);

		sFileName = "../notes/summary/esv/" + (iBookIndex+1) + ".html"; 
		sTabName = 'mainCrossRefEastCenter';
		vOpenTab(cTabs, sFileName, sTabName, 3);
								
		sFileName = "../notes/summary/biblestudy/" + (iBookIndex+1) + ".html"; 
		sTabName = 'mainParallelEastCenter';
		vOpenTab(cTabs, sFileName, sTabName, 2);

		//sFileName = sURL + "summary.html";
		
		cTabs.getTab(2).setText("<img src=" + sImagePath + 'text-file.png' + "> " + "<b>Intro</b>");
		cTabs.getTab(3).setText("<img src=" + sImagePath + 'qa2.png' + "> " + "<b>Sum-bibca</b>");
		cTabs.getTab(4).setText("<img src=" + sImagePath + 'document.png' + "> " + "<b>Sum-bib</b>");
		cTabs.getTab(5).setText("<img src=" + sImagePath + 'report.png' + "> " + "<b>Sum-esv</b>");
		
		cTabs.getTab(3).setWidth(iSmallTabWidth);		
		cTabs.getTab(2).setWidth(iSmallTabWidth);				
		cTabs.getTab(4).setWidth(iSmallTabWidth);				
		cTabs.getTab(5).setWidth(iSmallTabWidth);		
		if(sLastOpenedType == sType && iLastOpenedTabIndex != -1)
			cTabs.getTab(iLastOpenedTabIndex).activate();
				
		//cTabs.getTab(1).activate();		
		//cTabs.getTab(0).setText(sSearchValue);
		//cTabs.getTab(0).show();				
	}
	else if(sType == "notes")	
	{
		//cTabs.getTab(0).setText("<b>Notes</b>");
		cTabs.unhideTab('mainParallelEastCenter');
		cTabs.unhideTab('mainCrossRefEastCenter');
		cTabs.unhideTab('mainLexiconEastCenter');
		cTabs.unhideTab('mainCommentaryEastCenter');
		cTabs.unhideTab('mainTopicEastCenter');
		cTabs.unhideTab('mainKnowlegeEastCenter');
		
		//cTabs.unhideTab(tab.id);

		//cTabs.getTab(1).show();
		//cTabs.getTab(2).show();
		//ActiveTab.activate();		
		//cTabs.getTab(0).activate();		
		
		//sFileName = "../notes/notes/" + sURL;
		//sOldNoteFileName = sFileName;
		//Ext.get('mainNotesEastCenter').dom.src = sFileName;
		
		sFileName = "../notes/lexicon/" + sURL;
		sTabName = 'mainLexiconEastCenter';
		vOpenTab(cTabs, sFileName, sTabName, 4);
		
		
		sFileName = "../notes/knowledge/" + sURL;
		sTabName = "mainKnowlegeEastCenter";
		vOpenTab(cTabs, sFileName, sTabName, 7);
		
		sFileName = "../notes/topics/" + sURL;
		sTabName = "mainTopicEastCenter";
		vOpenTab(cTabs, sFileName, sTabName, 6);

		sFileName = "../notes/commentaries/" + sURL;
		sTabName = 'mainCommentaryEastCenter';
		vOpenTab(cTabs, sFileName, sTabName, 5);
		
		sFileName = "../notes/crossref/" + sURL;
		sTabName = 'mainCrossRefEastCenter';
		vOpenTab(cTabs, sFileName, sTabName, 3);
		
		sFileName = "../notes/parallel/" + sURL;
		sTabName = 'mainParallelEastCenter';
		vOpenTab(cTabs, sFileName, sTabName, 2);
		
		
		cTabs.getTab(2).setText("<img src=" + sImagePath + 'parallel.png' + "> " + "<b>Parallel</b>");
		cTabs.getTab(3).setText("<img src=" + sImagePath + 'refer.png' + "> " + "<b>Cross Ref.</b>");
		cTabs.getTab(4).setText("<img src=" + sImagePath + '3d-dictionary.png' + "> " + "<b>Lexicon</b>");
		cTabs.getTab(5).setText("<img src=" + sImagePath + 'comment.png' + "> " + "<b>Comment</b>");
		cTabs.getTab(6).setText("<img src=" + sImagePath + 'hash.png' + "> " + "<b>Topic</b>");
		cTabs.getTab(7).setText("<img src=" + sImagePath + 'neuron.png' + "> " + "<b>Knowledge</b>");
		
		cTabs.getTab(7).setWidth(iSmallTabWidth);
		cTabs.getTab(6).setWidth(iSmallTabWidth);
		cTabs.getTab(5).setWidth(iSmallTabWidth);
		cTabs.getTab(4).setWidth(iSmallTabWidth);		
		cTabs.getTab(3).setWidth(iSmallTabWidth);		
		cTabs.getTab(2).setWidth(iSmallTabWidth);	
		if(sLastOpenedType == sType && iLastOpenedTabIndex != -1)
			cTabs.getTab(iLastOpenedTabIndex).activate();
			
		//ActiveTab.activate();		
		//cTabs.getTab(0).setText(sSearchValue);
		//cTabs.getTab(0).show();								
	}
	else if(sType == "dictionary")	
	{
		//cTabs.getTab(1).activate();
		//cTabs.unhideTab('mainParallelEastCenter');
		//cTabs.hideTab('mainParallelEastCenter');
		//cTabs.hideTab('mainCrossRefEastCenter');
		//cTabs.hideTab('mainLexiconEastCenter');
		cTabs.unhideTab('mainSearchEastCenter');
		//cTabs.getTab(1).hide();
		//cTabs.getTab(2).hide();
		sFileName = sURL;
		Ext.get('mainSearchEastCenter').dom.src = sFileName;		
		
		//alert(sInTitle)
		var iTabIndex = 8;
		cTabs.getTab(iTabIndex).setText(sInTitle);
		cTabs.getTab(iTabIndex).setWidth(iTabWidth);		
		cTabs.getTab(iTabIndex).activate();
	}
	else if(sType == "chapsum")	
	{
		sFileName = sURL;
		//alert(sType + " : " + sInTitle + " - " + sFileName);
		//cTabs.getTab(1).activate();
		//cTabs.unhideTab('mainParallelEastCenter');
		//cTabs.hideTab('mainParallelEastCenter');
		//cTabs.hideTab('mainCrossRefEastCenter');
		//cTabs.hideTab('mainLexiconEastCenter');
		cTabs.unhideTab('mainNoteEastCenter');
		//cTabs.getTab(1).hide();
		//cTabs.getTab(2).hide();
		
		sFileName = sURL;
		sTabName = "mainNoteEastCenter";
		var iTabIndex = 1;
		vOpenTab(cTabs, sFileName, sTabName, iTabIndex);
		
		cTabs.getTab(iTabIndex).setText(sInTitle);
		cTabs.getTab(iTabIndex).setWidth(iTabWidth);	
		if(sLastOpenedType != "" && iLastOpenedTabIndex != -1)
			cTabs.getTab(iLastOpenedTabIndex).activate();
		else
			cTabs.getTab(0).activate();				
	}
	else if(sType == "strong")	
	{
		sFileName = sURL;
		//alert(sType + " : " + sInTitle + " - " + sFileName);
		//cTabs.getTab(1).activate();
		//cTabs.unhideTab('mainParallelEastCenter');
		//cTabs.hideTab('mainParallelEastCenter');
		//cTabs.hideTab('mainCrossRefEastCenter');
		//cTabs.hideTab('mainLexiconEastCenter');
		cTabs.unhideTab('mainStrongEastCenter');
		//cTabs.getTab(1).hide();
		//cTabs.getTab(2).hide();
		
		sFileName = sURL;
		sTabName = "mainStrongEastCenter";
		var iTabIndex = 10;
		vOpenTab(cTabs, sFileName, sTabName, iTabIndex);
		
		cTabs.getTab(iTabIndex).setText(sInTitle);
		cTabs.getTab(iTabIndex).setWidth(iTabWidth);		
		//cTabs.getTab(iTabIndex).activate();				
	}
	else
	{
		//cTabs.getTab(1).activate();
		//cTabs.unhideTab('mainParallelEastCenter');
		//cTabs.hideTab('mainParallelEastCenter');
		//cTabs.hideTab('mainCrossRefEastCenter');
		//cTabs.hideTab('mainLexiconEastCenter');
		cTabs.unhideTab('mainOtherEastCenter');
		//cTabs.getTab(1).hide();
		//cTabs.getTab(2).hide();
		sFileName = sURL;
		//Ext.get('mainOtherEastCenter').dom.src = sFileName;		
		
		var iTabIndex = 9;
		
		sTabName = "mainOtherEastCenter";
		vOpenTab(cTabs, sFileName, sTabName, iTabIndex);
		
		cTabs.getTab(iTabIndex).setText(sInTitle);
		cTabs.getTab(iTabIndex).setWidth(iTabWidth);		
		//cTabs.getTab(iTabIndex).activate();
		
	}
	//if(sURL.indexOf("dictionary.com") != -1)
	//	Ext.get('mainEastCenter').dom.style = 'border: 0px none; margin-left: -15px; height: 960px; margin-top: -10px; width: 726px;';
		//Ext.get('mainEastCenter').dom.style += ' BODY {border: 0px none; margin-left: -10px; height: 960px; margin-top: -5px; width: 726px;} aside {display: none !important;} footer {display: none !important;} header {display: none !important;} .no-collapse {display: none !important;} a[href^="https://www.thesaurus.com/browse"] {display: none !important;}';

	//if(!sInTitle)
	//	cEastInnerLayoutPanel.setTitle("<b>Note</b>" + sTitle );
	//else
	//	cEastInnerLayoutPanel.setTitle(sInTitle);
	if(sType != "chapsum" && sType != "load")
		sLastOpenedType = sType;
}

function vClose()
{	
	//if(bPauseSettingUpdate || !bPrefRead)
	if(bPauseSettingUpdate)
		return;
			
	if(bShowBible && iBookIndex == iFavBookIndex && Math.abs(iChapterIndex-iFavChapterIndex) < 2)
	{
		iFavChapterIndex = iChapterIndex;
		iFavVerseIndex = iVerseIndex;
	}
	
	//alert("bible:" + sBibleType)
	//{"book":22,"chapter":10,"scroll":3,"read":false,"history":[[22,10],[0,0],[18,2]],"bible":"niv"}
	var sValue = "<html><body><div id='cookies'>" + iBookIndex + "," + iChapterIndex + "," + iScrollPosition + "</div></body></html>";
	//alert(JSON.stringify(caHistory))

	
	var sData = '{"book":' + iBookIndex + ',"chapter":' + iChapterIndex + ',"verse":' + iVerseIndex + ',"scroll":' + iScrollPosition + ', "bible":"' + sBibleType + '", "wbible":"' + sWordsBibleType + '"';
	sData += ', "fbook":' + iFavBookIndex + ',"fchapter":' + iFavChapterIndex + ',"fverse":' + iFavVerseIndex + ', "fbible":"' + sFavBibleType + '", "fwbible":"' + sFavWordsBibleType + '"';
	sData += ', "fshowbible":' + bFavShowBible;	
	sData += ', "wcollapsed":' + cMainLayout.getRegion('west').collapsed;
	sData += ', "ecollapsed":' + cMainLayout.getRegion('East').collapsed;
	sData += ', "glabel":' + bGlobalLabel;
	sData += ', "wbook":' + iWordsBookIndex + ',"wchapter":' + iWordsChapterIndex;
	sData += ', "words":' + iWords + ', "tip":' + bGlobalToolTip + ', "msg":' + bMessageBoxOn + ', "bookmark":' + bBookmarkPanelOn + ', "read":' + bReadoutBible + ', "history":' + JSON.stringify(caHistory);
	sData += ', "whistory":' + JSON.stringify(caWordsHistory) ;
	sData += ', "audioBible":"' + sAudioBibleType + '" ';
	sData += ', "searchBible":"' + sBibleSearchVersion + '" ';
	sData += ' }';
		
	store.set(sConfJason, JSON.parse(sData));
	
	/*		
	//alert(sData);
	//var sData = '{"book":' + iBookIndex + ',"chapter":' + iChapterIndex + ',"scroll":' + iScrollPosition + ', "read":' + bReadoutBible + ', "history":' + JSON.stringify(caHistory) + ', "bible":"niv"}';
	//alert(sData)
	//sData = '{"book":18,"chapter":2,"scroll":3, "read":false, "history":[[18,2]]}';
	$.ajax({
	    url:sConfJason,
	    type:"PUT",
	    data:sData,
	    contentType:"application/json; charset=utf-8",
	    dataType:"json",
	    success: function(data, textStatus, jqXHR)
	    {
		    //alert(JSON.stringify(data))
	    }
	});     
	
	//var blob = new Blob([sValue], {type: "text/plain;charset=utf-8"});
	//saveAs(blob, "cookies.html");
	*/	
}

function vOpenDictionary(text, bForced)
{
	if(text.length == 0 || text.length > 50)
		return;
		
	if(!bDictionaryLoaded)
	{
		loadJS('../main/dic.js', function(){bDictionaryLoaded = true; 		setTimeout(function()
		{
			vLookUpDictionary(text, bForced);
		}, 2000);		
 		}, document.body);				 	
	}
	else
		vLookUpDictionary(text, bForced);	
}


function vOpenDicDotCom(text)
{
		bComment = true;		
		//sTitle = "<b>Dictionary</b> - " + text;
		sTitle = "<img src=" + sImagePath + 'book2.png' + "> " + text;
		url = "http://www.dictionary.com/browse/" + text + "#initial-load-content";
		vUpdateNoteContent("dictionary", url, sTitle);			 			            	
}

function vLookUpDictionary(text, bForced)
{
	while(!dictionary)
	{
		setTimeout(function(){}, 500);										
	}
	
	text = text.toLowerCase().trim();
	//alert(text);
	csText = text.split(" ");
	var iTextCount = csText.length
	var iSize = dictionary.length
	var saResult = [];
	for(var i = 0; i < iSize; i++)
	{
		sDic = dictionary[i]
		if(//text.indexOf(sDic) != -1 ||
			 sDic.indexOf(text) != -1
			|| (iTextCount > 1 && (sDic.indexOf(csText[0]) != -1 || sDic.indexOf(csText[1]) != -1))
			|| (iTextCount > 2 && (sDic.indexOf(csText[0]) != -1 || sDic.indexOf(csText[1]) != -1 || sDic.indexOf(csText[2]) != -1))
			)	
		{
			if(sDic == text)
				saResult.unshift(sDic);
			else
				saResult.push(sDic);
		}
	}
	
	//if(saResult.length == 0)
	//	return;	
	
	if(saResult.length == 0)			
		vOpenDicDotCom(text);
	/*
	else if(saResult.length == 1)	
	{
		bComment = true;		
	 	url = "../notes/dictionary/" + saResult[0] + ".html";
	 	sTitle = "<b>Concordance</b> - " + saResult[0];
	 	vUpdateNoteContent("vocabulary", url, sTitle);			 	
	}
	*/
	else if(bForced || bMessageBoxOn)	
	{
		sMsg = '<select id="dic_select">';
		for(var i = 0; i < saResult.length; i++)
		{
			sMsg += '<option style={margin:0;padding:0;} value="' + i + '">' + saResult[i].trim() + '</option>'
		}
		sMsg += '</select>'
		if(saResult.length == 1)
			sMsgTitle = 'Choose the concordance/dictionary term';
		else		
			sMsgTitle = 'Choose the concordance/dictionary term (' + saResult.length + ')';
		Ext.MessageBox.show({
		    title: sMsgTitle,
		    msg: sMsg,
		    buttons: Ext.MessageBox.YESNOCANCEL,
		    fn: function (btn) {
		        if (btn == 'yes') 
		        {
			        var iIndex = Number(Ext.get('dic_select').getValue());
					bComment = true;		
				 	url = "../notes/dictionary/" + saResult[iIndex] + ".html";
				 	//sTitle = "<b>Concordance</b> - " + saResult[iIndex];
				 	sTitle = "<img src=" + sImagePath + 'word.png' + "> " + saResult[iIndex];
				 	vUpdateNoteContent("vocabulary", url, sTitle);			 			            
		        }
		        else if (btn == 'no') 
		        {
					bComment = true;		
					sTitle = "<img src=" + sImagePath + 'word.png' + "> " + text;
					url = "http://www.dictionary.com/browse/" + text + "#initial-load-content";
					vUpdateNoteContent("dictionary", url, sTitle);			 			            			        
		        }
		    }
		});				
	}
}

var loadJS = function(url, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    while(scriptTag === null || typeof scriptTag === 'undefined')
    {
		;    
    }
    
    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};

/*
window.onbeforeunload = function()
{
  //alert(iScrollPosition)	
  vClose();
  return null;
}
*/

function copyStringToClipboard1 (str) {
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   el.value = str;
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.focus();
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);
}

function copyStringToClipboard(html) {
  // Create container for the HTML
  // [1]
  var container = document.createElement('div')
  container.innerHTML = html

  // Hide element
  // [2]
  container.style.position = 'fixed'
  container.style.pointerEvents = 'none'
  container.style.opacity = 0

  // Detect all style sheets of the page
  var activeSheets = Array.prototype.slice.call(document.styleSheets)
    .filter(function (sheet) {
      return !sheet.disabled
    })

  // Mount the container to the DOM to make `contentWindow` available
  // [3]
  document.body.appendChild(container)

  // Copy to clipboard
  // [4]
  window.getSelection().removeAllRanges()

  var range = document.createRange()
  range.selectNode(container)
  window.getSelection().addRange(range)

  // [5.1]
  document.execCommand('copy')

  // [5.2]
  for (var i = 0; i < activeSheets.length; i++) activeSheets[i].disabled = true

  // [5.3]
  document.execCommand('copy')

  // [5.4]
  for (var i = 0; i < activeSheets.length; i++) activeSheets[i].disabled = false

  // Remove the container
  // [6]
  document.body.removeChild(container)
}

    function getHTMLOfSelection() {
      var range;
      if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        return range.htmlText;
      }
      else if (window.getSelection) {
        var selection = window.getSelection();
        if (selection.rangeCount > 0) {
          range = selection.getRangeAt(0);
          var clonedSelection = range.cloneContents();
          var div = document.createElement('div');
          div.appendChild(clonedSelection);
          return div.innerHTML;
        }
        else {
          return '';
        }
      }
      else {
        return '';
      }
    }

function get_error(x) { bFileExists = false; }
    
function checkFileExists(sURL) 
{    
	bFileExists = true;
    //url="file://" + sURL;
    url=sURL;
    url+="?"+new Date().getTime()+Math.floor(Math.random()*1000000);
    var el=document.createElement('script');
    el.id="123";
    el.onerror=function(){if(el.onerror)get_error(this.id)}
    el.src=url;
    document.body.appendChild(el);
}
        
function decode(str) 
{
	//alert(str);
	if(str && str.replace)
			return str.replace(/&#(\d+);/g, function(match, dec) {
				return String.fromCharCode(dec);
			});
	else
		return str;
}
		    
function vUpload()
{
		loadJS('../main/Bookmarks.js', function(){setTimeout(function()
		{
			//alert(cBookmarks);
			if(cBookmarks !== null && typeof cBookmarks !== 'undefined')
			{
				store.set(sBookmarkJason, cBookmarks);
			}	
		}, 1000);		
 		}, document.body);				 	
	
		loadJS('../main/Settings.js', function(){setTimeout(function()
		{
			//alert(cSettings);
			if(cSettings !== null && typeof cSettings !== 'undefined')
			{
				store.set(sConfJason, cSettings);
			}	
		}, 1000);		
 		}, document.body);				 	
}

/*
window.addEventListener("beforeunload", function (e) {  
	vClose();
  (e || window.event).returnValue = null;
  return null;
});
*/

function strip(html)
{
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}



// Create IE + others compatible event handler
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(event) 
{
	obj = event.data
	//alert(obj)
	if(obj !== undefined && obj !== null && typeof obj == 'string')
  	{
	  	/*
	  	if(obj.startsWith("scroll:"))	
	  	{
		  	//console.log('parent received message!:  ',e.data);
		  	if(bShowBible && iFavBookIndex == iBookIndex)
		  	{
			  	position = Number(obj.split(":")[1]);
			  	//alert(position)
	  			iScrollPosition = position;

	  			vClose();
	  			
			}
		}
	  	else 
	  	*/
	  	if(obj == "key:insert")	
	  	{
			cSearchText.focus();		  	
	  	}
	  	else if(obj.startsWith("search:"))	
	  	{
			 //var text = obj.split(":")[1];
			 var iIndex = obj.indexOf(":");
			 
			 text = obj.substring(iIndex+1);
			 cSearchText.setValue(text);
      		vSearchBible(text);      			 
		}
	  	else if(obj.startsWith("verse:"))	
	  	{
			 var text = obj.split(":")[1];			 
			 if(isInteger(text))
			 {
				bComment = true; 
			 	iVerseIndex = Number(text);     
				var sVerse = "";
				if(iVerseIndex > 1)
					sVerse = " (" + iVerseIndex + ")";
			 	
			 	cCenterPanel.setTitle("<b>NET</b> - <font size=4><b>" + saBookName[iBookIndex] + " " + (iChapterIndex+1)+ "</b> " + sVerse + "</font>" );			 	
			 	//url = "../notes/notes/" + (iBookIndex+1) + "/" + (iChapterIndex+1) + "/" + iVerseIndex + ".html";
			 	vLoadChapter(true);	
			 	vClose();
			 	
			 	url = "" + (iBookIndex+1) + "/" + (iChapterIndex+1) + "/" + iVerseIndex + ".html";
			 	sTitle = "<img src=" + sImagePath + 'note.png' + "> " +  saBookName[iBookIndex] + " " + (iChapterIndex+1)+ ":" + iVerseIndex;
			 	vUpdateNoteContent("notes", url, sTitle);
		 	}
			 //alert(iVerseIndex) 		
		}		
	  	else if(obj.startsWith("verse|"))	
	  	{
			 var text = obj.split("|")[1];
		  	//alert(text)
			 		  	
			 bComment = true;	
		 	//alert(text);	
			 //if(text.length < 30)
			 {
				 if(!bShowBible)
				 {
				 	if(!bShowBible && sOldMarkText == text)
				 		return;
				 	
					sOldMarkText = text;
					//text = text.replace("&nbsp;", " ").trim();
					//text = text.replace(/<[^>]*>?/gm, '');
					text = strip(text);					
					text = text.replace(/ *\([^)]*\) */g, "").trim();
				 	//if((iIndex = text.indexOf("(")) != -1)	
				 	//	text = text.substring(0, iIndex).trim();
				 	//if((iIndex = text.indexOf("<")) != -1)	
				 	//	text = text.substring(0, iIndex).trim();
		 			//alert(text);	
		 			if(text.length < 30)
		 			{
		 				cSearchText.setValue(text);
				 		bOpenVerse(text);
			 		}
				}
			}
			return;
		}		
	  	else if(obj.startsWith("mark:") && bMessageBoxOn)	
	  	{
			cMainLayout.getRegion('south').show();					
	  	
			 var text = obj.split(":")[1];
			 if(text.length < 2)
			 	return;
		  	//alert(text)
			 		  	
			 var htmlText = decode(text.split("|")[1]);	
			 
			 htmlText = "<font face='Verdana, Arial, Helvetica' size=3> <font size=4><b>" + saBookName[iBookIndex] + " " + (iChapterIndex+1)+ "</b></font><br>" + htmlText + "</font>";
			 htmlText = htmlText.replace(/<SUP>[^<]+?<\/SUP>/ig,'');
			 htmlText = htmlText.replace(/<p class="paragraphtitle">[^<]+?<\/p>/ig,' ');
			 
			 htmlText = replaceAll(htmlText, 'class="versenum"', 'style="font-weight:bold;font-style:italic;vertical-align:super;"')
			 htmlText = htmlText.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
			 htmlText = htmlText.replace(/(<sc[^>]+?>|<sc>|<\/sc>)/img, "");
			 
			 //alert(htmlText)
			 
			 text = text.split("|")[0];	
			 bComment = true;	
			 if(text.length < 30)
			 {				
				//vLookUpDictionary(text);
				cSearchText.setValue(text);
				//vOpenDictionary(text);					 
				vSearchBible(text);
				return;
			 }
			
	   		var cDlg = Ext.MessageBox.show(
	        {
	            title: 'Choose the summary of bookmark',
	            value: "",
	            msg: "What is the summary of the passage to be bookmarked?", 
	            prompt: true,
	            buttons: Ext.MessageBox.OKCANCEL,
	            fn: function(msgbtn, type)
	            {
	              if (msgbtn == 'ok')
	              {	              
		              	var data = store.get(sBookmarkJason);
						//var a = $.get(sBookmarkJason, function(data, textStatus, jqXHR) {			
							var iMarkCount = 0;
							var cMarkContent = {};
							var iCount = data.count; 
							var cContent = data.content; 
									
							if(iCount !== null && typeof iCount !== 'undefined') iMarkCount = iCount;		
							if(cContent !== null && typeof cContent !== 'undefined') cMarkContent = cContent;		
							
							//alert(iMarkCount);
							
							iMarkCount++;
							cMarkContent[iMarkCount] = {"index": "[" + iMarkCount + "] " + type, "text": text, "type": type, "bookName": saBookName[iBookIndex], "book": iBookIndex, "chapter": iChapterIndex}
						
							sData = '{"count":' + iMarkCount + ', "content":' + JSON.stringify(cMarkContent) + '}';
							store.set(sBookmarkJason, JSON.parse(sData));
							vUpdateBookmark();
							//alert(sData)
							/*
							$.ajax({
							    url:sBookmarkJason,
							    type:"PUT",
							    data:sData,
							    contentType:"application/json; charset=utf-8",
							    dataType:"json",
							    success: function(data, textStatus, jqXHR)
							    {
								    //alert(JSON.stringify(data))
								    vUpdateBookmark();
							    }
							});//set     												         								
							*/
						//});//get
		              
	              }
	              else
	              {
		             
					copyStringToClipboard(htmlText);
	              }
	     		}
	        });             		  			 						 
      		
		}
		else if(obj == "note:restore")	
	  	{
		  	if(bComment)
		  	{
			  	bComment = false;
			  	return;
		  	}
		  	vUpdateNoteContent("restore");
	  	}
		else if(obj.startsWith("note:") || obj.startsWith("netnote:"))	
	  	{
		  	bComment = true;
		  	saObj = obj.split(":");
		  	url = saObj[1];
		  	sMode = saObj[0];		  	
		  	if(sMode == "note")
		  	{
			  	sMode = "strong";
		  		sTitle = "<img src=" + sImagePath + 'numbered-list.png' + "> " + "<b>Strongs</b>";
	  		}
		  	else
		  		sTitle = "<b>NET Note</b>";
		  		
		  	vUpdateNoteContent(sMode, url, sTitle);
	  	}

	}

	
		  
},false);


