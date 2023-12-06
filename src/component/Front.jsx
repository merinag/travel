import { useEffect, useState } from "react"
import Search from "./search"
import axios from "axios"

const Headers = (props) => {
    const [query, setquery] = useState('ethiopia')
    const [amount, setAmount] = useState('8')
    const inputNumber = e => {
        setAmount(e.target.value)
    }
    const handleKeyDown = (event) => {
        if (event.key === 'keyEnter') {
            // 👇 Get input value
            setAmount(event.target.value);
            console.log('merina');
        }
    };
    const inputHandler = e => {
        setquery(e)
        props.setIsLoadidng(true)
        console.log(e);
    }
    useEffect(() => {

        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=fe7eb7e87f71f0712b30d5cf8b2358e2&tags=${query}&per_page=${amount}&format=json&nojsoncallback=1`
        ).then(a => {
            console.log('+++++++++++++++++++++++++++++++++++++++++');
            if (a.data && a.data.photos && a.data.photos.photo) {
                props.setphotos(a.data.photos.photo)
                console.log(a.data.photos.photo);

            }
            props.setIsLoadidng(false)
        })

    }, [query, setquery, amount, setAmount])

    return (
        <div className="header-container">
            <h1>Snap Shots</h1>
            <div>
                <Search inputhandler={inputHandler} />
            </div>
            <label htmlFor="number"><h2>Enter No.of pic </h2></label>
            <input className="inputs input2" placeholder="enter amount"
                onKeyDown={handleKeyDown}
                type="number"
                onChange={inputNumber}
                value={amount} />
            <div className="btm-btn">
                <button onClick={inputHandler}>ethiopia</button>
                <button onClick={e => { inputHandler('afar') }}>Afar</button>
                <button onClick={e => { inputHandler('simien mountain') }}>Gonder</button>
                <button onClick={e => { inputHandler('Lalibela') }}>Lalibela</button>
            </div>

        </div>
    )
}

export default Headers