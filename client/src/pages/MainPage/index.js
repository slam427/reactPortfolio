import React from 'react';
import MainImage from '../../Assets/mainPage.svg'
function MainPage () {
return (
    <div>
        <div className="container-fluid w-100 m-0">
        <div className="row w-100">
            <div className="col w-100 d-flex justify-content-center" >
                <img id="mainContent" className="img-fluid mw-100" src={MainImage} alt="man looking at art"></img>
            </div>
        </div>
        </div>
    </div>
)
}
export default MainPage;
