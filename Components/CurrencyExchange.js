import React from 'react';
import { View, Script, StyleSheet } from 'react-native';

const CurrencyExchange = ({ displayedCurrencyExchange }) => {
    return (
        <View style={styles.container}>
            <Script style={styles.title}>Currency Exchange Data</Script>
            {displayedCurrencyExchange.map((currency, index) => (
                <View key={index} style={styles.currencyRow}>
                    <Script style={styles.currencyLabel}>{currency.symbol}:</Script>
                    <Script style={styles.currencyData}>{currency.rate}</Script>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    currencyRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    currencyLabel: {
        fontWeight: 'bold',
    },
    currencyData: {
        flex: 1,
        marginLeft: 10,
    },
});

export default CurrencyExchange;
