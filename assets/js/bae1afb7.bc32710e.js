"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[332],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5486:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_label:"CLI Flags",sidebar_position:1},s="CLI Commands",c={unversionedId:"cli-flags/all-flags",id:"cli-flags/all-flags",title:"CLI Commands",description:"Top level flags",source:"@site/docs/cli-flags/all-flags.md",sourceDirName:"cli-flags",slug:"/cli-flags/all-flags",permalink:"/cli-flags/all-flags",editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/cli-flags/all-flags.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"CLI Flags",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"GPU Support",permalink:"/running-node/gpu"}},u=[{value:"Top level flags",id:"top-level-flags",children:[{value:"Docker",id:"docker",children:[{value:"Run",id:"run",children:[],level:4}],level:3},{value:"List",id:"list",children:[],level:3},{value:"Serve",id:"serve",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cli-commands"},"CLI Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  completion  Generate the autocompletion script for the specified shell\n  describe    Describe a job on the network\n  devstack    Start a cluster of bacalhau nodes for testing and development\n  docker      Run a docker job on the network (see run subcommand)\n  get         Get the results of a job\n  help        Help about any command\n  list        List jobs on the network\n  run         Run a job on the network (see subcommands for supported flavors)\n  serve       Start the bacalhau compute node\n  version     Get the client and server version.\n")),(0,a.kt)("h2",{id:"top-level-flags"},"Top level flags"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'      --api-host string   The host for the client and server to communicate on (via REST). (default "bootstrap.production.bacalhau.org")\n      --api-port int      The port for the client and server to communicate on (via REST). (default 1234)\n  -h, --help              help for bacalhau\n')),(0,a.kt)("h3",{id:"docker"},"Docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  run         Run a docker job on the network\n")),(0,a.kt)("h4",{id:"run"},"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  -c, --concurrency int          How many nodes should run the job (default 1)\n      --cpu string               Job CPU cores (e.g. 500m, 2, 8).\n      --engine string            What executor engine to use to run the job (default \"docker\")\n  -e, --env strings              The environment variables to supply to the job (e.g. --env FOO=bar --env BAR=baz)\n      --gpu string               Job GPU requirement (e.g. 1, 2, 8).\n  -h, --help                     help for run\n  -v, --input-volumes strings    CID:path of the input data volumes, if you need to set the path of the mounted data.\n  -i, --inputs strings           CIDs to use on the job. Mounts them at '/inputs' in the execution.\n  -l, --labels strings           List of labels for the job. Enter multiple in the format '-l a -l 2'. All characters not matching /a-zA-Z0-9_:|-/ and all emojis will be stripped.\n      --memory string            Job Memory requirement (e.g. 500Mb, 2Gb, 8Gb).\n  -o, --output-volumes strings   name:path of the output data volumes. 'outputs:/outputs' is always added.\n      --skip-syntax-checking     Skip having 'shellchecker' verify syntax of the command\n      --verifier string          What verification engine to use to run the job (default \"ipfs\")\n")),(0,a.kt)("h3",{id:"list"},"List"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'  -h, --help               help for list\n      --hide-header        do not print the column headers.\n      --id-filter string   filter by Job List to IDs matching substring.\n      --no-style           remove all styling from table output.\n  -n, --number int         print the first NUM jobs instead of the first 10. (default 10)\n      --output string      The output format for the list of jobs (json or text) (default "text")\n      --reverse            reverse order of table - for time sorting, this will be newest first.\n      --sort-by Column     sort by field, defaults to creation time, with newest first [Allowed "id", "created_at"].\n      --wide               Print full values in the table results\n')),(0,a.kt)("h3",{id:"serve"},"Serve"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'  -h, --help                                 help for serve\n      --host string                          The host to listen on (for both api and swarm connections). (default "0.0.0.0")\n      --ipfs-connect string                  The ipfs host multiaddress to connect to.\n      --job-selection-data-locality string   Only accept jobs that reference data we have locally ("local") or anywhere ("anywhere"). (default "local")\n      --job-selection-probe-exec string      Use the result of a exec an external program to decide if we should take on the job.\n      --job-selection-probe-http string      Use the result of a HTTP POST to decide if we should take on the job.\n      --job-selection-reject-stateless       Reject jobs that don\'t specify any data.\n      --limit-job-cpu string                 Job CPU core limit for single job (e.g. 500m, 2, 8).\n      --limit-job-gpu string                 Job GPU limit for single job (e.g. 1, 2, or 8).\n      --limit-job-memory string              Job Memory limit for single job  (e.g. 500Mb, 2Gb, 8Gb).\n      --limit-total-cpu string               Total CPU core limit to run all jobs (e.g. 500m, 2, 8).\n      --limit-total-gpu string               Total GPU limit to run all jobs (e.g. 1, 2, or 8).\n      --limit-total-memory string            Total Memory limit to run all jobs  (e.g. 500Mb, 2Gb, 8Gb).\n      --metrics-port int                     The port to serve prometheus metrics on. (default 2112)\n      --peer string                          The libp2p multiaddress to connect to.\n      --port int                             The port to listen on for swarm connections. (default 1235)\n')))}d.isMDXComponent=!0}}]);