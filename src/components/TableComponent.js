import React, { Component } from 'react';

function RenderWorker({worker, onClick}){
    return(
        <tr className="stuff__item"><td><img className="stuff__img" width="50%" src={worker.image} alt={worker.name} /></td><td>{worker.name}</td><td>{worker.surname}</td><td>{worker.date_birth}</td><td>{worker.age}</td><td>{worker.position}</td><td>{worker.homework}</td><td>{worker.adress}</td></tr>
    );
}

  const Table = (props) => {

        const workers = props.workers.map((worker) => {
            return (
                    <RenderWorker worker={worker}/>
            );
        });
        return ( 
            <div className="stuff-content container">
            <div className="stuff__buttons">
                <button className="stuff__add">Добавить</button>
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
            </div>
        );
    }

export default Table;