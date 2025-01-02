import { Description } from '@mui/icons-material';
import React, { FormEvent, useState } from 'react';

import '../../css/bookForm.css';
import RequireAdmin from './RequireAdmin';

const BookForm: React.FC = () => {
    
    const [books, setBooks] = useState({
        bookId: 0,
        bookName: '',
        description: '',
        price: 0,
        listPrice: 0,
        quantity: 0,
        // image: '',        
    });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const token = localStorage.getItem('token');

        fetch('http://localhost:8080/sach', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(books)
        })
        .then((response) => {
            if (response.ok) {
                alert('Thêm sách thành công!');
                setBooks({
                    bookId: 0,
                    bookName: '',
                    description: '',
                    price: 0,
                    listPrice: 0,
                    quantity: 0,
                });
            } else {
                return response.json().then((data) => {
                    console.error('Chi tiết lỗi:', data);
                    alert(`Thêm sách không thành công: ${data.message || 'Lỗi không xác định'}`);
                });
            }
        })
        .catch((error) => {
            console.error('Lỗi kết nối:', error);
            alert('Không thể kết nối đến server!');
        });
    }

    return (
        <form onSubmit={handleSubmit} id='bookForm'>
            <input
                type="hidden"
                id='bookId'
                value={books.bookId}
            />
            <label htmlFor="bookName">Tên sách</label>
            <input
                type="text"
                id='bookName'
                value={books.bookName}
                onChange={(e) => setBooks({...books, bookName: e.target.value})}
                required
            />
            <label htmlFor="description">Mô tả</label>
            <input
                type="text"
                id='description'
                value={books.description}
                onChange={(e) => setBooks({...books, description: e.target.value})}
                required
            />
            <label htmlFor="price">Giá bán</label>
            <input
                type="number"
                value={books.price}
                onChange={(e) => setBooks({...books, price: parseFloat(e.target.value)})}
            />
            <label htmlFor="price">Giá niêm yết</label>
            <input
                type="number"
                value={books.listPrice}
                onChange={(e) => setBooks({...books, listPrice: parseFloat(e.target.value)})}
                required
            />
            <label htmlFor="quantity">Số lượng</label>
            <input
                type="number"
                value={books.quantity}
                onChange={(e) => setBooks({...books, quantity: parseInt(e.target.value)})}
                required
            />
            <button type='submit'>Thêm sách</button>
        </form>
    )
}

const BookFormForAdmin = RequireAdmin(BookForm);
export default BookForm;