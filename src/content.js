console.log("jiandingdaole");


window.onload = function () {
  const elem = document.querySelector('#prompt-textarea');
  // console.log(elem);

  if (elem) {
    elem.addEventListener('input', function (event) {

      let newprompt = document.querySelector('#newPrompt');
      console.log(newprompt);
      // let selectedText = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
      let inputValue = event.target.value;
      newprompt.value = inputValue;
    });
    // elem.addEventListener('input', function (event) {
    //   let inputValue = event.target.value;
    // if (inputValue.slice(-2) === '//') {
    // chrome.runtime.sendMessage({message: inputValue,openPopup: true}, () => { if (chrome.runtime.lastError) console.error(chrome.runtime.lastError); else  console.log("buzhidsao")});

    const mainElement = document.querySelector('#__next');


    const root = document.createElement('div');
    root.classList.add("absolute", "z-20", "flex-col", "gap-2", "md:flex", "right-1", "h-full", "w-96", "p-3");
    root.id = 'extension-root';

    // contentScript.js
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('index.js');
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = chrome.runtime.getURL('index.css');
    document.head.appendChild(link);

    mainElement.insertBefore(root,mainElement.firstChild);


  }

  //   )
  // }else {
  //   console.log("miehuodie");
  // }
};