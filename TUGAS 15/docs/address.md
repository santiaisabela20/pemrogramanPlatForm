##Address API Spec

#Create Address API
Endpoint : POST /api/contacts/:contactId/addresses

Headers :

Authorization : token
Request Body :

{
  "street" : "Jalan apa",
  "city" : "Kota apa",
  "province" : "Provinsi apa",
  "country" : "Negara apa",
  "postal_code" : "Kode pos"
}
Response Body Success :

{
  "data" : {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "Kode pos"
  }
}
Response Body Error :

{
  "errors" : "Country is required" 
}

#Update Address API

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :

Authorization : token
Request Body :

{
  "street" : "Jalan apa",
  "city" : "Kota apa",
  "province" : "Provinsi apa",
  "country" : "Negara apa",
  "postal_code" : "Kode pos"
}
Response Body Success :

{
  "data" : {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "Kode pos"
  }
}
Response Body Error :

{
  "errors" : "Country is required"
}


#Get Address API

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :

Authorization : token
Response Body Success :

{
  "data" : {
    "id" : 1,
    "street" : "Jalan apa",
    "city" : "Kota apa",
    "province" : "Provinsi apa",
    "country" : "Negara apa",
    "postal_code" : "Kode pos"
  }
}
Response Body Error :

{
  "errors" : "contact is not found"
}

#List Addresses API
Endpoint : GET /api/contacts/:contactId/addresses

Headers :

Authorization : token
Response Body Success :

{
  "data" : [
    {
      "id" : 1,
      "street" : "Jalan apa",
      "city" : "Kota apa",
      "province" : "Provinsi apa",
      "country" : "Negara apa",
      "postal_code" : "Kode pos"
    },
    {
      "id" : 1,
      "street" : "Jalan apa",
      "city" : "Kota apa",
      "province" : "Provinsi apa",
      "country" : "Negara apa",
      "postal_code" : "Kode pos"
    }
  ]
}
Response Body Error :

{
  "errors" : "contact is not found"
}


#Remove Address API
Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

Headers :

Authorization : token
Response Body Success :

{
  "data" : "OK"
}
Response Body Error :

{
  "errors" : "address is not found"
}