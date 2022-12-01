import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function TestForm() {
    const [images, setImages] = useState([])
    const [preview, setPreview] = useState([]);
    console.log(images);
    console.log(preview)
    const handleImage = (e) => {
       setImages(prev => {
        return [...prev, e.target.files[0]]
       });

    }

    useEffect(() => {
        if(images.length > 0){
            const reader = new FileReader();

            reader.onloadend = (e) => {
                setPreview(prev => {
                    return [...prev, e.target.result]
                })
            }

            reader.readAsDataURL(images[images.length - 1]);
        }
    }, [images])

  return (
    <>
        <Form className='w-25'>
            <Form.Group>
                <Form.Label>
                    Images:
                </Form.Label>

                <Form.Control onChange={handleImage} type='file' name="images" />
                <Form.Control onChange={handleImage} type='file' name="images" />
                <Form.Control onChange={handleImage} type='file' name="images" />
            </Form.Group>
        </Form>

        {preview.length > 0 && preview.map(item => {
            return (
                <>
                    <img src={item} alt="file img" />
                </>
            )
        })}
    </>
  )
}
