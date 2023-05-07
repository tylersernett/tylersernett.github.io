import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DotGroup = ({ selectedPage }) => {
    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

    return (
        <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
            <AnchorLink className={`${selectedPage === 'home' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`}
                href={`#home`}
            />
            <AnchorLink className={`${selectedPage === 'skills' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`}
                href={`#skills`}
            />
            <AnchorLink className={`${selectedPage === 'projects' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`}
                href={`#projects`}
            />
            {/* <AnchorLink className={`${selectedPage === 'testimonials' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`}
                href={`#testimonials`}
            /> */}
            <AnchorLink className={`${selectedPage === 'contact' ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full`}
                href={`#contact`}
            />
        </div>
    )
}

export default DotGroup