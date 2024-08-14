import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput,StyleSheet } from "react-native";

export default function Two() {
    const [chassisNumber, setChassisNumber] = useState('');

    const handleCaptureQR = () => {
        // Lógica para activar la cámara y capturar el QR
        console.log('Capturar QR');
    };

    const handleSave = () => {
        // Lógica para guardar el número de chasis
        console.log('Chasis:', chassisNumber);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Leer QR</Text>

            <TouchableOpacity style={styles.qrButton} onPress={handleCaptureQR}>
                <Text style={styles.qrButtonText}>Capturar QR</Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Número de Chasis"
                placeholderTextColor="#8e8e93"
                value={chassisNumber}
                onChangeText={setChassisNumber}
            />

            <TouchableOpacity style={styles.qrButton} onPress={handleSave}>
                <Text style={styles.qrButtonText}>Guardar</Text>
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
    input: {
        height: 50,
        borderColor: '#d1d1d6',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        fontSize: 16,
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
