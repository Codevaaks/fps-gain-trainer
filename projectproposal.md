# Project Briefing

## What is Codevaak?
- Codevaak, as a concept, is designed to be an application for aim training in Kovaak. It's designed to be able to track your progress in routines over a period of time, evaluate where you are weak on, and suggest alternative routines to focus on weaknesses.

- In the long term, we look to apply machine learning models to analyze alternative routines for players who share similar results/statistics. 

## Project Phase 1 (Short Term Goals)
- First, we need to create a UI for the application.
- The architecture is as follows:

- As you can see, a large majority of the work will need to be placed into the authentication layer.
  - The authentication layer might be integrated within the API, depending on how implementation works.
  - The API should be responsible for calling and delivering results from the database.
  - Since it's part of Django, it's deeply coupled. An alternative design could be to abstract away the query layer into an external service like GraphQL, and rely Django only for processing the information; however, this would most likely suggest an architecture change from Django into something more lightweight like Flask.

- Scaling the application will most likely be an issue.
  - In order to ease scaling, dockerizing these microservices is a high priority. After that, we can look into Kuberentes/AWS services to manage the software.

## UI Implementation
- Much of the UI has yet to be mocked out; however, we've abstracted the site into **four** different sections.

1. User page
    - Self explanatory, allow them to modify their profile, view past scores, etc.

2. Benchmarks page
    - Let the user upload, create, and modify a new stats of benchmarks.

3. Sessions page
    - Let the user upload, create, and modify a new session.

4. Analysis page
    - Let the user analyze and view how to improve.

**A strong reference for UI could be AimLabs.**
