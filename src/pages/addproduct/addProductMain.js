import React, { useState } from 'react'
import '../../../static/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addProduct } from '../../../static/prosperoDB'

/**
 * Main component page for adding a product to the database. Implements a form with
 * a file upload, and submits the form data to the backend for processing. The backend
 * returns a boolean value that determines whether or not the page is refreshed (on success)
 */
export default function AddProductMain() {
    /* File name string for the currently uploaded file */
    const [filename, setFilename] = useState('somepicture.jpg')
    /* Changes the file name string when a new file is uploaded */
    const changeHandler = (e) => {
        setFilename(e.target.files[0].name)
    }

    return (
        <main className="p-3 main-article">
            <form className="mb-2 container" onSubmit={submit}>
                <div className="container add-product box">
                    <div className="container box add-product-title">
                        <h1 className="title">
                            ADD A NEW PRODUCT
                        </h1>
                    </div>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input" name="title" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Price</label>
                        <div className="control">
                            <input className="input" type="number" placeholder="Text input" name="price" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Rating</label>
                        <div className="select">
                            <select name="rating">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Description</label>
                        <div className="control">
                            <input className="input" type="textarea" placeholder="Text input" name="desc" />
                        </div>
                    </div>
                    {/* File Upload */}
                    <div className="file has-name">
                        <label className="file-label">
                            <input className="file-input" type="file" name="image" onChange={changeHandler} />
                            <span className="file-cta">
                                <span className="file-icon">
                                    <FontAwesomeIcon className={'pr-2'} icon={'upload'} size={'lg'} />
                                </span>
                                <span className="file-label">
                                    Choose a file…
                                </span>
                            </span>
                            <span className="file-name">
                                {filename}
                            </span>
                        </label>
                    </div> {/* End File Upload */}
                    <button className="mt-3 button submit" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </main> 
    )
}

/**
 * Functionality for the form submission. Creates an object from the current form data, 
 * iterates through that data attaching it to a form, validating that the data exists,
 * and then uploads the form data to the backend. Expects a boolean response to reload
 * the page on success.
 */
async function submit(e) {
    e.preventDefault()

    const obj = {
        title: e.target.title.value,
        price: e.target.price.value,
        rating: e.target.rating.value,
        img: e.target.image.files[0],
        desc: e.target.desc.value
    }
    let formData = new FormData()
    for(let k in obj) {
        // If missing a value, the form is incomplete
        if (!obj[k]) { return }
        formData.append(k, obj[k])
    }
    if (await addProduct(formData) === true) { window.location.reload() }
}