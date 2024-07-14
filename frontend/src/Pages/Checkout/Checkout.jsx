import { CheckoutProcess } from './CheckoutProcess';
import { EscolhaDeAssentos } from './EscolhaDeAssentos';
import { Conteudo } from '../../components/Conteudo/Conteudo'
import { Navbar } from '../../components/Navbar/Navbar'
import './styles.css';

export function Checkout() {
  return (
    <div className="Checkout">
      <Navbar/>
      <Conteudo>
        <CheckoutProcess/>
        <EscolhaDeAssentos/>
      </Conteudo>
    </div>
  )
}