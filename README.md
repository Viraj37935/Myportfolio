# React JS Modern 3D Portfolio using Three.js

## ⚠️ Before you start

1. Make sure **Git** and **NodeJS** is installed
2. Clone this repository to your local computer.
3. Create .env file in root folder.
4. Contents of **.env**:

```
VITE_APP_SERVICE_ID=XXXXXXXXXXXXXXXX
VITE_APP_TEMPLATE_ID=XXXXXXXXXXXXXXXX
VITE_APP_EMAILJS_KEY=XXXXXXXXXXXXXXXX
VITE_APP_EMAILJS_RECIEVER=your@gmail.com
```

5. Open terminal in root directory. Run `npm install`.

6. Create new account in [EmailJS](emailjs.com "EmailJS")

7. From dashboard Choose Email Services > Add New Service and connect your mail to emailjs.

**NOTE:** Make Sure you type same email in `VITE_APP_EMAILJS_RECIEVER` in `.env`

8. Once, New service is configured, copy your **service id** to `VITE_APP_SERVICE_ID`

9. Now, go to Email Templates > Create New Template to create your mail template. Once it is done, you can copy **Template ID** to `VITE_APP_TEMPLATE_ID`

10. To get your **Public Key**, click on your username on navbar and go to account settings > Copy Public Key to `VITE_APP_EMAILJS_KEY`

11. Now app is fully configured :+1: and you can start using this app using `npm run dev`. The app is created using vite.

**NOTE:** Make sure you don't share these keys publicaly.

