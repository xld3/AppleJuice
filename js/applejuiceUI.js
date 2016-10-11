/*
AppleJuiceUI.JS 原生UI js库
作者:宁波徐Ludan
微信号:46589025
QQ:46589025
 */
var AppleJuiceUI={
		//检测是否是现代浏览器
		isModernBrowser:function(){
			var div = document.createElement('div');
			return ("borderRadius" in div.style);
		},
		placeholderSupport:function() {
		    return 'placeholder' in document.createElement('input');
		},
        //下拉
        DropDown:{
            options:{

            },
            Active:function(){
               if(document.querySelector(".ui-select-menu")){
                   var uiSelectMenu=document.querySelectorAll(".ui-select-menu");
                   Array.prototype.forEach.call(uiSelectMenu, function(item,index){
                       var span=item.getElementsByTagName("span")[0];
                       var ul=item.getElementsByTagName("ul")[0];

                    span.addEventListener("click",function(event){
                     
                        ul.style.display="block";
                        shownum=item.getAttribute("shownum");
                        if(shownum&&(/\d+/).test(shownum)){
                            if(ul.childNodes.length>shownum){
                                ul.style.height=27*shownum+'px';
                                ul.style.overflowY="scroll";
                                ul.style.overflowX="hidden";
                            }
                        }
                       
                        event.stopPropagation();

                    },false)
                    });
                    Array.prototype.forEach.call(document.querySelectorAll(".ui-select-menu li"), function(item,index){
                      
                    item.addEventListener("click",function(event){
                     var ul= this.parentNode,
                     topP=ul.parentNode;

                      topP.getElementsByTagName("span")[0].innerHTML=this.innerHTML;
                      ul.style.display="none";
                        event.stopPropagation();

                    },false)
                    });
               }
            }
        }
}
AppleJuiceUI.DropDown.Active();