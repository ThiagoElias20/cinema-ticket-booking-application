import { CheckoutProcess } from './CheckoutProcess';
import { EscolhaDeAssentos } from './EscolhaDeAssentos';
import { Conteudo } from '../../components/Conteudo/Conteudo'
import { Navbar } from '../../components/Navbar/Navbar'
import './styles.css';
import { ResumoPedido } from './ResumoPedido';

export function Checkout() {
  return (
    <div className="Checkout">
      <Navbar/>
      <Conteudo>
        <CheckoutProcess/>
      </Conteudo>
      <div id="Checkout-assentos">
        <EscolhaDeAssentos/>
        <ResumoPedido/>
      </div>
    </div>
  )
}