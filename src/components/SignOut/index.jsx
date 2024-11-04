import { useSignOut } from 'react-firebase-hooks/auth';

import { auth } from '../../firebase/firebaseConnect';
import { Button } from './styles';

export function SignOut() {
  const [signOut, loading, error] = useSignOut(auth);

  return (
    <Button
      type="button"
      onClick={async () => {
        await signOut();
      }}
    >
      Deslogar
    </Button>
  );
}
