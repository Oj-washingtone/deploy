import express from "express";
import fs from "fs/promises";
import path from "path";
import bodyParser from "body-parser";
import { exec } from "child_process";
import { fileURLToPath } from "url";



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const targetDir = "/home/oj/4030/deployments";
const deployment_scripst_dir = "/home/oj/4030/deploy/runtime";

// get request
app.get("/",  async (req, res) => {
   res.send("Deployment project")
});


app.post("/api/project/configs", async (req, res) => {

    const {repo, branch, runtime, buildCommand, appType} = req.body;
    try {
        // deployment scripts directory
        process.chdir(deployment_scripst_dir);

        // check for runtime using switch case
        switch (runtime) {
            case "nodejs":
                // cd to nodejs directory
                process.chdir("nodejs");

                // check for appType
                if(appType === "angular"){
                    const deploymentScript = "deploy-angular.sh";
                    runDeployment(req.body, deploymentScript)
                }

                if (appType === "nextjs"){
                    console.log("React runtime");
                }

                if (appType === "express"){
                    console.log("Express runtime");
                }

                break;
            case "python3":
                console.log("Python runtime");
                break;
            case "java":
                console.log("Java runtime");
                break;
            default:
                console.log("Unknown runtime");
                res.status(400).send("Invalid runtime");
                return;
        }

        res.send("Your service is live")

    }catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error" + err);
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// function
function runDeployment(configs, deploymentScript){
    const {repo, branch, runtime, buildCommand, appType} = configs;
    const commad = `sh ${deploymentScript} ${repo} ${branch} ${targetDir} ${runtime} ${buildCommand}`;

    exec(commad, (error, stdout, stderr)=>{
        if(error){
            console.log(error);
            res.status(500).send("Internal server Error");
            return;
        }

        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        
    });
}