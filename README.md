# Portfolio App

Welcome to the Portfolio App, a robust platform hosted at [https://angular2-pi.vercel.app/](https://angular2-pi.vercel.app/) designed to enable users to create and manage a professional online portfolio effortlessly. This application offers a comprehensive set of tools for showcasing your professional and personal accomplishments.

## Features

### Account Management
- **Sign Up**: Users can register by providing basic personal information.
- **Login**: Secure login functionality for returning users.

### Portfolio Customization
- **Personal Information**: Add or update your contact details.
- **Profile Overview**:
  - **Names**: Enter your first and last names.
  - **Professional Summary**: A brief bio to highlight your professional background.
  - **Profile Picture**: Link a profile image to personalize your portfolio.
- **Professional Networking**:
  - **GitHub Link**: Connect your GitHub for a direct view into your coding projects.
  - **LinkedIn Link**: Link your professional LinkedIn profile.
- **Custom URL**: Choose a custom URL for your portfolio for easy access and sharing.
- **Theme Color**: Customize the look of your portfolio with a theme color.

### Skills
- **Skills Listing**: Detail your professional skills, tools, and technologies.

### Education
- **Education History**: List your educational qualifications with details about the institution, degree, and dates.

### Work Experience
- **Professional Experience**: Outline your employment history, including roles, responsibilities, and key accomplishments.

### Projects
- **Project Showcase**: Add projects with descriptions, images, links to live sites or code repositories, and the skills applied.

## Editing and Updating
- **Manage Content**: All sections of your portfolio can be edited or updated at any time to ensure your latest accomplishments are highlighted.

## Technical Specifications
- **Frontend**: Built with Angular, offering a responsive and interactive user experience.
- **Data Storage**: Secure and reliable data handling for persistent information storage.
- **Design**: Modern and clean interface focusing on usability and aesthetics.

## Usage

To begin using the Portfolio App, follow these steps:

1. **Visit the Website**: Go to [https://angular2-pi.vercel.app/](https://angular2-pi.vercel.app/) and navigate to the sign-up/login page.
2. **Create an Account**: Fill out the registration form to set up your new account.
3. **Build Your Portfolio**: Once logged in, you can start adding information to your portfolio through the user-friendly dashboard.
4. **Customize and Share**: Adjust the settings like theme color and URL as needed, and share your portfolio with prospective employers or clients.

## Support

For any technical support or queries, please reach out to [support@portfolioapp.com](mailto:support@portfolioapp.com).

## Contributing

Contributions to the Portfolio App are welcome! Please refer to our contributing guidelines for more details.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

Thank you for choosing Portfolio App for showcasing your professional journey!



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


### Get Customer by urlName

- **Endpoint**: `/customers/url`
- **Method**: `GET`
- **Parameters**:
  - `urlName`: Url Name
- **Example**:

/customers?urlName=george-devid


### Get Education by ID

- **Endpoint**: `/educations`
- **Method**: `GET`
- **Parameters**:
- `id`: The ID of the education
- **Example**:
/educations?id=660a486d9fc172261fcc6ea5


### Get Education by UrlName

- **Endpoint**: `/educations/url`
- **Method**: `GET`
- **Parameters**:
  - `urlName`: Url Name
- **Example**:
/educations?urlName=george-devid


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


### Get Project by UrlNmae

- **Endpoint**: `/projects/url`
- **Method**: `GET`
- **Parameters**:
  - `urlName`: Url Name
- **Example**:

/projects?urlName=george-devid


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
``
  /educations?id=660a486d9fc172261fcc6ea5

## Update Project

**Endpoint:** `/projects`

**Method:** `PUT`

- ### Parameters:
- `id`: The ID of the project to update

- ### Body (JSON):
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
```
  /projects?id=66134f297dadc82ce3151e03


## Update Experience

- **Endpoint**: `/experience`
- **Method**: `PUT`
- **Parameters**:
  - `id`: The ID of the education to update
- **Body**:
  ```json
  {
    "position": "Master's Degree",
    "companyName": "University XYZ",
    "address": "123 University Ave, City, Country",
    "startDate": "2020-09-01",
    "endDate": "2024-05-01",
    "userId": "66134da67dadc82ce3151df5"
  }
``
  /experience?id=660a486d9fc172261fcc6ea5




## Delete Education

- **Endpoint**: `/educations`
- **Method**: `DELETE`
- **Parameters**:
  - `id`: The ID of the education to update
- **Body**:

  /educations?id=660a486d9fc172261fcc6ea5

## Delete Project

- **Endpoint**: `/projects`
- **Method**: `DELETE`
- **Parameters**:
  - `id`: The ID of the education to update
- **Body**:

  /projects?id=660a486d9fc172261fcc6ea5
