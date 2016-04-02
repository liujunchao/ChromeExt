console.log("内容脚本,测试可否访问当前页面");

window.onmouseup = function (params) {
    var selection = window.getSelection();
    if(selection.anchorOffset!==selection.extentOffset){
        chrome.runtime.sendMessage(selection.toString());
     //   var notification =webkitNotifications.createNotification('icon16.png',"notification demo","happy coding");
      //   notification.show();
    }
};