# API Usage Examples

This document provides realistic usage examples for the Conference Room Booking API.

---

## Authentication (Simulated Example)

> Note: Authentication is defined in Swagger but not yet implemented in code.

### Login Request

**POST** `/auth/login`

### Request
```json
{
  "email": "user@example.com",
  "password": "password123"
}


Room Management
Get All Rooms

GET /api/rooms

Response
[
  {
    "id": 1,
    "name": "Boardroom A",
    "capacity": 20,
    "location": "First Floor"
  },
  {
    "id": 2,
    "name": "Boardroom B",
    "capacity": 15,
    "location": "Second Floor"
  },
  {
    "id": 3,
    "name": "Boardroom C",
    "capacity": 10,
    "location": "Third Floor"
  }
]


Create Room

POST /api/rooms

Request
{
  "name": "Meeting Room D",
  "capacity": 12,
  "location": "First Floor"
}
Response
{
  "id": 5,
  "name": "Meeting Room D",
  "capacity": 12,
  "location": "First Floor"
}


Booking Management
Get All Bookings

GET /api/bookings

Response
[
  {
    "id": 1,
    "roomId": 1,
    "bookedBy": "John Doe",
    "startTime": "2026-05-20T10:00:00",
    "endTime": "2026-05-20T11:00:00"
  },
  {
    "id": 2,
    "roomId": 1,
    "bookedBy": "Alice",
    "startTime": "2026-05-21T09:00:00",
    "endTime": "2026-05-21T10:00:00"
  }
]


Create Booking

POST /api/bookings

Request
{
  "roomId": 1,
  "bookedBy": "Alice",
  "startTime": "2026-05-21T09:00:00",
  "endTime": "2026-05-21T10:00:00"
}
Response
{
  "message": "Booking created successfully",
  "booking": {
    "id": 5,
    "roomId": 1,
    "bookedBy": "Alice",
    "startTime": "2026-05-21T09:00:00",
    "endTime": "2026-05-21T10:00:00"
  }
}


Room Availability (Still trying to fix it)
Check Availability

GET /api/rooms/1/availability?date=2026-05-20

Response
{
  "roomId": 1,
  "date": "2026-05-20",
  "available": true
}
