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

# Install dependencies
echo "Installing dependencies"
npm install

# Build the project
echo "Building the project"

#build angular project
ng build --prod



# TODO .... run deployments commands


echo "Deployment completed successfully"