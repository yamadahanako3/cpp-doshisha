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

const RecordNow = () => {

    const { user } = useAuthContext();
    const [myselfData, setMyself] = useState(null);
    const [year, setYear] = useState(null);
    const [finishedSentence, setFinishedSentence] = useState(null);
    const [unFinishedSentence, setUnFinishedSentence] = useState(null);
    const userDocumentRef = doc(db, 'users',user.uid);

    useEffect(()=>{
        getDoc(userDocumentRef).then((ref)=>{
            const data = ref.data();
            const parent = data.first_grader;
            let lists1 = [];
            let lists2 = [];

            lists1 = [
                parent.recordnow.activity,
                parent.recordnow.activityRole,
                parent.recordnow.comittee,
                parent.recordnow.comitteeRole,
                parent.recordnow.qualifications,
                parent.recordnow.other_acitive,
                parent.recordnow.interest,
                parent.recordnow.weak_strong
            ];

            setMyself(lists1);
            console.log("a");
        })
    },[])

    const handleClick1 = () => {
        setFinishedSentence("毎日英単語長を続続けた1");
        setUnFinishedSentence("数学の苦手な分野まで手が回らなかった");
    }
    const handleClick2 = () => {
        setFinishedSentence("毎日英単語長を続続けた2");
        setUnFinishedSentence("数学の苦手な分野まで手が回らなかった");
    }
    const handleClick3 = () => {
        setFinishedSentence("毎日英単語長を続続けた3");
        setUnFinishedSentence("数学の苦手な分野まで手が回らなかった");
    }
    const handleClick4 = () => {
        setFinishedSentence("毎日英単語長を続続けた4");
        setUnFinishedSentence("数学の苦手な分野まで手が回らなかった");
    }

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
    const label1 = {
        fontSize: "15px",
        backgroundColor: "#FFAE80",
        borderRadius: "5px 5px 0px 0px",
        width: "73px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const label2 = {
        fontSize: "15px",
        backgroundColor: "#BC9CFF",
        borderRadius: "5px 5px 0px 0px",
        width: "73px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const label3 = {
        fontSize: "15px",
        backgroundColor: "#EA3165",
        borderRadius: "5px 5px 0px 0px",
        width: "73px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const label4 = {
        fontSize: "15px",
        backgroundColor: "#8FCB43",
        borderRadius: "5px 5px 0px 0px",
        width: "73px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const line = {
        width: "292px",
        height: ".5px",
        backgroundColor: "rgba(26, 79, 131, .1)"

    }
    const notepad = {
        boxShadow: "0px 2px 10px rgba(0, 0, 0, .14)",
        borderRadius: "5px",
        width: "292px"
    }

    const slide = {
        margin: "0 auto",
        border: "1px solid #FFAE80",
        borderRadius: "10px",
        color: "#1A4F83",
        fontWeight: "bold"
    }
    const slideContent = {
        backgroundColor: "rgba(255, 174, 128, .1)",
        padding: "10px"
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
                            <p style={abilityName}>サッカー部</p>
                            <p style={content}>{myselfData[4]}</p>
                        </div>
                    </div>
                </div>
                    <CreateButton text="記録する" link="/recordmyself" />
                <div style={title}>１年の振り返り</div>
                {/* <div style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center",marginTop: "20px"}}>
                    <div style={notepad}>
                        <div style={{display:"flex",color: "white"}}>
                            <div style={label1} onClick={handleClick1}>学習</div>
                            <div style={label2} onClick={handleClick2}>行事</div>
                            <div style={label3} onClick={handleClick3}>学内活動</div>
                            <div style={label4} onClick={handleClick4}>学外活動</div>
                        </div>
                        <div>
                            <div style={{width: "292px",height: "60px", display: "flex",alignItems: "center"}}>
                                <img style={{paddingRight: "20px",paddingLeft: "20px"}} src={finished} />
                                <div style={abilityName}>{finishedSentence}</div>
                            </div>
                            <div style={line}></div>
                            <div style={{width: "292px",height: "60px", display: "flex",alignItems: "center"}}>
                                <img style={{paddingRight: "20px",paddingLeft: "20px"}} src={unfinished} />
                                <div style={abilityName}>{unFinishedSentence}</div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div>
                    <Swiper modules={[Navigation, Pagination]} pagination={{clickable:true}} className="mySwiper" >
                        <SwiperSlide style={{paddingBottom: "50px"}}>
                            <div style={slide}>
                                <div style={slideContent}>授業・学習</div>
                                <div style={{width: "292px",height: "60px", display: "flex",alignItems: "center"}}>
                                    <img style={{paddingRight: "20px",paddingLeft: "20px"}} src={finished} />
                                    <div style={abilityName}>{finishedSentence}</div>
                                </div>
                                <div style={line}></div>
                                <div style={{width: "292px",height: "60px", display: "flex",alignItems: "center"}}>
                                    <img style={{paddingRight: "20px",paddingLeft: "20px"}} src={unfinished} />
                                    <div style={abilityName}>{unFinishedSentence}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{paddingBottom: "50px"}}>
                            <div style={slide}>
                                <div style={slideContent}>授業・学習</div>
                                <div style={{width: "292px",height: "60px", display: "flex",alignItems: "center"}}>
                                    <img style={{paddingRight: "20px",paddingLeft: "20px"}} src={finished} />
                                    <div style={abilityName}>{finishedSentence}</div>
                                </div>
                                <div style={line}></div>
                                <div style={{width: "292px",height: "60px", display: "flex",alignItems: "center"}}>
                                    <img style={{paddingRight: "20px",paddingLeft: "20px"}} src={unfinished} />
                                    <div style={abilityName}>{unFinishedSentence}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{paddingBottom: "50px"}}>
                            <div style={slide}>
                                <div style={slideContent}>授業・学習</div>
                                <div style={{width: "292px",height: "60px", display: "flex",alignItems: "center"}}>
                                    <img style={{paddingRight: "20px",paddingLeft: "20px"}} src={finished} />
                                    <div style={abilityName}>{finishedSentence}</div>
                                </div>
                                <div style={line}></div>
                                <div style={{width: "292px",height: "60px", display: "flex",alignItems: "center"}}>
                                    <img style={{paddingRight: "20px",paddingLeft: "20px"}} src={unfinished} />
                                    <div style={abilityName}>{unFinishedSentence}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{paddingBottom: "50px"}}>
                            <div style={slide}>
                                <div style={slideContent}>授業・学習</div>
                                <div style={{width: "292px",height: "60px", display: "flex",alignItems: "center"}}>
                                    <img style={{paddingRight: "20px",paddingLeft: "20px"}} src={finished} />
                                    <div style={abilityName}>{finishedSentence}</div>
                                </div>
                                <div style={line}></div>
                                <div style={{width: "292px",height: "60px", display: "flex",alignItems: "center"}}>
                                    <img style={{paddingRight: "20px",paddingLeft: "20px"}} src={unfinished} />
                                    <div style={abilityName}>{unFinishedSentence}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>

            <InputButton />
        </div>
    );
};

export default RecordNow;