"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[7419],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),h=o,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||r;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8403:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"From A URL",sidebar_position:1},l="Copy Data from a URL to a Public Storage",i={unversionedId:"examples/data-ingestion/from-url/index",id:"examples/data-ingestion/from-url/index",title:"Copy Data from a URL to a Public Storage",description:"Open In Colab",source:"@site/docs/examples/data-ingestion/from-url/index.md",sourceDirName:"examples/data-ingestion/from-url",slug:"/examples/data-ingestion/from-url/",permalink:"/examples/data-ingestion/from-url/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-ingestion/from-url/index.md",tags:[],version:"current",lastUpdatedAt:1679060195,formattedLastUpdatedAt:"Mar 17, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"From A URL",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Data Ingestion",permalink:"/examples/data-ingestion/"},next:{title:"Pinning to Filecoin",permalink:"/examples/data-ingestion/pinning/"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Get the CID From the Completed Job",id:"get-the-cid-from-the-completed-job",level:3},{value:"Use the CID in a New Bacalhau Job",id:"use-the-cid-in-a-new-bacalhau-job",level:3},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Need Support?",id:"need-support",level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"copy-data-from-a-url-to-a-public-storage"},"Copy Data from a URL to a Public Storage"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-ingestion/from-url/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-ingestion/from-url/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("p",null,"In this example tutorial, we will show how to use Bacalhau to copy data from a URL to public storage for use with Bacalhau. "),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To get started, you need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the Bacalhau client, see more information ",(0,o.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/getting-started/installation"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"Any public URL")),(0,o.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,o.kt)("p",null,"To upload a file from a URL we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n    --id-only \\\n    --wait \\\n    --input-urls=https://raw.githubusercontent.com/filecoin-project/bacalhau/main/README.md \\\n    ghcr.io/bacalhau-project/examples/upload:v1\n")),(0,o.kt)("p",null,"The job has been submitted and Bacalhau has printed out the related job id. We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command takes advantage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--input-urls")," parameter. This will download a file from a public URL and place it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/inputs")," directory of the container (by default). Then we will use a helper container to move that data to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/outputs")," directory so that it is published to Filecoin via Estuary."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can find out more about the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/examples/tree/main/tools/upload"},"helper container in the examples repository"),".")),(0,o.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list $JOB_ID --output=json | jq '.[0].Status.JobState.Nodes[] | .Shards.\"0\" | select(.RunOutput)'\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("p",null,"All Bacalhau jobs are published to a Filecoin contract via Estuary. All data that is located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/outputs")," directory is published."),(0,o.kt)("h3",{id:"get-the-cid-from-the-completed-job"},"Get the CID From the Completed Job"),(0,o.kt)("p",null,"The job will upload the CID to the Filecoin network via Estuary. Let's get the CID from the output."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out cid\nbacalhau list $JOB_ID --output=json | jq -r '.[0].Status.JobState.Nodes[] | .Shards.\"0\".PublishedResults | select(.CID) | .CID'\n")),(0,o.kt)("p",null,"We will store the ",(0,o.kt)("em",{parentName:"p"},"cid")," that in an environment variable so that we can reuse it later on."),(0,o.kt)("h3",{id:"use-the-cid-in-a-new-bacalhau-job"},"Use the CID in a New Bacalhau Job"),(0,o.kt)("p",null,"Now that we have the CID, we can use it in a new job. This time we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--inputs")," parameter to tell Bacalhau to use the CID we just uploaded."),(0,o.kt)("p",null,'In this case, our "job" is just to list the contents of the ',(0,o.kt)("inlineCode",{parentName:"p"},"/inputs"),' directory. You can see that the "input" data is located under ',(0,o.kt)("inlineCode",{parentName:"p"},"/inputs/outputs/README.md"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash --out job_id\nbacalhau docker run \\\n    --id-only \\\n    --wait \\\n    --inputs=$CID \\\n    ubuntu -- \\\n    bash -c "set -x; ls -l /inputs; ls -l /inputs/outputs; cat /inputs/outputs/README.md"\n')),(0,o.kt)("p",null,"The job has been submitted and Bacalhau has printed out the related job id. We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Job download"),": You can download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir ./results\nbacalhau get --output-dir ./results $JOB_ID \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Fetching results of job '37e3c424-072a-4ea5-bc3a-76909dce17ee'...\nResults for job '37e3c424-072a-4ea5-bc3a-76909dce17ee' have been written to...\n./results\n\n\n2023/01/12 13:45:45 CleanupManager.fnsMutex violation CRITICAL section took 22.714ms 22714000 (threshold 10ms)\n")),(0,o.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,o.kt)("p",null,"Each job creates 3 subfolders: the ",(0,o.kt)("strong",{parentName:"p"},"combined_results"),", ",(0,o.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,o.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nhead -n 15 ./results/combined_results/stdout\n")),(0,o.kt)("h2",{id:"need-support"},"Need Support?"),(0,o.kt)("p",null,"For questions, feedback, please reach out in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/discussions"},"forum")))}c.isMDXComponent=!0}}]);