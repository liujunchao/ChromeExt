本项目主要尝试chrome的api开发，熟悉api及语法。

1，配置background->scripts->JS路径  可配置CHROME后台运行脚本

2, 配置permissions->contextMenus可以配置生成右键菜单权限

3, ContentScript，可与当前页面在同一个空间，而BackgroundScript则是隔离开的。在配置文件中加入content_scripts项。

4, chrome.runtime.sendMessage可由Content.js页面发送消息给background.js页面,background.js则可通过chrome.runtime.onMessage.addListener监听

5, webkitNotifications无法在CHROME使用。

6, permissions中加bookmarks可以增加标签的访问权限。chrome.bookmarks.create 创建标签。
7, chrome.tabs.executeScript可执行外部脚本（该外部脚本可访问文档元素），并得到执行结果。
8， chrome.downloads.download可使用CHROME的下载器指定特定URL下载文件。
