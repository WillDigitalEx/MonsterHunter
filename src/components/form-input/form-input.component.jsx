import { FormFields, InputField, InputFieldLabel } from './form-input.styles';
const FormInput = ({ label, inputOptions }) => (
    <FormFields>
        <InputField  {...inputOptions} />
        {label && (
            <InputFieldLabel 
                shrink={inputOptions.value.length}
                htmlFor={inputOptions.id} 
            >
                {label}
            </InputFieldLabel>
        )}
    </FormFields>
);

export default FormInput;