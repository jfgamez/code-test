import React from 'react';
import CompareEqualObj from '../utils/Utils';

// fileReader to get content files
let fileReader;

class CompareForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 'jsonOne': null, 'jsonTwo': null};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFileChosen = this.handleFileChosen.bind(this);
    }

    handleSubmit(event) {
        console.log(this.state.jsonOne);
        if (this.state.jsonOne && this.state.jsonTwo) {
            const score = CompareEqualObj(this.state.jsonOne, this.state.jsonTwo)? '1': '0';
            alert("SCORE = "+ score);
        } else {
            alert("Error: Please select two files with json extension.");
        }
        
        event.preventDefault();
    }

    handleFileRead = e => {
        this.setState({
            [this.currenttarge]: JSON.parse(fileReader.result),
        });
    };
    
    handleFileChosen = e => {
        this.currenttarge = e.target.name;
        fileReader = new FileReader();
        fileReader.onloadend = this.handleFileRead;
        fileReader.readAsText(e.target.files[0]);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={this.styles}>
                <label className="custom-file-upload padding-5">
                    <input
                        name="jsonOne"
                        type="file"
                        onChange={this.handleFileChosen}
                    />
                </label>
                
                <label className="custom-file-upload padding-5">
                    <input
                        name="jsonTwo"
                        type="file"
                        onChange={this.handleFileChosen}
                    />
                </label>                
                <input type="submit" value="Get Score"></input>
            </form>
        );
    }
}

export default CompareForm;