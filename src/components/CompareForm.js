import React from 'react';
import CompareEqualObj from '../utils/Utils';
import { SCORE_MSG, ERR_EMPTY_FILES, ERR_EXTENSION_BAD } from '../utils/Constans';

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
        if (this.state.jsonOne && this.state.jsonTwo) {
            const score = CompareEqualObj(this.state.jsonOne, this.state.jsonTwo)? '1': '0';
            alert(SCORE_MSG+ score);
        } else {
            alert(ERR_EMPTY_FILES);
        }
        event.preventDefault();
    }

    handleFileRead = e => {
        try {
            this.setState({
                [this.currenttarge]: JSON.parse(fileReader.result),
            });            
        } catch (error) {
            document.getElementById("compare-form").reset();
            alert(ERR_EXTENSION_BAD);
        }        
    };
    
    handleFileChosen = e => {
        this.currenttarge = e.target.name;
        fileReader = new FileReader();
        fileReader.onloadend = this.handleFileRead;
        fileReader.readAsText(e.target.files[0]);
    };

    render() {
        return (
            <form id="compare-form" onSubmit={this.handleSubmit} style={this.styles}>
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