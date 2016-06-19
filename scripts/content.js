console.log("内容脚本,测试可否访问当前页面");

window.onmouseup = function (params) {
    var selection = window.getSelection();
    if(selection.anchorOffset!==selection.extentOffset){
        chrome.runtime.sendMessage(selection.toString());
     //   var notification =webkitNotifications.createNotification('icon16.png',"notification demo","happy coding");
      //   notification.show();
    }
};


window.onload = function (params) {
    var allAs = document.querySelectorAll("a");
     
    for (var index = 0,len = allAs.length; index < len; index++) {
        var element = allAs[index];
        element.removeAttribute("href"); 
        
    }
    
}