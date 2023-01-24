"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[7469],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return t?a.createElement(h,o(o({ref:n},m),{},{components:t})):a.createElement(h,o({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6574:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_label:"Python-Custom-Container",sidebar_position:3},o="Building and Running Custom Python  Container",l={unversionedId:"examples/workload-onboarding/Python-Custom-Container/index",id:"examples/workload-onboarding/Python-Custom-Container/index",title:"Building and Running Custom Python  Container",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/Python-Custom-Container/index.md",sourceDirName:"examples/workload-onboarding/Python-Custom-Container",slug:"/examples/workload-onboarding/Python-Custom-Container/",permalink:"/examples/workload-onboarding/Python-Custom-Container/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/Python-Custom-Container/index.md",tags:[],version:"current",lastUpdatedBy:"Favour Kelvin",lastUpdatedAt:1674519922,formattedLastUpdatedAt:"Jan 24, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Python-Custom-Container",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Python - Pandas",permalink:"/examples/workload-onboarding/python-pandas/"},next:{title:"CUDA",permalink:"/examples/workload-onboarding/CUDA/"}},s={},p=[{value:"<strong>Introduction</strong>",id:"introduction",level:2},{value:"<strong>Installing Dependencies</strong>",id:"installing-dependencies",level:3},{value:"<strong>Writing the Script</strong>",id:"writing-the-script",level:3},{value:"<strong>Running the script</strong>",id:"running-the-script",level:3},{value:"<strong>Running the container on bacalhau</strong>",id:"running-the-container-on-bacalhau",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-and-running-custom-python--container"},"Building and Running Custom Python  Container"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/Python-Custom-Container/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/Python-Custom-Container/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,r.kt)("h2",{id:"introduction"},(0,r.kt)("strong",{parentName:"h2"},"Introduction")),(0,r.kt)("p",null,"This example will walk you through building your own docker container and running the container on the bacalhau network and viewing the results"),(0,r.kt)("p",null,"For that we will build a Simple Recommender Script that when Given a movie ID"),(0,r.kt)("p",null,"will recommend other movies based on user ratings."),(0,r.kt)("p",null,"Suppose if you want recommendations for the movie Toy Story (1995) it will recommend movies from similar categories"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Recommendations for Toy Story (1995):\n1  :  Toy Story (1995)\n58  :  Postino, Il (The Postman) (1994)\n3159  :  Fantasia 2000 (1999)\n359  :  I Like It Like That (1994)\n756  :  Carmen Miranda: Bananas Is My Business (1994)\n618  :  Two Much (1996)\n48  :  Pocahontas (1995)\n2695  :  Boys, The (1997)\n2923  :  Citizen's Band (a.k.a. Handle with Care) (1977)\n688  :  Operation Dumbo Drop (1995)\n")),(0,r.kt)("h3",{id:""}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Downloading the dataset")),(0,r.kt)("p",null,"Download Movielens1M dataset from this link ",(0,r.kt)("a",{parentName:"p",href:"https://files.grouplens.org/datasets/movielens/ml-1m.zip"},"https://files.grouplens.org/datasets/movielens/ml-1m.zip")),(0,r.kt)("p",null,"In this example we\u2019ll be using 2 files from the MovieLens 1M dataset: ratings.dat and movies.dat. After the dataset is downloaded extract the zip and place ratings.dat and movies.dat into a folder called input"),(0,r.kt)("p",null,"The structure of input directory should be"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"input\n\u251c\u2500\u2500 movies.dat\n\u2514\u2500\u2500 ratings.dat\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!wget https://files.grouplens.org/datasets/movielens/ml-1m.zip\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--2022-09-18 11:01:58--  https://files.grouplens.org/datasets/movielens/ml-1m.zip\nResolving files.grouplens.org (files.grouplens.org)... 128.101.65.152\nConnecting to files.grouplens.org (files.grouplens.org)|128.101.65.152|:443... connected.\nHTTP request sent, awaiting response... 200 OK\nLength: 5917549 (5.6M) [application/zip]\nSaving to: \u2018ml-1m.zip\u2019\n\nml-1m.zip           100%[===================>]   5.64M  28.7MB/s    in 0.2s    \n\n2022-09-18 11:01:59 (28.7 MB/s) - \u2018ml-1m.zip\u2019 saved [5917549/5917549]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Extracting the downlaoded zip file\n!unzip ml-1m.zip\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Archive:  ml-1m.zip\n   creating: ml-1m/\n  inflating: ml-1m/movies.dat        \n  inflating: ml-1m/ratings.dat       \n  inflating: ml-1m/README            \n  inflating: ml-1m/users.dat         \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#moving  ratings.dat and movies.dat into a folder called 'input'\n!mkdir input; mv ml-1m/movies.dat ml-1m/ratings.dat input/\n")),(0,r.kt)("h3",{id:"installing-dependencies"},(0,r.kt)("strong",{parentName:"h3"},"Installing Dependencies")),(0,r.kt)("p",null,"Create a requirements.txt for the Python libraries we\u2019ll be using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile requirements.txt\nnumpy\npandas\n")),(0,r.kt)("p",null,"To install the dependencies run the command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n")),(0,r.kt)("h3",{id:"writing-the-script"},(0,r.kt)("strong",{parentName:"h3"},"Writing the Script")),(0,r.kt)("p",null,"Create a new file called ",(0,r.kt)("code",null,(0,r.kt)("em",null,"similar-movies.py"))," and in it paste the following script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile similar-movies.py\n# Imports\nimport numpy as np\nimport pandas as pd\nimport argparse\nfrom distutils.dir_util import mkpath\nimport warnings\nwarnings.filterwarnings(\"ignore\")\n# Read the files with pandas\ndata = pd.io.parsers.read_csv('input/ratings.dat',\nnames=['user_id', 'movie_id', 'rating', 'time'],\nengine='python', delimiter='::', encoding='latin-1')\nmovie_data = pd.io.parsers.read_csv('input/movies.dat',\nnames=['movie_id', 'title', 'genre'],\nengine='python', delimiter='::', encoding='latin-1')\n\n# Create the ratings matrix of shape (m\xd7u) with rows as movies and columns as users\n\nratings_mat = np.ndarray(\nshape=((np.max(data.movie_id.values)), np.max(data.user_id.values)),\ndtype=np.uint8)\nratings_mat[data.movie_id.values-1, data.user_id.values-1] = data.rating.values\n\n# Normalise matrix (subtract mean off)\n\nnormalised_mat = ratings_mat - np.asarray([(np.mean(ratings_mat, 1))]).T\n\n# Compute SVD\n\nnormalised_mat = ratings_mat - np.matrix(np.mean(ratings_mat, 1)).T\ncov_mat = np.cov(normalised_mat)\nevals, evecs = np.linalg.eig(cov_mat)\n\n# Calculate cosine similarity, sort by most similar and return the top N.\n\ndef top_cosine_similarity(data, movie_id, top_n=10):\n   \nindex = movie_id - 1\n# Movie id starts from 1\n   \nmovie_row = data[index, :]\nmagnitude = np.sqrt(np.einsum('ij, ij -> i', data, data))\nsimilarity = np.dot(movie_row, data.T) / (magnitude[index] * magnitude)\nsort_indexes = np.argsort(-similarity)\nreturn sort_indexes[:top_n]\n\n# Helper function to print top N similar movies\ndef print_similar_movies(movie_data, movie_id, top_indexes):\nprint('Recommendations for {0}: \\n'.format(\nmovie_data[movie_data.movie_id == movie_id].title.values[0]))\nfor id in top_indexes + 1:\nprint(str(id),' : ',movie_data[movie_data.movie_id == id].title.values[0])\n\n\nparser = argparse.ArgumentParser(description='Personal information')\nparser.add_argument('--k', dest='k', type=int, help='principal components to represent the movies',default=50)\nparser.add_argument('--id', dest='id', type=int, help='Id of the movie',default=1)\nparser.add_argument('--n', dest='n', type=int, help='No of recommendations',default=10)\n\nargs = parser.parse_args()\nk = args.k\nmovie_id = args.id # Grab an id from movies.dat\ntop_n = args.n\n\n# k = 50\n# # Grab an id from movies.dat\n# movie_id = 1\n# top_n = 10\n\nsliced = evecs[:, :k] # representative data\ntop_indexes = top_cosine_similarity(sliced, movie_id, top_n)\nprint_similar_movies(movie_data, movie_id, top_indexes)\n")),(0,r.kt)("p",null,"What the similar-movies.py script does"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read the files with pandas"),(0,r.kt)("li",{parentName:"ul"},"Create the ratings matrix of shape (m\xd7u) with rows as movies and columns as user"),(0,r.kt)("li",{parentName:"ul"},"Normalise matrix (subtract mean off)"),(0,r.kt)("li",{parentName:"ul"},"Compute SVD"),(0,r.kt)("li",{parentName:"ul"},"Calculate cosine similarity, sort by most similar and return the top N."),(0,r.kt)("li",{parentName:"ul"},"Select k principal components to represent the movies, a movie_id to find recommendations and print the top_n results.")),(0,r.kt)("p",null,"For further reading on how the script works, go to ",(0,r.kt)("a",{parentName:"p",href:"https://alyssaq.github.io/2015/20150426-simple-movie-recommender-using-svd/"},"Simple Movie Recommender Using SVD | Alyssa")),(0,r.kt)("h3",{id:"running-the-script"},(0,r.kt)("strong",{parentName:"h3"},"Running the script")),(0,r.kt)("p",null,"Running the script  similar-movies.py using the default values you can also use other flags to set your own values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"! python similar-movies.py\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Setting Up Docker")),(0,r.kt)("p",null,"In this step you will create a  ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to create your Docker deployment. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is a text document that contains the commands used to assemble the image."),(0,r.kt)("p",null,"First, create the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,r.kt)("p",null,"Next, add your desired configuration to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". These commands specify how the image will be built, and what extra requirements will be included."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile Dockerfile\nFROM python:3.8\nADD similar-movies.py .\nADD /input input\nCOPY ./requirements.txt /requirements.txt\nRUN pip install -r requirements.txt\n")),(0,r.kt)("p",null,"We will use the python:3.8 docker image and add our script ",(0,r.kt)("inlineCode",{parentName:"p"},"similar-movies.py")," to copy the script to the docker image, similarly we also add the dataset directory and also the requirements, after that run the command to install the dependencies in the image"),(0,r.kt)("p",null,"The final folder structure will look like this: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 input\n\u2502   \u251c\u2500\u2500 movies.dat\n\u2502   \u2514\u2500\u2500 ratings.dat\n\u251c\u2500\u2500 requirements.txt\n\u2514\u2500\u2500 similar-movies.py\n")),(0,r.kt)("p",null,"Build the container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,r.kt)("p",null,"Please replace"),(0,r.kt)("p",null,"<","hub-user> with your docker hub username, If you don\u2019t have a docker hub account ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"Follow these instructions to create docker account"),", and use the username of the account you created"),(0,r.kt)("p",null,"<","repo-name> This is the name of the container, you can name it anything you want"),(0,r.kt)("p",null,"<","tag> This is not required but you can use the latest tag"),(0,r.kt)("p",null,"After you have build the container, the next step is to test it locally and then push it docker hub"),(0,r.kt)("p",null,"Before pushing you first need to create a repo which you can create by following the instructions here ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-hub/repos/"},"https://docs.docker.com/docker-hub/repos/")),(0,r.kt)("p",null,"Now you can push this repository to the registry designated by its name or tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," docker push <hub-user>/<repo-name>:<tag>\n")),(0,r.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bacalhau docker run <hub-user>/<repo-name>:<tag> -- python similar-movies.py\n")),(0,r.kt)("h2",{id:"running-the-container-on-bacalhau"},(0,r.kt)("strong",{parentName:"h2"},"Running the container on bacalhau")),(0,r.kt)("p",null,"You can either run the container on bacalhau with default or custom parameters"),(0,r.kt)("p",null,"Running the container with default parameters"),(0,r.kt)("p",null,"Insalling bacalhau"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!curl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Your system is linux_amd64\nNo BACALHAU detected. Installing fresh BACALHAU CLI...\nGetting the latest BACALHAU CLI...\nInstalling v0.2.3 BACALHAU CLI...\nDownloading https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz ...\nDownloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz.signature.sha256 ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into /usr/local/bin successfully.\nClient Version: v0.2.3\nServer Version: v0.2.3\n")),(0,r.kt)("p",null,"Command to run the container on bacalhau"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run \\\n--id-only \\\n--wait \\\njsace/python-similar-movies \\\n -- python similar-movies.py\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"7523cbaf-7a17-4f52-8c6d-2fcc91df653e\n")),(0,r.kt)("p",null,"Running the commands will output a UUID (like ",(0,r.kt)("inlineCode",{parentName:"p"},"54506541-4eb9-45f4-a0b1-ea0aecd34b3e"),"). This is the ID of the job that was created. You can check the status of the job with the following command:"),(0,r.kt)("p",null,"Running the container with custom\nparameters (Optional)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bacalhau docker run \\\njsace/python-similar-movies \\\n-- python similar-movies.py --k 50 --id 10 --n 10\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter ${JOB_ID}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 12:14:59 \x1b[0m\x1b[97;40m ab354ccc \x1b[0m\x1b[97;40m Docker jsace/python-... \x1b[0m\x1b[97;40m Published \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/bafybeihybfivi... \x1b[0m\n")),(0,r.kt)("p",null,'Where it says "',(0,r.kt)("inlineCode",{parentName:"p"},"Completed "),'", that means the job is done, and we can get the results.'),(0,r.kt)("p",null,"To find out more information about your job, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau describe ${JOB_ID}\n")),(0,r.kt)("p",null,"If you see that the job has completed and there are no errors, then you can download the results with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Fetching results of job '94774248-1d07-4121-aac8-451aca4a636e'...\nResults for job '94774248-1d07-4121-aac8-451aca4a636e' have been written to...\nresults\n\n\n2022/11/12 10:20:09 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.\n")),(0,r.kt)("p",null,"The structure of the files and directories will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 shards\n\u2502   \u2514\u2500\u2500 job-940c7fd7-c15a-4d00-8170-0d138cdca7eb-shard-0-host-QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL\n\u2502       \u251c\u2500\u2500 exitCode\n\u2502       \u251c\u2500\u2500 stderr\n\u2502       \u2514\u2500\u2500 stdout\n\u251c\u2500\u2500 stderr\n\u251c\u2500\u2500 stdout\n\u2514\u2500\u2500 volumes\n    \u2514\u2500\u2500 outputs\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"stdout contains things printed to the console like outputs, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"stderr contains any errors. In this case, since there are no errors, it's will be empty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Volumes folder contain the volumes you named when you started the job with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-o")," flag. In addition, you will always have a ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs")," volume, which is provided by default."))),(0,r.kt)("p",null,"Because your script is printed to stdout, the output will appear in the stdout file. You can read this by typing the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!cat  results/combined_results/outputs\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Recommendations for GoldenEye (1995): \n\n10  :  GoldenEye (1995)\n16  :  Casino (1995)\n7  :  Sabrina (1995)\n733  :  Rock, The (1996)\n648  :  Mission: Impossible (1996)\n1049  :  Ghost and the Darkness, The (1996)\n13  :  Balto (1995)\n839  :  Crow: City of Angels, The (1996)\n977  :  Moonlight Murder (1936)\n349  :  Clear and Present Danger (1994)\n")))}d.isMDXComponent=!0}}]);