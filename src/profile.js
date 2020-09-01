import React,{useState} from 'react';
import Displaytable from './Displaytable.js';


const Profile = () => {

    const [data, setData] = useState({});
    const[username,SetUsername] = useState("");
    const[repositories,Setrepositories]=useState([]);

    const onChangeHandler = e =>{
        SetUsername(e.target.value);
    }

    const submitHandler = async e =>{
        e.preventDefault();

        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        console.log(profileJson);
        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        //console.log(repoJson);

        if(profileJson){
            setData(profileJson);
            Setrepositories(repoJson);
        }
    };


    return (
        <>
        <div style={{padding:20}}>
        <div class="ui search">
        <div class="ui icon input">
        <i class="search icon"></i>
        <input className="prompt" placeholder="Search username ..." type="text" value={username} onChange={onChangeHandler}/>
        </div>
        <button className="ui secondary button" type="submit" onClick={submitHandler}> 
          <i className ="github icon"></i>Search
          </button> 
          <Displaytable data={data} repositories={repositories} />
       </div>
    </div>
        </>
    )
}

export default Profile;
