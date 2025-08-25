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
/*
//var sBaseDir = "../../../../"
var sBaseDir = "./"

loadJS(sBaseDir + 'lib/jquery-3.3.1.min.js', function()
	{
		vRoadJQuery();
	}
	, document.body);				 	
*/	
var selText = ""
	
function textSelected(e) 
{ 
	var text = (document.all) ? document.selection.createRange().text : document.getSelection(); 
	text = "" + text
	if(text.length < 10 || selText == text || text.length > 40)
		return
	selText = text;
	text = text.replace(/[^\x00-\x7F]/g, "");
	text = text.replace(new RegExp(":", 'g'), ";");
	text = text.replace(new RegExp("'", 'g'), "`");
	text = text.replace(new RegExp('"', 'g'), "`");

	parent.postMessage('mark:' + text, '*');
} 

window.onload = function(e)
{ 
	var markup = document.body.outerHTML;
	
	var iStartIndex = markup.indexOf("</em>");
	var iEndIndex = markup.indexOf("</p>", iStartIndex);
	//alert(iStartIndex + "," + iEndIndex)
	if(iStartIndex != -1 && iEndIndex != -1)
	{
		
		markup = markup.substring(iStartIndex+5, iEndIndex).trim();
		
		//markup = markup.replace("&nbsp;", " ");
		markup = markup.trim();
		//alert(markup);
		parent.postMessage('verse|' + markup, '*');
		//var markup = document.documentElement.innerHTML;
		
	}
}
document.onmouseup = textSelected; 
if (!document.all) document.captureEvents(Event.MOUSEUP); 