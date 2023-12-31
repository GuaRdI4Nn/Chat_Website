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

The aim of this project is to make the IITR Junta aware of all the resources available to them in a very user-friendly manner using a chatbot ( I call it “YourBuddy”). This project will help each student of IITR by helping them decide on their career through ML-based recommendations, connecting them with alumni of IITR in the respective field of interest through an internal feed algorithm, personalized internship /hackathons recommendations, and many more functionalities. I have integrated this chatbot with a website and give Janta a smoothless experience.

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


2. Install Rasa in the same environment:

   ```bash
   pip3 install -U pip
   
   pip3 install rasa

### Running the bot and website:

1. ```bash
   python app.py

2. ```bash
   rasa run -m models --enable-api --cors "*"

   
