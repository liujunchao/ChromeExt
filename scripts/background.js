var seconds = 0;
setInterval(function() {
   console.log("I have already running :"+seconds);
   seconds++;
}, 100000);


chrome.contextMenus.create({
    type:"normal",
    title:"menu a",
    id:'a'
});

chrome.contextMenus.create({
    type:'normal',
    title:'download all images',
    onclick:function (info,tab) {
        chrome.tabs.executeScript(tab.id,{file:'scripts/main.js'},function (results) {
           if(results&& results[0]&& results[0].length){
               results[0].forEach(function(url){
                  chrome.downloads.download({
                      url:url,
                      conflictAction:'uniquify',
                      saveAs:false
                  });
               });
           } 
        });
    }
})

chrome.contextMenus.create({
    type:"radio",
    title:"menu b",
    id:"b",
    checked:true
});

chrome.contextMenus.create({
    type:"checkbox",
    title:"menu c",
    id:"c",
    checked:true
});

chrome.contextMenus.create({
    type:"separator"
});

chrome.contextMenus.create({
    type:"normal",
    title:"添加到书签",
    id:"e",
    parentId:'a',
    onclick:function (info,tab) { 
        chrome.bookmarks.create({
            parentId:'1',
            index:0,
            title:tab.title,
            url:tab.url
        },function (bookmark) {
            console.log(bookmark)
        });
    }
});

chrome.contextMenus.create({
    type:"normal",
    title:"移除书签",
    id:"g",
    parentId:'a',
    onclick:function (info,tab) { 
        chrome.bookmarks.create({
            parentId:'1',
            index:0,
            title:tab.title,
            url:tab.url
        },function (bookmark) {
            console.log(bookmark)
        });
    }
});


chrome.contextMenus.create({
    type:"normal",
    title:"menu g",
    id:"g",
    parentId:'a'
});

//配置当对链接右键的时候显示以下这个菜单
chrome.contextMenus.create({
    type:"normal",
    title:"show  after right click on link",
    contexts:["link"]
});
//配置对选中的文本右键的时候显示以下这个菜单
chrome.contextMenus.create({
    id:'selectText',
    type:"normal",
    title:"show after selecting text",
    contexts:["selection"],
    onclick:function (info,tab) {
        alert("select text "+info.selectionText);
    }
});


chrome.runtime.onMessage.addListener(function (message,sender,sendResponse) {
    console.log("receive message from content.js,"+message); 
    chrome.contextMenus.update('selectText',{
        title:"show after select "+message
    });
   
});

chrome.bookmarks.getTree(function (bookmarksArray) {
    console.log(bookmarksArray);
});

chrome.contextMenus.create({
    type:'normal',
    title:'disable a links ',
    onclick:function (info,tab) {
        chrome.tabs.executeScript(tab.id,{file:'scripts/pagestyle.js'},function (results) {
           
        });
    }
})