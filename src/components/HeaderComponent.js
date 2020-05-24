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
                    <div className="header__title">
                        Табель
                    </div>
                    <div className="header__search">
                         <input type="text" className="header__input" name="search"/>
                            <i className="fas fa-search"></i>
                        <button className="header__btn">поиск</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;