import React from 'react'
import { food } from '../data'

class Cats extends React.Component {
    constructor(props) {
        super(props);

    }

    renderCards () {
        console.log(food);
        return food.map(item => (
            <div className="cats__card-wrapper">
                <div key={item.id} className="cats__card">
                    <div className="cats__card-top">
                        <div className="cats__card-header">Сказочное заморское яство</div>
                        <h1>Нямушка</h1>
                        <h2>{item.title}</h2>
                        <div className="cats__card-details">
                            <div>{item.amount} порций</div>
                            <div>{item.bonus} мышь в подарок</div>
                        </div>
                    </div>
                    <div className="cats__card-bottom">
                        <div className="cats__cat"></div>
                        <div>{item.weight}</div>
                    </div>
                </div>
                <div className="cats__description">{item.description}</div>
            </div>
        ))
    }

    render() {
        return (
            <div className="cats">
                <h3 className="cats__header">Ты сегодня покормил кота?</h3>
                <div className="cats__wrapper">
                    {this.renderCards()}
                </div>
            </div>

        )
    }
}

export default Cats;