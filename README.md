# Job Portal API Documentation

This document outlines the endpoints and usage of the Job Portal API.

## Base URL

https://job-portal-beryl-theta.vercel.app/api



## Endpoints

### Get Customer by ID

- **Endpoint**: `/customers`
- **Method**: `GET`
- **Parameters**:
  - `id`: The ID of the customer
- **Example**:

/customers?id=6614c878f8267779a4dab80d



### Get Education by ID

- **Endpoint**: `/educations`
- **Method**: `GET`
- **Parameters**:
- `id`: The ID of the education
- **Example**:
/educations?id=660a486d9fc172261fcc6ea5



### Get Experience by ID

- **Endpoint**: `/experiences`
- **Method**: `GET`
- **Parameters**:
- `id`: The ID of the experience
- **Example**:
/experiences?id=660a48559fc172261fcc6ea3



### Get Project by ID

- **Endpoint**: `/projects`
- **Method**: `GET`
- **Parameters**:
- `id`: The ID of the project
- **Example**:

/projects?id=66134f297dadc82ce3151e03





/experiences?id=660a48559fc172261fcc6ea3

## Update Education

- **Endpoint**: `/educations`
- **Method**: `PUT`
- **Parameters**:
  - `id`: The ID of the education to update
- **Body**:
  ```json
  {
    "qualification": "Master's Degree",
    "collegeName": "University XYZ",
    "address": "123 University Ave, City, Country",
    "startDate": "2020-09-01",
    "endDate": "2024-05-01",
    "userId": "66134da67dadc82ce3151df5"
  }

  /educations?id=660a486d9fc172261fcc6ea5

## Update Project

**Endpoint:** `/projects`

**Method:** `PUT`

### Parameters:
- `id`: The ID of the project to update

### Body (JSON):
```json
{
  "projectTitle": "Project111",
  "description": "desc1",
  "githubLink": "thherthe",
  "skills": "ejkwej",
  "learningOutcomes": "wewewe",
  "project_pic": "wewewe",
  "userId": "66134da67dadc82ce3151df5"
}

/projects?id=66134f297dadc82ce3151e03
