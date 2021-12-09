import styles from './ProjectCard.module.css';
import {BsPencil, BsFillTrashFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

function ProjectCard ({project}){
    return (
        <div className={styles.project_card}>
            <h4>{project.name}</h4>
            <p><span>Orçamento:</span>R$ {project.budget}</p>
            <p className={styles.category_text}><span className={`${styles[project.category.toLowerCase()]}`}></span> {project.category}</p>
            <div className={styles.project_card_actions}>
                <Link to="/">
                    <BsPencil /> Editar
                </Link>
                <button> <BsFillTrashFill /> Exluir</button>
            </div>
        </div>
    )
}

export default ProjectCard;