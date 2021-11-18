import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
    return(
        <section className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto, e adicione serviços!</p>

            <ProjectForm btnText="Criar Projeto"/>
        </section>
    );
};

export default NewProject;