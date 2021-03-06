var compContainers = document.querySelectorAll('.componentSection__componentContainer');
var compHTML, compMarkupDisplay;
var pre, code; 
for(var i = 0; i < compContainers.length; i++){
	compHTML = compContainers[i].querySelector('.componentContainer__display');


	compMarkupDisplay = compContainers[i].querySelector('.componentContainer__markup');
	if(compMarkupDisplay === null) continue;
	pre = document.createElement('pre');
	code = document.createElement('code');
	markupToggleLabel = document.createElement('label');
	
	markupSwitch = document.createElement('input');
	markupSwitch.type ="checkbox";
	markupSwitch.id ="markupSwitch" + i;
	markupSwitch.className = "componentSection_markupSwitch";

	markupToggleLabel.setAttribute('for', markupSwitch.id);
	markupToggleLabel.className ="button--primary";
	markupToggleLabel.textContent = "Toggle HTML Markup";

	compMarkupDisplay.parentNode.insertBefore(markupToggleLabel, compMarkupDisplay);
	compMarkupDisplay.parentNode.insertBefore(markupSwitch, compMarkupDisplay);


	compCode = compHTML.innerHTML;
	compCode = compCode.split('\n');
	leadingSpace = compCode[1].match(/\s+/)[0].length;
	compCode = compCode.map(s => s.substring(leadingSpace)).join("\n");
	code.innerText = compCode;
	pre.appendChild(code);
	compMarkupDisplay.appendChild(pre);
}
