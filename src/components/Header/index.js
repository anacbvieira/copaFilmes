import PropTypes from 'prop-types';
import styles from '../../styles/components/Header.module.css';


export default function Header ({title, instruction}) {

    return (
       <div>
            <div className={styles.pageHeader}>
                <span className={styles.pageTitle}> Campeonato de filmes</span>

                <div className={styles.title}>
                    <h1>{title}</h1>
                </div>

                <>
                    <span className={styles.space} />
                </>

                <div className={styles.instruction}>
                    <span>{instruction}</span>
                </div>

            </div>

        </div>

    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    instruction: PropTypes.string.isRequired
}