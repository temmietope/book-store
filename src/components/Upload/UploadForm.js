import React, { useState } from "react"
import { withAuthentication } from "../Session"
import { withRouter } from "react-router-dom"
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';

const UploadFormBase = (props) => {
    const bookDetails = {
        title: "",
        author: "",
        genre: "",
        summary: "",
        numberOfCopies: 1,
    }
    const [newBook, setNewBook] = useState({ ...bookDetails })


    const onChange = event => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value })
    };

    const uploadBook = (e) => {
        e.preventDefault();
        const newBookKey = props.firebase.books().push().key;

        const updates = {};
        updates['/books/' + newBookKey] = { ...newBook, uid: props.authUser.uid };

        return props.firebase.db.ref().update(updates);

    }

    return (
        <>
            <p>Upload For Free!</p>
            <form onSubmit={(e) => { uploadBook(e) }}>
                <label>
                    <span>Book Title</span>
                    <input type="text" name="title" placeholder="Title of Book" onChange={(e) => { onChange(e) }} />
                </label>
                <label>
                    <span>Author</span>
                    <input type="text" name="author" placeholder="Author of Book" onChange={(e) => { onChange(e) }} />
                </label>
                <label>
                    <span>Genre</span>
                    <select name="genre" onChange={(e) => { onChange(e) }}>
                        <option value="action">Action</option>
                        <option value="classics">Classics</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="documentaries">Documentaries</option>
                        <option value="drama">Drama</option>
                        <option value="horror">Horror</option>
                        <option value="independent">Independent</option>
                        <option value="Kids">Kids</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="sports">Sports</option>
                    </select>
                </label>
                <label>
                    <span>Book Summary</span>
                    <input type="text" name="summary" placeholder="Summary of Book" onChange={(e) => { onChange(e) }} />
                </label>
                <label>
                    <span>Number of Copies available for sale</span>
                    <input type="number" name="numberOfCopies" placeholder="1" onChange={(e) => { onChange(e) }} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}


const UploadForm = compose(
    withRouter,
    withFirebase,
    withAuthentication
)(UploadFormBase)

export default UploadForm