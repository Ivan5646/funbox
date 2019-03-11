import React from 'react'
import { food } from '../data'

class Cats extends React.Component {
    constructor(props) {
        super(props);

    }

    renderCards () {
        console.log(food);
        return food.map(item => (
            <div key={item.id}>{item.title}</div>
        ))
    }

    render() {
        // console.log(food);
        return (
            <div className="cats">
                <h3>Cats</h3>
                {this.renderCards()}
            </div>

        )
    }
}

export default Cats;