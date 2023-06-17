let query = { active: true, currentWindow: true };


chrome.tabs.query(query, gotTabs);
function gotTabs(tabs) {
  let msg = {
    txt: "hello from popup",
  };

  chrome.tabs.sendMessage(tabs[0].id, msg, function (response) {
    if (!response) 
    {
      let title = "ADDICT";
      let head = "How to use :";
      let subhead = "- Enable extension";
      let subhead1 = "- Hover over any word and select it";
      let subhead2 = "- Click extension to see the definition";
      let foot = "Creator : loop.gg"
      document.getElementById("title").innerHTML= title;
      document.getElementById("head").innerHTML= head;
      document.getElementById("subhead").innerHTML= subhead;
      document.getElementById("foot").innerHTML= foot;
      document.getElementById("subhead1").innerHTML= subhead1;
      document.getElementById("subhead2").innerHTML= subhead2;
    } 
    else if (response.swor === "_TextNotSelected_") 
    {
      let title = "ADDICT";
      let head = "How to use :";
      let subhead = "Enable extension";
      let subhead1 = "Hover over any word and select it";
      let subhead2 = "Click the extension to see the definition";
      let foot = "Creator : loop.gg"
      document.getElementById("title").innerHTML= title;
      document.getElementById("head").innerHTML= head;
      document.getElementById("subhead").innerHTML= subhead;
      document.getElementById("foot").innerHTML= foot;
      document.getElementById("subhead1").innerHTML= subhead1;
      document.getElementById("subhead2").innerHTML= subhead2;
    } 
    else 
    {
      let swo = response.swor;
      swo = swo.replace(/[^a-zA-Z ]/g, "");
      dictionary(swo);
    }
  });
}

function dictionary(val)
{

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`)
    .then(response => response.json())
    .then(data => {

      let word = data[0].word;
      let phonetic = data[0].phonetic;
      let POS = data[0].meanings[0].partOfSpeech;
      let definition = data[0].meanings[0].definitions[0].definition;
      let example1 = data[0].meanings[0].definitions[1].example;
      let example2 = data[0].meanings[0].definitions[0].example;
      let def= "Definition:";
      let ex = "Example:";

      document.getElementById("word").innerHTML = word;
      document.getElementById("phonetic").innerHTML = phonetic;
      document.getElementById("pos").innerHTML = POS;
      document.getElementById("definition").innerHTML = definition;
      document.getElementById("ex1").innerHTML = example1;
      document.getElementById("ex2").innerHTML = example2;
      document.getElementById("def").innerHTML = def;
      document.getElementById("ex").innerHTML = ex;


  })
  .catch(error => console.error(error));
}