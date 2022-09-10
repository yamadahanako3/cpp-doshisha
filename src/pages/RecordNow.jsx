import {Header} from '../molecules/index';
import finished from '../images/finished.png';
import unfinished from '../images/unfinished.png';
import { useState } from 'react';
import { InputButton, CreateButton } from '../atoms/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { getDoc, doc } from 'firebase/firestore';
import { useAuthContext } from '../context/Authcontext';
import { useEffect } from 'react';
import { db } from '../firebase';
import Template from '../template.json';

const template = Template.yearinreview;

const RecordNow = () => {

    const { user } = useAuthContext();
    const [myselfData, setMyself] = useState(["","","","","","",""]);
    const [year, setYear] = useState(null);
    const userDocumentRef = doc(db, 'users',user.uid);

    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            const parent = data.first_grader;
            let lists1 = [];
            let lists2 = [];

            lists1 = [
                parent.recordnow?.activity,
                parent.recordnow?.activityRole,
                parent.recordnow?.comittee,
                parent.recordnow?.comitteeRole,
                parent.recordnow?.qualifications,
                parent.recordnow?.other_acitive,
                parent.recordnow?.interest,
                parent.recordnow?.weak_strong
            ];

            for (let i in parent.yearinreview){
                lists2.push(parent.yearinreview[i]);
            };

            setMyself(lists1);
            setYear(lists2);
            console.log(lists2);
            console.log("a");
        })
    },[])

    const body = {
        margin: "20px"
    }
    const title = {
        color: "#1A4F83",
        fontSize: "24px",
        paddingTop: "80px"
    }
    const bookmark = {
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        textAlign: "left",
        width: "280px",
        fontSize: "16px",
        color: "#1A4F83",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "white",
        boxShadow: "0px 2px 10px rgba(26, 79, 131, .1)",
    }
    const theme1 = {
        marginLeft: "5px",
        padding: "15px 15px",
        fontSize: "15px",
        borderLeft: "1px solid #FFAE80"
    }
    const theme2 = {
        marginLeft: "5px",
        padding: "15px 15px",
        fontSize: "15px",
        borderLeft: "1px solid #BC9CFF"
    }
    const theme3 = {
        marginLeft: "5px",
        padding: "15px 15px",
        fontSize: "15px",
        borderLeft: "1px solid #EA3165"
    }
    const abilityName = {
        color: "#1A4F83",
        margin: "0 20px 0 0",
        fontSize: "15px",
    }
    const content = {
        margin: 0,
        width: "190px",
        fontSize: "13px",
        whiteSpace:"nowrap",
        overflow:"hidden",
        textOverflow:"ellipsis",
    }
 
    const line = {
        width: "292px",
        height: ".5px",
        backgroundColor: "rgba(26, 79, 131, .1)"

    }


    return (
        <div style={{backgroundColor: "#F4F6F9",minHeight: "100vh"}}>
            <Header />
            <div style={body}>
                <div style={title}>高校一年生の記録</div>
                <div style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",marginBottom: "50px"}}>
                    <div style={bookmark}>
                        <div style={theme1}>部活動</div>
                        <div>
                            <p style={abilityName}>{myselfData[0]}</p>
                            <p style={content}>{myselfData[1]}</p>
                        </div>
                    </div>
                    <div style={bookmark}>
                        <div style={theme2}>委員会</div>
                        <div>
                            <p style={abilityName}>{myselfData[2]}</p>
                            <p style={content}>{myselfData[3]}</p>
                        </div>
                    </div>
                    <div style={bookmark}>
                        <div style={theme3}>資格</div>
                        <div>
                            <p style={abilityName}>{myselfData[4]}</p>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"center"}}>

                    <CreateButton text="記録する" link="/recordmyself" />
                </div>
                <div style={title}>１年の振り返り</div>
                
                <div>
                    <Swiper modules={[Navigation, Pagination]} pagination={{clickable:true}} className="mySwiper" >
                        
                        {
                            year?.map((list, index)=>
                            <SwiperSlide key={index} style={{paddingBottom: "50px"}}>
                                <div style={{margin:"0 auto",borderStyle:"solid",borderColor:template[index].color,borderRadius:"10px",color:"#1A4F83",fontWeight: "bold"}}>
                                    <div style={{backgroundColor: template[index].backColor,padding: "10px"}}>{template[index].title}</div>
                                    <div style={{width: "292px",height: "60px", display: "flex",alignItems: "center"}}>
                                        <img style={{paddingRight: "20px",paddingLeft: "20px"}} src={finished} />
                                        <div style={abilityName}>{list.effort}</div>
                                    </div>
                                    <div style={line}></div>
                                    <div style={{width: "292px",height: "60px", display: "flex",alignItems: "center"}}>
                                        <img style={{paddingRight: "20px",paddingLeft: "20px"}} src={unfinished} />
                                        <div style={abilityName}>{list.reflection}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                            )
                        }
                    </Swiper>
                    <CreateButton text="記録する" link="/YearInReview" />
                </div>
            </div>

            <InputButton />
        </div>
    );
};

export default RecordNow;