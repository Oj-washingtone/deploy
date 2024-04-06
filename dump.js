
        
        // clone a repo into this folder
        // exec(`git clone -b ${branch} ${repo}`, async (error, stdout, stderr) => {
        //     if (error) {
        //         res.status(500).send("Internal Server Error" + error);
        //         return;
        //     }
        //     console.log(`stdout: ${stdout}`);
        //     console.error(`stderr: ${stderr}`);

        //     // get the directory name
        //     const projectDir = repo.split("/").pop().replace(".git", "");

        //     // check if done
        //     console.log("Done cloning "+ projectDir);

        //     // console.log("Changing directory to "+ projectDir);

        //     // // change directory to the project directory
        //     // process.chdir(projectDir);

        //     // console.log("running docker file");
            

        //     // read the content of the directory
        //     const files = await fs.readdir(projectDir);
        //     // send the response
        //     res.send(files);
        // });

        /**
         * if [ "$runtime" = "node" ]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "python3"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "java"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "ruby"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "php"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "go"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "csharp"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "rust"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "swift"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "kotlin"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "scala"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "perl"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "lua"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "r"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "julia"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "haskell"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "erlang"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else if ["$runtime" = "elixir"]; then
  echo "runtime is $runtime and start build commabd is $buildCommand"
else
         */



// pip install -r requirements.txt  for python 3 runtime build command