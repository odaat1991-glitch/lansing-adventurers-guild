# Instructions for Integrating the Booking Form with Google Sheets

Follow these steps to connect the booking form on the website to your Google account. This will allow you to receive form submissions directly into a Google Sheet.

## Step 1: Create a New Google Sheet

1.  Go to [sheets.new](https://sheets.new) in your web browser.
2.  Give the spreadsheet a name, such as "Booking Inquiries".
3.  In the first row of the sheet, create the following headers, one in each cell from left to right:
    *   `Timestamp`
    *   `fullName`
    *   `email`
    *   `service`
    *   `comments`

    **Important:** These headers must match exactly, as they are used by the script to populate the sheet.

## Step 2: Add the Google Apps Script

1.  In your new Google Sheet, click on **Extensions** > **Apps Script**. This will open the Apps Script editor in a new tab.
2.  Delete any boilerplate code in the `Code.gs` file.
3.  Open the `google_apps_script.js` file from the project directory.
4.  Copy the entire contents of `google_apps_script.js` and paste it into the Apps Script editor.
5.  Click the **Save project** icon (it looks like a floppy disk).

## Step 3: Deploy the Script as a Web App

1.  In the Apps Script editor, click the **Deploy** button and select **New deployment**.
2.  Click the **Select type** gear icon and choose **Web app**.
3.  In the **Description** field, you can enter something like "Booking Form Handler".
4.  For **Execute as**, select **Me (your-email@gmail.com)**.
5.  For **Who has access**, select **Anyone**. This is necessary for the form on your website to be able to send data to the script.
6.  Click **Deploy**.
7.  Google will ask you to **Authorize access**. Click the button and select your Google account.
8.  You will likely see a "Google hasn’t verified this app" warning. This is normal. Click **Advanced**, and then click **Go to [Your Project Name] (unsafe)**.
9.  Grant the script permission to access your spreadsheets.
10. Once the deployment is complete, you will be shown a **Deployment ID**. You do not need this. Instead, copy the **Web app URL**. This is the URL you will use in the next step.

## Step 4: Update the Website's JavaScript

1.  Open the `script.js` file in the project directory.
2.  Find the following line of code:
    ```javascript
    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'; // IMPORTANT: Replace with your script URL
    ```
3.  Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the **Web app URL** you copied in the previous step.
4.  Save the `script.js` file.

Your form is now fully integrated! When a user submits the form on your website, the data will be automatically added to your Google Sheet.