const Header = (props) => {

    return (
        <>
            <header>
                <div className='logo'> LOGO</div>
                <input onChange={props.keywords}>
                </input>
            </header>


        </>
    )

}




export default Header;