# Chatbot Website

A simple and interactive website featuring a chatbot ("YourBot") to help.

<img width="1431" alt="image" src="https://github.com/GuaRdI4Nn/Chat_Website/assets/147473165/e6787bb6-5bc4-4c7e-b76d-10e5237a2f53">

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

## Introduction

The aim of this project is to make the IITR Junta aware of all the resources available to them in a very user-friendly manner using a chatbot ( I call it “YourBuddy”).
The website feature a login form which the user gets redirected to, if account is not created then a link down helps the user create an account and then login with the credentials. The login system is responsive and tells if the user doesn't exits or the password is wrong by flashing the messages on the website.
On successful login user gets redirected to the main page which has the chatbot at the bottom right. The website also has links of hackathons and alumni on the navbar. Both of them contains a filter menu to filter out data. There is also an logut link which logouts the current user and redirects to login page with a flash message.
This project will help each student of IITR by helping them decide on their career through ML-based recommendations, connecting them with alumni of IITR in the respective field of interest through an internal feed algorithm, personalized internship /hackathons recommendations, and many more functionalities. I have integrated this chatbot with a website and give Janta a smoothless experience.

## Features

- **Interactive Chatbot:** Engage in conversations with our chatbot.
- **Alumni Connect:** Connecting with alumni of interest through a filter of field (Software Development / ML).
- **Hackathon Connect:** Informing about the going on/upcoming/completed hackathons and internships.

## Demo

Live demo to showcase the website and the chatbot in action: https://drive.google.com/file/d/14klaAgM-PZMdQTUxCIAjDj0Oi4jTtYOM/view?usp=sharing

## Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- Python ( version 3.8.x)
- rasa (version 2.4.x)
- Flask ( version 3.0.x)
- flask_sqlalchemy,flask_migrate,flask_wtf,wtforms,flask_login,flask_ckeditor,werkzeug.utils (all these are to be installed in the virtual environment created)
- if facing error with running, install python in the venv and then change the interpreter path to the one in venv in VSCode.
  
### Installation

1. Install Python Flask :

 - Create an environment
   ```bash
   > mkdir myproject
   > cd myproject
   > py -3 -m venv .venv
     
  - Activate the environment
    ```bash
    > .venv\Scripts\activate

  -  Install Flask within the environment:
     ```bash
     $ pip install Flask
     $ pip install flask-sqlalchemy
     $ pip install flask-migrate
     $ pip install flask-wtf
     $ pip install flask-login
     $ pip install flask-ckeditor


2. Install Rasa in the same environment:

   ```bash
   pip3 install -U pip
   
   pip3 install rasa

### Running the bot and website:

1. ```bash
   python app.py

2. ```bash
   rasa run -m models --enable-api --cors "*"

   
