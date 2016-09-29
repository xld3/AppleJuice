/*
原创 完美解决打印网页某区域
作者：宁波徐LuDan
QQ:46589025
电子邮件：46589025@qq.com

通常直接调用window.print()会存在各种问题

我的解决方案
将打印内容放入iframe里，然后加载相关css,再调用window.print()实现打印效果和网页样式一致
*/
(function(){
               
    var windowP=document.getElementById("ifrPrint");
    if(!windowP){
        windowP=document.createElement("iframe");
        windowP.setAttribute("id","ifrPrint");
        windowP.setAttribute("class","print-iframe");
        document.body.appendChild(windowP);
    
    }
    
    var DocumentPrint=windowP.contentDocument;
    DocumentPrint.innerHTML="<html><head><title>合同</title></head><body></body></html>";

    var head_= DocumentPrint.getElementsByTagName('head')[0]; 
    var lnk=DocumentPrint.createElement("link");

    lnk.setAttribute("href","../assets/css/adm2016.css");
    lnk.setAttribute("rel","stylesheet");
    lnk.setAttribute("type","text/css");
    head_.appendChild(lnk);

    lnk=DocumentPrint.createElement("link");
    lnk.setAttribute("href","print.css");
    lnk.setAttribute("rel","stylesheet");
    lnk.setAttribute("type","text/css");
    head_.appendChild(lnk);
    

    DocumentPrint.body.innerHTML=document.getElementById("printDv").innerHTML;
    document.getElementById("btnprint").addEventListener("click",function(e){
        windowP.contentWindow.focus();
        windowP.contentWindow.print();
    }
    ,false)
  
})()
