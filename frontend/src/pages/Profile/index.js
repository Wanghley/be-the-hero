import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';
import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Profile(){
    const ongId = localStorage.getItem('ongId');
    const [incidents,setIncidents] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        api.get('profile',{
            headers:{
                Authorization: localStorage.getItem('ongId'),
            }
        }).then(response => {
            setIncidents(response.data);
        })
    },[ongId]);

    async function handleDelete(id){
        try {
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id!==id));
        } catch (err) {
            alert('Erro ao deletar caso! Tente novamente');
        }
    };

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    };

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {localStorage.getItem('ongName')}</span>
                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
                <button type='button' onClick={handleLogout}>
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.titulo}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incident.value)}</p>

                    <button type='button' onClick={()=>handleDelete(incident.id)}>
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}