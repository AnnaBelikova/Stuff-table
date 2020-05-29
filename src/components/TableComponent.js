import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { Link } from 'react-router-dom';




class Table extends Component {
     constructor(props) {
        super(props);
        this.state = {
        open:false,
        id:"#",
        name:true,
        surname:true,
        date_of_hiring:true,
        position:true,
        age:true,
        homework:true,
        adress:true,
	    department:true,
        salary:true,
	    homework:true,
        date_of_birth:true,
        place_of_birth:true,
        nationality:true,
        family:true,
        children:true,
        education:true,
        educational_institution:true,
        document_education:true,
        specialization:true,
        year_of_graduating:true,
        course_specialization:true,
        year_of_course_finishing:true,
        car_license:true,
        language:true,
        language_level:true
        };


    }
    
        
    render(){
         const workers = this.props.workers.map((worker) => {
            let workerId=worker.id;
            return (
                       <tr  onClick={() => this.setState({id: workerId})} className={'stuff__item '+ (this.state.id === workerId ? 'current' : '')}><td><img className="stuff__img" width="50%" src={worker.image} alt={worker.name} /></td><td className={(this.state.name  ? '' : 'hidden')}>{worker.name}</td><td className={(this.state.surname  ? '' : 'hidden')}>{worker.surname}</td><td className={(this.state.date_of_birth  ? '' : 'hidden')}>{worker.date_of_birth}</td><td >{worker.age}</td><td className={(this.state.position  ? '' : 'hidden')}>{worker.position}</td><td className={(this.state.homework ? '' : 'hidden')}><input className="input-check" type="checkbox" id = "homework" name = "homework" checked={`${worker.homework}`}/></td><td className={(this.state.adress  ? '' : 'hidden')}>{worker.city}, {worker.street}, {worker.house}, {worker.flat} </td>
                        </tr>
            );
        });
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Выберите фотографию </div>);
        }
                                     

        return ( 
            <div className="stuff-content container">
            <div className="stuff__buttons">
                <a href="/form"><button className="stuff__add">Добавить</button></a>
                <button className="stuff__edit" ><Link to={`/${this.state.id}`}>Редактировать</Link></button>
                <Form action="http://cw44189.tmweb.ru/delete.php" method="post">
                    <Input type = "text" id = "worker_id" name = "worker_id" value={`${this.state.id}`}/> 
                    <button type = "submit" className="stuff__delete">Удалить</button>
                </Form>
            </div>
            <div className="fields" onClick={() => this.setState({open: !this.state.open})}>Поля</div>
                <div className={ (this.state.open  ? '' : 'hidden')}>
                    <div onClick={() => this.setState({name: !this.state.name})} className={(this.state.name ? 'current' : '')}>Имя</div>
                    <div onClick={() => this.setState({surname: !this.state.surname})} className={(this.state.surname ? 'current' : '')}>Фамилия</div>
                    <div onClick={() => this.setState({date_of_birth: !this.state.date_of_birth})} className={(this.state.date_of_birth ? 'current' : '')}>Дата рождения</div>
                    <div onClick={() => this.setState({age: !this.state.age})} className={(this.state.age ? 'current' : '')}>Возраст</div>
                    <div onClick={() => this.setState({position: !this.state.position})} className={(this.state.position ? 'current' : '')}>Должность</div>
                    <div onClick={() => this.setState({homework: !this.state.homework})} className={(this.state.homework ? 'current' : '')}>Удаленная работа</div>
                    <div onClick={() => this.setState({adress: !this.state.adress})} className={(this.state.adress ? 'current' : '')}>Адрес проживания</div>
                </div>
            

                <table className="stuff__table">
                    <tr>
                        <th>Превью</th>
                        <th className={(this.state.name  ? '' : 'hidden')} >Имя</th>
                        <th className={(this.state.surname  ? '' : 'hidden')}>Фамилия</th>
                        <th className={(this.state.date_of_birth  ? '' : 'hidden')}>Дата рождения</th>
                        <th className={(this.state.age  ? '' : 'hidden')}>Возраст</th>
                        <th className={(this.state.position  ? '' : 'hidden')}>Должность</th>
                        <th className={(this.state.homework  ? '' : 'hidden')}>Удаленная работа</th>
                        <th className={(this.state.adress  ? '' : 'hidden')}>Адрес проживания</th>
                    </tr>
                    {workers}
                </table>
            </div>
        )};
    }

export default Table;