import styles from './Select.module.css';

function Select ({name, text, options, handleOnChange, value}){

    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select id={name} name={name} onChange={handleOnChange} defaultValue={value || ''}>
                <option>Selecione</option>
                { options.map((option) => {
                   return <option value={option.id} key={option.id}>{option.name}</option>
                  })
                }                
            </select>                 
        </div>
    )
}

export default Select;
