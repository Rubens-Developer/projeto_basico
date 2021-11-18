import styles from './Select.module.css';

function Select ({name, text, options, hanldeOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select id={name} name={name}>
                <option>Selecione uma Opção</option>                
            </select>            
        </div>
    )
}

export default Select;