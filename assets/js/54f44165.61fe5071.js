"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(a),d=o,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"Installation",sidebar_position:1},l="Getting Started with Bacalhau",i={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Getting Started with Bacalhau",description:"In this tutorial, you'll learn how to install and run a job with the Bacalhau client.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/installation.md",tags:[],version:"current",lastUpdatedAt:1674520418,formattedLastUpdatedAt:"Jan 24, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Installation",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Landscape",permalink:"/about-bacalhau/compute-landscape"},next:{title:"Onboard Docker Workload",permalink:"/getting-started/docker-workload-onboarding"}},s={},u=[{value:"Install the Bacalhau client",id:"install-the-bacalhau-client",level:2},{value:"Submit a &quot;Hello World&quot; job",id:"submit-a-hello-world-job",level:2},{value:"Get results",id:"get-results",level:2},{value:"Where to go next?",id:"where-to-go-next",level:2},{value:"Need Support?",id:"need-support",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-bacalhau"},"Getting Started with Bacalhau"),(0,o.kt)("p",null,"In this tutorial, you'll learn how to install and run a job with the Bacalhau client. "),(0,o.kt)("h2",{id:"install-the-bacalhau-client"},"Install the Bacalhau client"),(0,o.kt)("p",null,"You can install or update the Bacalhau CLI by running the following command in a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Windows users can download the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/releases/latest"},"latest release tarball from Github")," and extract ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau.exe")," to anywhere that is on the PATH.")),(0,o.kt)("p",null,"Once your Bacalhau client is installed, it will show the client and server version. Your client and server versions must be aligned before you can run a job with Bacalhau client. You can use the code below to check this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u276f bacalhau version\n\nClient Version: v0.x.y\nServer Version: v0.x.y\n")),(0,o.kt)("p",null,"If you're wondering which server is being used, the Bacalhau Project has a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/#our-vision"},"public Bacalhau server network")," that's shared with the community. This server allows you to launch your jobs from your computer without maintaining a compute cluster on your own."),(0,o.kt)("p",null,"Going further, we will look at some commands to run a simple job. For a complete overview of the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau")," commands, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"../all-flags"},"CLI Reference page"),"."),(0,o.kt)("h2",{id:"submit-a-hello-world-job"},'Submit a "Hello World" job'),(0,o.kt)("p",null,"The easiest way to submit a job is using the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run")," verb. Let's take a quick look at its syntax: "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run [FLAGS] IMAGE[:TAG] [COMMAND]")," "),(0,o.kt)("p",null,"While the command is designed to resemble Docker's run command which you may be familiar with, Bacalhau introduces a whole new set of ",(0,o.kt)("a",{parentName:"p",href:"../all-flags#docker-run"},"available flags (see CLI Reference)")," to support its computing model."),(0,o.kt)("p",null,"The code snippet below submits a job that runs an ",(0,o.kt)("inlineCode",{parentName:"p"},"echo")," program within an ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/ubuntu"},"Ubuntu container"),". When a job is sumbitted, Bacalhau prints out the related job id:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-zsh"},"\u276f bacalhau docker run ubuntu echo Hello World\n\nJob successfully submitted. Job ID: 3b39baee-5714-4f17-aa71-1f5824665ad6\nChecking job status...\n")),(0,o.kt)("p",null,"The job id above is shown in its full form. For convenience, you can use the shortened version, in this case: ",(0,o.kt)("inlineCode",{parentName:"p"},"3b39baee"),". We will store that portion of the job id in an environment variable so that we can reuse it later on."),(0,o.kt)("p",null,"After the above command is run, a job is submitted to the public network, which processes the job as described in the ",(0,o.kt)("a",{parentName:"p",href:"../about-bacalhau/architecture#job-lifecycle"},"Job Lifecycle page"),". To check the current job's state, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," verb as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u276f export JOB_ID=3b39baee # make sure to use the right job id from the docker run command\n\n\u276f bacalhau list --id-filter=${JOB_ID}\n\n CREATED   ID        JOB                      STATE      VERIFIED  PUBLISHED\n 07:20:32  3b39baee  Docker ubuntu echo H...  Published            /ipfs/bafybeidu4zm6w...\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Replace with your own generated ",(0,o.kt)("inlineCode",{parentName:"p"},"JOB-ID"))),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Published/Completed")," state indicates the job has completed successfully and the results are stored in the IPFS location under the ",(0,o.kt)("inlineCode",{parentName:"p"},"PUBLISHED")," column.  "),(0,o.kt)("p",null,"For a comprehensive list of flags you can pass to the list command check out ",(0,o.kt)("a",{parentName:"p",href:"../all-flags#list"},"the related CLI Reference page"),"."),(0,o.kt)("h2",{id:"get-results"},"Get results"),(0,o.kt)("p",null,"After the job has finished processing, its outputs are stored on IPFS. To download outputs locally."),(0,o.kt)("p",null,"First, we'll create a directory that will store our job outputs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u276f mkdir -p /tmp/myfolder\n\u276f cd /tmp/myfolder\n")),(0,o.kt)("p",null,"Next, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," verb to download the job outputs into the current directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u276f bacalhau get ${JOB_ID}\n\n15:44:12.278 | INF bacalhau/get.go:67 > Fetching results of job '3b39baee'...\n15:44:18.463 | INF ipfs/downloader.go:115 > Found 1 result shards, downloading to temporary folder.\n15:44:21.17 | INF ipfs/downloader.go:195 > Combining shard from output volume 'outputs' to final location: '/tmp/myfolder'\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This command prints out a number of verbose logs- these are meant for Bacalhau developers. You can safely ignore them, per ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/issues/614"},"issue #614"),")")),(0,o.kt)("p",null,"At this point, the outputs have been downloaded locally and we are ready to inspect them. Each job creates 3 subfolders: the ",(0,o.kt)("em",{parentName:"p"},"combined_results"),", ",(0,o.kt)("em",{parentName:"p"},"per_shard")," files, and the ",(0,o.kt)("em",{parentName:"p"},"raw")," directory. In each of these sub_folders, you'll find the ",(0,o.kt)("em",{parentName:"p"},"stdout")," and ",(0,o.kt)("em",{parentName:"p"},"stderr")," file."),(0,o.kt)("p",null,"For the scope this of this guide, we will only look at the ",(0,o.kt)("strong",{parentName:"p"},"stdout")," file. To inspect the content of the file, use the code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u276f cat /tmp/myfolder/job-id/combined_results/stdout\n\nHello World\n")),(0,o.kt)("p",null,"With that, you have just sucessfully run a job on the Bacalhau network! \ud83d\udc1f"),(0,o.kt)("h2",{id:"where-to-go-next"},"Where to go next?"),(0,o.kt)("p",null,"Here are a few resources that provides a deeper dive into running jobs with Bacalhau: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/getting-started/docker-workload-onboarding"},"How to run an existing workload on Bacalhau")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/examples/data-engineering/image-processing/"},"Walk through a more data intensive demo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/all-flags"},"Check out the Bacalhau CLI Reference page"))),(0,o.kt)("h2",{id:"need-support"},"Need Support?"),(0,o.kt)("p",null,"If have questions or need support or guidance, please reach out to the ",(0,o.kt)("a",{parentName:"p",href:"https://filecoin.io/slack"},"Bacalhau team via Slack (#bacalhau channel)")))}p.isMDXComponent=!0}}]);