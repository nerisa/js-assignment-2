// JavaScript Document
var main=document.body.children;
var dom=[];
for(i=0;i<main.length;i++){
	dom[i]=main[i];
	dom[i].tag=main[i].tagName;
	console.log(dom[i].tag);
	if(main[i].className){
		dom[i].class=main[i].className;
	}
	if(main[i].children){
		for(j=0;j<main[i].children.length;i++){
			/*findChildren(main[i],dom[i]);*/
			dom[i].children[j].tag=main[i].children[j].tagName;
			dom[i].children[j].class=main[i].children[j].className;
			dom[i].children[j].innerHTML=main[i].children[j].nodeValue;
		}
	}
		
		
}
console.log(dom[0].children[0].tag);

/*function findChildren(parent,child){
	for(i=0;i<parent.children.length;i++){
		child.children[i].tag=parent.children[i].tagName;
		child.children[i].class=parent.children[i].className;
		child.children[i].innerHTML=parent.children[i].nodeValue;
	if(parent.children[i].children.length){
		for(j=0;j<child.children.children.length;j++){
			find(parent.children[j],child.children[j]);
			}
			}
}
}*/
