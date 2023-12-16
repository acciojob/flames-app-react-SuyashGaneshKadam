import React, { useState } from "react";
import '../styles/App.css';

let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

const App = () => {
    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [relationship, setRelationship] = useState("");
    const [btnClicked, setBtnClicked] = useState(false);

    function calculateRelationship(event) {
        event.preventDefault();
        if (name1.trim() === "" || name2.trim() === "") {
            setBtnClicked(false);
            setRelationship("Please Enter valid input");
            return;
        }
        let str1 = name1;
        let str2 = name2;
        for (let t in str1) {
            if (str2.includes(t)) {
                str1 = str1.replace(t, "");
                str2 = str2.replace(t, "");
            }
        }
        setName1(str1);
        setName2(str2);
        setBtnClicked(true);
        setRelationship(arr[(str1.length + str2.length) % 6]);
    }

    return (
        <div id="main">
            {/* Do not remove the main div */}
            <form>
                <input name="name1" data-testid="input1" placeholder="Enter first name" onChange={(e) => setName1(e.target.value)} value={name1} />
                <input name="name2" data-testid="input2" placeholder="Enter second name" onChange={(e) => setName2(e.target.value)} value={name2} />
                <button type="submit" data-testid="calculate_relationship" onClick={calculateRelationship}>Calculate Relationship Future</button>
                <button type="reset" data-testid="clear" onClick={() => {
                    setName1("");
                    setName2("");
                    setBtnClicked(false);
                    setRelationship("");
                }}>Clear</button>
            </form>
            <h3 data-testid="answer">{relationship}</h3>
        </div>
    )

}


export default App;
