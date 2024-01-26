import Joi from "joi";

const createMovieValidation =Joi.object ({
   title: Joi.string().max(100).required(),
   production_house: Joi.string().max(100).required(),
   main_character: Joi.string().max(100).required(),
   genre:Joi.string().max(100).required(),
   penulis_naskah: Joi.string().max(100).required(),
   year: Joi.string().max(100).required()
});

const getMovievalidation = Joi.number().positive().required();

const updateMovieValidation =Joi.object ({
    id: Joi.number().positive().required(),
    title: Joi.string().max(100).required(),
    production_house: Joi.string().max(100).required(),
    main_character: Joi.string().max(100).required(),
    genre:Joi.string().max(100).required(),
    penulis_naskah: Joi.string().max(100).required(),
    year: Joi.string().max(100).required()

});

const searchMovieValidation = Joi.object({
   page: Joi.number().min(1).positive().default(1),
   size: Joi.number().min(1).positive().max(100).default(10),
    title: Joi.string().optional(),
    genre: Joi.string().optional(),
    year: Joi.string().optional()
});

export{
    createMovieValidation,
    getMovievalidation,
    updateMovieValidation,
    searchMovieValidation
}