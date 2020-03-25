**********************
* BetterBoard README *
**********************

Hello, this README is intended to help future editors and viewers of the project understand the setup and get everything properly set up beforehand. Sections are noted with italics

*Project*: BetterBoard, a service that handles students, teachers, and administrators school lives.

*Authors*: Noah Causin, Conner Wallace, Connor Powers, Evan Casey, Timo Budiono, and 
Cameron Craik 

*Prerequisites for editing*: 
-Must have access to the internet
-Must have a Github account “https://github.com/”
    ->You must also request to become an editor on the project to have access
        ->This step is only necessary if you intend on editing!
-Must have Github installed on machine
    ->Windows/Mac
        ->Go to “https://desktop.github.com/” for Mac click under the larger Windows button for a Mac build
        ->Go to downloads folder run and install

    ->Linux
        ->Open a terminal
        ->sudo apt update
        ->sudo apt upgrade
        ->sudo apt install git

-Must have some IDE to edit vue.js such as Visual Studio code
    ->This step is only necessary if you intend on editing!
-Have Vue.js downloaded
    ->Open your browser
    ->Navigate to https://vuejs.org/v2/guide/installation.html
    ->Scroll down and choose the Vue.js Development version

You’re ready to start assisting/viewing the project!

*Installation*:
1. Navigate to a directory of your choosing to install this project, or create a new one

2. Clone Github repository “https://github.com/ConnerWallace/classProject.git” using the command “git clone x” (x represents the repository link)
    a. This is the frontend

3. Clone Github repository “https://github.com/N0manKet/classProject-Backend.git” as a subfolder of step 2 using the command “git clone x” (x represents the repository link)
    a. This is the backend

4. After both are downloaded, check the README (which you’re here nice <3)

5. Make sure you are in the top level of the classProjectfolder

6. Run the command “npm install” while in the classProject folder

7. Go into the classProjectBackend folder

8. Run the command “npm install” while in the classProjectBackend folder

*Notes*: A current 'superuser is being used for development purposes only and 
combines the roles of admin, student, and teacher. 
User: student@kettering.edu pass: password 

This site is also does not fully implement all the features it was 
designed to

*Running the tests/viewing the current project*:
1. Navigate to the classProjectBackend folder

2. Run the “npm start” command to launch the database

3. Open another terminal

4. Navigate to classProject folder

5. Run command “npm run serve”

6. After loaded, navigate to your browser and go to the link “” which should be listed in your terminal already

7. Welcome to the website!

A demonstration of the website:
1. You are on the home page! A quick rundown of the items on here: 
    a. On the upper left is a Navigation bar that can go back to this page, courses, links to other sites, current grades called records, and a contact list. 

    b. On the right is bar to search the website that does not currently function, a language select, and the user profile

    c. On the left are buttons with the same functionality as the navigation bar, but more noticeable at the home page

    d. Finally center page is a calendar and assignment list

2. Take a look at the current calendar in front of you. It has all the dates you need to start scheduling. This has room for events such as a class schedule, your doctor’s appointments, etc.

3. Scrolling down there is also an assignment due date viewer. This is color coded by class and displays the name of the assignment, what type of assignment it is (such as quiz or paper), and when it is or was due.

4. Click on either the Current Courses button or courses text in the navigation bar. Either way will take you to the current courses page. This displays a list of classes that a student is taking, and has the administrative ability to add on an additional class.Let’s try it!

    a. Click on the add course button. There are four fields for you to enter. Please enter a course number such as CS-101 or Math-258. Now enter a course name such as Computing and Algorithms 1 or  Probability Statistics. Go to the right and click on the dropdown arrows, and choose the professor who is instructing the course. Finally, choose the student who will be enrolling in the same method as the professor. When finished hit submit. You will be taken to a detailed page with the course’s ID in the system.

    b. Click on the courses tab in the navigation bar, and the new course is now in the list!

    c. Currently none of the classes can be entered into.

5. Let’s go back home by clicking home in the navigation bar

6. The next page are the links, click either the links button or navigation bar links text to go there

7. There are two buttons, currently the only one that navigates elsewhere is the first. Click on the Google Drive button.

8. You are now on Google Drive where you can create, share, and collaborate on a variety of different projects and documents with others!

9. If you did not open that button with the middle mouse button, hit the arrow in the upper left to go back to the links page.

10. Let’s go back home by clicking home in the navigation bar

11. The next page are the records, click either the records button or navigation bar records text to go there

12. This page displays a student’s current records. The fields are the class ID, Name, and current number grade that student has in the course. There is a past records button that is currently not working but is planned to show grades of previous terms and years. At the bottom are the students current GPA.

13. Let’s go back home by clicking home in the navigation bar

14. The next page are the contacts, click either the contacts button or navigation bar contacts text to go there
    a. You can sort by name, email, and section in the upper left.

    b. Type in anything you want into the filter, it will filter the contact results. To the right you can filter by specific field.

    c. Change contacts per page from 5 to 10 and view the new people.

    d. Click the arrows next to each of the four fields to see how the contacts are sorted.

    e.There are buttons to message, email, and call each contact, none of which currently work

    f. The initial sort of the list changes the initial order the contacts would be in

15. Let’s go back home by clicking home in the navigation bar

16. Click the dropdown for language and view the languages, currently there is only an english translation of the site

17. Click the user dropdown and go to profile

18. Your information is displayed!!

19. Go to edit your info

20. This would be the initial setup to make a BetterBoard account

21. Enter an email, phone #, name, and birthday.

22. Choose someone to be your emergency contact and enter in their email, number, name, and relationship. Hit submit

23. This has been a walkthrough of the site to get you familiar with it! Now that you’ve followed the steps that showed off the current features, feel free to poke around some more

Thanks for using this README~!