// @author:hrask
(function () {

  'use strict';
  
  // portal show event
  kintone.events.on('portal.show', function() {

    var el = kintone.portal.getContentSpaceElement();

    var portalTab = document.createElement("div");
    portalTab.style.marginLeft="15px";
    portalTab.style.textAlign="center";
    portalTab.style.width="510px";
    portalTab.style.height="300px";
    portalTab.style.background="#eee8aa";
    el.appendChild(portalTab);

    function App(apps,name,color,accessLocation){
        
        apps.textContent = name;
        apps.style.fontSize="15px";
        apps.style.fontFamily="cursive";
        apps.style.textAlign="center";
        apps.style.margin="20px 0 0 14px";
        apps.style.padding="10px";
        apps.style.cursor="pointer";
        apps.style.background=color;
        apps.style.width="90px";
        apps.style.height="50px";
        apps.style.cssFloat="left";
        apps.style.borderRadius="10%";
        apps.onclick= function(){
            location.href=accessLocation;
        };
    };

    function Tab(tabs,name,color){
      tabs.textContent = name;
          tabs.style.fontSize="20px";
          tabs.style.fontFamily="cursive";
          tabs.style.textAlign="center";
          tabs.style.margin="00px 0 0 0px";
          tabs.style.cursor="pointer";
          tabs.style.background=color;
          tabs.style.width="100px";
          tabs.style.height="40px";
          tabs.style.cssFloat="left";
          tabs.style.border="thin solid #d2691e"
          tabs.onclick= function(){
  
      
          };      
    };


//create and append apps
var tab1app=[];
var app1_1 = document.createElement("div");
App(app1_1,"app1_1","#9acd32",".");
tab1app.push(app1_1);
var app1_2 = document.createElement("div");
App(app1_2,"app1_2","#9acd32",".");
tab1app.push(app1_2);
var app1_3 = document.createElement("div");
App(app1_3,"app1_3","#9acd32",".");
tab1app.push(app1_3);
var app1_4 = document.createElement("div");
App(app1_4,"app1_4","#9acd32",".");
tab1app.push(app1_4);
var app1_5 = document.createElement("div");
App(app1_5,"app1_5","#9acd32",".");
tab1app.push(app1_5);


var tab2app=[];
var app2_1 = document.createElement("div");
App(app2_1,"app2_1","#9acd32",".");
tab2app.push(app2_1);
var app2_2 = document.createElement("div");
App(app2_2,"app2_2","#9acd32",".");
tab2app.push(app2_2);
var app2_3 = document.createElement("div");
App(app2_3,"app2_3","#9acd32",".");
tab2app.push(app2_3);

var tab3app=[];
var app3_1 = document.createElement("div");
App(app3_1,"app3_1","#9acd32",".");
tab3app.push(app3_1);
var app3_2 = document.createElement("div");
App(app3_2,"app3_2","#9acd32",".");
tab3app.push(app3_2);
var app3_3 = document.createElement("div");
App(app3_3,"app3_3","#9acd32",".");
tab3app.push(app3_3);

var tab4app=[];
var app4_1 = document.createElement("div");
App(app4_1,"app4_1","#9acd32",".");
tab4app.push(app4_1);
var app4_2 = document.createElement("div");
App(app4_2,"app4_2","#9acd32",".");
tab4app.push(app4_2);
var app4_3 = document.createElement("div");
App(app4_3,"app4_3","#9acd32",".");
tab4app.push(app4_3);

var tab5app=[];
var app5_1 = document.createElement("div");
App(app5_1,"app5_1","#9acd32",".");
tab5app.push(app5_1);
var app5_2 = document.createElement("div");
App(app5_2,"app5_2","#9acd32",".");
tab5app.push(app5_2);
var app5_3 = document.createElement("div");
App(app5_3,"app5_3","#9acd32",".");
tab5app.push(app5_3);

//create tabs
var tab1=document.createElement("div");
Tab(tab1,"tab1","#ffa500");
var tab2=document.createElement("div");
Tab(tab2,"tab2","#ffa500");
var tab3=document.createElement("div");
Tab(tab3,"tab3","#ffa500");
var tab4=document.createElement("div");
Tab(tab4,"tab4","#ffa500");
var tab5=document.createElement("div");
Tab(tab5,"tab5","#ffa500");
var tab6=document.createElement("div");
portalTab.appendChild(tab1);
portalTab.appendChild(tab2);
portalTab.appendChild(tab3);
portalTab.appendChild(tab4);
portalTab.appendChild(tab5);
var tablist=[];
tablist.push(tab1);
tablist.push(tab2);
tablist.push(tab3)
tablist.push(tab4);
tablist.push(tab5);

var parentAppslist=[tab1app,tab2app,tab3app,tab4app,tab5app];

function reloadcolor(){
  for(var i=0; i<parentAppslist.length; i++){
    for(var j=0; j<parentAppslist[i].length; j++){
      parentAppslist[i][j].style.display="none"
    };
  };
  for(var i=0; i<tablist.length; i++){
    tablist[i].style.background="#ffa500";
  };
  for (var i=0; i<tablist.length; i++){
    tablist[i].style.border='thin solid #d2691e'
  };
};

//initialize view
for (var i=0; i< tab1app.length; i++){
  tab1app[i].style.display="show";
  portalTab.appendChild(tab1app[i])
}
tab1.style.border='hidden';
tab1.style.background="#eee8aa";
  

//Tab click event
function appshow(num){
  reloadcolor();

  if (num==0){
    for (var i=0; i< tab1app.length; i++){
      tab1app[i].style.display="block";
    };
  tab1.style.border='hidden';
  tab1.style.background="#eee8aa";
}
  else if(num==1){
    reloadcolor();

    for (var i=0; i< tab2app.length; i++){
      tab2app[i].style.display="block";
      portalTab.appendChild(tab2app[i])
    }
    tab2.style.border='hidden';
    tab2.style.background="#eee8aa";
  }

  else if(num==2){
    reloadcolor();

    for (var i=0; i< tab3app.length; i++){
      tab3app[i].style.display="block";
      portalTab.appendChild(tab3app[i])
    }
    tab3.style.border='hidden';
    tab3.style.background="#eee8aa";
  }

  else if(num==3){
    reloadcolor();

    for (var i=0; i< tab4app.length; i++){
      tab4app[i].style.display="block";
      portalTab.appendChild(tab4app[i])
    }
    tab4.style.border='hidden';
    tab4.style.background="#eee8aa";
  }

  else if(num==4){
    reloadcolor();

    for (var i=0; i< tab5app.length; i++){
      tab5app[i].style.display="block";
      portalTab.appendChild(tab5app[i])
    }
    tab5.style.border='hidden';
    tab5.style.background="#eee8aa";
  }
}
    tab1.onclick=function(){
      appshow(0)
    };
    tab2.onclick=function(){
    appshow(1)
    };
    tab3.onclick=function(){
      appshow(2)
    };
    tab4.onclick=function(){
      appshow(3)
    };
    tab5.onclick=function(){
      appshow(4)
    };

  });
})();