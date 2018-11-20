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

    window.channelPluginSettings = {
      plugin_id: 'f7f68f1f-bd46-4784-b534-071c689de331'
    }
    ;(function() {
      var node = document.createElement('div')
      node.id = 'ch-plugin'
      document.body.appendChild(node)
      var async_load = function() {
        var s = document.createElement('script')
        s.type = 'text/javascript'
        s.async = true
        s.src = '//cdn.channel.io/plugin/ch-plugin-web.js'
        s.charset = 'UTF-8'
        var x = document.getElementsByTagName('script')[0]
        x.parentNode.insertBefore(s, x)
      }
      if (window.attachEvent) {
        window.attachEvent('onload', async_load)
      } else {
        window.addEventListener('load', async_load, false)
      }
    })()

    IMP.init('imp78122789')

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