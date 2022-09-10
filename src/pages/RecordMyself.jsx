import {InputRecord, CheckButton} from '../atoms/index'
import {Header} from '../molecules/index';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { useAuthContext } from '../context/Authcontext';
import { db } from '../firebase';
import {useEffect, useState} from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Template from '../template.json';

const lists = Template.recordmyself;

const RecordMyself = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const userDocumentRef = doc(db, 'users', user.uid);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  // useEffect(()=>{
  //   getDoc(userDocumentRef).then((ref)=>{
  //     const data = ref.data();
  //     setData(ref.data())
  //     const parent = data.first_grader.ability;
  //     let lists = [];
  //     for(let i in parent){
  //         lists.push(parent[i].item);
  //     }
  //     setData(lists);
  //     console.log("a");
  // });
  // },[])

  useEffect(()=>{
    getDoc(userDocumentRef).then((ref)=>{
      const data = ref.data();
      setData(ref.data());
      console.log("a")
    });
  },[]);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   lists.forEach((list)=>{
  //     console.log(list.name)
  //     console.log(event.currentTarget[list.name].value);
  //     console.log(event.currentTarget[list.item] ? event.currentTarget[list.item].value:"");
  //   });
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let parent = data.first_grader.recordnow;
    parent.activity = event.target.activity.value;
    parent.activityRole = event.target.activity1.value;
    parent.comittee = event.target.comittee.value;
    parent.comitteeRole = event.target.comittee1.value;
    parent.qualifications = event.target.qualifications.value;
    parent.other_acitive = event.target.other_acitive.value;
    parent.interest = event.target.interest.value;
    parent.weak_strong = event.target.weak_strong.value;
    
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