import React, {Component} from 'react';

class ScoreForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score1: "",
            score2: "",
            score3: ""
        };

        this.changeScore1 = this.changeScore1.bind(this);
        this.changeScore2 = this.changeScore2.bind(this);
        this.changeScore3 = this.changeScore3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeScore1(event) {
        this.setState({score1: event.target.value});
    }

    changeScore2(event) {
        this.setState({score2: event.target.value});
    }

    changeScore3(event) {
        this.setState({score3: event.target.value});
    }

    handleSubmit(event) {
        console.log(`score 1 ${this.state.score1}`);
        console.log(`score 2 ${this.state.score2}`);
        console.log(`score 3 ${this.state.score3}`);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Score 1:
                    <input type="text" value={this.state.score1} onChange={this.changeScore1} />
                </label>
                <label>
                    Score 2:
                    <input type="text" value={this.state.score2} onChange={this.changeScore2} />
                </label>
                <label>
                    Score 3:
                    <input type="text" value={this.state.score3} onChange={this.changeScore3} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ScoreForm;
