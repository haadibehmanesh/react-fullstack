const NewsItem = ({ item }) => {
    return (
        <div className="news-item">
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
        </div>
    );
}

export default NewsItem;