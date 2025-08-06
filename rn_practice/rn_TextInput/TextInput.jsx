import { TextInput } from "react-native";

const CustomInput = (props) => {
    return (
        <TextInput
            style={props.style}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            onChange={props.setDataBack(value)}>
        </TextInput>
    )
}

export default CustomInput;

