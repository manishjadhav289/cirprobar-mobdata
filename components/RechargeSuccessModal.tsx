import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface RechargeSuccessModalProps {
    visible: boolean;
    onNext: () => void;
}

const RechargeSuccessModal: React.FC<RechargeSuccessModalProps> = ({ visible, onNext }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onNext}
        >
            <View style={styles.overlay}>
                <View style={styles.card}>
                    <Text style={styles.title}>Payment Successful!</Text>

                    <View style={styles.contentRow}>
                        <View style={styles.iconContainer}>
                            <Ionicons name="checkmark" size={24} color="black" />
                        </View>
                        <Text style={styles.message}>
                            Thank You, your payment has been successfully processed.
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={onNext}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        width: '100%',
        maxWidth: 350,
        backgroundColor: '#00E600', // Neon Green to match image
        borderRadius: 16,
        padding: 24,
        alignItems: 'flex-start', // Left align text as per image
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: '800', // Extra bold
        color: '#1a1a1a',
        marginBottom: 20,
        textAlign: 'left',
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center', // Top alignment for icon + text? No, image shows centered relative to each other or top? Looks like Icon is inline or floated.
        // Let's do a flex row.
        marginBottom: 30,
    },
    iconContainer: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 2,
        borderColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
        // Prevents shrinking
        flexShrink: 0,
    },
    message: {
        fontSize: 18,
        color: '#1a1a1a',
        lineHeight: 24,
        flex: 1, // Take remaining space
        flexWrap: 'wrap',
    },
    button: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    }
});

export default RechargeSuccessModal;
