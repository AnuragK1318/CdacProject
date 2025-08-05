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

   git clone https://github.com/your-username/e-police-connect.git

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

