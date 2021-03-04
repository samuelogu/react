import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Input} from "../hooks/Input";


export default function AddPost ({ modal }) {

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
        console.log(`Selected file - ${image}`);
        resetTitle()
        resetBody()
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
