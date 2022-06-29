(()=>{"use strict";const e=function(){let e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("home"),e.append(t);let n=document.createElement("header");t.append(n);let a=document.createElement("h3");n.append(a),a.classList.add("headline"),a.textContent="Some Restaurant Name";let d=document.createElement("main");t.append(d);let c=document.createElement("div");c.classList.add("copy"),d.append(c);let m=document.createElement("p");c.append(m),m.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis consequuntur eveniet vel cumque doloribus nemo quaerat facilis fugit natus, neque ea commodi a, distinctio blanditiis nobis, cupiditate reiciendis enim?",m.classList.add("copy-para");let l=document.createElement("div");d.append(l),l.classList.add("image");let p=document.createElement("img");l.append(p),p.src="https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg"},t=function(){let e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("contact"),e.append(t);let n=document.createElement("form");t.append(n);let a=document.createElement("legend");n.append(a),a.textContent="Contact Us!";let d=document.createElement("fieldset");n.append(d);let c=document.createElement("div");d.append(c),c.classList.add("name");let m=document.createElement("label");c.append(m),m.htmlFor="name",m.textContent="Full Name:";let l=document.createElement("input");c.append(l),l.id="name",l.name="name",l.setAttribute="text";let p=document.createElement("div");d.append(p),p.classList.add("number");let o=document.createElement("label");p.append(o),o.htmlFor="number",o.textContent="Phone Number:";let i=document.createElement("input");p.append(i),i.id="number",i.name="phone_number",i.setAttribute="number";let s=document.createElement("div");d.append(s),p.classList.add("title");let u=document.createElement("label");s.append(u),u.htmlFor="title",u.textContent="Message Title:";let r=document.createElement("input");s.append(r),i.id="title",i.name="message_title",l.setAttribute="text";let E=document.createElement("div");d.append(E),p.classList.add("message");let g=document.createElement("label");E.append(g),g.htmlFor="message",g.textContent="Message:";let x=document.createElement("textarea");E.append(x),x.rows=5,x.cols=20,x.setAttribute="text"},n=function(){let e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("menu"),e.append(t);let n=document.createElement("div");t.append(n),n.classList.add("wrapper");let a=document.createElement("div");n.append(a),a.classList.add("menu-item");let d=document.createElement("div");a.append(d),d.classList.add("menu-image");let c=document.createElement("img");c.src="https://cdn.pixabay.com/photo/2020/04/17/08/23/eat-5053825_960_720.jpg",d.append(c);let m=document.createElement("p");a.append(m),m.textContent="Sample text";let l=document.createElement("div");n.append(l),l.classList.add("menu-item");let p=document.createElement("div");l.append(d),p.classList.add("menu-image");let o=document.createElement("img");o.src="https://cdn.pixabay.com/photo/2017/11/08/22/18/spaghetti-2931846_960_720.jpg",p.append(o);let i=document.createElement("p");l.append(i),i.textContent="Sample text";let s=document.createElement("div");n.append(s),s.classList.add("menu-item");let u=document.createElement("div");s.append(u),u.classList.add("menu-image");let r=document.createElement("img");r.src="https://cdn.pixabay.com/photo/2014/11/11/18/20/pasta-527286_960_720.jpg",u.append(r);let E=document.createElement("p");s.append(E),E.textContent="Sample text";let g=document.createElement("div");n.append(g),g.classList.add("menu-item");let x=document.createElement("div");g.append(x),x.classList.add("menu-image");let L=document.createElement("img");L.src="https://cdn.pixabay.com/photo/2016/04/09/09/22/pizza-1317699_960_720.jpg",x.append(L);let h=document.createElement("p");g.append(h),h.textContent="Sample text";let v=document.createElement("div");n.append(v),v.classList.add("menu-item");let b=document.createElement("div");v.append(b),b.classList.add("menu-image");let _=document.createElement("img");_.src="https://cdn.pixabay.com/photo/2015/03/05/18/30/spaghetti-660748_960_720.jpg",b.append(_);let y=document.createElement("p");v.append(y),y.textContent="Sample text";let C=document.createElement("div");n.append(C),C.classList.add("menu-item");let S=document.createElement("div");C.append(S),b.classList.add("menu-image");let q=document.createElement("img");q.src="https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329521_960_720.jpg",S.append(q);let f=document.createElement("p");C.append(f),f.textContent="Sample text"};let a=document.querySelector(".menuButton"),d=document.querySelector(".homeBtn"),c=document.querySelector(".contactBtn");a.addEventListener("click",(()=>{console.log("Menu Button Working!"),n()})),d.addEventListener("click",(()=>{console.log("Home Button Working!"),e()})),c.addEventListener("click",(()=>{console.log("Contact Button Working!"),t()})),console.log("Hello World!")})();