import axios from "axios";
import { api } from "../../../config";
import { useState } from 'react';
import { Link } from "react-router-dom"
import { Button, Container, Form, FormGroup, Label, Input, Alert} from "reactstrap"

export const InserirItemCompra = (props) => {

    const [id] = useState(props.match.params.id);

    const [itemcompra, setItemcompra] = useState({
        CompraId: '',
        quantidade: '',
        ProdutoId: '',
        valor: ''
    });

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const valorInput = e => setItemcompra({
        ...itemcompra, [e.target.name]: e.target.value
    });

    const limparFormulario = () => setItemcompra({
        PedidoId: '',
        quantidade: '',
        ServicoId: '',
        valor: ''
    });

    const insItemcompra = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.post(api + "/inserir-itemcompra", itemcompra, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: "Erro: Sem conexão com a API."
                });
            });
    };

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto">
                        <h1>Cadastrar Item Compra</h1>
                    </div>

                    <div className="mt">
                        <Link to="/listar-clientes" className="btn btn-outline-primary btn-sm" title="Listar todos os Clientes ordenados pelo Nome">
                            Clientes
                        </Link>
                    </div>

                    <div className="mt pl">
                        <Link to={"/listar-itenscompra/" + id} className="btn btn-outline-primary btn-sm" title="Itens desta Compra">
                            Itens
                        </Link>
                    </div>

                    <div className="mt pl">
                        <Link to="/listar-produtos" className="btn btn-outline-primary btn-sm" title="Listar todos os Produtos ordenados pelo Nome">
                            Produtos
                        </Link>
                    </div>
                </div>

                <hr className="m-1"></hr>

                <div className="d-flex justify-content-center">
                    {status.type === 'error' ? <Alert color="danger">
                        {status.message}</Alert> : " "}
                    {status.type === 'success' ? <Alert color="success">
                        {status.message}</Alert> : " "}
                </div>

                <Form className="p-2" onSubmit={insItemcompra}>
                    <FormGroup>
                        <Label>ID Compra</Label>
                        <Input type="text" name="CompraId" placeholder="ID da Compra" value={itemcompra.CompraId} onChange={valorInput} required />
                    </FormGroup>

                    <FormGroup>
                        <Label>ID Produto</Label>
                        <Input type="text" name="ProdutoId" placeholder="ID do Produto" value={itemcompra.ProdutoId} onChange={valorInput} required/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Quantidade</Label>
                        <Input type="text" name="quantidade" placeholder="Quantidade" value={itemcompra.quantidade} onChange={valorInput} required/>
                    </FormGroup>

                    <FormGroup>
                        <Label>Valor</Label>
                        <Input type="text" name="valor" placeholder="Valor" value={itemcompra.valor} onChange={valorInput} required/>
                    </FormGroup>

                    <div className="d-flex">
                        <div className="p-2">
                            <Button type="submit" outline color="success" size="sm">Cadastrar</Button>
                        </div>

                        <div className="p-2">
                            <Button type="reset" outline color="secondary" size="sm" onClick={limparFormulario}>Limpar</Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    )
}