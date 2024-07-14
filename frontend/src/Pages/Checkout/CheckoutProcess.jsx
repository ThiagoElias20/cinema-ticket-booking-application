import { Armchair, Ticket, Wallet } from "lucide-react";

export function CheckoutProcess() {
  return (
    <div className="CheckoutProcess">
      <h3>Escolha seu assento</h3>
        <div>
        <div className="CheckoutProcess-Etapas">
          <div className="CheckoutProcess-Etapas-Etapa">
            <Armchair/>
          </div>
          <div className="CheckoutProcess-Etapas-Linha">
            
          </div>
          <div className="CheckoutProcess-Etapas-Etapa">
            <Ticket/>
          </div>
          <div className="CheckoutProcess-Etapas-Linha">
            
          </div>
          <div className="CheckoutProcess-Etapas-Etapa">
            <Wallet/>
          </div>
        </div>
        </div>
    </div>
  )
}