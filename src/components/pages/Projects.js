import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import styles from "./Project.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";

function Projects () {
    
    const [projects, setProjects] = useState([]);

    const location = useLocation();
    let msg = '';
    let type = '';

    if(location.state){
        msg = location.state.msg;
        type = location.state.type;
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json)
            .then((data) => {
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, []);

    return(
        <div  className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Projects</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>            
            { msg && <Message msg={msg} type={type} /> }

            <Container customClass="start">
                {
                    projects.length > 0 &&
                        projects.map((project) => {
                            <ProjectCard project={project} />
                        })
                }
            </Container>
        </div>
    );
};

export default Projects;