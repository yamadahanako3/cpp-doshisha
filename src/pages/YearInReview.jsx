import {InputReview, CheckButton} from '../atoms/index'
import {Header} from '../molecules/index';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { useAuthContext } from '../context/Authcontext';
import { db } from '../firebase';
import {useEffect, useState} from 'react';
import template from '../template.json';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const lists = template.yearinreview;

const YearInReview = () => {
  const location = useLocation();
  const [yearData, setYear] = useState(location.state ? location.state.yearData:[])
  const { user } = useAuthContext();
  const userDocumentRef = doc(db, 'users', user.uid);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    getDoc(userDocumentRef).then((ref)=>{
      const data = ref.data();
      setUserData(data);
      console.log("a");
    });
    // const a = async () => {
    //   const b = await getDoc(userDocumentRef)
    //   setUserData(b.data())
    // }
  },[]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const parent = userData.first_grader.yearinreview
    for (let i in parent) {
      parent[i].effort = event.currentTarget[lists[i].key1].value;
      parent[i].reflection = event.currentTarget[lists[i].key2].value;
    };
    await setDoc(userDocumentRef,userData, {merge:true});
    navigate('/recordnow');
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
                  effort={list.key1} 
                  reflection={list.key2} 
                  effortText={userData.first_grader?.yearinreview[index].effort} 
                  reflectionText={userData.first_grader?.yearinreview[index].reflection}  />
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