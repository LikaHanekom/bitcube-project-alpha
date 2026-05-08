The automation is a basic CI process for the repository.The workflows directory is inside the
.github/workflows folders and is automatically triggered when someone createsa pull request 
or code is pushed to the main branch. Within the workflow is a simple automated job. The job
runs on Ubuntu Linux which is provided by GitHub. The first step of the job checks out the
repository files for the workflow to access the contents. On the second step, a demo command
is run using ‘echo’ to display a message in the workflow logs.

In this workflow the foundations of workflow automation practices are used. Automation allows
tasks to run consistently, without requiring manual intervention. CI workflows are useful as they
help developers to have quick feedback whenever any changes are made to code. Automation also
reduces human error, improves reliability and allows for code changes to automatically be verified 
within a shorter time span. 