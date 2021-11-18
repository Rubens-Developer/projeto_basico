import styles from './Input.module.css';

function Input ({type, name, text, placeholder, hanldeOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input id={name} 
                name={name}
                type={type} 
                placeholder={placeholder} 
                onChange={hanldeOnChange}
            />            
        </div>
    )
}

export default Input;