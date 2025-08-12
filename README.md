<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
E-Police Connect System
-----------------------

Introduction:
-------------
E-Police Connect System is a centralized platform designed to improve communication and data management between civilians and law enforcement. The system allows citizens to file complaints online and enables police officers to access and manage criminal records, incident reports, and prison records in a secure and efficient manner. It aims to enhance transparency, operational efficiency, and public trust.

Problem Statement:
------------------
Traditional policing systems face several challenges:

- Delays in filing and tracking complaints  
- Lack of real-time communication between citizens and police  
- Manual, paper-based records that are prone to loss and inaccuracy  
- Limited accessibility to historical data  

The E-Police Connect System addresses these challenges by offering a digital, centralized solution that connects citizens with law enforcement agencies through a secure and intuitive web-based interface.

System Requirements:
--------------------
Hardware Requirements:
- Operating System: Windows 10 Pro / Windows 11 Pro (64-bit)  
- Storage: 512GB SSD  
- RAM: Minimum 4 GB  

Software Requirements:
- Frontend: React 18+  
- Backend: ASP.NET Core  
- Database: Microsoft SQL Server 2022  
- Deployment: AWS EC2 (Recommended 4–8GB RAM for medium-scale projects)  

UML & Design Diagrams:
----------------------
- ER Diagram: Represents the database schema and relationships.  
- Use Case Diagram: Shows the system functionalities for different roles (Civilian, Officer, Admin).  
- Class Diagram: Represents the structure of classes and their relationships in the backend code.  
- Sequence Diagram: Describes the flow of data during operations such as filing complaints or viewing records.  
- Activity Diagram: Details the step-by-step user actions and process flow within the system.  

Setup Instructions:
-------------------
1. Clone the repository:

   git clone (https://github.com/omkar3839/CdacProject.git)

2. Navigate into the project directory:

   cd e-police-connect

3. Create a `.gitignore` file in the root folder and include:

   node_modules  
   .env  
   .DS_Store  
   .vscode

4. For the React frontend:

   cd frontend  
   npm install  
   npm start

5. For the ASP.NET backend:

   - Open the backend project in Visual Studio  
   - Configure the database connection string in `appsettings.json`  
   - Run the application via Visual Studio or using:

     dotnet run

Key Features:
-------------
- Civilian signup, login, and complaint tracking  
- Officer login with designated roles  
- Role-based access to complaint status, incident reports, and criminal records  
- Real-time updates using secure API calls  
- Centralized access to police and prison data  
- Data stored securely in Microsoft SQL Server  

Conclusion:
-----------
The E-Police Connect System is a step forward in digitizing law enforcement operations and empowering citizens to interact with police departments more effectively. It streamlines complaint management and ensures data consistency, accuracy, and accessibility in a user-friendly environment.

>>>>>>> a33411ec90484a4de5429dc10c9d34c8c67fb2f9
