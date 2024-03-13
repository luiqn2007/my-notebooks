"use strict";var x=Object.defineProperty;var y=(l,e,t)=>e in l?x(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var s=(l,e,t)=>(y(l,typeof e!="symbol"?e+"":e,t),t);const v=require("siyuan");class E{constructor(e,t,i,a,u){s(this,"plugin");s(this,"name");s(this,"file");s(this,"settings",new Map);s(this,"elements",new Map);this.name=t??"settings",this.plugin=e,this.file=this.name.endsWith(".json")?this.name:`${this.name}.json`,this.plugin.setting=new v.Setting({width:a,height:u,confirmCallback:()=>{for(let d of this.settings.keys())this.updateValue(d);let c=this.dump();if(i!==void 0)return i(c);this.plugin.data[this.name]=c,this.save()}})}async load(){let e=await this.plugin.loadData(this.file);if(console.debug("Load config:",e),e)for(let[t,i]of this.settings)i.value=(e==null?void 0:e[t])??i.value;return this.plugin.data[this.name]=this.dump(),e}async save(){let e=this.dump();return await this.plugin.saveData(this.file,this.dump()),e}get(e){var t;return(t=this.settings.get(e))==null?void 0:t.value}dump(){let e={};for(let[t,i]of this.settings)i.type!=="button"&&(e[t]=i.value);return e}addItem(e){var i,a,u,c,d,f;this.settings.set(e.key,e);let t;switch(e.type){case"checkbox":let r=document.createElement("input");r.type="checkbox",r.checked=e.value,r.className="b3-switch fn__flex-center",t=r;break;case"select":let h=document.createElement("select");h.className="b3-select fn__flex-center fn__size200";for(let k of((i=e.select)==null?void 0:i.options)??[]){let b=document.createElement("option");b.value=k.val,b.text=k.text,h.appendChild(b)}h.value=e.value,t=h;break;case"slider":let n=document.createElement("input");n.type="range",n.className="b3-slider fn__size200 b3-tooltips b3-tooltips__n",n.ariaLabel=e.value,n.min=((a=e.slider)==null?void 0:a.min.toString())??"0",n.max=((u=e.slider)==null?void 0:u.max.toString())??"100",n.step=((c=e.slider)==null?void 0:c.step.toString())??"1",n.value=e.value,n.onchange=()=>{n.ariaLabel=n.value},t=n;break;case"textinput":let m=document.createElement("input");m.className="b3-text-field fn__flex-center fn__size200",m.value=e.value,t=m;break;case"textarea":let p=document.createElement("textarea");p.className="b3-text-field fn__block",p.value=e.value,t=p;break;case"button":let g=document.createElement("button");g.className="b3-button b3-button--outline fn__flex-center fn__size200",g.innerText=((d=e.button)==null?void 0:d.label)??"Button",g.onclick=((f=e.button)==null?void 0:f.callback)??(()=>{}),t=g;break}this.elements.set(e.key,t),this.plugin.setting.addItem({title:e.title,description:e==null?void 0:e.description,createActionElement:()=>this.getElement(e.key)})}getElement(e){let t=this.settings.get(e),i=this.elements.get(e);switch(t.type){case"checkbox":i.checked=t.value;break;case"select":i.value=t.value;break;case"slider":i.value=t.value,i.ariaLabel=t.value;break;case"textinput":i.value=t.value;break;case"textarea":i.value=t.value;break}return i}updateValue(e){let t=this.settings.get(e),i=this.elements.get(e);switch(t.type){case"checkbox":t.value=i.checked;break;case"select":t.value=i.value;break;case"slider":t.value=i.value;break;case"textinput":t.value=i.value;break;case"textarea":t.value=i.value;break}}}const o="config.json";class _ extends v.Plugin{constructor(){super(...arguments);s(this,"isMobile");s(this,"settingUtils");s(this,"onSettingUpdatedBindThis",this.onSettingUpdated.bind(this))}async onload(){const t=v.getFrontend();this.isMobile=t==="mobile"||t==="browser-mobile",this.settingUtils=new E(this,o,this.onSettingUpdatedBindThis,null,"20rem"),this.settingUtils.addItem({key:"line-height",value:1.625,type:"slider",title:this.i18n.lineHeight.title,description:this.i18n.lineHeight.description,slider:{min:1,max:2.5,step:.025}}),this.settingUtils.addItem({key:"node-margin",value:2,type:"slider",title:this.i18n.nodeMargin.title,description:this.i18n.nodeMargin.description,slider:{min:0,max:5,step:.5}}),this.settingUtils.addItem({key:"reset",type:"button",title:this.i18n.reset.title,description:this.i18n.reset.description,value:null,button:{label:this.i18n.reset.title,callback:()=>{const i=this.settingUtils.elements.get("line-height");i.value="1.625",i.ariaLabel="1.625";const a=this.settingUtils.elements.get("node-margin");a.value="2",a.ariaLabel="2"}}}),this.settingUtils.load()}onSettingUpdated(t){console.debug("Update config",t),this.data[o]=t,this.saveData(o,this.data[o]),document.documentElement.style.setProperty("--custom-line-height",this.data[o]["line-height"]),document.documentElement.style.setProperty("--custom-node-margin-tb",`${this.data[o]["node-margin"]}px`)}}module.exports=_;
