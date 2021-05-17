import superagent from 'superagent';

export const search = (req, res) => {

    try {
        const {quote} = req.body;
        console.log(quote);

        let bookResult = {};

        superagent.get("https://content-books.googleapis.com/books/v1/volumes")
        .query({ key:"AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM", q: quote })
        .set("Accept", "application/json")
        .set("x-referer", "https://explorer.apis.google.com")
        .then(resp => {
            console.log(resp.body.items[0]);
            console.log(resp.body.items[0].volumeInfo.authors);
            
            bookResult.title = resp.body.items[0].volumeInfo.title;
            bookResult.subtitle = resp.body.items[0].volumeInfo.subtitle;
            bookResult.authors = resp.body.items[0].volumeInfo.authors;
            bookResult.thumbnail = resp.body.items[0].volumeInfo.imageLinks.thumbnail;
            
            console.log(bookResult)

            res.status(200).json({ result: bookResult});
        })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong", err: error});
    }
}