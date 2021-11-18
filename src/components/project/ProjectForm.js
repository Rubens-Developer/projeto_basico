import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({btnText}) {
    return(
        <div>
            <p>Form New Project:</p>
            <form className={styles.form}>
                <Input type="text" name="nome" text="Nome do Projeto:" placeholder="Insira o Nome do Projeto" />
                
                <Input type="number" name="budget" placeholder="Insira o Valor do Orçamento" />
                
                <Select name="category_id" text="Selecione a Categoria" />
                
                <SubmitButton name="submit" text={btnText}/>
            </form>
        </div>
    );
};

export default ProjectForm;