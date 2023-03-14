"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[4013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=a.createContext({}),l=function(e){var t=a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,b=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,f=d["".concat(b,".").concat(u)]||d[u]||p[u]||s;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const s={},r="Scripting Bacalhau with Python",i={unversionedId:"examples/workload-onboarding/python-script/index",id:"examples/workload-onboarding/python-script/index",title:"Scripting Bacalhau with Python",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/python-script/index.md",sourceDirName:"examples/workload-onboarding/python-script",slug:"/examples/workload-onboarding/python-script/",permalink:"/examples/workload-onboarding/python-script/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/python-script/index.md",tags:[],version:"current",lastUpdatedAt:1678758597,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Bacalhau Docker Image",permalink:"/examples/workload-onboarding/bacalhau-docker-image/"},next:{title:"Data Engineering",permalink:"/examples/data-engineering/"}},b={},l=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Executing Bacalhau Jobs with Python Scripts",id:"executing-bacalhau-jobs-with-python-scripts",level:2},{value:"Next Steps",id:"next-steps",level:3}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scripting-bacalhau-with-python"},"Scripting Bacalhau with Python"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/python-script/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/python-script/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("p",null,"Bacalhau allows you to easily execute batch jobs via the CLI. But sometimes you need to do more than that. You might need to execute a script that requires user input, or you might need to execute a script that requires a lot of parameters. In any case, you probably want to execute your jobs in a repeatable manner."),(0,o.kt)("p",null,"This example demonstrates a simple Python script that is able to orchestrate the execution of lots of jobs in a repeatable manner."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python"),(0,o.kt)("li",{parentName:"ul"},"The Bacalhau client - ",(0,o.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/getting-started/installation"},"Installation instructions"))),(0,o.kt)("h2",{id:"executing-bacalhau-jobs-with-python-scripts"},"Executing Bacalhau Jobs with Python Scripts"),(0,o.kt)("p",null,"To demonstrate this example, I will use the data generated from the ",(0,o.kt)("a",{parentName:"p",href:"/examples/data-engineering/blockchain-etl/"},"ethereum analysis example"),". This produced a list of hashes that I will iterate over and execute a job for each one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile hashes.txt\nbafybeihvtzberlxrsz4lvzrzvpbanujmab3hr5okhxtbgv2zvonqos2l3i\nbafybeifb25fgxrzu45lsc47gldttomycqcsao22xa2gtk2ijbsa5muzegq\nbafybeig4wwwhs63ly6wbehwd7tydjjtnw425yvi2tlzt3aii3pfcj6hvoq\nbafybeievpb5q372q3w5fsezflij3wlpx6thdliz5xowimunoqushn3cwka\nbafybeih6te26iwf5kzzby2wqp67m7a5pmwilwzaciii3zipvhy64utikre\nbafybeicjd4545xph6rcyoc74wvzxyaz2vftapap64iqsp5ky6nz3f5yndm\nbafybeicgo3iofo3sw73wenc3nkdhi263yytjnds5cxjwvypwekbz4sk7ra\nbafybeihvep5xsvxm44lngmmeysihsopcuvcr34an4idz45ixl5slsqzy3y\nbafybeigmt2zwzrbzwb4q2kt2ihlv34ntjjwujftvabrftyccwzwdypama4\nbafybeiciwui7sw3zqkvp4d55p4woq4xgjlstrp3mzxl66ab5ih5vmeozci\nbafybeicpmotdsj2ambf666b2jkzp2gvg6tadr6acxqw2tmdlmsruuggbbu\nbafybeigefo3esovbveavllgv5wiheu5w6cnfo72jxe6vmfweco5eq5sfty\nbafybeigvajsumnfwuv7lp7yhr2sr5vrk3bmmuhhnaz53waa2jqv3kgkvsu\nbafybeih2xg2n7ytlunvqxwqlqo5l3daykuykyvhgehoa2arot6dmorstmq\nbafybeihnmq2ltuolnlthb757teihwvvw7wophoag2ihnva43afbeqdtgi4\nbafybeibb34hzu6z2xgo6nhrplt3xntpnucthqlawe3pmzgxccppbxrpudy\nbafybeigny33b4g6gf2hrqzzkfbroprqrimjl5gmb3mnsqu655pbbny6tou\nbafybeifgqjvmzbtz427bne7af5tbndmvniabaex77us6l637gqtb2iwlwq\nbafybeibryqj62l45pxjhdyvgdc44p3suhvt4xdqc5jpx474gpykxwgnw2e\nbafybeidme3fkigdjaifkjfbwn76jk3fcqdogpzebtotce6ygphlujaecla\nbafybeig7myc3eg3h2g5mk2co7ybte4qsuremflrjneer6xk3pghjwmcwbi\nbafybeic3x2r5rrd3fdpdqeqax4bszcciwepvbpjl7xdv6mkwubyqizw5te\nbafybeihxutvxg3bw7fbwohq4gvncrk3hngkisrtkp52cu7qu7tfcuvktnq\nbafybeicumr67jkyarg5lspqi2w4zqopvgii5dgdbe5vtbbq53mbyftduxy\nbafybeiecn2cdvefvdlczhz6i4afbkabf5pe5yqrcsgdvlw5smme2tw7em4\nbafybeiaxh7dhg4krgkil5wqrv5kdsc3oewwy6ym4n3545ipmzqmxaxrqf4\nbafybeiclcqfzinrmo3adr4lg7sf255faioxjfsolcdko3i4x7opx7xrqii\nbafybeicjmeul7c2dxhmaudawum4ziwfgfkvbgthgtliggfut5tsc77dx7q\nbafybeialziupik7csmhfxnhuss5vrw37kmte7rmboqovp4cpq5hj4insda\nbafybeid7ecwdrw7pb3fnkokq5adybum6s5ok3yi2lw4m3edjpuy65zm4ji\nbafybeibuxwnl5ogs4pwa32xriqhch24zbrw44rp22hrly4t6roh6rz7j4m\nbafybeicxvy47jpvv3fi5umjatem5pxabfrbkzxiho7efu6mpidjpatte54\nbafybeifynb4mpqrbsjbeqtxpbuf6y4frrtjrc4tm7cnmmui7gbjkckszrq\nbafybeidcgnbhguyfaahkoqbyy2z525d3qfzdtbjuk4e75wkdbnkcafvjei\nbafybeiefc67s6hpydnsqdgypbunroqwkij5j26sfmc7are7yxvg45uuh7i\nbafybeiefwjy3o42ovkssnm7iihbog46k5grk3gobvvkzrqvof7p6xbgowi\nbafybeihpydd3ivtza2ql5clatm5fy7ocych7t4czu46sbc6c2ykrbwk5uu\nbafybeiet7222lqfmzogur3zlxqavlnd3lt3qryw5yi5rhuiqeqg4w7c3qu\nbafybeihwomd4ygoydvj5kh24wfwk5kszmst5vz44zkl6yibjargttv7sly\nbafybeidbjt2ckr4oooio3jsfk76r3bsaza5trjvt7u36slhha5ksoc5gv4\nbafybeifyjrmopgtfmswq7b4pfscni46doy3g3z6vi5rrgpozc6duebpmuy\nbafybeidsrowz46yt62zs64q2mhirlc3rsmctmi3tluorsts53vppdqjj7e\nbafybeiggntql57bw24bw6hkp2yqd3qlyp5oxowo6q26wsshxopfdnzsxhq\nbafybeidguz36u6wakx4e5ewuhslsfsjmk5eff5q7un2vpkrcu7cg5aaqf4\nbafybeiaypwu2b45iunbqnfk2g7bku3nfqveuqp4vlmmwj7o7liyys42uai\nbafybeicaahv7xvia7xojgiecljo2ddrvryzh2af7rb3qqbg5a257da5p2y\nbafybeibgeiijr74rcliwal3e7tujybigzqr6jmtchqrcjdo75trm2ptb4e\nbafybeiba3nrd43ylnedipuq2uoowd4blghpw2z7r4agondfinladcsxlku\nbafybeif3semzitjbxg5lzwmnjmlsrvc7y5htekwqtnhmfi4wxywtj5lgoe\nbafybeiedmsig5uj7rgarsjans2ad5kcb4w4g5iurbryqn62jy5qap4qq2a\nbafybeidyz34bcd3k6nxl7jbjjgceg5eu3szbrbgusnyn7vfl7facpecsce\nbafybeigmq5gch72q3qpk4nipssh7g7msk6jpzns2d6xmpusahkt2lu5m4y\nbafybeicjzoypdmmdt6k54wzotr5xhpzwbgd3c4oqg6mj4qukgvxvdrvzye\nbafybeien55egngdpfvrsxr2jmkewdyha72ju7qaaeiydz2f5rny7drgzta\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Overwriting hashes.txt\n")),(0,o.kt)("p",null,"Now let's run the following script. There's a fair bit of code, but basically there's three core functions to submit, check the status of, and download the results from, a job. Then the main function wraps all of that in a ",(0,o.kt)("inlineCode",{parentName:"p"},"multiprocessing")," pool to execute the jobs in parallel. Feel free to copy this code and save it to your local machine as ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau.py"),". Then you can execute this script anywhere with ",(0,o.kt)("inlineCode",{parentName:"p"},"python bacalhau.py"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile bacalhau.py\nimport json, glob, os, multiprocessing, shutil, subprocess, tempfile, time\n\n# checkStatusOfJob checks the status of a Bacalhau job\ndef checkStatusOfJob(job_id: str) -> str:\n    assert len(job_id) > 0\n    p = subprocess.run(\n        ["bacalhau", "list", "--output", "json", "--id-filter", job_id],\n        stdout=subprocess.PIPE,\n        stderr=subprocess.PIPE,\n        text=True,\n    )\n    r = parseJobStatus(p.stdout)\n    if r == "":\n        print("job status is empty! %s" % job_id)\n    elif r == "Completed":\n        print("job completed: %s" % job_id)\n    else:\n        print("job not completed: %s - %s" % (job_id, r))\n\n    return r\n\n\n# submitJob submits a job to the Bacalhau network\ndef submitJob(cid: str) -> str:\n    assert len(cid) > 0\n    p = subprocess.run(\n        [\n            "bacalhau",\n            "docker",\n            "run",\n            "--id-only",\n            "--wait=false",\n            "--input-volumes",\n            cid + ":/inputs/data.tar.gz",\n            "ghcr.io/bacalhau-project/examples/blockchain-etl:0.0.6",\n        ],\n        stdout=subprocess.PIPE,\n        stderr=subprocess.PIPE,\n        text=True,\n    )\n    if p.returncode != 0:\n        print("failed (%d) job: %s" % (p.returncode, p.stdout))\n    job_id = p.stdout.strip()\n    print("job submitted: %s" % job_id)\n\n    return job_id\n\n\n# getResultsFromJob gets the results from a Bacalhau job\ndef getResultsFromJob(job_id: str) -> str:\n    assert len(job_id) > 0\n    temp_dir = tempfile.mkdtemp()\n    print("getting results for job: %s" % job_id)\n    for i in range(0, 5): # try 5 times\n        p = subprocess.run(\n            [\n                "bacalhau",\n                "get",\n                "--output-dir",\n                temp_dir,\n                job_id,\n            ],\n            stdout=subprocess.PIPE,\n            stderr=subprocess.PIPE,\n            text=True,\n        )\n        if p.returncode == 0:\n            break\n        else:\n            print("failed (exit %d) to get job: %s" % (p.returncode, p.stdout))\n\n    return temp_dir\n\n\n# parseJobStatus parses the status of a Bacalhau job\ndef parseJobStatus(result: str) -> str:\n    if len(result) == 0:\n        return ""\n    r = json.loads(result)\n    if len(r) > 0:\n        for _, v in r[0]["Status"]["JobState"]["Nodes"].items():\n            state = v["Shards"]["0"]["State"]\n            if state == "Completed":\n                return state\n        for _, v in r[0]["Status"]["JobState"]["Nodes"].items():\n            state = v["Shards"]["0"]["State"]\n            if state != "Cancelled":\n                return state\n        return "Error"\n    return ""\n\n\n# parseHashes splits lines from a text file into a list\ndef parseHashes(filename: str) -> list:\n    assert os.path.exists(filename)\n    with open(filename, "r") as f:\n        hashes = f.read().splitlines()\n    return hashes\n\n\ndef main(file: str, num_files: int = -1):\n    # Use multiprocessing to work in parallel\n    count = multiprocessing.cpu_count()\n    with multiprocessing.Pool(processes=count) as pool:\n        hashes = parseHashes(file)[:num_files]\n        print("submitting %d jobs" % len(hashes))\n        job_ids = pool.map(submitJob, hashes)\n        assert len(job_ids) == len(hashes)\n\n        print("waiting for jobs to complete...")\n        while True:\n            job_statuses = pool.map(checkStatusOfJob, job_ids)\n            total_finished = sum(map(lambda x: x == "Completed", job_statuses))\n            if total_finished >= len(job_ids):\n                break\n            print("%d/%d jobs completed" % (total_finished, len(job_ids)))\n            time.sleep(2)\n\n        print("all jobs completed, saving results...")\n        results = pool.map(getResultsFromJob, job_ids)\n        print("finished saving results")\n\n        # Do something with the results\n        shutil.rmtree("results", ignore_errors=True)\n        os.makedirs("results", exist_ok=True)\n        for r in results:\n            path = os.path.join(r, "combined_results", "outputs", "*.csv")\n            csv_file = glob.glob(path)\n            for f in csv_file:\n                print("moving %s to results" % f)\n                shutil.move(f, "results")\n\nif __name__ == "__main__":\n    main("hashes.txt", 10)\n\n')),(0,o.kt)("p",null,"This code has a few interesting features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Change the value in the ",(0,o.kt)("inlineCode",{parentName:"li"},"main")," call to change the number of jobs to execute"),(0,o.kt)("li",{parentName:"ul"},"Because all jobs complete at different times, there's a loop to check that all jobs have completed before downloading the results -- if you don't do this you'll likely see an error when trying to download the results"),(0,o.kt)("li",{parentName:"ul"},"When downloading the results, the IPFS get often times out, so I wrapped that in a loop")),(0,o.kt)("p",null,"Let's run it!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython bacalhau.py\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"submitting 10 jobs\njob submitted: dead536c-286a-4632-9105-d4fdf81b9863\njob submitted: 42dabff1-4116-46df-9be7-5b2fc015a3fe\njob submitted: 82f1f934-8acd-4e56-919f-f09928323b19\njob submitted: 3cbc3334-d3a2-4980-8bad-4e4347814040\njob submitted: 2d2c3b70-2739-49b0-b8af-05236a836630\njob submitted: 7289b1ee-5863-4274-ae0f-4db0ac2dd3b3\njob submitted: fb5ddaa5-d0ca-4c77-8bb3-a5af78a327f4\njob submitted: c399b0c9-0f9c-4d74-afc0-f8cfcecc8d02\njob submitted: e8d83d77-ea16-41fb-8c20-7e2e809a187b\njob submitted: b6b49a8b-6145-4728-a16b-f3e657464e67\nwaiting for jobs to complete...\njob not completed: 42dabff1-4116-46df-9be7-5b2fc015a3fe - Waiting\njob not completed: fb5ddaa5-d0ca-4c77-8bb3-a5af78a327f4 - Waiting\njob not completed: 82f1f934-8acd-4e56-919f-f09928323b19 - Waiting\njob not completed: 7289b1ee-5863-4274-ae0f-4db0ac2dd3b3 - Waiting\njob not completed: dead536c-286a-4632-9105-d4fdf81b9863 - Waiting\njob not completed: 2d2c3b70-2739-49b0-b8af-05236a836630 - Waiting\njob not completed: 3cbc3334-d3a2-4980-8bad-4e4347814040 - Waiting\njob not completed: c399b0c9-0f9c-4d74-afc0-f8cfcecc8d02 - Waiting\njob not completed: e8d83d77-ea16-41fb-8c20-7e2e809a187b - Waiting\njob not completed: b6b49a8b-6145-4728-a16b-f3e657464e67 - Waiting\n0/10 jobs completed\njob not completed: 7289b1ee-5863-4274-ae0f-4db0ac2dd3b3 - Waiting\njob not completed: c399b0c9-0f9c-4d74-afc0-f8cfcecc8d02 - Waiting\njob not completed: fb5ddaa5-d0ca-4c77-8bb3-a5af78a327f4 - Waiting\njob not completed: 2d2c3b70-2739-49b0-b8af-05236a836630 - Waiting\njob not completed: 82f1f934-8acd-4e56-919f-f09928323b19 - Waiting\njob not completed: dead536c-286a-4632-9105-d4fdf81b9863 - Waiting\njob not completed: 3cbc3334-d3a2-4980-8bad-4e4347814040 - Waiting\njob completed: 42dabff1-4116-46df-9be7-5b2fc015a3fe\njob not completed: e8d83d77-ea16-41fb-8c20-7e2e809a187b - Waiting\njob not completed: b6b49a8b-6145-4728-a16b-f3e657464e67 - Waiting\n1/10 jobs completed\njob completed: 42dabff1-4116-46df-9be7-5b2fc015a3fe\njob completed: dead536c-286a-4632-9105-d4fdf81b9863\njob completed: c399b0c9-0f9c-4d74-afc0-f8cfcecc8d02\njob completed: 3cbc3334-d3a2-4980-8bad-4e4347814040\njob completed: 82f1f934-8acd-4e56-919f-f09928323b19\njob completed: 2d2c3b70-2739-49b0-b8af-05236a836630\njob completed: fb5ddaa5-d0ca-4c77-8bb3-a5af78a327f4\njob completed: 7289b1ee-5863-4274-ae0f-4db0ac2dd3b3\njob completed: b6b49a8b-6145-4728-a16b-f3e657464e67\njob completed: e8d83d77-ea16-41fb-8c20-7e2e809a187b\nall jobs completed, saving results...\ngetting results for job: dead536c-286a-4632-9105-d4fdf81b9863\ngetting results for job: 82f1f934-8acd-4e56-919f-f09928323b19\ngetting results for job: 2d2c3b70-2739-49b0-b8af-05236a836630\ngetting results for job: 3cbc3334-d3a2-4980-8bad-4e4347814040\ngetting results for job: 42dabff1-4116-46df-9be7-5b2fc015a3fe\ngetting results for job: c399b0c9-0f9c-4d74-afc0-f8cfcecc8d02\ngetting results for job: 7289b1ee-5863-4274-ae0f-4db0ac2dd3b3\ngetting results for job: fb5ddaa5-d0ca-4c77-8bb3-a5af78a327f4\ngetting results for job: e8d83d77-ea16-41fb-8c20-7e2e809a187b\ngetting results for job: b6b49a8b-6145-4728-a16b-f3e657464e67\nfinished saving results\nmoving /var/folders/kr/pl4p96k11b55hp5_p9l_t8kr0000gn/T/tmpacgvy7wu/combined_results/outputs/transactions_00000000_00049999.csv to results\nmoving /var/folders/kr/pl4p96k11b55hp5_p9l_t8kr0000gn/T/tmp05iwhtpp/combined_results/outputs/transactions_00050000_00099999.csv to results\nmoving /var/folders/kr/pl4p96k11b55hp5_p9l_t8kr0000gn/T/tmp6t87xlzc/combined_results/outputs/transactions_00100000_00149999.csv to results\nmoving /var/folders/kr/pl4p96k11b55hp5_p9l_t8kr0000gn/T/tmp75fer_gp/combined_results/outputs/transactions_00150000_00199999.csv to results\nmoving /var/folders/kr/pl4p96k11b55hp5_p9l_t8kr0000gn/T/tmphpikbnbj/combined_results/outputs/transactions_00200000_00249999.csv to results\nmoving /var/folders/kr/pl4p96k11b55hp5_p9l_t8kr0000gn/T/tmp8951a72p/combined_results/outputs/transactions_00250000_00299999.csv to results\nmoving /var/folders/kr/pl4p96k11b55hp5_p9l_t8kr0000gn/T/tmp9baglzje/combined_results/outputs/transactions_00300000_00349999.csv to results\nmoving /var/folders/kr/pl4p96k11b55hp5_p9l_t8kr0000gn/T/tmpa13amd3g/combined_results/outputs/transactions_00350000_00399999.csv to results\nmoving /var/folders/kr/pl4p96k11b55hp5_p9l_t8kr0000gn/T/tmp4v6lqc80/combined_results/outputs/transactions_00400000_00449999.csv to results\nmoving /var/folders/kr/pl4p96k11b55hp5_p9l_t8kr0000gn/T/tmpqgm5ka1s/combined_results/outputs/transactions_00450000_00499999.csv to results\n")),(0,o.kt)("p",null,"Hopefully the results directory contains all the combined results from the jobs we just executed. Here's we're expecting to see csv files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls -l results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"total 40\n-rw-r--r-- 3 phil staff  55 Jan 12 13:48 transactions_00000000_00049999.csv\n-rw-r--r-- 3 phil staff 387 Jan 12 13:49 transactions_00050000_00099999.csv\n-rw-r--r-- 3 phil staff 388 Jan 12 13:50 transactions_00100000_00149999.csv\n-rw-r--r-- 3 phil staff 426 Jan 12 13:48 transactions_00150000_00199999.csv\n-rw-r--r-- 3 phil staff 393 Jan 12 13:49 transactions_00200000_00249999.csv\n-rw-r--r-- 3 phil staff 384 Jan 12 13:48 transactions_00250000_00299999.csv\n-rw-r--r-- 3 phil staff 421 Jan 12 13:48 transactions_00300000_00349999.csv\n-rw-r--r-- 3 phil staff 390 Jan 12 13:48 transactions_00350000_00399999.csv\n-rw-r--r-- 3 phil staff 347 Jan 12 13:48 transactions_00400000_00449999.csv\n-rw-r--r-- 3 phil staff 386 Jan 12 13:48 transactions_00450000_00499999.csv\n")),(0,o.kt)("p",null,"Success! We've now executed a bunch of jobs in parallel using Python. This is a great way to execute lots of jobs in a repeatable manner. You can alter the file above for your purposes."),(0,o.kt)("h3",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"You might also be interested in the following examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/examples/data-engineering/blockchain-etl/"},"Analysing Ethereum Data with Python"))))}p.isMDXComponent=!0}}]);