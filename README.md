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

I decided to use router based navigation since the website has multiple ages and I have used this method in a previous project before. I also implemented the context API for state management and I chose this option over Redux because I’m building a small application which only requires sharing state across a few components. The Context API is also a built-in aspect of React and it's more straightforward for implementing quickly.  

I made the website responsive for mobiles and tablets and used the following devices to guide the responsive design choices: iPhone 15 Pro (393 x 852), iPhone 16 Plus (430 x 932) and regular iPad (768 x 1024). I tested the website using ResponsivelyApp, iPhone 15 Pro and Macbook Pro laptop, which were the devices I had access to at the time. 

### File structure
The main website pages (Dashboard, Staff, etc.) are found in the pages folder and the data folder contains JSON files with mock data that is used throughout the website. I stored the reusable components (Ticket, Task, Update, Navbar, etc.) in the components folder. The contexts such as TicketContext are stored in the contexts folder to enable access to the Context API. 

## Assumptions made
I assumed that it was not necessary to implement any account functionality so the website currently doesn't distinguish between different types of users. Everyone is able to access all the pages, which could pose some security issues and should be addressed in the future. Ideally, some pages would be restricted based on the type of user viewing the website - i.e. only IT support may view the IT support tickets that were submitted.

Another assumption I made is that the user will not be refreshing the website because using the Context API means that refreshing the page will reset the state of things to the initial state that was defined based on the JSON data files. This can impact the list of tickets which is updated when a user submits a new ticket via the form.  Ideally, I would like to save the ticket data (as well as any other data in the website) in a place where it won’t disappear when the page reloads – i.e. localStorage or by setting up a backend server. 

## Features I would add in the future
There were multiple features I was unable due to lack of time and I would like to implement them in the future:
- Adding checks to the form to prevent incorrect/invalid inputs and also to prevent the user from submitting the form if any of the fields are empty.
- Options for filtering the results on pages such as the tickets list page and staff directory to make it easier for users to find open tickets or employees who work in certain roles.
- Accessibilty considerations
- Unit tests
- To do list page

