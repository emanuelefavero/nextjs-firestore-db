# Next.js Firestore db

This is a simple example of how to use Next.js with Firestore database

## Live Demo

- [https://nextjs-firestore-db.vercel.app/](https://nextjs-firestore-db.vercel.app/)

## Getting Started

- Clone the repo and `cd` into it

- Create a Firebase project on the [Firebase console](https://console.firebase.google.com/)

- Enable Firestore in the Firebase console and add a collection called `posts` with a document containing the following fields:

```json
{
  "title": "My first post",
  "content": "This is my first post"
}
```

- Add a new web app in Firebase settings, get the Firebase config object from the Firebase console and add it to a `.env.local` file in the root of the project:

```bash
API_KEY=
AUTH_DOMAIN=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
APP_ID=
```

- Install the dependencies:

```bash
npm install
```

- Run the development server:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

## Resources

- [Firestore Docs](https://firebase.google.com/docs/firestore/quickstart?hl=en&authuser=0#web-version-9_1)

## License

- [MIT](LICENSE.md)
