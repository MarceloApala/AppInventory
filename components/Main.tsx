import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Main({navigation}) {
    const handleGenerateQR = () => {
        // Lógica para generar QR
        console.log('Generar QR');
        navigation.navigate('One');
    };

    const handleReadQR = () => {
        // Lógica para leer QR
        console.log('Leer QR');
        navigation.navigate('Two');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>QR Opciones</Text>
            <TouchableOpacity style={styles.qrButton} onPress={handleGenerateQR}>
                <Text style={styles.qrButtonText}>Generar QR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.qrButton} onPress={handleReadQR}>
                <Text style={styles.qrButtonText}>Leer QR</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#f2f2f7',
    },
    title: {
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 40,
        textAlign: 'center',
        color: '#1c1c1e',
    },
    qrButton: {
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007aff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 20,
    },
    qrButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});