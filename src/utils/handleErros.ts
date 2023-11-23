const handleError = (error: any): string => {
    const defaultMessage: string = "there is an error in your request please try again";

    if (typeof error === "object") {
            if (error.title !== undefined) {
                    return error.title + ". " + " Mensage: " + error.message
            }
    }
    return defaultMessage;
}
export default handleError;