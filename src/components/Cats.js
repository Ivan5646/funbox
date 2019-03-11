import React from 'react'

class Cats extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="cats">
        <h3>Cats</h3>
        <div className="cats__wrapper">
          <div className="cats__card">
            <div>Сказочное заморское яство</div>
            <h4>Нямушка</h4>
            <div>с фуа-гра</div>
            <div>10 порций</div>
            <div>мышь в подарок</div>
          </div>
          <div className="cats__card">
            <div>Сказочное заморское яство</div>
            <h4>Нямушка</h4>
            <div>с фуа-гра</div>
            <div>10 порций</div>
            <div>мышь в подарок</div>
          </div>
          <div className="cats__card">
            <div>Сказочное заморское яство</div>
            <h4>Нямушка</h4>
            <div>с фуа-гра</div>
            <div>10 порций</div>
            <div>мышь в подарок</div>
          </div>
        </div>
      </div>

    )
  }
}

export default Cats;