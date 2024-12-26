# Hotel Booking Platform

## **Project Purpose**
This project aims to build a modern and user-friendly hotel booking platform that allows users to explore, book, and manage hotel rooms effortlessly. The platform integrates secure authentication, interactive design, and robust functionality to ensure a seamless user experience.

---

## **Live URL**
https://hotel-booking-client-2f049.web.app/

---

## **Key Features**

### **Homepage**
- **Banner Section**: Includes a dynamic slider with a title, description, and a "Rooms" button redirecting users to the Rooms page.
- **Map Integration**: Displays the hotel's location using the `react-leaflet` package.
- **Featured Rooms**: Showcases six top-rated rooms with images, descriptions, and a "Book Now" button.
- **User Reviews**: Displays authentic user reviews sorted by the latest timestamp.
- **Special Sections**: Includes additional sections like Special Offers and Amenities.

### **User Authentication**
- Email and password-based authentication with validation.
- Social login options (Google/GitHub).
- Toast notifications for successful login/registration.

### **Rooms Page**
- Displays all rooms fetched from the database.
- Filter by price range (server-side implementation).
- Redirects to room details upon clicking a room card.

### **Room Details Page**
- Detailed information about a room, including reviews.
- Booking modal with date selection and summary.
- Ensures rooms are unavailable after booking.

### **My Bookings Page**
- Displays all bookings made by the logged-in user.
- Features include:
  - Cancel booking (with confirmation modal).
  - Post reviews for booked rooms.
  - Update booking dates.

### **Review System**
- Reviews include username (read-only), rating (1-5), comment, and timestamp.
- Reviews are displayed on the room details page.

### **Access Control**
- Non-authenticated users cannot book rooms or post reviews.

### **404 Page**
- A creative page with an engaging design and a "Back to Home" button.

---

## **Technologies Used**

### **Frontend**
- React.js
- Tailwind CSS
- React Helmet
- React Leaflet
- Framer Motion

### **Backend**
- Node.js
- Express.js
- MongoDB

### **Authentication**
- Firebase Authentication
- JSON Web Tokens (JWT)

### **Other Packages**
- Moment.js (date comparison)
- React-toastify (notifications)
- React-simple-typewriter (text animations)
- React-awesome-reveal (animations)

---

## **Installation Instructions**

1. Clone the repositories:
   ```bash
   git clone <client-side-repo-url>
   git clone <server-side-repo-url>
   ```
2. Navigate to the respective directories and install dependencies:
   ```bash
   cd client
   npm install

   cd server
   npm install
   ```
3. Set up environment variables for both client and server:
   - Firebase configuration keys
   - MongoDB credentials

4. Start the development servers:
   ```bash
   cd client
   npm run dev

   cd server
   npm start
   ```
5. Visit the application at `https://hotel-booking-client-2f049.web.app/`.

---

## **Commit Guidelines**
- **Frontend**: Minimum 15 meaningful commits with descriptive messages.
- **Backend**: Minimum 8 meaningful commits with descriptive messages.

---

## **Deployment**
- Ensure the server is live and free from CORS/404/504 errors.
- Authorize your domain in Firebase settings.
- Test private routes for smooth navigation upon reload.
