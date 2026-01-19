## Contact Form Lambda (websiteFeedbackHandler)

**API Gateway (HTTP API):** formarc_form_API  
**Route:** POST /feedback  
**Lambda handler:** websiteFeedbackHandler.handler

### Responsibilities
- Validate input
- Basic bot-mitigation checks
- Store valid submissions in DynamoDB
- Publish a notification to SNS (email alert)

### Environment variables (example)
- DDB_TABLE_NAME=
- SNS_TOPIC_ARN=
- BOT_HEADER_NAME=
- BOT_HEADER_VALUE=
