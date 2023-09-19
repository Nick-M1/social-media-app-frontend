import { useState, ChangeEvent, ChangeEventHandler } from "react";

type FieldsType = {
    [key: string | symbol]: string;
}

export function useFormFields(initialState: FieldsType): [FieldsType, ChangeEventHandler] {
    const [fields, setValues] = useState(initialState);

    return [
        fields,
        (event: ChangeEvent<HTMLInputElement>) =>
            setValues({
                ...fields,
                [event.target.id]: event.target.value,
            }),
    ];
}