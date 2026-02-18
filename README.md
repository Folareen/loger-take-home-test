# loger-take-home-test

This project contains both a web app (Next.js) and a mobile app (Expo/React Native).

## Requirements

- Node.js (v18 or newer recommended)
- npm (comes with Node.js)
- For mobile: Expo CLI (`npm install -g expo-cli`)

## Setup

1. **Clone the repository**  
	Download or clone this project to your computer.

2. **Install dependencies**  
	Open a terminal in the project folder and run:
	```
	cd web
	npm install
	cd ../mobile
	npm install
	```

## Running the Web App

1. Go to the `web` folder:
	```
	cd web
	```
2. Start the development server:
	```
	npm run dev
	```
3. Open your browser and go to http://localhost:3000.

## Running the Mobile App

1. Go to the `mobile` folder:
	```
	cd mobile
	```
2. Start the Expo development server:
	```
	npm start
	```
3. Follow the instructions in the terminal to open the app on your phone (using the Expo Go app) or in an emulator.

## Testing

- **Web:**  
  This project does not include automated tests. You can test the web app by running it locally and using the browser.

- **Mobile:**  
  There are no automated tests. You can test the mobile app by running it in Expo Go or an emulator.

## Notes

- For any issues with dependencies, try deleting `node_modules` and running `npm install` again.
- If you need to reset the mobile app to a fresh state, run:
  ```
  npm run reset-project
  ```
  in the `mobile` folder.