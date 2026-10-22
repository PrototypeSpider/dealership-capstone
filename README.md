# Dealerships Review & Evaluation Web Application - Capstone Project

## Project Overview
A full-stack, cloud-native car dealership web application built as part of the IBM Full Stack Software Developer Capstone Project. The application enables users to browse nationwide dealership branches, filter dealerships by state, view detailed vehicle inventory (car makes and models), read dealer customer reviews with automated sentiment analysis, and post new reviews.

## Architecture & Technologies
- **Frontend:** React, HTML5, CSS3, Bootstrap
- **Backend Web Server:** Django (Python), REST APIs
- **Microservices:**
  - Dealerships & Reviews Service: Node.js, Express, MongoDB
  - Sentiment Analysis Service: Python, Flask, NLTK (VADER)
- **Databases:** SQLite (Car Models/Makes), MongoDB (Dealerships & Reviews)
- **Cloud & DevOps:** Docker, Kubernetes, IBM Cloud Code Engine, GitHub Actions (CI/CD)