
---

## **Backend README**
### **`backend/README.md`**

# Travel Agency Backend

This is the backend of the **Travel Agency Booking System**, built with **Node.js** and **Express**. It handles API requests, manages data storage with MongoDB, and supports booking operations.

---

## **Features**
- RESTful API endpoints for:
  - Fetching tour packages
  - Booking trips
- MongoDB integration for data storage.
- Error handling for API requests.
- Seed route to initialize sample data.

---

## **Tech Stack**
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **MongoDB**: Database
- **CORS**: For cross-origin resource sharing

---


---

## **Setup and Installation**

### **Prerequisites**
- Node.js (version 14+)
- npm (Node Package Manager)
- MongoDB (local or Atlas)

### **Steps**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/iamsnehadas/travel-agency-backend.git
2. **Navigate to the Backend Directory**:
   ```bash
   cd backend
3. **Install dependencies**:
   ```bash
   npm install
4. **Configure Environment Variables: Create a .env file with the following**:
   ```plaintext
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
5. **Run the server**:
   ```bash
   node server.js

The API will be available at http://localhost:5000.

---
---
