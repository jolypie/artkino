## Technologies
MongoDB, Express.js, React, Node.js (MERN stack)

❗ Before launching the project you need to install Node.js -> https://nodejs.org/en ❗

## **Environment variables:**

**Backend**

Create .env file right in the folder named backend. 

Example:
**.env**
```
PORT = 5500 // use any port you want 
JWTKEY = any_password
MONGO_URI = mongodb+srv://username:password@????.fddzzhz.mongodb.net/?retryWrites=true&w=majority&appName=????
```
How to get a MONGO_URI:
1) https://www.mongodb.com/
2) Register
3) Create a new cluster
4) Connect
5) By drivers
6) Copy your connection string

**Frontend**

Create apikey.js in ``` ARTKINO/frontend/src/api/ ```

Example:
**apikey.js:**

```
export const API_KEY = 'your_api_key';
export const API_URL = 'https://api.themoviedb.org/3/'; //the same for everyone
```

How to get an API_KEY from TMDb 

1) https://www.themoviedb.org/
2) Register
3) Settings -> API -> API Key

## Dependencies

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

## **Run**

To start the server in a ```/backend``` folder
```
npm run dev 
```

To start the client and open the page in a ```/frontend``` folder
```
npm start 
```






