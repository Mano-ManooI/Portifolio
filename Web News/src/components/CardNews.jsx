import { CiClock2 } from "react-icons/ci";

function CardNews({ imgUrl, category, title, descripition, author, duration }){
    return(
        <div id="card">
            <img src={imgUrl} draggable="false" />
            <div id="dataLastNews">
                <h3>{category}</h3>
                <section>
                    <h1>{title}</h1>
                    <p>{descripition}</p>
                </section>
                <hr />
                <div id="othersData">
                    <span>{author}</span>
                    <span><CiClock2 /> {duration} min</span>
                </div>
            </div>
        </div>
    );
};

export default CardNews;