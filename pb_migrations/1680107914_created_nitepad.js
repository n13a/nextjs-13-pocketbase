migrate((db) => {
  const collection = new Collection({
    "id": "2fg6r72feletgi0",
    "created": "2023-03-29 16:38:34.933Z",
    "updated": "2023-03-29 16:38:34.933Z",
    "name": "nitepad",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bnwx4v8q",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xqaz4bn9",
        "name": "note",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2fg6r72feletgi0");

  return dao.deleteCollection(collection);
})
