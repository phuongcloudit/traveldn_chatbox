# **BUILD GUIDE** #

### 1. Connect localhost to server

Open ngrok.exe
Run: "ngrok.exe http 3000"

### 2. Run app ###

In visual Studio Code, open project folder
Menu: Debug > Start Debugging or press F5 in keyboard

### 3. Setting ngrok in Azuare to connect Azuare to Messenger

In search box, find travel_bot
In right list of menu > Bot management, click Settings > Configuration:

Change messaging endpoint:
Copy Forwarding url in Command Prompt in step 1 and paste to 
Exp: https://27c047b6.ngrok.io 

Messaging endpoint like:
https://27c047b6.ngrok.io/api/messages/travel_bot

Click Save 

### 4. Testing in Messenger

Go to https://www.messenger.com/t/danangvntravel



