import Box from "../components/Box.js";
import Pagina from "../components/Pagina.js";

export default function Home() {

  return (
    <>
      <Pagina>
        <Box title="Esse é um título de componente">
          <p>Isso é um componente</p>
        </Box>
        <Box title="Outro título de componente">
          <button className="btn btn-primary">Isso é um botão</button>
        </Box>
        <Box title="simples e prático">
          Posso colocar o que eu quiser dentro desse componente
        </Box>
      </Pagina>
    </>
  );
}
