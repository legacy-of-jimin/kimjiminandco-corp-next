import React, { Component } from 'react'
import Head from "@/components/head";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Page from '@/components/hoc/page.js';
import PayComponent from '@/components/pay'

class PayContainer extends Component {
  render() {
    const products = [{
      type: '1',
      amount: 100000,
      title: "월정액 유지보수",
      subTitle: "플랜 1",
      terms: ["24시간 이내 일반 문의 대응", "서버 정지 등 긴급 이슈 지급 대응", "서버 사용료 별도", "수정 작업은 별도 견적 발생"],
      priceDesc: "부가세 별도 100,000원 / 결제일로부터 30일간 제공"
    },
    {
      type: '2',
      amount: 200000,
      title: "월정액 유지보수",
      subTitle: "플랜 2",
      terms: ["24시간 이내 일반 문의 대응", "서버 정지 등 긴급 이슈 지급 대응", "서버 사용료 별도", "30분 이내 수정 작업 월 3회 무료 대응 (이후 별도 견적 발생)"],
      priceDesc: "부가세 별도 200,000원 / 결제일로부터 30일간 제공"
    },
    {
      type: 'contenta',
      amount: 800000,
      title: "홈페이지 수정 비용",
      subTitle: "-",
      terms: ["Froala 에디터 등 수정 비용"],
      priceDesc: "부가세 별도 800,000원"
    }]
    return <div id="root">
      <Head />
      <Nav />
      <PayComponent products={products} />
      <Footer />
    </div>
  }
}

export default Page(PayContainer)