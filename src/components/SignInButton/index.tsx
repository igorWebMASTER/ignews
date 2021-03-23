import { FaGithub } from 'react-icons/fa';
import { FiX} from 'react-icons/fi';
import styles from './styles.module.scss';

const isUserLoggedIn = 'Igor Ribeiro';

export function SignInButton(){
  return isUserLoggedIn ? (
    <button
    type="button" 
    className={styles.signInButton}
  >
    <FaGithub  color="#04d361"/>
    Igor Ribeiro 
    <FiX  color="#737380" className={styles.closeIcon} />
  </button>
  ) :(
    <button
    type="button" 
    className={styles.signInButton}
  >
    <FaGithub  color="#eba417"/>
    Sign in with Github
  </button>
  );
}