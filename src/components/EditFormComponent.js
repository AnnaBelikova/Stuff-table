import React from 'react';
import {  Form, FormGroup, Input, Label} from 'reactstrap';



function EditForm(props){

const [worker] = React.useState({...props.worker});
const [id] = React.useState(worker.id);
const [image] = React.useState(worker.image);
const [name, setName] = React.useState(worker.name);
const [surname, setSurname] = React.useState(worker.surname);
const [date_of_hiring, setDate_of_hiring] = React.useState(worker.date_of_hiring);
const [position, setPosition] = React.useState(worker.position);
const [homework, setHomework] = React.useState(worker.homework);
const [city, setСity] = React.useState(worker.city);
const [street, setStreet] = React.useState(worker.street);
const [house, setHouse] = React.useState(worker.house);
const [flat, setFlat] = React.useState(worker.flat);
const [department, setDepartment] = React.useState(worker.department);
const [salary, setSalary] = React.useState(worker.salary);
const [date_of_birth, setDate_of_birth] = React.useState(worker.date_of_birth);
const [place_of_birth, setPlace_of_birth] = React.useState(worker.place_of_birth);
const [nationality, setNationality] = React.useState(worker.nationality);
const [family, setFamily] = React.useState(worker.family);
const [children, setChildren] = React.useState(worker.children);
const [education, setEducation] = React.useState(worker.education);
const [educational_institution, setEducational_institution] = React.useState(worker.educational_institution);
const [document_education, setDocument_education] = React.useState(worker.document_education);
const [specialization, setSpecialization] = React.useState(worker.specialization);
const [year_of_graduating, setYear_of_graduating] = React.useState(worker.year_of_graduating);
const [course_specialization, setCourse_specialization] = React.useState(worker.course_specialization);
const [course_institution, setCourse_institution] = React.useState(worker.course_institution);
const [year_of_course_finishing, setYear_of_course_finishing] = React.useState(worker.year_of_course_finishing);
const [car_license, setCar_licanse] = React.useState(worker.car_license);
const [language, setLanguage] = React.useState(worker.language);
const [language_level, setLanguage_level] = React.useState(worker.language_level);
 
    

            return (
                <div className="form__container container" >
                    <div className=" form__header" > 
                        Редактирование
                    </div> 
                    <div className="form__body ">
                        <Form action="http://table.cw44189.tmweb.ru/worker_edit.php" method="post" enctype="multipart/form-data" >
                            <Input type = "text" id = "worker_id" name = "worker_id" value={`${id}`}/> 
                            <div className="form__main">
                                <div className="main_block">
                                    <FormGroup >
                                        <div className="imgPreview">
                                            <img src={`${image}`} alt="portrait_edit"/>
                                        </div>
                                        <Input type = "file" id = "worker_photo" name = "worker_photo"/> 
                                    </FormGroup >
                                </div>
                                    <div className="main_block">
                                        <FormGroup >
                                            <Label htmlFor = "name" > Имя < /Label> 
                                            <Input type = "text" id = "name" name = "name"  value={`${name}`} onChange={function(event) {setName(event.target.value)}}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "surname" > Фамилия < /Label> 
                                            <Input type = "text" id = "surname" name = "surname" value={`${surname}`} onChange={function(event) {setSurname(event.target.value)}}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "date_of_hiring" > Дата принятия на работу < /Label> 
                                            <input type = "date" id = "date_of_hiring" name="date_of_hiring" value={`${date_of_hiring}`} onChange={function(event) {setDate_of_hiring(event.target.value)}}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "position" > Должность < /Label> 
                                            <Input type = "text" id = "position" name = "position" value={`${position}`} onChange={function(event) {setPosition(event.target.value)}}/> 
                                        </FormGroup>
                                        <FormGroup className="group-check">
                                            <input className="input-check" type="checkbox" id = "homework" name = "homework" checked={`${homework}`} onChange={function(event) {setHomework(event.target.checked)}}/> 
                                            <Label className="label-check" htmlFor = "homework" > Удаленная работа < /Label> 
                                        </FormGroup> 
                                        
                                    </div>
                                    <div className="main_block">
                                        <FormGroup >
                                            <Label htmlFor = "city" > Город < /Label> 
                                            <Input type = "text" id = "city" name = "city" value={`${city}`} onChange={function(event) {setСity(event.target.value)}}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "street" > Улица < /Label> 
                                            <Input type = "text" id = "street" name = "street" value={`${street}`} onChange={function(event) {setStreet(event.target.value)}}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "house" > Дом < /Label> 
                                            <Input type = "number" id = "house" name = "house" value={`${house}`} onChange={function(event) {setHouse(event.target.value)}}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "flat" > Квартира < /Label> 
                                            <Input type = "number" id = "flat" name = "flat" value={`${flat}`} onChange={function(event) {setFlat(event.target.value)}}/> 
                                        </FormGroup> 
                                    </div>
                            </div>
                            <div className="form__department">
                                <FormGroup >
                                    <Label htmlFor = "department" > Подразделение < /Label> 
                                    <select id="department" name="department" value={`${department}`} onChange={function(event) {setDepartment(event.target.value)}}>
                                        <option disabled selected="selected">Выберите подразделение</option>
                                        <option value="Технический отдел">Технический отдел</option>
                                        <option value="IT - отдел">IT - отдел</option>
                                        <option value="Отдел маркетинга">Отдел маркетинга</option>
                                        <option value="Бухгалтерия">Бухгалтерия</option>
                                    </select>
                                </FormGroup>
                                <FormGroup >
                                    <Label htmlFor = "salary" > Оклад < /Label> 
                                    <Input type = "number" id = "salary" name = "salary" value={`${salary}`} onChange={function(event) {setSalary(event.target.value)}}/>
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
                                            <Input type = "date" id = "date_of_birth" name = "date_of_birth" value={`${date_of_birth}`} onChange={function(event) {setDate_of_birth(event.target.value)}}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "place_of_birth" > Место рождения < /Label> 
                                            <Input type = "text" id = "place_of_birth" name = "place_of_birth" value={`${place_of_birth}`} onChange={function(event) {setPlace_of_birth(event.target.value)}}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "nationality" > Гражданство < /Label> 
                                            <Input type = "text" id = "nationality" name = "nationality" value={`${nationality}`} onChange={function(event) {setNationality(event.target.value)}}/> 
                                        </FormGroup> 
                                        
                                    </div>
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "family" > Семейное положение < /Label> 
                                            <select name="family" id = "family" value={`${family}`} onChange={function(event) {setFamily(event.target.value)}}>
                                                <option selected value="Не замужем/не женат">Не замужем/не женат</option>
                                                <option value="Разведен/разведена">Разведен/разведена</option>
                                                <option value="Замужем/женат">Замужем/женат</option>
                                            </select>
                                        </FormGroup> 
                                         <FormGroup className="group-check">
                                            <input className="input-check" type="checkbox" id = "children" name = "children" checked={`${children}`} onChange={function(event) {setChildren(event.target.checked)}}/> 
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
                                             <select name="education" id="education" value={`${education}`} onChange={function(event) {setEducation(event.target.value)}}>
                                                <option value="Высшее">Высшее</option>
                                                <option value="Неполное высшее">Неполное высшее</option>
                                                <option value="Среднее специальное">Среднее специальное</option>
                                                <option value="Среднее">Среднее</option>
                                             </select>
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "educational_institution" > Учебное заведение < /Label> 
                                            <Input type = "text" id = "educational_institution" name = "educational_institution" value={`${educational_institution}`} onChange={function(event) {setEducational_institution(event.target.value)}}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "document_education" > Документ об образовании < /Label> 
                                            <Input type = "text" id = "document_education" name = "document_education" value={`${document_education}`} onChange={function(event) {setDocument_education(event.target.value)}}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "specialization" > Специальность < /Label> 
                                            <Input type = "text" id = "specialization" name = "specialization" value={`${specialization}`} onChange={function(event) {setSpecialization(event.target.value)}}/> 
                                        </FormGroup>
                                        <FormGroup className="form-year">
                                            <Label htmlFor = "year_of_graduating" > Год окончания < /Label> 
                                            <Input type = "text" id = "year_of_graduating" name = "year_of_graduating" value={`${year_of_graduating}`} onChange={function(event) {setYear_of_graduating(event.target.value)}}/> 
                                        </FormGroup>
                                       
                                    </div>
                                    <div className="form_block">
                                        <FormGroup >
                                            <Label htmlFor = "course_specialization" > Специализация < /Label> 
                                            <Input type = "text" id = "course_specialization" name = "course_specialization" value={`${course_specialization}`} onChange={function(event) {setCourse_specialization(event.target.value)}}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "course_institution" > Учебное заведение < /Label> 
                                            <Input type = "text" id = "course_institution" name = "course_institution" value={`${course_institution}`} onChange={function(event) {setCourse_institution(event.target.value)}}/> 
                                        </FormGroup> 
                                        <FormGroup className="form-year">
                                            <Label htmlFor = "year_of_course_finishing" > Год окончания < /Label> 
                                            <Input type = "text" id = "year_of_course_finishing" name = "year_of_course_finishing" value={`${year_of_course_finishing}`} onChange={function(event) {setYear_of_course_finishing(event.target.value)}}/> 
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
                                            <select name="car_license" id="car_license" value={`${car_license}`} onChange={function(event) {setCar_licanse(event.target.value)}}>
                                                <option value="Нет прав">Нет прав</option>
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
                                            <Input type = "text" id = "language" name = "language" value={`${language}`} onChange={function(event) {setLanguage(event.target.value)}}/> 
                                        </FormGroup> 
                                        <FormGroup >
                                            <Label htmlFor = "language_level" > Уровень владения < /Label> 
                                            <select name="language_level" id="language_level" value={`${language_level}`} onChange={function(event) {setLanguage_level(event.target.value)}}>
                                                <option value="Читаю и перевожу со словарём">Читаю и перевожу со словарём</option>
                                                <option value="Могу проходить собеседования">Могу проходить собеседования</option>
                                                <option value="Свободно владею">Свободно владею</option>
                                             </select>
                                        </FormGroup> 
                                    </div>
                            </div> 
                            
                                <div className="form__btn"><button className="submit-btn" type = "submit" > Сохранить < /button></div>
                            
                        </Form> 

                    </div> 
                </div>
            )
        }
   



export default EditForm;