import { useFirebase } from "../contax/UserContax";

const login = () => {
    const { user } = useFirebase()

    return (
        <div>
            Enter
        </div>
    );
}

export default login;