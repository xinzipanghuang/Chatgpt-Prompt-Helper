chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // 处理你的消息...
  function processMessage(message) {
    console.log(message);
    if (message.openPopup) {
      console.log("keshodao");
      chrome.notifications.create({
        type:     'basic',
        iconUrl:  'icon.png',
        title:    'Your notification title1',
        message:  'Your notification message',
        buttons: [
            {title: 'Option 1'},
            {title: 'Option 2'}
        ],
        priority: 0
    });
    
      // chrome.action.setBadgeText({ text: 'ON' });
      // chrome.action.setBadgeBackgroundColor({ color: '#4688F1' });
      // window.open("popup.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");

    }
  }
  let response = processMessage(message);

  // 同步发送响应
  console.log(message, sender, sendResponse);
  sendResponse(response);
  return true;

});



