import {InputRecord, CheckButton} from '../atoms/index'
import {Header} from '../molecules/index';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { useAuthContext } from '../context/Authcontext';
import { db } from '../firebase';
import {useEffect, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Template from '../template.json';
import { useLocation } from 'react-router-dom';

const lists = Template.recordmyself;

const RecordMyself = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [myselfData, setMyselfData] = useState(location.state ? location.state.myselfData:[]);
  const userDocumentRef = doc(db, 'users', user.uid);
  const [data, setData] = useState([]);

  useEffect(()=>{
    getDoc(userDocumentRef).then((ref)=>{
      setData(ref.data());
      console.log("a")
    });
  },[]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    let judge = true;

    let parent = data.first_grader.recordmyself;
    for(let i in parent){
      if(i==0){
        parent[i].activity = event.target.activity.value;
        parent[i].activityRole = event.target.activity1.value;
      }else if (i==1){
        parent[i].comittee = event.target.comittee.value;
        parent[i].comitteeRole = event.target.comittee1.value;
      }else{
        parent[i][lists[i].name] = event.target[lists[i].name].value;
      }
    }
    setDoc(userDocumentRef, data, {merge:true});
    navigate('/recordnow');
  }

  const title = {
    paddingTop: "80px",
    paddingBottom: "0px",
    marginLeft: "30px",
    color: "#1A4F83",
    fontSize: "24px",
  };

  return (
    <div style={{paddingBottom: "60px"}}>
      <Header />
        <div>
          <div style={title}>今の自分を記録する</div>
          <form style={{display:"flex",flexDirection:"column", alignItems:"center",}} onSubmit={handleSubmit}>
            {
              lists.map((list, index)=>
                <div key={index}>
                  <InputRecord 
                  title={list.title} 
                  item={list.item}
                  ph={list.ph}
                  name={list.name}
                  sentence1={index == 0 || index == 1 ? myselfData[index][list.item] : ""}
                  sentence2={index == 0 || index == 1 ? myselfData[index][list.role] : myselfData[index][list.name]}
                  />
                </div>
              )
            }
            <CheckButton />
          </form>
        </div>
    </div>
  );
};

export default RecordMyself;