const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("REQUEST:", req.method, req.url);
    next();
});

app.get('/ping', (req, res) => {
    res.send("pong");
});

// Load Swagger YAML
const swaggerDocument = YAML.load(
    path.resolve(__dirname, 'documentation/api/api-documentation.yaml')
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* =========================
   IN-MEMORY DATA STORAGE
========================= */

let rooms = [
    { id: 1, name: "Boardroom A", capacity: 20, location: "First Floor" }
];

let bookings = [
    {
        id: 1,
        roomId: 1,
        bookedBy: "John Doe",
        startTime: "2026-05-20T10:00:00",
        endTime: "2026-05-20T11:00:00"
    }
];

/* =========================
   ROOMS ENDPOINTS
========================= */

// GET all rooms
app.get('/api/rooms', (req, res) => {
    res.json(rooms);
});

// GET room by ID
app.get('/api/rooms/:id', (req, res) => {
    const room = rooms.find(r => r.id === parseInt(req.params.id));

    if (!room) {
        return res.status(404).json({ message: "Room not found" });
    }

    res.json(room);
});

// CREATE room
app.post('/api/rooms', (req, res) => {
    const newRoom = {
        id: rooms.length + 1,
        name: req.body.name,
        capacity: req.body.capacity,
        location: req.body.location || "Not specified"
    };

    rooms.push(newRoom);

    res.status(201).json(newRoom);
});

/* =========================
   BOOKINGS ENDPOINTS
========================= */

// GET all bookings
app.get('/api/bookings', (req, res) => {
    res.json(bookings);
});

// CREATE booking
app.post('/api/bookings', (req, res) => {
    console.log("BODY RECEIVED:", req.body);

    if (!req.body) {
        return res.status(400).json({
            message: "Request body is missing or not JSON"
        });
    }

    const { roomId, bookedBy, startTime, endTime } = req.body;

    if (!roomId || !bookedBy || !startTime || !endTime) {
        return res.status(400).json({
            message: "Missing required booking fields",
            received: req.body
        });
    }

    const newBooking = {
        id: bookings.length + 1,
        roomId,
        bookedBy,
        startTime,
        endTime
    };

    bookings.push(newBooking);

    res.status(201).json({
        message: "Booking created successfully",
        booking: newBooking
    });
});

app.get('/api/rooms/:id/availability', (req, res) => {
    const roomId = parseInt(req.params.id);
    const date = req.query.date;

    const room = rooms.find(r => r.id === roomId);

    if (!room) {
        return res.status(404).json({ message: "Room not found" });
    }

    // simple check (basic logic for assignment)
    const isBooked = bookings.some(b =>
        b.roomId === roomId &&
        b.startTime.startsWith(date)
    );

    res.json({
        roomId: roomId,
        date: date,
        available: !isBooked
    });
});

/* =========================
   START SERVER
========================= */

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
    console.log('Swagger UI: http://localhost:8080/api-docs');
});