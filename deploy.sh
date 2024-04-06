#!/bin/bash


# Usage: deploy.sh <repo> <branch> <targetDir>

# clone or pull from repo
repo=$1
branch=$2
targetDir=$3
runtime=$4
buildCommand=$5

# Extracting the repository name from the URL
repo_name=$(basename -s .git "$repo")

cd "$targetDir" || exit

if [ -d "$repo_name" ]; then
  cd "$repo_name"
  echo "Pulling from $repo"
  git pull
else
  echo "Cloning from $repo"
  git clone -b "$branch" "$repo"

  # Check if clonning is successful before changing to the directory
  if [ $? -eq 0 ]; then
    echo "Cloned $repo"
    echo "Changing to $repo_name directory"
    cd "$repo_name" || exit
  else
    echo "Failed to clone $repo"
    exit 1
  fi
fi

# check if runtime has been passed as node (string)
# case $runtime in
#   node)
#     echo "Runtime is $runtime"
#     echo "Generating docker file"

#     cat > Dockerfile <<EOF
#     FROM node:14

#     WORKDIR /app

#     COPY package*.json ./

#     RUN $buildCommand install

#     COPY . .

#     EXPOSE 3000

#     CMD ["npm", "start"]
# EOF
    
#     ;;
#   *)
#     echo "Runtime not supported"
#     ;;
# esac


# # Build Docker image
# echo "Building Docker image..."
# docker build -t "$repo_name" .

# # Run Docker image
# echo "Running Docker container..."
# docker run -p 4000:3000 -d "$repo_name"

echo "Deployment completed successfully"



# if [ "$runtime" = "nodejs" ]; then
#   echo "runtime is $runtime and start build commabd is $buildCommand"
  

# else
#   echo "Runtime not supported"
# fi
