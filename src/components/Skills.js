import Logo from "./Logo";

const skills = () => {
    const logos = [
        {
            name: 'HTML',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
        },
        {
            name: 'HTML',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
        },
        {
            name: 'HTML',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
        },
        {
            name: 'HTML',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
        },
        {
            name: 'HTML',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
        },
        {
            name: 'HTML',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
        },
        {
            name: 'HTML',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
        },
    ]

    return <>
        <div className={'container mx-auto flex flex-col items-center gap-4'}>
            <h1 className={'text-4xl text-black font-bold'}>My Skills</h1>
            <div className={'flex flex-wrap gap-14 justify-around mt-8'}>
                {
                   logos.map((logo, index) => {
                       return <Logo
                           src={logo.src}
                           name={logo.name}
                           key={index}
                       />
                   })
                }
            </div>
        </div>
   </>;
}

export default skills;