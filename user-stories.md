# Conference Room Booking System - User Stories

## Story #1: Book a conference room
**As a** Employee  
**I want to** book an available conference room  
**So that** I can schedule meetings for my team  

### Acceptance Criteria:
- [ ] Given I am logged in, When I select an available room and time slot, Then the booking must be confirmed
- [ ] Given a room is already booked, When I try to reserve the same time slot, Then the system must display a conflict message
- [ ] Given my booking is successful, When I view my bookings, Then the new booking must appear in the list

### Story Points:
5

### Priority:
High

### Dependencies:
- None

### Technical Notes:
- Requires booking database table
- Requires authentication system

### Design Notes:
- Calendar view should clearly display available and unavailable slots


## Story #2: Recurring meetings setup

**As a** Employee  
**I want to** setup recurring room bookings
**So that** I do not need to manuallt book the room every week.

### Acceptance Criteria:
- [ ] Given I create a recurring booking, When I select weekly repetition, Then the system needs to create bookings for each week.
- [ ] Given that there is conflicts between the recurring slots and another booking, When the schedule is processed, Then the conflicting booking must fail and display a clear error message.
- [ ] Given the recurring room booking is created, When I check my schedule, Then all my future bookings for the room must appear.

### Story Points:
8

### Priority:
Medium

### Dependencies:
- Story #1: Book a conference room

### Technical Notes:
- Requires schedule algorithm
- Requires conflict detection for future bookings

### Design Notes:
- Users should be able to select monthly, weekly and daily repitition.
- The interface should show a preview of recurring dates before confirmation


## Story #3: Room capacity filtering

**As a** Employee  
**I want to** search for rooms based on available capacity  
**So that** I can find a room suitable for my meeting size

### Acceptance Criteria:
- [ ] Given I enter the number of attendees, When I search, Then only suitable rooms must be displayed
- [ ] Given no rooms match the requested capacity, When the search completes, Then the system must display a no-results messager
- [ ] Given I apply the filter, When room results appear, Then each room’s capacity must be clearly visible

### Story Points:
3


### Priority:
Medium

### Dependencies:
- None

### Technical Notes:
-Requires room capacity storage
-Requires search filter logic

### Design Notes:
- Search filter should be responsive and simple
- Each rooms card should clearly display the rooms capacity

## Story #4: Booking cancellation


**As a** Employee  
**I want to** cancel my room bookings  
**So that** unused rooms can become available for other employees

### Acceptance Criteria:
- [ ] Given I have an active booking, When I click cancel, Then the booking must be removed
- [ ] Given the booking is cancelled, When another user searches for rooms, Then the slot must be shown as availible
- [ ] Given I accidentally cancel, When cancellation occurs, Then the system must display a confirmation prompt.

### Story Points:
2

### Priority:
High

### Dependencies:
- Story #1: Book a conference room

### Technical Notes:
- Requires booking deletion functionality

### Design Notes:
- Confirmation popup should be implemented to prevent accidental cancellation
- Cancelled booking should immediately update in the system



## Story #5: Room equipment requirements

**As a** Employee  
**I want to** select the required equipment when booking a room  
**So that** meetings have the necessary resources available when I need the room.

### Acceptance Criteria:
- [ ] Given I create a booking, When I select equipment options, Then the request must be attached to the booking and display appropriately.
- [ ] Given a room lacks required equipment, When I search, Then the room must not appear in available results
- [ ] Given equipment is selected, When the booking is confirmed, Then the equipment list must appear in booking details

### Story Points:
5

### Priority:
Medium

### Dependencies:
- Story #1: Book a conference room

### Technical Notes:
- Requires an equipment inventory database
- Requires filtering logic for room equipment capabilities

### Design Notes:
- Equipment should be easy to select (check-boxes)
- Most common equipment should appear first on the list



## Story #6: Admin dashboard viewing

**As a** Admin  
**I want to** view booking activity on a dashboard  
**So that** I can monitor room availability and system usage.

### Acceptance Criteria:
- [ ] Given I log in as admin, When I access the dashboard, Then all booking statistics must display
- [ ] Given active bookings exist, When the dashboard loads, Then current room bookings must be visible
- [ ] Given unauthorized users attempt to access the dashboard, When they open the dashboard, Then access must be denied


### Story Points:
5

### Priority:
High

### Dependencies:
- Story #1: Book a conference room

### Technical Notes:
- Requires admin authentication and verification
- Requires reporting data and analytical queries

### Design Notes:
-Dashboard should contain visual elements, such as charts and summaries
- Important alerts should be clearly highlighted

## Story #7: Room maintenance scheduling

**As a** Facilities Manager  
**I want to** mark rooms as unavailable during maintenance  
**So that** employees cannot book rooms that are being serviced

### Acceptance Criteria:
- [ ] Given maintenance is scheduled, When the room status updates, Then employees must not be able to book the room
- [ ] Given maintenance ends, When the status changes, Then the room must become available to be booked again
- [ ] Given a room is under maintenance, When employees search rooms, Then maintenance information must display clearly

### Story Points:
5

### Priority:
Medium

### Dependencies:
- Story #1: Book a conference room

### Technical Notes:
-Requires real-time room avalability status updates
-Requires a maintenance scheduling module

### Design Notes:
- All scheduled maintenance should be clealt displayed on calendars


## Story #8: Visitor booking assistance

**As a** Receptionist  
**I want to** create bookings for visitors  
**So that** external guests can use meeting rooms when necessary

### Acceptance Criteria:
- [ ] Given a visitor wants to use the meeting room, When I create a booking, Then the visitor details must be saved
- [ ] Given the booking is confirmed, When the visitor checks in, Then reception staff must verify the booking
- [ ] Given visitor details are incomplete, When I attempt submission, Then the system must display incomplete errors

### Story Points:
3

### Priority:
Medium

### Dependencies:
- Story #1: Book a conference room

### Technical Notes:
- Requires visitor cridentials storage
- Requires permission controls for receptionsit

### Design Notes:
- Visitor forms should not be time-consuming
- Important cridentials and contact details must be mandatory

## Story #9: Booking conflict resolution

**As a** Admin  
**I want to** manage booking conflicts  
**So that** room scheduling issues can be resolved effectively

### Acceptance Criteria:
- [ ] Given overlapping bookings exist, When conflicts are detected, Then admins must receive alerts
- [ ] Given a conflict occurs, When the admin reviews it, Then they must be able to modify or cancel bookings
- [ ] Given conflicts are resolved, When users view bookings, Then updated schedules must appear correctly

### Story Points:
8

### Priority:
High

### Dependencies:
- Story #1: Book a conference room

### Technical Notes:
- Requires conflict detection module
- Requires admins to have override permissions

### Design Notes:
- Conflict warnings should be unique and highly visible
- Resolution actions should be fast to implement

## Story #10: Usage reports generation

**As a** Admin  
**I want to** generate room usage reports  
**So that** management can analyse room utilisation trends

### Acceptance Criteria:
- [ ] Given booking data exists, When I generate a report, Then usage statistics must display correctly
- [ ] Given a date range is selected, When the report loads, Then only relevant data must appear
- [ ] Given reports are generated, When I export them, Then the file must download successfully

### Story Points:
8

### Priority:
Low

### Dependencies:
- Story #6: View admin dashboard

### Technical Notes:
- Requires reporting functionality
- Requires exporting functionality
- Requires database queries

### Design Notes:
- Reports should support csv and pdf export formats
- Charts should be able to improve readibility.