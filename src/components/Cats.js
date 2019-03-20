import React from 'react'
import { food } from '../data'

class Cats extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: [],
            cardsMouseLeft: [],
        };
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

    changeBg(id) {
        if (this.state.selected.includes(id) && this.state.cardsMouseLeft.includes(id)) {
            // selected hover
            return "cats__card--selectedHover";
        } else if ( this.state.selected.includes(id) ) {
            // selected
            return "cats__card--selected";
        }  else {
            // default hover
            return "cats__card--default-hover";
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
    
    showDescription(id, item) {
        if ( this.state.selected.includes(id) ) {
            return <div className="cats__description">{item.description.inStock}</div>
        } else {
            if (item.inStock) {
                return (
                    <div className="cats__description">
                        Чего сидишь? Порадуй котэ, <a onClick={() => {this.selectProduct(item._id)}}>купи.</a>
                    </div>
                )
            } else {
                return <div className="cats__description cats__description--yellow">{item.description.outOfStock}</div>
            }

        }
    }

    showCardHeader(id) {
        if( this.state.selected.includes(id) && this.state.cardsMouseLeft.includes(id) ) {
            // if card is hovered on
            return <div className="cats__card-header"><div>Котэ не одобряет</div></div>;
        } else {
            return <div className="cats__card-header"><div>Сказочное заморское яство</div></div>;
        }
    }

    renderCards () {
        return food.map(item => (
            <div key={item._id} className={`cats__card-wrapper ${!item.inStock ? "cats__card-wrapper--disabled" : ""}`}  onClick={() => {this.selectProduct(item._id)}}>
                <div className={`cats__card ${this.changeBg(item._id)}`} onMouseLeave={() => this.cardMouseLeave(item._id)} onMouseEnter={() => {this.cardMouseEnter(item._id)}}>
                    {this.showCardHeader(item._id)}
                    <div className="cats__card-main">
                        <div className="cats__card-top">
                            <h1>Нямушка</h1>
                            <h2>{item.title}</h2>
                            <div className="cats__card-details">
                                <div>{item.amount} порций</div>
                                <div>{item.bonus}</div>
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
                </div>
                {this.showDescription(item._id, item)}
            </div>
        ))
    }

    render() {
        return (
            <div className="cats container">
                <div className="cats__inner">
                    <h3 className="cats__header">Ты сегодня покормил кота?</h3>
                    <div className="cats__wrapper">
                        {this.renderCards()}
                    </div>
                </div>
            </div>

        )
    }
}

export default Cats;