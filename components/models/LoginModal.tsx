import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";

const LoginModal = () => {
  const LoginModal = useLoginModal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(() => {
    try {
      setIsLoading(true);



      LoginModal.onClose();
    } catch (e) {
      console.log(e);
    }finally{
      setIsLoading(false);
    }
  },[LoginModal])

  

  return ( 
    <div>

    </div>
   );
}
 
export default LoginModal;