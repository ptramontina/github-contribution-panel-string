# Github contribution panel string

This project contains source code for a serverless application which writes a string on the Github contribution panel.
Everyday, it checks if should commit, in order to print the string.

It uses a lambda function, and a SAM template.

In order to do correctly, you should build, deploy, and set the variables on AWS.
Since I was not able to automatically encrypt the token, you should do it manually, by going to AWS console, and encrypting using the key created by this template.

