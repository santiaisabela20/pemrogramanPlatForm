import { validate } from "../validation/validation.js";
import { createMovieValidation, getMovievalidation, searchMovieValidation, updateMovieValidation } from "../validation/movie-validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";

const create = async (user,request) => {
    const movie = validate(createMovieValidation,request);
    movie.username = user.username;

    return prismaClient.movie.create({
        data:movie,
        select: {
            id: true,
            title: true,
            production_house:true,
            main_character: true,
            genre:true,
            penulis_naskah :true,
            year : true

        }
    });

}

const get = async (user, movieId) => {
    movieId = validate(getMovievalidation, movieId);

    const movie = await prismaClient.movie.findFirst({
        where:{
            username: user.username,
            id: movieId,
        },
        select: {
            id: true,
            title: true,
            production_house:true,
            main_character: true,
            genre:true,
            penulis_naskah:true,
            year: true
        },
    });

    if(!movie){
        throw new ResponseError(404, "movie is not found");
    }

    return movie;
}

const update = async(user,request) => {
    const movie = validate(updateMovieValidation,request);

    const totalMovieInDatabase = await prismaClient.movie.count({
        where:{
            username:user.username,
            id:movie.id
        }
    });

    if(totalMovieInDatabase !==1){
        throw new ResponseError(404, "movie is not found");

    }
    return prismaClient.movie.update({
        where:{
            id:movie.id
        },
        data:{
            title: movie.title,
            production_house: movie.production_house,
            main_character: movie.main_character,
            genre: movie.genre,
            penulis_naskah: movie.penulis_naskah,
            year: movie.year


        },
        select:{
            id:true,
            title:true,
            production_house:true,
            main_character:true,
            genre:true,
            penulis_naskah: true,
            year: true

        }

    })

}

const remove = async (user,movieId) => {
    movieId = validate(getMovievalidation, movieId);

    const totalInDatabase= await prismaClient.movie.count({
        where:{
            username: user.username,
            id: movieId
        }

    });
    if(totalInDatabase !== 1){
        throw new ResponseError(404, "movie is not found");
    }
    return prismaClient.movie.delete({
        where:{
            id:movieId
        }
    });
}

const search = async (user, request) => {
    request = validate(searchMovieValidation, request);

    //1 ((page - 1) * size ) = 0
    //2 ((page - 1) * size ) = 10
    const skip = (request.page - 1) * request.size;

    const filters = [];

    filters.push({
        username: user.username
    });

    if(request.title){
        filters.push({
            title: {
                contains: request.title,
            },
        });
    }
    if(request.genre){
        filters.push({
            genre: {
                contains: request.genre,
            },
        });
    }
    if(request.year){
        filters.push({
            year: {
                contains: request.year,
            },
        });
    }

    const movie = await prismaClient.movie.findMany({
        where: {
            AND: filters,
        },
        take: request.size,
        skip: skip,
    });

    const totalItems = await prismaClient.movie.count({
        where:{
            AND: filters
        }
    });

    return{
        data: movie,
        paging: {
            page: request.page,
            total_item : totalItems,
            total_page : Math.ceil(totalItems / request.size)
        }
    }
}

export default{
    create,
    get,
    update,
    remove,
    search
}