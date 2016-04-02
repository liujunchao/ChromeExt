var seconds = 0;
setInterval(function() {
   console.log("I have already running :"+seconds);
   seconds++;
}, 1000);


chrome.contextMenus.create({
    type:"normal",
    title:"menu a",
    id:'a'
});

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
    title:"menu e",
    id:"e",
    parentId:'a'
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
    type:"normal",
    title:"show after selecting text",
    contexts:["selection"],
    onclick:function (info,tab) {
        alert("select text "+info.selectionText);
    }
});