# Recommended MongoDB Indexes

```js
db.users.createIndex({ email: 1 }, { unique: true })
db.trips.createIndex({ "destination.city": 1, startDate: 1 })
db.messages.createIndex({ room: 1, createdAt: -1 })
db.notifications.createIndex({ recipient: 1, read: 1 })
db.traveltwins.createIndex({ user: 1 }, { unique: true })
```
