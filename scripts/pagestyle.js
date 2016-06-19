var allAs = document.querySelectorAll("a");
alert(allAs.length);
for (var index = 0; index < allAs.length; index++) {
    var element = allAs[index];
    element.removeAttribute("href");
    return ;
    
}
 