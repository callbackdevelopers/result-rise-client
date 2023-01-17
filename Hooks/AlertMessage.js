import Swal from "sweetalert2";

const AlertMessage = () => {
    const successMessage = message => {
        Swal.fire({
            icon: 'success', title: `${message}`, showConfirmButton: false, timer: 1500
        })
    }
    const errorMessage = reason => {
        Swal.fire({
            icon: 'error', title: 'Oops...',
            text: `Something went wrong! ${reason}`
        })
    };
    return { successMessage, errorMessage }
};

export default AlertMessage;