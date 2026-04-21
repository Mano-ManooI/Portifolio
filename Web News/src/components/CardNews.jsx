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
            </div>
            <hr />
            <ul>
                <li>{author}</li>
                <li>-</li>
                <li><CiClock2 /> {duration} min</li>
            </ul>
        </div>
    );
};

export default CardNews;