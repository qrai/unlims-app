"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{1223:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"AmpStateContext",{enumerable:!0,get:function(){return t}});let t=r(1308)._(r(2013)).default.createContext({})},1502:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"getImgProps",{enumerable:!0,get:function(){return l}}),r(1807);let t=r(5207),o=r(7459),i=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function n(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,a){var r,l;let c,p,b,{src:f,sizes:d,unoptimized:g=!1,priority:m=!1,loading:u,className:x,quality:$,width:h,height:z,fill:v=!1,style:y,overrideSrc:k,onLoad:w,onLoadingComplete:W,placeholder:X="empty",blurDataURL:Y,fetchPriority:H,decoding:O="async",layout:_,objectFit:S,objectPosition:j,lazyBoundary:C,lazyRoot:E,...M}=e,{imgConf:F,showAltText:R,blurComplete:P,defaultLoader:N}=a,I=F||o.imageConfigDefault;if("allSizes"in I)c=I;else{let e=[...I.deviceSizes,...I.imageSizes].sort((e,a)=>e-a),a=I.deviceSizes.sort((e,a)=>e-a),t=null==(r=I.qualities)?void 0:r.sort((e,a)=>e-a);c={...I,allSizes:e,deviceSizes:a,qualities:t}}if(void 0===N)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let A=M.loader||N;delete M.loader,delete M.srcSet;let T="__next_img_default"in A;if(T){if("custom"===c.loader)throw Object.defineProperty(Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=A;A=a=>{let{config:r,...t}=a;return e(t)}}if(_){"fill"===_&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(y={...y,...e});let a={responsive:"100vw",fill:"100vw"}[_];a&&!d&&(d=a)}let L="",D=n(h),U=n(z);if((l=f)&&"object"==typeof l&&(s(l)||void 0!==l.src)){let e=s(f)?f.default:f;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(p=e.blurWidth,b=e.blurHeight,Y=Y||e.blurDataURL,L=e.src,!v)if(D||U){if(D&&!U){let a=D/e.width;U=Math.round(e.height*a)}else if(!D&&U){let a=U/e.height;D=Math.round(e.width*a)}}else D=e.width,U=e.height}let V=!m&&("lazy"===u||void 0===u);(!(f="string"==typeof f?f:L)||f.startsWith("data:")||f.startsWith("blob:"))&&(g=!0,V=!1),c.unoptimized&&(g=!0),T&&!c.dangerouslyAllowSVG&&f.split("?",1)[0].endsWith(".svg")&&(g=!0);let B=n($),G=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:j}:{},R?{}:{color:"transparent"},y),q=P||"empty"===X?null:"blur"===X?'url("data:image/svg+xml;charset=utf-8,'+(0,t.getImageBlurSvg)({widthInt:D,heightInt:U,blurWidth:p,blurHeight:b,blurDataURL:Y||"",objectFit:G.objectFit})+'")':'url("'+X+'")',J=i.includes(G.objectFit)?"fill"===G.objectFit?"100% 100%":"cover":G.objectFit,K=q?{backgroundSize:J,backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},Q=function(e){let{config:a,src:r,unoptimized:t,width:o,quality:i,sizes:s,loader:n}=e;if(t)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,a,r){let{deviceSizes:t,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,a=[];for(let t;t=e.exec(r);)a.push(parseInt(t[2]));if(a.length){let e=.01*Math.min(...a);return{widths:o.filter(a=>a>=t[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof a?{widths:t,kind:"w"}:{widths:[...new Set([a,2*a].map(e=>o.find(a=>a>=e)||o[o.length-1]))],kind:"x"}}(a,o,s),p=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,t)=>n({config:a,src:r,quality:i,width:e})+" "+("w"===c?e:t+1)+c).join(", "),src:n({config:a,src:r,quality:i,width:l[p]})}}({config:c,src:f,unoptimized:g,width:D,quality:B,sizes:d,loader:A});return{props:{...M,loading:V?"lazy":u,fetchPriority:H,width:D,height:U,decoding:O,className:x,style:{...G,...K},sizes:Q.sizes,srcSet:Q.srcSet,src:k||Q.src},meta:{unoptimized:g,priority:m,placeholder:X,fill:v}}}},1514:(e,a,r)=>{r.d(a,{Ab:()=>d});var t=r(6633),o=r(2013);let i={sm:{borderRadius:18,borderWidth:1,width:70,height:36},md:{borderRadius:16,borderWidth:1},line:{borderRadius:16,borderWidth:1}},s={sm:{dark:{strokeOpacity:.48,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.3)",saturation:1.2},light:{strokeOpacity:.33,innerOpacity:.46,bloomOpacity:.54,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:.96}},md:{dark:{strokeOpacity:.48,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.27)",saturation:1.2},light:{strokeOpacity:.33,innerOpacity:.46,bloomOpacity:.54,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:.96}},line:{dark:{strokeOpacity:.72,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(255, 255, 255, 0.1)",saturation:1.2},light:{strokeOpacity:.72,innerOpacity:.7,bloomOpacity:.8,innerShadow:"rgba(0, 0, 0, 0.14)",saturation:1.2}}},n=(s.md.dark,s.md.light,{colorful:{border:[{color:"rgb(255, 50, 100)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(40, 140, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(50, 200, 80)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(30, 185, 170)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(100, 70, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(40, 140, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 120, 40)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(240, 50, 180)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(180, 40, 240)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 60, 80)",secondary:"rgba(40, 190, 180, 0.98)"},spikeLt:{primary:"rgb(200, 30, 60)",secondary:"rgb(20, 150, 140)"}},mono:{border:[{color:"rgb(180, 180, 180)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(140, 140, 140)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(160, 160, 160)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(130, 130, 130)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(170, 170, 170)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(150, 150, 150)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(190, 190, 190)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(145, 145, 145)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(165, 165, 165)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(200, 200, 200)",secondary:"rgb(170, 170, 170)"},spikeLt:{primary:"rgb(80, 80, 80)",secondary:"rgb(120, 120, 120)"}},ocean:{border:[{color:"rgb(100, 80, 220)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(60, 120, 255)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(80, 100, 200)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(50, 140, 220)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(120, 80, 255)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(70, 130, 255)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(140, 100, 240)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(90, 110, 230)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(130, 70, 255)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(100, 120, 255)",secondary:"rgba(130, 100, 220, 0.98)"},spikeLt:{primary:"rgb(60, 60, 180)",secondary:"rgb(80, 100, 200)"}},sunset:{border:[{color:"rgb(255, 80, 50)",pos:"33% -7.4%",size:"70px 40px"},{color:"rgb(255, 160, 40)",pos:"12% -5%",size:"60px 35px"},{color:"rgb(255, 120, 60)",pos:"2.1% 68.3%",size:"40px 70px"},{color:"rgb(255, 200, 50)",pos:"2.1% 68.3%",size:"20px 35px"},{color:"rgb(255, 100, 80)",pos:"74.4% 100%",size:"180px 32px"},{color:"rgb(255, 180, 60)",pos:"55% 100%",size:"85px 26px"},{color:"rgb(255, 60, 60)",pos:"93.9% 0%",size:"74px 32px"},{color:"rgb(255, 140, 50)",pos:"100% 27.1%",size:"26px 42px"},{color:"rgb(255, 90, 70)",pos:"100% 27.1%",size:"52px 48px"}],spike:{primary:"rgb(255, 140, 80)",secondary:"rgba(255, 100, 60, 0.98)"},spikeLt:{primary:"rgb(200, 80, 40)",secondary:"rgb(220, 120, 30)"}}}),l={colorful:{border:[{color:"rgb(50, 200, 80)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(30, 185, 170)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 120, 40)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(100, 70, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(240, 50, 180)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(180, 40, 240)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(40, 140, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 50, 100)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(50, 200, 80, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(30, 185, 170, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 120, 40, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(100, 70, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(240, 50, 180, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(180, 40, 240, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(40, 140, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 50, 100, 0.3)",pos:"100% 27%",size:"11px 12px"}]},mono:{border:[{color:"rgb(160, 160, 160)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(140, 140, 140)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(180, 180, 180)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(150, 150, 150)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(170, 170, 170)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(155, 155, 155)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(145, 145, 145)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(165, 165, 165)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(160, 160, 160, 0.25)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(140, 140, 140, 0.22)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(180, 180, 180, 0.17)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(150, 150, 150, 0.17)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(170, 170, 170, 0.15)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(155, 155, 155, 0.20)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(145, 145, 145, 0.15)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(165, 165, 165, 0.15)",pos:"100% 27%",size:"11px 12px"}]},ocean:{border:[{color:"rgb(60, 140, 200)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(50, 120, 180)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(100, 80, 220)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(80, 100, 255)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(120, 70, 240)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(90, 80, 220)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(70, 110, 255)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(110, 90, 230)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(60, 140, 200, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(50, 120, 180, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(100, 80, 220, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(80, 100, 255, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(120, 70, 240, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(90, 80, 220, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(70, 110, 255, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(110, 90, 230, 0.3)",pos:"100% 27%",size:"11px 12px"}]},sunset:{border:[{color:"rgb(255, 180, 50)",pos:"2% 68%",size:"9px 18px"},{color:"rgb(255, 150, 40)",pos:"2% 68%",size:"4px 8px"},{color:"rgb(255, 80, 60)",pos:"72% -3%",size:"59px 9px"},{color:"rgb(255, 100, 80)",pos:"74% 100%",size:"42px 7px"},{color:"rgb(255, 60, 80)",pos:"100% 27%",size:"10px 17px"},{color:"rgb(255, 120, 60)",pos:"100% 27%",size:"10px 18px"},{color:"rgb(255, 200, 50)",pos:"100% 27%",size:"5px 10px"},{color:"rgb(255, 90, 70)",pos:"100% 27%",size:"11px 12px"}],inner:[{color:"rgba(255, 180, 50, 0.5)",pos:"2% 68%",size:"9px 18px"},{color:"rgba(255, 150, 40, 0.45)",pos:"2% 68%",size:"4px 8px"},{color:"rgba(255, 80, 60, 0.35)",pos:"72% -3%",size:"59px 9px"},{color:"rgba(255, 100, 80, 0.35)",pos:"74% 100%",size:"42px 7px"},{color:"rgba(255, 60, 80, 0.3)",pos:"100% 27%",size:"10px 17px"},{color:"rgba(255, 120, 60, 0.4)",pos:"100% 27%",size:"10px 18px"},{color:"rgba(255, 200, 50, 0.3)",pos:"100% 27%",size:"5px 10px"},{color:"rgba(255, 90, 70, 0.3)",pos:"100% 27%",size:"11px 12px"}]}},c={colorful:{dark:[{color:"rgb(255, 50, 100)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 180, 220)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 160, 30)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(240, 50, 180)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(30, 185, 170)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(255, 50, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(40, 140, 255)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(50, 200, 80)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(180, 40, 240)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(30, 185, 170)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 255)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(40, 140, 255)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(255, 120, 40)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(240, 50, 180)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},mono:{dark:[{color:"rgb(200, 200, 200)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(170, 170, 170)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(155, 155, 155)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(185, 185, 185)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(165, 165, 165)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(180, 180, 180)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(160, 160, 160)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(175, 175, 175)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(190, 190, 190)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(100, 100, 100)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(80, 80, 80)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(90, 90, 90)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(70, 70, 70)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(85, 85, 85)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(95, 95, 95)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(75, 75, 75)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(105, 105, 105)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(65, 65, 65)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},ocean:{dark:[{color:"rgb(100, 80, 220)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(60, 120, 255)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(80, 100, 200)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(130, 70, 255)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(70, 130, 255)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(120, 80, 255)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(90, 110, 230)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(110, 90, 240)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(140, 100, 255)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(80, 60, 200)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(50, 100, 220)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(70, 90, 190)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(110, 60, 220)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(60, 110, 230)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(100, 70, 240)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(80, 100, 210)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(90, 80, 225)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(120, 90, 245)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]},sunset:{dark:[{color:"rgb(255, 100, 60)",sizeW:36,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(255, 180, 50)",sizeW:30,sizeH:32,offsetX:39,offsetY:0},{color:"rgb(255, 140, 70)",sizeW:33,sizeH:28,offsetX:-36,offsetY:2},{color:"rgb(255, 80, 80)",sizeW:29,sizeH:34,offsetX:-54,offsetY:0},{color:"rgb(255, 200, 60)",sizeW:27,sizeH:30,offsetX:51,offsetY:-1},{color:"rgb(255, 120, 50)",sizeW:36,sizeH:24,offsetX:21,offsetY:1},{color:"rgb(255, 160, 80)",sizeW:30,sizeH:22,offsetX:-21,offsetY:0},{color:"rgb(255, 90, 60)",sizeW:25,sizeH:28,offsetX:66,offsetY:1},{color:"rgb(255, 70, 70)",sizeW:23,sizeH:30,offsetX:-66,offsetY:-1}],light:[{color:"rgb(220, 80, 40)",sizeW:45,sizeH:36,offsetX:0,offsetY:2},{color:"rgb(230, 150, 30)",sizeW:35,sizeH:32,offsetX:65,offsetY:0},{color:"rgb(210, 110, 50)",sizeW:40,sizeH:28,offsetX:-60,offsetY:2},{color:"rgb(200, 60, 60)",sizeW:35,sizeH:34,offsetX:-90,offsetY:0},{color:"rgb(220, 170, 40)",sizeW:38,sizeH:30,offsetX:85,offsetY:-1},{color:"rgb(210, 100, 30)",sizeW:50,sizeH:24,offsetX:35,offsetY:1},{color:"rgb(230, 130, 60)",sizeW:40,sizeH:22,offsetX:-35,offsetY:0},{color:"rgb(190, 70, 50)",sizeW:35,sizeH:28,offsetX:110,offsetY:1},{color:"rgb(180, 50, 50)",sizeW:30,sizeH:30,offsetX:-110,offsetY:-1}]}},p={colorful:[{color:"rgba(255, 50, 100, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(40, 180, 220, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(50, 200, 80, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(180, 40, 240, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 160, 30, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(100, 70, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(40, 140, 255, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(240, 50, 180, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(30, 185, 170, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],mono:[{color:"rgba(200, 200, 200, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(170, 170, 170, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(155, 155, 155, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(185, 185, 185, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(165, 165, 165, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(180, 180, 180, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(160, 160, 160, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(175, 175, 175, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(190, 190, 190, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],ocean:[{color:"rgba(100, 80, 220, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(60, 120, 255, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(80, 100, 200, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(130, 70, 255, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(70, 130, 255, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(120, 80, 255, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(90, 110, 230, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(110, 90, 240, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(140, 100, 255, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}],sunset:[{color:"rgba(255, 100, 60, 0.48)",sizeW:33,sizeH:30,offsetX:0,offsetY:0},{color:"rgba(255, 180, 50, 0.42)",sizeW:24,sizeH:26,offsetX:39,offsetY:-3},{color:"rgba(255, 140, 70, 0.48)",sizeW:27,sizeH:24,offsetX:-36,offsetY:0},{color:"rgba(255, 80, 80, 0.42)",sizeW:23,sizeH:28,offsetX:-54,offsetY:-2},{color:"rgba(255, 200, 60, 0.50)",sizeW:24,sizeH:24,offsetX:51,offsetY:-1},{color:"rgba(255, 120, 50, 0.45)",sizeW:30,sizeH:20,offsetX:21,offsetY:0},{color:"rgba(255, 160, 80, 0.40)",sizeW:25,sizeH:18,offsetX:-21,offsetY:-2},{color:"rgba(255, 90, 60, 0.45)",sizeW:21,sizeH:24,offsetX:66,offsetY:0},{color:"rgba(255, 70, 70, 0.52)",sizeW:18,sizeH:26,offsetX:-66,offsetY:-1}]},b={colorful:{dark:{spikes:[{color1:"rgb(100, 70, 255)",color2:"rgba(100, 70, 255, 1)"},{color1:"rgba(255, 170, 40, 0.59)",color2:"rgba(255, 170, 40, 0.29)"},{color1:"rgb(50, 200, 100)",color2:"rgba(50, 200, 100, 1)"},{color1:"rgba(200, 50, 240, 0.91)",color2:"rgba(200, 50, 240, 0.45)"},{color1:"rgb(40, 140, 255)",color2:"rgba(40, 140, 255, 1)"}]},light:{spikes:[{color1:"rgb(80, 50, 200)",color2:"rgba(80, 50, 200, 0.8)"},{color1:"rgba(210, 130, 0, 0.7)",color2:"rgba(210, 130, 0, 0.46)"},{color1:"rgb(30, 160, 70)",color2:"rgba(30, 160, 70, 0.82)"},{color1:"rgb(160, 30, 190)",color2:"rgba(160, 30, 190, 0.7)"},{color1:"rgb(30, 100, 200)",color2:"rgba(30, 100, 200, 0.78)"}]}},mono:{dark:{spikes:[{color1:"rgb(200, 200, 200)",color2:"rgba(200, 200, 200, 1)"},{color1:"rgba(180, 180, 180, 0.59)",color2:"rgba(180, 180, 180, 0.29)"},{color1:"rgb(190, 190, 190)",color2:"rgba(190, 190, 190, 1)"},{color1:"rgba(170, 170, 170, 0.91)",color2:"rgba(170, 170, 170, 0.45)"},{color1:"rgb(185, 185, 185)",color2:"rgba(185, 185, 185, 1)"}]},light:{spikes:[{color1:"rgb(80, 80, 80)",color2:"rgba(80, 80, 80, 0.8)"},{color1:"rgba(100, 100, 100, 0.7)",color2:"rgba(100, 100, 100, 0.46)"},{color1:"rgb(70, 70, 70)",color2:"rgba(70, 70, 70, 0.82)"},{color1:"rgb(90, 90, 90)",color2:"rgba(90, 90, 90, 0.7)"},{color1:"rgb(85, 85, 85)",color2:"rgba(85, 85, 85, 0.78)"}]}},ocean:{dark:{spikes:[{color1:"rgb(100, 80, 255)",color2:"rgb(100, 80, 255)"},{color1:"rgba(80, 130, 220, 0.59)",color2:"rgba(80, 130, 220, 0.29)"},{color1:"rgb(60, 100, 255)",color2:"rgb(60, 100, 255)"},{color1:"rgba(90, 120, 200, 0.91)",color2:"rgba(90, 120, 200, 0.45)"},{color1:"rgb(120, 90, 255)",color2:"rgb(120, 90, 255)"}]},light:{spikes:[{color1:"rgb(50, 40, 180)",color2:"rgba(50, 40, 180, 0.8)"},{color1:"rgba(40, 80, 200, 0.7)",color2:"rgba(40, 80, 200, 0.46)"},{color1:"rgb(30, 50, 190)",color2:"rgba(30, 50, 190, 0.82)"},{color1:"rgb(60, 90, 180)",color2:"rgba(60, 90, 180, 0.7)"},{color1:"rgb(70, 60, 200)",color2:"rgba(70, 60, 200, 0.78)"}]}},sunset:{dark:{spikes:[{color1:"rgb(255, 100, 80)",color2:"rgb(255, 100, 80)"},{color1:"rgba(255, 150, 80, 0.59)",color2:"rgba(255, 150, 80, 0.29)"},{color1:"rgb(255, 80, 60)",color2:"rgb(255, 80, 60)"},{color1:"rgba(255, 120, 50, 0.91)",color2:"rgba(255, 120, 50, 0.45)"},{color1:"rgb(255, 140, 70)",color2:"rgb(255, 140, 70)"}]},light:{spikes:[{color1:"rgb(200, 60, 30)",color2:"rgba(200, 60, 30, 0.8)"},{color1:"rgba(220, 100, 20, 0.7)",color2:"rgba(220, 100, 20, 0.46)"},{color1:"rgb(180, 40, 20)",color2:"rgba(180, 40, 20, 0.82)"},{color1:"rgb(210, 80, 10)",color2:"rgba(210, 80, 10, 0.7)"},{color1:"rgb(190, 70, 30)",color2:"rgba(190, 70, 30, 0.78)"}]}}};function f(e,a){let r=e.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);if(r)return`rgba(${r[1]}, ${r[2]}, ${r[3]}, ${a})`;let t=e.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);return t?`rgba(${t[1]}, ${t[2]}, ${t[3]}, ${a})`:e}let d=(0,o.forwardRef)(function({children:e,size:a="md",colorVariant:r="colorful",theme:d="dark",staticColors:g=!1,duration:m,active:u=!0,borderRadius:x,brightness:$=1.3,saturation:h,hueRange:z=30,strength:v=1,className:y,style:k,onActivate:w,onDeactivate:W,onAnimationEnd:X,...Y},H){let O=(0,o.useId)().replace(/:/g,"-"),_=function(){let[e,a]=(0,o.useState)(()=>typeof window>"u"||window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");return(0,o.useEffect)(()=>{if(typeof window>"u")return;let e=window.matchMedia("(prefers-color-scheme: dark)"),r=e=>{a(e.matches?"dark":"light")};return e.addEventListener("change",r),()=>e.removeEventListener("change",r)},[]),e}(),S=(0,o.useRef)(null),[j,C]=(0,o.useState)(u),[E,M]=(0,o.useState)(!1),[F,R]=(0,o.useState)(null);(0,o.useEffect)(()=>{if(null!=x)return;let e=S.current;if(!e)return;let a=()=>{let a=e.firstElementChild;if(!a)return;let r=parseFloat(getComputedStyle(a).borderTopLeftRadius);!isNaN(r)&&r>0&&R(r)};a();let r=new MutationObserver(a);return r.observe(e,{childList:!0,subtree:!1}),()=>r.disconnect()},[x,e]),(0,o.useEffect)(()=>{!u||j||E?u||!j||E||M(!0):C(!0)},[u,j,E]);let P=(0,o.useCallback)(e=>{let a=e.animationName;a.includes("fade-out")?(C(!1),M(!1),null==W||W()):a.includes("fade-in")&&(null==w||w()),null==X||X(e)},[w,W,X]),N="auto"===d?_:d,I=s[a][N],A=i[a],T=x??F??A.borderRadius,L=m??("line"===a?2.4:1.96),D=h??I.saturation,U="line"===a?Math.min(z,13):z,V="mono"===r||g,B=(0,o.useMemo)(()=>(function(e){let{size:a}=e;return"line"===a?function(e){let{id:a,borderRadius:r,borderWidth:t,duration:o,strokeOpacity:i,innerOpacity:s,bloomOpacity:l,innerShadow:d,colorVariant:g,staticColors:m,brightness:u,saturation:x,hueRange:$,theme:h}=e,z=Math.max(0,r-t),v="dark"===h,y=m?"":`animation: beam-hue-shift-${a} 12s ease-in-out infinite;`,k=m?"":`animation: beam-hue-shift-bloom-${a} 8s ease-in-out infinite;`,w=m?"":`
@keyframes beam-hue-shift-${a} {
  0% { filter: hue-rotate(-${$}deg) brightness(${u.toFixed(2)}) saturate(${x.toFixed(2)}); }
  50% { filter: hue-rotate(${$}deg) brightness(${u.toFixed(2)}) saturate(${x.toFixed(2)}); }
  100% { filter: hue-rotate(-${$}deg) brightness(${u.toFixed(2)}) saturate(${x.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${a} {
  0% { filter: blur(8px) hue-rotate(-${$+10}deg) brightness(${u.toFixed(2)}) saturate(${x.toFixed(2)}); }
  50% { filter: blur(8px) hue-rotate(${$+10}deg) brightness(${u.toFixed(2)}) saturate(${x.toFixed(2)}); }
  100% { filter: blur(8px) hue-rotate(-${$+10}deg) brightness(${u.toFixed(2)}) saturate(${x.toFixed(2)}); }
}`,W=v?`radial-gradient(
        ellipse calc(24px * var(--beam-w-${a})) calc(28px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )`:`radial-gradient(
        ellipse calc(35px * var(--beam-w-${a})) calc(28px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`,X=c[g][v?"dark":"light"].map(e=>{let r=0===e.offsetX?"":e.offsetX>0?` + ${e.offsetX}px`:` - ${Math.abs(e.offsetX)}px`,t=0===e.offsetY?"":e.offsetY>0?` + ${e.offsetY}px`:` - ${Math.abs(e.offsetY)}px`;return`radial-gradient(ellipse calc(${e.sizeW}px * var(--beam-w-${a})) calc(${e.sizeH}px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%${r}) calc(100%${t}), ${e.color}, transparent)`}).join(`,
       `),Y=p[g].map(e=>{let r=0===e.offsetX?"":e.offsetX>0?` + ${e.offsetX}px`:` - ${Math.abs(e.offsetX)}px`,t=0===e.offsetY?"":` - ${Math.abs(e.offsetY)}px`;return`radial-gradient(ellipse calc(${e.sizeW}px * var(--beam-w-${a})) calc(${e.sizeH}px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%${r}) calc(100%${t}), ${e.color}, transparent)`}).join(`,
    `),H=function(e,a,r){let t=function(e,a){let r=n[e];return a?r.spike:r.spikeLt}(e,a),o=t.primary,i=t.secondary,s=b[e][a?"dark":"light"].spikes;if("mono"===e){var l,c;return l=a,c=r,l?`radial-gradient(ellipse calc(18px * var(--beam-spike-${c})) calc(30px * var(--beam-h-${c})) at 8% calc(100% - 2px), rgba(200, 200, 200, 0.35), rgba(200, 200, 200, 0.12) 50%, transparent 100%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${c})) calc(28px * var(--beam-h-${c})) at 22% calc(100% - 4px), rgba(170, 170, 170, 0.3), rgba(170, 170, 170, 0.1) 50%, transparent 100%),
       radial-gradient(ellipse calc(16px * var(--beam-spike-${c})) calc(32px * var(--beam-h-${c})) at 36% calc(100% - 3px), rgba(190, 190, 190, 0.35), rgba(190, 190, 190, 0.12) 50%, transparent 100%),
       radial-gradient(ellipse calc(20px * var(--beam-spike2-${c})) calc(25px * var(--beam-h-${c})) at 50% calc(100% - 2px), rgba(180, 180, 180, 0.25), rgba(180, 180, 180, 0.08) 55%, transparent 100%),
       radial-gradient(ellipse calc(15px * var(--beam-spike2-${c})) calc(30px * var(--beam-h-${c})) at 64% calc(100% - 4px), rgba(185, 185, 185, 0.32), rgba(185, 185, 185, 0.1) 50%, transparent 100%),
       radial-gradient(ellipse calc(12px * var(--beam-spike-${c})) calc(28px * var(--beam-h-${c})) at 78% calc(100% - 2px), rgba(175, 175, 175, 0.28), rgba(175, 175, 175, 0.09) 50%, transparent 100%),
       radial-gradient(ellipse calc(17px * var(--beam-spike-${c})) calc(26px * var(--beam-h-${c})) at 92% calc(100% - 3px), rgba(195, 195, 195, 0.3), rgba(195, 195, 195, 0.1) 50%, transparent 100%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${c})) calc(15px * var(--beam-spike2-${c})) at calc(var(--beam-x-${c}) * 100%) calc(100% + 1px), rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0.5) 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${c})) calc(40px * var(--beam-h-${c})) at calc(var(--beam-x-${c}) * 100%) 100%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.12) 25%, rgba(255, 255, 255, 0.03) 55%, transparent 80%)`:`radial-gradient(ellipse calc(18px * var(--beam-spike-${c})) calc(30px * var(--beam-h-${c})) at 8% calc(100% - 2px), rgba(80, 80, 80, 0.3), rgba(80, 80, 80, 0.1) 50%, transparent 100%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${c})) calc(28px * var(--beam-h-${c})) at 22% calc(100% - 4px), rgba(100, 100, 100, 0.25), rgba(100, 100, 100, 0.08) 50%, transparent 100%),
       radial-gradient(ellipse calc(16px * var(--beam-spike-${c})) calc(32px * var(--beam-h-${c})) at 36% calc(100% - 3px), rgba(70, 70, 70, 0.3), rgba(70, 70, 70, 0.1) 50%, transparent 100%),
       radial-gradient(ellipse calc(20px * var(--beam-spike2-${c})) calc(25px * var(--beam-h-${c})) at 50% calc(100% - 2px), rgba(90, 90, 90, 0.22), rgba(90, 90, 90, 0.07) 55%, transparent 100%),
       radial-gradient(ellipse calc(15px * var(--beam-spike2-${c})) calc(30px * var(--beam-h-${c})) at 64% calc(100% - 4px), rgba(85, 85, 85, 0.28), rgba(85, 85, 85, 0.09) 50%, transparent 100%),
       radial-gradient(ellipse calc(12px * var(--beam-spike-${c})) calc(28px * var(--beam-h-${c})) at 78% calc(100% - 2px), rgba(95, 95, 95, 0.24), rgba(95, 95, 95, 0.08) 50%, transparent 100%),
       radial-gradient(ellipse calc(17px * var(--beam-spike-${c})) calc(26px * var(--beam-h-${c})) at 92% calc(100% - 3px), rgba(75, 75, 75, 0.26), rgba(75, 75, 75, 0.08) 50%, transparent 100%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${c})) calc(32px * var(--beam-h-${c})) at calc(var(--beam-x-${c}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}if(a){let e=f(i,.49);return`radial-gradient(ellipse calc(0.8px * var(--beam-spike-${r})) calc(92px * var(--beam-h-${r})) at 8% calc(100% - 2px), ${o}, ${o} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r})) calc(35px * var(--beam-h-${r})) at 22% calc(100% - 4px), ${i}, ${e} 50%, transparent 95%),
       radial-gradient(ellipse calc(2px * (2 - var(--beam-spike-${r}))) calc(72px * var(--beam-h-${r})) at 36% calc(100% - 3px), ${s[0].color1}, ${s[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r})) calc(28px * var(--beam-h-${r})) at 50% calc(100% - 2px), ${s[1].color1}, ${s[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(1.2px * (2 - var(--beam-spike2-${r}))) calc(85px * var(--beam-h-${r})) at 64% calc(100% - 4px), ${s[2].color1}, ${s[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r})) calc(45px * var(--beam-h-${r})) at 78% calc(100% - 2px), ${s[3].color1}, ${s[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(0.6px * (2 - var(--beam-spike-${r}))) calc(60px * var(--beam-h-${r})) at 92% calc(100% - 3px), ${s[4].color1}, ${s[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${r})) calc(15px * var(--beam-spike2-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100% + 1px), rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0.5) 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${r})) calc(40px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) 100%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.12) 25%, rgba(255, 255, 255, 0.03) 55%, transparent 80%)`}{let e=f(o,.85),a=f(i,.7);return`radial-gradient(ellipse calc(0.8px * var(--beam-spike-${r})) calc(92px * var(--beam-h-${r})) at 8% calc(100% - 2px), ${o}, ${e} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${r})) calc(35px * var(--beam-h-${r})) at 22% calc(100% - 4px), ${i}, ${a} 50%, transparent 95%),
       radial-gradient(ellipse calc(2px * (2 - var(--beam-spike-${r}))) calc(72px * var(--beam-h-${r})) at 36% calc(100% - 3px), ${s[0].color1}, ${s[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${r})) calc(28px * var(--beam-h-${r})) at 50% calc(100% - 2px), ${s[1].color1}, ${s[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(1.2px * (2 - var(--beam-spike2-${r}))) calc(85px * var(--beam-h-${r})) at 64% calc(100% - 4px), ${s[2].color1}, ${s[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${r})) calc(45px * var(--beam-h-${r})) at 78% calc(100% - 2px), ${s[3].color1}, ${s[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(1px * (2 - var(--beam-spike-${r}))) calc(60px * var(--beam-h-${r})) at 92% calc(100% - 3px), ${s[4].color1}, ${s[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${r})) calc(32px * var(--beam-h-${r})) at calc(var(--beam-x-${r}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`}}(g,v,a);return`
@property --beam-x-${a} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${a} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${a} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${a}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${a}"][data-active] {
  animation:
    beam-travel-${a} ${o}s linear infinite,
    beam-edge-fade-${a} ${o}s linear infinite,
    beam-breathe-${a} ${(1.3*o).toFixed(1)}s ease-in-out infinite,
    beam-spike-${a} ${(1.33*o).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${a} ${(1.7*o).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${a} 0.6s ease forwards;
}

[data-beam="${a}"][data-fading] {
  animation:
    beam-travel-${a} ${o}s linear infinite,
    beam-edge-fade-${a} ${o}s linear infinite,
    beam-breathe-${a} ${(1.3*o).toFixed(1)}s ease-in-out infinite,
    beam-spike-${a} ${(1.33*o).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${a} ${(1.7*o).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${a} 0.5s ease forwards;
}

[data-beam="${a}"][data-active]::after,
[data-beam="${a}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${z}px;
  padding: ${t}px;
  clip-path: inset(0 round ${r}px);
  background: ${W}, ${X};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${a})) calc(60px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${a})) calc(60px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${a}) * var(--beam-edge-${a}) * ${i.toFixed(2)} * var(--beam-strength, 1));
  ${y}
}

[data-beam="${a}"][data-active]::before,
[data-beam="${a}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${Y};
  box-shadow: inset 0 0 9px 1px ${d};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${a})) calc(60px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${a})) calc(60px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${a}) * var(--beam-edge-${a}) * ${s.toFixed(2)} * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${y}
}

[data-beam="${a}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${z}px;
  clip-path: inset(0 round ${r}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${a})) calc(110px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${a})) calc(110px * var(--beam-h-${a})) at calc(var(--beam-x-${a}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${H};
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${a}"][data-active] [data-beam-bloom],
[data-beam="${a}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${a}) * var(--beam-edge-${a}) * ${l.toFixed(2)} * var(--beam-strength, 1));
  ${k}
}

@keyframes beam-travel-${a} {
  0%   { --beam-x-${a}: 0.06;  --beam-w-${a}: 0.5; }
  10%  { --beam-x-${a}: 0.15;  --beam-w-${a}: 0.8; }
  20%  { --beam-x-${a}: 0.25;  --beam-w-${a}: 1.1; }
  30%  { --beam-x-${a}: 0.35;  --beam-w-${a}: 1.3; }
  40%  { --beam-x-${a}: 0.44;  --beam-w-${a}: 1.45; }
  50%  { --beam-x-${a}: 0.5;   --beam-w-${a}: 1.5; }
  60%  { --beam-x-${a}: 0.56;  --beam-w-${a}: 1.45; }
  70%  { --beam-x-${a}: 0.65;  --beam-w-${a}: 1.3; }
  80%  { --beam-x-${a}: 0.75;  --beam-w-${a}: 1.1; }
  90%  { --beam-x-${a}: 0.85;  --beam-w-${a}: 0.8; }
  100% { --beam-x-${a}: 0.94;  --beam-w-${a}: 0.5; }
}

@keyframes beam-edge-fade-${a} {
  0%    { --beam-edge-${a}: 0; }
  12.5% { --beam-edge-${a}: 0; }
  32.5% { --beam-edge-${a}: 1; }
  67.5% { --beam-edge-${a}: 1; }
  87.5% { --beam-edge-${a}: 0; }
  100%  { --beam-edge-${a}: 0; }
}

@keyframes beam-breathe-${a} {
  0%, 100% { --beam-h-${a}: 0.8; }
  25%      { --beam-h-${a}: 1.25; }
  55%      { --beam-h-${a}: 0.85; }
  80%      { --beam-h-${a}: 1.3; }
}

@keyframes beam-spike-${a} {
  0%   { --beam-spike-${a}: 0.8; }
  25%  { --beam-spike-${a}: 1.3; }
  50%  { --beam-spike-${a}: 0.9; }
  75%  { --beam-spike-${a}: 1.4; }
  100% { --beam-spike-${a}: 0.8; }
}

@keyframes beam-spike2-${a} {
  0%   { --beam-spike2-${a}: 1.2; }
  25%  { --beam-spike2-${a}: 0.7; }
  50%  { --beam-spike2-${a}: 1.4; }
  75%  { --beam-spike2-${a}: 0.8; }
  100% { --beam-spike2-${a}: 1.2; }
}

@keyframes beam-fade-in-${a} {
  to { --beam-opacity-${a}: 1; }
}

@keyframes beam-fade-out-${a} {
  from { --beam-opacity-${a}: 1; }
  to { --beam-opacity-${a}: 0; }
}
${w}
`}(e):"sm"===a?function(e){let{id:a,borderRadius:r,borderWidth:t,duration:o,strokeOpacity:i,innerOpacity:s,bloomOpacity:n,innerShadow:c,colorVariant:p,staticColors:b,brightness:f,saturation:d,hueRange:g,theme:m}=e,u=Math.max(0,r-t),x="mono"===p?.5:1,$=b?"":`animation: beam-hue-shift-${a} 12s ease-in-out infinite;`,h=b?"":`
@keyframes beam-hue-shift-${a} {
  0% { filter: hue-rotate(-${g}deg) brightness(${f.toFixed(2)}) saturate(${d.toFixed(2)}); }
  50% { filter: hue-rotate(${g}deg) brightness(${f.toFixed(2)}) saturate(${d.toFixed(2)}); }
  100% { filter: hue-rotate(-${g}deg) brightness(${f.toFixed(2)}) saturate(${d.toFixed(2)}); }
}`,z="dark"===m,v=z?`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,y=l[p].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),k=l[p].inner.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),w=z?`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`,W=`conic-gradient(
    from var(--beam-angle-${a}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;return`
@property --beam-angle-${a} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${a} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${a}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${a}"][data-active] {
  animation:
    beam-spin-${a} ${o}s linear infinite,
    beam-fade-in-${a} 0.6s ease forwards;
}

[data-beam="${a}"][data-fading] {
  animation:
    beam-spin-${a} ${o}s linear infinite,
    beam-fade-out-${a} 0.5s ease forwards;
}

[data-beam="${a}"][data-active]::after,
[data-beam="${a}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${u}px;
  padding: ${t}px;
  clip-path: inset(0 round ${r}px);
  background: ${v},${y};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${a}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${a}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${a}) * ${(i*x).toFixed(2)} * var(--beam-strength, 1));
  ${$}
}

[data-beam="${a}"][data-active]::before,
[data-beam="${a}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  clip-path: inset(0 round ${r}px);
  background: ${k};
  box-shadow: inset 0 0 5px 1px ${c};
  -webkit-mask-image: ${W};
  -webkit-mask-composite: source-over;
  mask-image: ${W};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${a}) * ${(s*x).toFixed(2)} * var(--beam-strength, 1));
  ${$}
}

[data-beam="${a}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${u}px;
  clip-path: inset(0 round ${r}px);
  background: ${w};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${t}px;
  filter: blur(8px) brightness(${f.toFixed(2)}) saturate(${d.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${a}"][data-active] [data-beam-bloom],
[data-beam="${a}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${a}) * ${(n*x).toFixed(2)} * var(--beam-strength, 1));
}

@keyframes beam-spin-${a} {
  to { --beam-angle-${a}: 360deg; }
}

@keyframes beam-fade-in-${a} {
  to { --beam-opacity-${a}: 1; }
}

@keyframes beam-fade-out-${a} {
  from { --beam-opacity-${a}: 1; }
  to { --beam-opacity-${a}: 0; }
}
${h}
`}(e):function(e){let{id:a,borderRadius:r,borderWidth:t,duration:o,strokeOpacity:i,innerOpacity:s,bloomOpacity:l,innerShadow:c,colorVariant:p,staticColors:b,brightness:f,saturation:d,hueRange:g,theme:m}=e,u=Math.max(0,r-t),x="mono"===p?.5:1,$=b?"":`animation: beam-hue-shift-${a} 12s ease-in-out infinite;`,h=b?"":`
@keyframes beam-hue-shift-${a} {
  0% { filter: hue-rotate(-${g}deg) brightness(${f.toFixed(2)}) saturate(${d.toFixed(2)}); }
  50% { filter: hue-rotate(${g}deg) brightness(${f.toFixed(2)}) saturate(${d.toFixed(2)}); }
  100% { filter: hue-rotate(-${g}deg) brightness(${f.toFixed(2)}) saturate(${d.toFixed(2)}); }
}`,z="dark"===m,v=z?`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )`:`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`,y=n[p].border.map(e=>`radial-gradient(ellipse ${e.size} at ${e.pos}, ${e.color}, transparent)`).join(`,
    `),k=function(e){let a=n[e],r="mono"===e?.225:.45;return a.border.map(e=>{let a=e.color.replace("rgb(","rgba(").replace(")",`, ${r})`);return`radial-gradient(ellipse ${e.size.split(" ").map(e=>{let a=parseInt(e);return`${Math.round(.9*a)}px`}).join(" ")} at ${e.pos}, ${a}, transparent)`}).join(`,
    `)}(p),w=z?`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )`:`conic-gradient(
        from var(--beam-angle-${a}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;return`
@property --beam-angle-${a} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${a} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${a}"] {
  position: relative;
  border-radius: ${r}px;
  overflow: hidden;
}

[data-beam="${a}"][data-active] {
  animation:
    beam-spin-${a} ${o}s linear infinite,
    beam-fade-in-${a} 0.6s ease forwards;
}

[data-beam="${a}"][data-fading] {
  animation:
    beam-spin-${a} ${o}s linear infinite,
    beam-fade-out-${a} 0.5s ease forwards;
}

[data-beam="${a}"][data-active]::after,
[data-beam="${a}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${u}px;
  padding: ${t}px;
  clip-path: inset(0 round ${r}px);
  background: ${v},${y};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${a}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${a}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${a}) * ${(i*x).toFixed(2)} * var(--beam-strength, 1));
  ${$}
}

[data-beam="${a}"][data-active]::before,
[data-beam="${a}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${r}px;
  background: ${k};
  box-shadow: inset 0 0 9px 1px ${c};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${a}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-${a}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${a}) * ${(s*x).toFixed(2)} * var(--beam-strength, 1));
  clip-path: inset(0 round ${r}px);
  ${$}
}

[data-beam="${a}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${u}px;
  clip-path: inset(0 round ${r}px);
  background: ${w};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${t}px;
  filter: blur(8px) brightness(${f.toFixed(2)}) saturate(${d.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${a}"][data-active] [data-beam-bloom],
[data-beam="${a}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${a}) * ${(l*x).toFixed(2)} * var(--beam-strength, 1));
}

@keyframes beam-spin-${a} {
  to { --beam-angle-${a}: 360deg; }
}

@keyframes beam-fade-in-${a} {
  to { --beam-opacity-${a}: 1; }
}

@keyframes beam-fade-out-${a} {
  from { --beam-opacity-${a}: 1; }
  to { --beam-opacity-${a}: 0; }
}
${h}
`}(e)})({id:O,borderRadius:T,borderWidth:A.borderWidth,duration:L,strokeOpacity:I.strokeOpacity,innerOpacity:I.innerOpacity,bloomOpacity:I.bloomOpacity,innerShadow:I.innerShadow,size:a,colorVariant:r,staticColors:V,brightness:$,saturation:D,hueRange:U,theme:N}),[O,T,A.borderWidth,L,I.strokeOpacity,I.innerOpacity,I.bloomOpacity,I.innerShadow,a,r,V,$,D,U,N]),G=(0,o.useCallback)(e=>{S.current=e,"function"==typeof H?H(e):H&&(H.current=e)},[H]),q={...k??{},"--beam-strength":Math.max(0,Math.min(1,v))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:B}),(0,t.jsxs)("div",{...Y,ref:G,"data-beam":O,"data-active":j&&!E?"":void 0,"data-fading":E?"":void 0,className:y,style:q,onAnimationEnd:P,children:[e,(0,t.jsx)("div",{"data-beam-bloom":!0})]})]})})},1953:(e,a,r)=>{r.d(a,{default:()=>o.a});var t=r(2326),o=r.n(t)},2326:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),!function(e,a){for(var r in a)Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}(a,{default:function(){return l},getImageProps:function(){return n}});let t=r(1308),o=r(1502),i=r(6926),s=t._(r(9142));function n(e){let{props:a}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(a))void 0===r&&delete a[e];return{props:a}}let l=i.Image},2975:(e,a)=>{function r(e){let{ampFirst:a=!1,hybrid:r=!1,hasQuery:t=!1}=void 0===e?{}:e;return a||r&&t}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isInAmpMode",{enumerable:!0,get:function(){return r}})},5169:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let t=r(1308)._(r(2013)),o=r(7459),i=t.default.createContext(o.imageConfigDefault)},5207:(e,a)=>{function r(e){let{widthInt:a,heightInt:r,blurWidth:t,blurHeight:o,blurDataURL:i,objectFit:s}=e,n=t?40*t:a,l=o?40*o:r,c=n&&l?"viewBox='0 0 "+n+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},6536:(e,a,r)=>{r.d(a,{C:()=>s});var t=r(2013),o=r(8010),i=r(6739),s=e=>{let{present:a,children:r}=e,s=function(e){var a,r;let[o,s]=t.useState(),l=t.useRef(null),c=t.useRef(e),p=t.useRef("none"),[b,f]=(a=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},t.useReducer((e,a)=>{let t=r[e][a];return null!=t?t:e},a));return t.useEffect(()=>{let e=n(l.current);p.current="mounted"===b?e:"none"},[b]),(0,i.N)(()=>{let a=l.current,r=c.current;if(r!==e){let t=p.current,o=n(a);e?f("MOUNT"):"none"===o||(null==a?void 0:a.display)==="none"?f("UNMOUNT"):r&&t!==o?f("ANIMATION_OUT"):f("UNMOUNT"),c.current=e}},[e,f]),(0,i.N)(()=>{if(o){var e;let a,r=null!=(e=o.ownerDocument.defaultView)?e:window,t=e=>{let t=n(l.current).includes(CSS.escape(e.animationName));if(e.target===o&&t&&(f("ANIMATION_END"),!c.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",a=r.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},i=e=>{e.target===o&&(p.current=n(l.current))};return o.addEventListener("animationstart",i),o.addEventListener("animationcancel",t),o.addEventListener("animationend",t),()=>{r.clearTimeout(a),o.removeEventListener("animationstart",i),o.removeEventListener("animationcancel",t),o.removeEventListener("animationend",t)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(b),ref:t.useCallback(e=>{l.current=e?getComputedStyle(e):null,s(e)},[])}}(a),l="function"==typeof r?r({present:s.isPresent}):t.Children.only(r),c=(0,o.s)(s.ref,function(e){var a,r;let t=null==(a=Object.getOwnPropertyDescriptor(e.props,"ref"))?void 0:a.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(o=(t=null==(r=Object.getOwnPropertyDescriptor(e,"ref"))?void 0:r.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(l));return"function"==typeof r||s.isPresent?t.cloneElement(l,{ref:c}):null};function n(e){return(null==e?void 0:e.animationName)||"none"}s.displayName="Presence"},6926:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"Image",{enumerable:!0,get:function(){return z}});let t=r(1308),o=r(473),i=r(6633),s=o._(r(2013)),n=t._(r(6320)),l=t._(r(9511)),c=r(1502),p=r(7459),b=r(5169);r(1807);let f=r(9620),d=t._(r(9142)),g=r(2189),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function u(e,a,r,t,o,i,s){let n=null==e?void 0:e.src;e&&e["data-loaded-src"]!==n&&(e["data-loaded-src"]=n,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==a&&o(!0),null==r?void 0:r.current){let a=new Event("load");Object.defineProperty(a,"target",{writable:!1,value:e});let t=!1,o=!1;r.current({...a,nativeEvent:a,currentTarget:e,target:e,isDefaultPrevented:()=>t,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{t=!0,a.preventDefault()},stopPropagation:()=>{o=!0,a.stopPropagation()}})}(null==t?void 0:t.current)&&t.current(e)}}))}function x(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let $=(0,s.forwardRef)((e,a)=>{let{src:r,srcSet:t,sizes:o,height:n,width:l,decoding:c,className:p,style:b,fetchPriority:f,placeholder:d,loading:m,unoptimized:$,fill:h,onLoadRef:z,onLoadingCompleteRef:v,setBlurComplete:y,setShowAltText:k,sizesInput:w,onLoad:W,onError:X,...Y}=e,H=(0,s.useCallback)(e=>{e&&(X&&(e.src=e.src),e.complete&&u(e,d,z,v,y,$,w))},[r,d,z,v,y,X,$,w]),O=(0,g.useMergedRef)(a,H);return(0,i.jsx)("img",{...Y,...x(f),loading:m,width:l,height:n,decoding:c,"data-nimg":h?"fill":"1",className:p,style:b,sizes:o,srcSet:t,src:r,ref:O,onLoad:e=>{u(e.currentTarget,d,z,v,y,$,w)},onError:e=>{k(!0),"empty"!==d&&y(!0),X&&X(e)}})});function h(e){let{isAppRouter:a,imgAttributes:r}=e,t={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...x(r.fetchPriority)};return a&&n.default.preload?(n.default.preload(r.src,t),null):(0,i.jsx)(l.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...t},"__nimg-"+r.src+r.srcSet+r.sizes)})}let z=(0,s.forwardRef)((e,a)=>{let r=(0,s.useContext)(f.RouterContext),t=(0,s.useContext)(b.ImageConfigContext),o=(0,s.useMemo)(()=>{var e;let a=m||t||p.imageConfigDefault,r=[...a.deviceSizes,...a.imageSizes].sort((e,a)=>e-a),o=a.deviceSizes.sort((e,a)=>e-a),i=null==(e=a.qualities)?void 0:e.sort((e,a)=>e-a);return{...a,allSizes:r,deviceSizes:o,qualities:i}},[t]),{onLoad:n,onLoadingComplete:l}=e,g=(0,s.useRef)(n);(0,s.useEffect)(()=>{g.current=n},[n]);let u=(0,s.useRef)(l);(0,s.useEffect)(()=>{u.current=l},[l]);let[x,z]=(0,s.useState)(!1),[v,y]=(0,s.useState)(!1),{props:k,meta:w}=(0,c.getImgProps)(e,{defaultLoader:d.default,imgConf:o,blurComplete:x,showAltText:v});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)($,{...k,unoptimized:w.unoptimized,placeholder:w.placeholder,fill:w.fill,onLoadRef:g,onLoadingCompleteRef:u,setBlurComplete:z,setShowAltText:y,sizesInput:e.sizes,ref:a}),w.priority?(0,i.jsx)(h,{isAppRouter:!r,imgAttributes:k}):null]})});("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},7459:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),!function(e,a){for(var r in a)Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}(a,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return t}});let r=["default","imgix","cloudinary","akamai","custom"],t={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},8824:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return s}});let t=r(2013),o=t.useLayoutEffect,i=t.useEffect;function s(e){let{headManager:a,reduceComponentsToState:r}=e;function s(){if(a&&a.mountedInstances){let o=t.Children.toArray(Array.from(a.mountedInstances).filter(Boolean));a.updateHead(r(o,e))}}return o(()=>{var r;return null==a||null==(r=a.mountedInstances)||r.add(e.children),()=>{var r;null==a||null==(r=a.mountedInstances)||r.delete(e.children)}}),o(()=>(a&&(a._pendingUpdate=s),()=>{a&&(a._pendingUpdate=s)})),i(()=>(a&&a._pendingUpdate&&(a._pendingUpdate(),a._pendingUpdate=null),()=>{a&&a._pendingUpdate&&(a._pendingUpdate(),a._pendingUpdate=null)})),null}},9142:(e,a)=>{function r(e){var a;let{config:r,src:t,width:o,quality:i}=e,s=i||(null==(a=r.qualities)?void 0:a.reduce((e,a)=>Math.abs(a-75)<Math.abs(e-75)?a:e))||75;return r.path+"?url="+encodeURIComponent(t)+"&w="+o+"&q="+s+(t.startsWith("/_next/static/media/"),"")}Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"default",{enumerable:!0,get:function(){return t}}),r.__next_img_default=!0;let t=r},9511:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),!function(e,a){for(var r in a)Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}(a,{default:function(){return m},defaultHead:function(){return b}});let t=r(1308),o=r(473),i=r(6633),s=o._(r(2013)),n=t._(r(8824)),l=r(1223),c=r(2751),p=r(2975);function b(e){void 0===e&&(e=!1);let a=[(0,i.jsx)("meta",{charSet:"utf-8"},"charset")];return e||a.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),a}function f(e,a){return"string"==typeof a||"number"==typeof a?e:a.type===s.default.Fragment?e.concat(s.default.Children.toArray(a.props.children).reduce((e,a)=>"string"==typeof a||"number"==typeof a?e:e.concat(a),[])):e.concat(a)}r(1807);let d=["name","httpEquiv","charSet","itemProp"];function g(e,a){let{inAmpMode:r}=a;return e.reduce(f,[]).reverse().concat(b(r).reverse()).filter(function(){let e=new Set,a=new Set,r=new Set,t={};return o=>{let i=!0,s=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){s=!0;let a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":a.has(o.type)?i=!1:a.add(o.type);break;case"meta":for(let e=0,a=d.length;e<a;e++){let a=d[e];if(o.props.hasOwnProperty(a))if("charSet"===a)r.has(a)?i=!1:r.add(a);else{let e=o.props[a],r=t[a]||new Set;("name"!==a||!s)&&r.has(e)?i=!1:(r.add(e),t[a]=r)}}}return i}}()).reverse().map((e,a)=>{let r=e.key||a;return s.default.cloneElement(e,{key:r})})}let m=function(e){let{children:a}=e,r=(0,s.useContext)(l.AmpStateContext),t=(0,s.useContext)(c.HeadManagerContext);return(0,i.jsx)(n.default,{reduceComponentsToState:g,headManager:t,inAmpMode:(0,p.isInAmpMode)(r),children:a})};("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},9620:(e,a,r)=>{Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"RouterContext",{enumerable:!0,get:function(){return t}});let t=r(1308)._(r(2013)).default.createContext(null)}}]);