import { useState } from 'react';
import styles from './Imgs.module.css'
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';

const images = [image1, image2, image3];

export default function Imgs(){
    const images = [
        image1,image2,image3,image4,image5
    ]
    const [Image, setImage] = useState(0);

    const Next = () => {
        setImage((Image+1)%images.length)
    }
    const Previous = () => {
        setImage(((Image-1)+ images.length)% images.length)
    }
    return(
        <>
        <h1 className={styles.mainHeading}>Image slider </h1>
        <div className={styles.mainImg}>
                <img src={images[Image]} alt="image" />
            </div>
        <div className={styles.main}>
            <div className="right">
                <button onClick={Previous}>Previous</button>
            </div>
            <div className="left">
                <button onClick={Next}>Next</button>
            </div>
        </div>
        </>
    );
}