import React, {Component} from 'react';
import { Form, FormGroup, Input, Label} from 'reactstrap';



class FormComp extends Component {
    
    constructor(props){
        super(props);
        this.state = {file: '',imagePreviewUrl: '',}
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
    }
      _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }

        reader.readAsDataURL(file)
    }

       
    render(){
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} alt="portrait" />);
        } else {
            $imagePreview = (<div className="previewText">Выберите фотографию </div>);
        }
           return(
           <div className="form__container container" >
                    <div className=" form__header" > 
                        Добавление
                    </div> 
                    <div className="form__body ">
                        <Form action="http://table.cw44189.tmweb.ru/worker_add.php" method="post" enctype="multipart/form-data" >
                            <div className="form__main">
                                <div className="main_block">
                                    <FormGroup >
                                        <div className="imgPreview">
                                            {$imagePreview}
                                        </div>
                                        <Input type = "file" id = "worker_photo" name = "worker_photo" onChange={(e)=>this._handleImageChange(e)}/> 
                                    </FormGroup >
                                </div>
                                    <div className="main_block">
                                        <FormGroup >
                                            <Label htmlFor = "name" > Имя < /Label> 
                                            <Input type = "text" id = "name" name = "name" /> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "surname" > Фамилия < /Label> 
                                            <Input type = "text" id = "surname" name = "surname" /> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "date_of_hiring" > Дата принятия на работу < /Label> 
                                            <Input type = "date" id = "date_of_hiring" name = "date_of_hiring" /> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "position" > Должность < /Label> 
                                            <Input type = "text" id = "position" name = "position" /> 
                                        </FormGroup>
                                        <FormGroup className="group-check">
                                            <input className="input-check" type="checkbox" id = "homework" name = "homework" /> 
                                            <Label className="label-check" htmlFor = "homework" > Удаленная работа < /Label> 
                                        </FormGroup> 
                                        
                                    </div>
                                    <div className="main_block">
                                        <FormGroup >
                                            <Label htmlFor = "city" > Город < /Label> 
                                            <Input type = "text" id = "city" name = "city" /> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "street" > Улица < /Label> 
                                            <Input type = "text" id = "street" name = "street" /> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "house" > Дом < /Label> 
                                            <Input type = "number" id = "house" name = "house" /> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "flat" > Квартира < /Label> 
                                            <Input type = "number" id = "flat" name = "flat" /> 
                                        </FormGroup> 
                                    </div>
                            </div>
                            <div className="form__department">
                                <FormGroup >
                                    <Label htmlFor = "department" > Подразделение < /Label> 
                                    <select id="department" name="department">
                                        <option disabled selected="selected">Выберите подразделение</option>
                                        <option value="Технический отдел">Технический отдел</option>
                                        <option value="IT - отдел">IT - отдел</option>
                                        <option value="Отдел маркетинга">Отдел маркетинга</option>
                                        <option value="Бухгалтерия">Бухгалтерия</option>
                                    </select>
                                </FormGroup>
                                <FormGroup >
                                    <Label htmlFor = "salary" > Оклад < /Label> 
                                    <Input type = "number" id = "salary" name = "salary"/>
                                </FormGroup>
                            </div>
                            <div className="title__blocks">
                                <div className="form__title">Персональные данные</div>
                            </div>
                            <hr/>
                            <div className="form__personal">
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "date_of_birth" > Дата рождения < /Label> 
                                            <Input type = "date" id = "date_of_birth" name = "date_of_birth"/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "place_of_birth" > Место рождения < /Label> 
                                            <Input type = "text" id = "place_of_birth" name = "place_of_birth" /> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "nationality" > Гражданство < /Label> 
                                            <Input type = "text" id = "nationality" name = "nationality" /> 
                                        </FormGroup> 
                                        
                                    </div>
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "family" > Семейное положение < /Label> 
                                            <select name="family" id = "family">
                                                <option selected value="Не замужем/не женат">Не замужем/не женат</option>
                                                <option value="Разведен/разведена">Разведен/разведена</option>
                                                <option value="Замужем/женат">Замужем/женат</option>
                                            </select>
                                        </FormGroup> 
                                         <FormGroup className="group-check">
                                            <input className="input-check" type="checkbox" id = "children" name = "children" /> 
                                            <Label className="label-check" htmlFor = "children" >Наличие детей < /Label> 
                                        </FormGroup>  
                                    </div>
                            </div>
                            <div className="title__blocks">
                                <div className="title__block"><div className="form__title">Образование</div>
                                <hr/></div>
                                <div className="title__block"><div className="form__title">Курсы, повышение квалификации</div>
                                <hr/></div>
                            </div>
                            <div className="form__main">
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "education" > Уровень < /Label> 
                                             <select name="education" id="education">
                                                <option selected value="Высшее">Высшее</option>
                                                <option value="Неполное высшее">Неполное высшее</option>
                                                <option value="Среднее специальное">Среднее специальное</option>
                                                <option value="Среднее">Среднее</option>
                                             </select>
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "educational_institution" > Учебное заведение < /Label> 
                                            <Input type = "text" id = "educational_institution" name = "educational_institution" /> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "document_education" > Документ об образовании < /Label> 
                                            <Input type = "text" id = "document_education" name = "document_education" /> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "specialization" > Специальность < /Label> 
                                            <Input type = "text" id = "specialization" name = "specialization"/> 
                                        </FormGroup>
                                        <FormGroup className="form-year">
                                            <Label htmlFor = "year_of_graduating" > Год окончания < /Label> 
                                            <Input type = "text" id = "year_of_graduating" name = "year_of_graduating"/> 
                                        </FormGroup>
                                       
                                    </div>
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "course_specialization" > Специализация < /Label> 
                                            <Input type = "text" id = "course_specialization" name = "course_specialization" /> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "course_institution" > Учебное заведение < /Label> 
                                            <Input type = "text" id = "course_institution" name = "course_institution" /> 
                                        </FormGroup> 
                                        <FormGroup className="form-year">
                                            <Label htmlFor = "year_of_course_finishing" > Год окончания < /Label> 
                                            <Input type = "text" id = "year_of_course_finishing" name = "year_of_course_finishing" /> 
                                        </FormGroup> 
                        
                                    </div>
                            </div>
                            <div className="title__blocks">
                                <div className="title__block"><div className="form__title">Опыт вождения</div>
                                <hr/>
                                </div>
                                <div className="title__block"><div className="form__title">Иностранные языки</div>
                                <hr/>
                                </div>
                            </div>
                            <div className="form__main">
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "car_license" > Права категории < /Label> 
                                            <select name="car_license" id="car_license">
                                                <option selected value="Нет прав">Нет прав</option>
                                                <option value="Категория А">Категория А</option>
                                                <option value="Категория B">Категория B</option>
                                                <option value="Категория C">Категория C</option>
                                                <option value="Категория D">Категория D</option>
                                             </select>
                                        </FormGroup> 
                                        
                                    </div>
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "language" > Язык < /Label> 
                                            <Input type = "text" id = "language" name = "language" /> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "language_level" > Уровень владения < /Label> 
                                            <select name="language_level" id="language_level">
                                                <option selected value="Читаю и перевожу со словарём">Читаю и перевожу со словарём</option>
                                                <option value="Могу проходить собеседования">Могу проходить собеседования</option>
                                                <option value="Свободно владею">Свободно владею</option>
                                             </select>
                                        </FormGroup> 
                                    </div>
                            </div> 
                            <div className="form__btn"><button className="submit-btn" type = "submit" > Сохранить < /button> </div>
                        </Form> 
                    </div> 
                </div>
    );
    }
 
}

export default FormComp;