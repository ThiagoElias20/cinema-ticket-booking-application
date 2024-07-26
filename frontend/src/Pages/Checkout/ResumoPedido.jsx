import axios from "axios"
import { useState, useEffect } from "react";

export function ResumoPedido() {
    const [filme, setFilmes] = useState({});

    useEffect(() => {
        axios.get('http://localhost:3000/api/movies')
            .then(res => {
                const filmesData = res.data.content[0];
                setFilmes(filmesData);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="ResumoPedido">
            <h3>Resumo do Pedido</h3>
            <div className="ResumoPedido-Dados">
                {filme.media && (
                    <div className="ResumoPedido-Filme">
                        <div className="ResumoPedido-FilmeImg">
                            <img src={filme.media.img1} alt="" />
                        </div>
                        <div className="ResumoPedido-FilmeDetalhes">
                        <h4>{filme.title}</h4>
                        <p>Nome do cinema escolhido</p>
                    </div>
                    </div>
                )}
                <hr />
                <div className="sessaoEscolhida">
                    <p>Sala 3</p>
                    <div>
                        <p>QUI 25/07</p>
                        <p>13:30</p>
                    </div>
                </div>
            </div>
            <hr className="SeparaTotal" />
            <div className="Resumo-Total">
                <div className="Itens">
                    <p>Itens</p>
                    <p>0</p>
                </div>
                <div className="Total">
                    <p>Total</p>
                    <p>R$ 0,00</p>
                </div>
            </div>
        </div>
    )
}