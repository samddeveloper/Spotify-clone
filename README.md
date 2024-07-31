# Spotify Clone


What's in this Milestone
Started a new React project using npm create vite
Configured the router
Set up Material UI
Created a new Spotify project
Linked Spotify credentials
Added image assets
Overview
This is a responsive Spotify clone built with relevant tools (details below). The app includes around 20 components and uses Spotify's Web API and SDK to deliver a Spotify-like experience. You can browse albums, playlists, play and pause songs, skip tracks, and adjust the volume.

Structure
The project is divided into 8 milestones, each comprising several lessons that focus on different parts of the app. Each lesson corresponds to a commit that contains all the changes, making it easy to compare your code. You can check out all the commits here. Just click on a commit to see what was done in a specific lesson.

Getting Started
To get the project running, follow these steps:

Create a Spotify Project: Head over to the Spotify Dashboard and log in with your Spotify account. Once logged in, click the green CREATE AN APP button. Name your project something like Spotify Clone, add a description, check the Terms of Service box, and click CREATE.

Get Your Credentials: After creating your Spotify project, you'll see your Client ID and a button to show your Client Secret. Copy these.

Set Up Environment Variables: In your project's root folder, rename the .env.example file to .env and paste the Client ID and Client Secret into the appropriate spots in this file.

Configure Redirect URIs: Go back to your project on the Spotify Dashboard, click Edit settings, and add http://localhost:5173 under Redirect URIs. Click ADD and then SAVE.

Run the Project: Now everything is set up. Run npm run dev in your terminal, and you should see the project up and running!

Tools Used
The app uses the following Node modules:

Material UI
React Router V6
spotify-web-api-node
Spotify SDK
Documentation:
Spotify Web Playback SDK
Spotify Web API
Material UI
React
React Router
Note: Due to Spotify's limitations, others can't use your site after it's deployed unless you've whitelisted their emails in the dashboard under the Users and access tab.






