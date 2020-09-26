import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'
export default function DualInfoBlock({heading,image}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading} />
                
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus blanditiis minus molestias tempora! Provident enim perferendis eius quisquam itaque, quas quibusdam officiis illum est deserunt nam eligendi possimus iure laudantium reiciendis harum hic quos. Explicabo facere doloribus in sequi, repellat, excepturi magni iure molestias accusamus voluptatum laborum odit consequuntur fuga.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, unde! Repudiandae ipsam odio aliquam nulla voluptatibus earum, iste porro quam delectus adipisci fugiat facere sed quas doloribus itaque non! Odio.
                        </p>
                    </div>
                    <div className="col-4">
                    <div className="card">
  <img className="card-img-top" src={image} alt="image goes here" />
  <div className="card-body">
    <h5 className="card-title">just click photos</h5>
    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. At praesentium ad aut maxime enim provident reprehenderit iure, ducimus, commodi aperiam voluptate itaque quisquam, odio nisi fuga ipsa. Aperiam, sint? Provident!</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>     
                    </div>
                </div>
            </div>

        </section> 
    )
}
