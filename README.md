* *For admin* 

**Dependencies for frontend**
```
cd frontend
npm install @emotion/react @emotion/styled @mui/icons-material @mui/material @testing-library/jest-dom @testing-library/react @testing-library/user-event axios jwt-decode node-fetch react react-awesome-stars-rating react-dom react-router-dom react-scripts sass web-vitals react-slick slick-carousel
```

**Dependencies for backend**
```
cd backend
npm install axios bcrypt cors dotenv express joi joi-password-complexity jsonwebtoken mongoose nodemon validator
```

**Run**

To start the server
```
/cd backend 
/npm run dev 
```

To start the client and open the page
```
/cd frontend
/npm start 
```

# **Environment variables:**

**Backend**

Create .env file right in the folder named backend. 

Example:
**.env**
```PORT = 5500 // use any port you want 
MONGO_URI = mongodb+srv://username:password@mongodb.fddzzhz.mongodb.net/?retryWrites=true&w=majority&appName=mongodb // login to MongoDB Atlas and create a new cluster, connect it by drivers and copy your connection string
JWTKEY = anything // as a password use anything you want ```

**Frontend**

Create apikey.js in ARTKINO/api/

**apikey.js:**

export const API_KEY = 'your_api_key';
export const API_URL = 'https://api.themoviedb.org/3/'; //the same for everyone

How to gen an API_KEY from TMDb 

1) https://www.themoviedb.org/
2) Register
3) Settings -> API -> API Key






