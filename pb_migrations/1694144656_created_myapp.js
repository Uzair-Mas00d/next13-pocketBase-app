/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "nqvhftgi3on606x",
    "created": "2023-09-08 03:44:16.972Z",
    "updated": "2023-09-08 03:44:16.972Z",
    "name": "myapp",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vxwwy7d2",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nqvhftgi3on606x");

  return dao.deleteCollection(collection);
})
