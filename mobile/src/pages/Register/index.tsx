import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { styles } from './styles'
import { RegisterCard } from '../../components/RegisterCard';
import { Button } from '../../components/Button';
import { theme } from '../../theme';
import { Header } from '../../components/Header';

type RouteParams = {
    id: string
    title: string
}

export function Register() {

    const route = useRoute();
    const { id, title } = route.params as RouteParams;
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    function handleNewRegister() {
        
        if (name == '' && description == '') {
            alert('Favor preencha todos os campos!')
        }
        if (name != '' && description != '') {
            alert('Cadastrado!')
        }
    }


    return (
        <View style={styles.container}>

            <Header 
                name='Leonardo'
                buttonBack={true}
            />

            <View style={styles.viewTitle}>
                <Text style={styles.title}>Criar novo item de</Text>
                <Text style={styles.titleList}>{title}</Text>
            </View>

            <RegisterCard 
                getName={setName}
                getDescription={setDescription}
            /> 

            <View style={styles.button}>
                <Button 
                    title="Cadastrar"
                    functionCall={handleNewRegister}
                    color={theme.colors.second_color}
                />
            </View>

        </View>
    );
}