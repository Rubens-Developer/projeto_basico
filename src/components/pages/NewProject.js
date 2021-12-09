import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';
import { useNavigate } from 'react-router';

function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {
        //initialize cost and services
        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((res) => res.json())
          .then((data) => {
            //redirect
            navigate('/projects', {message: 'Projeto Criado com Sucesso!'}, {type: "success"});            
          }).catch((err) => {              
           // navigate('/projects', {message: 'Erro ao Tentar Criar Projeto!'}, {tpe: "error"});
           navigate('/projects', {state: {msg: 'Erro ao Tentar Criar Projeto!', type: 'error'}});
          });          
    }

    return(
        <section className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto, e adicione serviços!</p>

            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </section>
    );
};

export default NewProject;