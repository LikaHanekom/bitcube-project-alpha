# Presentation Notes

# Slide 1:
Introduce yourself and state the core mission:
 Today, we aren't looking at the code itself, but rather the engine that drives our development—our Git and collaboration workflow.
  This ensures that a team of 5 or 50 can ship booking system features daily without treading on each other's toes.

# Slide 2
 We will track a feature's lifecycle from local code to a merged Pull Request.

# Slide 3
In a booking system, a broken backend API means users can't secure rooms. 
A messy Git history means we can't roll back bugs quickly. Our workflow exists to prevent code regression.

# Slide 4
We practice a feature-branch workflow. No developer ever pushes directly to main.
 Every change lives in an isolated branch until it passes through our quality gates.

# Slide 5
To collaborate effectively, we must ensure our environments match. When you checkout a new branch we need to ensure it matches the main.
We are using Git, Github and docker for collaborations. 

# Slide 6
A Pull Request is a communication tool, not just a code dump. We require a description of what changed, 
why it changed, 
and how the reviewer can test it locally using Docker.

# Slide 7
If you introduce a new environment variable or an API endpoint route while building a feature,
updating the README and the API contract is a mandatory part of the Git commit.
Documentation is treated as code."

# Slide 8 
"The biggest pitfall in our booking system project is merge conflicts. T
o mitigate this, developers are required to pull down the latest develop branch daily
 and rebase their feature branches frequently."

# Slide 9 
For the demo, I am going to simulate adding a new branche.

# Slide 10
Wrap up, 
say thank you,
here is the repo link for us to 
