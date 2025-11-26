import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
import { Stack } from 'expo-router';
export default function SanBlasScreen() {
    return (
        <ScrollView style={styles.container}>
            {/* 1. Header com o Título "Bertioga"
Isso garante que o nome da praia apareça na barra de navegação.
*/}
            <Stack.Screen
                options={{
                    title: 'SanBlas',
                }}
            />
            {/* 2. Imagem Principal */}
            <Image
                // O caminho da pasta `app/` para `assets/` é apenas um nível (../)
                source={require('../assets/images/sanblas.jpg')}
                style={styles.headerImage}
            />
            {/* 3. Conteúdo da Página */}
            <View style={styles.contentContainer}>
                {/* Título e Subtítulo */}
                <Text style={styles.title}>SanBlas</Text>
                <Text style={styles.subtitle}>Panamá</Text>
                {/* Texto de Descrição */}
                <Text style={styles.description}>
                    San Blas, também conhecida como Guna Yala, é um arquipélago no Caribe do Panamá, administrado autonomamente pelo povo indígena Guna. Composta por cerca de 360 ilhas, das quais aproximadamente 50 são habitadas, a região é famosa por suas águas cristalinas e turquesas, areias brancas e natureza preservada. O acesso é controlado pela comunidade local, que mantém tradições culturais fortes e rejeita grandes resorts, oferecendo apenas cabanas rústicas feitas de bambu ou madeira.
                </Text>
                {/* Imagem do Mapa */}
                <Image
                    source={require('../assets/images/sanblas-map.png')}
                    style={styles.mapImage}
                />

            </View>
        </ScrollView>
    );
}
// --- Estilos ---
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    headerImage: {
        width: '100%',
        height: 280, // Um pouco maior para a tela de detalhe
        resizeMode: 'cover',
        borderBottomLeftRadius: 20, // Bordas arredondadas no canto
        borderBottomRightRadius: 20, // Bordas arredondadas no canto
    },
    contentContainer: {
        padding: 20, // Espaçamento interno para todo o conteúdo
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#005FFF', // Azul principal
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 18,
        color: '#20C0C0', // Ciano/Verde-água
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        color: '#333333', // Cor de texto padrão (escuro)
        lineHeight: 24, // Espaçamento entre linhas para melhor leitura
        marginBottom: 25,
    },
    mapImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10, // Bordas arredondadas para o mapa
    },
});