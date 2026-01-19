## Visitor Counter Lambda (homepageVisitorCounter)

**API Gateway (HTTP API):** visitor_counter_api  
**Route:** GET /counter  
**Lambda handler:** homepageVisitorCounter.handler

### Responsibilities
- Conditionally increment counter stored in DynamoDB
- Return current counter value

### Environment variables (need to change this)
- DDB_TABLE_NAME=
- BOT_HEADER_NAME=
- BOT_HEADER_VALUE=
