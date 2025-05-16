# IT Dashboard (React, Tailwind)
I built this IT dashboard application using React and Tailwind CSS for a job assessment task following the specifications in the brief. (Note: The website is designed in Figma; view my designs here: https://www.figma.com/design/3acmPWOMmDyM5Z2EMycOnt/Internal-Team-Dashboard?node-id=0-1&t=x6h4dt619HNfnWx3-1)

## Setup instructions
1. Clone the repository (or alternatively, download the code onto your computer).
2. Install node.js and npm
3. Use npm install to install required packages
4. Use npm run dev to run the development server and launch the website locally.

Note: I installed and used Vite, React Router, and Tailwind CSS for this React application so make sure that those packages are all correctly installed.

## Summary of features completed
I completed 3 out of 4 of the main features (due to time constraints): the ability to view a list of employees, form for submitting an IT request, and ability to view submitted IT tickets to track status. I followed the suggested layout guidelines and built the dashboard page, staff directory page, IT request page, and tickets page. Unfortunately, I was unable to build the to do list page in time. I also hardcoded the JSON data files for staff.json, tickets.json and updates.json. 

I completed the following main technical requirements (including some bonus requirements):
- React with functional components and Hooks
- State management using useState/useEffect (or Context/Redux if needed)
- Responsive layout 
- Simulated async with setTimeout for ticket submission
- Bonus: Simple router-based navigation (e.g., React Router)
- Bonus: Reusable components (e.g. Ticket, Task)
- Bonus: Use of Tailwind

I stored the reusable components (Ticket, Task, Update, Navbar, etc.) in the components folder. The contexts such as TicketContext are stored in the contexts folder to enable access to the Context API. The main website pages (Dashboard, Staff, etc.) are found in the pages folder and the data folder contains JSON files with mock data that is used throughout the website. 


## Assumptions made


## Features I would add in the future


