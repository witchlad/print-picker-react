import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../components/Image"

function Photos() {
    const {photos} = useContext(Context)
    
    const allPhotos = photos.map((img,i) => (
        <Image key={img.id} img={img} />
    ))

    return (
        <main className="photos">
            {allPhotos}
        </main>
    )
}

export default Photos