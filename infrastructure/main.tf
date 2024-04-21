terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5"
    }
  }

  backend "s3" {
    bucket = "serverless-todo-infrastructure"
    key    = "terraform.tfstate"
    region = "eu-central-1"
  }
}

provider "aws" {}
