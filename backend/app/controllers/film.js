const { Film } = require('../models');
const ApiError = require('../../utils/ApiError');
const addFilm = async(req, res) => {
    try {
        const {image_thumbnail, description, title} = req.body
        const data = {image_thumbnail, description, title}
        await Film.create(data)
        res.status(201).json({
            status: 'success',
            message: 'Film created successfully'
        })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
}
const getAllFilm = async(req, res) => {
    try {
        const data = await Film.findAll()
        res.status(200).json(data)
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
}
const getFilmById = async(req, res) => {
    try {
        const {id} = req.params
        const data = await Film.findByPk(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
}
const updateFilm = async(req, res) => {
    try {
        const {id} = req.params
        const {image_thumbnail, description, title} = req.body
        const filmById = await Film.findByPk(id)
        const data = {image_thumbnail, description, title}
        if(!filmById) throw new ApiError(404, 'Film not found');
        await Film.update(data, { where: { id, }, });
        res.status(200).json({
            status: 'success',
            message: 'Film updated successfully'
        })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
}
const deleteFilm = async(req, res) => {
    try {
        const {id} = req.params
        const filmById = await Film.findByPk(id)
        if(!filmById) throw new ApiError(404, 'Film not found');
        await Film.destroy({ where: { id, }, });
        res.status(204).send();
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
}

module.exports = {getAllFilm, getFilmById, updateFilm, addFilm, deleteFilm}