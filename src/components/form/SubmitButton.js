import styles from './SubmitButton.module.css';

function SubmitButton ({name, text}){
    return(
        <div>
            <button id={name} name={name} className={styles.btn}>{text}</button>            
        </div>
    )
}

export default SubmitButton;