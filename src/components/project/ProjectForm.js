import { useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

{/* import { useState, useEffect } from 'react'; */}

function ProjectForm({handleSubmit, projectData, btnText}) {

    const options = [
        {"id": 1, "name": "Infra"},
        {"id": 2, "name": "Desenvolvimento"},
        {"id": 3, "name": "Design"},
        {"id": 4, "name": "Planejamento"}
    ];
    const [project, setProject] = useState(projectData || {});
    {/*
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET", headers: {'Content-Type': 'application/json'}
        }).then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.log(error));
        }
    , [])
    */}
    const submit = (e) => {
        e.preventDefault();
        //console.log(project);
        handleSubmit(project);
    }
    function handleChange (e) {
        setProject({ ...project, [e.target.name]: e.target.value});        
    }
    function handleCategory (e) {        
        setProject({ ...project, category: {
           id: e.target.value,           
           name: e.target.options[e.target.selectedIndex].text,
            },
        });                
    }
    return(
        <div>
            <p>Form New Project:</p>
            <form className={styles.form} onSubmit={submit}>
                <Input type="text" name="nome" text="Nome do Projeto:"
                 placeholder="Insira o Nome do Projeto" handleOnChange={handleChange}/>
                
                <Input type="number" name="budget" 
                placeholder="Insira o Valor do Orçamento" handleOnChange={handleChange}/>
                
                <Select name="category" text="Selecione a Categoria" 
                options={options} handleOnChange={handleCategory}
                value={ project.category ? project.category.id : ''}/>
                
                <SubmitButton name="submit" text={btnText}/>
            </form>
        </div>
    );
};

export default ProjectForm;