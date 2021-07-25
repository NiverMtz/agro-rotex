import React from 'react'
import '../components/container_card.css'


const ContainerCard = () => {
    return (
        <div className='container-card'>
            <div className="container-card-img">
                <img src="/logo.png" alt="Crop"/>
            </div>
            <div className="container-card-text">
                <div className='container-card__name'>
                    Name
                </div>
                <div className='container-card__name-science'>
                    Name Science
                </div>
                <div className='container-card__name-features'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima impedit culpa, aliquam corrupti, voluptatum dignissimos earum temporibus totam libero delectus explicabo aperiam? Tenetur eum facere blanditiis aliquam! Eaque, itaque distinctio.
                    Quod hic suscipit obcaecati facilis, dolorem eaque perspiciatis quam quos sit, quasi nisi molestiae porro explicabo perferendis, dicta voluptatum aspernatur numquam? Cupiditate vel dolorum eligendi nostrum numquam dolorem voluptate ipsum.
                    Magnam vero placeat alias delectus obcaecati hic sint nesciunt reiciendis quae totam sequi, atque itaque. Ex, dolores autem possimus cupiditate ea veniam mollitia laborum reprehenderit, numquam, id error. Cum, libero.
                </div>
                <div className='container-card__name-compatibility'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cumque iure commodi vitae, nostrum numquam assumenda voluptatem error. Necessitatibus animi voluptatum repudiandae porro. Eum maiores repellendus dicta ea iusto excepturi?
                </div> 
            </div>  
        </div>
    )
}

export default ContainerCard
