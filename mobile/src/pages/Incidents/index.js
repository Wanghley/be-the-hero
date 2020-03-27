import React, {useState,useEffect} from 'react';
import { View, Image, Text, TouchableOpacity,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Feather} from '@expo/vector-icons'

import logoImg from '../../assets/logo.png';

import api from '../../services/api';

import styles from './styles';

export default function Incidents(){
    const navigation = useNavigation();
    const [incidents,setIncidents]=useState('');
    const [totalItens, setTotalItens]=useState(0);
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(false);

    function navigateToDetail(incident){
        navigation.navigate('Details',{ incident });
    };

    async function loadIncidents(){
        if(loading){
            return;
        }
        if(totalItens>0 && incidents.length==totalItens){
            return
        }
        setLoading(true);

        const res = await api.get(`incidents`,{
            params: {page}
        });
        setIncidents([...incidents,...res.data]);
        setTotalItens(res.headers['x-total-count']);
        setPage(page+1);
        setLoading(false);
    }

    useEffect(()=>{
        loadIncidents();
    },[]);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{totalItens} casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia!!
            </Text>
            <FlatList
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident=>String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.9}
                renderItem={({item:incident})=>(
                    <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.nome}</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.titulo}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(incident.value)}</Text>

                    <TouchableOpacity 
                    style={styles.detailsButton} 
                    onPress={()=>navigateToDetail(incident)}>
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#e02041"/>
                    </TouchableOpacity>
                </View>
                )}
            />
        </View>
    );
}