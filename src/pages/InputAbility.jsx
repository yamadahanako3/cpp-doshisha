import { Header, Footer } from '../molecules/index';
import { CreateSlider } from '../atoms/index';
import React from 'react';

const InputAbility = () => {
    const body = {
        width: "80vw",
        margin: "20px auto",
    }
    const title = {
        fontSize: "23px",
        color: "rgba(26, 79, 131, .75)"
    }
    const underTitle = {
        marginTop: "3px",
        marginBottom: "30px",
        color: "#43CBC3",
        fontWeight: "bold",
        display: "inline-block",
        borderBottom: "1px solid #43CBC3"
    }
    const label = {
        marginLeft: "-10px",
        color: "rgba(26, 79, 131, .75)",
        fontWeight: "bold"
    }

    return (
        <div>
            <Header />
            <div style={body}>
                <div style={title}>自分自身を評価しよう</div>
                <p style={underTitle}>卒業までに身に付けたい力について</p>
                <div style={{marginLeft:"30px"}}>
                    <div>
                        <label style={label}>能力</label>
                        <CreateSlider color="#FFAE80" />
                    </div>
                    <div>
                        <label style={label}>能力</label>
                        <CreateSlider color="#BC9CFF" />
                    </div>
                    <div>
                        <label style={label}>能力</label>
                        <CreateSlider color="#EA3165" />
                    </div>
                    <div>
                        <label style={label}>能力</label>
                        <CreateSlider color="#43CBC3" />
                    </div>
                    <div>
                        <label style={label}>能力</label>
                        <CreateSlider color="#E282D9" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default InputAbility;