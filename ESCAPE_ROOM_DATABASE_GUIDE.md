# Escape Room Database Integration Guide

## 🎯 What Was Done

Your Prisma database has been completely transformed to support your Escape Room Builder with full CRUD functionality!

## 📊 Database Schema

### EscapeRoom Model
```prisma
model EscapeRoom {
  id              String   @id @default(uuid())
  title           String
  description     String
  timerMinutes    Int
  backgroundImage String
  stages          Json     // Stores array of Stage objects
  generatedHtml   String   @db.Text // Stores the generated HTML code
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

**What it stores:**
- Room configuration (title, description, timer, background)
- All puzzle stages as JSON (with full stage data)
- Generated HTML output
- Creation and update timestamps

## 🔌 API Endpoints

### 1. **List All Escape Rooms**
```
GET http://localhost:4080/api/escape-rooms
```
- Returns all saved escape rooms (without stages/html for performance)
- Supports search: `GET /api/escape-rooms?search=logic`

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "title": "Logic Challenge",
      "description": "Description here",
      "timerMinutes": 30,
      "backgroundImage": "/images/bg.jpg",
      "createdAt": "2025-10-16T11:14:42.675Z",
      "updatedAt": "2025-10-16T11:14:42.675Z"
    }
  ]
}
```

### 2. **Create New Escape Room**
```
POST http://localhost:4080/api/escape-rooms
Content-Type: application/json

{
  "title": "My Escape Room",
  "description": "Description",
  "timerMinutes": 30,
  "backgroundImage": "/images/bg.jpg",
  "stages": [
    {
      "id": "stage-1",
      "title": "Puzzle 1",
      "description": "...",
      "type": "format-code",
      "question": "...",
      "answer": "...",
      "hints": ["hint1"],
      "code": "..."
    }
  ],
  "generatedHtml": "<html>...</html>"
}
```

### 3. **Get Single Escape Room (with full details)**
```
GET http://localhost:4080/api/escape-rooms/[id]
```
- Returns complete room data including stages and generatedHtml

### 4. **Update Escape Room**
```
PUT http://localhost:4080/api/escape-rooms/[id]
Content-Type: application/json

{
  "title": "Updated Title",
  "description": "Updated description",
  ...
}
```

### 5. **Delete Escape Room**
```
DELETE http://localhost:4080/api/escape-rooms/[id]
```

## 🎨 Frontend Features

### New Buttons Added:

1. **📄 New** - Create a new escape room (clears current work)
2. **📂 Load** - Opens a modal showing all saved rooms
3. **💾 Save** - Saves current room (creates new or updates existing)
4. **🔄 Update** - Button text changes to "Update" when editing saved room

### Load Modal Features:

- Lists all saved escape rooms
- Shows title, description, timer, and creation date
- **Load button** - Loads a room into the builder for editing
- **Delete button** (🗑️) - Removes a room from database
- Search/filter functionality

### Status Indicator:

When editing a saved room, you'll see:
```
✓ Currently editing saved room
```

## 🚀 How to Use

### Saving a New Room:

1. Design your escape room in the builder
2. Click **"Save Room"**
3. Room is saved to database
4. You'll get a confirmation with the Room ID
5. Button changes to **"Update"** for future edits

### Loading an Existing Room:

1. Click **"Load"** button
2. Modal shows all your saved rooms
3. Click **"Load"** on any room
4. Room loads into the builder
5. Make changes and click **"Update"** to save

### Creating a New Room (after loading):

1. Click **"New"** button
2. Confirm you want to create new room
3. Builder resets to default state
4. Design your new room
5. Click **"Save Room"**

## 🔄 Database Migration Applied

```sql
-- Dropped old User model
DROP TABLE "User";
DROP TYPE "LineStatus";

-- Created new EscapeRoom table
CREATE TABLE "EscapeRoom" (
    "id" TEXT PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "timerMinutes" INTEGER NOT NULL,
    "backgroundImage" TEXT NOT NULL,
    "stages" JSONB NOT NULL,
    "generatedHtml" TEXT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP NOT NULL
);

-- Added index for performance
CREATE INDEX "EscapeRoom_createdAt_idx" ON "EscapeRoom"("createdAt");
```

## ✅ Testing

You can test the API directly:

```powershell
# List all rooms
(Invoke-WebRequest -Uri http://localhost:4080/api/escape-rooms -UseBasicParsing).Content

# Get specific room
(Invoke-WebRequest -Uri http://localhost:4080/api/escape-rooms/[id] -UseBasicParsing).Content
```

Or use the frontend at: **http://localhost:3000/main_pages/escape-room**

## 📁 Files Modified/Created

### Backend (API):
- ✅ `api/prisma/schema.prisma` - Updated schema for EscapeRoom
- ✅ `api/prisma/migrations/20251016220945_change_to_escape_room/` - Migration
- ✅ `api/app/api/escape-rooms/route.ts` - List & Create endpoints
- ✅ `api/app/api/escape-rooms/[id]/route.ts` - Get, Update, Delete endpoints
- ❌ `api/app/api/users/` - Deleted (no longer needed)

### Frontend:
- ✅ `frontend/app/main_pages/escape-room/page.tsx` - Added CRUD functionality
  - Added save/load/delete handlers
  - Added LoadRoomsModal component
  - Added New/Load buttons
  - Updated Save button to support create/update

## 🎉 Summary

Your Escape Room Builder now has:
- ✅ Full database persistence
- ✅ Create new escape rooms
- ✅ Load existing escape rooms
- ✅ Update escape rooms
- ✅ Delete escape rooms
- ✅ List all escape rooms with search
- ✅ Visual feedback for saved state
- ✅ Proper CRUD API following REST conventions

All data is stored in PostgreSQL via Prisma ORM, and the frontend seamlessly integrates with the API!

