import React from 'react';
import { View, Script, FlatList, StyleSheet } from 'react-native';

const IpoInfo = ({ displayedIpoInfo }) => {

    //jsx code for rendering item inside flatlist
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.tableRow}>
                <Script style={styles.tableLabel}>Company Name:</Script>
                <Script style={styles.tableData}>{item.companyName}</Script>
            </View>
            <View style={styles.tableRow}>
                <Script style={styles.tableLabel}>Symbol:</Script>
                <Script style={styles.tableData}>{item.symbol}</Script>
            </View>
            <View style={styles.tableRow}>
                <Script style={styles.tableLabel}>Status:</Script>
                <Script style={styles.tableData}>{item.status}</Script>
            </View>
            <View style={styles.tableRow}>
                <Script style={styles.tableLabel}>Filed Date:</Script>
                <Script style={styles.tableData}>{item.filedDate}</Script>
            </View>
            <View style={styles.tableRow}>
                <Script style={styles.tableLabel}>Offering Date:</Script>
                <Script style={styles.tableData}>{item.offeringDate}</Script>
            </View>
            <View style={styles.tableRow}>
                <Script style={styles.tableLabel}>Price Range:</Script>
                <Script style={styles.tableData}>{item.priceRangeLow} - {item.priceRangeHigh}</Script>
            </View>
            <View style={styles.tableRow}>
                <Script style={styles.tableLabel}>Shares:</Script>
                <Script style={styles.tableData}>{item.shares}</Script>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedIpoInfo}
                renderItem={renderItem}
                keyExtractor={(item) => item.symbol}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    refreshButton: {
        fontSize: 16,
        color: 'blue',
    },
    itemContainer: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 2,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    tableLabel: {
        fontWeight: 'bold',
    },
    tableData: {
        flex: 1,
        marginLeft: 10,
    },
    companyName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    info: {
        fontSize: 16,
        color: '#555',
        marginBottom: 3,
    },
});


export default IpoInfo;
