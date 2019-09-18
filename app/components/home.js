import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, View, Text, ActivityIndicator} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios'; //Only import if using api

import {addData} from "../actions";
import Data from "../instructions";

export default function Home(props) {
    const dispatch = useDispatch();

    //1 - DECLARE VARIABLES
    const [isFetching, setIsFetching] = useState(false);

    //Access Redux Store State
    const dataReducer = useSelector((state) => state.dataReducer);
    const { data } = dataReducer;

    //==================================================================================================

    //2 - MAIN CODE BEGINS HERE
    useEffect(() => getData(), []);

    //==================================================================================================

    //3 - GET FLATLIST DATA
    const getData = () => {
        setIsFetching(true);

        //OPTION 1 - LOCAL DATA using instructions.json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            const data  = Data.instructions;
            dispatch(addData(data));
            setIsFetching(false);
        }, 2000);

        //OPTION 2 - API CALL
        // let url = "https://my-json-server.typicode.com/mesandigital/demo/instructions";
        // axios.get(url)
        //     .then(res => res.data)
        //     .then((data) => dispatch(addData(data)))
        //     .catch(error => alert(error.message))
        //     .finally(() => setIsFetching(false));
    };

    //==================================================================================================

    //4 - RENDER FLATLIST ITEM
    const renderItem = ({item, index}) => {
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {(parseInt(index) + 1)}{". "}{item.title}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
        )
    };

    //==================================================================================================

    //5 - RENDER
    if (isFetching) {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator animating={true}/>
            </View>
        );
    } else{
        return (
            <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `flat_${index}`}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    }
});
