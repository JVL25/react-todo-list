import React, {Component} from "react";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            cards: {}
        }
    }

    onChangeCardTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    onChangeCardDesc(event) {
        this.setState({
            desc: event.target.value
        });
    }

    addCard(event) {
        event.preventDefault();
        let newCards = this.state.cards;
        newCards[this.state.title] = {
            title: this.state.title,
            description: this.state.desc,
            task: []
        };

        this.setState({
            cards: newCards,
            title: '',
            desc: ''
        });
    }

    removeCard(cardToRm) {
        let newCards = this.state.cards;
        delete newCards[cardToRm];

        this.setState({
            cards: newCards
        })
    }

    renderCards() {
        return Object.keys(this.state.cards).map((item) => {
            let row = this.state.cards[item];
            return (
                <>
                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">
                                {row.title}
                            </h5>
                            <p className="card-text">
                                {row.description}
                            </p>
                        </div>
                        <div
                            className="card-footer"
                            style={{backgroundColor: '#3D3D3D'}}
                        >
                            <button
                                className="btn"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                                onClick={this.removeCard.bind(this, item)}
                                style={{backgroundColor: '#EDF25C', justifySelf: "end"}}
                            >
                                Done
                            </button>
                        </div>
                    </div>
                </>
            )
        });
    }

    render() {
        return (
            <>
                <header id='header-content'>
                    <h2>Todo lists</h2>
                    <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    >
                        New card
                    </button>
                </header>
                <hr style={{borderColor: '#DC76FA'}}/>
                <section>
                    {this.renderCards()}
                </section>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                     tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create new card</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">
                                            Card name :
                                        </label>
                                        <input type='text'
                                               className="form-control"
                                               id="exampleFormControlInput1"
                                               placeholder="Card title"
                                               onChange={this.onChangeCardTitle.bind(this)}
                                               required={true}
                                               value={this.state.title}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                                            Card description :
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                            onChange={this.onChangeCardDesc.bind(this)}
                                            value={this.state.desc}
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal">Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={this.addCard.bind(this)}
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Cards;