# Spacestagram: Image-sharing from the final frontier
## By: Juan Jose Vanegas Maya 

This project was created from scratch with [Create React App](https://github.com/facebook/create-react-app). It collects data from one of the most popular websites at NASA, APOD ([Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html)). The project fetches pictures starting from Oct 2021 to today. The pictures are presented in individual cards. The cards display information about the picture, such as the title, the author, the date and an interaction section. The interaction section allows a user to 'like' or learn more about the picture through buttons. A user can choose to 'unlike' a picture as well - sort of like a space-oriented Instagram. 

I chose to lay the images out in single card items because that gives the user the ability to see multiple images at once. If one is interested in learning more about a particular image, they can see more information with a modal overlay. The modal overlay then includes the previously shown information (title, date and author) in addition to a detailed explanation. 

Additionally, since loading images from an API is a heavy task, users may experience some delay while retrieving the data. Therefore, I chose to add a loading state that gives the user the impression that the website is loading and that no errors have spawned. 

Lastly, I chose to add a 'like' animation similar to our most current social media platforms. Most users may already feel familiar with this animation. I chose the red heart as a 'liked' because it is the symbol that represents liking a picture in one of the most widely used social media platforms, Instagram. After all, the name of this project is Spacestagram, not Spacebook or Twitspace ;). 


Fun fact: This website is one of the most popular websites across all US federal agencies.

## Shopify Challenge

In the project you can:

### `Fetch data from one of NASA’s APIs and display the resulting images `
Search results should come from NASA’s free APIs.
### `Display descriptive data for each image `
Each image result lists at least a title, date of capture (ideally in earth_date) and a button to “like” that image. Or, for example: title, date, description, etc. 
### `Each image can be “liked”, and a user should be able to undo their “like”`

The project looks something like the following: 
![image](https://user-images.githubusercontent.com/39928097/149610747-9c3939ac-7955-4961-91cf-9f81e8cb0a43.png)

and there is also of course information about the pictures

![image](https://user-images.githubusercontent.com/39928097/149610776-b0aaf2a0-e82f-4264-be64-d3bb19c79da0.png)


### Visit my personal portfolio by clicking [here](https://juanvmaya.github.io/personal-portfolio/).

Disclaimer: This project is for entushiast only purposes. Information posted on any platforms is not intended to be technical advice and should not be considered technical advice, nor is it intended to replace consultation with a qualified professional. IF YOU HAVE A TECHNICAL INQUIRY ABOUT ANY API STANDARD, please go to https://api.nasa.gov/.
