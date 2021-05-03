export const search = (req, res) => {
    
    const {quote} = req.body
    try {
        
        console.log(quote)
    } catch (error) {
        res.status(500).json({ message: "Something went wrong"});
    }
}