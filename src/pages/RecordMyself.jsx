import {InputRecord, CheckButton} from '../atoms/index'
import {Header} from '../molecules/index';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { useAuthContext } from '../context/Authcontext';
import { db } from '../firebase';
import {useEffect, useState} from 'react'

const lists = [
  {title:"部活動", item:"actiivity", ph:"役職・記録", name:"actiivity1"},
  {title:"委員会", item:"comittee", ph:"役職・活動", name:"comittee1"},
  {title:"資格", ph:"スコアなど", name:"qualifications"},
  {title:"学外活動", ph:"内容", name:"other_acitive"},
  {title:"興味・関心", ph:"内容", name:"interest"},
  {title:"長所・短所", ph:"内容", name:"weak_strong"}
]

const RecordMyself = () => {
  const { user } = useAuthContext();
  const userDocumentRef = doc(db, 'users', user.uid);
  const [data, setData] = useState([]);
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    lists.forEach((list)=>{
      console.log(list.name)
      console.log(event.currentTarget[list.name].value);
      console.log(event.currentTarget[list.item] ? event.currentTarget[list.item].value:"");
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