# Next.js Firestore db

This is a simple example of how to use Next.js with Firestore database

## Getting Started

- Clone the repo and `cd` into it

- Create a Firebase project on the [Firebase console](https://console.firebase.google.com/)

- Replace the Firebase config in `firebase/config.ts` with your own. (You can find this in the Firebase console)

- Enable Firestore in the Firebase console and add a collection called `posts` with a document containing the following fields:

```json
{
  "title": "My first post",
  "content": "This is my first post"
}
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
