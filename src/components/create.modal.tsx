'use client'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

interface IProps {
    showModalCreate: boolean;
    setShowModalCreate: (v: boolean) => void;
}

function CreateModal(props: IProps) {
    const { showModalCreate, setShowModalCreate } = props;
    const [coverImage, setCoverImage] = useState<File | null>(null);
    const [contentImage, setContentImage] = useState<File | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [title, setTitle] = useState<string>("")
    const [summary, setSummary] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [content, setContent] = useState<string>("")

    const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCoverImage(e.target.files[0]);
        }
    };

    const handleContentImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setContentImage(e.target.files[0]);
        }
    };

    const handleSubmit = () => {
        // TODO: Handle form submission with coverImage and contentImage
        console.log(">>>>> check data : ", selectedLocation , title, summary, author , content, coverImage ,contentImage)
       
    };
    const handleClose = () => { 
        setSelectedLocation("");
        setTitle("");
        setSummary("");
        setAuthor("");
        setContent("");
        setShowModalCreate(false)
    }

    return (
        <>
            <Modal
                show={showModalCreate}
                onHide={() => handleClose()}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Bạn đăng bài viết về? </Form.Label>
                        <Form.Select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}>
                            <option value="">-- Chọn nơi lưu --</option>
                            <option value="Tech news">Tech News</option>
                            <option value="Công nghệ tương lai">Công nghệ tương lai</option>
                            <option value="Hướng dẫn và thủ thuật">Hướng dẫn và thủ thuật</option>
                        </Form.Select>
                    </Form.Group>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Tiêu đề</Form.Label>
                            <Form.Control 
                            type="Title" 
                            placeholder="Thêm tiêu đề"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Tóm tắt</Form.Label>
                            <Form.Control
                             type="Summary"
                              placeholder="Tóm tắt "
                              value={summary}
                            onChange={(e) => setSummary(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Tác giả</Form.Label>
                            <Form.Control 
                            type="Author" 
                            placeholder="Tác giả ... "
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Nội dung bài viết</Form.Label>
                            <Form.Control 
                            as="textarea" 
                            rows={3} 
                            value={content}
                            onChange={(e) => setContent(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="coverImage" className="mb-3">
                            <Form.Label>Ảnh bìa</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleCoverImageChange} 
                            />
                        </Form.Group>
                        <Form.Group controlId="contentImage" className="mb-3">
                            <Form.Label>Ảnh trong bài viết</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleContentImageChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModal;
