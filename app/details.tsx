import fetchCharacters from '@/scripts/API_HOST';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import {FlatList, Image, Text, View, StyleSheet} from 'react-native';

interface Personagem{
    id: number;
    name: string;
    images: string[];
}


export default function home() {
    const router = useRouter();
    const [personagens, setPersonagens] = useState<Personagem[]>([]);
    const [carregar, setCarregar] = useState(true);


    useEffect(() => {
        async function buscarPersonagens() {
            const dados = await fetchCharacters();
            setPersonagens(dados.characters);
            setCarregar(false);
        }
},[])
return(
    <View>
        <Text>Detalhes</Text>
        <FlatList 
        data={personagens}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) =>( 
            <View style= {styles.card}>
            <Image source={{uri:item.images[0]}} style={styles.image}/>
            <Text>{item.name}</Text>
            </View>
        )}
        />
        </View>
)
}
const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFF",
    padding: 15
},
card: {
    backgroundColor: "#F4F4F4",
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    justifyContent: "center"
    
},
image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
},
name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,

},
})