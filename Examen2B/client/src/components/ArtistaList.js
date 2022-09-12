import React, { useState, useEffect } from "react";
// import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

const ArtistaList = () => {
    const [artista, setArtista] = useState([]);
    const navigate = useNavigate();

    const loadArtista = async () => {
        const response = await fetch(`http://localhost:4000/artistas`);
        const data = await response.json();
        setArtista(data);
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:4000/artistas/${id}`, {
                method: "DELETE",
            });
            setArtista(artista.filter((artista) => artista.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadArtista();
    }, []);

    return (
        <>
            <h1>Artista</h1>
            {artista.map((artista) => (
                <Card
                    style={{
                        marginBottom: ".7rem",
                        backgroundColor: "#1e272e",
                    }}
                >
                    <CardContent
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                color: "white",
                            }}
                        >
                            <Typography>{artista.id}</Typography>
                            <Typography>{artista.nombre}</Typography>
                            <Typography>{artista.apellido}</Typography>
                            <Typography>{artista.direccion}</Typography>
                            <Typography>{artista.fechaNacimiento}</Typography>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                color="inherit"
                                onClick={() => navigate(`/artistas/${artista.id}/edit`)}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="contained"
                                color="warning"
                                onClick={() => handleDelete(artista.id)}
                                style={{ marginLeft: ".5rem" }}
                            >
                                Borrar
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </>
    );
};

export default ArtistaList;