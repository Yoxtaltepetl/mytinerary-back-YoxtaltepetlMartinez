import { response } from "express";
import City from "../../models/City.js";

let allCities = async(req, res, next) =>{
    try {
        let all = await City.find()
        return res.status(200).json({res:all})
    } catch (error) {
        next(error)
    }
}

let cityById = async(req, res, next)=>{
    try {
        let id = req.params.id;
        let city = await City.findById(id)
        return res.status(200).json({response:city})
    } catch (error) {
        
    }
}

export {allCities, cityById}