// content.js
window.addEventListener('mouseup',SelectedText);

var Word_Selected;

function SelectedText()
{
    Word_Selected = window.getSelection().toString().replace(/\s/g, "");
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    
    let msg =
        Word_Selected.length > 0
        ? Word_Selected
        : "_TextNotSelected_";
    sendResponse({swor:msg});
}
