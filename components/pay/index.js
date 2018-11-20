import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import "@/static/stylesheets/app.scss";
import "@/static/stylesheets/pay.scss";

export default class PaymentComponent extends Component {
  state = {
    type: '',
    amount: 0,
    email: '',
    name: '',
    tel: '',
    addr: '',
    postcode: '',
    product: {}
  }

  showPayForm(index) {
    const product = this.props.products[index]

    var amount = product.amount
    amount = Math.round(amount * 1.1)

    this.setState({
      type: product.type,
      amount: amount,
      product: product
    })

    if (typeof window !== 'undefined') {
      window.document.getElementById('email').focus()
    }
  }

  validatePay = () => {
    console.log(this.state)
    const { email, name, tel, addr, postcode, type, amount } = this.state

    if (!email || !name || !tel) {
      alert('이메일, 성함, 전화번호는 필수 입력 항목입니다.')
    } else {
      IMP.request_pay(
        {
          pg: 'kcp',
          pay_method: 'card',
          merchant_uid: 'ecm_' + type + '_' + new Date().getTime(),
          name: '김지민앤컴_유지보수_' + type,
          amount: amount,
          buyer_email: email,
          buyer_name: name,
          buyer_tel: tel,
          buyer_addr: addr,
          buyer_postcode: postcode
        },
        function(rsp) {
          if (rsp.success) {
            var msg = '감사합니다. 결제가 완료되었습니다.\n\n'
            msg += '고유ID : ' + rsp.imp_uid
            msg += '\n상점 거래ID : ' + rsp.merchant_uid
            msg += '\n결제 금액 : ' + rsp.paid_amount
            msg += '\n카드 승인번호 : ' + rsp.apply_num

            this.setState({
              type: '',
              amount: 0,
              email: '',
              name: '',
              tel: ''
            })
          } else {
            var msg = '결제에 실패하였습니다.'
            msg += '에러내용 : ' + rsp.error_msg
          }

          alert(msg)
        }
      )
    }
  }

  handleChange = e => {
    const state = { ...this.state }

    switch (e.target.name) {
      default:
        state[e.target.name] = e.target.value
        break
    }

    this.setState(state)
  }

  render() {
    const {
      email,
      name,
      tel,
      addr,
      postcode,
      type,
      amount,
      product
    } = this.state

    return [
      <div id="payment">
        <Grid>
          <div className="payment-title">PRODUCTS</div>
          <section className="section section-products">
            <Row>
              {this.props.products.map((el, idx) => {
                return (
                  <Col md={4} key={idx}>
                    <div
                      className={`product-card product-card-1 ${
                        type === el.type ? 'active' : ''
                      }`}
                      onClick={() => {
                        this.showPayForm(idx)
                      }}
                    >
                      <div className="card__header">
                        {el.title}
                        <br />
                        <b>{el.subTitle}</b>
                      </div>
                      <div className="card__body">
                        <ul>
                          {el.terms.map((line, idx) => {
                            return <li key={idx}>{line}</li>
                          })}
                        </ul>
                      </div>
                      <div className="card__price">{el.priceDesc}</div>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </section>

          <section
            className={
              'section section-form pay-row ' + (amount > 0 ? '' : 'hidden')
            }
          >
            <div className="form-title">
              {product.title}
              <br />
              <b id="plan-type">플랜 {type}</b>
            </div>
            <div className="form-price">
              결제 금액: <b id="disp-price">{amount}원</b>
            </div>
            <div className="form">
              <div className="form-group">
                <label>EMAIL</label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="text"
                  maxLength="64"
                  required=""
                  placeholder="이메일을 입력해주세요 :)"
                  value={email || ''}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>NAME</label>
                <input
                  className="form-control"
                  name="name"
                  type="text"
                  maxLength="20"
                  required=""
                  placeholder="이름을 입력해주세요 :)"
                  value={name || ''}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>TEL</label>
                <input
                  className="form-control"
                  name="tel"
                  type="text"
                  maxLength="20"
                  required=""
                  placeholder="전화번호를 입력해주세요 :)"
                  value={tel || ''}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>ADDRESS</label>
                <input
                  className="form-control"
                  name="addr"
                  type="text"
                  maxLength="128"
                  placeholder="주소를 입력해주세요 :) *선택"
                  value={addr || ''}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>ZIPCODE</label>
                <input
                  className="form-control"
                  name="postcode"
                  type="text"
                  maxLength="20"
                  placeholder="우편번호를 입력해주세요 :) *선택"
                  value={postcode || ''}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className="btn" onClick={this.validatePay}>
              결제
            </button>
          </section>
        </Grid>
      </div>
    ]
  }
}
