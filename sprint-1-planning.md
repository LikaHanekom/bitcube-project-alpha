# Sprint 1 Planning Session
Date: 13 May 2026
Sprint Goal: Enable employees and administrators to successfully manage conference room bookings and availability without scheduling conflicts.   
## Attendees
- Product Owner: Alika Hanekom
- Scrum Master: Alika Hanekom
- Development Team: Alika Hanekom,

## Velocity Target
Intended Velicity for Sprint 1: 18 story points

## Selected User Stories

| Story # | Title | Story Points |
| Story #1 | As a Employee I want to book an available conference room| 5|
| Story #3 | As a Employee I want to search for rooms based on available capacity| 3|
| Story #6 | As a Admin I want to view booking activity on a dashboard| 5|
| Story #4 | As a Employee I want to cancel my room bookings| 2|
| Story #8 | As a Receptionist I want to create bookings for visitors| 3|


## Dependencies
[List key dependencies]
Story #6 - dependednt on Story #1
Story #4 - dependent on Story #1
Story #8 - dependent on Story #1

## Risks

| Risk | Probability | Impact | Mitigation |
| Booking Conflicts logic difficult to test| Medium | High | Create additional conflict test cases and validate booking rules early in the sprint |
| Dashboard reporting queries may perform slowly | Medium | Medium | Simplify dashboard metrics and optimise database queries if delays occur |
| Visitor permission controls may be unclear | Low | Medium | Review role permissions early and validate receptionist access requirements before implementation |

## Standup Cadence
Time:   8:10 Daily
Format: Yesterday / Today / Blocker