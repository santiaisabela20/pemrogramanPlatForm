import movieService from "../service/movie-service.js";
import { logger } from "../application/logging.js";


const create = async (req,res,next) => {
    try{
        const user =req.user;
        const request = req.body;
        const result = await movieService.create(user, request);
        res.status(200).json({
            data:result
        })
    }catch (e) {
        next(e) ;
    }
}

const get = async (req, res, next) => {
    try {
        const user = req.user;
        const movieId = req.params.movieId;
        const result = await movieService.get(user, movieId);
        res.status(200).json({
            data: result
        })
    }catch (e){
        next(e);
    }
}

const update = async (req,res,next) => {
    try{
        const user = req.user;
        const movieId= req.params.movieId;
        const request = req.body;
        request.id = movieId;

        const result = await movieService.update(user,request);
        res.status(200).json({
            data:result
        })

    }catch (e){
        next(e);
    }
}

const remove = async (req,res,next) => {
    try{
        const user = req.user;
        const movieId = req.params.movieId;

        await movieService.remove(user,movieId);
        res.status(200).json({
            data: "OK",
        })

    }catch (e){
        next(e);
    }
}

const search = async (req, res, next) => {
    try {
        const user = req.user;
        const request = {
            title : req.query.title,
            genre : req.query.genre,
            year : req.query.year,
            page : req.query.page,
            size : req.query.size,
            
        };

        const result = await movieService.search(user, request);
        res.status(200).json({
            data: result.data,
            paging: result.paging
    });
    }catch(e){
        next(e);
    }
}

export default {
    create,
    get,
    update,
    remove,
    search
}