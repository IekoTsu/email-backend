# email-backend

this project is made to test emails sending in my "trouve-ton-artisan" project

## 1.Set Up MailDev:

Install MailDev globally using npm: `npm install -g maildev`

Run MailDev on the command line: `maildev` 
    (By default MailDev runs the SMTP server on port 1025 and the web interface on port 1080)

## 2.Run the srever:

In terminal make sure to change the directory to where your "server.js" file is located.

Execute the server.js file using Node.js: `node server.js` 
    (This server listens on port 3000 and provides an endpoint (/send-email) to send emails.)

## View Sent Emails in MailDev:

Open your browser and navigate to http://localhost:1080
You’ll see the emails that were sent through MailDev's SMTP server displayed in the MailDev web interface.
