import "./App.css";
import React from "react";

export default function Bf(){
return(
    <>
        <div id="Body">
        <p id="BodyContent" >
            Congrats For Your new member in the Family.
            here i will guide you how to fill the Form for getting your little 
            Champ a Birth Certificate. 
        </p>
        <form action="" id="BirthForm">
            <div className="InputContainer">
                <p id="BodyContent" >Little Champs Info:</p>
                <div className="InputBox">
                <span id="BodyContent">Date of Birth: </span>
                    <input placeholder="Champ's Date of Birth" type="date" className="Inputs" id="Dob" />
                </div>
                <div className="InputBox">
                <span id="BodyContent">Gender: </span>
                <select className="Inputs" name="Gender" id="Gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                </div>
                <div className="InputBox" >
                <span id="BodyContent">Name: </span>
                    <input type="text" placeholder="Champ's Name" className="Inputs" id="Name" />
                </div>
            </div>
            <div className="InputContainer">
                <p id="BodyContent">Little Champ's Parents Info</p>
                <div className="InputBox">
                <span id="BodyContent">Father's Full Name: </span>
                    <input placeholder="Champ's Fathers Full Name" type="text" className="Inputs" id="Dob" />
                </div>
                <div className="InputBox">
                <span id="BodyContent">Grandfather's Full Name: </span>
                    <input placeholder="Champ's Grandfathers Full Name" type="text" className="Inputs" id="Dob" />
                </div>
                <div className="InputBox">
                <span id="BodyContent">Mother's Full Name: </span>
                    <input placeholder="Champ's Mother's Full Name" type="text" className="Inputs" id="Dob" />
                </div>
            </div>
            <div className="InputContainer">
                <p id="BodyContent">Little Champ's Birth Info</p>
                <div className="InputBox">
                <p id="BodyContent">Hospital Address: </p>
                    <textarea className="TextArea" name="HAdress" id="HAdress" form="BirthForm" rows={5} cols={35}></textarea>
                </div>
                <div className="InputBox">
                <p id="BodyContent">Parents Permanent Address: </p>
                    <textarea className="TextArea" name="PAdress" id="PAdress" form="BirthForm" rows={5} cols={35}></textarea>
                </div>
            </div>
            <div>
                <button type="submit" id="Submit" >Submit</button>
            </div>
        </form>
        </div>
    </>
)
}
