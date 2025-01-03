import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import CircularProgress from '@mui/material/CircularProgress';

import '../../css/imgBookDetail.css';
import { getAllImageOfTheBooks, getFirstImgBook } from '../../api/ImageBookAPI';
import { slugify } from '../../models/Converts';
import BookImageModel from '../../models/BookImageModel';



interface BookProps {
    bookId: number;
}

const ImgBookDetail: React.FC<BookProps> = (props) => {
    // const [isFollowed, setIsFollowed] = useState(false);

    const bookId:number = props.bookId;
    
    const [listImgBook, setListImgBook] = useState<BookImageModel[]>([]);
    const [loadingDataImg, setLoadingDataImg] = useState(true);
    const [errorImg, setErrorImg] = useState(null);
    const [imgSelecting, setImgSelecting] = useState<BookImageModel | null>(null);

    const imageSelect = (image: BookImageModel) => {
        setImgSelecting(image);
    }

    // Lấy danh sách ảnh
    useEffect(() => {
        getAllImageOfTheBooks(bookId)
        .then(lists => {
            // consol e.log("Ảnh đã tải lên:", imageData);
            setListImgBook(lists);
            if(lists.length > 0) {
                setImgSelecting(lists[0])
            }
            setLoadingDataImg(false);
        })
        .catch(errorImg => {
            // console.error("Lỗi khi lấy ảnh:", errorImg);
            setLoadingDataImg(false);
            setErrorImg(errorImg.message);
        })
    }, []);

    if(loadingDataImg) {
        return (
            <div id='loadingBD'>
                <CircularProgress
                    color="inherit"
                    id='loadingBD-img'
                />
            </div>
        )
      }
    
    if(errorImg) {
        <div id='errorImg'>
          <p id='errorImg-text'>
            Gặp lỗi: <b>{errorImg}</b>
          </p>
        </div>
    }

    return (
        <div id='bdBlock1'>
            <div id='bdBlock1_avt-big'>
                {imgSelecting && imgSelecting.dataImage && (
                    <img
                        src={imgSelecting.dataImage}
                        alt='ảnh bìa sách'
                        id='bdBlock1_avt-img'
                    />
                )}
                
            </div>
            <div id='bdBlock1_img-small'>
                <div className='bdBlock1_img-small'>
                    {/* <Carousel showArrows={true} showIndicators={true}> */}
                        {
                            listImgBook.map((image, index) => (
                                <div
                                    // className='bdImg_block'
                                    key={index}
                                    onClick={() => imageSelect(image)}
                                    className={`bdImg_block ${imgSelecting === image ? 'selected' : ''}`}
                                >
                                    <div className='bdImg_block-img'>
                                        {/* <img 
                                            src={image.dataImage}
                                            alt={`${image.imageName}`}
                                            className='bdImg-img'
                                            // onClick={() => imageSelect(image)}
                                        /> */}
                                        {(image.dataImage) && 
                                            (
                                                <img 
                                                    src={image.dataImage}
                                                    alt={`${image.imageName}`}
                                                    className='bdImg-img'
                                                    // onClick={() => imageSelect(image)}
                                                />   
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    {/* </Carousel> */}
                </div>
            </div>
        </div>
        
    )
}

export default ImgBookDetail;