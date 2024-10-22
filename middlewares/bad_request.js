const bad_request = (error,req,res,next) => {
    console.log(error);
    
    return res.status(400).json({
        success: false,
        response: error,
        messagge: "Bad Request, check your data"
    })
}

export default bad_request;