import React, { useState ,useEffect} from 'react'
import "./index.scss"
import axios from 'axios';
import Card from '../../../components/Card/Card';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrappper';
const Movies = () => {
    const [data, setData] = useState(null);
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.tvmaze.com/search/shows?q=all`);
            setData(response.data);
        } catch (err) {
            setError(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    localStorage.setItem('data',JSON.stringify(data));
    return (
        <div className='carouselSection'>
            <ContentWrapper>
                <span className='carouselTitle'>All Movies</span>
            </ContentWrapper>
            <div className="container">
            {data?.map((item,index) => {
                return <Card key={index} data={item}/>;
            })}
            </div>
        </div>
    )
}

export default Movies
