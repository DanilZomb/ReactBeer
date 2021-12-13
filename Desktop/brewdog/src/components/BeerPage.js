import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {api} from "../api";
import './BeerPage.css'

export default function BeerPage() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const[show,setShow] = useState(true)

  useEffect(() => {
    api.get(`/beers/${id}`).then(({ data }) => {
      setPost(data[0]);
    })
  }, [id]);

  return (
    <div>
      {post && (
          <div className="beer-information-wrapper">
          <div className="beer-inform-wrapper">
              <img src={post.image_url} className="beer-inf-img" alt="beer_img" width="130" height="410" />
              <div className="beer-text-wrapper">
                  <p className="beer-inf-name">{post.name}</p>
                  <div className="beer-inf-wrapper">
                      <p className="beer-inf">Tagline: <span style={{ color: 'rgb(151, 151, 151)' }}>{post.tagline}</span></p>
                      <p className="beer-inf">Abv: <span style={{ color: 'rgb(151, 151, 151)' }}>{post.abv}</span></p>
                      { !show ?
                      <p className="beer-inf-desc">Description: <span style={{ color: 'rgb(151, 151, 151)' }}>{post.description}</span></p>
                      :
                      <p className="beer-inf-desc-hide">Description: <span style={{ color: 'rgb(151, 151, 151)' }}>{post.description}</span></p>
                      }
                       <div className="beer-inf-btn-wrapper"><button className="beer-inf-btn" onClick={()=>setShow(!show)}>{show ? 'Show' : 'Hide'}</button></div>
                      <p className="beer-inf">Food pairing: <span style={{ color: 'rgb(151, 151, 151)' }}>{post.food_pairing}</span></p>
                  </div>
              </div>
          </div>
      </div>
      )}
    </div>
  );
}
