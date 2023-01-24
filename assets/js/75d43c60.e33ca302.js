"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Test Network Locally",sidebar_position:155},l="Test Network Locally",c={unversionedId:"running-node/test-network",id:"running-node/test-network",title:"Test Network Locally",description:"Before you join the main Bacalhau network, you can test locally.",source:"@site/docs/running-node/test-network.md",sourceDirName:"running-node",slug:"/running-node/test-network",permalink:"/running-node/test-network",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/test-network.md",tags:[],version:"current",lastUpdatedBy:"Favour Kelvin",lastUpdatedAt:1674519922,formattedLastUpdatedAt:"Jan 24, 2023",sidebarPosition:155,frontMatter:{sidebar_label:"Test Network Locally",sidebar_position:155},sidebar:"documentationSidebar",previous:{title:"Resource Limits",permalink:"/running-node/resource-limits"},next:{title:"GPU Support",permalink:"/running-node/gpu"}},i={},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test-network-locally"},"Test Network Locally"),(0,a.kt)("p",null,"Before you join the main Bacalhau network, you can test locally."),(0,a.kt)("p",null,"To test, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau devstack")," command, which offers a way to get a 3 node cluster running locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export PREDICTABLE_API_PORT=1\nbacalhau devstack\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"By settings ",(0,a.kt)("inlineCode",{parentName:"p"},"PREDICTABLE_API_PORT=1")," , the first node of our 3 node cluster will always listen on port ",(0,a.kt)("strong",{parentName:"p"},"20000"))),(0,a.kt)("p",null,"In another window, export the following environment variables so that the Bacalhau client binary connects to our local development cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export BACALHAU_API_HOST=127.0.0.1\nexport BACALHAU_API_PORT=20000\n")),(0,a.kt)("p",null,"You can now interact with Bacalhau - all jobs are running by the local devstack cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run ubuntu echo hello\nbacalhau list\n")))}p.isMDXComponent=!0}}]);