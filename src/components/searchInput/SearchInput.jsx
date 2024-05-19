import { useState } from 'react';
import { SearchIconGray } from '../../assets/svgs/Icons';

const SearchInput = ({setSearchArticle}) => {
    const [searchTerm, setSearchTerm] = useState('')
    return(
        <form 
            className='sm:relative'
        >
            <div className="mb-3 relative sm:mb-0 shadow-[0_15px_25px_rgba(0,0,0,0.2)] rounded-lg">
                <input 
                    type="text" 
                    className="h-12 sm:h-[56px] pl-12 rounded-lg focus:outline-none bg-white w-full font-opensans text-base font-bold italic text-gray-300 placeholder:text-gray-300 placeholder:capitalize"
                    placeholder="search aricles"
                    onChange={e => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                    <span className='absolute left-4 top-[50%] -translate-y-[50%] '>
                        <SearchIconGray width={'16'} height={'16'} />
                    </span>
            </div>
            <button
                onClick={e => {
                    e.preventDefault()
                    setSearchArticle(searchTerm)
                }}
                className="h-12 sm:h-[40px] sm:absolute sm:right-2 sm:top-[50%] sm:-translate-y-[50%] sm:w-[94px] rounded-lg bg-blue-600 text-white w-full font-opensans text-base font-bold capitalize"
            >
                search
            </button>
        </form>
    )
}

export default SearchInput;