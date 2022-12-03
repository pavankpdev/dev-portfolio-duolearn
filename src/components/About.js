import {BsLinkedin, BsTwitter} from "react-icons/bs";

const About = () => {
    return <>
        <div className={'container mx-auto flex flex-col items-center gap-4 pb-10'}>
            <h1 className={'text-4xl text-black font-bold'}>About Me</h1>
            <div className={'w-3/5 flex-col flex gap-4'}>
                <p className={'text-lg text-black font-medium text-center'}>
                    Hey this is Pavan, started as Web Developer especially in <strong className={'text-blue-800'}>MERN stack</strong>,
                    and then moving towards <strong className={'text-blue-800'}>Blockchain</strong> and <strong className={'text-blue-800'}>Rust</strong> ecosystem. I'm most passionate about
                    learning new things and building things that can help people. I like to explore new
                    Blockchain protocols and experiment with Rust, in my free time. And yep I play games.
                </p>
                <div className={'flex flex-col items-center bg-blue-600 border-4 border-dashed border-white rounded-lg py-4'}>
                    <h3 className={'text-2xl font-bold text-white'}>Connect with me</h3>
                    <h4 className={'text-lg  text-white'}>
                        <a href={'mailto:hey@duolearn.tech'} >
                            hey@duolearn.tech
                        </a>
                    </h4>
                    <div className={'flex items-center gap-4 mt-4'}>
                        <a
                            href={'https://www.linkedin.com/in/pavan-kumar-2000/'}
                            target={'_blank'}
                            referrerPolicy={'no-referrer'}
                        >
                            <button className={'text-2xl  text-white'}>
                                <BsLinkedin />
                            </button>
                        </a>

                        <a
                            href={'https://twitter.com/pavank38'}
                            target={'_blank'}
                            referrerPolicy={'no-referrer'}
                        >
                            <button className={'text-2xl  text-white'}>
                                <BsTwitter />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default About