
import React from 'react'

class TweetButton extends React.Component {
  componentDidMount () {
    const script = document.createElement('script')
    script.id = 'twitter-wjs'
    script.src = '//platform.twitter.com/widgets.js'
    this.root.appendChild(script)
  }

  render () {
    const { text, url, via, ...props } = this.props

    return (
      <div
        ref={r => { this.root = r }}
        className='inline-block mr2'
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
          height: 32
        }}>
        <a
          ref={r => { this.link = r }}
          href="https://twitter.com/share"
          className="twitter-share-button"
          data-text={text}
          data-via={via}
          children='Tweet' />
      </div>
    )
  }
}

TweetButton.defaultProps = {
  text: '',
  via: 'jxnblk'
}

export default TweetButton
