"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[863],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3715:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={sidebar_position:3},l="GPU Support",c={unversionedId:"getting-started/gpu",id:"getting-started/gpu",title:"GPU Support",description:"Bacalhau supports GPU workloads.",source:"@site/docs/getting-started/gpu.md",sourceDirName:"getting-started",slug:"/getting-started/gpu",permalink:"/getting-started/gpu",editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/gpu.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Onboard Your Workload",permalink:"/getting-started/workload-onboarding"},next:{title:"Development",permalink:"/getting-started/development"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Limitations",id:"limitations",children:[],level:2}],s={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gpu-support"},"GPU Support"),(0,o.kt)("p",null,"Bacalhau supports GPU workloads."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Bacalhau network must have an executor node with a GPU exposed"),(0,o.kt)("li",{parentName:"ul"},"Your container must include the CUDA runtime (cudart) and must be compatible with the CUDA version running on the node")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To submit a job request use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--gpu")," flag under the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," command to select the number of GPUs your job requires. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run --gpu=1 nvidia/cuda:11.0.3-base-ubuntu20.04 nvidia-smi\n")),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"The following limitations currently exist within Bacalhau. Bacalhau supports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NVIDIA GPUs only"),(0,o.kt)("li",{parentName:"ul"},"a single GPU only"),(0,o.kt)("li",{parentName:"ul"},"the Docker executor only")))}d.isMDXComponent=!0}}]);