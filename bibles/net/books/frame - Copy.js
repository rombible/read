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

var bTootip = true;
var selText = ""
var iframetooltip = null;


function vOpenNote(i,j,k)
{
	if(iframetooltip.Hide)
		iframetooltip.Hide(event);		
	sURL = '../bibles/net/notes/' + i + '/' + j + '.html#' + k; 
	parent.postMessage('netnote:' + sURL, '*'); 
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
    
function textSelected(e) 
{ 
	var text = (document.all) ? document.selection.createRange().text : document.getSelection(); 
	text = "" + text
	if(selText == text)
		return
	selText = text;
	text = text.replace(/[^\x00-\x7F]/g, "");
	text = text.replace(new RegExp(":", 'g'), ";");
	text = text.replace(new RegExp("'", 'g'), "`");
	text = text.replace(new RegExp('"', 'g'), "`");

	text += "|" + getHTMLOfSelection();
	parent.postMessage('mark:' + text, '*');
} 

var on = 0;
function vOpenTooltip(event, i, j, k)
{
	if(!bTootip)
		return;
	if(on==0)
		on = new Date().getTime() / 1000;		
		
	iframetooltip.Show(event,'../../notes/' + i + '/' + j + '/' + k + '.html');	
	
	
}

function vCloseTooltip(event, i, j, k)
{
	if(!bTootip)
		return;
	now = new Date().getTime() / 1000;		
	if(now-on > 0.04)
	{
		iframetooltip.Hide(event);		
		on = 0;
	}
}

function vRoadJQuery()
{
	
		$(document).click(function(e)
		{
			if(iframetooltip.Hide)
				iframetooltip.Hide(event);		
				
			parent.postMessage('note:restore', '*'); }); 

		window.addEventListener('message', 
			function(event)
			{ 
				obj = event.data; 
				if(obj !== undefined && obj !== null && typeof obj == 'string')
				{ 
					//alert(obj);
					if(obj.startsWith('scroll:'))
					{
						position = Number(obj.split(':')[1]); 
						//window.scrollTo(0, position);
					}
					if(obj.startsWith('notip:'))
					{
						bTootip = false;
						//window.scrollTo(0, position);
					}					
					else if(obj.startsWith('unselect'))
					{
						if (window.getSelection) {window.getSelection().removeAllRanges();}
						else if (document.selection) {document.selection.empty();}				
					}
					else if(obj.startsWith('goto:'))
					{
						window.location.hash = obj.split(':')[1] + ":" + obj.split(':')[2];
						/*
						position = "a[name='" + obj.split(':')[1] + ":" + obj.split(':')[2] + "']"; 				
						alert(position);
						$(position).scrollTo(100);
						*/
					}
				}
			});  
			
		document.onmouseup = textSelected; 
		if (!document.all) document.captureEvents(Event.MOUSEUP);
		
		$(document).ready(function() {
		    $('.versenum').click(function(e) {  
		      parent.postMessage('verse:' + $(this).text(), '*');
		    });
		});	
	
	}

var sBaseDir = "../../../../"
//var sBaseDir = "./"
loadJS(sBaseDir + 'lib/jquery-3.3.1.min.js', function()
	{
		vRoadJQuery();
	}
	, document.body);				 	
	
loadJS(sBaseDir + 'lib/IfrmTooltip.js', function()
{		
	iframetooltip = new ToolTip('iframetooltip',false);	
}, document.body);				 	





