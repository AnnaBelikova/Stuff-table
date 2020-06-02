import React, { Component } from 'react';
import {  Form,  Input} from 'reactstrap';
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
	    department:false,
        salary:false,
        date_of_birth:true,
        place_of_birth:false,
        nationality:false,
        family:false,
        children:false,
        education:false,
        add_info:false,
        search:null
        };


    }
    searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
    
          
    render(){
        
    const workers = this.props.workers.filter((worker)=>{
      if(this.state.search == null){
          return worker
      }
      else if(worker.surname.toLowerCase().includes(this.state.search.toLowerCase()) || worker.position.toLowerCase().includes(this.state.search.toLowerCase()) || worker.name.toLowerCase().includes(this.state.search.toLowerCase())){
          return worker
      }else{
          return null
      }
    }).map((worker) => {
            let workerId=worker.id;
            return (
               
                       <tr  key = {workerId} onClick={() => this.setState({id: workerId})} className={'stuff__item '+ (this.state.id === workerId ? 'current' : '')}>
                            <td><img className="stuff__img" width="50%" src={worker.image} alt={worker.name} /></td>
                            <td className={(this.state.name  ? '' : 'hidden')}>{worker.name}</td>
                            <td className={(this.state.surname  ? '' : 'hidden')}>{worker.surname}</td>
                            <td className={(this.state.date_of_birth  ? '' : 'hidden')}>{worker.date_of_birth}</td>
                            <td className={(this.state.age  ? '' : 'hidden')} >{Math.floor((new Date().getTime() - new Date(worker.date_of_birth))/ (24 * 3600 * 365.25 * 1000))}</td>
                            <td className={(this.state.place_of_birth  ? '' : 'hidden')}>{worker.place_of_birth}</td>
                            <td className={(this.state.nationality  ? '' : 'hidden')}>{worker.nationality}</td>
                            <td className={(this.state.family  ? '' : 'hidden')}>{worker.family}</td>
                            <td className={(this.state.children ? '' : 'hidden')}><input className="input-check" type="checkbox" id = "children" name = "children" checked={`${worker.children}`}/></td>
                            <td className={(this.state.position  ? '' : 'hidden')}>{worker.position}</td>
                            <td className={(this.state.department  ? '' : 'hidden')}>{worker.department}</td>
                            <td className={(this.state.salary  ? '' : 'hidden')}>{worker.salary}</td>
                            <td className={(this.state.homework ? '' : 'hidden')}><input className="input-check" type="checkbox" id = "homework" name = "homework" checked={`${worker.homework}`}/></td>
                            <td className={(this.state.adress  ? '' : 'hidden')}>{worker.city}, {worker.street}, {worker.house}, {worker.flat} </td>
                            <td className={'add_info '+ ( this.state.education  ? '' : 'hidden')}>
                                <b>Основное образование:</b> <br/> 
                                Уровень: {worker.education}<br/> 
                                Учебное заведение: {worker.educational_institution}<br/> 
                                Документ:{worker.document_education}<br/> 
                                Специализация: {worker.specialization}<br/> 
                                Год окончания: {worker.year_of_graduating}<br/> 
                                <br/> 
                                <div className={( worker.course_specialization != ""  ? '' : 'hidden')}><b>Курсы и повышение квалификации:</b> {worker.course_specialization}, {worker.course_institution}, {worker.year_of_course_finishing}</div></td>
                            <td className={'add_info '+(this.state.add_info  ? '' : 'hidden')}>
                                <b>Водительские права:</b> {worker.car_license}<br/> 
                                <br/> 
                                <b>Иностранные языки:</b> {worker.language}, {worker.language_level}</td>
                            </tr>
            );
        });
      
                                     

        return ( 
            <div className="stuff-content container">
            <div className="stuff__buttons">
                <a href="/form"><button className="stuff__add">Добавить</button></a>
                <button className="stuff__edit" ><Link to={`/${this.state.id}`}>Редактировать</Link></button>
                <Form action="http://table.cw44189.tmweb.ru/delete.php" method="post">
                    <Input type = "text" id = "worker_id" name = "worker_id" value={`${this.state.id}`}/> 
                    <button type = "submit" className="stuff__delete">Удалить</button>
                </Form>
                <div className="header__search">
                        <input type="text" className="header__input" name="search" onChange={(e)=>this.searchSpace(e)} placeholder="Search"/><div className="search__icon"> <span role="img" aria-label="search">&#128269;</span></div>
                    </div>
            <div className="fields"><div onClick={() => this.setState({open: !this.state.open})}>Поля {this.state.open  ? <span>&and; </span> : <span>&or; </span>}
</div>
                <div className={ "fields_items " + (this.state.open  ? '' : 'hidden')}>
                    <div onClick={() => this.setState({name: !this.state.name})} className={(this.state.name ? 'current' : '')}>Имя</div>
                    <div onClick={() => this.setState({surname: !this.state.surname})} className={(this.state.surname ? 'current' : '')}>Фамилия</div>
                    <div onClick={() => this.setState({date_of_birth: !this.state.date_of_birth})} className={(this.state.date_of_birth ? 'current' : '')}>Дата рождения</div>
                    <div onClick={() => this.setState({age: !this.state.age})} className={(this.state.age ? 'current' : '')}>Возраст</div>
                    <div onClick={() => this.setState({place_of_birth: !this.state.place_of_birth})} className={(this.state.place_of_birth ? 'current' : '')}>Место рождения</div>
                    <div onClick={() => this.setState({nationality: !this.state.nationality})} className={(this.state.nationality ? 'current' : '')}>Гражданство</div>
                    <div onClick={() => this.setState({family: !this.state.family})} className={(this.state.family ? 'current' : '')}>Семейное положение</div>
                    <div onClick={() => this.setState({children: !this.state.children})} className={(this.state.children ? 'current' : '')}>Дети</div>
                    <div onClick={() => this.setState({position: !this.state.position})} className={(this.state.position ? 'current' : '')}>Должность</div>
                    <div onClick={() => this.setState({department: !this.state.department})} className={(this.state.department ? 'current' : '')}>Департамент</div>
                    <div onClick={() => this.setState({salary: !this.state.salary})} className={(this.state.salary ? 'current' : '')}>Оклад</div>
                    <div onClick={() => this.setState({homework: !this.state.homework})} className={(this.state.homework ? 'current' : '')}>Удаленная работа</div>
                    <div onClick={() => this.setState({adress: !this.state.adress})} className={(this.state.adress ? 'current' : '')}>Адрес проживания</div>
                    <div onClick={() => this.setState({education: !this.state.education})} className={(this.state.education ? 'current' : '')}>Образование</div>
                    <div onClick={() => this.setState({add_info: !this.state.add_info})} className={(this.state.add_info ? 'current' : '')}>Дополнительные сведения</div>
                </div>
            </div>

                
            </div>
                <div className="table__wrap">
                    <table className="stuff__table">
                        <thead>
                            <tr>
                                <th>Превью</th>
                                <th className={(this.state.name  ? '' : 'hidden')} >Имя</th>
                                <th className={(this.state.surname  ? '' : 'hidden')}>Фамилия</th>
                                <th className={(this.state.date_of_birth  ? '' : 'hidden')}>Дата рождения</th>
                                <th className={(this.state.age  ? '' : 'hidden')}>Возраст</th>
                                <th className={(this.state.place_of_birth  ? '' : 'hidden')}>Место рождения</th>
                                <th className={(this.state.nationality  ? '' : 'hidden')}>Гражданство</th>
                                <th className={(this.state.family  ? '' : 'hidden')}>Семейное положение</th>
                                <th className={(this.state.children  ? '' : 'hidden')}>Дети</th>
                                <th className={(this.state.position  ? '' : 'hidden')}>Должность</th>
                                <th className={(this.state.department  ? '' : 'hidden')}>Департамент</th>
                                <th className={(this.state.salary  ? '' : 'hidden')}>Оклад</th>
                                <th className={(this.state.homework  ? '' : 'hidden')}>Удаленная работа</th>
                                <th className={(this.state.adress  ? '' : 'hidden')}>Адрес проживания</th>
                                <th className={(this.state.education  ? '' : 'hidden')}>Образование</th>
                                <th className={(this.state.add_info  ? '' : 'hidden')}>Дополнительные сведения</th>

                            </tr>
                        </thead>
                        <tbody>
                            {workers}
                        </tbody>
                    </table>
                </div>
            </div>
        )};
    }

export default Table;