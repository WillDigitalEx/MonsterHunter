import { FormField, InputField, InputFieldLabel } from './form-input.styles';
const FormInput = ({ label, inputOptions }) => (
    <FormField>
        <InputField  {...inputOptions} />
        {label && (
            <InputFieldLabel 
                htmlFor={inputOptions.id} 
                className={`${inputOptions.value.length ? 'shrink ' : ''}form-input-label`}>
                {label}
            </InputFieldLabel>
        )}
    </FormField>
);

export default FormInput;