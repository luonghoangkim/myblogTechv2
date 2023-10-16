import { toast } from "react-toastify"

const success = (mes = "Success") => {
    toast.success(mes)
}

const warning = (mes = "Warring") => {
    toast.warning(mes)
}

const error = (mes = "Error") => {
    toast.error(mes)
}

export {error, warning, success}