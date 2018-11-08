## Boilerplate for Mobile apps


### Create a new repo (app) using this starter:


### Clone this repo on your local machine and rename it

- run
- `git clone -o rnboilerplate-mobile 'ssh://git-codecommit.eu-central-1.amazonaws.com/v1/repos/rnboilerplate-mobile' yourNewProject`

### Delete/remove git history of the clonedProject/yourNewProject

- run
- `cd yourNewProject`
- `rm -rf .git`

### Create your empty repo on (bb, github etc.) where you want to push this cloned project

### Add your yourNewProject/clonedProject to your newly created empty repo

- run
- `cd yourNewProject`
- `git init`
- `git add .`
- `git commit -m "Initial commit"`
- `git remote add origin 'https://{or}ssh://url-of-your-new-empty-repo'`
