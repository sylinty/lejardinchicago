
(function(){
  const cfg=window.LE_JARDIN||{};
  const b=document.querySelector("[data-menu-toggle]");
  const p=document.querySelector("[data-mobile-panel]");
  if(b&&p){b.addEventListener("click",()=>p.classList.toggle("open"));}
  document.querySelectorAll("[data-phone]").forEach(el=>{
    el.textContent=cfg.phoneDisplay||"";
    if(el.tagName==="A")el.href="tel:"+(cfg.phoneHref||"");
  });
  document.querySelectorAll("[data-phone2]").forEach(el=>{
    el.textContent=cfg.secondPhoneDisplay||"";
    if(el.tagName==="A")el.href="tel:"+(cfg.secondPhoneHref||"");
  });
  document.querySelectorAll("[data-address]").forEach(el=>{
    if(!el.textContent.trim()) el.textContent=cfg.address||"";
    if(el.tagName==="A")el.href=cfg.mapsUrl||"#";
  });
  document.querySelectorAll("[data-doordash]").forEach(el=>el.href=cfg.doorDashUrl||"#");
  const hrs=document.querySelector("[data-hours]");
  if(hrs)hrs.innerHTML=(cfg.hours||[]).map(([d,t])=>`<div class="hour"><strong>${d}</strong><span>${t}</span></div>`).join("");
  document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
  document.querySelectorAll("[data-instagram]").forEach(el=>{if(cfg.instagramUrl)el.href=cfg.instagramUrl;else el.style.display="none";});
  document.querySelectorAll("[data-facebook]").forEach(el=>{if(cfg.facebookUrl)el.href=cfg.facebookUrl;else el.style.display="none";});
})();
