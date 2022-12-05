import React from "react";
import { BookItem } from "./bookItem";

export class Books extends React.Component {
    render() {
        return this.props.books.map((book) => { // Passed each component a book using props
            return <BookItem book={book} key={book._id} ReloadData = {this.props.ReloadData}></BookItem> // Passed each component an individual book & Key creates a unique identifier to avoid internet loop
        }

        );
    }
}