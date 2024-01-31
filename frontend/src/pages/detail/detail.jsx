import React,{ useState, useEffect }  from 'react';
import "./index.scss";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DetailsBanner from '../../components/DetailBanner/DetailBanner';
const details = () => {
  const data=JSON.parse(localStorage.getItem('data'));
  const [movie, setMovie] = useState(null);
  const {id} = useParams();
  useEffect(() => {
    if (data) {
      const selectedMovie = data.find(item => item.show.id == id);
      setMovie(selectedMovie);
    }
  }, [data, id]);
  return (
    <div>
      <DetailsBanner data={movie}/>
    </div>
  )
}

export default details
