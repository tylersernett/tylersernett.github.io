import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DotGroup = ({ selectedPage, navPages }) => {
    const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

    return (
        <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
            {navPages.map((page) => (
                <AnchorLink
                    key={page}
                    className={`${selectedPage === page.toLowerCase() ? selectedStyles : "bg-dark-grey"}
                w-3 h-3 rounded-full focus:outline-none focus-visible:ring-8 focus-visible:ring-blue focus-visible:rounded-full focus-visible:ring-offset-1 focus-visible:ring-offset-deep-blue`}
                    href={`#${page.toLowerCase()}`}
                />
            ))}
        </div>
    )
}

export default DotGroup