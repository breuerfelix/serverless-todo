terraform {
  required_version = "~> 1.8"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5"
    }
  }

  backend "s3" {
    bucket = "breuerfelix-terraform"
    key    = "serverless-todo.tfstate"
    region = "eu-central-1"
  }
}

provider "aws" {
  region = "eu-central-1"
}

resource "aws_s3_bucket" "st" {
  bucket = "${var.bucket_prefix}-serverless-todo"
}

resource "aws_s3_bucket_cors_configuration" "st" {
  bucket = aws_s3_bucket.st.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "PUT", "POST", "DELETE", "HEAD"]
    allowed_origins = ["*"]
  }
}

resource "aws_iam_user" "st" {
  name = "serverless-todo"
}

resource "aws_iam_user_policy_attachment" "s3_access" {
  user       = aws_iam_user.st.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonS3FullAccess"
}
