const database = require("../db");
const nextTransformSsg = require("next/dist/build/babel/plugins/next-ssg-transform");

const  getAllArtistas = async (req, res, next)=>{
    try {
        const allArtistas =  await database.query('SELECT * FROM artista');
        res.json(allArtistas.rows)
    }catch (error){
        next(error)
    }
}

const getArtista = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await database.query("SELECT * FROM artista WHERE id = $1", [id]);

        if (result.rows.length === 0)
           return res.status(404).json({
               message: 'Artista no encontrado'
           });

        res.json(result.rows[0]);
    }catch (error){
        next(error)
    }

}

const createArtista = async (req, res, next)=>{
    const {id, nombre, apellido, direccion, fechaNacimiento} = req.body;
    try {
        const result = await database.query(
            "INSERT INTO artista (id, nombre, apellido, direccion, fechaNacimiento) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [id, nombre, apellido, direccion, fechaNacimiento]
        );
        res.json(result.rows[0]);
    }catch (error){
        next(error)
    }
}

const deleteArtista = async (req, res, next)=>{
    try {
        const {id} = req.params;
        const result = await database.query("DELETE FROM artista WHERE id = $1", [id]);

        if (result.rowCount === 0)
            return res.status(404).json({
                message: 'Artista no encontrado'
            });
        res.sendStatus(204)
    }catch (error){
        next(error)
    }
}

const updateArtista = async (req, res)=>{
    try {
        const { id } = req.params;
        const {nombre, apellido, direccion, fechaNacimiento} = req.body;
        const result = await database.query(
            "UPDATE artista SET nombre = $1, apellido = $2, direccion = $3, fechaNacimiento = $4  WHERE id = $5 RETURNING *",
            [nombre, apellido, direccion, fechaNacimiento, id]
        );

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Artista no encontrado'
            });
        return res.json(result.rows[0]);
    }catch (error){
        next(error)
    }

}

module.exports = {
    getAllArtistas,
    getArtista,
    createArtista,
    deleteArtista,
    updateArtista
}