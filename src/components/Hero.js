import {BsLinkedin, BsTwitter} from "react-icons/bs"

const Hero = () => {
    return <>
        <div
            className={"container mx-auto p-4"}
        >
            <div className={'grid grid-cols-2'}>
                <div className={'flex flex-col justify-self-center center text-black'}>
                    <h2 className={'text-xl text-black font-medium'}>Hey 👋</h2>
                    <h1 className={'text-4xl text-black font-bold'}>I'm Pavan</h1>
                    <h3 className={'text-xl text-black font-medium'}> From Bangalore, India</h3>
                    <div className={'flex items-center gap-4 mt-4'}>
                        <a
                            href={'https://www.linkedin.com/in/pavan-kumar-2000/'}
                            target={'_blank'}
                            referrerPolicy={'no-referrer'}
                        >
                            <button className={'text-2xl'}>
                                <BsLinkedin />
                            </button>
                        </a>

                        <a
                            href={'https://twitter.com/pavank38'}
                            target={'_blank'}
                            referrerPolicy={'no-referrer'}
                        >
                            <button className={'text-2xl'}>
                                <BsTwitter />
                            </button>
                        </a>
                    </div>
                </div>
                <div className={'justify-self-center'}>
                    <div
                        className={'bg-white rounded-full'}
                        style={{
                            width: '200px',
                            height: '200px'
                        }}
                    >
                        <img
                            className={'rounded-full w-full h-full object-cover'}
                            src={'https://lwlies.com/wp-content/uploads/2017/04/avatar-2009-1108x0-c-default.jpg'}
                            alt={'Profile Image'}
                        />
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default Hero