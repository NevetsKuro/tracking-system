# tracking-system

## Installation

```
git clone https://github.com/stark1996/tracking-system.git

npm install

node server.js
```

## API & Models

- User
  - /users/find
  - /users/add
  - /users/remove

- ReferralShare
  - /shares/find
  - /shares/add
- Adding money to User wallet
  - /wallet/addToWallet

(Note: Postman collection of this API is published the below URL. )

https://okllaaa.postman.co/workspace/My-Workspace~38e8627f-ae39-41fd-8fab-17036fc5fc6b/documentation/3837106-fbc07ef1-9a03-4c5a-9d7b-268228f5cf85


## Change Database
Go to server.js, change uri on line no. 15 
```
const uri = "mongodb+srv://..."
```
