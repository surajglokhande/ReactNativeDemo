import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const UseCallbackDemo = () => {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(0);

    // Function WITHOUT useCallback - will be recreated on every render
    const normalFunction = () => {
        console.log('Normal function called, count:', count);
        return `Count is ${count}`;
    };

    // Function WITH useCallback - will NOT be recreated unless dependencies change
    const memoizedFunction = useCallback(() => {
        console.log('Memoized function called, count:', count);
        return `Count is ${count}`;
    }, [count]); // Only recreated when count changes

    // This effect runs on every render and shows whether functions are recreated
    useEffect(() => {
        // Create references to both functions
        const normalFunctionRef = normalFunction;
        const memoizedFunctionRef = memoizedFunction;

        console.log('== RENDER HAPPENED ==');

        // Check if functions are the same as on previous render
        console.log('Normal function recreated?',
            normalFunctionRef !== UseCallbackDemo.prevNormalFunction);
        console.log('Memoized function recreated?',
            memoizedFunctionRef !== UseCallbackDemo.prevMemoizedFunction);

        // Store current function references for next comparison
        UseCallbackDemo.prevNormalFunction = normalFunctionRef;
        UseCallbackDemo.prevMemoizedFunction = memoizedFunctionRef;

    }, [normalFunction, memoizedFunction]);

    return (
        <View style={{ padding: 20, marginTop: 55 }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>
                Count: {count} | Other State: {otherState}
            </Text>

            {/* This button updates count, should recreate both functions */}
            <Button
                title="Update Count"
                onPress={() => setCount(c => c + 1)}
            />

            {/* This button only updates otherState, should only recreate normalFunction */}
            <Button
                title="Update Other State"
                onPress={() => setOtherState(o => o + 1)}
                style={{ marginTop: 10 }}
            />

            <Text style={{ marginTop: 20 }}>
                Check the console logs to see which functions were recreated
            </Text>
        </View>
    );
};

// Static properties to store previous function references
UseCallbackDemo.prevNormalFunction = null;
UseCallbackDemo.prevMemoizedFunction = null;

export default UseCallbackDemo;