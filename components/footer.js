import React, { Component } from 'react'

export default class FooterContainer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer__content">
            <div className="footer__content__logo" />(주)김지민앤컴퍼니
            &nbsp;&nbsp;<div className="mobile-block" />서울특별시 종로구 종로1길 50 3층 118호 (위워크 광화문-더케이트윈타워) &#60;03142&#62; &nbsp;&nbsp;<div className="mobile-block" />대표자:
            김지민 &nbsp;&nbsp;<div className="mobile-block"> </div>사업자등록번호
            107-88-03228
             {/* &nbsp;&nbsp;<div className="mobile-block" />전화:
            02-336-0887 */}
            <br />
            <div className="mobile-block">&nbsp;</div>2013.10.01 ~ Today
            &nbsp;&nbsp;<div className="mobile-block" />© 2019 KimJimin &#38;
            Company. All Rights Reserved.&nbsp;<div className="mobile-block" />·
            jimin@kimjiminand.co
          </div>
        </div>
      </footer>
    )
  }
}
