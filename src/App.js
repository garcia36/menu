import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
              <h1 className='titulo'>Corea en tu mesa </h1>
              <div className='contenedor-principal'>
                <Menu
                    nombre="Bulgogi"
                    coreno='(불고기)'
                    descripcion='El nombre de esta receta se forma de la suma de dos palabras: “bul”, que en coreano significa fuego, y “gogi”, que significa carne.'
                    precio='$250.00 MX'
                    imagen='bulgogi'/>
                <Menu
                    nombre="Dackgangjeong"
                    coreno='(정)'
                    descripcion='El dakgangjeong es un plato de pollo que se fríe dos veces y luego, se saltea en una salsa dulce, picante, espesa y ligeramente pegajosa. '
                    precio='$300.00 MX'
                    imagen='Dakgangjeong'/>
                <Menu
                    nombre="Dumplings"
                    coreno='(만두) '
                    descripcion='El mandu es una versión coreana de los dumplings de carne y vegetales. Su masa es muy fina y se vuelve translúcida cuando se cuece al vapor. '
                    precio='$250.00 MX'
                    imagen='dumplings'/>
                  </div>
              <div className='contenedor-principal'>
              <Menu
                    nombre="Gimbap"
                    coreno='(김밥)'
                    descripcion='Es un bol de arroz servido con vegetales encima y acompañado con gochujang (pasta de chile picante), salsa soya o doenjang (salsa de frijoles de soya fermentados). '
                    precio='$250.00'
                    imagen='gimbap'/>
                <Menu
                    nombre="Japchae"
                    coreno='(잡채)'
                    descripcion='Plato típico de la cocina coreana elaborado de batata y fideo celofán, preparados stir fried en aceite de sésamo con carne de vaca en tiras y todo ello mezclado.'
                    precio='$350.00'
                    imagen='japche'/>
                <Menu
                    nombre="Hangover Stew"
                    coreno='(해장국)'
                    descripcion='Consiste en repollo napa seco , vegetales y carne en un abundante caldo de res .'
                    precio='$200.00'
                    imagen='Hangover_stew'/>
                  </div>
            </div>
  );
}

export default App;
