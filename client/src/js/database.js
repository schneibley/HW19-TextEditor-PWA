import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method that accepts some content and adds it to the database (or updates the existing entry)
export const putDb = async (content) => {
  const appDB = await openDB("jate", 1);
  const transaction = appDB.transaction("jate", "readwrite");
  const store = transaction.objectStore("jate");

  // Ensure that the content is always saved with id: 1
  const request = store.put({ id: 1, jate: content });
  const result = await request;
  console.log("Data saved to the database", result);
}

// Method that gets the content with id: 1 from the database
export const getDb = async () => {
  const appDB = await openDB("jate", 1);
  const transaction = appDB.transaction("jate", "readonly");
  const store = transaction.objectStore("jate");

  // Fetch the entry with id: 1
  const request = store.get(1);
  const result = await request;

  // If the result exists, return the content; otherwise, return null or undefined
  console.log(result?.jate);
  return result?.jate;
}

initdb();