import supertest from "supertest";
import { createTestMovie, createTestUser, getTestMovie, removeAllTestMovie, removeTestUser } from "./test-util.js"
import { func } from "joi";

describe('POST /api/contact', function (){
    beforeEach(async () =>{
        await createTestUser();
    })
    afterEach(async () =>{
        await removeAllTestMovie();
        await removeTestUser();
    })

    it('should can create new movie', async () =>{
        const result = await supertest(web)
        .post("/api/movie")
        .set("Authorization", 'test')
        .send({
            title:"test",
            production_house: "test",
            main_character: "test",
            genre:"test",
            penulis_naskah :"test",
            year : "2020"

        });
        expect(result.status).toBe(200);
        expect(result.body.id).toBeDefined();
        expect(result.body.data.title).toBe("test");
        expect(result.body.data.production_house).toBe("test");
        expect(result.body.data.main_character).toBe("test");
        expect(result.body.data.genre).toBe("test");
        expect(result.body.data.penulis_naskah).toBe("test");
        expect(result.body.data.year).toBe("2020");
    });

    it('should reject if request is not valid', async () =>{
        const result = await supertest(web)
        .post("/api/movie")
        .set("Authorization", 'test')
        .send({
            title:"",
            production_house: "test",
            main_character: "test",
            genre:"test",
            penulis_naskah :"test",
            year : "2020"

        });
        expect(result.status).toBe(400);
        expect(result.body.errors).toBeDefined();
    });
});

describe('GET /api/movie/:movieId', function (){
    beforeEach(async () =>{
        await createTestUser();
        await createTestMovie();
    })
    afterEach(async () =>{
        await removeAllTestMovie();
        await removeTestUser();
    })

    it('should can get movie',async()=> {
        const testMovie = await getTestMovie();

        const result = await supertest(web)
        .get("/api/movie/"+ testMovie.id)
        .set('Authorization', 'test');

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testMovie.id);
        expect(result.body.data.title).toBe(testMovie.title);
        expect(result.body.data.production_house).toBe(testMovie.production_house);
        expect(result.body.data.main_character).toBe(testMovie.main_character);
        expect(result.body.data.genre).toBe(testMovie.genre);
        expect(result.body.data.penulis_naskah).toBe(testMovie.penulis_naskah);
        expect(result.body.data.year).toBe(testMovie.year);
    });

    it('should return 404 if movie id is not found',async()=> {
        const testMovie = await getTestMovie();

        const result = await supertest(web)
        .get("/api/movie/"+ (testMovie.id + 1))
        .set('Authorization', 'test');

        expect(result.status).toBe(404);
    });
});

describe ('PUT/api/movie/:movieId', function (){
    beforeEach(async () =>{
        await createTestUser();
        await createTestMovie();
    })
    afterEach(async () =>{
        await removeAllTestMovie();
        await removeTestUser();
    })
    it('should can update existing contact', async()=> {
        const testMovie = await getTestMovie();

        const result = await  supertest(web)
        .put('/api/movie' + testMovie.id)
        .set('Authorization', 'test')
        .send({
            title: "Budi Pekerti",
            production_house: "Rekata studio",
            main_character: "Sha Ine Febriyanti",
            genre: "Drama",
            penulis_naskah : "Wregas Bhanuteja",
            year  : "2023"
        });
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testMovie.id);  
        expect(result.body.data.title).toBe("Budi Pekerti") ;
        expect(result.body.data.production_house).toBe("Rekata studio") ;
        expect(result.body.data.main_character).toBe("Sha Ine Febriyanti") ;
        expect(result.body.data.genre).toBe("Drama") ;
        expect(result.body.data.penulis_naskah).toBe("Wregas Bhanuteja") ;
        expect(result.body.data.year).toBe("2023")  
        
    
    });
    it('should can update existing contact', async()=> {
        const testMovie = await getTestMovie();

        const result = await  supertest(web)
        .put('/api/movie' + testMovie.id)
        .set('Authorization', 'test')
        .send({
            title: "Budi Pekerti",
            production_house: "Rekata studio",
            main_character: "Sha Ine Febriyanti",
            genre: "Drama",
            penulis_naskah : "Wregas Bhanuteja",
            year  : "2023"
        });
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testMovie.id);  
        expect(result.body.data.title).toBe("Budi Pekerti") ;
        expect(result.body.data.production_house).toBe("Rekata studio") ;
        expect(result.body.data.main_character).toBe("Sha Ine Febriyanti") ;
        expect(result.body.data.genre).toBe("Drama") ;
        expect(result.body.data.penulis_naskah).toBe("Wregas Bhanuteja") ;
        expect(result.body.data.year).toBe("2023")  
        
    
    });
    it('should can update existing contact', async()=> {
        const testMovie = await getTestMovie();

        const result = await  supertest(web)
        .put('/api/movie' + testMovie.id)
        .set('Authorization', 'test')
        .send({
            title: "Budi Pekerti",
            production_house: "Rekata studio",
            main_character: "Sha Ine Febriyanti",
            genre: "Drama",
            penulis_naskah : "Wregas Bhanuteja",
            year  : "2023"
        });
        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(testMovie.id);  
        expect(result.body.data.title).toBe("Budi Pekerti") ;
        expect(result.body.data.production_house).toBe("Rekata studio") ;
        expect(result.body.data.main_character).toBe("Sha Ine Febriyanti") ;
        expect(result.body.data.genre).toBe("Drama") ;
        expect(result.body.data.penulis_naskah).toBe("Wregas Bhanuteja") ;
        expect(result.body.data.year).toBe("2023")  
        
    
    });
    it('should reject if request is invalid', async()=> {
        const testMovie = await getTestMovie();

        const result = await  supertest(web)
        .put('/api/movie' + testMovie.id)
        .set('Authorization', 'test')
        .send({
            title: "",
            production_house: "",
            main_character: "",
            genre: "budi",
            penulis_naskah : "",
            year  : ""
        });
        expect(result.status).toBe(400);
        expect(result.body.data.id).toBe(testMovie.id);  
        expect(result.body.data.title).toBe("Budi Pekerti") ;
        expect(result.body.data.production_house).toBe("Rekata studio") ;
        expect(result.body.data.main_character).toBe("Sha Ine Febriyanti") ;
        expect(result.body.data.genre).toBe("Drama") ;
        expect(result.body.data.penulis_naskah).toBe("Wregas Bhanuteja") ;
        expect(result.body.data.year).toBe("2023")  
        
    
    });
    it('should reject if request is invalid', async()=> {
        const testMovie = await getTestMovie();

        const result = await  supertest(web)
        .put('/api/movie' + testMovie.id)
        .set('Authorization', 'test')
        .send({
            title: "Budi Pekerti",
            production_house: "Rekata studio",
            main_character: "Sha Ine Febriyanti",
            genre: "Drama",
            penulis_naskah : "Wregas Bhanuteja",
            year  : "2023"
            
        });
        expect(result.status).toBe(404);
        expect(result.body.data.id).toBe(testMovie.id);  
        expect(result.body.data.title).toBe("Budi Pekerti") ;
        expect(result.body.data.production_house).toBe("Rekata studio") ;
        expect(result.body.data.main_character).toBe("Sha Ine Febriyanti") ;
        expect(result.body.data.genre).toBe("Drama") ;
        expect(result.body.data.penulis_naskah).toBe("Wregas Bhanuteja") ;
        expect(result.body.data.year).toBe("2023")  
        
    
    });
    
})

describe('DELETE /api/movie/:movieId', function (){
    beforeEach(async() => {
        await createTestUser();
        await createTestMovie();
    })
    afterEach(async () => {
        await removeAllTestMovie();
        await removeTestUser();
    })
    it ('should can delete movie', async () => {
       let testMovie = await getTestMovie();
        const result = await supertest(web)
        .delete('/api/movie' + testMovie.id)
        .set('Auhtorization', 'test');

        expect(result.status).toBe(200);
        expect(result.body.data).toBe("OK");

        testMovie = await getTestMovie();
        expect(testMovie).toBeNull();
    });
    it ('should reject if movie is not found', async () => {
        let testMovie = await getTestMovie();
         const result = await supertest(web)
         .delete('/api/movie' + (testMovie.id+1))
         .set('Auhtorization', 'test');
 
         expect(result.status).toBe(404);
         
     });
});

describe('GET /api/movie', function (){
    beforeEach(async() => {
        await createTestUser();
        await createTestMovie();
    })
    afterEach(async () => {
        await removeAllTestMovie();
        await removeTestUser();
    })
    it('should can search without parameter', async() => {
        const result = await supertest(web)
        .get('/api/movie')
        .set('Authorization', 'test');

        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(10);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.data.paging.total_page).toBe(2);
        expect(result.body.data.paging.total_item).toBe(15);
    });

    it('should can search to page 2 ', async() => {
        const result = await supertest(web)
        .get('/api/movie')
        .query({
            page: 2
        })
        .set('Authorization', 'test');

        logger.info(result.body);

        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(5);
        expect(result.body.paging.page).toBe(2);
        expect(result.body.data.paging.total_page).toBe(2);
        expect(result.body.data.paging.total_item).toBe(15);
    });

    it('should can search using name ', async() => {
        const result = await supertest(web)
        .get('/api/movie')
        .query({
            name: "test 1"
        })
        .set('Authorization', 'test');

        logger.info(result.body);

        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(6);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.data.paging.total_page).toBe(1);
        expect(result.body.data.paging.total_item).toBe(6);
    })

    it('should can search using title ', async() => {
        const result = await supertest(web)
        .get('/api/movie')
        .query({
            title: "test1"
        })
        .set('Authorization', 'test');

        logger.info(result.body);

        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(6);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.data.paging.total_page).toBe(1);
        expect(result.body.data.paging.total_item).toBe(6);
    })
    it('should can search using genre ', async() => {
        const result = await supertest(web)
        .get('/api/movie')
        .query({
            genre: "test1"
        })
        .set('Authorization', 'test');

        logger.info(result.body);

        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(6);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.data.paging.total_page).toBe(1);
        expect(result.body.data.paging.total_item).toBe(6);
    })
    it('should can search using year ', async() => {
        const result = await supertest(web)
        .get('/api/movie')
        .query({
            year: "2023"
        })
        .set('Authorization', 'test');

        logger.info(result.body);

        expect(result.status).toBe(200);
        expect(result.body.data.length).toBe(6);
        expect(result.body.paging.page).toBe(1);
        expect(result.body.data.paging.total_page).toBe(1);
        expect(result.body.data.paging.total_item).toBe(6);
    })

});