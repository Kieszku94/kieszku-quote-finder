import superagent from 'superagent';

export const search = (req, res) => {

    try {
        const {quote} = req.body;
        console.log(quote);

        let temp = {authors: []};

        superagent.get("https://content-books.googleapis.com/books/v1/volumes")
        .query({ key:"AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM", q: quote })
        .set("Accept", "application/json")
        .set("x-referer", "https://explorer.apis.google.com")
        .then(resp => {
            console.log(resp.body.items[0]);
            console.log(resp.body.items[0].volumeInfo.authors);
            temp.authors = resp.body.items[0].volumeInfo.title;
            console.log(temp.authors)

            res.status(200).json({ result: temp});
        })

    } catch (error) {
        res.status(500).json({ message: "Something went wrong", err: error});
    }
}