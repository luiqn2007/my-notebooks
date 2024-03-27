"use strict";var C=Object.defineProperty;var U=(h,e,t)=>e in h?C(h,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[e]=t;var m=(h,e,t)=>(U(h,typeof e!="symbol"?e+"":e,t),t);const f=require("siyuan");class _{constructor(e,t,n,l,p){m(this,"plugin");m(this,"name");m(this,"file");m(this,"settings",new Map);m(this,"elements",new Map);this.name=t??"settings",this.plugin=e,this.file=this.name.endsWith(".json")?this.name:`${this.name}.json`,this.plugin.setting=new f.Setting({width:l,height:p,confirmCallback:()=>{for(let u of this.settings.keys())this.updateValue(u);let c=this.dump();n!==void 0?n(c):(this.plugin.data[this.name]=c,this.save()),window.location.reload()}})}async load(){let e=await this.plugin.loadData(this.file);if(console.debug("Load config:",e),e)for(let[t,n]of this.settings)n.value=(e==null?void 0:e[t])??n.value;return this.plugin.data[this.name]=this.dump(),e}async save(){let e=this.dump();return await this.plugin.saveData(this.file,this.dump()),e}get(e){var t;return(t=this.settings.get(e))==null?void 0:t.value}dump(){let e={};for(let[t,n]of this.settings)n.type!=="button"&&(e[t]=n.value);return e}addItem(e){var n,l,p,c,u;this.settings.set(e.key,e);let t;switch(e.type){case"checkbox":let a=document.createElement("input");a.type="checkbox",a.checked=e.value,a.className="b3-switch fn__flex-center",t=a;break;case"select":let i=document.createElement("select");i.className="b3-select fn__flex-center fn__size200";let o=(e==null?void 0:e.options)??{};for(let B in o){let x=document.createElement("option"),I=o[B];x.value=B,x.text=I,i.appendChild(x)}i.value=e.value,t=i;break;case"slider":let s=document.createElement("input");s.type="range",s.className="b3-slider fn__size200 b3-tooltips b3-tooltips__n",s.ariaLabel=e.value,s.min=((n=e.slider)==null?void 0:n.min.toString())??"0",s.max=((l=e.slider)==null?void 0:l.max.toString())??"100",s.step=((p=e.slider)==null?void 0:p.step.toString())??"1",s.value=e.value,s.onchange=()=>{s.ariaLabel=s.value},t=s;break;case"textinput":let d=document.createElement("input");d.className="b3-text-field fn__flex-center fn__size200",d.value=e.value,t=d;break;case"textarea":let r=document.createElement("textarea");r.className="b3-text-field fn__block",r.value=e.value,t=r;break;case"number":let y=document.createElement("input");y.type="number",y.className="b3-text-field fn__flex-center fn__size200",y.value=e.value,t=y;break;case"button":let g=document.createElement("button");g.className="b3-button b3-button--outline fn__flex-center fn__size200",g.innerText=((c=e.button)==null?void 0:c.label)??"Button",g.onclick=((u=e.button)==null?void 0:u.callback)??(()=>{}),t=g;break;case"hint":let E=document.createElement("div");E.className="b3-label fn__flex-center",t=E;break}this.elements.set(e.key,t),this.plugin.setting.addItem({title:e.title,description:e==null?void 0:e.description,createActionElement:()=>this.getElement(e.key)})}getElement(e){let t=this.settings.get(e),n=this.elements.get(e);switch(t.type){case"checkbox":n.checked=t.value;break;case"select":n.value=t.value;break;case"slider":n.value=t.value,n.ariaLabel=t.value;break;case"textinput":n.value=t.value;break;case"textarea":n.value=t.value;break}return n}updateValue(e){let t=this.settings.get(e),n=this.elements.get(e);switch(t.type){case"checkbox":t.value=n.checked;break;case"select":t.value=n.value;break;case"slider":t.value=n.value;break;case"textinput":t.value=n.value;break;case"textarea":t.value=n.value;break}}}const k="menu-config",b=f.getFrontend(),v=navigator.platform.toLocaleLowerCase(),w=document.getElementById("commonMenu");class L extends f.Plugin{constructor(){super(...arguments);m(this,"settingUtils")}convertStringToArray(t){if(t){var n=t.split(/[,，]/);for(let l=0;l<n.length;l++)n[l]=n[l].trim();return n}else return[]}applyStyles(t){const n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");n.appendChild(l),l.appendChild(document.createTextNode(t))}leftOffsetWindowControlBtns(){const t=`
        body.body--win32 .fullscreen > .protyle-breadcrumb,
        body.body--win32 .fullscreen > .block__icons {
            padding-left: 120px;
            padding-right: 10px;
        }
        `;this.applyStyles(t)}adjustWindowControlBtnsLayout(t,n,l){(l.includes("1")&&v.includes("win")||l.includes("2")&&v.includes("linux")||l.includes("3")&&(v.includes("win")||v.includes("linux")))&&(t==2&&(windowControls.style.order="-1",this.leftOffsetWindowControlBtns()),n==2?(closeWindow.style.order="-1",minWindow.style.order="1",maxWindow.style.order="0"):n==3&&(closeWindow.style.order="-1",minWindow.style.order="0",maxWindow.style.order="1"))}rmvMenuItems(t,n,l,p){function c(a){for(let i=0;i<a.length;i++){let o=a[i];if(o.classList.contains("b3-menu__item")){let s=o.getElementsByClassName("b3-menu__label")[0];if(s){let d=s.textContent.trim();t.includes(d)&&(p==1?o.remove():p==2&&(o.style.display="none"))}}}if(l==3){let i=-1,o=!1;for(let s=0;s<a.length;s++)if(a[s].classList.contains("b3-menu__separator"))if(i===-1)i=s;else{let d=!0;for(let r=i+1;r<s;r++)if(a[r].style.display!=="none"){d=!1;break}d&&!o?(a[i].style.display="none",o=!0):o=!1,i=s}}else if(l==2)for(let i=0;i<a.length;i++)a[i].classList.contains("b3-menu__separator")&&(a[i].style.display="none");else if(l==4){let i=Array.from(a).filter(r=>r.classList.contains("b3-menu__separator")),o=[],s=1,d=i[s-1];for(;s<i.length;s++){const r=i[s];r.offsetTop<=d.offsetTop+5&&o.push(r),r.offsetTop!=0&&(d=r)}o.length==i.length-1&&(o=[...i]),o.forEach(r=>r.style.display="none")}else if(l==5){let i=Array.from(a).filter(s=>s.classList.contains("b3-menu__separator")),o=[];for(let s=1;s<i.length;s++){const d=i[s-1],r=i[s];r.offsetTop<d.offsetTop+30&&o.push(r)}o.forEach(s=>s.style.display="none")}}if(n==1)w.addEventListener("DOMNodeInserted",function(a){const i=Array.from(w.getElementsByTagName("button"));c(i)},!1),console.log(this.i18n.ignore_warning);else if(n==2){var u=new MutationObserver(function(a,i){for(let o of a)if(o.type){const s=Array.from(document.getElementById("commonMenu").getElementsByTagName("button"));c(s)}});u.observe(w,{childList:!0,subtree:!0})}else{var u=new MutationObserver(function(i,o){for(let s of i)if(s.type==="childList"){const d=Array.from(document.getElementById("commonMenu").getElementsByTagName("button"));c(d)}});u.observe(w,{childList:!0,subtree:!0})}}rmvTopButtonBarIcons(t){t.forEach(n=>{const l=document.createElement("style");l.textContent=`
                #${n} {
                    display: none;
                }
            `,document.head.appendChild(l)})}rmvSideBarIcons(t){(b=="desktop"||b=="browser-desktop")&&t.forEach(n=>{const l=document.createElement("style");l.textContent=`
            .dock__item[data-type="${n}"] {
                display: none;
            }
            `,document.head.appendChild(l)}),(b=="mobile"||b=="browser-mobile")&&t.forEach(n=>{const l=document.createElement("style");l.textContent=`
            .toolbar__icon[data-type="sidebar-${n}-tab"] {
                display: none;
              }
            `,document.head.appendChild(l)})}reloadInterface(){f.showMessage(this.i18n.reload_hint)}async onload(){this.settingUtils=new _(this,k),this.settingUtils.load(),this.settingUtils.addItem({key:"totalSwitch",value:!0,type:"checkbox",title:this.i18n.totalSwitch,description:this.i18n.totalSwitchDesc}),this.settingUtils.addItem({key:"listenImplementation",value:1,type:"select",title:this.i18n.listenImplementation,description:this.i18n.listenImplementationdesc,options:{1:"DOMNodeInserted",2:"MutationObserver",3:"MutationObserver(type hard coded)"}}),this.settingUtils.addItem({key:"seperateHandlePolicy",value:1,type:"select",title:this.i18n.seperateHandlePolicy,description:this.i18n.seperateHandlePolicydesc,options:{1:this.i18n.seperateHandlePolicyDontTouch,2:this.i18n.seperateHandlePolicyHideAll,3:this.i18n.seperateHandlePolicyHideIfTwoMeetEachOther,4:"@Wetoria",5:"@zxhd863943427"}}),this.settingUtils.addItem({key:"itemRemovePolicy",value:1,type:"select",title:this.i18n.itemRemovePolicy,description:this.i18n.itemRemovePolicydesc,options:{1:this.i18n.itemRemovePolicyRemove,2:this.i18n.itemRemovePolicyDisplayNone}}),this.settingUtils.addItem({key:"unwantedMenuItem",value:"",type:"textarea",title:this.i18n.rm_menu_title,description:this.i18n.rm_menu_desc}),this.settingUtils.addItem({key:"unwantedTopButtonBarIcon",value:"",type:"textarea",title:this.i18n.rm_top_title,description:this.i18n.rm_top_desc}),this.settingUtils.addItem({key:"unwantedSideBarIcon",value:"",type:"textarea",title:this.i18n.rm_side_title,description:this.i18n.rm_side_desc}),this.settingUtils.addItem({key:"enableWindowControlBtnsReload",value:!1,type:"checkbox",title:this.i18n.enableWindowControlBtnsReload,description:this.i18n.enableWindowControlBtnsReloadDesc}),this.settingUtils.addItem({key:"windowControlBtnPosition",value:1,type:"select",title:this.i18n.windowControlBtnPosition,description:this.i18n.windowControlBtnPositionDesc,options:{1:"↗️",2:"↖️"}}),this.settingUtils.addItem({key:"windowControlBtnsLayout",value:1,type:"select",title:this.i18n.windowControlBtnsLayout,description:this.i18n.windowControlBtnsLayoutDesc,options:{1:"➖🔲❌️",2:"❌🔲➖",3:"❌➖🔲"}}),this.settingUtils.addItem({key:"windowControlBtnApplyOs",value:1,type:"select",title:this.i18n.windowControlBtnApplyOs,description:this.i18n.windowControlBtnApplyOsDesc,options:{1:"Windows",2:"Linux",3:"Windows & Linux"}}),this.settingUtils.addItem({key:"hint",value:"",type:"hint",title:this.i18n.hintTitle,description:this.i18n.hintDesc})}onLayoutReady(){this.loadData(k),this.settingUtils.load(),this.settingUtils.get("totalSwitch")&&(this.rmvTopButtonBarIcons(this.convertStringToArray(this.settingUtils.get("unwantedTopButtonBarIcon"))),this.rmvSideBarIcons(this.convertStringToArray(this.settingUtils.get("unwantedSideBarIcon"))),this.rmvMenuItems(this.convertStringToArray(this.settingUtils.get("unwantedMenuItem")),this.settingUtils.get("listenImplementation"),this.settingUtils.get("seperateHandlePolicy"),this.settingUtils.get("itemRemovePolicy")),this.settingUtils.get("enableWindowControlBtnsReload")&&this.adjustWindowControlBtnsLayout(this.settingUtils.get("windowControlBtnPosition"),this.settingUtils.get("windowControlBtnsLayout"),this.settingUtils.get("windowControlBtnApplyOs")))}async onunload(){await this.settingUtils.save()}uninstall(){this.removeData(k),f.showMessage(this.i18n.uninstall_hint)}}module.exports=L;
