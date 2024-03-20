import partyFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import useToast from "../hook/useToast";

import "./Form.css";


import "./Party.css";

const EditParty = () => {

    const { id } = useParams();

    const [party, setParty] = useState(null);

    const [services, setServices] = useState([]);

    const navigate = useNavigate();

    //Load service
    useEffect(() => {

        const loadServices = async () => {
            const res = await partyFetch.get("/services");
            setServices(res.data);

            loadParty();
        };
        const loadParty = async () => {
            const res = await partyFetch.get(`/parties/${id}`);
            setParty(res.data);
        };
        loadServices();
    }, []);

    if (!party) return <p>Carregando...</p>


    // Add or remove service
    const handleService = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;

        // Filter do id pelo valor do selecionado
        const filteredService = services.filter((s) => s._id === value);

        let partyServices = party.services;

        if (checked) {
            // Adicionar todos que estão selecionados e possuem o mesmo ID
            partyServices = [...partyServices, filteredService[0]];
        } else {
            // Retirar todos que não estão selecionados
            partyServices = partyServices.filter((s) => s._id !== value);
        }

        setParty({ ...party, services: partyServices });
    };


    const updateParty = async (e) => {
        e.preventDefault();
        
        try {
            const res = await partyFetch.put(`/parties/${party._id}`, party);
            if (res.status === 200) {
                navigate(`/party/${id}`);
            }
        } catch (error) {
            useToast(error.response.data.msg, "error")
        }  
    };

    return (
        <div className="form-page">
            <h2>Editando: {party.title}</h2>
            <p>Ajuste as informações da sua festa</p>
            <form onSubmit={(e) => updateParty(e)}>
                <label>
                    <span>Nome da festa:</span>
                    <input
                        type="text"
                        placeholder="Seja criativo..."
                        required
                        onChange={(e) => setParty({ ...party, title: e.target.value })}
                        value={party.title}
                    />
                </label>
                <label>
                    <span>Anfitrião:</span>
                    <input
                        type="text"
                        placeholder="Quem está dando a festa?"
                        required
                        onChange={(e) => setParty({ ...party, author: e.target.value })}
                        value={party.author}
                    />
                </label>
                <label>
                    <span>Descrição:</span>
                    <textarea
                        placeholder="Conte mais sobre a festa..."
                        required
                        onChange={(e) => setParty({ ...party, description: e.target.value })}
                        value={party.description}
                    ></textarea>
                </label>
                <label>
                    <span>Orçamento:</span>
                    <input
                        type="number"
                        placeholder="Quanto você pretende investir?"
                        required
                        onChange={(e) => setParty({ ...party, budget: e.target.value })}
                        value={party.budget}
                    />
                </label>
                <label>
                    <span>Imagem:</span>
                    <input
                        type="text"
                        placeholder="Insira a URL de uma imagem"
                        required
                        onChange={(e) => setParty({ ...party, image: e.target.value })}
                        value={party.image}
                    />
                </label>
                <label>
                    <div>
                        <h2>Escolha os serviços</h2>
                        <div className="services-container">
                            {services.length === 0 && <p>Carregando...</p>}
                            {services.length > 0 && services.map((service) => (
                                <div className="service" key={service._id}>
                                    <img src={service.image} alt={service.name} />
                                    <p className="service-name">{service.name}</p>
                                    <p className="service-price">R${service.price}</p>
                                    <div className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            value={service._id}
                                            onChange={(e) => handleService(e)}
                                            checked={party.services.find(
                                                (partyService) => partyService._id === service._id
                                            ) || ""
                                            }
                                        />
                                        <p>Marque para solicitar</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </label>
                <input type="submit" value="Alterar Festa" className="btn" />
            </form>

        </div>
    )
}

export default EditParty