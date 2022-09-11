import { Header } from '../molecules/index';
 
const AboutCareerPassport = () => {
  const body = {
    width: "70vw",
    padding: "80px 20px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 2px 10px rgba(26, 79, 131, .1)",
  }
  const title = {
    color: "rgba(26, 79, 131, 1)",
    fontSize: "20px",
}
const text = {
    color: "rgba(26, 79, 131, .75)",
    fontSize: "12px",
  }

  return (
    <div>
      <Header />
      <div style={body}>
        <div style={title}>キャリアパスポートについて</div>
        <p style={text}>
        　人は、他者や社会のとのかかわりの中で、様々な役割を担いながら生きています。私たちは、自分の役割を果たして活動すること、つまり「働くこと」を通して、人や社会にかかわることになります。そのかかわり方の違いか'「自分らしい生き方」となっていくものです。<br />
        　このように、人が、生涯の中で様々な役割を果たす過程で、自らの役割の価値や自分と役割との関係を見いだしていく連なりや積み重ねが、「キャリア」の意味するところです。<br /><br />

        みなさんには、授業や学校行事、部活動などでの様々な体験や学びを通して、<span style={{color:"#43CBC3", borderBottom:"1px solid #43CBC3"}}>卒業までに身に付けてほしい力</span>を成長させてほしいと思います。<br />
        そして、 このような力をどのようにして獲得していったか、その過程を振り返るためにこのキャリアパスポートは利用されます。それは自分自身を振り返ることであり、同時に次のステップに向かって進むべき方向を示してくれるものとなります。<br />
        アルバムが自分たちの「見た目」の記録だとすれぱ、キャリア・パスボートは「心」や「知識成熟度」、「人間力」の記録だと言えます。しっかりと自分を表現してください。そして、この「キャリア・パスポート」で、高校生活を見通したり振り返ったりしながら、学びの履歴を積み重ねていくことが、みなさんの今後の人生を創っていくための「道しるべ」になることを願っています。　<br />
        </p>
      </div>
    </div>
  )
}

export default AboutCareerPassport;