const Logo = (props) => {
    return <>
        <div className={'flex flex-col'}>
            <div className={'w-14 h-14'}>
                <img
                    src={props.src}
                    alt={props.name}
                    className={'w-full h-full'}
                />
            </div>
            <h3 className={'text-xl text-black font-medium'}>{props.name}</h3>
        </div>
    </>
}

export default Logo