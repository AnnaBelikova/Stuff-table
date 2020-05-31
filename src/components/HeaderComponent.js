import React, {Component} from 'react';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    
    render() {
        return ( 
            <div className="header">
                <div className="container header__container">
                    <a href="/"><div className="header__title">
                        Табель
                    </div></a>
                </div>
            </div>
        );
    }
}

export default Header;