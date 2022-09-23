import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import 'react-tabs/style/react-tabs.css';


const TeachersConsole = () => {
    const location = useLocation();
    const [data, setData] = useState();
    const studentInfo = location.state.data
    const userDocumentRef = doc(db, 'users', studentInfo.uid);

    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            setData(data);
        });
    },[]);

    const sidebar = {
        position:"fixed",
        left: 0,
        minHeight: "100vh",
        width: "250px",
        backgroundColor: "rgba(114, 119, 120, .5)",
        color: "white"
    };
    const serch = {

    };
    const member = {
        borderBottom: "1px solid white",
        padding: "10px 0"
    }
  
  return (
    <div>
        {
            data?(
                <div>
                    <div style={sidebar}>
                        <div style={{display:"flex"}}>
                            <input type="serch" style={serch} />
                            <button>検索</button>
                        </div>
                        <div>1年2組</div>
                        <div style={{textAlign:"center"}}>
                            <div style={member}>{studentInfo.num}番 {studentInfo.name}</div>
                        </div>
                    </div>
                    <div style={{marginLeft: "250px"}}>
                        <Tabs>
                            <TabList>
                            <Tab>HOME</Tab>
                            <Tab>About</Tab>
                            <Tab>Contact</Tab>
                            </TabList>

                            <TabPanel>
                            <h1>HOMEです</h1>
                            </TabPanel>
                            <TabPanel>
                            <h1>Aboutです</h1>
                            </TabPanel>
                            <TabPanel>
                            <h1>Contactです</h1>
                            </TabPanel>
                        </Tabs>

                    </div>
                </div>
            ):(
                <></>
            )
        }
    </div>
  )
};

export default TeachersConsole;