"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,l(l({ref:t},i),{},{components:n})):a.createElement(m,l({ref:t},i))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"R - Facebook Prophet - Custom Container",sidebar_position:51},l="Building and Running your Custom R Containers on Bacalhau",p={unversionedId:"examples/workload-onboarding/r-custom-docker-prophet/index",id:"examples/workload-onboarding/r-custom-docker-prophet/index",title:"Building and Running your Custom R Containers on Bacalhau",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/r-custom-docker-prophet/index.md",sourceDirName:"examples/workload-onboarding/r-custom-docker-prophet",slug:"/examples/workload-onboarding/r-custom-docker-prophet/",permalink:"/examples/workload-onboarding/r-custom-docker-prophet/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/r-custom-docker-prophet/index.md",tags:[],version:"current",lastUpdatedBy:"Favour Kelvin",lastUpdatedAt:1674519922,formattedLastUpdatedAt:"Jan 24, 2023",sidebarPosition:51,frontMatter:{sidebar_label:"R - Facebook Prophet - Custom Container",sidebar_position:51},sidebar:"documentationSidebar",previous:{title:"R - Hello World",permalink:"/examples/workload-onboarding/r-hello-world/"},next:{title:"Scripting Bacalhau with Python",permalink:"/examples/workload-onboarding/python-script/"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Running Prophet in R Locally",id:"1-running-prophet-in-r-locally",level:2},{value:"2. Running R Prophet on Bacalhau",id:"2-running-r-prophet-on-bacalhau",level:2},{value:"Dockerfile",id:"dockerfile",level:3},{value:"Fitting a Prophet Model on Bacalhau",id:"fitting-a-prophet-model-on-bacalhau",level:3}],i={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-and-running-your-custom-r-containers-on-bacalhau"},"Building and Running your Custom R Containers on Bacalhau"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/r-custom-docker-prophet/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/r-custom-docker-prophet/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This example will walk you through building Time Series Forecasting using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/prophet"},"Prophet"),"."),(0,o.kt)("p",null,"Prophet is a forecasting procedure implemented in R and Python. It is fast and provides completely automated forecasts that can be tuned by hand by data scientists and analysts."),(0,o.kt)("h3",{id:"tldr"},"TL;DR"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'bacalhau docker run -v QmY8BAftd48wWRYDf5XnZGkhwqgjpzjyUG3hN1se6SYaFt:/example_wp_log_R.csv ghcr.io/bacalhau-project/examples/r-prophet:0.0.2 -- Rscript Saturating-Forecasts.R "/example_wp_log_R.csv" "/outputs/output0.pdf" "/outputs/output1.pdf"\n')),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A working R environment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/getting-started/installation"},"Bacalhau"))),(0,o.kt)("h2",{id:"1-running-prophet-in-r-locally"},"1. Running Prophet in R Locally"),(0,o.kt)("p",null,"Open R studio or R supported IDE. If you want to run this on a notebook server, then make sure you use an R kernel."),(0,o.kt)("p",null,"Prophet is a CRAN package so you can use install.packages to install the prophet package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"R -e \"install.packages('prophet',dependencies=TRUE, repos='http://cran.rstudio.com/')\"\n")),(0,o.kt)("p",null,"After installation is finished, you can download the example data that is stored in IPFS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://w3s.link/ipfs/QmZiwZz7fXAvQANKYnt7ya838VPpj4agJt5EDvRYp3Deeo/example_wp_log_R.csv\n")),(0,o.kt)("p",null,"The code below instantiates the library and fits a model to the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p outputs\nmkdir -p R\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile Saturating-Forecasts.R\nlibrary(\'prophet\')\n\nargs = commandArgs(trailingOnly=TRUE)\nargs\n\ninput = args[1]\noutput = args[2]\noutput1 = args[3]\n\n\nI <- paste("", input, sep ="")\n\nO <- paste("", output, sep ="")\n\nO1 <- paste("", output1 ,sep ="")\n\n\ndf <- read.csv(I)\n\ndf$cap <- 8.5\nm <- prophet(df, growth = \'logistic\')\n\nfuture <- make_future_dataframe(m, periods = 1826)\nfuture$cap <- 8.5\nfcst <- predict(m, future)\npdf(O)\nplot(m, fcst)\ndev.off()\n\ndf$y <- 10 - df$y\ndf$cap <- 6\ndf$floor <- 1.5\nfuture$cap <- 6\nfuture$floor <- 1.5\nm <- prophet(df, growth = \'logistic\')\nfcst <- predict(m, future)\npdf(O1)\nplot(m, fcst)\ndev.off()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Writing Saturating-Forecasts.R\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Rscript Saturating-Forecasts.R "example_wp_log_R.csv" "outputs/output0.pdf" "outputs/output1.pdf"\n')),(0,o.kt)("h2",{id:"2-running-r-prophet-on-bacalhau"},"2. Running R Prophet on Bacalhau"),(0,o.kt)("p",null,"To use Bacalhau, you need to package your code in an appropriate format. The developers have already pushed a container for you to use, but if you want to build your own, you can follow the steps below. You can view a ",(0,o.kt)("a",{parentName:"p",href:"/examples/workload-onboarding/custom-containers/"},"dedicated container example")," in the documentation."),(0,o.kt)("h3",{id:"dockerfile"},"Dockerfile"),(0,o.kt)("p",null,"In this step, you will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to create an image. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is a text document that contains the commands used to assemble the image. First, create the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FROM r-base\nRUN R -e \"install.packages('prophet',dependencies=TRUE, repos='http://cran.rstudio.com/')\"\nRUN mkdir /R\nRUN mkdir /outputs\nCOPY Saturating-Forecasts.R R\nWORKDIR /R\n")),(0,o.kt)("p",null,"Next, add your desired configuration to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". These commands specify how the image will be built, and what extra requirements will be included. We use r-base as the base image, and then install the prophet package. We then copy the R script into the container and set the working directory to the R folder."),(0,o.kt)("p",null,"We've already pushed this image to GHCR, but for posterity, you'd use a command like this to update it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker buildx build --platform linux/amd64 --push -t ghcr.io/bacalhau-project/examples/r-prophet:0.0.1 .\n")),(0,o.kt)("p",null,"After you have built the container successfully, the next step is to test it locally and then push it docker hub"),(0,o.kt)("h3",{id:"fitting-a-prophet-model-on-bacalhau"},"Fitting a Prophet Model on Bacalhau"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.bacalhau.org/"},"Bacalhau")," is a distributed computing platform that allows you to run jobs on a network of computers. It is designed to be easy to use and to run on a variety of hardware. In this example, we will use it to run the Prophet library to generate a model on a CPU."),(0,o.kt)("p",null,"To submit a job, you can use the Bacalhau CLI. The following command passes a prompt to the model and generates the results in the outputs directory. It takes approximately 2 minutes to run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'bacalhau docker run \\\n    --wait \\\n    --id-only \\\n    -v QmY8BAftd48wWRYDf5XnZGkhwqgjpzjyUG3hN1se6SYaFt:/example_wp_log_R.csv \\\n    ghcr.io/bacalhau-project/examples/r-prophet:0.0.2 \\\n    -- Rscript Saturating-Forecasts.R "/example_wp_log_R.csv" "/outputs/output0.pdf" "/outputs/output1.pdf"\n')),(0,o.kt)("p",null,"Running the commands will output a UUID that represents the job that was created. You can check the status of the job with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter ${JOB_ID}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 15:10:22 \x1b[0m\x1b[97;40m 0316d0c2 \x1b[0m\x1b[97;40m Docker jsace/r-proph... \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmYwR3uaSnhLpE... \x1b[0m\n")),(0,o.kt)("p",null,'Where it says "',(0,o.kt)("inlineCode",{parentName:"p"},"Completed "),'", that means the job is done, and we can get the results.'),(0,o.kt)("p",null,"To find out more information about your job, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau describe ${JOB_ID}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'APIVersion: V1alpha1\nClientID: 77cf46c04f88ffb1c3e0e4b6e443724e8d2d87074d088ef1a6294a448fa85d2e\nCreatedAt: "2022-11-11T15:10:22.177011613Z"\nDeal:\n  Concurrency: 1\nExecutionPlan:\n  ShardsTotal: 1\nID: 0316d0c2-162d-4c57-9c10-391c908f981d\nJobState:\n  Nodes:\n    QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3:\n      Shards:\n        "0":\n          NodeId: QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3\n          PublishedResults: {}\n          State: Cancelled\n          VerificationResult: {}\n    QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL:\n      Shards:\n        "0":\n          NodeId: QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL\n          PublishedResults:\n            CID: QmYwR3uaSnhLpEZYDdUGXQMVCuCmsd8Rc4LHsuHL6pSUz3\n            Name: job-0316d0c2-162d-4c57-9c10-391c908f981d-shard-0-host-QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL\n            StorageSource: IPFS\n          RunOutput:\n            exitCode: 0\n            runnerError: ""\n            stderr: |-\n              Loading required package: Rcpp\n              Loading required package: rlang\n              Disabling daily seasonality. Run prophet with daily.seasonality=TRUE to override this.\n              Disabling daily seasonality. Run prophet with daily.seasonality=TRUE to override this.\n            stderrtruncated: false\n            stdout: "[1] \\"example_wp_log_R.csv\\" \\"outputs/output0.pdf\\"  \\"outputs/output1.pdf\\"\n              \\nnull device \\n          1 \\nnull device \\n          1"\n            stdouttruncated: false\n          State: Completed\n          Status: \'Got results proposal of length: 0\'\n          VerificationResult:\n            Complete: true\n            Result: true\nRequesterNodeID: QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL\nRequesterPublicKey: CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDVRKPgCfY2fgfrkHkFjeWcqno+MDpmp8DgVaY672BqJl/dZFNU9lBg2P8Znh8OTtHPPBUBk566vU3KchjW7m3uK4OudXrYEfSfEPnCGmL6GuLiZjLf+eXGEez7qPaoYqo06gD8ROdD8VVse27E96LlrpD1xKshHhqQTxKoq1y6Rx4DpbkSt966BumovWJ70w+Nt9ZkPPydRCxVnyWS1khECFQxp5Ep3NbbKtxHNX5HeULzXN5q0EQO39UN6iBhiI34eZkH7PoAm3Vk5xns//FjTAvQw6wZUu8LwvZTaihs+upx2zZysq6CEBKoeNZqed9+Tf+qHow0P5pxmiu+or+DAgMBAAE=\nSpec:\n  Docker:\n    Entrypoint:\n    - Rscript\n    - Saturating-Forecasts.R\n    - example_wp_log_R.csv\n    - outputs/output0.pdf\n    - outputs/output1.pdf\n    Image: jsace/r-prophet\n  Engine: Docker\n  Language:\n    JobContext: {}\n  Publisher: Estuary\n  Resources:\n    GPU: ""\n  Sharding:\n    BatchSize: 1\n    GlobPatternBasePath: /inputs\n  Verifier: Noop\n  Wasm: {}\n  inputs:\n  - CID: QmY8BAftd48wWRYDf5XnZGkhwqgjpzjyUG3hN1se6SYaFt\n    StorageSource: IPFS\n    path: /example_wp_log_R.csv\n  outputs:\n  - Name: outputs\n    StorageSource: IPFS\n    path: /outputs\n')),(0,o.kt)("p",null,"If you see that the job has completed and there are no errors, then you can download the results with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Fetching results of job '0316d0c2-162d-4c57-9c10-391c908f981d'...\nResults for job '0316d0c2-162d-4c57-9c10-391c908f981d' have been written to...\nresults\n")),(0,o.kt)("p",null,"After the download has finished you should\nsee the following contents in results directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls results/combined_results/outputs\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"output0.pdf\noutput1.pdf\n")),(0,o.kt)("p",null,"You can't natively display PDFs in notebooks, so here are some static images of the PDFS:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"output0.pdf")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9674).Z,width:"636",height:"415"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"output1.pdf")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7797).Z,width:"639",height:"403"})))}c.isMDXComponent=!0},9674:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/output0-fdc7e804b877fa7fd4b27a98ff3336a2.png"},7797:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/output1-2025ba5cc748c5aa201d469653199e7e.png"}}]);