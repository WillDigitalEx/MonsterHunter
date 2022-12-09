import './form-input.styles.scss';
const FormInput = ({ label, inputOptions }) => (
    <div className="formField">
        <input className="form-input" {...inputOptions} />
        {label && (
            <label 
                htmlFor={inputOptions.id} 
                className={`${inputOptions.value.length ? 'shrink ' : ''}form-input-label`}>
                {label}
            </label>
        )}
    </div>
);

export default FormInput;