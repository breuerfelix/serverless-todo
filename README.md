# serverless-todo

This is a small todo application built to showcase direct interaction with AWS S3 from the browser without the need for a backend server. The application allows users to create, update, and delete todo items, with all data stored directly in an S3 bucket.

## Deployment

To deploy the application, follow these steps:

- Set up a static website host, such as GitHub Pages.
- Create an S3 bucket to store the todo data.
  - Use the terraform code in the `infrastructure` folder to create the S3 bucket.
- Set the necessary environment variables as outlined in the `.env` file.
  - These environment variables should include your AWS access key ID, secret access key, and the name of the S3 bucket.
- Protect the site with basic authentication to prevent unauthorized access.
  - **Note:** Since S3 credentials are baked into the website, it's crucial to ensure that only authorized users can access the site.

## Usage

Once the application is deployed, users can access the todo application by visiting the hosted URL. They will be prompted to enter the password to decrypt the credentials and load the todo items. From there, they can interact with the todo list as desired.

## Resources

- [AWS S3](https://aws.amazon.com/s3/)
- [Terraform](https://www.terraform.io/)
- [GitHub Pages](https://pages.github.com/)
