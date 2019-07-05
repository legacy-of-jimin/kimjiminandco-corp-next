import React, { Component } from "react";
import Link from "next/link";
import Slider from "react-slick";
import C3Chart from "react-c3js";
import "@/static/stylesheets/app.scss";
import "@/static/stylesheets/home.scss";
import "c3/c3.min.css";

export default class HomeComponent extends Component {
  //projects = this.shuffle([
  projects = [
    {
      title: "쿠잉 - 유튜브로 배우는 현지 영어",
      description:
        "메가넥스트의 셀프 영어 학습 앱, 쿠잉의 안드로이드/iOS/웹 버전을 개발하였습니다.",
      btns: [
        {
          text: "Android",
          link:
            "https://play.google.com/store/apps/details?id=com.meganext.cooing"
        },
        {
          text: "iOS",
          link: "https://itunes.apple.com/us/app/cooing/id1330888189?mt=8"
        },
        {
          text: "Web",
          link: "https://www.cooing.tv/"
        }
      ]
    },
    {
      title: "좋은생각사람들",
      description:
        "좋은생각 2017 리뉴얼 홈페이지를 Node.js 기반으로 개발하였습니다.",
      btns: [
        {
          text: "Web",
          link: "https://www.positive.co.kr"
        }
      ]
    },
    {
      title: "루트에너지",
      description:
        "루트에너지 P2P 투자 플랫폼을 Node.js / Reactjs 기반으로 개발하였습니다(NH P2P API).",
      btns: [
        {
          text: "Web",
          link: "https://www.rootenergy.co.kr"
        }
      ]
    },
    {
      title: "DOWING",
      description:
        "크라우드펀딩 배송 업무 서비스 두윙을 Node.js / Reactjs 기반으로 개발하였습니다.",
      btns: [
        {
          text: "Web",
          link: "http://www.do-wing.com"
        }
      ]
    },
    {
      title: "피플펀드",
      description:
        "Facebook, Kakao OAuth 2.0 API 연동 부문과 UI 개발 부문을 보조하였습니다.",
      btns: [
        {
          text: "Web",
          link: "https://www.peoplefund.co.kr"
        }
      ]
    },
    {
      title: "서울대학교 사회학과",
      description:
        "서울대학교 사회학과 홈페이지를 Node.js 기반으로 개발하였습니다.",
      btns: [
        {
          text: "Web",
          link: "http://sociology.snu.ac.kr/"
        }
      ]
    },
    {
      title: "JT 금융그룹",
      description:
        "개발사에 시스템 설계를 지원하고 AWS 운용 가이드를 제공하였습니다(CloudFront, EC2 Load balancer).",
      btns: [
        {
          text: "Android",
          link:
            "https://play.google.com/store/apps/details?id=co.kr.jt_group.jtapp"
        },
        {
          text: "iOS",
          link:
            "https://itunes.apple.com/kr/app/jt금융그룹-jjumpy-friends/id1426232128?mt=8"
        },
        {
          text: "Web",
          link: "https://www.jt-group.co.kr"
        }
      ]
    }
  ];

  //workedfor = this.shuffle([{
  workedfor = [
    {
      fileName: "tomntoms.png",
      brandName: "탐앤탐스"
    },
    {
      fileName: "cjenm.png",
      brandName: "씨제이이엔엠"
    },
    {
      fileName: "lge.png",
      brandName: "LG전자",
      padding: "8px 0"
    },
    {
      fileName: "tck.png",
      brandName: "트랜스코스모스",
      padding: "4px 0"
    },
    {
      fileName: "megaNEXT.gif",
      brandName: "메가넥스트",
      padding: "8px 0"
    },
    {
      fileName: "easeandmore.png",
      brandName: "이지앤모어",
      padding: "12px 0"
    },
    {
      fileName: "nolgong.jpeg",
      brandName: "놀공",
      padding: "8px 0"
    },
    {
      fileName: "snu-css.png",
      brandName: "서울대학교 사회과학",
      padding: "8px 0"
    },
    {
      fileName: "poti.png",
      brandName: "좋은생각사람들",
      padding: "10px 0"
    },
    {
      fileName: "fasoo.png",
      brandName: "파수",
      padding: "10px 0"
    },
    {
      fileName: "honestfund.svg",
      brandName: "어니스트펀드",
      padding: "8px 0"
    },
    {
      fileName: "peoplefund.png",
      brandName: "피플펀드",
      padding: "8px 0"
    },
    {
      fileName: "dohands.png",
      brandName: "두손컴퍼니",
      padding: "4px 0"
    }
  ];

  state = {
    members: [
      "김지민",
      "김아영",
      "이진규",
      "이다정",
      "전새암",
      "김강일",
      "김보미",
    ],
    projects: [],
    workedfor: []
  };
  componentDidMount() {
    // this.setState({
    //   members: this.shuffle(this.state.members)
    // }, () => {
    //   console.log('member count', this.state.members.length)
    // })
    this.setState({
      projects: this.shuffle(this.projects),
      workedfor: this.shuffle(this.workedfor)
    });
  }
  shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  render() {
    const settings = {
      centerPadding: "80px",
      centerMode: true,
      dots: false,
      infinite: true,
      autoplay: false,
      speed: 500,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            centerMode: true,
            centerPadding: "100px",
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            centerMode: true,
            centerPadding: "30px",
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: "30px",
            slidesToShow: 1
          }
        }
      ]
    };

    const c3Options = {
      data: {
        type: "bar",
        x: "x",
        columns: [
          [
            "x",
            "2013-12-31",
            "2014-12-31",
            "2015-12-31",
            "2016-12-31",
            "2017-12-31",
            "2018-12-31"
          ],
          ["매출액(억 원)", 0.2348, 0.833, 1.9166, 2.8082, 4.1, 6.9751],
          ["상시 고용 인원(명)", 2, 4, 3, 3, 14, 13]
        ]
      },
      color: {
        pattern: ["#0039a6", "#eeeeee"]
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%Y"
          }
        }
      }
    };

    return [
      <div id="main">
        <div className="container">
          <div className="main__title">
            {" "}
            반갑습니다, <b>김지민앤컴퍼니</b>입니다.
            <br />
            저희는 웹사이트 개발/웹디자인 아웃소싱 프로젝트를
            <br />
            주로 수행하고 있습니다.
            <br /><br />
            <i>* 2019년 6월 첫 주부터 위워크 홍대점으로 이전합니다.</i>
          </div>
          <section className="section section-ourstories">
            <div className="section__header">
              <div className="section__header__title">AVAILABILITY</div>
              <div className="section__header__desc">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Team</th>
                      <th>Availability</th>
                    </tr>
                    <tr>
                      <td>Web / Publishing</td>
                      <td>
                        중소규모 프로젝트를 7월 중순부터 착수할 수 있습니다.
                      </td>
                    </tr>
                    <tr>
                      <td>Design</td>
                      <td>
                        중소규모 프로젝트를 7월 중순부터 착수할 수 있습니다.
                      </td>
                    </tr>
                    <tr>
                      <td>iOS/Android</td>
                      <td>사업구조 개편으로 인해 기존 운영하던 앱 개발 부문을 19년 4월까지만 운영하게 되었습니다.</td>
                    </tr>
                  </thead>
                </table>
                <p>* 2019년 5월 16일 기준입니다.</p>
              </div>
            </div>
          </section>

          {/* <section className="section section-ourstories">
            <div className="section__header">
              <div className="section__header__title">WE MADE</div>
              <div className="section__header__desc">
                사내 아이디어로 만든 자체 서비스입니다.
                <br />
                <br />
                <a
                  href="https://itunes.apple.com/us/app/%EC%9B%A8%EC%9D%B4%ED%99%88-wayhom/id1436939803"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="웨이홈 WAYHOM"
                >
                  <span>웨이홈 - 안심귀가 보조 서비스</span>
                  <b>Go &#62;</b>
                </a>
                <br />
                <a
                  href="https://itunes.apple.com/us/developer/%EA%B9%80%EC%A7%80%EB%AF%BC%EC%95%A4%EC%BB%B4%ED%8D%BC%EB%8B%88/id1362978517"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="기타 iOS 출시 앱"
                >
                  <span>기타 iOS 출시 앱</span>
                  <b>Go &#62;</b>
                </a>
                <br />
                <a
                  href="https://play.google.com/store/apps/developer?id=KimJimin+and+Company"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="기타 Android 출시 앱"
                >
                  <span>기타 Android 출시 앱</span>
                  <b>Go &#62;</b>
                </a>
              </div>
            </div>
          </section> */}
          <section className="section section-ourworks">
            <div className="section__header">
              <div className="section__header__title">OUR WORKS</div>
              <div className="section__header__desc">
                아래의 외주 프로젝트들을 진행했습니다.
              </div>
            </div>
            <Slider {...settings} className="slider">
              {this.state.projects.map((item, index) => {
                return (
                  <div key={index} className="slider__item">
                    <div className="slider__item__box">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="slide__item__btns">
                        {item.btns.map((btn, idx) => {
                          return [
                            <a
                              key={idx}
                              className="btn btn-xs btn-eddy"
                              href={btn.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {btn.text}
                            </a>,
                            "\u00A0"
                          ];
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </section>
          <section className="section section-ourworks">
            <div className="section__header">
              <div className="section__header__title">WORKED FOR/WITH</div>
              <div className="section__header__desc">
                {this.state.workedfor.map(
                  ({ fileName, brandName, padding }, index) => {
                    return (
                      <img
                        key={index}
                        src={`/static/images/worked-for/${fileName}`}
                        alt={brandName}
                        title={brandName}
                        style={{
                          height: "36px",
                          margin: "4px 12px",
                          padding: padding
                        }}
                      />
                    );
                  }
                )}
                <p>&nbsp;</p>
              </div>
            </div>
          </section>
          <section className="section section-agency">
            <div className="section__header">
              <div className="section__header__title">
                LIGHT AND EFFICIENT
                <br />
                DIGITAL AGENCY
              </div>
              <div className="section__header__desc">
                저희는 가볍고 효율적인 디지털 에이전시를 추구합니다.
                <br />
                중소규모 홈페이지/웹 애플리케이션을 개발하기에 적합한 역량을 지니고
                있습니다.
              </div>
            </div>
            <div className="section__content">
              <div className="section__content__item">
                <div className="title">- MASH UP</div>
                <div className="desc">
                  Facebook, Kakao 등 오픈 API와 지도, 차트 등 다양한 라이브러리
                  연동 경험이 풍부합니다.
                  <br />
                  네이버 블로그 크롤링 등 네트워크 수집을 위한 정제된 코드를
                  보유하고 있습니다.
                </div>
              </div>
              <div className="section__content__item">
                <div className="title">- DEVELOPMENT</div>
                <div className="desc">
                  Node.js, MySQL을 조합하여 웹 애플리케이션을 잘 만들 수
                  있습니다.
                  <br />웹 표준에 충실한 HTML/CSS 퍼블리싱을 수행할 수 있으며
                  Front-end 프레임워크로 React를 도입하고 있습니다.
                </div>
              </div>
              <div className="section__content__item">
                <div className="title">- PRODUCTIVITY</div>
                <div className="desc">
                  GitHub을 활용해 문서와 코드의 버전을 관리합니다.
                  <br />
                  npm, gulp 등 응용 가능한 모듈의 연동을 효과적으로 수행할 수
                  있는 소프트웨어에 능숙합니다.
                  <br />
                  아마존 웹 서비스와 구글 클라우드 플랫폼 활용에 익숙합니다.
                  <br />
                  생산성에 도움을 줄 수 있는 여러 서비스에 매월 상당한 외화를
                  지불하고 있습니다.
                </div>
              </div>
            </div>
          </section>
          {/* 단순히 이름만 나열하는 건 임팩트가 약해 보여서 추후 개선 <section className="section section-members">
            <div className="section__header">
              <div className="section__header__title">MEMBERS</div>
              <div className="section__header__desc">
                {this.state.members.join(', ')}
              </div>
            </div>
          </section> */}
          <section className="section section-ourstories">
            <div className="section__header">
              <div className="section__header__title">OUR STORIES</div>
              <div className="section__header__desc">
                <a
                  href="https://medium.com/kimjimin-company"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/static/images/icon_medium.svg" alt="medium blog" />
                  <span>Medium Blog</span>
                  <b>Go &#62;</b>
                </a>
                <br />
                <a
                  href="https://www.behance.net/kimjiminandco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/static/images/icon_behance.svg" alt="Behance" />
                  <span>Behance</span>
                  <b>Go &#62;</b>
                </a>
              </div>
            </div>
          </section>
          <section className="section section-statistics">
            <div className="section__header">
              <div className="section__header__title">CREDIT &amp; FINANCE</div>
              <div className="section__header__desc">
                <div>
                  발주하신 프로젝트가 재무적 요인으로 실패하지 않게, 내부
                  구성원들이 재무적 요인으로 업무 집중도를 잃지 않게 안정적으로
                  운영하고 있습니다.
                </div>
                <div style={{ marginTop: "24px", marginBottom: "24px" }}>
                  <table className="table">
                    <colgroup>
                      <col />
                      <col width="15%" />
                      <col width="15%" />
                      <col width="15%" />
                      <col width="15%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th />
                        <th className="text-center">2016</th>
                        <th className="text-center">2017</th>
                        <th className="text-center">2018</th>
                        <th className="text-center">2019</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>기술보증기금</th>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">벤처확인 (2/13)</td>
                      </tr>
                      <tr>
                        <th>나이스디앤비 TCB</th>
                        <td className="text-center">-</td>
                        <td className="text-center">T-6</td>
                        <td className="text-center">T-5</td>
                        <td className="text-center">-</td>
                      </tr>
                      <tr>
                        <th>나이스평가정보 기업평가</th>
                        <td className="text-center">-</td>
                        <td className="text-center">-</td>
                        <td className="text-center">B+ (6/1)</td>
                        <td className="text-center">-</td>
                      </tr>
                      <tr>
                        <th>자산총계(백만)</th>
                        <td className="text-right">84</td>
                        <td className="text-right">133</td>
                        <td className="text-right">262</td>
                        <td className="text-center">-</td>
                      </tr>
                      <tr>
                        <th>부채총계(백만)</th>
                        <td className="text-right">58</td>
                        <td className="text-right">75</td>
                        <td className="text-right">93</td>
                        <td className="text-center">-</td>
                      </tr>
                      <tr>
                        <th>자본금(백만)</th>
                        <td className="text-right">0.01</td>
                        <td className="text-right">10</td>
                        <td className="text-right">22</td>
                        <td className="text-center">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <C3Chart
                  data={c3Options.data}
                  axis={c3Options.axis}
                  color={c3Options.color}
                />
                <ul>
                  <li>자산, 부채, 자본금, 상시 고용 인원은 결산 시점 기준</li>
                  <li>신용등급은 해당 연도의 평가 시점 기준</li>
                  <li>매출액은 공급가액 기준</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    ];
  }
}
