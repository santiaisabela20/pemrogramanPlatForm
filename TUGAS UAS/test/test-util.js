import { prismaClient } from "../src/application/database.js"
import bcrypt from "bcrypt";

export const removeTestUser = async ()=>{
    await prismaClient.user.deleteMany({
    where: {
        username: "test"
    }
})
}

export const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            username: "test",
            password: await bcrypt.hash("rahasia", 10),
            name: "test",
            token: "test"
        }
    })
}

export const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            username: "test"
        }
    });
}

export const removeAllTestMovie = async () => {
    await prismaClient.movie.deleteMany({
        where: {
            username: 'test'
        }
    });
}

export const createTestMovie = async()=> {
    await prismaClient.movie.create({
        data: {
            title: "test",
            production_house: "test",
            main_character: "test",
            genre: "test",
            penulis_naskah: "test",
            year: "2023"
        }
    })
}

export const createManyTestMovie = async()=> {
    for (let i = 0; i < 15; i++){
        await prismaClient.movie.create({
            data: {
                title: `test`,
                production_house: `test ${i}`,
                main_character: `test ${i}`,
                genre: `test ${i}`,
                penulis_naskah: `test ${i}`,
                year: `2023${i}`
            }
        })
    }
}

export const getTestMovie = async()=> {
    return prismaClient.movie.findFirst({
        where: {
            username: 'test'
        }
    })
}