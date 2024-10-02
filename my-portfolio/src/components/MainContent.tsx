import styles from '../style/MainContent.module.css';
import profilePic from '../assets/profile.png'; // Asegúrate de ajustar el path de la imagen

const MainContent = () => {
    return (
      <main className={styles.main}>
        <section className={styles.left}>
          <div className={styles.badge}>JUNIOR</div>
          <h1 className={styles.title}>FULLSTACK DEVELOPER</h1>
          <div className={styles.textContainer}>
            <p className={styles.description}>
              
            </p>
            <p className={styles.goal}>
             
            </p>
          </div>
        </section>
        <section className={styles.right}>
          <img src={profilePic} alt="Bohdan's Profile" className={styles.image}/>
        </section>
      </main>
    );
  };
  
  export default MainContent;