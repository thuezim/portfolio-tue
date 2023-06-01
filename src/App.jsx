import './App.css'
import cliente from './components/cliente'
import footer from './components/footer'
import contato from './components/contato'
import menu from './components/menu'
import { BrowserRouter as Navegador, Routes, Route } from 'react-routerdom';
function App() {
return (
<>
<Navegador>
<menu />
<Routes>
<Route exact path="/" element={"Página Home em manutenção"} />
<Route path="/cliente" element={<cliente />} />
<Route path="/servico" element={"Página Serviços em manutenção"} />
<Route path="/sobre" element={"Página Sobre em manutenção"} />
<Route path="/contato" element={<contato />} />
</Routes>
</Navegador>
<Footer />
</>
)
}
export default App;

