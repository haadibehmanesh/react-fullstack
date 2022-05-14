const NewsList = (props) => {

    const news = props.news.map((item, index) => (
        <div key={item.id}>
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
        </div>


    ))

    return (
        <>
            {news}
        </>
    );
}

export default NewsList;