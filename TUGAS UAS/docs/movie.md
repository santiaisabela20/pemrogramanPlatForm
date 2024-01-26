
# Movie API Spec

## Create Movie API

Endpoint : POST /api/movie

Headers :

- Authorization : token

Request Body :

```json
{
  "title": "Budi Pekerti",
  "production_house": "Rekata studio",
  "year": "2023",
  "main_character": "Sha Ine Febriyanti",
  "genre": "Drama",
  "penulis_naskah" : "Wregas Bhanuteja"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "title": "Budi Pekerti",
  "production_house": "Rekata studio",
  "year": "2023",
  "main_character": "Sha Ine Febriyanti",
  "genre": "Drama",
  "penulis_naskah" : "Wregas Bhanuteja"
  }
}
```

Response Body Error :

```json
{
  "errors": "Year is invalid"
}
```

## Update Movie API

Endpoint : PUT /api/movie/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "title": "Budi Pekerti",
  "production_house": "Rekata studio",
  "year": "2023",
  "main_character": "Sha Ine Febriyanti",
  "genre": "Drama",
  "penulis_naskah" : "Wregas Bhanuteja"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "title": "Budi Pekerti",
  "production_house": "Rekata studio",
  "year": "2023",
  "main_character": "Sha Ine Febriyanti",
  "genre": "Drama",
  "penulis_naskah" : "Wregas Bhanuteja"
  }
}
```

Response Body Error :

```json
{
  "errors": "Year is invalid"
}
```

## Get movie API

Endpoint : GET /api/movie/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
   "title": "Budi Pekerti",
  "production_house": "Rekata studio",
  "year": "2023",
  "main_character": "Sha Ine Febriyanti",
  "genre": "Drama",
  "penulis_naskah" : "Wregas Bhanuteja"
  }
}
```

Response Body Error :

```json
{
  "errors": "Movie is not found"
}
```

## Search Movie API

Endpoint : GET /api/movie

Headers :

- Authorization : token

Query params :

- title : Search by title using like, optional
- genre : Search by genre using like, optional
- year : Search by year using like, optional


Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "title": "Budi Pekerti",
  "production_house": "Rekata studio",
  "year": "2023",
  "main_character": "Sha Ine Febriyanti",
  "genre": "Drama",
  "penulis_naskah" : "Wregas Bhanuteja"
    },
    {
      "id": 2,
      "title": "Budi Pekerti",
  "production_house": "Rekata studio",
  "year": "2023",
  "main_character": "Sha Ine Febriyanti",
  "genre": "Drama",
  "penulis_naskah" : "Wregas Bhanuteja"
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Body Error :

## Remove Profile API

Endpoint : DELETE /api/movie/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "OK"
}
```

Response Body Error :

```json
{
  "errors": "Movie is not found"
}
```
