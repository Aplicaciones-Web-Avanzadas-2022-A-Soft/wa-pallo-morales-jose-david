import {BrowserRouter, Routes, Route} from "react-router-dom";
import ArtistaList from "./components/ArtistaList";
import ArtistaForm from "./components/ArtistaForm";
import Menu from "./components/Navbar"
import {Container} from "@mui/material"

export default function App(){
  return (
      <BrowserRouter>
         <Menu/>
              <Container>
                  <Routes>
                  <Route index path="/" element={<ArtistaList />} />
                  <Route path="/artistas/new" element={<ArtistaForm />} />
                  <Route path="/artistas/:id/edit" element={<ArtistaForm />} />
                  {/*<Route path="/artistas" element={<ArtistaList/>}/>*/}
                  {/*<Route path="/artistas/new" element={<ArtistaForm/>}/>*/}
                  {/* Edit Route*/}
                  </Routes>
              </Container>
      </BrowserRouter>
  )
}