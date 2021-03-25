import { signIn, useSession } from 'next-auth/client';
import { api } from '../../services/api';
import styles from './style.module.scss';

interface SubscribeButtonProps{
  priceId: string;
}


export function  SubscribeButton({priceId}: SubscribeButtonProps){
  const [session] = useSession();

  async function handleSubscriber(){
    if(!session){
      signIn('github');
      return;
    }

    try{
      const response = await api.post('/subscribe')
    }
  }

  return (
    <button 
        type="button" 
        className={styles.subscribeButton}
        onClick={handleSubscriber}
     >
      Subscribe now
    </button>
  )
}