const error_handler = (error,req,res,next) => {
    console.log(error);
    return res.status(500).json({
        success: false,
        response: error,
        messagge: "Error 500 - Check that all properties are there"
    })
}
export default error_handler