import React from 'react';
import NumberFormat from 'react-number-format';

const InputNumber = (props) => {

    if (props.type === "Puntos"){
        return (
            <NumberFormat
                value={props.value}
                isAllowed={() => {
                    return props.allowed
                }}
                onValueChange={(values) => {
                    if(!props.isText){
                        const { value } = values;
                        props.setValue(value);
                    }
                    return;
                }}
                suffix=""
                displayType="input"
                type="text"
                thousandSeparator={false}
                allowNegative={false}
                decimalScale={0}
                placeholder="0 Puntos"
            />
        )
    }

    return (
        <NumberFormat
            value={props.value}
            isAllowed={() => {
                return props.allowed
            }}
            onValueChange={(values) => {
                if(!props.isText){
                    const { value } = values;
                    props.setValue(value);
                }
                return;
            }}
            suffix="cm"
            displayType="input"
            type="text"
            thousandSeparator={false}
            allowNegative={false}
            decimalScale={2}
            placeholder="0.00 cm"
        />
    )
}

export default InputNumber

