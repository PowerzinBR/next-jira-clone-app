# Jira Clone

*One of the pages of the application (/sign-up):*
![image](https://github.com/user-attachments/assets/22f48618-b610-4747-a853-467e59014d12)

## Setup your .env.local

If you decide to clone the application, you may need to setup a .env.local in order to make it work:
```
NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=

NEXT_PUBLIC_APPWRITE_DATABASE_ID=
NEXT_PUBLIC_APPWRITE_WORKSPACES_ID=
NEXT_PUBLIC_APPWRITE_MEMBERS_ID=
NEXT_PUBLIC_APPWRITE_TASKS_ID=
NEXT_PUBLIC_APPWRITE_PROJECTS_ID
NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET_ID=

NEXT_APPWRITE_KEY=
```
Go to https://appwrite.io and create a project, then get your secret keys. **Do not share any of your secret keys as this could result in danger for your project.**

## Additional information
This project **IS** completed, and it's in Portuguese language. <br />

Please translate it and if you have any issues with the application, create an issue an i will try to help. The project uses **bun**, **react**, **next.js**, **tanstack react query**, **hono**, **node-appwrite** and much more. It also uses https://ui.shadcn.com as a **component library**.
