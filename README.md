# aws-serverless-portfolio-site
# Personal Portfolio Website – Serverless on AWS

This repository contains the source code and architecture description for my personal website  
**https://formmarc.net**, used as a technical portfolio during my job search.

The site is implemented as a **serverless, cloud-native solution on AWS**, combining static hosting with backend services for form handling and a visitor counter.

---

## High-Level Architecture

- Static website hosted on **Amazon S3**
- Global content delivery and HTTPS via **Amazon CloudFront**
- Backend functionality implemented using **AWS serverless services**
- No servers to manage, fully event-driven design

---

## Frontend

- HTML, CSS, and vanilla JavaScript
- Files uploaded directly from local machine to Amazon S3
- CloudFront used for caching, performance, and TLS

---

## Contact Form – Serverless Backend

When a user submits the form:

1. The browser sends a request to **Amazon API Gateway**
2. API Gateway invokes an **AWS Lambda** function
3. The Lambda function:
   - Validates user input
   - Applies basic bot-mitigation checks
   - Stores valid submissions in **Amazon DynamoDB**
   - Publishes a notification to **Amazon SNS**
4. **Amazon SNS** sends an email alert when a valid submission is received

This design ensures:
- No direct database exposure
- Stateless processing
- Clear separation between frontend and backend

---

## Visitor Counter – Serverless & Bot-Aware

The website includes a dynamic visitor counter implemented using:

- **Amazon API Gateway (HTTP API)**
- **AWS Lambda**
- **Amazon DynamoDB**

### How it works

- On page load, client-side JavaScript calls a public API endpoint
- API Gateway triggers a Lambda function
- The Lambda function:
  - Conditionally increments a counter stored in DynamoDB
  - Returns the current visitor count to the browser

### Bot-mitigation logic

To avoid artificial inflation:
- Requests are filtered using a **custom request header**
- **User-Agent analysis** is applied
- Only legitimate, human-initiated browser requests increment the counter

---

## AWS Services Used

- Amazon S3 – static site hosting
- Amazon CloudFront – CDN, HTTPS, caching
- Amazon API Gateway – public API endpoints
- AWS Lambda – serverless compute
- Amazon DynamoDB – persistent storage
- Amazon SNS – email notifications

---

## What This Project Demonstrates

- Practical serverless architecture on AWS
- Event-driven design using managed services
- API-based frontend ↔ backend integration
- Input validation and basic bot-mitigation techniques
- Secure, scalable, low-maintenance cloud deployment

This project focuses on **real-world implementation and reliability**, rather than framework complexity.

---

## Live Site

🔗 https://formmarc.net
