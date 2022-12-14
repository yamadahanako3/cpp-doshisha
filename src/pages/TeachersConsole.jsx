import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { RadarChart } from '../atoms/index';
import { GoalCard } from '../molecules/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

const TeachersConsole = () => {
    const location = useLocation();
    const [data, setData] = useState();
    const studentInfo = location.state.data;
    const teachersClass = location.state.teachersClass.split("-");
    const userDocumentRef = doc(db, 'users', studentInfo.uid);
    const [firstData1, setFirstData1] = useState(null);
    const [firstData2, setFirstData2] = useState(null);
    const [secondData1, setSecondData1] = useState(null);
    const [secondData2, setSecondData2] = useState(null);
    const [thirdData1, setThirdData1] = useState(null);
    const [thirdData2, setThirdData2] = useState(null);
    const [goalCard, setGoalCard] = useState(null);
    const [buttonColor, setBtnColor] = useState(null);

    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            const parent = data;
            let firstLists1 = [];
            let firstLists2 = [];
            let secondLists1 = [];
            let secondLists2 = [];
            let thirdLists1 = [];
            let thirdLists2 = [];
            let goalcardSwiper = [];
            for(let i = 0 ; i < 5 ; i++){
                firstLists1.push(parent.first_grader.ability[i].point1);
                firstLists2.push(parent.first_grader.ability[i].point2);
                secondLists1.push(parent.second_grader.ability[i].point1);
                secondLists2.push(parent.second_grader.ability[i].point2);
                thirdLists1.push(parent.third_grader.ability[i].point1);
                thirdLists2.push(parent.third_grader.ability[i].point2);
            };
            console.log(parent.goalCard[0])
            let k = 0;
            for(let i = 0; i < (parent.goalCard.length)/4; i++) {
                goalcardSwiper[i] = [];
                for(let j=0; j < 4; j++) {
                    goalcardSwiper[i][j] = parent.goalCard[k];
                    k++;
                };
            };
            console.log(goalcardSwiper)
            
            
            setGoalCard(goalcardSwiper);
            setFirstData1(firstLists1);
            setFirstData2(firstLists2);
            setSecondData1(secondLists1);
            setSecondData2(secondLists2);
            setThirdData1(thirdLists1);
            setThirdData2(thirdLists2);
            setData(data);
            console.log(data)
        });
    },[]);

    const sidebar = {
        position:"fixed",
        left: 0,
        minHeight: "100vh",
        width: "220px",
        backgroundColor: "rgba(114, 119, 120, .5)",
        color: "white"
    };
    const member = {
       fontSize:"25px",
       marginTop: "10px"
    };
    const header = {
        position: "fixed",
        top:0,
        width: "100%",
        boxShadow: "1px 0px 5px gray",
        fontSize: "14px",
        backgroundColor: "white",
        zIndex: 10
    };
    const comment = {
        color: "white",
        backgroundColor: "#72777A",
        borderRadius: "25px",
        padding: "10px 25px",
        fontSize: "11px",
        margin: "0 25px"
    };
    const top = {
        display: "flex"
    };
    const card = {
        margin: "50px"
    };
    const record = {
        margin: "50px"
        
    };
    const line = {
        position: "absolute",
        top: "15%",
        right: "0",
        backgroundColor:"rgba(114, 119, 122, .25)",
        height: "90%",
        width: "1px",
        color: "white"
    }
  
  return (
    <div style={{color: "#72777A", backgroundColor: "rgba(114, 119, 122, .1)",minHeight: "100vh",overflowX: "hidden",width: "100vw"}}>
        <div>
            <Tabs>
                <div style={sidebar}>
                    <div style={{borderBottom: "1px solid white"}}>
                        <div style={{margin:"20px 40px"}}>
                            <div>{teachersClass[1]}???{teachersClass[2]}???{studentInfo.num}???</div>
                            <div style={member}>{studentInfo.name}</div>
                        </div>
                    </div>
                    <TabList style={{listStyle: "none"}}>
                        <Tab style={{margin: "20px 0"}}>???????????????</Tab>
                        <Tab style={{margin: "20px 0"}}>???????????????</Tab>
                        <Tab style={{margin: "20px 0"}}>???????????????</Tab>
                    </TabList>
                </div>

                <div style={{position:"relative",marginLeft: "220px"}}>
                    <div style={header}>
                        <ul style={{listStyle:"none",display:"flex",alignItems:"center",justifyContent:"end",marginRight: "250px"}}>
                            <li style={{margin: "0 25px"}}>{teachersClass[1]}???{teachersClass[2]}???{studentInfo.num}???</li>
                            <li style={{margin: "0 25px"}}>{studentInfo.name}</li>
                        </ul>
                    </div>
                    <div style={{paddingTop: "80px"}}>
                        <TabPanel>
                            <div style={{fontSize:"22px",margin:"20px"}}>???????????????</div>
                            <div style={top}>
                                <div style={{backgroundColor: "white",boxShadow: "1px 0px 10px rgba(114, 119, 122, .1)",borderRadius: "5px",display: "inline-block",padding: "20px 10px",margin: "0 30px"}}>
                                    <RadarChart data1={firstData1} data2={firstData2} />
                                </div>
                            </div>
                            <div className="">
                                <Tabs style={{backgroundColor:"white", width:"1000px",marginLeft: "30px",boxShadow: "1px 0px 10px rgba(114, 119, 122, .1)",borderRadius: "5px"}}>
                                    <TabList style={{listStyle: "none", display:"flex", paddingLeft:"0", paddingRight:"0"}}>
                                        <Tab onClick={()=>{setBtnColor(0)}} style={{width:"200px",padding:"10px 0",textAlign:"center", marginRight: "3px", fontSize:"13px",backgroundColor: buttonColor == 0 ? "rgba(114, 119, 122, .1)" : "white"}}>?????????????????????????????????</Tab>
                                        <Tab onClick={()=>{setBtnColor(1)}} style={{width:"200px",padding:"10px 0",textAlign:"center", marginRight: "3px", fontSize:"13px",backgroundColor: buttonColor == 1 ? "rgba(114, 119, 122, .1)" : "white"}}>???????????????????????????????????????</Tab>
                                        <Tab onClick={()=>{setBtnColor(2)}} style={{width:"200px",padding:"10px 0",textAlign:"center", marginRight: "3px", fontSize:"13px",backgroundColor: buttonColor == 2 ? "rgba(114, 119, 122, .1)" : "white"}}>??????????????????????????????</Tab>
                                        <Tab onClick={()=>{setBtnColor(3)}} style={{width:"200px",padding:"10px 0",textAlign:"center", marginRight: "3px", fontSize:"13px",backgroundColor: buttonColor == 3 ? "rgba(114, 119, 122, .1)" : "white"}}>??????????????????</Tab>
                                        <Tab onClick={()=>{setBtnColor(4)}} style={{width:"200px",padding:"10px 0",textAlign:"center", marginRight: "3px", fontSize:"13px",backgroundColor: buttonColor == 4 ? "rgba(114, 119, 122, .1)" : "white"}}>?????????????????????????????????</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div style={{display:"flex"}}>
                                            <div style={{position: "relative",minHeight: "180px",margin: "10px 30px",width:"420px"}}>
                                                <div>????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[0].goal}</p>
                                                <div style={line}></div>
                                            </div>
                                            <div style={{position: "relative",minHeight: "180px",margin: "10px 10px",width:"420px"}}>
                                                <div>????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[0].goal}</p>
                                                <div style={line}>a</div>
                                            </div>
                                            <div style={{margin: "10px 10px",width:"420px"}}>
                                                <div>?????????????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[0].goal}</p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div style={{display:"flex"}}>
                                            <div style={{position: "relative",minHeight: "180px",margin: "10px 30px",width:"420px"}}>
                                                <div>????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[1].goal}</p>
                                                <div style={line}></div>
                                            </div>
                                            <div style={{position: "relative",minHeight: "180px",margin: "10px 10px",width:"420px"}}>
                                                <div>????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[1].goal}</p>
                                                <div style={line}>a</div>
                                            </div>
                                            <div style={{margin: "10px 10px",width:"420px"}}>
                                                <div>?????????????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[1].goal}</p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div style={{display:"flex"}}>
                                            <div style={{position: "relative",minHeight: "180px",margin: "10px 30px",width:"420px"}}>
                                                <div>????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[2].goal}</p>
                                                <div style={line}></div>
                                            </div>
                                            <div style={{position: "relative",minHeight: "180px",margin: "10px 10px",width:"420px"}}>
                                                <div>????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[2].goal}</p>
                                                <div style={line}>a</div>
                                            </div>
                                            <div style={{margin: "10px 10px",width:"420px"}}>
                                                <div>?????????????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[2].goal}</p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div style={{display:"flex"}}>
                                            <div style={{position: "relative",minHeight: "180px",margin: "10px 30px",width:"420px"}}>
                                                <div>????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[3].goal}</p>
                                                <div style={line}></div>
                                            </div>
                                            <div style={{position: "relative",minHeight: "180px",margin: "10px 10px",width:"420px"}}>
                                                <div>????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[3].goal}</p>
                                                <div style={line}>a</div>
                                            </div>
                                            <div style={{margin: "10px 10px",width:"420px"}}>
                                                <div>?????????????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[3].goal}</p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div style={{display:"flex"}}>
                                            <div style={{position: "relative",minHeight: "180px",margin: "10px 30px",width:"420px"}}>
                                                <div>????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[4].goal}</p>
                                                <div style={line}></div>
                                            </div>
                                            <div style={{position: "relative",minHeight: "180px",margin: "10px 10px",width:"420px"}}>
                                                <div>????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[4].goal}</p>
                                                <div style={line}>a</div>
                                            </div>
                                            <div style={{margin: "10px 10px",width:"420px"}}>
                                                <div>?????????????????????????????????</div>
                                                <p style={{fontSize: "14px"}}>{data?.first_grader.ability[4].goal}</p>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                            <div style={card}>
                                <div>???????????????</div>
                                <Swiper modules={[Navigation, Pagination]} pagination={{clickable:true}} className="mySwiper" >
                                    {
                                        goalCard?.map((list,index)=>
                                            <SwiperSlide key={index} style={{display:"flex",justifyContent: "left"}}>
                                                {
                                                    list.map((item,index)=>
                                                    item != undefined ? 
                                                    <div key={index} style={{margin: "10px"}}>
                                                        <GoalCard teacher="teacher" key={index} now={item.now} span={item.span} item={item.item} goalContent1={item.goal} color={item.color!="" ? item.color : "#FFAE80"} />
                                                    </div>
                                                    :<div key={index}></div>
                                                    )
                                                }
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>
                            <div style={card}>
                                <div>???????????????</div>
                                <Swiper modules={[Navigation, Pagination]} pagination={{clickable:true}} className="mySwiper" >
                                    {
                                        goalCard?.map((list,index)=>
                                            <SwiperSlide key={index} style={{display:"flex",justifyContent: "left"}}>
                                                {
                                                    list.map((item,index)=>
                                                    item != undefined ? 
                                                    <div key={index} style={{margin: "10px",display: item.result=="" ? "none":"block"}}>
                                                        <GoalCard teacher="teacher" span={item.span} now={item.now} item={item.item} goalContent1={item.item} goalContent2={item.result=="" ? null : item.result} ratio={item.ratio} color={item.color!="" ? item.color : "#FFAE80"} />
                                                    </div>
                                                    :<div key={index}></div>
                                                    )
                                                }
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>
                            <div style={record}>
                                <div style={{marginBottom: "25px"}}>????????????????????????</div>
                                <div style={{backgroundColor: "white",boxShadow: "1px 0px 10px rgba(114, 119, 122, .1)",borderRadius: "5px",display: "inline-block",padding: "20px 10px",marginLeft: "25px"}}>
                                    <div style={{display:"flex", fontSize:"14px"}}>
                                        <div style={{position: "relative",minHeight: "180px",padding: "20px"}}>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>?????????</div>
                                                <div>{data?.first_grader.recordmyself[0].activity}</div>
                                                <div>{data?.first_grader.recordmyself[0].activityRole}</div>
                                            </div>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>?????????</div>
                                                <div>{data?.first_grader.recordmyself[1].comittee}</div>
                                                <div>{data?.first_grader.recordmyself[1].comitteeRole}</div>
                                            </div>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>??????</div>
                                                <div>{data?.first_grader.recordmyself[2].qualifications}</div>
                                            </div>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>????????????</div>
                                                <div>{data?.first_grader.recordmyself[3].other_acitive}</div>
                                            </div>
                                            <div style={line}></div>
                                        </div>
                                        <div style={{position: "relative",minHeight: "180px",padding: "20px"}}>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>???????????????</div>
                                                <div>{data?.first_grader.recordmyself[4].interest}</div>
                                            </div>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>???????????????</div>
                                                <div>{data?.first_grader.recordmyself[5].weak_strong}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table style={{backgroundColor: "white",boxShadow: "1px 0px 10px rgba(114, 119, 122, .1)",borderRadius: "5px",display: "inline-block",margin: "80px 25px"}}>
                                    <tr style={{boxShadow: "0px 3px 3px rgba(114, 119, 122, .15)"}}>
                                        <th style={{padding:"20px 40px"}}></th>
                                        <th style={{padding:"20px 40px"}}>??????????????????????????????????????????</th>
                                        <th style={{padding:"20px 40px"}}>????????????????????????????????????????????????</th>
                                    </tr>
                                    <tr style={{backgroundColor:"rgba(114, 119, 122, .05)"}}>
                                        <th style={{padding:"30px"}}>???????????????</th>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.first_grader.yearinreview[0].effort}</td>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.first_grader.yearinreview[0].reflection}</td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:"30px"}}>????????????</th>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.first_grader.yearinreview[1].effort}</td>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.first_grader.yearinreview[1].reflection}</td>
                                    </tr>
                                    <tr style={{backgroundColor:"rgba(114, 119, 122, .05)"}}>
                                        <th style={{padding:"30px"}}>?????????????????????</th>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.first_grader.yearinreview[2].effort}</td>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.first_grader.yearinreview[2].reflection}</td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:"30px"}}>?????????????????????</th>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.first_grader.yearinreview[3].effort}</td>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.first_grader.yearinreview[3].reflection}</td>
                                    </tr>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div style={{fontSize:"22px",margin:"20px"}}>???????????????</div>
                        <div style={top}>
                                <div style={{backgroundColor: "white",boxShadow: "1px 0px 10px rgba(114, 119, 122, .1)",borderRadius: "5px",display: "inline-block",padding: "20px 10px",margin: "0 30px"}}>
                                    <RadarChart data1={secondData1} data2={secondData2} />
                                </div>
                            </div>
                            <div style={card}>
                                <div>???????????????</div>
                                <Swiper modules={[Navigation, Pagination]} pagination={{clickable:true}} className="mySwiper" >
                                    {
                                        goalCard?.map((list,index)=>
                                            <SwiperSlide key={index} style={{display:"flex",justifyContent: "left"}}>
                                                {
                                                    list.map((item,index)=>
                                                    item != undefined ? 
                                                    <div key={index} style={{margin: "10px"}}>
                                                        <GoalCard teacher="teacher" key={index} now={item.now} span={item.span} item={item.item} goalContent1={item.goal} color={item.color!="" ? item.color : "#FFAE80"} />
                                                    </div>
                                                    :<div key={index}></div>
                                                    )
                                                }
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>
                            <div style={card}>
                                <div>???????????????</div>
                                <Swiper modules={[Navigation, Pagination]} pagination={{clickable:true}} className="mySwiper" >
                                    {
                                        goalCard?.map((list,index)=>
                                            <SwiperSlide key={index} style={{display:"flex",justifyContent: "left"}}>
                                                {
                                                    list.map((item,index)=>
                                                    item != undefined ? 
                                                    <div key={index} style={{margin: "10px",display: item.result=="" ? "none":"block"}}>
                                                        <GoalCard teacher="teacher" span={item.span} now={item.now} item={item.item} goalContent1={item.item} goalContent2={item.result=="" ? null : item.result} ratio={item.ratio} color={item.color!="" ? item.color : "#FFAE80"} />
                                                    </div>
                                                    :<div key={index}></div>
                                                    )
                                                }
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>
                            <div style={record}>
                                <div style={{marginBottom: "25px"}}>????????????????????????</div>
                                <div style={{backgroundColor: "white",boxShadow: "1px 0px 10px rgba(114, 119, 122, .1)",borderRadius: "5px",display: "inline-block",padding: "20px 10px",marginLeft: "25px"}}>
                                    <div style={{display:"flex", fontSize:"14px"}}>
                                        <div style={{position: "relative",minHeight: "180px",padding: "20px"}}>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>?????????</div>
                                                <div>{data?.second_grader.recordmyself[0].activity}</div>
                                                <div>{data?.second_grader.recordmyself[0].activityRole}</div>
                                            </div>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>?????????</div>
                                                <div>{data?.second_grader.recordmyself[1].comittee}</div>
                                                <div>{data?.second_grader.recordmyself[1].comitteeRole}</div>
                                            </div>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>??????</div>
                                                <div>{data?.second_grader.recordmyself[2].qualifications}</div>
                                            </div>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>????????????</div>
                                                <div>{data?.second_grader.recordmyself[3].other_acitive}</div>
                                            </div>
                                            <div style={line}></div>
                                        </div>
                                        <div style={{position: "relative",minHeight: "180px",padding: "20px"}}>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>???????????????</div>
                                                <div>{data?.second_grader.recordmyself[4].interest}</div>
                                            </div>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>???????????????</div>
                                                <div>{data?.second_grader.recordmyself[5].weak_strong}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table style={{backgroundColor: "white",boxShadow: "1px 0px 10px rgba(114, 119, 122, .1)",borderRadius: "5px",display: "inline-block",margin: "80px 25px"}}>
                                    <tr style={{boxShadow: "0px 3px 3px rgba(114, 119, 122, .15)"}}>
                                        <th style={{padding:"20px 40px"}}></th>
                                        <th style={{padding:"20px 40px"}}>??????????????????????????????????????????</th>
                                        <th style={{padding:"20px 40px"}}>????????????????????????????????????????????????</th>
                                    </tr>
                                    <tr style={{backgroundColor:"rgba(114, 119, 122, .05)"}}>
                                        <th style={{padding:"30px"}}>???????????????</th>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.second_grader.yearinreview[0].effort}</td>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.second_grader.yearinreview[0].reflection}</td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:"30px"}}>????????????</th>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.second_grader.yearinreview[1].effort}</td>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.second_grader.yearinreview[1].reflection}</td>
                                    </tr>
                                    <tr style={{backgroundColor:"rgba(114, 119, 122, .05)"}}>
                                        <th style={{padding:"30px"}}>?????????????????????</th>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.second_grader.yearinreview[2].effort}</td>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.second_grader.yearinreview[2].reflection}</td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:"30px"}}>?????????????????????</th>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.second_grader.yearinreview[3].effort}</td>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.second_grader.yearinreview[3].reflection}</td>
                                    </tr>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div style={{fontSize:"22px",margin:"20px"}}>???????????????</div>
                        <div style={top}>
                                <div style={{backgroundColor: "white",boxShadow: "1px 0px 10px rgba(114, 119, 122, .1)",borderRadius: "5px",display: "inline-block",padding: "20px 10px",margin: "0 30px"}}>
                                    <RadarChart data1={thirdData1} data2={thirdData2} />
                                </div>
                            </div>
                            <div style={card}>
                                <div>???????????????</div>
                                <Swiper modules={[Navigation, Pagination]} pagination={{clickable:true}} className="mySwiper" >
                                    {
                                        goalCard?.map((list,index)=>
                                            <SwiperSlide key={index} style={{display:"flex",justifyContent: "left"}}>
                                                {
                                                    list.map((item,index)=>
                                                    item != undefined ? 
                                                    <div key={index} style={{margin: "10px"}}>
                                                        <GoalCard teacher="teacher" key={index} now={item.now} span={item.span} item={item.item} goalContent1={item.goal} color={item.color!="" ? item.color : "#FFAE80"} />
                                                    </div>
                                                    :<div key={index}></div>
                                                    )
                                                }
                                            </SwiperSlide>
                                        )
                                    }
                                </Swiper>
                            </div>
                            <div style={card}>
                                <div>???????????????</div>
                                <Swiper modules={[Navigation, Pagination]} pagination={{clickable:true}} className="mySwiper" >
                                    {
                                        goalCard?.map((list,index)=>
                                                {
                                                    list.map((item,index)=>
                                                    item != undefined ? 
                                                    <SwiperSlide key={index} style={{display:"flex",justifyContent: "left"}}>

                                                        <div key={index} style={{margin: "10px",display: item.result=="" ? "none":"block"}}>
                                                            <GoalCard teacher="teacher" span={item.span} now={item.now} item={item.item} goalContent1={item.item} goalContent2={item.result=="" ? null : item.result} ratio={item.ratio} color={item.color!="" ? item.color : "#FFAE80"} />
                                                        </div>
                                                    </SwiperSlide>
                                                    :<div key={index} style={{display: "none"}}></div>
                                                    )
                                                }
                                            
                                        )
                                    }
                                </Swiper>
                            </div>
                            <div style={record}>
                                <div style={{marginBottom: "25px"}}>????????????????????????</div>
                                <div style={{backgroundColor: "white",boxShadow: "1px 0px 10px rgba(114, 119, 122, .1)",borderRadius: "5px",display: "inline-block",padding: "20px 10px",marginLeft: "25px"}}>
                                    <div style={{display:"flex", fontSize:"14px"}}>
                                        <div style={{position: "relative",minHeight: "180px",padding: "20px"}}>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>?????????</div>
                                                <div>{data?.third_grader.recordmyself[0].activity}</div>
                                                <div>{data?.third_grader.recordmyself[0].activityRole}</div>
                                            </div>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>?????????</div>
                                                <div>{data?.third_grader.recordmyself[1].comittee}</div>
                                                <div>{data?.third_grader.recordmyself[1].comitteeRole}</div>
                                            </div>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>??????</div>
                                                <div>{data?.third_grader.recordmyself[2].qualifications}</div>
                                            </div>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>????????????</div>
                                                <div>{data?.third_grader.recordmyself[3].other_acitive}</div>
                                            </div>
                                            <div style={line}></div>
                                        </div>
                                        <div style={{position: "relative",minHeight: "180px",padding: "20px"}}>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>???????????????</div>
                                                <div>{data?.third_grader.recordmyself[4].interest}</div>
                                            </div>
                                            <div style={{display:"flex", margin:"20px 10px"}}>
                                                <div style={{fontWeight: "bold", width: "100px"}}>???????????????</div>
                                                <div>{data?.third_grader.recordmyself[5].weak_strong}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table style={{backgroundColor: "white",boxShadow: "1px 0px 10px rgba(114, 119, 122, .1)",borderRadius: "5px",display: "inline-block",margin: "80px 25px"}}>
                                    <tr style={{boxShadow: "0px 3px 3px rgba(114, 119, 122, .15)"}}>
                                        <th style={{padding:"20px 40px"}}></th>
                                        <th style={{padding:"20px 40px"}}>??????????????????????????????????????????</th>
                                        <th style={{padding:"20px 40px"}}>????????????????????????????????????????????????</th>
                                    </tr>
                                    <tr style={{backgroundColor:"rgba(114, 119, 122, .05)"}}>
                                        <th style={{padding:"30px"}}>???????????????</th>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.third_grader.yearinreview[0].effort}</td>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.third_grader.yearinreview[0].reflection}</td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:"30px"}}>????????????</th>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.third_grader.yearinreview[1].effort}</td>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.third_grader.yearinreview[1].reflection}</td>
                                    </tr>
                                    <tr style={{backgroundColor:"rgba(114, 119, 122, .05)"}}>
                                        <th style={{padding:"30px"}}>?????????????????????</th>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.third_grader.yearinreview[2].effort}</td>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.third_grader.yearinreview[2].reflection}</td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:"30px"}}>?????????????????????</th>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.third_grader.yearinreview[3].effort}</td>
                                        <td style={{padding:"20px", fontSize:"14px"}}>{data?.third_grader.yearinreview[3].reflection}</td>
                                    </tr>
                                </table>
                            </div>                        </TabPanel>
                    </div>
                </div>
            </Tabs>
        </div>
            
    </div>
  )
};

export default TeachersConsole;