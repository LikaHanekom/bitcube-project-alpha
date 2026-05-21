# Bitcube Project Alpha: Conference Room Booking System

This is a top-secret Internal tool for Bitcube.
---
# Table of Contents

- [Project Overview](#project-overview)
- [Intended Users](#intended-users)
- [Technologies Used](#technologies-used)
- [System Context](#system-context)
- [Planned High Level Components](#planned-high-level-components)
- [Project Structure](#project-structure)
- [Project Documentation](#project-documentation)
  - [Agile Documentation](#agile-documentation)
  - [Sprint Documentation](#sprint-documentation)
  - [Reflection Documentation](#reflection-documentation)
- [Key Markdown Artifacts](#key-markdown-artifacts)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the Web Application](#running-the-web-application)
- [Contribution Workflow](#contribution-workflow)
- [Pull Request Expectations](#pull-request-expectations)
- [Upcoming Sections](#upcoming-sections)
- [Repository Hygiene](#repository-hygiene)
- [Status](#status)
- [Author](#author)

---

## Quick Start Guide

Get the application built and running inside an isolated Docker container in less than a minute.

### 1. Clone and Enter the Repository
```bash
git clone https://github.com/LikaHanekom/bitcube-project-alpha.git
cd bitcube-project-alpha
```
### 2 Build the Docker Image : 
Please ensure that Docker is open and running before running the following in the terminal:
```bash
docker build -t conference-booking-ui:v1 .
```

### 3. Run the Container with Environment Variables
```bash
docker run -d `
  -p 8080:80 `
  -e APP_ENV=development `
  -e API_URL=http://localhost:5000/api `
  --name Conference-booking-system `
  conference-booking-ui:v1
```
### 4. Access the App
Open web browser and navigate to:http://localhost:8080

### 5. Clean Up/Stop the App
```dash
docker rm -f Conference-booking-system
```

### Troubleshooting Name Conflicts
If you encounter a container name conflict error like this:
> `Conflict. The container name "/Conference-booking-system" is already in use...`

Simply run the clean-up command to remove the ghost container, and then try running it again:
```bash
docker rm -f Conference-booking-system
```


## Project Overview
The Conference Room Booking System is a collaborative software project developed using Agile Scrum methodologies.

The purpose of the system is to help employees schedule and manage conference room bookings efficiently while reducing scheduling conflicts and improving meeting organization.

This repository currently contain sprint documentation, planning artefacts and the foundational project structure for future implementation.

The purpose of this documentation is to help new contributors understand:

## Intended users

- Employees booking conference rooms
- Administrators managing room availabbility
- Development team members that are contributing to the project.

## Technologies Used
- GitHub
- Git
- Markdown
- Python
- HTML
- CSS
- Javascript
- Docker

## System Context
The Conference Room booking system is intended to manage:

- user authentication
- conference room booking management
- availability scheduling
- reservation validation
- administrative oversight

At the current stage, the repository primarily contains:
- Sprint planning artefacts
- Agile documentation
- Collaboration workflows
- Early project structure

Implementation details and technical functionality will be introduced in future iterations.


### Planned High level components
```plaintext
Frontend Interface
│
├── Booking Forms
├── Room Availability Views
└── User Interaction Pages

Backend Services (Future)
│
├── Booking Logic
├── Validation
└── Database Communication

Database Layer (Future)
│
├── Users
├── Rooms
└── Reservations
```

## Project Structure
```plaintext
bitcube-project-alpha/
│
├── .github/
├── assets/
├── documentation/
│   ├── agile/
│   ├── api/
│   ├── reflections/
│   └── sprint-1/
├── src/
│   ├── app.js
│   ├── index.html
│   ├── main.py
│   └── style.css
├── .dockerignore
├── .gitignore
├── Dockerfile
└── README.md
```

## Project Documentation

### Agile Documentation
- `documentation/agile/user-stories.md`
- `documentation/agile/epics.md`
- `documentation/agile/priority-matrix.md`

### Sprint Documentation
- `documentation/sprint-1/sprint-1-planning.md`
- `documentation/sprint-1/sprint-1-dailies.md`
- `documentation/sprint-1/sprint-1-review.md`
- `documentation/sprint-1/sprint-1-retrospective.md`
- `documentation/sprint-1/sprint-1-summary.md`

### Reflection Documentation
- `documentation/reflections/personal-reflection.md`

---


## Key Markdown Artefacts

The repository contains several markdown artefacts created during Agile planning and sprint activities.

### Agile Planning Artefacts

| File | Purpose |
|---|---|
| `epics.md` | Defines the high-level project goals and major functional areas |
| `priority-matrix.md` | Organises features and tasks based on importance and urgency |
| `user-stories.md` | Contains user stories describing intended system functionality |

---

### Sprint 1 Documentation

| File | Purpose |
|---|---|
| `sprint-1-planning.md` | Documents sprint goals, scope, and planned work |
| `sprint-1-dailies.md` | Records daily stand-up discussions and progress updates |
| `sprint-1-checkpoint.md` | Captures sprint checkpoint reviews and interim progress |
| `sprint-1-review.md` | Summarises sprint review outcomes and completed work |
| `sprint-1-retrospective.md` | Reflects on sprint successes, challenges, and improvements |
| `sprint-1-summary.md` | Provides an overall summary of Sprint 1 activities and outcomes |

---

### Reflection Documentation

| File | Purpose |
|---|---|
| `personal-reflection.md` | Contains individual reflections on project collaboration and development practices |

## Prerequisites
- Git installed
- GitHub account access
- VS Code or another IDE
- Docker Desktop installed (optional, for containerized running)
- Basic understanding of Agile Scrum workflows

## Getting Started

### Clone Repository
```bash
git clone https://github.com/LikaHanekom/bitcube-project-alpha.git
```

### Open the project

```bash
cd bitcube-project-alpha
```

# Open the folder in VS Code.
```bash
code .
```

## Running the Web Application

This project is a static web application built with HTML and CSS.

You can run it in **two ways**:

---

### Option 1: Open directly in browser

1. Navigate to the project folder
2. Open the src/ folder and locate index.html.

3. Double-click `index.html`
4. It will open in your default browser

---

### Option 2: Use Live Server

If you're using VS Code:

1. Install the **Live Server extension**
2. Open the project in VS Code
3. Right-click `index.html`
4. Click **"Open with Live Server"**

This will run the project at:

http://127.0.0.1:5500

### Option 3: Running with Docker 

You can also run this project using Docker.

#### 1. Build the image

```bash
docker build -t conference-booking-ui:v1 .
```
#### Run the Container
```bash
docker run -d -p 8080:80 --name Conference-booking-system conference-booking-ui:v1
```
#### Open in browser
http://localhost:8080

#### Stop/Reset the Container
```bash
docker rm -f Conference-booking-system
```

## Contribution Workflow
This project uses feature branches and pull requests for collaboration

Contributors should avoid committing directly to the 'main' brnch. 

### Contribution Steps
1. Create a new local feature branch (git checkout -b feature/your-feature-name).
2. Make your changes
3. Commit using conventional commit messages
4. Push your branch to GitHub (git push origin feature/your-feature-name).
5. Open a Pull Request
6. Request peer review before merging

## Pull Request Expectations

When creating a Pull Request:
- Clearly explain the purpose of the changes
- Reference related sprint documentation
- Describe areas requiring review
- Keep commits focused and atomic

---

## Upcoming Sections

Future versions of this README may include:

- Development environment setup
- Installation instructions
- System architecture diagrams
- Database structure
- API documentation
- Testing strategy
- Deployment guidance

---


## Repository Hygiene

The `.gitignore` file excludes:
- `.env`
- `node_modules/`
- `.log`
- `.DS_Store`

---

## Status
Project currently in planning and onboarding phase.

## Author
Developed by Alika Hanekom
