import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function InfoBlock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="Container">
                    <Heading title={heading} />
                    <div className="row">
                        <div className="col-10-sm-8 mx-auto text-center text-white">
                            <p className="lead text-white mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Perspiciatis nihil ad consequuntur eligendi est doloremque voluptates,
                                 quasi, reprehenderit consequatur inventore, amet molestiae. 
                                 Ipsum ullam assumenda ab similique nesciunt dicta sequi, 
                                 mollitia nostrum quas dignissimos quidem tenetur quaerat.
                                 Omnis quibusdam ea atque et. Repudiandae tenetur ipsam animi
                                 similique inventore! Voluptatum necessitatibus et fuga nam dolor
                                 neque nemo quae numquam repellat nesciunt!
                            </p>
                            <Link to="/about/">
                                <button className="btn btn-warning btn-lg">
                                    {heading}
                                </button>
                            </Link>
                        </div>
                    </div>
            </div>

        </section>
    )
}
