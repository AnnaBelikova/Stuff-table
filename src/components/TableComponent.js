import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';


function RenderWorker({worker}){
    return(
        <tr className="stuff__item"><td><img className="stuff__img" width="50%" src={worker.image} alt={worker.name} /></td><td>{worker.name}</td><td>{worker.surname}</td><td>{worker.date_of_birth}</td><td>{worker.age}</td><td>{worker.position}</td><td>{worker.homework}</td><td>{worker.city}, {worker.street}, {worker.house}, {worker.flat} </td></tr>
    );
}

class Table extends Component {
     constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleNews = this.handleNews.bind(this);
    }
    
     toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleNews(event) {
        this.toggleModal();
        alert("Заголовок: " + this.news_title.value + " Текст: " + this.news_text.value +
            " Поделись!" );
        
    }
        
    render(){
         const workers = this.props.workers.map((worker) => {
            return (
                    <RenderWorker worker={worker}/>
            );
        });
        return ( 
            <div className="stuff-content container">
            <div className="stuff__buttons">
                <button className="stuff__add" onClick = {this.toggleModal}>Добавить</button>
                <button className="stuff__edit">Редактировать</button>
                <button className="stuff__delete">Удалить</button>
            </div>
                <table className="stuff__table">
                    <tr>
                        <th>Превью</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Дата рождения</th>
                        <th>Возраст</th>
                        <th>Должность</th>
                        <th>Удаленная работа</th>
                        <th>Адрес проживания</th>
                    </tr>
                    {workers}
                </table>
                <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal} >
                    <ModalHeader toggle = {this.toggleModal} > 
                        Добавление/Редактирование
                    < /ModalHeader> 
                    <ModalBody>
                        <Form action="http://cw44189.tmweb.ru/display.php" method="post" enctype="multipart/form-data" onSubmit = {this.handleNews} >
                            <div className="form__main">
                                <img className="form_img" src="https://via.placeholder.com/150" />
                                    <div className="main_block">
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Имя < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Фамилия < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Дата принятия на работу < /Label> 
                                            <Input type = "date" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Должность < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup>
                                        <FormGroup className="group-check">
                                            <input className="input-check" type="checkbox" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                            <Label className="label-check" htmlFor = "news_title" > Заголовок < /Label> 
                                        </FormGroup> 
                                        
                                    </div>
                                    <div className="main_block">
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Город < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Улица < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Дом < /Label> 
                                            <Input type = "number" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Квартира < /Label> 
                                            <Input type = "number" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                    </div>
                            </div>
                            <div className="form__main">
                            <FormGroup >
                                <Label htmlFor = "news_title" > Подразделение < /Label> 
                                <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/>
                            </FormGroup>
                            <FormGroup >
                                <Label htmlFor = "news_title" > Оклад < /Label> 
                                <Input type = "number" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/>
                            </FormGroup>
                            </div>
                            <div className="form__title">Персональные данные</div>
                            <hr/>
                            <div className="form__personal">
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Дата рождения < /Label> 
                                            <Input type = "date" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Место рождения < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Гражданство < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        
                                    </div>
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Семейное положение < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                         <FormGroup className="group-check">
                                            <input className="input-check" type="checkbox" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                            <Label className="label-check" htmlFor = "news_title" >Наличие детей < /Label> 
                                        </FormGroup>  
                                    </div>
                            </div>
                            <div className="form__title">Образование</div>
                            <hr/>
                            <div className="form__main">
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Уровень < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Учебное заведение < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Документ об образовании < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Специальность < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup>
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Год окончания < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup>
                                       
                                    </div>
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Специализация < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Учебное заведение < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Год окончания < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                        
                                    </div>
                            </div>
                            <div className="form__title">Опыт вождения</div>
                            <hr/>
                            <div className="form__main">
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Права категории < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        
                                    </div>
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Язык < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "news_title" > Уровень владения < /Label> 
                                            <Input type = "text" id = "news_title" name = "news_title" innerRef = {(input) => this.news_title = input}/> 
                                        </FormGroup> 
                                    </div>
                            </div>
                            
                            <Button className="stuff__add" type = "submit"> Сохранить < /Button> 
                        </Form> 
                    </ModalBody> 
                </Modal>
            </div>
        )};
    }

export default Table;