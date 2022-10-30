import {Header} from '../molecules/index';
import finished from '../images/finished.png';
import unfinished from '../images/unfinished.png';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { getDoc, doc } from 'firebase/firestore';
import { useAuthContext } from '../context/Authcontext';
import { useEffect } from 'react';
import { db } from '../firebase';
import Template from '../template.json';
import { useNavigate, useLocation } from 'react-router-dom';

const template = Template.yearinreview;

const RecordNow = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [myselfData, setMyself] = useState(["","","","","","","",""]);
    const [year, setYear] = useState(null);
    const userDocumentRef = doc(db, 'users',user.uid);
    const [grade, setGrade] = useState(location.state ? location.state.grade : "");
    const text = grade==null ? "":"高校"+grade+"年生の記録";

    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            let parent;
            if(grade == 1){
                parent = data.first_grader;
            }else if(grade == 2){
                parent = data.second_grader;
            }else if(grade == 3){
                parent = data.third_grader;
            }
            let lists1 = [];
            let lists2 = [];
            for (let i in parent.recordmyself){
                lists1.push(parent.recordmyself[i]);
            };

            for (let i in parent.yearinreview){
                lists2.push(parent.yearinreview[i]);
            };
            console.log("a");
            setMyself(lists1);
            setYear(lists2);
        })
    },[])

    const handleClick1 = () => {
        navigate('/recordmyself', {state:{myselfData:myselfData}});
    }

    const handleClick2 = () => {
        navigate('/YearInReview', {state:{yearData:year}});
    }

    const body = {
        margin: "0 20px"
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
        borderLeft: "1px solid #43CBC3"
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
        borderLeft: "1px solid #FFAE80"
    }
    const theme4= {
        marginLeft: "5px",
        padding: "15px 15px",
        fontSize: "15px",
        borderLeft: "1px solid #8FCB43"
    }
    const theme5= {
        marginLeft: "5px",
        padding: "15px 15px",
        fontSize: "15px",
        borderLeft: "1px solid #3191EA"
    }
    const theme6= {
        marginLeft: "5px",
        padding: "15px 15px",
        fontSize: "15px",
        borderLeft: "1px solid #EA3165"
    }
    const abilityName = {
        color: "#1A4F83",
        margin: "0 20px 0 0",
        fontSize: "15px",
        whiteSpace:"nowrap",
        overflow:"hidden",
        textOverflow:"ellipsis",
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
    const record = {
        textAlign: "left",
        padding: "15px",
        width: "280px",
        marginBottom: "20px",
        fontSize: "16px",
        color: "#1A4F83",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "white",
        boxShadow: "0px 2px 10px rgba(26, 79, 131, .1)",
    }


    return (
        <div style={{backgroundColor: "#F4F6F9",minHeight: "100vh",paddingBottom: "20px"}}>
            <Header />
            <div style={body}>
                <div style={title}>{text}</div>
                <div style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",marginBottom: "50px"}}>
                    {

                    }
                    <div style={bookmark}>
                        <div style={theme1}>部活動</div>
                        <div>
                            <p style={abilityName}>{myselfData[0].activity}</p>
                            <p style={content}>{myselfData[0].activityRole}</p>
                        </div>
                    </div>
                    <div style={bookmark}>
                        <div style={theme2}>委員会</div>
                        <div>
                            <p style={abilityName}>{myselfData[1].comittee}</p>
                            <p style={content}>{myselfData[1].comitteeRole}</p>
                        </div>
                    </div>
                    <div style={bookmark}>
                        <div style={theme3}>資格</div>
                        <div>
                            <p style={abilityName}>{myselfData[2].qualifications}</p>
                        </div>
                    </div>
                    <div style={bookmark}>
                        <div style={theme4}>学外活動</div>
                        <div>
                            <p style={abilityName}>{myselfData[3].other_acitive}</p>
                        </div>
                    </div>
                    <div style={bookmark}>
                        <div style={theme5}>興味・関心</div>
                        <div>
                            <p style={abilityName}>{myselfData[4].interest}</p>
                        </div>
                    </div>
                    <div style={bookmark}>
                        <div style={theme6}>長所・短所</div>
                        <div>
                            <p style={abilityName}>{myselfData[5].weak_strong}</p>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <div style={record} onClick={()=>navigate('/recordmyself', {state:{myselfData:myselfData,grade:grade}})}>記録する</div>
                </div>
                <div style={title}>１年の振り返り</div>

                <div>
                    <Swiper modules={[Navigation, Pagination]} pagination={{clickable:true}} className="mySwiper" >

                        {
                            year?.map((list, index)=>
                            <SwiperSlide key={index} style={{paddingBottom: "50px"}}>
                                <div style={{
                                    margin:"0 auto",
                                    borderStyle:"solid",
                                    borderColor:template[index].color,
                                    borderWidth:"1px",
                                    borderRadius:"10px",
                                    color:"#1A4F83",
                                    fontWeight: "bold",
                                    backgroundColor: "white"}}>
                                    <div style={
                                        {backgroundColor: template[index].backColor,
                                        padding: "10px"}}>
                                            {template[index].title}
                                    </div>
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
                </div>
                <div style={record} onClick={()=>navigate('/YearInReview', {state:{yearData:year,grade:grade}})}>記録する</div>
            </div>
        </div>
    );
};

export default RecordNow;