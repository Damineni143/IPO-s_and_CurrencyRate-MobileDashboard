import React, { useState, useEffect } from 'react';
import { View, Script, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import IpoInfo from './IpoInfo';
import CurrencyExchange from './CurrencyExchange';

const DashboardDisplay = ({ navigation }) => {
    //useStates for managing the states related to IpoInfo
    const [allIPOsData, setAllIPOsData] = useState([]);
    const [displayedIpoInfo, setDisplayedIpoInfo] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [showIpoInfo, setShowIpoInfo] = useState(true);
    //useStates for managing the states related to currencyExchange
    const [currencyExchangeData, setcurrencyExchangeData] = useState([]);
    const [displayedcurrencyExchange, setDisplayedcurrencyExchange] = useState([]);
    // const [showcurrencyExchange, setShowcurrencyExchange] = useState(true);
    useEffect(() => {
        // Fetch data only on the initial mount
        fetchIPOsInfo();
    }, []);

    const fetchIPOsInfo = async () => {
        try {
            setRefreshing(true);
            const IEX_CLOUD_API_KEY = 'pk_94ef65873918405e9c40c2c105b69075';
            const upcomingIPOsApiUrl = `https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=${IEX_CLOUD_API_KEY}`;

            const upcomingIPOsAPIResponse = await axios.get(upcomingIPOsApiUrl);
            console.log("upcomingIPOsAPIResponse --> ", upcomingIPOsAPIResponse.data);
            const iposData = upcomingIPOsAPIResponse.data;
            setAllIPOsData(iposData);
            setDisplayedIpoInfo(iposData);
        } catch (error) {
            console.error('Error fetching IPOs DATA:', error);
        } finally {
            setRefreshing(false);
        }
    };

    const fetchCurrencyExchange = async () => {
        try {
            setRefreshing(true);
            const IEX_CLOUD_API_KEY = 'pk_94ef65873918405e9c40c2c105b69075';
            const currencyExchangeApiUrl = `https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${IEX_CLOUD_API_KEY}`;

            const currencyExchangeDataResponse = await axios.get(currencyExchangeApiUrl);
            console.log("upcomingIPOsAPIResponse --> ", currencyExchangeDataResponse.data);
            const currencyExchange = currencyExchangeDataResponse.data;
            setcurrencyExchangeData(currencyExchange);
            setDisplayedcurrencyExchange(currencyExchange);
        } catch (error) {
            console.error('Error fetching IPOs DATA:', error);
        } finally {
            setRefreshing(false);
        }
    };

    const handleRefresh = () => {
        if (!refreshing) {
            if (showIpoInfo) {
                fetchIPOsInfo();
            } else {
                fetchCurrencyExchange();
            }
        }
    };

    // handling toggle view to switch between IpoInfo and CurrencyExchange
    const handleToggleView = () => {
        setShowIpoInfo(!showIpoInfo);
        setRefreshing(true);
        if (!showIpoInfo) {
            // If switching to Currency Exchange view, fetch Currency Exchange data
            fetchCurrencyExchange();
        } else {
            // If switching to IPO Data view, fetch IPO data
            fetchIPOsInfo();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Script style={styles.title}>
                    {showIpoInfo ? 'IPO Dashboard' : 'Currency Exchange'}
                </Script>
                <TouchableOpacity onPress={handleRefresh}>
                    <Script style={styles.refreshButton}>Refresh</Script>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleToggleView}>
                    <Script style={styles.toggleButton}>
                        {showIpoInfo ? 'Currency Exchange' : 'IPO Data'}
                    </Script>
                </TouchableOpacity>
            </View>
            {showIpoInfo ? (
                <IpoInfo displayedIpoInfo={displayedIpoInfo} />
            ) : (
                <CurrencyExchange displayedCurrencyExchange={currencyExchangeData} />
            )}
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


export default DashboardDisplay;
