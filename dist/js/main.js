(()=>{var s=document.querySelector(".js-dateInput"),e=new Date,f=document.querySelector(".js-point-pool"),m=!0,r=[],h=90;s.setAttribute("max",e.toISOString().split("T")[0]);s.setAttribute("min",new Date(e.getFullYear()-90,e.getMonth(),e.getDate()).toISOString().split("T")[0]);s.setAttribute("value",new Date(2e3,4,27).toISOString().split("T")[0]);g();s.addEventListener("change",g);function g(){m?(T(),m=!1):r.forEach(a=>{a.classList.remove("c-month-point--active"),a.classList.remove("c-month-point--past")});var n=document.querySelector(".js-dateInput").value,t=new Date(n),i=Math.abs(e.getTime()-t.getTime()),l=e.getFullYear()*12+e.getMonth(),c=t.getFullYear()*12+t.getMonth(),d=Math.floor(i/(1e3*3600*24)),v=Math.floor(d/7),p=Math.floor(d/365),u=new Date(t.getFullYear()+h,t.getMonth(),t.getDate()+1),M=u.getFullYear()*12+u.getMonth(),y=M-c,o=l-c,L=y-o;r[o].classList.add("c-month-point--active");for(let a=0;a<o;a++)r[a].classList.add("c-month-point--past");D(d,v,o,p)}function T(){for(let n=0;n<h*12;n++){let t=document.createElement("div");t.classList.add("c-month-point"),f.appendChild(t),r.push(t)}}function D(n,t,i,l){document.getElementById("days").innerHTML=n+" jours",document.getElementById("weeks").innerHTML=t+" semaines",document.getElementById("months").innerHTML=i+" mois",document.getElementById("years").innerHTML=l+" ans"}})();