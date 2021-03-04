import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Input} from "../hooks/Input";

const axios = require('axios');

require('dotenv').config()

// const cloudinary = require('cloudinary')



export default function AddPost () {

    const [show, setShow] = useState(false)
    const [image, setImage] = useState(null)
    const [ preview, setPreview ] = useState(null)
    const { value:title, bind:bindTitle, reset:resetTitle } = Input('');
    const { value:body, bind:bindBody, reset:resetBody } = Input('');

    const hideModal = () => setShow(false);
    const showModal = () => setShow(true);

    const selectFile = event => {
        setImage(event.target.files[0])
        setPreview(URL.createObjectURL(event.target.files[0]))
    }

    const postSubmit = e => {
        e.preventDefault()
        const file = document.getElementById('image').value
        let data = new FormData();
        data.append('upload_preset', '<upload_preset>');
        data.append('file', file);
        data.append('cloud_name', '<cloud_name>');
        axios.get(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`, {
            file,
            api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
            timestamp: 1315060076,
            signature: "bfd09f95f331f558cbd1320e67aa8d488770583e",
            upload_preset: 'prisma_react_preset'
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error.message);
            })
        //Upload to cloudinary
        // cloudinary.uploader.upload(file).then(result => {
        //     console.log(result);
        // })
        // resetTitle()
        // resetBody()
    }

    return (
        <>
            <Button variant="dark" onClick={showModal}>
                New post
            </Button>
            <Modal show={show} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New post</Modal.Title>
                </Modal.Header>
                <form onSubmit={postSubmit}>
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input id="title" type="text" {...bindTitle} placeholder="Post title" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input id="image" accept="image/*" onChange={selectFile} type="file" className="form-control"/>
                            { preview && <img src={preview} alt="preview image" style={{height: '100px', width: '100px', imageFit: 'cover', marginTop: '20px' }} /> }
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <textarea id="body" {...bindBody} rows="3" className="form-control" placeholder="Post body" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="dark" type={"submit"}>
                            Add post
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
