chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
chrome.browserAction.setBadgeText({text: 'Down'});
console.log("inside bg.js");

function success()
{
  show_alert = false;
  chrome.browserAction.setIcon({ path: 'online-icon.png'})
  chrome.browserAction.setBadgeBackgroundColor({ color: [0, 255, 0, 255] });
  chrome.browserAction.setBadgeText({text: 'Up'});
  console.log("online-image");
}

var show_alert = false;

function failure()
{
  chrome.browserAction.setIcon({ path: 'offline-icon.png'})
  chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
  chrome.browserAction.setBadgeText({text: 'Down'});
  console.log("offline-image");
  if (show_alert == false)
  {
    show_alert = true;    
    alert("offline"); 

  }
}

function testNet(){
  if(navigator.onLine)
    success();
  else
  failure();
}

function testNet2()
{
  var i = new Image();
  i.onload = success;
  i.onerror = failure;

  i.src = 'http://gfx2.hotmail.com/mail/uxp/w4/m4/pr014/h/s7.png?d=' + escape(Date());
}
setInterval(testNet, 1000);
