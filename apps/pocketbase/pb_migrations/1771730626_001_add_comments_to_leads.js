/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("leads");
  
  collection.fields.add(new TextField({
    name: "comments",
    required: false
  }));
  
  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("leads");
  collection.fields.removeByName("comments");
  return app.save(collection);
})