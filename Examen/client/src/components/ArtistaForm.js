import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
    CircularProgress,
} from "@mui/material";

const ArtistaForm = () => {
    // const [task, setTask] = useState({
    const [artista, setArtista] = useState({
        id:"",
        nombre:"",
        apellido:"",
        direccion:"",
        fechaNacimiento:""

    });
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            loadArtista(params.id);
        }
    }, [params.id]);

    const loadArtista = async (id) => {
        const res = await fetch(`http://localhost:4000/artistas/` + id);
        const data = await res.json();
        //setArtista({ title: data.title, description: data.description });
        setArtista({ nombre: data.nombre, apellido: data.apellido, direccion: data.direccion, fechaNacimiento: data.fechaNacimiento });
        setEditing(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            if (editing) {
                const response = await fetch(
                    `http://localhost:4000/artistas/` + params.id,
                    {
                        method: "PUT",
                        headers: { 'Access-Control-Allow-Origin':'*','Content-Type':'application/json'},
                        body: JSON.stringify(artista),
                    }
                );
                await response.json();
            } else {
                const response = await fetch(`http://localhost:4000/artistas`, {
                    method: "POST",
                    headers: { 'Access-Control-Allow-Origin':'*','Content-Type':'application/json'},
                    body: JSON.stringify(artista),
                });
                await response.json();
            }

            setLoading(false);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) =>
        setArtista({ ...artista, [e.target.name]: e.target.value });

    return (
        <Grid
            container
            alignItems="center"
            direction="column"
            justifyContent="center"
        >
            <Grid item xs={3}>
                <Card
                    sx={{ mt: 5 }}
                    style={{
                        backgroundColor: "#1E272E",
                        padding: "1rem",
                    }}
                >
                    <Typography variant="h5" textAlign="center" color="white">
                        {editing ? "Update Artista" : "Crear artista"}
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                variant="filled"
                                label="Escribe tu id"
                                sx={{
                                    display: "block",
                                    margin: ".5rem 0",
                                }}
                                name="id"
                                onChange={handleChange}
                                value={artista.id}
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{ style: { color: "white" } }}
                            />
                            <TextField
                                variant="filled"
                                label="Escribe tu nombre"
                                sx={{
                                    display: "block",
                                    margin: ".5rem 0",
                                }}
                                name="nombre"
                                onChange={handleChange}
                                value={artista.nombre}
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{ style: { color: "white" } }}
                            />
                            <TextField
                                variant="outlined"
                                label="Escribe tu apellido"
                                multiline
                                sx={{
                                    display: "block",
                                    margin: ".5rem 0",
                                }}
                                name="apellido"
                                onChange={handleChange}
                                value={artista.apellido}
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{ style: { color: "white" } }}
                            />

                            <TextField
                                variant="outlined"
                                label="Escribe tu direccion"
                                multiline
                                sx={{
                                    display: "block",
                                    margin: ".5rem 0",
                                }}
                                name="direccion"
                                onChange={handleChange}
                                value={artista.direccion}
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{ style: { color: "white" } }}
                            />

                            <TextField
                                variant="outlined"
                                label="Escribe tu fecha de nacimiento"
                                multiline
                                sx={{
                                    display: "block",
                                    margin: ".5rem 0",
                                }}
                                name="fechaNacimiento"
                                onChange={handleChange}
                                value={artista.fechaNacimiento}
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{ style: { color: "white" } }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={!artista.id || !artista.nombre || !artista.apellido || !artista.direccion || !artista.fechaNacimiento}
                            >
                                {loading ? (
                                    <CircularProgress color="inherit" size={25} />
                                ) : (
                                    "Guardar"
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ArtistaForm;

