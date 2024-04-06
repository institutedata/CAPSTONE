# ![Auckland Zoo - Education](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfXRzreX7_LssdG8cwtGGW_WY2TVWEYtqZnQkO7TFrkA&s)

> 

<img src="../Documents/Other/homepage.png" />


## 🚩 Table of Contents

- [Why Auckland Zoo Education?](#-why-auckland-zoo-education)
- [Features](#-features)
- [Built With](#-built-with)
- [Browser Support](#-browser-support)
- [Installation](#-installation)
- [Database](#-database)
- [Acknowledgments](#-acknowledgments)


## 🐵 Why Zoo education?

Problem:<br>
The challenge lies in designing a website that not only serves as a tool during teaching sessions but also offers valuable resources for students to explore further after their visit. Capturing and maintaining students' interest is crucial, as it can be challenging to retain their engagement once the formal session ends. Ensuring the content is captivating and enjoyable is essential for encouraging ongoing learning beyond the classroom.<br>

Solution:<br>
To address this challenge, the website can be designed with interactive elements, engaging visuals, and user-friendly navigation. Including features such as multimedia content can make the learning experience more enjoyable and encourage students to explore further. Providing easy access to additional resources, such as activities related to the session topics, can also help maintain students' interest and motivation.<br>

Value:<br>
By creating an engaging online platform, the website can enhance the overall learning experience for students. It can serve as a valuable resource for both teachers and students, providing supplementary materials and activities to enrich the educational content. By maintaining students' interest and motivation to continue learning, even after their session ends, the website can help foster a culture of lifelong learning and exploration.

## 🎨 Features

* Navigation Bar: This hosts all the pages that are currently available on the website
* Booking Form: A booking form that allows the user to book a session and the information is then stored in your MongoDB database
* Screen Slider: There is a split screen slider that host a picture of a particular animal with the corresponding animal information that is pulled from the external API
* Background Audio: Sounds of the jungle is hosted on the home page and our story page. Users have the ability to mute and unmute the audio.

## 🔨 Built With
* ![React](https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=react&logoColor=white)
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
* ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
* ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
* ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
* ![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white)
* ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white)




## 🌏 Browser Support

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Yes | 11+ | Yes | Yes | Yes |


## 🔧 Installation

Run npm scripts and develop yourself with the following process.

### Setup

Fork `main` branch into your personal repository. Clone it to local computer. Install node modules. Before starting development, you should check if there are any errors.

```sh
$ git clone https://github.com/{your-personal-repo}/capstone-a10mal.git
$ npm install
$ npm start
```



### API KEY
Create a free login on API Ninjas to get your own API Key
```sh
https://api-ninjas.com/signin
```

Create a .env file
```sh
API_URL=https://api.api-ninjas.com/v1/animals?name=
API_KEY={your-personal-api-key}
MONGODB_URI={your-personal-mongo-database-name}
```


## 🖥️ Database

Two distinct sets of data is being managed in the MongoDB database. One set of data pertains to user bookings for onsite and virtual sessions offered by my education team, which are facilitated through a booking form on my website. The information submitted through this form is stored in MongoDB.

Additionally, an external API is integrated into my website, which provides information about animals. I am fetching data from this API and storing it in my MongoDB database. 


```mermaid
classDiagram
  class OrganisingTeacher {
    organisingTeacherName: String
    email: String
    mobileNumber: String
    schoolName: String
    address: String
    visitFormat: String
    firstPreferredDate: Date
  }

  class API {
    name: String
    location: String
    main_prey: String
    habitat: String
    predators: String
    diet: String
    favorite_food: String
    type: String
    slogan: String
    lifespan: String
    weight: String
    top_speed: String
  }
```

## 🖼️ UI Design
* Loading Page
<img src="../Documents/Other/loadingPage.png" /><br></br>
* Home Page
<img src="../Documents/Other/homepage.png" /><br></br>
* Wildlife Section
<img src="../Documents/Other/wildlifePage.png" /><br></br>
* Animal Information
<img src="../Documents/Other/animalInfo.png" /><br></br>
* Services
<img src="../Documents/Other/services2.png" /><br>
<img src="../Documents/Other/services.png" /><br></br>
* Booking Form
<img src="../Documents/Other/bookingForm.png" /><br></br>
* Our Story
<img src="../Documents/Other/ourStory.png" /><br></br>
* Animal Cam
<img src="../Documents/Other/animalCam.png" /><br></br>


## Acknowledgments
I utilised Unsplash for my high def images being used on the webpage. Below are the users whose images I have used:

* [waldemarbrandt67w - Lion](https://unsplash.com/photos/a-large-lion-sitting-on-top-of-a-rock-YOowNEyHIR0)
* [RPM FX - Squirrel Monkey](https://unsplash.com/photos/a-monkey-sitting-on-top-of-a-rope-10P7e_6e3VM)
* [Victoria Naumenko - Tarantula](https://unsplash.com/photos/brown-and-black-spider-on-gray-surface-juNFkPiHkHE)
* [Chintala Makombo - Emperor Tamarin](https://unsplash.com/photos/black-and-white-monkey-in-close-up-photography-TJK4DZC20Xc)
* [matdflo - Golden Lion Tamarin](https://unsplash.com/photos/brown-furry-monkey-on-branch-5uIkDWUQ8io)
* [bradmills - Alligator](https://unsplash.com/photos/crocodile-on-body-of-water-during-daytime-HfZxgmEntHs)
* [soberanes - Spider Monkey](https://unsplash.com/photos/black-monkey-sitting-on-tree-slab-2Ievc7BjuI4)
* [sandym10 - Cotton Top Tamarin](https://unsplash.com/photos/white-and-brown-monkey-sitting-on-the-tree-branch-RwyPpzbJuck)
* [davidclode - Safari](https://unsplash.com/photos/green-leaf-trees-92MgFhlWD-8)
* [Fabio Fistarol - Rainforest](https://unsplash.com/photos/green-trees-under-white-sky-during-daytime-adLo80F_9P0)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
