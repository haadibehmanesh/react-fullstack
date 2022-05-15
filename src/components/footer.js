import { Component } from 'react';
class Footer extends Component {
    state = {}
    render() {
        return (
            <footer>

                {this.props.text}
            </footer>);
    }
}

export default Footer;