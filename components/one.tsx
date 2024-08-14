import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView, SafeAreaView } from "react-native";

export default function One() {
    const [chassisNumber, setChassisNumber] = useState('');
    const [data, setData] = useState([]);
    const [qrGenerated, setQrGenerated] = useState(false);

    const handleSearch = () => {
        // Datos estáticos para mostrar en la lista
        const staticData = [
            { id: '1', label: 'Marca', value: 'Toyota' },
            { id: '2', label: 'Modelo', value: 'Corolla' },
            { id: '3', label: 'Año', value: '2021' },
            { id: '4', label: 'Color', value: 'Rojo' },
        ];
        setData(staticData);
    };

    const handleGenerateQR = () => {
        // Simula la generación de un QR
        setQrGenerated(true);
        console.log('QR generado para:', chassisNumber);
    };

    const handleSave = () => {
        // Simula la acción de guardar
        console.log('Datos guardados');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>Generar QR</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Número de Chasis"
                        placeholderTextColor="#8e8e93"
                        value={chassisNumber}
                        onChangeText={setChassisNumber}
                    />
                    <TouchableOpacity style={styles.qrButton} onPress={handleSearch}>
                        <Text style={styles.qrButtonText}>Buscar</Text>
                    </TouchableOpacity>
                    {data.length > 0 && (
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.dataItem}>
                                    <Text style={styles.dataLabel}>{item.label}:</Text>
                                    <Text style={styles.dataValue}>{item.value}</Text>
                                </View>
                            )}
                        />
                    )}

                    {data.length > 0 && !qrGenerated && (
                        <TouchableOpacity style={styles.qrButton} onPress={handleGenerateQR}>
                            <Text style={styles.qrButtonText}>Generar QR</Text>
                        </TouchableOpacity>
                    )}

                    {qrGenerated && (
                        <TouchableOpacity style={styles.qrButton} onPress={handleSave}>
                            <Text style={styles.qrButtonText}>Guardar</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </SafeAreaView>

        </ScrollView>
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
    dataItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomColor: '#d1d1d6',
        borderBottomWidth: 1,
    },
    dataLabel: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1c1c1e',
    },
    dataValue: {
        fontSize: 16,
        color: '#8e8e93',
    },
});