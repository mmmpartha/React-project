import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Table() {
    const [state, setState] = useState()
    useEffect(() => {
        axios.get(('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed'))
            .then((response) => setState(response.data))
            .catch((err) => console.log(err))
    })
    return (
        <>
            <table border={2}>
                <thead>
                    <tr>
                        <th>author</th>
                        <th>canonical_url</th>
                        <th>date</th>
                        <th>featured_media</th>
                        <th>id</th>
                        <th>link</th>
                        <th>shortlink</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state?.map((el,index) =>
                            <>
                                <tr key={index}>
                                    <td>{el.author}</td>
                                    <Link to={el.canonical_url}><td>{el.canonical_url}</td></Link>
                                    <td>{el.date}</td>
                                    <td>{el.featured_media}</td>
                                    <td>{el.id}</td>
                                    <td>{el.link}</td>
                                    <td>{el.shortlink}</td>
                                </tr>
                            </>
                        )}
                </tbody>
            </table>

        </>
    )
}