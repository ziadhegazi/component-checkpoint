import logo from "../../ZH style 2 WIP3pdf.jpg";
import "./ProfilePhoto.css"

const profilePic = () => {
    return (
        <div className="box">
            <img src={logo} alt="Profile Picture" className="logo"></img>
        </div>
    );
}

export default profilePic;