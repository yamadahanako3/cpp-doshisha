import {InputReview, CheckButton} from '../atoms/index'
import {Header} from '../molecules/index';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { useAuthContext } from '../context/Authcontext';
import { db } from '../firebase';
import {useEffect, useState} from 'react'

const lists = [
  {title:"学習面", effort:"studentE", reflection:"studentR", effortText:"", reflectionText:""},
  {title:"行事", effort:"eventE", reflection:"eventR", effortText:"", reflectionText:""},
  {title:"部活動・委員会・生徒会", effort:"activityE", reflection:"activityR", effortText:"", reflectionText:""},
  {title:"資格・家庭生活・学外活動", effort:"other_activityE", reflection:"other_activityR", effortText:"", reflectionText:""}
]
const YearInReview = () => {
  const { user } = useAuthContext();
  const userDocumentRef = doc(db, 'users', user.uid);
  const [data, setData] = useState([]);
  // useEffect(()=>{
  //   getDoc(userDocumentRef).then((ref)=>{
  //     const data = ref.data();
  //     setData(ref.data())
  //     const parent = data.first_grader.startingYear.ability;
  //     let lists = [];
  //     for(let i in parent){
  //         lists.push(parent[i].item);
  //     }
  //     setData(lists);
  // });
  // },[])
  const handleSubmit = async (event) => {
    event.preventDefault();
    lists.forEach((list)=>{
      console.log(event.currentTarget[list.effort].value);
      console.log(event.currentTarget[list.reflection].value);
    });
  };

  const title = {
    paddingTop: "80px",
    paddingBottom: "0px",
    marginLeft: "30px",
    color: "#1A4F83",
    fontSize: "24px",
  };

  return (
    <div>
      <Header />
        <div>
          <div style={title}>一年を振り返る</div>
          <form onSubmit={handleSubmit}>
            {
              lists.map((list, index)=>
                <div key={index}>
                  <InputReview 
                  title={list.title} 
                  effort={list.effort} 
                  reflection={list.reflection} 
                  effortText={list.effortText} 
                  reflectionText={list.reflectionText}  />
                </div>
              )
            }
            <CheckButton />
          </form>
        </div>
    </div>
  );
};

export default YearInReview;