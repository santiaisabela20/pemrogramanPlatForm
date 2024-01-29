#contact API Spec

#Create COntact API 

Endpoint : POST /api/Contact 

Headers:
-Authorization: token 

Request Body :
{
  "first_name" : "santia",
  "last_name" : "isabela",
  "email" : "santia.com",
  "phone" : "085270719691"
}

Response Body Success :
{
  "data" : {
    "id" : 1,
    "first_name" : "santia",
    "last_name" : "isabela",
    "email" : "santia.com",
    "phone" : "085270719691"
  }
}

Response Body Error :
{
  "errors" : "Email is not valid format"
}

#Update Contact API

Endpoint : POST /api/Contact 

Headers:
-Authorization: token

Request Body :
{
  "first_name" : "santia",
  "last_name" : "isabela",
  "email" : "santia.com",
  "phone" : "085270719691"
}

Response Body Success :
{
  "data" : {
    "id" : 1,
    "first_name" : "santia",
    "last_name" : "isabela",
    "email" : "santia.com",
    "phone" : "085270719691"
  }
}

Response Body Error :
{
  "errors" : "Email is not valid format"
}


#GET Contact API

Endpoint : POST /api/Contact 

Headers:
-Authorization: token

Response Body Success :
{
  "data" : {
    "id" : 1,
    "first_name" : "santia",
    "last_name" : "isabela",
    "email" : "santia.com",
    "phone" : "085270719691"
  }
}

Response Body Error :
{
  "errors" : "Contact is not found"
}


#Search Contact API 

Endpoint : POST /api/Contact 

Headers:
-Authorization: token
Query params :

name : Search by first_name or last_name, using like, optional
email : Search by email using like, optional
phone : Search by phone using like, optional
page : number of page, default 1
size : size per page, default 10

Response Body Success :
{
  "data" : [
    {
      "id" : 1,
      "first_name" : "santia",
      "last_name" : "isabela",
      "email" : "santia.com",
      "phone" : "085270719691"
    },
    {
      "id" : 2,
      "first_name" : "santia",
      "last_name" : "isabela",
      "email" : "santia.com",
      "phone" : "085270719691"
    }
  ],
  "paging" : {
    "page" : 1,
    "total_page" : 3,
    "total_item" : 30
  }
}

Response Body Error :


#Remove Contact API

Endpoint : POST /api/Contact 

Headers:
-Authorization: token

Response Body Success :{
  "data" : "OK"
}

Response Body Error :
{
  "errors" : "Contact is not found"
}

