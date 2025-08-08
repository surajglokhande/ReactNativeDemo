import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const CommonTextInput = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = 'default',
    autoCapitalize = 'none',
    label,
    error,
    leftIcon,
    rightIcon,
    showPasswordToggle = false,
    style,
    ...props
}) => {
    const [isSecure, setIsSecure] = useState(secureTextEntry);

    const toggleSecureEntry = () => {
        setIsSecure(!isSecure);
    };

    return (
        <View style={[styles.container, style]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={[styles.inputContainer, error && styles.errorBorder]}>
                {leftIcon && (
                    <View style={styles.leftIconContainer}>
                        {leftIcon}
                    </View>
                )}

                <TextInput
                    style={[styles.textInput, leftIcon && styles.textInputWithLeftIcon]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecure}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    placeholderTextColor={"#999"}
                    {...props}
                />

                {showPasswordToggle && (
                    <TouchableOpacity
                        style={styles.rightIconContainer}
                        onPress={toggleSecureEntry}
                    >
                    </TouchableOpacity>
                )}

                {rightIcon && !showPasswordToggle && (
                    <View style={styles.rightIconContainer}>
                        {rightIcon}
                    </View>
                )}
            </View>

            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        height: 50,
    },
    errorBorder: {
        borderColor: '#ff4444',
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        paddingVertical: 0,
    },
    textInputWithLeftIcon: {
        marginLeft: 8,
    },
    leftIconContainer: {
        marginRight: 8,
    },
    rightIconContainer: {
        marginLeft: 8,
        padding: 4,
    },
    errorText: {
        fontSize: 12,
        color: '#ff4444',
        marginTop: 4,
    },
});

export default CommonTextInput;
