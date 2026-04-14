import Header from "../components/Header";

import { IoIosArrowRoundBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function Profile(){
    return(
        <div>
            <Header />
            <main id="profileMain">
                <section>
                    <button><IoIosArrowRoundBack /></button>
                    <div>
                        <h4>Elenor Musical</h4>
                        <p>0 Posts</p>
                    </div>
                    <button><CiSearch /></button>
                </section>
                <div id="profileData">
                    <img src="./src/assets/profileImgOutiline.jpg" alt="Profile Picture" draggable="false" />
                    <section>
                        <h2>Elenor Musical</h2>
                        <h3>@elenormuscial</h3>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Profile;