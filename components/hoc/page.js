import React from "react";

export default ComposedComponent => class extends React.Component {
  static getInitialProps({ query }) {
    return { query };
  }
  
  componentDidMount() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        window.navigator.userAgent
      )
    ) {
    } else {
    }

    if (
      (window.location.hostname === 'kimjiminand.co' ||
        window.location.hostname === 'edkim.co') &&
      window.location.protocol === 'http:'
    ) {
      window.location.href = 'https://www.kimjiminand.co'
    }

    if (typeof IMP != "undefined") {
      IMP.init('imp78122789')
    }

    if (window.location.host === 'www.kimjiminand.co') {
      //ReactGA.initialize('UA-44484721-1');
    }
  }

  render() {
    return (
      <ComposedComponent query={this.props.query} />
    );
  }
}