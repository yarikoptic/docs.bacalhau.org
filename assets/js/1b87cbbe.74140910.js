"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[5667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"Python - Hello World",sidebar_position:1,description:"How to run a Python file hosted on Bacalhau"},l="Python Hello World",i={unversionedId:"examples/workload-onboarding/trivial-python/index",id:"examples/workload-onboarding/trivial-python/index",title:"Python Hello World",description:"How to run a Python file hosted on Bacalhau",source:"@site/docs/examples/workload-onboarding/trivial-python/index.md",sourceDirName:"examples/workload-onboarding/trivial-python",slug:"/examples/workload-onboarding/trivial-python/",permalink:"/examples/workload-onboarding/trivial-python/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/trivial-python/index.md",tags:[],version:"current",lastUpdatedAt:1674520418,formattedLastUpdatedAt:"Jan 24, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Python - Hello World",sidebar_position:1,description:"How to run a Python file hosted on Bacalhau"},sidebar:"documentationSidebar",previous:{title:"How To's",permalink:"/examples/workload-onboarding/"},next:{title:"Sparkov-Data-Generation",permalink:"/examples/workload-onboarding/Sparkov-Data-Generation/"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hello, world",id:"hello-world",level:2},{value:"Submit the workload",id:"submit-the-workload",level:2},{value:"Get Results",id:"get-results",level:2},{value:"Need Support?",id:"need-support",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"python-hello-world"},"Python Hello World"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/trivial-python/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/trivial-python/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("p",null,"This example serves as an introduction to Bacalhau. Here, you'll be running a Python file hosted on a website on Bacalhau."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can run this code on your command line interface (CLI), or you can use the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/trivial-python/index.ipynb"},"Google Colab"))," or ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/trivial-python/index.ipynb"},"Binder"))," notebooks provided at the top of this example to test the code.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/getting-started/installation"},"Install the Bacalhau client"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are running this as a notebook the hidden cell below will install the Bacalhau client.")),(0,o.kt)("h2",{id:"hello-world"},"Hello, world"),(0,o.kt)("p",null,"For this example, we'll be using a very simple Python script which displays the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"},"traditional first greeting"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%cat hello-world.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'print("Hello, world!")\n')),(0,o.kt)("h2",{id:"submit-the-workload"},"Submit the workload"),(0,o.kt)("p",null,"To submit a workload to Bacalhau you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command. While you'll mainly be passing input data into the container using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/multiformats/cid"},"content identifier (CID)")," volumes, we will be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-u URL:path")," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/all-flags#docker-run"},"argument")," for simplicity. This results in Bacalhau mounting a ",(0,o.kt)("em",{parentName:"p"},"data volume")," inside the container. By default, Bacalhau mounts the input volume at the path ",(0,o.kt)("inlineCode",{parentName:"p"},"/inputs")," inside the container."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/blob/v0.2.3/cmd/bacalhau/docker_run.go#L64"},"Bacalhau overwrites the default entrypoint"),", so we must run the full command after the ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," argument.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run \\\n  --id-only \\\n  --input-urls https://raw.githubusercontent.com/bacalhau-project/examples/151eebe895151edd83468e3d8b546612bf96cd05/workload-onboarding/trivial-python/hello-world.py \\\n  python:3.10-slim -- python3 /inputs/hello-world.py\n")),(0,o.kt)("h2",{id:"get-results"},"Get Results"),(0,o.kt)("p",null,"After the job has finished processing, the next step is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," verb to download your outputs locally. "),(0,o.kt)("p",null,"You can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau get")," directly as shown below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"env: JOB_ID=c2f245d6-43a6-43ec-9a3b-7ce9b6242c88\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau describe ${JOB_ID}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'APIVersion: V1beta1\nMetadata:\n  ClientID: 77cf46c04f88ffb1c3e0e4b6e443724e8d2d87074d088ef1a6294a448fa85d2e\n  CreatedAt: "2023-01-20T13:24:59.165644684Z"\n  ID: c2f245d6-43a6-43ec-9a3b-7ce9b6242c88\nSpec:\n  Deal:\n    Concurrency: 1\n  Docker:\n    Entrypoint:\n    - python3\n    - /inputs/hello-world.py\n    Image: python:3.10-slim\n  Engine: Docker\n  ExecutionPlan:\n    ShardsTotal: 1\n  Language:\n    JobContext: {}\n  Publisher: Estuary\n  Resources:\n    GPU: ""\n  Sharding:\n    BatchSize: 1\n    GlobPatternBasePath: /inputs\n  Timeout: 1800\n  Verifier: Noop\n  Wasm: {}\n  inputs:\n  - StorageSource: URLDownload\n    URL: https://raw.githubusercontent.com/bacalhau-project/examples/151eebe895151edd83468e3d8b546612bf96cd05/workload-onboarding/trivial-python/hello-world.py\n    path: /inputs\n  outputs:\n  - Name: outputs\n    StorageSource: IPFS\n    path: /outputs\nStatus:\n  JobState:\n    Nodes:\n      QmUDAXvv31WPZ8U9CzuRTMn9iFGiopGE7rHiah1X8a6PkT:\n        Shards:\n          "0":\n            NodeId: QmUDAXvv31WPZ8U9CzuRTMn9iFGiopGE7rHiah1X8a6PkT\n            PublishedResults: {}\n            State: Cancelled\n            VerificationResult: {}\n      QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG:\n        Shards:\n          "0":\n            NodeId: QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG\n            PublishedResults: {}\n            State: Cancelled\n            VerificationResult: {}\n      QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF:\n        Shards:\n          "0":\n            NodeId: QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF\n            PublishedResults: {}\n            State: Cancelled\n            VerificationResult: {}\n      QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3:\n        Shards:\n          "0":\n            NodeId: QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3\n            PublishedResults: {}\n            State: Cancelled\n            VerificationResult: {}\n      QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL:\n        Shards:\n          "0":\n            NodeId: QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL\n            PublishedResults:\n              CID: QmehTNF6ogbESt26EgrSw9YGrApneSWhPesqw1A5T6ezBe\n              Name: job-c2f245d6-43a6-43ec-9a3b-7ce9b6242c88-shard-0-host-QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL\n              StorageSource: IPFS\n            RunOutput:\n              exitCode: 0\n              runnerError: ""\n              stderr: ""\n              stderrtruncated: false\n              stdout: |\n                Hello, world!\n              stdouttruncated: false\n            State: Completed\n            VerificationResult:\n              Complete: true\n              Result: true\n  Requester:\n    RequesterNodeID: QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL\n    RequesterPublicKey: CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDVRKPgCfY2fgfrkHkFjeWcqno+MDpmp8DgVaY672BqJl/dZFNU9lBg2P8Znh8OTtHPPBUBk566vU3KchjW7m3uK4OudXrYEfSfEPnCGmL6GuLiZjLf+eXGEez7qPaoYqo06gD8ROdD8VVse27E96LlrpD1xKshHhqQTxKoq1y6Rx4DpbkSt966BumovWJ70w+Nt9ZkPPydRCxVnyWS1khECFQxp5Ep3NbbKtxHNX5HeULzXN5q0EQO39UN6iBhiI34eZkH7PoAm3Vk5xns//FjTAvQw6wZUu8LwvZTaihs+upx2zZysq6CEBKoeNZqed9+Tf+qHow0P5pxmiu+or+DAgMBAAE=\n')),(0,o.kt)("p",null,"Alternatively, you can create a directory that will store our job outputs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir results\nbacalhau get ${JOB_ID} --output-dir results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Fetching results of job 'c2f245d6-43a6-43ec-9a3b-7ce9b6242c88'...\nResults for job 'c2f245d6-43a6-43ec-9a3b-7ce9b6242c88' have been written to...\nresults\n\n\n2023/01/20 13:25:06 CleanupManager.fnsMutex violation CRITICAL section took 43.424ms 43424000 (threshold 10ms)\n")),(0,o.kt)("p",null,"At this point, the outputs will be downloaded locally. Each job creates 3 sub_folders: the ",(0,o.kt)("em",{parentName:"p"},"combined_results"),", ",(0,o.kt)("em",{parentName:"p"},"per_shard")," files, and the ",(0,o.kt)("em",{parentName:"p"},"raw")," directory. In each of this sub_folders, you'll find the ",(0,o.kt)("em",{parentName:"p"},"stdout")," and ",(0,o.kt)("em",{parentName:"p"},"stderr")),(0,o.kt)("p",null,"For the scope this of this guide, we will only look at the ",(0,o.kt)("strong",{parentName:"p"},"stdout")," file. You can go directly to the file folder to inspect the content of the file or use the code belolow"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\ncat results/combined_results/stdout\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hello, world!\n")),(0,o.kt)("h2",{id:"need-support"},"Need Support?"),(0,o.kt)("p",null,"If have questions or need support or guidance, please reach out to the ",(0,o.kt)("a",{parentName:"p",href:"https://filecoin.io/slack"},"Bacalhau team via Slack (#bacalhau channel)")))}d.isMDXComponent=!0}}]);