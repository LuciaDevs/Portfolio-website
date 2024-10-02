import { Link } from 'react-scroll';
import styles from '../style/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>LUCIA CRISTALDO</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link
              to="story"
              smooth={true}
              duration={500}
              className={styles.navItem}
              activeClass={styles.active}
            >
              STORY
            </Link>
          </li>
          <li>
            <Link
              to="workflow"
              smooth={true}
              duration={500}
              className={styles.navItem}
              activeClass={styles.active}
            >
              WORKFLOW
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={styles.navItem}
              activeClass={styles.active}
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className={styles.navItem}
              activeClass={styles.active}
            >
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link
              to="contacts"
              smooth={true}
              duration={500}
              className={styles.navItem}
              activeClass={styles.active}
            >
              CONTACTS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
