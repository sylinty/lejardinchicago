
(function(){
 const items=window.LE_JARDIN_MENU||[];
 const grid=document.querySelector("[data-menu-grid]");
 const tabs=document.querySelector("[data-menu-tabs]");
 if(!grid||!tabs)return;
 const cats=["All",...new Set(items.map(x=>x.category))];
 function card(x){
  const media=x.image
    ? `<img src="${x.image}" alt="${x.name}" loading="lazy">`
    : `<div class="menu-empty" aria-label="No dish photo assigned"><span>Le Jardin</span></div>`;
  return `<article class="menu-card">${media}<div class="body"><div class="head"><h3>${x.name}</h3><div class="price">${x.price}</div></div><p>${x.description||""}</p></div></article>`;
 }
 function render(cat){grid.innerHTML=(cat==="All"?items:items.filter(x=>x.category===cat)).map(card).join("");}
 tabs.innerHTML=cats.map((c,i)=>`<button class="tab ${i===0?"active":""}" data-cat="${c}">${c}</button>`).join("");
 tabs.addEventListener("click",e=>{const b=e.target.closest("[data-cat]");if(!b)return;tabs.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.cat);});
 render("All");
})();
