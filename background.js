chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
chrome.browserAction.setBadgeText({text: 'Down'});
console.log("inside bg.js");

function success()
{
  chrome.browserAction.setIcon({ path: 'online-icon.png'})
  chrome.browserAction.setBadgeBackgroundColor({ color: [0, 255, 0, 255] });
  chrome.browserAction.setBadgeText({text: 'Up'});
  console.log("online");
}

function failure()
{
  chrome.browserAction.setIcon({ path: 'offline-icon.png'})
  chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
  chrome.browserAction.setBadgeText({text: 'Down'});
  console.log("offline");    
}

function testNet(){
  if(navigator.onLine)
    success();
  else
  failure();
}

function testNet2()
{
  var xmlhttp;
  xmlhttp=new XMLHttpRequest();

  xmlhttp.onreadystatechange=function(){
    if(xmlhttp.readyState==4 && xmlhttp.status==200){
      success();
    }
    else
    {
      console.log(xmlhttp);
    }
  }
  var url = "https://www.google.co.in/search?q=hello";
  xmlhttp.open("GET", url, false);
  xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  xmlhttp.setRequestHeader("Data-Type", "jsonp");
  xmlhttp.send();
}
setInterval(testNet, 1000);




  // TODO : Figure out a way to use jquery in background.js
   // $.ajax({
   //          url: "http://www.google.com",
   //          context: document.body,
   //          error: function(jqXHR, exception) {
   //            chrome.browserAction.setIcon({ path: 'offline-icon.png'})
   //            chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
   //            chrome.browserAction.setBadgeText({text: 'Down'});
   //            console.log("offline");
   //          },
   //          success: function(){
   //            chrome.browserAction.setIcon({ path: 'online-icon.png'})
   //            chrome.browserAction.setBadgeBackgroundColor({ color: [0, 255, 0, 255] });
   //            chrome.browserAction.setBadgeText({text: 'Up'});
   //            console.log("online");
   //          }
   //        });
