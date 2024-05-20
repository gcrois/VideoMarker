"use strict";const y=require("./index-T3Ugp-GL.cjs"),m=require("react");function v(t,e){for(var a=0;a<e.length;a++){const s=e[a];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in t)){const i=Object.getOwnPropertyDescriptor(s,r);i&&Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var w=Object.create,o=Object.defineProperty,O=Object.getOwnPropertyDescriptor,C=Object.getOwnPropertyNames,k=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty,S=(t,e,a)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,E=(t,e)=>{for(var a in e)o(t,a,{get:e[a],enumerable:!0})},d=(t,e,a,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of C(e))!D.call(t,r)&&r!==a&&o(t,r,{get:()=>e[r],enumerable:!(s=O(e,r))||s.enumerable});return t},R=(t,e,a)=>(a=t!=null?w(k(t)):{},d(!t||!t.__esModule?o(a,"default",{value:t,enumerable:!0}):a,t)),j=t=>d(o({},"__esModule",{value:!0}),t),n=(t,e,a)=>(S(t,typeof e!="symbol"?e+"":e,a),a),_={};E(_,{default:()=>l});var P=j(_),h=R(m),c=y.utils,b=y.patterns;const I="https://fast.wistia.com/assets/external/E-v1.js",M="Wistia",W="wistia-player-";class l extends h.Component{constructor(){super(...arguments),n(this,"callPlayer",c.callPlayer),n(this,"playerID",this.props.config.playerId||`${W}${(0,c.randomString)()}`),n(this,"onPlay",(...e)=>this.props.onPlay(...e)),n(this,"onPause",(...e)=>this.props.onPause(...e)),n(this,"onSeek",(...e)=>this.props.onSeek(...e)),n(this,"onEnded",(...e)=>this.props.onEnded(...e)),n(this,"onPlaybackRateChange",(...e)=>this.props.onPlaybackRateChange(...e)),n(this,"mute",()=>{this.callPlayer("mute")}),n(this,"unmute",()=>{this.callPlayer("unmute")})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){const{playing:a,muted:s,controls:r,onReady:i,config:p,onError:f}=this.props;(0,c.getSDK)(I,M).then(g=>{p.customControls&&p.customControls.forEach(u=>g.defineControl(u)),window._wq=window._wq||[],window._wq.push({id:this.playerID,options:{autoPlay:a,silentAutoPlay:"allow",muted:s,controlsVisibleOnLoad:r,fullscreenButton:r,playbar:r,playbackRateControl:r,qualityControl:r,volumeControl:r,settingsControl:r,smallPlayButton:r,...p.options},onReady:u=>{this.player=u,this.unbind(),this.player.bind("play",this.onPlay),this.player.bind("pause",this.onPause),this.player.bind("seek",this.onSeek),this.player.bind("end",this.onEnded),this.player.bind("playbackratechange",this.onPlaybackRateChange),i()}})},f)}unbind(){this.player.unbind("play",this.onPlay),this.player.unbind("pause",this.onPause),this.player.unbind("seek",this.onSeek),this.player.unbind("end",this.onEnded),this.player.unbind("playbackratechange",this.onPlaybackRateChange)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){this.unbind(),this.callPlayer("remove")}seekTo(e,a=!0){this.callPlayer("time",e),a||this.pause()}setVolume(e){this.callPlayer("volume",e)}setPlaybackRate(e){this.callPlayer("playbackRate",e)}getDuration(){return this.callPlayer("duration")}getCurrentTime(){return this.callPlayer("time")}getSecondsLoaded(){return null}render(){const{url:e}=this.props,a=e&&e.match(b.MATCH_URL_WISTIA)[1],s=`wistia_embed wistia_async_${a}`,r={width:"100%",height:"100%"};return h.default.createElement("div",{id:this.playerID,key:a,className:s,style:r})}}n(l,"displayName","Wistia");n(l,"canPlay",b.canPlay.wistia);n(l,"loopOnEnded",!0);const q=y.getDefaultExportFromCjs(P),A=v({__proto__:null,default:q},[P]);exports.Wistia=A;