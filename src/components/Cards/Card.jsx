

const Card = ({posts, image}) => {
    return(
        <>
            {
                posts.map(post => (
                    <div className="rounded-xl overflow-hidden bg-white border" key={post.id}>
                        <img src={image} alt="" className='w-full' />
                        <div className='py-3 px-2'>
                            <h3 className='text-blue-500 font-bold font-roboto text-[20px] md:text-2xl lg:text-[28px] leading-6 md:leading-8 lg:leading-9'>{post.title} - long title here</h3>
                            <p className='text-blue-500 text-sm md:text-lg leading-6 md:leading-8 font-opensans mt-3 mb-5'>{post.description}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Card;