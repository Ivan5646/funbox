import React from 'react'
import { food } from '../data'

class Cats extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: [],
            cardsMouseLeft: [],
            cardHover: ''
        }
    }

    selectProduct(id) {
        if( this.state.selected.includes(id) ) {
            this.setState({ selected: this.state.selected.filter(e => e !== id)});
            //setTimeout( () => {console.log("remove", this.state);}, 200);
        } else {
            console.log("selectProduct", id);
            this.setState({ selected: [...this.state.selected, id] });
            //setTimeout( () => {console.log("this.state", this.state);}, 200);
        }
    }

    cardMouseLeave(id) {
        // add to this.state.cardsMouseLeft
        if ( this.state.selected.includes(id) && !this.state.cardsMouseLeft.includes(id) ) {
            this.setState({ cardsMouseLeft: [...this.state.cardsMouseLeft, id] });
            //setTimeout( () => {console.log("this.state", this.state);}, 200);
            console.log("cardMouseLeave added", id);
        }
    }

    cardMouseEnter(id) {
        // remove from this.state.cardsMouseLeft
        if( this.state.selected.includes(id) && this.state.cardsMouseLeft.includes(id) ) {
            this.setState({ cardsMouseLeft: this.state.cardsMouseLeft.filter(e => e !== id)});
            //setTimeout( () => {console.log("remove", this.state);}, 200);
            console.log("cardMouseLeave removed", id);
        }
    }

    selectedBg(id) {
        if( this.state.selected.includes(id) ) {
            // console.log("selectedBg");
            return "cats__card--selected";
        } else {
            // console.log("selectedBg empty");
            return "";
        }
    }

    showDescription(id, item) {
        if( this.state.selected.includes(id) ) {
            return <div className="cats__description">{item.description}</div>
        } else {
            return (
            <div className="cats__description">
                Чего сидишь? Порадуй котэ, <a onClick={() => {this.selectProduct(item._id)}}>купи.</a>
            </div>
            )
        }
    }

    showCardHeader(id) {
        // debugger;
        if( this.state.selected.includes(id) && this.state.cardsMouseLeft.includes(id) ) {
            // if card on hover
            return <div className="cats__card-header">Котэ не одобряет</div>;
        } else {
            return <div className="cats__card-header">Сказочное заморское яство</div>;
        }
    }

    renderCards () {
        return food.map(item => (
            <div key={item._id} className="cats__card-wrapper" onClick={() => {this.selectProduct(item._id)}}>
                <div className={`cats__card ${this.selectedBg(item._id)}`}>
                    <div className="cats__card-top" onMouseLeave={() => this.cardMouseLeave(item._id)} onMouseEnter={() => {this.cardMouseEnter(item._id)}}>
                        {this.showCardHeader(item._id)}
                        <h1>Нямушка</h1>
                        <h2>{item.title}</h2>
                        <div className="cats__card-details">
                            <div>{item.amount} порций</div>
                            <div>{item.bonus} мышь в подарок</div>
                        </div>
                    </div>
                    <div className="cats__card-bottom">
                        <div className="cats__cat"></div>
                        <div className="cats__weight-wrapper">
                            <div className="cats__weight">{item.weight.toString().replace(".", ",")}</div>
                            <div className="cats__weight-units">кг</div>
                        </div>
                    </div>
                </div>
                {this.showDescription(item._id, item)}
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