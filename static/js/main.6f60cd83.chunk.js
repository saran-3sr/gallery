(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{265:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),l=a(67),c=a.n(l);a(74),a(75);var o=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"3SR"),r.a.createElement("h2",null,"Photo Gallery")),r.a.createElement("p",null,"Hi!This is a Photo gallery Developed using React and Firebase. As it works on developer mode I kindly request you to upload photos with less file size. Also I request you not to upload any personal photos"))},s=a(11),i=a(2),u=a.n(i),m=a(3),p=(a(76),a(37)),d=(a(266),a(267),p.a.initializeApp({apiKey:"AIzaSyAoJELYatTfdBvbRKpOF9X-GGOGgIjsCXk",authDomain:"gallery-app-1-ba91f.firebaseapp.com",projectId:"gallery-app-1-ba91f",storageBucket:"gallery-app-1-ba91f.appspot.com",messagingSenderId:"319075094551",appId:"1:319075094551:web:6695d703daa85c338e8c52"}),p.a.storage()),f=p.a.firestore(),g=function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(null),o=Object(s.a)(c,2),i=o[0],p=o[1],g=Object(n.useState)(null),v=Object(s.a)(g,2),E=v[0],b=v[1];return Object(n.useEffect)(function(){var t=d.ref("".concat(e.name)),a=f.collection("Images");t.put(e).on("state_changed",function(t){console.log(e.name);var a=t.bytesTransferred/t.totalBytes*100;l(a)},function(e){p(e)},Object(m.a)(u.a.mark(function e(){var n,r,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:return n=e.sent,r=new Date,l=r.getHours(),e.next=7,a.add({url:n,update:l});case 7:b(n);case 8:case"end":return e.stop()}},e)})))},[e]),{progress:r,url:E,error:i}};var v=function(e){var t=e.file,a=e.setfile,l=g(t),c=l.progress,o=l.url;return l.error,console.log(c,o),Object(n.useEffect)(function(){o&&a(null)},[o,a]),r.a.createElement("div",{className:"progress-bar",style:{width:{progress:c}}})};var E=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),o=Object(s.a)(c,2),i=o[0],u=o[1];return r.a.createElement("div",{className:"form"},r.a.createElement("label",{htmlFor:"form"},r.a.createElement("input",{className:"custom-file-input",type:"file",id:"file",onChange:function(e){var t=e.target.files[0];console.log(t),"image/png"==t.type||"image/jpeg"==t.type?(l(t),u(null)):(l(null),u("Please upload valid image format"))}}),r.a.createElement("span",{onClick:function(){document.getElementById("file").click()}},"+")),r.a.createElement("div",{className:"output"},i&&r.a.createElement("div",{className:"error"},i),a&&r.a.createElement("div",{className:a.name,id:"file"},a.name),a&&r.a.createElement(v,{file:a,setfile:l})))},b=a(49),h=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)(function(){var t=f.collection(e).orderBy("update","desc").onSnapshot(function(e){var t=[];e.forEach(function(e){t.push(Object(b.a)(Object(b.a)({},e.data()),{},{id:e.id}))}),l(t)});return function(){return t()}},[e]),{images:r}};var j=function(){var e=h("Images").images;return console.log(e),r.a.createElement("div",{className:"Photogrid"},e&&e.map(function(e){return r.a.createElement("div",{className:"grid",key:e.id},r.a.createElement("img",{className:"img",src:e.url,alt:""}))}))};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement(E,null),r.a.createElement("hr",{className:"line"}),r.a.createElement(j,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))},69:function(e,t,a){e.exports=a(265)},74:function(e,t,a){},75:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.6f60cd83.chunk.js.map